import React from 'react';

export const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          {t.footer.designedBy} <span style={{ color: 'var(--accent)' }}>Gonçalo Lima</span> — 2026
        </p>
        <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
          {t.footer.sub}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
