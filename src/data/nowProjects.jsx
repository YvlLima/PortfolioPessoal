import React from 'react';
import { Bot, Gamepad2 } from 'lucide-react';

export const getNowProjects = (lang, t) => [
  {
    id: 'now-1',
    title: 'Fazbear Nightshift',
    category: 'bot',
    status: t.now.statusInDevelopment,
    badge: lang === 'pt' ? '🤖 Bot Discord PvP' : '🤖 Discord PvP Bot',
    icon: <Bot size={24} className="accent" />,
    shortDesc: {
      pt: 'Bot de Discord interativo com temática Five Nights at Freddy\'s, focado em mecânicas de combate PvP por turnos, economia e inventário.',
      en: 'Interactive Discord bot themed after Five Nights at Freddy\'s, featuring turn-based PvP combat mechanics, economy, and inventory management.'
    },
    fullDesc: {
      pt: 'O Fazbear Nightshift é um bot interativo de Discord desenvolvido em Node.js e Discord.js. Apresenta sistema de combate PvP estratégico por turnos, gestão de inventário em tempo real, progressão de personagens e comandos modernos slash integrados com a Discord API.',
      en: 'Fazbear Nightshift is an interactive Discord bot developed in Node.js with Discord.js. It features a strategic turn-based PvP combat engine, real-time inventory management, character progression, and modern Discord API slash commands.'
    },
    highlights: {
      pt: [
        'Motor de batalha por turnos com lógica assíncrona',
        'Comandos modernos slash da Discord API v10',
        'Sistema de economia interna e persistência de itens',
        'Arquitetura modular em JavaScript ES6+'
      ],
      en: [
        'Turn-based battle engine with asynchronous logic',
        'Modern Discord API v10 slash command integration',
        'In-game virtual economy and item persistence',
        'Modular architecture in JavaScript ES6+'
      ]
    },
    tags: ['JavaScript', 'Node.js', 'Discord.js', 'APIs', 'Async Logic'],
    github: 'https://github.com/YvlLima/FazbearNightshift'
  },
  {
    id: 'now-2',
    title: 'Roblox Ancient Ruins (Simulator)',
    category: 'game',
    status: t.now.statusInDevelopment,
    badge: lang === 'pt' ? '🎮 Jogo Roblox & AI Workflow' : '🎮 Roblox & AI Workflow',
    icon: <Gamepad2 size={24} className="accent" />,
    shortDesc: {
      pt: 'Jogo estilo Clicker/Simulator com temática de ruínas antigas, construído com Rojo, Luau e pipelines de desenvolvimento assistidos por IA.',
      en: 'Clicker/Simulator game set in an Ancient Ruins theme, developed with Rojo, Luau, and AI-assisted development pipelines.'
    },
    fullDesc: {
      pt: 'Experiência imersiva no Roblox no género Simulator/Clicker ambientada em ruínas ancestrais. O desenvolvimento recorre à ferramenta Rojo para sincronização de código externo (VS Code) com o Roblox Studio, scripting avançado em Luau e recurso a inteligência artificial para otimização de modelos lógicos e balanceamento de gameplay.',
      en: 'Immersive Roblox Simulator/Clicker experience set in an ancient ruins world. Development leverages Rojo for external code synchronization between VS Code and Roblox Studio, advanced Luau scripting, and AI-assisted workflows for logic optimization and gameplay balancing.'
    },
    highlights: {
      pt: [
        'Ambiente de desenvolvimento profissional com Rojo & VS Code',
        'Scripting de mecânicas de jogo e física em Luau',
        'Pipelines de desenvolvimento assistidos por Inteligência Artificial',
        'Sistemas de progressão, multiplicadores e economia escalável'
      ],
      en: [
        'Professional developer workflow with Rojo & VS Code',
        'Game mechanics & physics scripting in Luau',
        'AI-assisted development & prototyping pipelines',
        'Progression systems, multipliers, and scalable economy'
      ]
    },
    tags: ['Luau', 'Roblox Studio', 'Rojo', 'Game Dev', 'AI Workflows']
  }
];
