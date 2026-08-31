import React from 'react';
import { BookOpen } from 'lucide-react';

export const getNowProjects = (lang, t) => [
  {
    id: 'now-1',
    title: lang === 'pt' ? 'Consolidação & Aprendizagem Ativa' : 'Learning & Technical Consolidation',
    category: 'focus',
    status: t.now.statusFocus || (lang === 'pt' ? 'Foco & Aprendizagem' : 'Focus & Learning'),
    badge: lang === 'pt' ? '📚 Estudo & Investigação' : '📚 Study & Research',
    icon: <BookOpen size={24} className="accent" />,
    shortDesc: {
      pt: 'De momento, não me encontro a desenvolver nenhum projeto pessoal em paralelo. Estou totalmente dedicado à consolidação de competências técnicas, foco no percurso académico e ao planeamento de novos desafios.',
      en: 'Currently, I am not actively developing any side projects. I am fully dedicating my time to consolidating technical skills, focusing on my academic path, and planning upcoming challenges.'
    },
    fullDesc: {
      pt: 'Neste momento não tenho nenhum projeto ativo em desenvolvimento, aproveitando esta fase para aprofundar conhecimentos teóricos e práticos em Cibersegurança, Redes e Desenvolvimento Web moderno, explorar novas tecnologias e preparar-me para oportunidades e desafios profissionais.',
      en: 'At this moment I do not have any active side projects in development. I am taking this phase to deepen theoretical and practical knowledge in Cybersecurity, Networks, and modern Web Development, exploring new technologies, and preparing for future professional opportunities.'
    },
    highlights: {
      pt: [
        'Consolidação de conceitos em Cibersegurança, Redes e Sistemas',
        'Aprofundamento de arquiteturas e boas práticas em Desenvolvimento Web',
        'Exploração e estudo contínuo de novas tecnologias e ferramentas',
        'Disponível para novas oportunidades, colaborações e estágios na área'
      ],
      en: [
        'Consolidating core concepts in Cybersecurity, Networks, and Systems',
        'Deepening architecture principles and best practices in Web Development',
        'Continuous research and hands-on learning with modern tools',
        'Open to new opportunities, collaborations, and IT internships'
      ]
    },
    tags: lang === 'pt'
      ? ['Estudo Contínuo', 'Cibersegurança', 'Desenvolvimento Web', 'Disponível']
      : ['Continuous Learning', 'Cybersecurity', 'Web Development', 'Open to Opportunities'],
    github: 'https://github.com/YvlLima'
  }
];
