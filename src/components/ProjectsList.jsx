import React from 'react';
import Projects from './Projects';
import { getProjects } from '../data/projects';
export default function ProjectsList({ onSelectCaseStudy, onBackHome, lang }) {
  return <div className="project-page-wrapper">
    <div className="container"><button className="blog-back-btn" onClick={() => onBackHome()}>{lang === 'pt' ? '← Voltar ao início' : '← Back home'}</button></div>
    <Projects standalone lang={lang} projects={getProjects(lang)} onOpenCaseStudy={onSelectCaseStudy} />
  </div>;
}
