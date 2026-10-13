// Local UI fixture only: never deployed or imported by the application.
import { createServer } from 'node:http';
import { createServer as createViteServer } from 'vite';
import { defaultNowContent } from '../../server/nowDefaults.js';
import { validateNowContent, publicNowContent } from '../../src/utils/nowContent.js';

let content=defaultNowContent(),revision='fixture-0',updatedAt=null;
const csrf='local-ui-fixture-csrf';
const vite=await createViteServer({server:{middlewareMode:true},appType:'spa'});
const server=createServer(async(request,response)=>{
  const url=new URL(request.url,'http://localhost:5180');
  if(!url.pathname.startsWith('/api/')) return vite.middlewares(request,response);
  response.setHeader('Content-Type','application/json');response.setHeader('Cache-Control','no-store');
  if(url.pathname==='/api/now') return response.end(JSON.stringify(publicNowContent(content)));
  if(url.pathname!=='/api/admin') {response.statusCode=404;return response.end('{}');}
  const action=url.searchParams.get('action');
  if(action==='session') return response.end(JSON.stringify({authenticated:true,configured:true,login:'YvlLima',csrf}));
  if(action==='content' && request.method==='GET') return response.end(JSON.stringify({content,revision,updatedAt}));
  if(action==='content' && request.method==='PUT') {
    const chunks=[];for await(const chunk of request) chunks.push(chunk);
    const data=JSON.parse(Buffer.concat(chunks).toString());
    if(data.revision!==revision || request.headers['x-csrf-token']!==csrf) {response.statusCode=409;return response.end(JSON.stringify({error:'Conflito de edição.'}));}
    try {content=validateNowContent(data.content);revision=`fixture-${Date.now()}`;updatedAt=new Date().toISOString();return response.end(JSON.stringify({content,revision,updatedAt}));}
    catch(error){response.statusCode=400;return response.end(JSON.stringify({error:error.message}));}
  }
  response.statusCode=404;response.end('{}');
});
server.listen(5180,'127.0.0.1',()=>console.log('UI fixture: http://127.0.0.1:5180/admin'));
