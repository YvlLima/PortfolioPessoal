import React from 'react';
import { X, FolderGit2, Check, ExternalLink, Sparkles } from 'lucide-react';

export const Modal = ({
  selectedProject,
  selectedInfoModal,
  onCloseProject,
  onCloseInfo,
  lang,
  t
}) => {
  return (
    <>
      {/* ------------------- PROJECT DETAILS MODAL ------------------- */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={onCloseProject}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={onCloseProject}
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="skill-icon-wrapper modal-icon">
                <FolderGit2 size={26} />
              </div>
              <div>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <span className="modal-category-tag">
                  {selectedProject.category === 'web' ? 'Web Application' : selectedProject.category === 'bots' ? 'Discord Bot / Backend' : 'WordPress'}
                </span>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedProject.fullDesc[lang]}</p>

              {selectedProject.features && selectedProject.features[lang] && (
                <div className="modal-highlights-section">
                  <h4>{lang === 'pt' ? 'Funcionalidades & Destaques:' : 'Features & Highlights:'}</h4>
                  <ul className="project-features-list">
                    {selectedProject.features[lang].map((feat, idx) => (
                      <li key={idx} className="project-feature-item">
                        <Check size={16} className="accent" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-highlights-section" style={{ marginTop: '1.25rem' }}>
                <h4>{lang === 'pt' ? 'Tecnologias Utilizadas:' : 'Technologies Used:'}</h4>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-modal-actions">
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <ExternalLink size={18} /> {t.projects.demoTitle}
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <FolderGit2 size={18} /> {t.projects.githubTitle}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ------------------- GENERAL INFO / ABOUT / EDUCATION MODAL ------------------- */}
      {selectedInfoModal && (
        <div className="modal-backdrop" onClick={onCloseInfo}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={onCloseInfo}
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="skill-icon-wrapper modal-icon">
                {selectedInfoModal.icon || <Sparkles size={24} />}
              </div>
              <div>
                <h3 className="modal-title">{selectedInfoModal.title}</h3>
                {selectedInfoModal.badge && (
                  <span className="modal-category-tag">
                    {selectedInfoModal.badge}
                  </span>
                )}
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedInfoModal.desc[lang]}</p>

              {selectedInfoModal.highlights && selectedInfoModal.highlights[lang] && (
                <div className="modal-highlights-section">
                  <h4>{lang === 'pt' ? 'Pontos-Chave & Detalhes:' : 'Key Points & Details:'}</h4>
                  <ul className="project-features-list">
                    {selectedInfoModal.highlights[lang].map((point, idx) => (
                      <li key={idx} className="project-feature-item">
                        <Check size={16} className="accent" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="modal-footer" style={{ marginTop: '1.5rem' }}>
              <button
                className="btn btn-outline"
                onClick={onCloseInfo}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {lang === 'pt' ? 'Fechar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
