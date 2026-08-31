import React from 'react';
import { Terminal, X, Globe, Menu, Sun, Moon, Download, Mail } from 'lucide-react';

export const Navbar = ({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  lang,
  toggleLanguage,
  t,
  toggleTheme,
  isDark
}) => {
  const navLinks = [
    { id: 'sobre', label: t.nav.sobre, num: '01.' },
    { id: 'skills', label: t.nav.skills, num: '02.' },
    { id: 'projetos', label: t.nav.projetos, num: '03.' },
    { id: 'agora', label: t.nav.agora, num: '04.' },
    { id: 'blog', label: t.nav.blog, num: '05.' },
    { id: 'educacao', label: t.nav.educacao, num: '06.' },
    { id: 'contacto', label: t.nav.contacto, num: '07.' },
  ];

  const themeLabel = lang === 'pt'
    ? (isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro')
    : (isDark ? 'Switch to light theme' : 'Switch to dark theme');

  return (
    <>
      {/* Mobile Menu Overlay Backdrop */}
      <div
        className={`nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <header className="header">
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#hero" className="logo" aria-label="Gonçalo Lima - Página Inicial">
            <Terminal size={20} className="accent" aria-hidden="true" />
            <span>dev<span className="accent">.lima</span></span>
          </a>

          {/* Desktop & Mobile Nav Menu */}
          <nav className="nav-main" aria-label="Navegação Principal">
            <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
              {/* Drawer Header for Mobile */}
              <li className="mobile-drawer-header">
                <span className="logo" style={{ fontSize: '1.1rem' }}>
                  <Terminal size={18} className="accent" aria-hidden="true" />
                  <span>dev<span className="accent">.lima</span></span>
                </span>
                <button
                  className="mobile-close-icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar Menu de Navegação"
                >
                  <X size={20} />
                </button>
              </li>

              {/* Navigation Links 01. to 07. */}
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="num">{link.num}</span>
                    <span className="txt">{link.label}</span>
                  </a>
                </li>
              ))}

              {/* Action Utilities Group */}
              <li className="nav-actions-group">
                {/* Language Switcher */}
                <button
                  onClick={toggleLanguage}
                  className="lang-toggle"
                  title={lang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
                  aria-label={lang === 'pt' ? 'Alternar idioma para Inglês' : 'Switch language to Portuguese'}
                >
                  <Globe size={14} aria-hidden="true" />
                  <span className="lang-text-full">
                    <span className={lang === 'pt' ? 'lang-active' : 'lang-inactive'}>PT</span>
                    <span className="lang-divider">|</span>
                    <span className={lang === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
                  </span>
                  <span className="lang-badge-compact">{lang.toUpperCase()}</span>
                </button>

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="theme-toggle"
                  title={themeLabel}
                  aria-label={themeLabel}
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>

                {/* Download CV Compact Button */}
                <a
                  href="/goncalolima-cv.pdf"
                  download="Goncalo_Lima_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-toggle"
                  title={t.hero.btnCv}
                  aria-label={t.hero.btnCv}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download size={16} />
                </a>

                {/* Contact Action Button */}
                <a
                  href="#contacto"
                  className="nav-cta-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  title={t.nav.ctaBtn}
                  aria-label={t.nav.ctaBtn}
                >
                  <Mail size={14} className="nav-cta-icon" aria-hidden="true" />
                  <span className="nav-cta-text">{t.nav.ctaBtn}</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
