import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FolderGit2,
  Calendar,
  UserCheck,
  Clock,
  Activity,
  Layers,
  Zap,
  Bot,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Image as ImageIcon,
  ChevronRight
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import FadeInSection from './FadeInSection';
import { projectsCaseStudies } from '../data/projectsData';

export const ProjectCaseStudy = ({
  project,
  onBackToProjects,
  onSelectCaseStudy,
  onBackHome,
  t,
  lang = 'pt'
}) => {
  const csT = t?.caseStudies || {};

  // Scroll to top on mount or when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  if (!project) {
    return (
      <section className="section case-study-not-found" style={{ paddingTop: 'calc(var(--nav-height) + 3rem)', minHeight: '70vh' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>{csT.notFoundTitle || (lang === 'pt' ? 'Case Study Não Encontrado' : 'Case Study Not Found')}</h2>
          <p style={{ margin: '1.5rem 0' }}>
            {csT.notFoundText || (lang === 'pt'
              ? 'O projeto que procuras não existe ou foi movido.'
              : 'The project you are looking for does not exist or has been moved.')}
          </p>
          <button type="button" onClick={onBackToProjects} className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>{csT.backProjects || (lang === 'pt' ? 'Voltar aos Projetos' : 'Back to Projects')}</span>
          </button>
        </div>
      </section>
    );
  }

  // Find next case study for bottom navigation
  const currentIndex = projectsCaseStudies.findIndex((p) => p.slug === project.slug);
  const nextProject = projectsCaseStudies[(currentIndex + 1) % projectsCaseStudies.length];

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Zap':
        return <Zap size={28} className="accent" />;
      case 'Layers':
        return <Layers size={28} className="accent" />;
      case 'Bot':
        return <Bot size={28} className="accent" />;
      default:
        return <Terminal size={28} className="accent" />;
    }
  };

  return (
    <article className="case-study-view section" style={{ paddingTop: 'calc(var(--nav-height) + 2rem)', minHeight: '90vh' }}>
      <div className="container" style={{ maxWidth: '980px' }}>
        <FadeInSection>
          {/* Top Breadcrumbs & Back Navigation */}
          <div className="case-study-top-bar">
            <button
              type="button"
              onClick={onBackToProjects}
              className="blog-back-btn"
              aria-label={csT.backProjects || (lang === 'pt' ? 'Voltar a todos os projetos' : 'Back to all projects')}
            >
              <ArrowLeft size={16} />
              <span>{csT.backProjects || (lang === 'pt' ? '← Voltar aos Projetos' : '← Back to Projects')}</span>
            </button>

            <div className="case-study-breadcrumbs">
              <button type="button" onClick={onBackHome} className="breadcrumb-link">
                {lang === 'pt' ? 'Início' : 'Home'}
              </button>
              <ChevronRight size={14} className="breadcrumb-sep" />
              <button type="button" onClick={onBackToProjects} className="breadcrumb-link">
                {t?.nav?.projetos || (lang === 'pt' ? 'Projetos' : 'Projects')}
              </button>
              <ChevronRight size={14} className="breadcrumb-sep" />
              <span className="breadcrumb-current">{project.title}</span>
            </div>
          </div>

          {/* Header Hero Card */}
          <SpotlightCard className="case-study-header-card">
            {/* Terminal Window Header Bar */}
            <div className="project-window-bar">
              <div className="window-dots">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
              </div>
              <span className="window-title">{project.windowPath}</span>
              <span className="project-badge-pill">{project.heroBadge}</span>
            </div>

            <div className="case-study-header-inner">
              <div className="case-study-hero-top-row">
                <div className="case-study-icon-box">
                  {getCategoryIcon(project.thumbnail.iconName)}
                </div>
                <div className="case-study-title-group">
                  <span className="case-study-category-badge">{project.category}</span>
                  <h1 className="case-study-main-heading">{project.title}</h1>
                </div>
              </div>

              <p className="case-study-lead-tagline">{project.tagline}</p>

              {/* Meta Stats Row */}
              <div className="case-study-meta-grid">
                <div className="case-study-meta-box">
                  <Calendar size={15} className="accent" />
                  <div>
                    <span className="meta-box-label">{csT.year || (lang === 'pt' ? 'Ano' : 'Year')}</span>
                    <span className="meta-box-val">{project.meta.year}</span>
                  </div>
                </div>
                <div className="case-study-meta-box">
                  <UserCheck size={15} className="accent" />
                  <div>
                    <span className="meta-box-label">{csT.role || (lang === 'pt' ? 'Função' : 'Role')}</span>
                    <span className="meta-box-val">{project.meta.role}</span>
                  </div>
                </div>
                <div className="case-study-meta-box">
                  <Clock size={15} className="accent" />
                  <div>
                    <span className="meta-box-label">{csT.duration || (lang === 'pt' ? 'Duração' : 'Duration')}</span>
                    <span className="meta-box-val">{project.meta.duration}</span>
                  </div>
                </div>
                <div className="case-study-meta-box">
                  <Activity size={15} className="accent" />
                  <div>
                    <span className="meta-box-label">{csT.status || (lang === 'pt' ? 'Estado' : 'Status')}</span>
                    <span className="meta-box-val">{project.meta.status}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Badges */}
              <div className="case-study-header-actions-row">
                <div className="case-study-header-links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <FolderGit2 size={16} />
                      <span>{csT.githubBtn || (lang === 'pt' ? 'Ver no GitHub' : 'View on GitHub')}</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={16} />
                      <span>{csT.liveBtn || (lang === 'pt' ? 'Demo Ao Vivo' : 'Live Demo')}</span>
                    </a>
                  )}
                </div>

                {/* Stack Badges Pill List */}
                <div className="case-study-header-stack">
                  {project.stack.map((item, idx) => (
                    <span key={idx} className="case-study-tech-pill">
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Section 1: Metrics Overview Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="case-study-section">
              <h2 className="case-study-section-heading">
                <span className="section-step-num">01.</span>{' '}
                {csT.metricsHeading || (lang === 'pt' ? 'Métricas de Impacto & Escala' : 'Impact & Scale Metrics')}
              </h2>
              <div className="case-study-metrics-grid">
                {project.metrics.map((metric, i) => (
                  <SpotlightCard key={i} className="metric-highlight-card">
                    <div className="metric-number-glow">{metric.value}</div>
                    <div className="metric-label-strong">{metric.label}</div>
                    <p className="metric-description-text">{metric.desc}</p>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Contexto / Problema */}
          <div className="case-study-section">
            <h2 className="case-study-section-heading">
              <span className="section-step-num">02.</span> {project.context.title}
            </h2>
            <SpotlightCard className="case-study-card-panel">
              <div className="case-study-panel-body">
                {project.context.paragraphs.map((p, i) => (
                  <p key={i} className="case-study-paragraph">{p}</p>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* Section 3: Solução & Principais Funcionalidades */}
          <div className="case-study-section">
            <h2 className="case-study-section-heading">
              <span className="section-step-num">03.</span> {project.solution.title}
            </h2>
            <SpotlightCard className="case-study-card-panel">
              <div className="case-study-panel-body">
                {project.solution.paragraphs.map((p, i) => (
                  <p key={i} className="case-study-paragraph">{p}</p>
                ))}

                {project.solution.features && (
                  <div className="case-study-features-grid">
                    {project.solution.features.map((feat, idx) => (
                      <div key={idx} className="feature-item-box">
                        <div className="feature-header-line">
                          <CheckCircle2 size={16} className="accent" />
                          <h3 className="feature-item-title">{feat.title}</h3>
                        </div>
                        <p className="feature-item-desc">{feat.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </SpotlightCard>
          </div>

          {/* Section 4: Stack & Decisões de Arquitetura */}
          <div className="case-study-section">
            <h2 className="case-study-section-heading">
              <span className="section-step-num">04.</span> {project.stackWhy.title}
            </h2>
            <div className="case-study-stack-grid">
              {project.stackWhy.items.map((item, idx) => (
                <SpotlightCard key={idx} className="stack-why-card">
                  <div className="stack-why-header">
                    <Sparkles size={16} className="accent" />
                    <h3 className="stack-why-tech">{item.tech}</h3>
                  </div>
                  <p className="stack-why-reason">{item.reason}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Section 5: Desafios Técnicos Resolvidos */}
          <div className="case-study-section">
            <h2 className="case-study-section-heading">
              <span className="section-step-num">05.</span>{' '}
              {csT.challengesHeading || (lang === 'pt' ? 'Desafios Técnicos & Engenharia' : 'Technical Challenges & Engineering')}
            </h2>
            <div className="case-study-challenges-list">
              {project.challenges.map((challenge, idx) => (
                <SpotlightCard key={idx} className="challenge-item-card">
                  <div className="challenge-header-bar">
                    <span className="challenge-num-tag">DESAFIO #{challenge.number}</span>
                    <h3 className="challenge-title-text">{challenge.title}</h3>
                  </div>

                  <div className="challenge-body-grid">
                    {/* Problem Block */}
                    <div className="challenge-block problem">
                      <div className="challenge-block-label">
                        <AlertTriangle size={15} className="warning-icon" />
                        <span>{csT.problemLabel || (lang === 'pt' ? 'Problema / Obstáculo' : 'Problem / Bottleneck')}</span>
                      </div>
                      <p className="challenge-block-content">{challenge.problem}</p>
                    </div>

                    {/* Solution Block */}
                    <div className="challenge-block solution">
                      <div className="challenge-block-label">
                        <Lightbulb size={15} className="accent" />
                        <span>{csT.solutionLabel || (lang === 'pt' ? 'Solução de Engenharia' : 'Engineering Solution')}</span>
                      </div>
                      <p className="challenge-block-content">{challenge.solution}</p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Section 6: Resultados & Estado Atual */}
          <div className="case-study-section">
            <h2 className="case-study-section-heading">
              <span className="section-step-num">06.</span> {project.results.title}
            </h2>
            <SpotlightCard className="case-study-card-panel">
              <div className="case-study-panel-body">
                {project.results.paragraphs.map((p, i) => (
                  <p key={i} className="case-study-paragraph">{p}</p>
                ))}

                {project.results.currentStatusList && (
                  <div className="status-checklist-box">
                    <h4 className="checklist-heading">
                      {csT.statusChecklistHeading || (lang === 'pt' ? 'Estado Atual de Implementação:' : 'Current Implementation Status:')}
                    </h4>
                    <ul className="status-checklist">
                      {project.results.currentStatusList.map((item, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </SpotlightCard>
          </div>

          {/* Section 7: Galeria de Screenshots / Demonstrações (Placeholders) */}
          <div className="case-study-section">
            <h2 className="case-study-section-heading">
              <span className="section-step-num">07.</span>{' '}
              {csT.screenshotsHeading || (lang === 'pt' ? 'Capturas de Ecrã & Demonstrações' : 'Screenshots & Demonstrations')}
            </h2>
            <div className="case-study-gallery-grid">
              {project.gallery.map((item) => (
                <SpotlightCard key={item.id} className="gallery-placeholder-card">
                  <div className="gallery-preview-frame">
                    <div className="gallery-preview-icon">
                      <ImageIcon size={32} className="accent" />
                    </div>
                    <span className="gallery-type-badge">{item.type}</span>
                  </div>
                  <div className="gallery-caption-wrapper">
                    <h4 className="gallery-card-title">{item.title}</h4>
                    <p className="gallery-card-caption">{item.caption}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Bottom Navigation & Cross Links */}
          <div className="case-study-footer-nav">
            <button
              type="button"
              onClick={onBackToProjects}
              className="btn btn-outline"
            >
              <ArrowLeft size={16} />
              <span>{csT.backProjects || (lang === 'pt' ? '← Voltar aos Projetos' : '← Back to Projects')}</span>
            </button>

            {nextProject && (
              <button
                type="button"
                onClick={() => onSelectCaseStudy(nextProject.slug)}
                className="btn btn-outline next-case-study-btn"
              >
                <span>
                  {csT.nextProject || (lang === 'pt' ? 'Próximo Case Study' : 'Next Case Study')}: <strong>{nextProject.title}</strong>
                </span>
                <ArrowRight size={16} />
              </button>
            )}

            <a href="#contacto" className="btn btn-primary" onClick={onBackHome}>
              {t.nav.ctaBtn}
            </a>
          </div>
        </FadeInSection>
      </div>
    </article>
  );
};

export default ProjectCaseStudy;
