import { get, put } from '@vercel/blob';
import { defaultNowContent } from './nowDefaults.js';
import { validateNowContent } from '../src/utils/nowContent.js';
import { storageConfigured } from './adminAuth.js';

const PATH = 'portfolio/now-content.json';
export async function readNowContent() {
  if (!storageConfigured()) throw new Error('Storage not configured');
  const blob = await get(PATH, { access: 'private', useCache: false });
  if (!blob) return { content: defaultNowContent(), revision: null, updatedAt: null };
  const document = await new Response(blob.stream).json();
  return { content: validateNowContent(document.content), revision: blob.blob.etag, updatedAt: document.updatedAt };
}
export async function writeNowContent(content, revision) {
  const updatedAt = new Date().toISOString();
  const blob = await put(PATH, JSON.stringify({ content, updatedAt }), {
    access: 'private', addRandomSuffix: false, allowOverwrite: revision !== null,
    ...(revision === null ? {} : { ifMatch: revision }), contentType: 'application/json', cacheControlMaxAge: 60,
  });
  return { content, revision: blob.etag, updatedAt };
}
