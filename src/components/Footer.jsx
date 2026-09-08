import React from 'react';

export const Footer = ({ t, onOpenPrivacy }) => {
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
            href="/privacidade"
            onClick={(e) => {
              if (onOpenPrivacy) {
                e.preventDefault();
                onOpenPrivacy();
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

