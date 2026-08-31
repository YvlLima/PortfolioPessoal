import React from 'react';
import { GraduationCap, ShieldCheck, Globe } from 'lucide-react';

export const getAboutStatsList = (t) => [
  {
    id: 'stat1',
    title: t.about.stat1Title,
    desc: t.about.stat1Desc,
    icon: <GraduationCap size={28} className="stat-icon" />,
    modalData: {
      title: t.about.stat1Title,
      badge: 'ESTG — Politécnico do Porto',
      icon: <GraduationCap size={28} />,
      desc: {
        pt: 'Atualmente a frequentar o 2.º ano do CTeSP em Cibersegurança, Redes e Sistemas Informáticos na Escola Superior de Tecnologia e Gestão (ESTG - P.PORTO). O curso combina vertentes práticas de administração de redes, segurança digital, programação web e gestão de sistemas.',
        en: 'Currently enrolled in the 2nd year of the CTeSP Associate Degree in Cybersecurity, Networks, and Computer Systems at ESTG - P.PORTO. The program combines hands-on network administration, digital security, web development, and systems management.'
      },
      highlights: {
        pt: [
          'Administração e Configuração de Redes de Computadores',
          'Ferramentas de Cibersegurança e Análise de Vulnerabilidades',
          'Desenvolvimento Web (React, JavaScript, HTML5, CSS3)',
          'Bases de Dados Relacionais e Programação Orientada a Objetos'
        ],
        en: [
          'Computer Network Administration & Configuration',
          'Cybersecurity Tools & Vulnerability Analysis',
          'Web Development (React, JavaScript, HTML5, CSS3)',
          'Relational Databases & Object-Oriented Programming'
        ]
      }
    }
  },
  {
    id: 'stat2',
    title: t.about.stat2Title,
    desc: t.about.stat2Desc,
    icon: <ShieldCheck size={28} className="stat-icon" />,
    modalData: {
      title: t.about.stat2Title,
      badge: 'Desenvolvimento & Segurança',
      icon: <ShieldCheck size={28} />,
      desc: {
        pt: 'O meu foco técnico combina o desenvolvimento frontend e backend moderno com princípios fundamentais de cibersegurança e redes. Procuro sempre escrever código limpo, seguro e otimizado para proporcionar uma excelente experiência de utilização.',
        en: 'My technical focus combines modern frontend & backend development with core cybersecurity principles. I aim to write clean, secure, and optimized code that delivers an outstanding user experience.'
      },
      highlights: {
        pt: [
          'Criação de Web Apps Responsivas e Dinâmicas',
          'Princípios de Segurança de Software e Prevenção de Vulnerabilidades',
          'Boas Práticas de UI/UX e Design Moderno',
          'Integração de APIs RESTful e Gestão de Estado'
        ],
        en: [
          'Building Responsive & Dynamic Web Apps',
          'Software Security Principles & Vulnerability Prevention',
          'Modern UI/UX Best Practices',
          'RESTful API Integration & State Management'
        ]
      }
    }
  },
  {
    id: 'stat3',
    title: t.about.stat3Title,
    desc: t.about.stat3Desc,
    icon: <Globe size={28} className="stat-icon" />,
    modalData: {
      title: t.about.stat3Title,
      badge: 'Evolução Profissional',
      icon: <Globe size={28} />,
      desc: {
        pt: 'Após a conclusão do CTeSP, o meu objetivo imediato é ingressar na Licenciatura em Segurança Informática em Redes de Computadores para aprofundar competências práticas em defesa de infraestruturas, análise de vulnerabilidades e arquitetura de redes seguras, paralelamente à integração no mercado de trabalho como Junior Developer ou Estagiário.',
        en: 'Upon completing the CTeSP degree, my immediate goal is to pursue a B.Sc. in Information Security in Computer Networks to deepen practical competencies in infrastructure defense, vulnerability assessment, and secure network architectures, while entering the job market as a Junior Developer or Intern.'
      },
      highlights: {
        pt: [
          'Prossecução de estudos na Licenciatura em Segurança Informática em Redes de Computadores',
          'Procura ativa de estágio profissional',
          'Desenvolvimento contínuo de projetos reais no GitHub',
          'Disponibilidade para integrar equipas de desenvolvimento web / segurança'
        ],
        en: [
          'Enrolling in a B.Sc. in Information Security in Computer Networks',
          'Actively looking for internships',
          'Continuous development of real-world projects on GitHub',
          'Ready to contribute to web development / security'
        ]
      }
    }
  }
];
