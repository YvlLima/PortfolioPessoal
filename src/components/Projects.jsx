import React, { useState } from 'react';
import { Check, ExternalLink, Info, FolderGit2 } from 'lucide-react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';

export const Projects = ({
  t,
  lang,
  projects,
  onSelectProject
}) => {
  const [projectFilter, setProjectFilter] = useState('all');

  const filteredProjects = projects.filter((p) => {
    if (projectFilter === 'all') return true;
    return p.category === projectFilter;
  });

  return (
    <section id="projetos" className="section">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">
            <span className="number">03.</span> {t.projects.title}
          </h2>
          {t.projects.subtitle && (
            <p className="projects-subtitle-text">
              {t.projects.subtitle}
            </p>
          )}

          {/* Dynamic Project Filter Tabs */}
          <div className="filter-tabs">
            <button
              className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`}
              onClick={() => setProjectFilter('all')}
            >
              {t.projects.filterAll} <span className="filter-count">({projects.length})</span>
            </button>
            <button
              className={`filter-btn ${projectFilter === 'web' ? 'active' : ''}`}
              onClick={() => setProjectFilter('web')}
            >
              {t.projects.filterWeb} <span className="filter-count">({projects.filter(p => p.category === 'web').length})</span>
            </button>
            <button
              className={`filter-btn ${projectFilter === 'bots' ? 'active' : ''}`}
              onClick={() => setProjectFilter('bots')}
            >
              {t.projects.filterBots} <span className="filter-count">({projects.filter(p => p.category === 'bots').length})</span>
            </button>
            <button
              className={`filter-btn ${projectFilter === 'cms' ? 'active' : ''}`}
              onClick={() => setProjectFilter('cms')}
            >
              {t.projects.filterCms} <span className="filter-count">({projects.filter(p => p.category === 'cms').length})</span>
            </button>
          </div>

          <div className="projects-grid-v2">
            {filteredProjects.map((proj) => (
              <SpotlightCard
                key={proj.id}
                className="project-card-v2"
                onClick={() => onSelectProject(proj)}
                aria-label={`${lang === 'pt' ? 'Ver detalhes e arquitetura do projeto' : 'View details and architecture of project'} ${proj.title}`}
                title={lang === 'pt' ? 'Clique para ver arquitetura e detalhes completos' : 'Click to view full architecture & details'}
              >
                {/* Terminal Window Header */}
                <div className="project-window-bar">
                  <div className="window-dots">
                    <span className="window-dot red" />
                    <span className="window-dot yellow" />
                    <span className="window-dot green" />
                  </div>
                  <span className="window-title">{proj.windowPath}</span>
                  {proj.badge && (
                    <span className="project-badge-pill">{proj.badge[lang]}</span>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="project-card-body-v2">
                  <div className="project-card-header-row">
                    <div className="project-icon-box">
                      {proj.icon}
                    </div>
                    <h3 className="project-title-v2">{proj.title}</h3>
                  </div>

                  <p className="project-desc-v2">{proj.description}</p>

                  {/* Mini Feature Highlights */}
                  {proj.features && proj.features[lang] && (
                    <ul className="project-mini-highlights">
                      {proj.features[lang].slice(0, 2).map((feat, i) => (
                        <li key={i}>
                          <Check size={13} className="accent" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Footer with Tags and Action Buttons */}
                <div className="project-card-bottom-v2">
                  <ul className="project-tags-v2">
                    {proj.tags.map((tag, i) => (
                      <li key={i} className="project-tag-v2">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="project-actions-row" onClick={(e) => e.stopPropagation()}>
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn primary"
                        title={t.projects.demoTitle}
                      >
                        <ExternalLink size={14} />
                        <span>{t.projects.btnLive}</span>
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn outline"
                        title={t.projects.githubTitle}
                      >
                        <FolderGit2 size={14} />
                        <span>{t.projects.btnCode}</span>
                      </a>
                    )}
                    <button
                      type="button"
                      className="project-action-btn info"
                      onClick={() => onSelectProject(proj)}
                      title={lang === 'pt' ? 'Ver detalhes da arquitetura' : 'View architecture details'}
                    >
                      <Info size={14} />
                      <span>{t.projects.btnDetails}</span>
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Projects;
