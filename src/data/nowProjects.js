import { getCaseStudyBySlug } from './projectsData.js';

export const getNowProjects = (lang = 'pt') => {
  const sengoku = getCaseStudyBySlug('sengoku');
  return [
    {
      id: 'now-sengoku',
      slug: sengoku.slug,
      title: sengoku.title,
      category: 'games',
      status: sengoku.status[lang],
      badge: lang === 'pt' ? 'Protótipo publicado · Godot 4.4+' : 'Published prototype · Godot 4.4+',
      iconName: 'Gamepad2',
      shortDesc: sengoku.summary,
      fullDesc: sengoku.context,
      highlights: sengoku.features,
      tags: sengoku.tags,
      github: sengoku.links.github,
    },
    {
      id: 'now-academic',
      title: lang === 'pt' ? 'Formação & Cibersegurança' : 'Cybersecurity & Education',
      category: 'systems',
      status: lang === 'pt' ? 'Em frequência (2.º ano)' : 'Enrolled (2nd year)',
      badge: 'ESTG — P.PORTO',
      iconName: 'GraduationCap',
      shortDesc: {
        pt: 'A frequentar o 2.º ano do CTeSP em Cibersegurança, Redes e Sistemas Informáticos na ESTG — P.PORTO, com foco em administração e segurança de redes.',
        en: 'Enrolled in the 2nd year of the Cybersecurity, Networks and Systems CTeSP at ESTG — P.PORTO, focusing on network administration and security.'
      },
      link: '#educacao',
      linkText: {
        pt: 'Ver percurso',
        en: 'View background'
      }
    }
  ];
};
