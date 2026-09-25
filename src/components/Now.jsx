import React from 'react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';

export default function Now({ t, lang, nowProjects, onOpenCaseStudy }) {
  const pt = lang === 'pt';
  return (
    <section id="agora" className="section">
      <div className="container">
        <FadeInSection>
          <div className="section-header-row">
            <div>
              <h2 className="section-title"><span className="number">04.</span> {t.now.title}</h2>
              <p className="projects-subtitle-text">{t.now.subtitle}</p>
            </div>
          </div>
          <div className="now-grid">
            {nowProjects.map(project => (
              <SpotlightCard key={project.id} className="now-card">
                <div className="now-card-top">
                  <span className="project-badge-pill">{project.status}</span>
                  {project.badge && <span className="project-category">{project.badge}</span>}
                </div>
                <div className="project-card-header-row">
                  <div className="project-icon-box">{project.icon}</div>
                  <h3 className="project-title-v2">{project.title}</h3>
                </div>
                <p className="project-desc-v2">{project.shortDesc[lang]}</p>
                <div style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
                  {project.slug ? (
                    <a
                      className="project-action-btn outline"
                      href={`/projetos/${project.slug}`}
                      onClick={event => {
                        if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
                          event.preventDefault();
                          onOpenCaseStudy(project.slug);
                        }
                      }}
                    >
                      {pt ? 'Explorar projeto' : 'Explore project'} →
                    </a>
                  ) : project.link ? (
                    <a className="project-action-btn outline" href={project.link}>
                      {project.linkText?.[lang] || (pt ? 'Saber mais' : 'Learn more')} →
                    </a>
                  ) : null}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
