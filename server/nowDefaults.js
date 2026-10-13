import { getNowProjects } from '../src/data/nowProjects.js';
import { validateNowContent } from '../src/utils/nowContent.js';

export function defaultNowContent() {
  const pt = getNowProjects('pt'), en = getNowProjects('en');
  return validateNowContent({
    subtitle: { pt: 'Projetos em curso e o que estou a aprender.', en: 'Work in progress and what I’m learning.' },
    projects: pt.map((project, index) => ({
      id: project.id, visible: true, iconName: project.iconName,
      title: { pt: project.title, en: en[index].title },
      status: { pt: project.status, en: en[index].status },
      badge: { pt: project.badge || '', en: en[index].badge || '' },
      shortDesc: project.shortDesc,
      linkText: project.linkText || {pt:'Explorar projeto',en:'Explore project'},
      slug: project.slug || '', link: project.link || '',
    })),
  });
}
