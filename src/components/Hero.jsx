import React from 'react';
import { Sparkles, ChevronRight, Download } from 'lucide-react';
import FadeInSection from './FadeInSection';

export const Hero = ({ t }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <FadeInSection>
          <div className="hero-badge">
            <Sparkles size={14} className="accent" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="hero-name">
            Gonçalo Lima
          </h1>

          <h2 className="hero-title">
            {t.hero.title}
          </h2>

          <p className="hero-description">
            {t.hero.desc}
          </p>

          <div className="hero-cta">
            <a href="#projetos" className="btn btn-primary">
              {t.hero.btnProjects} <ChevronRight size={18} />
            </a>
            <a
              href="/goncalolima-cv.pdf"
              download="Goncalo_Lima_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label={t.hero.btnCv}
            >
              <Download size={18} /> {t.hero.btnCv}
            </a>
            <a href="#contacto" className="btn btn-outline" style={{ borderStyle: 'dashed' }}>
              {t.hero.btnContact}
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;
