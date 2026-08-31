import React from 'react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';

export const Skills = ({
  t,
  lang,
  skillsList,
  onSelectModal
}) => {
  const getSkillModalData = (skill) => ({
    title: skill.name,
    badge: t.skills.categories[skill.catKey] || skill.catKey,
    icon: skill.icon,
    desc: skill.desc,
    highlights: {
      pt: skill.highlights,
      en: skill.highlights
    }
  });

  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">
            <span className="number">02.</span> {t.skills.title}
          </h2>

          <div className="skills-grid">
            {skillsList.map((skill, index) => (
              <SpotlightCard
                key={index}
                className="skill-card"
                onClick={() => onSelectModal(getSkillModalData(skill))}
                title={lang === 'pt' ? 'Clique para ver detalhes da competência' : 'Click for skill details'}
                style={{ cursor: 'pointer' }}
              >
                <div className="skill-icon-wrapper">
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </SpotlightCard>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Skills;
