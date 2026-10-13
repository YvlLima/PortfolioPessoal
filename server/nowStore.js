import { get, put, head, BlobNotFoundError } from '@vercel/blob';
import { createHash } from 'node:crypto';
import { defaultNowContent } from './nowDefaults.js';
import { validateNowContent } from '../src/utils/nowContent.js';
import { storageConfigured } from './adminAuth.js';

const PATH = 'portfolio/now-content.json';
export const contentRevision = document => createHash('sha256').update(JSON.stringify(document)).digest('hex');
export async function readNowContent({ read = get, metadataRead = head } = {}) {
  if (!storageConfigured()) throw new Error('Storage not configured');
  let metadata;
  try { metadata = await metadataRead(PATH); } catch (error) { if (!(error instanceof BlobNotFoundError)) throw error; }
  const blob = await read(PATH, { access: 'private', useCache: false });
  if (!blob) return { content: defaultNowContent(), revision: null, storageRevision: null, legacyRevision: null, updatedAt: null };
  if (!metadata?.etag) throw new Error('Storage revision unavailable');
  const document = await new Response(blob.stream).json();
  return { content: validateNowContent(document.content), revision: contentRevision(document), storageRevision: metadata.etag, legacyRevision: blob.blob.etag, updatedAt: document.updatedAt };
}
export async function writeNowContent(content, revision, { upload = put } = {}) {
  const updatedAt = new Date().toISOString();
  const document = { content, updatedAt };
  await upload(PATH, JSON.stringify(document), {
    access: 'private', addRandomSuffix: false, allowOverwrite: revision !== null,
    ...(revision === null ? {} : { ifMatch: revision }), contentType: 'application/json', cacheControlMaxAge: 60,
  });
  return { content, revision: contentRevision(document), updatedAt };
}
