import React from 'react';
import { ArrowLeft, ArrowRight, Zap, Layers, Bot, ExternalLink, FolderGit2, CheckCircle2, Terminal } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import FadeInSection from './FadeInSection';
import { projectsCaseStudies } from '../data/projectsData';

export const ProjectsList = ({
  onSelectCaseStudy,
  onBackHome,
  t,
  lang = 'pt'
}) => {
  const csT = t?.caseStudies || {};

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Zap':
        return <Zap size={24} className="accent" />;
      case 'Layers':
        return <Layers size={24} className="accent" />;
      case 'Bot':
        return <Bot size={24} className="accent" />;
      default:
        return <Terminal size={24} className="accent" />;
    }
  };

  return (
    <section className="section case-studies-page-view" style={{ paddingTop: 'calc(var(--nav-height) + 2rem)', minHeight: '85vh' }}>
      <div className="container">
        <FadeInSection>
          {/* Top Back Navigation to Home */}
          <div className="case-studies-top-nav">
            <button
              type="button"
              onClick={onBackHome}
              className="blog-back-btn"
              aria-label={csT.backHome || (lang === 'pt' ? 'Voltar à Página Inicial' : 'Back to Home')}
            >
              <ArrowLeft size={16} />
              <span>{csT.backHome || (lang === 'pt' ? '← Voltar à Página Inicial' : '← Back to Home')}</span>
            </button>
          </div>

          {/* Section Header */}
          <div className="case-studies-header">
            <div className="case-studies-pill-badge">
              <Terminal size={14} className="accent" />
              <span>{csT.badge || (lang === 'pt' ? 'Arquitetura & Engenharia de Software' : 'Software Engineering & Architecture')}</span>
            </div>
            <h1 className="case-studies-main-title">
              {csT.title || (lang === 'pt' ? 'Case Studies de Projetos' : 'Project Case Studies')}
            </h1>
            <p className="case-studies-main-subtitle">
              {csT.subtitle || (lang === 'pt'
                ? 'Análise aprofundada da arquitetura, desafios técnicos reais e decisões de engenharia por trás de cada aplicação.'
                : 'In-depth breakdown of system architecture, real technical challenges, and engineering decisions behind each project.')}
            </p>
          </div>

          {/* Grid of Case Study Cards */}
          <div className="case-studies-grid">
            {projectsCaseStudies.map((project) => (
              <SpotlightCard
                key={project.slug}
                className="case-study-card"
                onClick={() => onSelectCaseStudy(project.slug)}
                aria-label={`${lang === 'pt' ? 'Abrir Case Study de' : 'Open Case Study for'} ${project.title}`}
                title={lang === 'pt' ? `Ver Case Study detalhado: ${project.title}` : `View detailed Case Study: ${project.title}`}
              >
                {/* Window Bar Header */}
                <div className="project-window-bar">
                  <div className="window-dots">
                    <span className="window-dot red" />
                    <span className="window-dot yellow" />
                    <span className="window-dot green" />
                  </div>
                  <span className="window-title">{project.windowPath}</span>
                  <span className="project-badge-pill">{project.category}</span>
                </div>

                {/* Card Hero / Thumbnail Placeholder */}
                <div
                  className="case-study-card-preview"
                  style={{ background: project.thumbnail.gradient }}
                >
                  <div className="case-study-preview-icon-wrapper">
                    {getIcon(project.thumbnail.iconName)}
                  </div>
                  <div className="case-study-preview-badge">
                    <CheckCircle2 size={12} className="accent" />
                    <span>{project.meta.status}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="case-study-card-content">
                  <div className="case-study-title-row">
                    <h2 className="case-study-title">{project.title}</h2>
                    <span className="case-study-year">{project.meta.year}</span>
                  </div>

                  <p className="case-study-tagline">{project.tagline}</p>

                  {/* Highlights / Metric Pill */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="case-study-mini-metrics">
                      <div className="case-study-mini-metric-item">
                        <span className="mini-metric-val">{project.metrics[0].value}</span>
                        <span className="mini-metric-label">{project.metrics[0].label}</span>
                      </div>
                      {project.metrics[1] && (
                        <div className="case-study-mini-metric-item">
                          <span className="mini-metric-val">{project.metrics[1].value}</span>
                          <span className="mini-metric-label">{project.metrics[1].label}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Stack Badges */}
                  <div className="case-study-stack-badges">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="case-study-stack-badge">
                        {tech.name}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="case-study-stack-badge more">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="case-study-card-footer">
                  <span className="case-study-read-link">
                    <span>{csT.explore || (lang === 'pt' ? 'Explorar Case Study' : 'Explore Case Study')}</span>
                    <ArrowRight size={16} className="arrow-hover" />
                  </span>

                  <div className="case-study-ext-links" onClick={(e) => e.stopPropagation()}>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="case-study-mini-btn"
                        title={lang === 'pt' ? 'Ver Código no GitHub' : 'View Code on GitHub'}
                        aria-label="GitHub Repository"
                      >
                        <FolderGit2 size={15} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="case-study-mini-btn"
                        title={lang === 'pt' ? 'Ver Demo ao Vivo' : 'View Live Demo'}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
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

export default ProjectsList;
