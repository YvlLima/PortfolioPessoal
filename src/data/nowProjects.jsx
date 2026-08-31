import React from 'react';
import { Bot } from 'lucide-react';

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
  }
];
