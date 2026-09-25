import React from 'react';
import { Gamepad2, Luggage, Music, Bot, Globe, Terminal } from 'lucide-react';
import { projectsCaseStudies } from './projectsData';
const icons = { Gamepad2, Luggage, Music, Bot, Globe, Terminal };
export const getProjects = (lang = 'pt') => projectsCaseStudies.map(project => {
  const Icon = icons[project.icon];
  return { ...project, id: project.slug, icon: <Icon size={24} className="accent" />,
    description: project.summary[lang], github: project.links.github, demo: project.links.demo };
});
