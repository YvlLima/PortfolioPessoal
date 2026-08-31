import React from 'react';
import {
  Code,
  Layers,
  Terminal,
  Cpu,
  Zap,
  FolderGit2,
  Globe,
  ShieldCheck,
  Brain,
  Users,
  Search
} from 'lucide-react';

// Skills Técnicas
export const skillsList = [
  {
    id: 'html5',
    name: 'HTML5',
    catKey: 'frontend',
    icon: <Code size={22} />,
    desc: {
      pt: 'Estruturação semântica de páginas web, acessibilidade (WAI-ARIA), boas práticas de SEO e marcação limpa para aplicações web modernas e responsivas.',
      en: 'Semantic web page structure, accessibility (WAI-ARIA), SEO best practices, and clean markup for modern, responsive web applications.'
    },
    highlights: ['Estruturação Semântica', 'Acessibilidade (WAI-ARIA)', 'Boas Práticas SEO', 'Formulários & Validação']
  },
  {
    id: 'css3',
    name: 'CSS3',
    catKey: 'frontend',
    icon: <Layers size={22} />,
    desc: {
      pt: 'Estilização avançada com Flexbox, CSS Grid, variáveis CSS (Design Tokens), animações/transições suaves e layouts totalmente responsivos para todos os ecrãs.',
      en: 'Advanced styling with Flexbox, CSS Grid, CSS Variables (Design Tokens), smooth animations/transitions, and responsive layouts for all screen sizes.'
    },
    highlights: ['Flexbox & CSS Grid', 'Design Tokens & Variáveis', 'Animações & Transições', 'Design Responsivo']
  },
  {
    id: 'js',
    name: 'JavaScript (ES6+)',
    catKey: 'frontend',
    icon: <Terminal size={22} />,
    desc: {
      pt: 'Lógica de programação avançada para web, manipulação dinâmica do DOM, funções assíncronas (Promises, Async/Await), consumo de APIs RESTful e ES Modules.',
      en: 'Advanced web programming logic, dynamic DOM manipulation, async JavaScript (Promises, Async/Await), RESTful API integration, and ES Modules.'
    },
    highlights: ['ES6+ Syntax', 'Async / Await & Fetch', 'Manipulação do DOM', 'APIs RESTful']
  },
  {
    id: 'react',
    name: 'React',
    catKey: 'frontend',
    icon: <Code size={22} />,
    desc: {
      pt: 'Criação de aplicações web interativas (SPAs) e componentes reutilizáveis utilizando Hooks (useState, useEffect, useRef), gestão de estado e otimização.',
      en: 'Building interactive Single Page Applications (SPAs) and reusable components using Hooks (useState, useEffect, useRef), state management, and optimization.'
    },
    highlights: ['React Hooks', 'Componentes Reutilizáveis', 'Gestão de Estado', 'Single Page Apps (SPA)']
  },
  {
    id: 'python',
    name: 'Python',
    catKey: 'languages',
    icon: <Terminal size={22} />,
    desc: {
      pt: 'Desenvolvimento de scripts de automação, manipulação de ficheiros e dados, algoritmos de lógica de programação e ferramentas de suporte a cibersegurança.',
      en: 'Automation scripting, file and data manipulation, core programming logic algorithms, and cybersecurity utility scripts.'
    },
    highlights: ['Scripting & Automação', 'Lógica & Algoritmos', 'Manipulação de Ficheiros', 'Ferramentas de Segurança']
  },
  {
    id: 'csharp',
    name: 'C#',
    catKey: 'languages',
    icon: <Cpu size={22} />,
    desc: {
      pt: 'Programação Orientada a Objetos (POO), desenvolvimento de aplicações com a plataforma .NET, manipulação de classes, interfaces, herança e coleções.',
      en: 'Object-Oriented Programming (OOP), application development with .NET, class hierarchy, interfaces, inheritance, and data structures.'
    },
    highlights: ['Programação Orientada a Objetos', 'Plataforma .NET', 'Estruturas de Dados', 'Arquitetura de Código']
  },
  {
    id: 'sql',
    name: 'SQL / Databases',
    catKey: 'backend',
    icon: <Cpu size={22} />,
    desc: {
      pt: 'Modelação e gestão de bases de dados relacionais (MySQL/PostgreSQL), criação de tabelas, consultas otimizadas (SELECT, JOINs, subqueries) e integridade referencial.',
      en: 'Relational database modeling and management (MySQL/PostgreSQL), schema design, optimized SQL queries (JOINs, subqueries), and data integrity.'
    },
    highlights: ['Modelação Relacional', 'Queries Avançadas (JOINs)', 'MySQL & PostgreSQL', 'Integridade de Dados']
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    catKey: 'backend',
    icon: <Zap size={22} />,
    desc: {
      pt: 'Ambiente de execução JavaScript no lado do servidor, desenvolvimento de APIs RESTful, gestão de módulos npm e comunicação assíncrona com bases de dados.',
      en: 'Server-side JavaScript runtime environment, RESTful API development, npm module management, and async database communication.'
    },
    highlights: ['Server-side JavaScript', 'APIs RESTful', 'Ecossistema npm', 'Serviços Backend']
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    catKey: 'tools',
    icon: <FolderGit2 size={22} />,
    desc: {
      pt: 'Controlo de versões distribuído, gestão de branches, commits organizados, Pull Requests, resolução de conflitos e alojamento de código no GitHub.',
      en: 'Distributed version control, branch management, clean commits, Pull Requests, conflict resolution, and GitHub repository hosting.'
    },
    highlights: ['Controlo de Versões', 'Git Flow & Branches', 'Colaboração GitHub', 'Histórico & Commits']
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    catKey: 'cms',
    icon: <Globe size={22} />,
    desc: {
      pt: 'Desenvolvimento e personalização de plataformas web sobre o CMS WordPress, configuração de temas, plugins e projeto da PAP (Galeria Piso Dois).',
      en: 'CMS website development & customization, theme configuration, plugin integration, and final high school diploma project (Galeria Piso Dois).'
    },
    highlights: ['Customização CMS', 'Gestão de Conteúdos', 'Integração de Plugins', 'Projeto PAP']
  },
  {
    id: 'security',
    name: 'Cibersegurança & Redes',
    catKey: 'systems',
    icon: <ShieldCheck size={22} />,
    desc: {
      pt: 'Fundamentos de redes de computadores, modelo OSI, protocolos (TCP/IP, DNS, HTTP/S), análise de pacotes, conceitos de segurança informática, firewalls e permissões.',
      en: 'Computer networking fundamentals, OSI model, protocols (TCP/IP, DNS, HTTP/S), packet analysis, cybersecurity principles, firewalls, and permissions.'
    },
    highlights: ['Redes & Protocolos (TCP/IP)', 'Análise de Segurança', 'Firewalls & Permissões', 'ESTG CTeSP']
  },
];

// Soft Skills
export const getSoftSkills = (lang) => [
  {
    title: lang === 'pt' ? 'Resolução de Problemas' : 'Problem Solving',
    desc: lang === 'pt' ? 'Foco analítico para decompor desafios complexos em soluções simples e eficientes.' : 'Analytical mindset to break complex challenges into simple, performant solutions.',
    icon: <Brain size={22} />,
    modalData: {
      title: lang === 'pt' ? 'Resolução de Problemas' : 'Problem Solving',
      badge: 'Competência Analítica',
      icon: <Brain size={22} />,
      desc: {
        pt: 'Possuo uma abordagem estruturada para enfrentar desafios técnicos. Seja a diagnosticar erros em código, resolver conflitos de rede ou otimizar algoritmos, procuro entender a causa raiz do problema para construir soluções duradouras e eficientes.',
        en: 'I apply a structured approach to solving technical challenges. Whether diagnosing code bugs, troubleshooting network issues, or optimizing algorithms, I seek the root cause to build sustainable, efficient solutions.'
      },
      highlights: {
        pt: [
          'Depuração (debugging) minuciosa de código e erros de execução',
          'Decomposição de algoritmos e problemas em passos lógicos',
          'Otimização de rotinas de código e requisições',
          'Foco em simplicidade e manutenção a longo prazo'
        ],
        en: [
          'Thorough code debugging and error investigation',
          'Breaking algorithms into clear logical steps',
          'Code optimization and request efficiency',
          'Focus on simplicity and maintainability'
        ]
      }
    }
  },
  {
    title: lang === 'pt' ? 'Trabalho em Equipa' : 'Teamwork & Collaboration',
    desc: lang === 'pt' ? 'Facilidade de comunicação e integração em equipas multidisciplinares.' : 'Strong communication skills and ease of integration into multidisciplinary teams.',
    icon: <Users size={22} />,
    modalData: {
      title: lang === 'pt' ? 'Trabalho em Equipa' : 'Teamwork & Collaboration',
      badge: 'Comunicação & Colaboração',
      icon: <Users size={22} />,
      desc: {
        pt: 'Valorizo um ambiente colaborativo onde o conhecimento é partilhado livremente. Tenho facilidade em comunicar ideias técnicas de forma clara, ouvir opiniões diferentes e colaborar através de controlo de versões (Git/GitHub) em projetos de grupo.',
        en: 'I value a collaborative environment where knowledge is shared openly. I communicate technical concepts clearly, listen actively to diverse perspectives, and collaborate seamlessly using version control (Git/GitHub) on group projects.'
      },
      highlights: {
        pt: [
          'Comunicação clara e assertiva com colegas e tutores',
          'Trabalho colaborativo com Git Flow, Pull Requests e revisão de código',
          'Abertura a críticas construtivas e melhoria contínua',
          'Espírito de entreajuda e partilha de boas práticas'
        ],
        en: [
          'Clear communication with peers and mentors',
          'Collaborative workflow with Git, Pull Requests & Code Reviews',
          'Receptive to constructive feedback and continuous growth',
          'Team spirit and sharing best practices'
        ]
      }
    }
  },
  {
    title: lang === 'pt' ? 'Aprendizagem Rápida' : 'Fast Learner',
    desc: lang === 'pt' ? 'Capacidade de assimilar rapidamente novas linguagens, frameworks e tecnologias.' : 'High capacity to absorb new languages, frameworks, and cloud technologies quickly.',
    icon: <Zap size={22} />,
    modalData: {
      title: lang === 'pt' ? 'Aprendizagem Rápida' : 'Fast Learner',
      badge: 'Adaptabilidade & Autonomia',
      icon: <Zap size={22} />,
      desc: {
        pt: 'A área tecnológica evolui a um ritmo acelerado. Tenho uma forte paixão pela aprendizagem autodidata, conseguindo explorar documentação oficial, construir protótipos funcionais e dominar novas ferramentas de forma rápida e autónoma.',
        en: 'Technology evolves rapidly. I am passionate about self-driven learning, able to digest official documentation, build working prototypes, and master new tools quickly and autonomously.'
      },
      highlights: {
        pt: [
          'Pesquisa autónoma e leitura fluida de documentação técnica',
          'Facilidade na transição entre diferentes linguagens (JS, Python, C#)',
          'Adoção rápida de novos métodos de trabalho e ferramentas',
          'Proatividade em projetos pessoais de consolidação'
        ],
        en: [
          'Autonomous research and reading technical docs',
          'Seamless transition between languages (JS, Python, C#)',
          'Fast adoption of new workflows and developer tools',
          'Proactive creation of personal side-projects'
        ]
      }
    }
  },
  {
    title: lang === 'pt' ? 'Atenção ao Detalhe' : 'Attention to Detail',
    desc: lang === 'pt' ? 'Rigor na escrita de código limpo (Clean Code) e verificação de boas práticas.' : 'Rigorous focus on writing Clean Code, security principles, and UI precision.',
    icon: <Search size={22} />,
    modalData: {
      title: lang === 'pt' ? 'Atenção ao Detalhe' : 'Attention to Detail',
      badge: 'Qualidade & Clean Code',
      icon: <Search size={22} />,
      desc: {
        pt: 'Acredito que os detalhes fazem toda a diferença na qualidade do software. Presto especial atenção à organização de código, nomenclaturas intuitivas, responsividade de interfaces e prevenção de falhas de segurança ou bugs visuais.',
        en: 'I believe details define software quality. I pay meticulous attention to code organization, naming conventions, UI responsiveness, and preventing visual bugs or security vulnerabilities.'
      },
      highlights: {
        pt: [
          'Escrita de código limpo (Clean Code) e bem estruturado',
          'Rigor no alinhamento visual e responsividade em múltiplos ecrãs',
          'Verificação de requisitos de segurança e acessibilidade',
          'Validação rigorosa de dados de entrada em formulários'
        ],
        en: [
          'Writing clean, well-structured code',
          'Precision in visual alignment and responsiveness across devices',
          'Security & accessibility standards verification',
          'Strict input validation and edge-case handling'
        ]
      }
    }
  }
];
