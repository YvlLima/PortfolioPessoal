import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export const getTimelineItems = (t) => [
  {
    period: t.education.edu1Period,
    degree: t.education.edu1Degree,
    institution: t.education.edu1Inst,
    description: t.education.edu1Desc,
    modalData: {
      title: t.education.edu1Degree,
      badge: 'ESTG — Politécnico do Porto',
      icon: <GraduationCap size={28} />,
      desc: {
        pt: 'Curso Superior de Tecnologia Especializada (CTeSP) em Cibersegurança, Redes e Sistemas Informáticos na Escola Superior de Tecnologia e Gestão (ESTG) do Politécnico do Porto. Proporciona formação sólida e prática em infraestruturas digitais seguras, programação web e administração de sistemas.',
        en: 'Associate Degree (CTeSP) in Cybersecurity, Networks, and Computer Systems at ESTG - P.PORTO. Delivers solid practical training in secure digital infrastructure, web development, and systems administration.'
      },
      highlights: {
        pt: [
          'Programação para a Web (React, JavaScript, Node.js, CSS3)',
          'Redes de Computadores & Administração de Sistemas (TCP/IP, Linux/Windows)',
          'Ferramentas de Cibersegurança & Análise de Vulnerabilidades',
          'Bases de Dados Relacionais & Fundamentos de POO (C# / Java)'
        ],
        en: [
          'Web Programming (React, JavaScript, Node.js, CSS3)',
          'Computer Networks & Systems Administration (TCP/IP, Linux/Windows)',
          'Cybersecurity Tools & Vulnerability Assessment',
          'Relational Databases & OOP Fundamentals (C# / Java)'
        ]
      }
    }
  },
  {
    period: t.education.edu2Period,
    degree: t.education.edu2Degree,
    institution: t.education.edu2Inst,
    description: t.education.edu2Desc,
    modalData: {
      title: t.education.edu2Degree,
      badge: 'Escola Secundária de Felgueiras',
      icon: <GraduationCap size={28} />,
      desc: {
        pt: 'Curso Profissional Nível IV de Gestão e Programação de Sistemas Informáticos (GPSI). Abrangeu a aprendizagem de fundamentos de programação, arquitetura de computadores, modulação de bases de dados e culminou com o desenvolvimento do projeto final PAP (Galeria Piso Dois).',
        en: 'Vocational IT Systems Management & Programming Diploma (GPSI - Level IV). Covered programming fundamentals, computer architecture, relational database design, and culminated in the development of the final diploma project (Galeria Piso Dois).'
      },
      highlights: {
        pt: [
          'Lógica de Programação & Algoritmos (C#)',
          'Desenvolvimento Web & CMS WordPress (Galeria Piso Dois - PAP)',
          'Modelação e Consultas SQL em Bases de Dados Relacionais',
          'Montagem, Manutenção e Configuração de Equipamentos e Redes'
        ],
        en: [
          'Programming Logic & Algorithms (C#)',
          'Web Development & WordPress CMS (Galeria Piso Dois - PAP)',
          'Relational Database Design & SQL Queries',
          'Hardware Assembly, Maintenance & Network Configuration'
        ]
      }
    }
  }
];

export const getCertifications = (lang) => [
  {
    title: lang === 'pt' ? 'Técnico de Gestão e Programação de Sistemas Informáticos (GPSI)' : 'IT Systems Management & Programming Diploma (GPSI)',
    issuer: 'ESF',
    desc: lang === 'pt' ? 'Diploma de ensino profissional de nível IV com especialização em programação e redes.' : 'Level IV Vocational IT diploma with specialization in programming & system administration.',
    modalData: {
      title: lang === 'pt' ? 'Diploma Técnico de GPSI (Nível IV - QNQ)' : 'Vocational IT Diploma (Level IV - EQF)',
      badge: 'Escola Secundária de Felgueiras',
      icon: <Award size={28} />,
      desc: {
        pt: 'Certificação de Qualificação Profissional Nível IV do Quadro Nacional de Qualificações (QNQ) obtido na Escola Secundária de Felgueiras. Acredita competências em desenvolvimento de software, gestão de bases de dados e redes de computadores.',
        en: 'Level IV Professional Qualification Certificate from the National Qualifications Framework (QNQ) obtained at Escola Secundária de Felgueiras. Certifies competencies in software development, database management, and computer networks.'
      },
      highlights: {
        pt: [
          'Nível 4 do QNQ / EQF (Quadro Europeu de Qualificações)',
          'Especialização em Desenvolvimento de Aplicações e Redes',
          'Classificação destacada na Prova de Aptidão Profissional (PAP)',
          'Acesso ao Ensino Superior e CTeSP'
        ],
        en: [
          'Level 4 NQF / EQF (European Qualifications Framework)',
          'Specialization in Application Development & Networking',
          'Top grade on the Final Diploma Project (PAP)',
          'Path to Higher Education & Associate Degrees'
        ]
      }
    }
  }
];
