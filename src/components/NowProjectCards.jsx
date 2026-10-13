import React from 'react';
import { Code2, Gamepad2, GraduationCap, Shield, Bot, Rocket, Cpu } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const icons = {Code2, Gamepad2, GraduationCap, Shield, Bot, Rocket, Cpu};
export function displayNowProjects(content, lang) {
  return content.projects.filter(project => project.visible !== false).map(project => ({
    ...project, title: project.title[lang] || project.title.pt,
    status: project.status[lang] || project.status.pt,
    badge: project.badge[lang] || project.badge.pt,
  }));
}
export default function NowProjectCards({ projects, lang, onOpenCaseStudy, preview = false }) {
  const pt = lang === 'pt';
  return <div className="now-grid">
    {projects.map(project => {
      const Icon = icons[project.iconName] || Code2;
      return <SpotlightCard key={project.id} className="now-card">
        <div className="now-card-top"><span className="project-badge-pill">{project.status}</span>{project.badge && <span className="project-category">{project.badge}</span>}</div>
        <div className="project-card-header-row"><div className="project-icon-box"><Icon size={24} className="accent" /></div><h3 className="project-title-v2">{project.title}</h3></div>
        <p className="project-desc-v2">{project.shortDesc[lang] || project.shortDesc.pt}</p>
        {(project.slug || project.link) && <div style={{marginTop:'auto',paddingTop:'1.25rem'}}>
          <a className="project-action-btn outline" href={project.slug ? `/projetos/${project.slug}` : project.link} onClick={event => {
            if (preview) { event.preventDefault(); return; }
            if (project.slug && onOpenCaseStudy && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) { event.preventDefault(); onOpenCaseStudy(project.slug); }
          }}>{project.linkText?.[lang] || (project.slug ? (pt ? 'Explorar projeto' : 'Explore project') : (pt ? 'Saber mais' : 'Learn more'))} →</a>
        </div>}
      </SpotlightCard>;
    })}
  </div>;
}
