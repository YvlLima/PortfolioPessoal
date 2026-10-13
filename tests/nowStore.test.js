import test from 'node:test';
import assert from 'node:assert/strict';
import { readNowContent, writeNowContent } from '../server/nowStore.js';
import { defaultNowContent } from '../server/nowDefaults.js';

test('successive updates use metadata ETags while browser revisions survive transport ETag differences', async () => {
  process.env.BLOB_STORE_ID = 'test-only-store';
  let stored = {content:defaultNowContent(),updatedAt:'2026-10-13T20:00:00.000Z'};
  let providerVersion = 1;
  const metadataRead = async () => ({etag:`provider-${providerVersion}`});
  const read = async () => ({stream:new Response(JSON.stringify(stored)).body,blob:{etag:`W/"http-${providerVersion}"`}});
  const upload = async (_path,body,options) => {
    assert.equal(options.ifMatch,`provider-${providerVersion}`);
    assert.equal(options.allowOverwrite,true);
    stored=JSON.parse(body);providerVersion++;
    return {etag:`provider-${providerVersion}`};
  };
  try {
    const first = await readNowContent({read,metadataRead});
    first.content.projects[0].visible=false;
    const saved = await writeNowContent(first.content,first.storageRevision,{upload});
    const reread = await readNowContent({read,metadataRead});
    assert.equal(saved.revision,reread.revision);
    assert.equal(reread.content.projects[0].visible,false);
    assert.notEqual(first.revision,reread.revision);
    reread.content.projects.reverse();
    const second = await writeNowContent(reread.content,reread.storageRevision,{upload});
    assert.equal(second.revision,(await readNowContent({read,metadataRead})).revision);
    assert.equal(stored.content.projects[0].id,'now-academic');
  } finally {delete process.env.BLOB_STORE_ID;}
});
