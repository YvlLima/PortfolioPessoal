import React from 'react';
import { Sparkles, FolderGit2, Info, Check } from 'lucide-react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';

export const Now = ({
  t,
  lang,
  nowProjects,
  onSelectModal
}) => {
  const getNowModalData = (project) => ({
    title: project.title,
    badge: project.badge,
    icon: project.icon || <Sparkles size={24} />,
    desc: project.fullDesc,
    highlights: project.highlights
  });

  return (
    <section id="agora" className="section">
      <div className="container">
        <FadeInSection>
          <div className="section-header-row">
            <div>
              <h2 className="section-title">
                <span className="number">04.</span> {t.now.title}
              </h2>
              {t.now.subtitle && (
                <p className="projects-subtitle-text" style={{ textAlign: 'left', margin: '0.35rem 0 2rem' }}>
                  {t.now.subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="now-grid">
            {nowProjects.map((item) => (
              <SpotlightCard
                key={item.id}
                className="now-card"
                onClick={() => onSelectModal(getNowModalData(item))}
                aria-label={`${lang === 'pt' ? 'Ver detalhes do projeto em curso' : 'View in-progress project details'} ${item.title}`}
                title={lang === 'pt' ? 'Clique para ver detalhes do projeto' : 'Click to view project details'}
              >
                {/* Header with status badge & pulse */}
                <div className="now-card-top">
                  <div className="now-status-pill">
                    <span className="live-pulse-dot" />
                    <span>{item.status}</span>
                  </div>
                  {item.badge && (
                    <span className="project-badge-pill">{item.badge}</span>
                  )}
                </div>

                {/* Card Title & Icon */}
                <div className="now-card-header">
                  <div className="project-icon-box">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="now-card-title">{item.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="now-card-desc">
                  {item.shortDesc[lang]}
                </p>

                {/* Key Highlights */}
                {item.highlights && item.highlights[lang] && (
                  <ul className="project-mini-highlights" style={{ marginBottom: '1.25rem' }}>
                    {item.highlights[lang].slice(0, 2).map((hl, idx) => (
                      <li key={idx}>
                        <Check size={13} className="accent" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                <div className="now-card-bottom">
                  <ul className="project-tags-v2">
                    {item.tags.map((tag, idx) => (
                      <li key={idx} className="project-tag-v2">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="project-actions-row" onClick={(e) => e.stopPropagation()}>
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn outline"
                        title={t.now.btnCode}
                        aria-label={`${t.now.btnCode}: ${item.title}`}
                      >
                        <FolderGit2 size={14} aria-hidden="true" />
                        <span>{t.now.btnCode}</span>
                      </a>
                    )}
                    <button
                      type="button"
                      className="project-action-btn info"
                      onClick={() => onSelectModal(getNowModalData(item))}
                      title={t.now.btnDetails}
                      aria-label={`${t.now.btnDetails}: ${item.title}`}
                    >
                      <Info size={14} aria-hidden="true" />
                      <span>{t.now.btnDetails}</span>
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

export default Now;
