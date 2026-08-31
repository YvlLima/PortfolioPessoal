import React from 'react';
import { FileCheck, Briefcase, Quote, ChevronRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export const Recommendations = ({
  t,
  lang,
  recommendationLetters,
  onSelectModal
}) => {
  return (
    <div style={{ marginTop: '3.5rem' }}>
      <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <FileCheck size={22} className="accent" /> {t.education.recommendationsTitle}
      </h3>
      {t.education.recommendationsSub && (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.35rem', marginBottom: '1.5rem' }}>
          {t.education.recommendationsSub}
        </p>
      )}

      <div className="recommendations-grid">
        {recommendationLetters.map((rec) => (
          <SpotlightCard
            key={rec.id}
            className="recommendation-card"
            onClick={() => onSelectModal(rec.modalData)}
            aria-label={`${lang === 'pt' ? 'Ver carta de recomendação de' : 'View recommendation letter for'} ${rec.company} (${rec.year})`}
            title={lang === 'pt' ? 'Clique para ver a carta e pontos-chave' : 'Click to view recommendation details'}
          >
            <div className="rec-card-header">
              <div className="rec-icon-box">
                <Briefcase size={20} className="accent" />
              </div>
              <div className="rec-header-info">
                <span className="rec-year-badge">{rec.year}</span>
                <h4 className="rec-company-name">{rec.company}</h4>
                <span className="rec-role-tag">{rec.role} • {rec.period}</span>
              </div>
            </div>

            <div className="rec-body">
              <Quote size={16} className="rec-quote-icon" />
              <p className="rec-desc">{rec.desc}</p>
            </div>

            <div className="rec-footer">
              <span className="card-click-hint">
                {lang === 'pt' ? 'Ver carta & pontos-chave' : 'View letter & key points'} <ChevronRight size={12} />
              </span>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
