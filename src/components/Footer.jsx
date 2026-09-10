import React from 'react';

export const Footer = ({ t, onOpenPrivacy, onOpenProjectsList }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          {t.footer.designedBy} <span style={{ color: 'var(--accent)' }}>Gonçalo Lima</span> — 2026
        </p>
        <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
          {t.footer.sub}
        </p>
        <div className="footer-privacy-row">
          <a
            href="/projetos"
            onClick={(e) => {
              if (onOpenProjectsList) {
                e.preventDefault();
                onOpenProjectsList(e);
              }
            }}
            className="footer-privacy-link"
          >
            {t.nav.projetos} (Case Studies)
          </a>
          <span style={{ color: 'var(--text-muted)' }}>•</span>
          <a
            href="/privacidade"
            onClick={(e) => {
              if (onOpenPrivacy) {
                e.preventDefault();
                onOpenPrivacy(e);
              }
            }}
            className="footer-privacy-link"
          >
            {t.footer.privacyPolicy || 'Política de Privacidade'}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

