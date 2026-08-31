import React from 'react';
import { Briefcase } from 'lucide-react';

export const getRecommendationLetters = (lang) => [
  {
    id: 'rec-12',
    year: '12.º Ano (FCT)',
    company: 'Diga Mais – Equipamentos e Serviços Informáticos',
    role: lang === 'pt' ? 'Estágio Curricular Final de Curso' : 'Final Curriculum Internship',
    period: '2024 / 2025',
    badge: lang === 'pt' ? 'Estágio 12.º Ano • Recomendação' : '12th Grade Internship • Recommendation',
    desc: lang === 'pt'
      ? 'Carta de recomendação e avaliação formal emitida pela Diga Mais. Reconhece o desempenho exemplar, autonomia técnica e capacidade de resolução de problemas em ambiente de trabalho.'
      : 'Formal recommendation and performance evaluation issued by Diga Mais. Recognizes exemplary dedication, technical autonomy, and problem-solving skills in a workplace environment.',
    modalData: {
      title: lang === 'pt' ? 'Carta de Recomendação — Estágio 12.º Ano' : 'Recommendation Letter — 12th Grade Internship',
      badge: 'Diga Mais – Equipamentos e Serviços Informáticos',
      icon: <Briefcase size={28} />,
      desc: {
        pt: 'Carta de recomendação obtida no término do estágio curricular de 12.º ano (FCT) do curso profissional de Gestão e Programação de Sistemas Informáticos (GPSI) na empresa Diga Mais. A entidade atesta o rigor profissional, pontualidade, facilidade no diagnóstico e suporte informático.',
        en: 'Formal recommendation letter received upon completing the 12th-grade curriculum internship (FCT) in IT Systems Management & Programming (GPSI) at Diga Mais. Highlights professional rigor, punctuality, diagnostic skills, and IT customer support.'
      },
      highlights: {
        pt: [
          'Avaliação de excelência no estágio curricular de fim de curso (FCT)',
          'Manutenção, diagnóstico e reparação de equipamentos informáticos e redes',
          'Instalação, configuração e suporte a sistemas operativos e software',
          'Forte sentido de responsabilidade, assiduidade e espírito de equipa'
        ],
        en: [
          'Top performance evaluation in the final vocational internship (FCT)',
          'Hardware diagnosis, maintenance, and computer networking support',
          'Operating systems and software installation & troubleshooting',
          'Strong sense of responsibility, punctuality, and collaborative teamwork'
        ]
      }
    }
  },
  {
    id: 'rec-11',
    year: '11.º Ano (FCT)',
    company: 'Diga Mais – Equipamentos e Serviços Informáticos',
    role: lang === 'pt' ? 'Primeiro Estágio Curricular' : 'First Curriculum Internship',
    period: '2023 / 2024',
    badge: lang === 'pt' ? 'Estágio 11.º Ano • Recomendação' : '11th Grade Internship • Recommendation',
    desc: lang === 'pt'
      ? 'Carta de recomendação emitida pela Diga Mais no primeiro ano de formação em contexto de trabalho. Salienta a rápida curva de aprendizagem e integração exemplar na equipa técnica.'
      : 'Recommendation letter issued by Diga Mais during the first vocational internship period. Highlights quick learning curve and exemplary integration with the technical team.',
    modalData: {
      title: lang === 'pt' ? 'Carta de Recomendação — Estágio 11.º Ano' : 'Recommendation Letter — 11th Grade Internship',
      badge: 'Diga Mais – Equipamentos e Serviços Informáticos',
      icon: <Briefcase size={28} />,
      desc: {
        pt: 'Carta de recomendação emitida pela Diga Mais relativa ao estágio curricular do 11.º ano do curso de GPSI. Demonstrou grande motivação, adaptação rápida ao ambiente de trabalho e cumprimento rigoroso das tarefas técnicas atribuídas.',
        en: 'Recommendation letter issued by Diga Mais for the 11th-grade curriculum internship in the GPSI vocational course. Demonstrated strong motivation, rapid workplace adaptability, and thorough execution of technical tasks.'
      },
      highlights: {
        pt: [
          'Integração bem-sucedida em ambiente profissional de serviços de informática',
          'Apoio técnico, preparação e montagem de computadores e periféricos',
          'Diagnóstico ágil de problemas de hardware e conectividade de rede',
          'Pontualidade, proatividade e rigor na execução das tarefas'
        ],
        en: [
          'Successful integration into a professional IT services company',
          'Technical support, assembly, and configuration of PCs and peripherals',
          'Prompt diagnosis of hardware and network connectivity issues',
          'Punctuality, proactive attitude, and precision in execution'
        ]
      }
    }
  }
];
