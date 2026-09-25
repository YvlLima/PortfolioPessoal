import React, { useState } from 'react';
import { ArrowRight, ExternalLink, FolderGit2 } from 'lucide-react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';
import { projectCategories } from '../data/projectsData';

export default function Projects({ lang, projects, onOpenProjectsList, onOpenCaseStudy, standalone = false }) {
  const [filter, setFilter] = useState('all');
  const pt = lang === 'pt';
  return <section id="projetos" className={`section ${standalone ? 'projects-page' : ''}`}>
    <div className="container"><FadeInSection>
      <div className="section-header-row">
        <div>
          {standalone ? <h1 className="section-title">{pt ? 'Projetos' : 'Projects'}</h1> : <h2 className="section-title"><span className="number">01.</span> {pt ? 'Projetos em destaque' : 'Featured projects'}</h2>}
          <p className="projects-subtitle-text">{pt ? 'Web, jogos e bots. Explora o que construí e as tecnologias de cada projeto.' : 'Web, games and bots. Explore what I built and the technologies behind each project.'}</p>
        </div>
        {!standalone && <button className="projects-case-studies-banner-btn" onClick={onOpenProjectsList}>{pt ? 'Explorar projetos' : 'Explore projects'} <ArrowRight size={16} /></button>}
      </div>
      <div className="filter-tabs" role="group" aria-label={pt ? 'Filtrar projetos' : 'Filter projects'}>
        {Object.entries(projectCategories).map(([id, label]) => <button key={id} className={`filter-btn ${filter === id ? 'active' : ''}`} aria-pressed={filter === id} onClick={() => setFilter(id)}>
          {label[lang]} <span className="filter-count">({projects.filter(p => id === 'all' || p.category === id).length})</span>
        </button>)}
      </div>
      <div className="projects-grid-v2">
        {projects.filter(p => filter === 'all' || p.category === filter).map(project => <SpotlightCard key={project.slug} className="project-card-v2">
          <div className="project-window-bar"><span className="project-category">{projectCategories[project.category][lang]}</span><span className="project-badge-pill">{project.status[lang]}</span></div>
          <div className="project-card-body-v2">
            <div className="project-card-header-row"><div className="project-icon-box">{project.icon}</div><h3 className="project-title-v2">{project.title}</h3></div>
            <p className="project-desc-v2">{project.description}</p>
          </div>
          <div className="project-card-bottom-v2">
            <ul className="project-tags-v2">{project.tags.map(tag => <li key={tag} className="project-tag-v2">{tag}</li>)}</ul>
            <div className="project-actions-row">
              <a href={`/projetos/${project.slug}`} className="project-action-btn primary" aria-label={`${pt ? 'Ver projeto' : 'View project'}: ${project.title}`} onClick={e => { if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) { e.preventDefault(); onOpenCaseStudy(project.slug); } }}>{pt ? 'Ver projeto' : 'View project'} <ArrowRight size={14} /></a>
              {project.demo && <a className="project-action-btn outline" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Demo: ${project.title}`}><ExternalLink size={14} /> Demo</a>}
              {project.github && <a className="project-action-btn outline" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${pt ? 'Código' : 'Code'}: ${project.title}`}><FolderGit2 size={14} />{pt ? 'Código' : 'Code'}</a>}
            </div>
          </div>
        </SpotlightCard>)}
      </div>
    </FadeInSection></div>
  </section>;
}
