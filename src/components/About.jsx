import React from 'react';
import { ChevronRight } from 'lucide-react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';

export const About = ({
  t,
  lang,
  aboutStatsList,
  softSkills,
  onSelectModal
}) => {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">
            <span className="number">01.</span> {t.about.title}
          </h2>

          <div className="about-grid">
            <div className="about-text">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="about-highlights">
              {aboutStatsList.map((stat) => (
                <SpotlightCard
                  key={stat.id}
                  className="stat-card"
                  onClick={() => onSelectModal(stat.modalData)}
                  title={lang === 'pt' ? 'Clique para ver mais informações' : 'Click for details'}
                >
                  {stat.icon}
                  <h4>{stat.title}</h4>
                  <p>{stat.desc}</p>
                  <span className="card-click-hint">
                    {lang === 'pt' ? 'Ver detalhes' : 'Details'} <ChevronRight size={12} />
                  </span>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Soft Skills & Personal Values */}
          <div style={{ marginTop: '3.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              {t.about.softSkillsTitle}
            </h3>
            <div className="soft-skills-grid">
              {softSkills.map((ss, idx) => (
                <SpotlightCard
                  key={idx}
                  className="soft-skill-card"
                  onClick={() => onSelectModal(ss.modalData)}
                  title={lang === 'pt' ? 'Clique para ver mais informações' : 'Click for details'}
                >
                  <div className="soft-skill-icon">
                    {ss.icon}
                  </div>
                  <div className="soft-skill-info">
                    <h4>{ss.title}</h4>
                    <p>{ss.desc}</p>
                    <span className="card-click-hint">
                      {lang === 'pt' ? 'Ver mais' : 'More info'} <ChevronRight size={12} />
                    </span>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;
