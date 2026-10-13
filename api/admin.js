import { createHash } from 'node:crypto';
import { BlobPreconditionFailedError } from '@vercel/blob';
import { OWNER_ID, SESSION_AGE, adminOrigin, authConfigured, storageConfigured, randomToken, constantEqual, signToken, verifyToken, cookie, readCookie, sessionFrom, validMutation } from '../server/adminAuth.js';
import { readNowContent, writeNowContent } from '../server/nowStore.js';
import { validateNowContent } from '../src/utils/nowContent.js';

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('X-Robots-Tag', 'noindex, nofollow');
  const action = new URL(request.url, adminOrigin()).searchParams.get('action') || 'session';
  const fail = (status, error) => response.status(status).json({ error });
  const redirect = path => response.redirect(303, `${adminOrigin()}${path}`);
  const method = expected => request.method === expected;
  try {
    if (action === 'session') {
      if (!method('GET')) return fail(405, 'Método não permitido.');
      const session = sessionFrom(request);
      return response.status(200).json({ authenticated: Boolean(session), configured: authConfigured() && storageConfigured(), ...(session ? {login:'YvlLima',csrf:session.csrf} : {}) });
    }
    if (action === 'login') {
      if (!method('GET')) return fail(405, 'Método não permitido.');
      if (!authConfigured() || !storageConfigured()) return redirect('/admin?error=not_ready');
      const state = randomToken(), verifier = randomToken();
      response.setHeader('Set-Cookie', cookie('oauth', signToken({kind:'oauth',state,verifier,exp:Date.now()+600000}), 600));
      const query = new URLSearchParams({ client_id: process.env.GITHUB_CLIENT_ID, redirect_uri:`${adminOrigin()}/api/admin?action=callback`, state, code_challenge:createHash('sha256').update(verifier).digest('base64url'), code_challenge_method:'S256', scope:'', allow_signup:'false' });
      return response.redirect(303, `https://github.com/login/oauth/authorize?${query}`);
    }
    if (action === 'callback') {
      if (!method('GET')) return fail(405, 'Método não permitido.');
      const query = new URL(request.url, adminOrigin()).searchParams;
      const oauth = verifyToken(readCookie(request, 'oauth'), 'oauth');
      response.setHeader('Set-Cookie', cookie('oauth', '', 0));
      if (!authConfigured() || !oauth || !constantEqual(oauth.state, query.get('state')) || !query.get('code')) return redirect('/admin?error=login');
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method:'POST', headers:{Accept:'application/json','Content-Type':'application/json'}, signal:AbortSignal.timeout(12000),
        body:JSON.stringify({client_id:process.env.GITHUB_CLIENT_ID,client_secret:process.env.GITHUB_CLIENT_SECRET,code:query.get('code'),code_verifier:oauth.verifier,redirect_uri:`${adminOrigin()}/api/admin?action=callback`}),
      });
      if (!tokenResponse.ok) return redirect('/admin?error=login');
      const token = await tokenResponse.json();
      if (!token.access_token) return redirect('/admin?error=login');
      const identityResponse = await fetch('https://api.github.com/user', { headers:{Authorization:`Bearer ${token.access_token}`,Accept:'application/vnd.github+json','User-Agent':'GoncaloLima-Portfolio'}, signal:AbortSignal.timeout(12000) });
      if (!identityResponse.ok) return redirect('/admin?error=login');
      const identity = await identityResponse.json();
      if (identity.id !== OWNER_ID) return redirect('/admin?error=forbidden');
      const session = signToken({kind:'session',userId:OWNER_ID,csrf:randomToken(),exp:Date.now()+SESSION_AGE*1000});
      response.setHeader('Set-Cookie', [cookie('oauth','',0),cookie('session',session,SESSION_AGE)]);
      return redirect('/admin');
    }
    const session = sessionFrom(request);
    if (!session) return fail(401, 'Inicia sessão para gerir os projetos.');
    if (action === 'logout') {
      if (!method('POST')) return fail(405, 'Método não permitido.');
      if (!validMutation(request,session)) return fail(403, 'Pedido de sessão inválido.');
      response.setHeader('Set-Cookie',cookie('session','',0));
      return response.status(200).json({ok:true});
    }
    if (action !== 'content') return fail(404, 'Operação desconhecida.');
    if (!storageConfigured()) return fail(503, 'O armazenamento ainda não está configurado.');
    if (method('GET')) {
      const { content, revision, updatedAt } = await readNowContent();
      return response.status(200).json({ content, revision, updatedAt });
    }
    if (!method('PUT')) return fail(405, 'Método não permitido.');
    if (!validMutation(request,session)) return fail(403, 'Pedido de publicação inválido.');
    if (!request.headers['content-type']?.startsWith('application/json')) return fail(415, 'Formato inválido.');
    let body, content;
    try {
      body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
      if (!body || JSON.stringify(body).length > 65536) return fail(413, 'Os dados excedem o limite permitido.');
      content = validateNowContent(body.content);
      if (body.revision !== null && (typeof body.revision !== 'string' || body.revision.length > 200)) return fail(400,'Versão inválida.');
    } catch (error) { return fail(400,error.message || 'Dados inválidos.'); }
    const current = await readNowContent();
    if (current.revision !== body.revision && current.legacyRevision !== body.revision) return fail(409, 'Os projetos foram alterados noutra janela. Recarrega o painel antes de publicar.');
    try { return response.status(200).json(await writeNowContent(content,current.storageRevision)); }
    catch (error) {
      if (error instanceof BlobPreconditionFailedError || /already exists/i.test(error.message)) return fail(409,'Os projetos foram alterados noutra janela. Recarrega o painel.');
      throw error;
    }
  } catch (error) {
    console.error('portfolio_admin_failure', { action, name: error.name, message: String(error.message).replace(/(?:Bearer\s+\S+|vercel_blob_rw_\S+|gh[opsu]_[A-Za-z0-9_]+)/gi, '[redacted]').slice(0, 300) });
    if (action === 'callback') return redirect('/admin?error=login');
    return fail(503,'O serviço está temporariamente indisponível. Tenta novamente.');
  }
}
