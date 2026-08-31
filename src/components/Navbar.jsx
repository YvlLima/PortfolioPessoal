import React from 'react';
import { Terminal, X, Globe, Menu, Sun, Moon } from 'lucide-react';

export const Navbar = ({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  lang,
  toggleLanguage,
  t,
  userEmail,
  toggleTheme,
  isDark
}) => {
  const navLinks = [
    { id: 'sobre', label: t.nav.sobre, num: '01.' },
    { id: 'skills', label: t.nav.skills, num: '02.' },
    { id: 'projetos', label: t.nav.projetos, num: '03.' },
    { id: 'agora', label: t.nav.agora, num: '04.' },
    { id: 'educacao', label: t.nav.educacao, num: '05.' },
    { id: 'contacto', label: t.nav.contacto, num: '06.' },
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
          <a href="#hero" className="logo">
            <Terminal size={22} className="accent" />
            <span>dev<span className="accent">.lima</span></span>
          </a>

          {/* Desktop & Mobile Nav */}
          <nav>
            <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li className="mobile-drawer-header">
                <span className="logo" style={{ fontSize: '1.1rem' }}>
                  <Terminal size={18} className="accent" />
                  <span>dev<span className="accent">.lima</span></span>
                </span>
                <button
                  className="mobile-close-icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar Menu"
                >
                  <X size={20} />
                </button>
              </li>

              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="num">{link.num}</span> {link.label}
                  </a>
                </li>
              ))}

              {/* Selector / Switcher de Idioma PT / EN */}
              <li className="nav-lang-item">
                <button
                  onClick={toggleLanguage}
                  className="lang-toggle"
                  title={lang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
                  aria-label={lang === 'pt' ? 'Alternar idioma para Inglês' : 'Switch language to Portuguese'}
                >
                  <Globe size={15} />
                  <span className={lang === 'pt' ? 'lang-active' : 'lang-inactive'}>PT</span>
                  <span style={{ opacity: 0.3 }}>|</span>
                  <span className={lang === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
                </button>
              </li>

              {/* Theme Toggle Button (Dark / Light) */}
              <li className="nav-theme-item">
                <button
                  onClick={toggleTheme}
                  className="theme-toggle"
                  title={themeLabel}
                  aria-label={themeLabel}
                >
                  {isDark ? <Sun size={17} /> : <Moon size={17} />}
                </button>
              </li>

              <li className="nav-cta-item">
                <a
                  href={`mailto:${userEmail}`}
                  className="btn btn-outline nav-cta-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.ctaBtn}
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
