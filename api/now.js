import { readNowContent } from '../server/nowStore.js';
import { defaultNowContent } from '../server/nowDefaults.js';
import { publicNowContent } from '../src/utils/nowContent.js';
import { storageConfigured } from '../server/adminAuth.js';

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'GET') { response.setHeader('Allow', 'GET'); return response.status(405).json({error:'Método não permitido.'}); }
  try {
    const { content } = storageConfigured() ? await readNowContent() : { content: defaultNowContent() };
    return response.status(200).json(publicNowContent(content));
  } catch {
    // The client keeps its existing content on a transient read failure.
    return response.status(503).json({error:'Não foi possível carregar os projetos atuais.'});
  }
}
