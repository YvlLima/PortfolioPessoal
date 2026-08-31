import React from 'react';
import { ChevronRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export const Timeline = ({ timelineItems, lang, onSelectModal }) => {
  return (
    <div className="timeline">
      {timelineItems.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <SpotlightCard
            className="timeline-content"
            onClick={() => onSelectModal(item.modalData)}
            title={lang === 'pt' ? 'Clique para ver detalhes do curso' : 'Click to view course details'}
          >
            <span className="timeline-date">{item.period}</span>
            <h3 className="timeline-title">{item.degree}</h3>
            <p className="timeline-subtitle">{item.institution}</p>
            <p className="timeline-desc">{item.description}</p>
            <span className="card-click-hint">
              {lang === 'pt' ? 'Ver detalhes do curso' : 'View course details'} <ChevronRight size={12} />
            </span>
          </SpotlightCard>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
