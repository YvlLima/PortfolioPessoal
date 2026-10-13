import React, { useEffect, useRef, useState } from 'react';
import { LogIn, Plus, Save, ArrowUp, ArrowDown, Trash2, LogOut, ArrowLeft, Eye, LockKeyhole } from 'lucide-react';
import NowProjectCards, { displayNowProjects } from './NowProjectCards';
import { nowIconNames, validateNowContent } from '../utils/nowContent';
import { projectsCaseStudies } from '../data/projectsData';
import useTheme from '../hooks/useTheme';

async function requestAdmin(action, options = {}) {
  const response = await fetch(`/api/admin?action=${action}`, {credentials:'same-origin', ...options});
  let data;
  try { data = await response.json(); } catch { throw new Error('O serviço de administração não está disponível.'); }
  if (!response.ok) {
    const error = new Error(data.error || 'Não foi possível concluir o pedido.');
    error.status = response.status;
    throw error;
  }
  return data;
}
const emptyTranslation = () => ({pt:'',en:''});
const newProject = () => ({id:`now-${crypto.randomUUID()}`,visible:true,iconName:'Code2',title:emptyTranslation(),status:{pt:'Em desenvolvimento',en:'In development'},badge:emptyTranslation(),shortDesc:emptyTranslation(),linkText:emptyTranslation(),slug:'',link:''});
const callbackErrors = {
  login:'Não foi possível iniciar sessão. Tenta novamente.',
  forbidden:'Apenas a conta GitHub YvlLima tem acesso a este painel.',
  not_ready:'O acesso de administração ainda está a ser configurado.',
};
function Field({ label, value, onChange, maximum = 100, multiline = false, required = false, ...props }) {
  const Input = multiline ? 'textarea' : 'input';
  return <label className="admin-field"><span>{label}{required && ' *'}</span><Input {...props} value={value} onChange={event => onChange(event.target.value)} maxLength={maximum} required={required} rows={multiline ? 4 : undefined} /></label>;
}
export default function Admin() {
  useTheme();
  const [session,setSession] = useState(null);
  const [document,setDocument] = useState(null);
  const [baseline,setBaseline] = useState('');
  const [selected,setSelected] = useState(null);
  const [editLanguage,setEditLanguage] = useState('pt');
  const [busy,setBusy] = useState(false);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(callbackErrors[new URLSearchParams(window.location.search).get('error')] || '');
  const [notice,setNotice] = useState('');
  const [removing,setRemoving] = useState(null);
  const editorHeading = useRef(null);
  const dirty = Boolean(document && JSON.stringify(document.content) !== baseline);
  useEffect(() => {
    window.document.title = 'Administração | Gonçalo Lima';
    const robots = window.document.createElement('meta');
    robots.name = 'robots'; robots.content = 'noindex, nofollow'; window.document.head.appendChild(robots);
    let cancelled = false;
    (async () => {
      try {
        const nextSession = await requestAdmin('session');
        if (cancelled) return;
        setSession(nextSession);
        if (nextSession.authenticated) {
          const nextDocument = await requestAdmin('content');
          if (cancelled) return;
          setDocument(nextDocument); setBaseline(JSON.stringify(nextDocument.content));
          setSelected(nextDocument.content.projects[0]?.id || null);
        }
      } catch (failure) { if (!cancelled) setError(failure.message); }
      finally { if (!cancelled) setLoading(false); }
    })();
    return () => {cancelled=true;robots.remove();};
  }, []);
  useEffect(() => {
    if (!dirty) return;
    const guard = event => {event.preventDefault();event.returnValue='';};
    window.addEventListener('beforeunload',guard);
    return () => window.removeEventListener('beforeunload',guard);
  }, [dirty]);
  useEffect(() => { editorHeading.current?.focus({preventScroll:true}); }, [selected]);
  const updateContent = transform => {setNotice('');setDocument(previous => ({...previous,content:transform(previous.content)}));};
  const updateProject = (id,field,value) => updateContent(content => ({...content,projects:content.projects.map(project => project.id === id ? {...project,[field]:value} : project)}));
  const reorder = (id,direction) => updateContent(content => {
    const projects = [...content.projects], index = projects.findIndex(project => project.id === id), next = index+direction;
    if (next < 0 || next >= projects.length) return content;
    [projects[index],projects[next]]=[projects[next],projects[index]];
    return {...content,projects};
  });
  const publish = async event => {
    event.preventDefault();setError('');setNotice('');
    let content;
    try {content=validateNowContent(document.content);} catch(failure) {setError(failure.message);return;}
    setBusy(true);
    try {
      const saved = await requestAdmin('content',{method:'PUT',headers:{'Content-Type':'application/json','X-CSRF-Token':session.csrf},body:JSON.stringify({content,revision:document.revision})});
      setDocument(saved);setBaseline(JSON.stringify(saved.content));setNotice('Publicado. A secção Agora já está atualizada para todos os visitantes.');
    } catch(failure) {
      setError(failure.message);
      if(failure.status===401) setSession(previous=>({...previous,authenticated:false}));
    } finally {setBusy(false);}
  };
  const logout = async () => {
    setBusy(true);setError('');
    try {
      await requestAdmin('logout',{method:'POST',headers:{'X-CSRF-Token':session.csrf}});
      setSession(previous=>({...previous,authenticated:false}));setDocument(null);setNotice('Sessão terminada.');
    } catch(failure) {setError(failure.message);} finally{setBusy(false);}
  };
  const project = document?.content.projects.find(item=>item.id===selected);
  const pt = editLanguage === 'pt';
  return <div className="admin-page">
    <header className="admin-header"><a href="/" className="admin-brand">dev<span className="accent">.lima</span><span className="admin-label">Administração</span></a><a href="/#agora" className="admin-back"><ArrowLeft size={16}/> Ver site</a></header>
    <main className="admin-container">
      {loading ? <p role="status">A verificar a sessão…</p> : !session?.authenticated ? <div className="admin-login-card">
        <span className="admin-login-icon"><LockKeyhole size={26}/></span>
        <p className="admin-eyebrow">ÁREA PESSOAL</p><h1>O que estás a construir?</h1><p>Entra para atualizar os teus projetos e o que estás a aprender na secção Agora.</p>
        {error && <p role="alert" className="admin-alert">{error}</p>}
        {notice && <p role="status" className="admin-notice">{notice}</p>}
        {session?.configured ? <a href="/api/admin?action=login" className="btn btn-primary"><LogIn size={19}/> Entrar com GitHub</a> : <p className="admin-alert">{session ? 'O login ainda está a ser configurado.' : 'Não foi possível verificar o login.'}</p>}
        <small>Acesso reservado à conta YvlLima.</small>
      </div> : <>
        <div className="admin-heading"><div><p className="admin-eyebrow">O TEU PORTFÓLIO</p><h1>Gerir a secção Agora</h1><p>Atualiza os projetos em curso. Publica quando estiverem prontos.</p></div><button type="button" className="btn btn-outline" onClick={logout} disabled={busy || dirty}><LogOut size={16}/> Sair</button></div>
        {error && <p role="alert" className="admin-alert">{error}</p>}
        {notice && <p role="status" className="admin-notice">{notice}</p>}
        {document ? <form onSubmit={publish}>
          <fieldset disabled={busy} className="admin-fieldset">
            <div className="admin-toolbar"><div className="hero-mode-switch" role="group" aria-label="Idioma de edição"><button type="button" aria-pressed={pt} onClick={()=>setEditLanguage('pt')}>Português</button><button type="button" aria-pressed={!pt} onClick={()=>setEditLanguage('en')}>English</button></div><span>{dirty ? 'Alterações por publicar' : 'Tudo publicado'}</span>{dirty && <button type="button" className="btn btn-outline" onClick={()=>{setDocument(previous=>({...previous,content:JSON.parse(baseline)}));setNotice('Alterações do rascunho descartadas.');setError('');}}>Descartar rascunho</button>}</div>
            <Field label={`Subtítulo da secção (${pt?'PT':'EN'})`} value={document.content.subtitle[editLanguage]} maximum={240} required={pt} onChange={value=>updateContent(content=>({...content,subtitle:{...content.subtitle,[editLanguage]:value}}))}/>
            {!pt && <p className="admin-hint">Campos em inglês vazios usam o texto português.</p>}
            <div className="admin-workspace">
              <aside className="admin-project-list"><div className="admin-list-heading"><h2>Projetos <span>({document.content.projects.length})</span></h2><button type="button" className="admin-icon-button" aria-label="Adicionar projeto" disabled={document.content.projects.length>=24} onClick={()=>{const item=newProject();updateContent(content=>({...content,projects:[...content.projects,item]}));setSelected(item.id);}}><Plus size={20}/></button></div>
                {document.content.projects.map((item,index)=><div key={item.id} className={`admin-project-row ${selected===item.id?'selected':''}`}>
                  <button type="button" className="admin-project-select" aria-pressed={selected===item.id} onClick={()=>{setSelected(item.id);setRemoving(null);}}><span>{item.title.pt || 'Novo projeto'}</span><small>{item.visible?'Visível no site':'Oculto'}</small></button>
                  <div className="admin-row-actions"><button type="button" className="admin-icon-button" aria-label={`Subir ${item.title.pt || 'projeto'}`} disabled={index===0} onClick={()=>reorder(item.id,-1)}><ArrowUp size={14}/></button><button type="button" className="admin-icon-button" aria-label={`Descer ${item.title.pt || 'projeto'}`} disabled={index===document.content.projects.length-1} onClick={()=>reorder(item.id,1)}><ArrowDown size={14}/></button></div>
                </div>)}
                {!document.content.projects.length && <p className="admin-hint">Adiciona o primeiro projeto com o botão +.</p>}
              </aside>
              <section className="admin-editor" aria-label="Editar projeto">
                {project ? <><div className="admin-editor-heading"><h2 ref={editorHeading} tabIndex={-1}>{project.title.pt || 'Novo projeto'}</h2><label className="admin-visibility"><input type="checkbox" checked={project.visible} onChange={event=>updateProject(project.id,'visible',event.target.checked)}/> Visível</label></div>
                  <div className="admin-fields-grid">
                    <Field label={`Nome (${pt?'PT':'EN'})`} value={project.title[editLanguage]} required={pt} onChange={value=>updateProject(project.id,'title',{...project.title,[editLanguage]:value})}/>
                    <Field label={`Estado (${pt?'PT':'EN'})`} value={project.status[editLanguage]} maximum={80} required={pt} onChange={value=>updateProject(project.id,'status',{...project.status,[editLanguage]:value})}/>
                    <Field label={`Tecnologias / etiqueta (${pt?'PT':'EN'})`} value={project.badge[editLanguage]} onChange={value=>updateProject(project.id,'badge',{...project.badge,[editLanguage]:value})}/>
                    <label className="admin-field"><span>Ícone</span><select value={project.iconName} onChange={event=>updateProject(project.id,'iconName',event.target.value)}>{nowIconNames.map(name=><option key={name} value={name}>{({Code2:'Código',Gamepad2:'Jogo',GraduationCap:'Formação',Shield:'Segurança',Bot:'Bot',Rocket:'Projeto',Cpu:'Sistemas'})[name]}</option>)}</select></label>
                  </div>
                  <Field label={`Descrição (${pt?'PT':'EN'})`} value={project.shortDesc[editLanguage]} multiline maximum={1800} required={pt} onChange={value=>updateProject(project.id,'shortDesc',{...project.shortDesc,[editLanguage]:value})}/>
                  <label className="admin-field"><span>Associar a um projeto do portfólio</span><select value={project.slug} onChange={event=>updateProject(project.id,'slug',event.target.value)}><option value="">Sem associação — usar ligação abaixo</option>{projectsCaseStudies.map(item=><option key={item.slug} value={item.slug}>{item.title}</option>)}</select></label>
                  <div className="admin-fields-grid"><Field label="Ligação (opcional)" value={project.link} maximum={500} placeholder="https://… ou #educacao" disabled={Boolean(project.slug)} onChange={value=>updateProject(project.id,'link',value)}/><Field label={`Texto do botão (${pt?'PT':'EN'})`} value={project.linkText[editLanguage]} maximum={80} onChange={value=>updateProject(project.id,'linkText',{...project.linkText,[editLanguage]:value})}/></div>
                  {removing===project.id ? <div className="admin-delete-confirm"><p>Remover este projeto do rascunho? A alteração só fica pública quando publicares.</p><button type="button" className="btn btn-outline" onClick={()=>{updateContent(content=>({...content,projects:content.projects.filter(item=>item.id!==project.id)}));setSelected(null);setRemoving(null);}}>Remover do rascunho</button><button type="button" className="btn btn-outline" onClick={()=>setRemoving(null)}>Cancelar</button></div> : <button type="button" className="admin-remove" onClick={()=>setRemoving(project.id)}><Trash2 size={15}/> Remover projeto</button>}
                </> : <p className="admin-hint">Seleciona ou adiciona um projeto para editar.</p>}
              </section>
            </div>
          </fieldset>
          <section className="admin-preview"><div className="admin-preview-heading"><h2><Eye size={18}/> Pré-visualização</h2><span>{pt?'Português':'English'}</span></div><p className="projects-subtitle-text">{document.content.subtitle[editLanguage] || document.content.subtitle.pt}</p><NowProjectCards projects={displayNowProjects(document.content,editLanguage)} lang={editLanguage} preview/>{!document.content.projects.some(item=>item.visible) && <p className="admin-hint">Sem projetos visíveis.</p>}</section>
          <div className="admin-publish-bar"><div><strong>{dirty?'Pronto para atualizar o site?':'Sem alterações por publicar'}</strong><small>{document.updatedAt ? `Última publicação: ${new Date(document.updatedAt).toLocaleString('pt-PT')}` : 'O conteúdo atual foi importado do portfólio.'}</small></div><button type="submit" className="btn btn-primary" disabled={busy || !dirty}><Save size={17}/>{busy?'A publicar…':'Publicar alterações'}</button></div>
        </form> : <button className="btn btn-outline" onClick={()=>window.location.reload()}>Tentar novamente</button>}
      </>}
    </main>
  </div>;
}
