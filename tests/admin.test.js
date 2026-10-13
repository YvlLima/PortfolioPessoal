import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { OWNER_ID, signToken, verifyToken, cookie, cookieName, validMutation } from '../server/adminAuth.js';
import { defaultNowContent } from '../server/nowDefaults.js';
import { validateNowContent, publicNowContent, safeProjectLink } from '../src/utils/nowContent.js';
import admin from '../api/admin.js';

process.env.ADMIN_SESSION_SECRET = 'test-only-session-secret-never-used-in-production-123456';
process.env.ADMIN_ORIGIN = 'https://www.goncalolima.pt';
function response() {
  return {headers:{},statusCode:200,setHeader(name,value){this.headers[name]=value;},status(code){this.statusCode=code;return this;},json(value){this.body=value;return this;},redirect(code,url){this.statusCode=code;this.location=url;return this;}};
}
const sessionPayload = () => ({kind:'session',userId:OWNER_ID,csrf:'test-only-csrf-token-for-request-verification-1234',exp:Date.now()+60000});
test('admin sessions reject forgery, wrong owners, expired and wrong-kind tokens', () => {
  const payload=sessionPayload(), signed=signToken(payload);
  assert.equal(verifyToken(signed,'session').userId,OWNER_ID);
  assert.equal(verifyToken(`${signed.slice(0,-3)}xxx`,'session'),null);
  assert.equal(verifyToken(signToken({...payload,userId:123}),'session'),null);
  assert.equal(verifyToken(signToken({...payload,exp:Date.now()-1}),'session'),null);
  assert.equal(verifyToken(signed,'oauth'),null);
  assert.equal(verifyToken('bad','session'),null);
  assert.match(cookie('session',signed,600), /HttpOnly; SameSite=Lax/);
  assert.match(cookie('session',signed,600), /Secure/);
  assert.ok(cookieName('session').startsWith('__Host-'));
});
test('publishing requires both the exact site origin and the session CSRF token', () => {
  const session=sessionPayload();
  const request={headers:{origin:process.env.ADMIN_ORIGIN,'x-csrf-token':session.csrf}};
  assert.equal(validMutation(request,session),true);
  assert.equal(validMutation({headers:{...request.headers,origin:'https://evil.example'}},session),false);
  assert.equal(validMutation({headers:{origin:process.env.ADMIN_ORIGIN}},session),false);
});
test('content validation rejects unsafe links, duplicate ids and excessive content', () => {
  assert.equal(safeProjectLink('#educacao'),'#educacao');
  assert.equal(safeProjectLink('/projetos/sengoku'),'/projetos/sengoku');
  for (const link of ['javascript:alert(1)','data:text/html,bad','//evil.example','/\\evil.example','https://username:password@example.com','http://example.com']) assert.throws(()=>safeProjectLink(link));
  const content=defaultNowContent();
  assert.throws(()=>validateNowContent({...content,projects:[content.projects[0],content.projects[0]]}));
  assert.throws(()=>validateNowContent({...content,projects:Array(25).fill(content.projects[0])}));
  assert.throws(()=>validateNowContent({...content,subtitle:{pt:'a'.repeat(241),en:''}}));
  content.projects[0].title.en='';
  assert.equal(validateNowContent(content).projects[0].title.en,content.projects[0].title.pt);
  content.projects[0].visible=false;
  assert.equal(publicNowContent(content).projects.length,1);
  assert.equal('visible' in publicNowContent(content).projects[0],false);
});
test('admin endpoint denies unauthenticated writes and authenticated cross-site writes',async()=>{
  const unauthorized=response();
  await admin({url:'/api/admin?action=content',method:'PUT',headers:{},body:{content:defaultNowContent(),revision:null}},unauthorized);
  assert.equal(unauthorized.statusCode,401);
  process.env.BLOB_STORE_ID='test-only-store';
  try {
    const denied=response(), payload=sessionPayload();
    await admin({url:'/api/admin?action=content',method:'PUT',headers:{cookie:`${cookieName('session')}=${signToken(payload)}`,origin:'https://evil.example','x-csrf-token':payload.csrf}},denied);
    assert.equal(denied.statusCode,403);
  } finally {delete process.env.BLOB_STORE_ID;}
});
test('OAuth uses PKCE, rejects a mismatched state and never grants access to another account',async()=>{
  process.env.GITHUB_CLIENT_ID='test-client';process.env.GITHUB_CLIENT_SECRET='test-client-secret';process.env.BLOB_STORE_ID='test-only-store';
  const originalFetch=globalThis.fetch;
  try {
    const start=response();
    await admin({url:'/api/admin?action=login',method:'GET',headers:{}},start);
    assert.equal(start.statusCode,303);
    const oauthCookie=start.headers['Set-Cookie'].split(';')[0], token=oauthCookie.slice(oauthCookie.indexOf('=')+1);
    const flow=verifyToken(token,'oauth'), url=new URL(start.location);
    assert.equal(url.searchParams.get('code_challenge'),createHash('sha256').update(flow.verifier).digest('base64url'));
    assert.equal(url.searchParams.get('scope'),'');
    const mismatch=response();
    await admin({url:'/api/admin?action=callback&code=test&state=wrong',method:'GET',headers:{cookie:oauthCookie}},mismatch);
    assert.match(mismatch.location,/error=login$/);
    const loginRequest={url:`/api/admin?action=callback&code=test&state=${flow.state}`,method:'GET',headers:{cookie:oauthCookie}};
    globalThis.fetch=async url=>new Response(JSON.stringify(String(url).endsWith('/user')?{id:42}:{access_token:'test-access-token'}));
    const forbidden=response();await admin(loginRequest,forbidden);
    assert.match(forbidden.location,/error=forbidden$/);
    assert.equal(Array.isArray(forbidden.headers['Set-Cookie']),false);
    globalThis.fetch=async url=>new Response(JSON.stringify(String(url).endsWith('/user')?{id:OWNER_ID}:{access_token:'test-access-token'}));
    const allowed=response();await admin(loginRequest,allowed);
    assert.equal(allowed.location,`${process.env.ADMIN_ORIGIN}/admin`);
    assert.equal(allowed.headers['Set-Cookie'].length,2);
    assert.equal(JSON.stringify(allowed.headers).includes('test-access-token'),false);
  } finally {globalThis.fetch=originalFetch;delete process.env.GITHUB_CLIENT_ID;delete process.env.GITHUB_CLIENT_SECRET;delete process.env.BLOB_STORE_ID;}
});
