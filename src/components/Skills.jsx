import React from 'react';
import FadeInSection from './FadeInSection';
import SpotlightCard from './SpotlightCard';
import { getCaseStudyBySlug } from '../data/projectsData';

export const Skills = ({
  t,
  lang,
  skillsList,
  onSelectModal,
  onOpenCaseStudy
}) => {
  const getSkillModalData = (skill) => ({
    title: skill.name,
    badge: t.skills.categories[skill.catKey] || skill.catKey,
    icon: skill.icon,
    desc: skill.desc,
    highlights: undefined
  });

  const evidence = { html5: 'musichub', css3: 'portfolio-pessoal', js: 'musichub', react: 'bagless', sql: 'musichub', nodejs: 'fazbear-nightshift', git: 'portfolio-pessoal', wordpress: 'galeria-piso-dois', godot: 'sengoku' };
  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">
            <span className="number">03.</span> {t.skills.title}
          </h2>

          <div className="skills-grid">
            {skillsList.map((skill, index) => (
              <div className="skill-with-evidence" key={index}><SpotlightCard
                className="skill-card"
                onClick={() => onSelectModal(getSkillModalData(skill))}
                aria-label={`${lang === 'pt' ? 'Ver detalhes da competência' : 'View skill details for'} ${skill.name}`}
                title={lang === 'pt' ? 'Clique para ver detalhes da competência' : 'Click for skill details'}
                style={{ cursor: 'pointer' }}
              >
                <div className="skill-icon-wrapper">
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </SpotlightCard>
              {evidence[skill.id] && <a className="skill-evidence" href={`/projetos/${evidence[skill.id]}`} onClick={event => { if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) { event.preventDefault(); onOpenCaseStudy(evidence[skill.id]); } }}>{getCaseStudyBySlug(evidence[skill.id]).title} →</a>}
              {skill.id === 'security' && <a className="skill-evidence" href="#educacao">{lang === 'pt' ? 'Percurso académico' : 'Academic background'} →</a>}
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Skills;
