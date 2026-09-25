import React from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, FolderGit2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import { projectsCaseStudies, projectCategories } from '../data/projectsData';
export default function ProjectCaseStudy({ project, onBackToProjects, onSelectCaseStudy, onBackHome, lang = 'pt' }) {
  const pt = lang === 'pt';
  if (!project) return <section className="section project-page-wrapper"><div className="container"><h1>{pt ? 'Projeto não encontrado' : 'Project not found'}</h1><button className="btn btn-primary" onClick={onBackToProjects}>{pt ? 'Ver projetos' : 'View projects'}</button></div></section>;
  const next = projectsCaseStudies[(projectsCaseStudies.indexOf(project) + 1) % projectsCaseStudies.length];
  return <article className="section case-study-view project-page-wrapper">
    <div className="container project-detail-container">
      <nav className="case-study-top-bar" aria-label={pt ? 'Navegação do projeto' : 'Project navigation'}>
        <button className="blog-back-btn" onClick={onBackToProjects}><ArrowLeft size={16} />{pt ? 'Todos os projetos' : 'All projects'}</button>
        <button className="breadcrumb-link" onClick={() => onBackHome()}>{pt ? 'Início' : 'Home'}</button>
      </nav>
      <SpotlightCard className="case-study-header-card">
        <div className="project-window-bar"><span className="project-category">{projectCategories[project.category][lang]}</span><span className="project-badge-pill">{project.status[lang]}</span></div>
        <div className="case-study-header-inner">
          <h1 className="case-study-main-heading">{project.title}</h1>
          <p className="case-study-lead-tagline">{project.summary[lang]}</p>
          <div className="case-study-header-stack">{project.tags.map(tag => <span className="case-study-tech-pill" key={tag}>{tag}</span>)}</div>
          <div className="case-study-header-links">
            {project.links.demo && <a className="btn btn-primary" href={project.links.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />Demo</a>}
            {project.links.github && <a className="btn btn-outline" href={project.links.github} target="_blank" rel="noopener noreferrer"><FolderGit2 size={16} />{pt ? 'Ver código' : 'View code'}</a>}
          </div>
        </div>
      </SpotlightCard>
      <section className="case-study-section"><h2 className="case-study-section-heading">{pt ? 'O projeto' : 'The project'}</h2><p className="case-study-paragraph">{project.context[lang]}</p></section>
      <section className="case-study-section">
        <h2 className="case-study-section-heading">{pt ? 'Funcionalidades' : 'Features'}</h2>
        <ul className="project-feature-list">
          {project.features[lang].map((feature, i) => {
            const isImplemented = feature.startsWith('Implementado:') || feature.startsWith('Implemented:');
            const isPlanned = feature.startsWith('Planeado:') || feature.startsWith('Planned:');
            if (isImplemented || isPlanned) {
              const colonIndex = feature.indexOf(':');
              const tagLabel = feature.slice(0, colonIndex).trim();
              const text = feature.slice(colonIndex + 1).trim();
              return (
                <li key={i} className="project-feature-tagged">
                  <span className={`feature-status-tag ${isImplemented ? 'tag-implemented' : 'tag-planned'}`}>{tagLabel}</span>
                  <span>{text}</span>
                </li>
              );
            }
            return <li key={i}>{feature}</li>;
          })}
        </ul>
      </section>
      <section className="case-study-section"><h2 className="case-study-section-heading">{pt ? 'Como está organizado' : 'How it is organised'}</h2><p className="case-study-paragraph">{project.technical[lang]}</p></section>
      <section className="case-study-section"><h2 className="case-study-section-heading">{pt ? 'Estado e âmbito' : 'Status and scope'}</h2><p className="case-study-paragraph">{project.scope[lang]}</p></section>
      {project.links?.github && project.evidence?.length > 0 && <section className="case-study-section"><h2 className="case-study-section-heading">{pt ? 'Explorar no código' : 'Explore the source'}</h2><ul className="project-source-list">{project.evidence.map(path => <li key={path}><a href={`${project.links.github}/tree/main/${path}`} target="_blank" rel="noopener noreferrer">{path}<ExternalLink size={13} /></a></li>)}</ul></section>}
      <div className="case-study-footer-nav"><button className="btn btn-outline" onClick={onBackToProjects}><ArrowLeft size={16} />{pt ? 'Projetos' : 'Projects'}</button><button className="btn btn-outline" onClick={() => onSelectCaseStudy(next.slug)}>{next.title}<ArrowRight size={16} /></button><a className="btn btn-primary" href="/#contacto" onClick={e => { e.preventDefault(); onBackHome('contacto'); }}>{pt ? 'Contactar' : 'Contact'}</a></div>
    </div>
  </article>;
}
