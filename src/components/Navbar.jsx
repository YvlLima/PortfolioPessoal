import React, { useEffect, useRef } from 'react';
import { Terminal, X, Menu, Sun, Moon, Download, Mail } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

export const Navbar = ({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  lang,
  t,
  toggleTheme,
  isDark,
  onNavigateHome
}) => {
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const navLinks = [
    { id: 'projetos', label: t.nav.projetos },
    { id: 'sobre', label: t.nav.sobre },
    { id: 'educacao', label: t.nav.educacao },
    { id: 'contacto', label: t.nav.contacto },
  ];
  const handleLinkClick = (event, section = 'hero') => {
    event.preventDefault();
    setMobileMenuOpen(false);
    onNavigateHome(section);
  };
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const menu = menuRef.current;
    menu?.querySelector('button')?.focus();
    const trap = event => {
      if (event.key === 'Escape') { setMobileMenuOpen(false); toggleRef.current?.focus(); }
      if (event.key !== 'Tab') return;
      const items = [...menu.querySelectorAll('button, a[href]')].filter(el => el.getClientRects().length > 0);
      const first = items[0], last = items[items.length - 1];
      if (!menu.contains(document.activeElement)) { event.preventDefault(); (event.shiftKey ? last : first)?.focus(); }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const media = window.matchMedia('(max-width: 960px)');
    const resize = () => { if (!media.matches) setMobileMenuOpen(false); };
    document.addEventListener('keydown', trap);
    media.addEventListener('change', resize);
    return () => { document.removeEventListener('keydown', trap); media.removeEventListener('change', resize); };
  }, [mobileMenuOpen, setMobileMenuOpen]);

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
          <a
            href="/#hero"
            className="logo"
            aria-label={lang === 'pt' ? 'Gonçalo Lima — Início' : 'Gonçalo Lima — Home'}
            onClick={handleLinkClick}
          >
            <Terminal size={20} className="accent" aria-hidden="true" />
            <span>dev<span className="accent">.lima</span></span>
          </a>

          {/* Desktop & Mobile Nav Menu */}
          <nav className="nav-main" aria-label={lang === 'pt' ? 'Navegação principal' : 'Main navigation'}>
            <ul id="navigation-menu" ref={menuRef} className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
              {/* Drawer Header for Mobile */}
              <li className="mobile-drawer-header">
                <span className="logo" style={{ fontSize: '1.1rem' }}>
                  <Terminal size={18} className="accent" aria-hidden="true" />
                  <span>dev<span className="accent">.lima</span></span>
                </span>
                <button
                  className="mobile-close-icon"
                  onClick={() => { setMobileMenuOpen(false); toggleRef.current?.focus(); }}
                  aria-label={lang === 'pt' ? 'Fechar menu' : 'Close menu'}
                >
                  <X size={20} />
                </button>
              </li>

              {/* Navigation Links 01. to 07. */}
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <a
                    href={`/#${link.id}`}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={event => handleLinkClick(event, link.id)}
                    aria-current={activeSection === link.id ? 'location' : undefined}
                  >
                    
                    <span className="txt">{link.label}</span>
                  </a>
                </li>
              ))}

              {/* Action Utilities Group */}
              <li className="nav-actions-group">
                {/* Language Switcher */}
                <LanguageToggle />

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
                  href="/Goncalo_Lima_CV.pdf"
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
                  href="/#contacto"
                  className="nav-cta-btn"
                  onClick={event => handleLinkClick(event, 'contacto')}
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
            ref={toggleRef}
            className="mobile-toggle"
            aria-controls="navigation-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={lang === 'pt' ? (mobileMenuOpen ? 'Fechar menu' : 'Abrir menu') : (mobileMenuOpen ? 'Close menu' : 'Open menu')}
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
