import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';
import Timeline from './Timeline';
import Recommendations from './Recommendations';

export const Education = ({
  t,
  lang,
  timelineItems,
  recommendationLetters,
  certifications,
  onSelectModal
}) => {
  return (
    <section id="educacao" className="section">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">
            <span className="number">04.</span> {t.education.title}
          </h2>

          {/* Timeline */}
          <Timeline
            timelineItems={timelineItems}
            lang={lang}
            onSelectModal={onSelectModal}
          />

          {/* Cartas de Recomendação de Estágio */}
          <Recommendations
            t={t}
            lang={lang}
            recommendationLetters={recommendationLetters}
            onSelectModal={onSelectModal}
          />

          {/* Certificações & Habilitações */}
          <div style={{ marginTop: '3.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <Award size={22} className="accent" /> {t.education.certTitle}
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, idx) => (
                <SpotlightCard
                  key={idx}
                  className="cert-card"
                  onClick={() => onSelectModal(cert.modalData)}
                  aria-label={`${lang === 'pt' ? 'Ver detalhes da certificação' : 'View certification details for'} ${cert.title}`}
                  title={lang === 'pt' ? 'Clique para ver detalhes do certificado' : 'Click for certificate details'}
                >
                  <Award size={24} className="cert-icon" />
                  <div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-issuer">{cert.issuer}</span>
                    <p className="cert-desc">{cert.desc}</p>
                    <span className="card-click-hint">
                      {lang === 'pt' ? 'Ver detalhes' : 'View details'} <ChevronRight size={12} />
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

export default Education;
