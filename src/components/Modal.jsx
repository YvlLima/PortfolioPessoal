import React, { useEffect, useRef } from 'react';
import { X, FolderGit2, Check, ExternalLink, Sparkles } from 'lucide-react';

export const Modal = ({
  selectedProject,
  selectedInfoModal,
  onCloseProject,
  onCloseInfo,
  lang,
  t
}) => {
  const modalContentRef = useRef(null);
  const triggerElementRef = useRef(null);

  const isOpen = Boolean(selectedProject || selectedInfoModal);
  const activeCloseFn = selectedProject ? onCloseProject : onCloseInfo;

  // Save the currently active element when modal opens, and restore on close
  useEffect(() => {
    if (isOpen) {
      triggerElementRef.current = document.activeElement;

      // Focus the first focusable element inside the modal (usually close button)
      const timer = setTimeout(() => {
        if (modalContentRef.current) {
          const focusableElements = modalContentRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length > 0) {
            focusableElements[0].focus();
          }
        }
      }, 50);

      return () => {
        clearTimeout(timer);
        if (triggerElementRef.current && typeof triggerElementRef.current.focus === 'function') {
          triggerElementRef.current.focus();
        }
      };
    }
  }, [isOpen]);

  // Handle Focus Trap and Escape Key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        activeCloseFn();
        return;
      }

      if (e.key === 'Tab' && modalContentRef.current) {
        const focusableElements = Array.from(
          modalContentRef.current.querySelectorAll(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeCloseFn]);

  if (!isOpen) return null;

  return (
    <>
      {/* ------------------- PROJECT DETAILS MODAL ------------------- */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={onCloseProject}
          role="presentation"
        >
          <div
            ref={modalContentRef}
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-desc"
          >
            <button
              className="modal-close-btn"
              onClick={onCloseProject}
              aria-label={lang === 'pt' ? 'Fechar janela de detalhes' : 'Close details dialog'}
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="skill-icon-wrapper modal-icon" aria-hidden="true">
                <FolderGit2 size={26} />
              </div>
              <div>
                <h3 id="project-modal-title" className="modal-title">{selectedProject.title}</h3>
                <span className="modal-category-tag">
                  {selectedProject.category === 'web' ? 'Web Application' : selectedProject.category === 'bots' ? 'Discord Bot / Backend' : 'WordPress'}
                </span>
              </div>
            </div>

            <div className="modal-body">
              <p id="project-modal-desc" className="modal-desc">{selectedProject.fullDesc[lang]}</p>

              {selectedProject.features && selectedProject.features[lang] && (
                <div className="modal-highlights-section">
                  <h4>{lang === 'pt' ? 'Funcionalidades & Destaques:' : 'Features & Highlights:'}</h4>
                  <ul className="project-features-list">
                    {selectedProject.features[lang].map((feat, idx) => (
                      <li key={idx} className="project-feature-item">
                        <Check size={16} className="accent" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
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
                  aria-label={`${t.projects.demoTitle}: ${selectedProject.title}`}
                >
                  <ExternalLink size={18} aria-hidden="true" /> {t.projects.demoTitle}
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ flex: 1, justifyContent: 'center' }}
                  aria-label={`${t.projects.githubTitle}: ${selectedProject.title}`}
                >
                  <FolderGit2 size={18} aria-hidden="true" /> {t.projects.githubTitle}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ------------------- GENERAL INFO / ABOUT / EDUCATION MODAL ------------------- */}
      {selectedInfoModal && (
        <div
          className="modal-backdrop"
          onClick={onCloseInfo}
          role="presentation"
        >
          <div
            ref={modalContentRef}
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="info-modal-title"
            aria-describedby="info-modal-desc"
          >
            <button
              className="modal-close-btn"
              onClick={onCloseInfo}
              aria-label={lang === 'pt' ? 'Fechar janela de informações' : 'Close information dialog'}
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="skill-icon-wrapper modal-icon" aria-hidden="true">
                {selectedInfoModal.icon || <Sparkles size={24} />}
              </div>
              <div>
                <h3 id="info-modal-title" className="modal-title">{selectedInfoModal.title}</h3>
                {selectedInfoModal.badge && (
                  <span className="modal-category-tag">
                    {selectedInfoModal.badge}
                  </span>
                )}
              </div>
            </div>

            <div className="modal-body">
              <p id="info-modal-desc" className="modal-desc">{selectedInfoModal.desc[lang]}</p>

              {selectedInfoModal.highlights && selectedInfoModal.highlights[lang] && (
                <div className="modal-highlights-section">
                  <h4>{lang === 'pt' ? 'Pontos-Chave & Detalhes:' : 'Key Points & Details:'}</h4>
                  <ul className="project-features-list">
                    {selectedInfoModal.highlights[lang].map((point, idx) => (
                      <li key={idx} className="project-feature-item">
                        <Check size={16} className="accent" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
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
                aria-label={lang === 'pt' ? 'Fechar janela de detalhes' : 'Close details dialog'}
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
