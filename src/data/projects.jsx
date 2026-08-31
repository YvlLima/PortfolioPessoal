import React from 'react';
import { Layers, Bot, Globe, Zap, Terminal } from 'lucide-react';

export const getProjects = (t) => [
  {
    id: 1,
    title: 'Music Hub',
    category: 'web',
    windowPath: 'src/apps/MusicHub.tsx',
    badge: {
      pt: '🚀 Live Web App',
      en: '🚀 Live Web App'
    },
    icon: <Layers size={22} className="accent" />,
    description: t.projects.proj1Desc,
    fullDesc: {
      pt: 'O Music Hub é uma plataforma web moderna e interativa desenvolvida com React e CSS3. Permite aos utilizadores pesquisar faixas musicais, controlar a reprodução áudio em tempo real, gerir listas de reprodução e navegar numa interface fluida, rápida e responsiva. O projeto foi construído com foco em performance e está alojado com integração contínua no Cloudflare Pages.',
      en: 'Music Hub is a modern, interactive web application built with React and CSS3. It allows users to search music tracks, control audio playback in real time, manage playlists, and navigate a smooth, fast, responsive interface. The project was engineered for performance and is hosted with continuous deployment on Cloudflare Pages.'
    },
    features: {
      pt: [
        'Pesquisa dinâmica e filtragem em tempo real',
        'Design moderno 100% responsivo para desktop e mobile',
        'Alojamento de alto desempenho no Cloudflare Pages',
        'Controlo avançado de reprodução áudio em Single Page Application'
      ],
      en: [
        'Dynamic real-time search and filtering',
        '100% responsive modern design for mobile & desktop',
        'High-performance hosting on Cloudflare Pages',
        'Advanced audio playback control within a Single Page Application'
      ]
    },
    tags: ['React', 'JavaScript', 'CSS3', 'Cloudflare Pages'],
    github: 'https://github.com/YvlLima/MusicHub',
    demo: 'https://musichub-9hu.pages.dev/'
  },
  {
    id: 2,
    title: 'Fazbear Nightshift',
    category: 'bots',
    windowPath: 'src/bots/FazbearNightshift.js',
    badge: {
      pt: '🤖 Discord Bot PvP',
      en: '🤖 Discord Bot PvP'
    },
    icon: <Bot size={22} className="accent" />,
    description: t.projects.proj3Desc,
    fullDesc: {
      pt: 'O Fazbear Nightshift é um bot interativo avançado para Discord inspirado no universo Five Nights at Freddy\'s. Conta com mecânicas completas de combate PvP por turnos, sistema de inventário de itens, gestão de status em tempo real, economia interna e integração com slash commands da Discord API.',
      en: 'Fazbear Nightshift is an advanced interactive Discord bot inspired by the Five Nights at Freddy\'s universe. It features turn-based PvP combat mechanics, item inventory system, real-time status management, virtual economy, and Discord API slash commands.'
    },
    features: {
      pt: [
        'Motor de batalha por turnos e lógica de jogo assíncrona',
        'Integração de comandos slash modernos da Discord API',
        'Gestão de inventário e persistência de dados de jogadores',
        'Arquitetura modular em Node.js e JavaScript ES6+'
      ],
      en: [
        'Turn-based battle engine & asynchronous game logic',
        'Modern Discord API slash command integration',
        'Inventory management and player data persistence',
        'Modular Node.js and JavaScript ES6+ architecture'
      ]
    },
    tags: ['Node.js', 'Discord.js', 'JavaScript', 'Async Logic', 'APIs'],
    github: 'https://github.com/YvlLima/FazbearNightshift'
  },
  {
    id: 3,
    title: 'Galeria Piso Dois (PAP)',
    category: 'cms',
    windowPath: 'public_html/galeriapisodois.php',
    badge: {
      pt: '⭐ PAP Destaque (GPSI)',
      en: '⭐ Top Diploma (PAP)'
    },
    icon: <Globe size={22} className="accent" />,
    description: t.projects.proj2Desc,
    fullDesc: {
      pt: 'A Galeria Piso Dois é o projeto de Prova de Aptidão Profissional (PAP) desenvolvido no âmbito do curso de Gestão e Programação de Sistemas Informáticos (GPSI) na Escola Secundária de Felgueiras. Consiste numa plataforma web comunitária e galeria digital construída sobre o CMS WordPress, permitindo a publicação, organização e arquivo dos trabalhos escolares dos alunos.',
      en: 'Galeria Piso Dois is the final High School Diploma Project (PAP) developed for the IT Management & Programming course (GPSI) at Escola Secundária de Felgueiras. It is a community web platform and digital gallery built on WordPress CMS for publishing and archiving student work.'
    },
    features: {
      pt: [
        'Plataforma completa de gestão de conteúdos (CMS WordPress)',
        'Galeria multimédia e exposição de trabalhos escolares',
        'Tema e estrutura web customizados e responsivos',
        'Projeto final de curso (PAP) com aprovação destacada'
      ],
      en: [
        'Full Content Management System platform (WordPress CMS)',
        'Multimedia gallery and exhibition for school projects',
        'Customized responsive theme and layout structure',
        'Final diploma project (PAP) with top evaluation'
      ]
    },
    tags: ['WordPress', 'CMS', 'PHP', 'Web Design', 'MySQL'],
    demo: 'https://galeriapisodois.esfelgueiras.pt/'
  },
  {
    id: 4,
    title: 'BagLess',
    category: 'web',
    windowPath: 'src/utils/BagLess.js',
    badge: {
      pt: '⚡ Produtividade & Utility',
      en: '⚡ Productivity & Utility'
    },
    icon: <Zap size={22} className="accent" />,
    description: t.projects.proj4Desc,
    fullDesc: {
      pt: 'O BagLess é um utilitário web intuitivo desenhado para auxiliar na organização de tarefas, produtividade e simplificação do dia a dia. Com uma interface minimalista e foco em velocidade, proporciona uma experiência fluida para estruturação de dados e gestão rápida.',
      en: 'BagLess is an intuitive web utility designed to streamline task organization, productivity, and daily routines. With a minimalist interface and focus on speed, it delivers a smooth experience for data structuring and quick management.'
    },
    features: {
      pt: [
        'Interface rápida e intuitiva orientada a produtividade',
        'Manipulação ágil de estado e armazenamento local',
        'Estrutura modular e código limpo (Clean Code)'
      ],
      en: [
        'Fast and intuitive productivity-oriented interface',
        'Agile state manipulation and local storage persistence',
        'Modular structure and Clean Code architecture'
      ]
    },
    tags: ['JavaScript', 'HTML5', 'CSS3', 'UI/UX', 'Productivity'],
    github: 'https://github.com/YvlLima/BagLess'
  },
  {
    id: 5,
    title: 'Portfólio Pessoal',
    category: 'web',
    windowPath: 'src/Portfolio.tsx',
    badge: {
      pt: '✨ Cyberpunk Web',
      en: '✨ Cyberpunk Web'
    },
    icon: <Terminal size={22} className="accent" />,
    description: t.projects.proj5Desc,
    fullDesc: {
      pt: 'O Portfólio Pessoal é uma Single Page Application desenvolvida em React + Vite. Apresenta design cyberpunk moderno com iluminação interativa Spotlight 3D, cursor responsivo sem atrasos, suporte bilingue (PT/EN), modais detalhados e sincronização em tempo real com a API pública do GitHub.',
      en: 'The Personal Portfolio is a Single Page Application built with React + Vite. It features a modern cyberpunk aesthetic with interactive 3D spotlight effects, lag-free cursor, bilingual support (PT/EN), detailed modals, and real-time synchronization with GitHub API.'
    },
    features: {
      pt: [
        'Iluminação dinâmica Spotlight 3D com rastreio de cursor',
        'Sincronização em direto com a REST API do GitHub (@YvlLima)',
        'Formulário com envio de email real e suporte bilingue PT/EN',
        'Arquitetura orientada a componentes modulares em React'
      ],
      en: [
        'Dynamic 3D Spotlight lighting with cursor tracking',
        'Live synchronization with GitHub REST API (@YvlLima)',
        'Real email submission form and full bilingual PT/EN support',
        'Modular component architecture built with React'
      ]
    },
    tags: ['React', 'Vite', 'CSS Tokens', 'GitHub API', 'Design 3D'],
    github: 'https://github.com/YvlLima/PortfolioPessoal'
  }
];
