export const projectsCaseStudies = [
  {
    slug: 'bagless',
    title: 'BagLess',
    tagline: 'Plataforma de aluguer de guarda-roupa para viajantes com catálogo de 40 marcas e arquitetura multi-moeda.',
    category: 'Web App & E-Commerce',
    windowPath: 'src/apps/BagLessEngine.ts',
    heroBadge: '⚡ Case Study • Travel Tech & E-Commerce',
    thumbnail: {
      gradient: 'linear-gradient(135deg, rgba(100, 255, 218, 0.15) 0%, rgba(13, 148, 136, 0.25) 100%)',
      accentColor: '#64ffda',
      iconName: 'Zap'
    },
    meta: {
      year: '2026',
      role: 'Frontend & Architecture Lead',
      duration: '4 Semanas',
      status: 'Funcional / Em Otimização'
    },
    stack: [
      { name: 'React 19', category: 'Frontend' },
      { name: 'Vite', category: 'Tooling' },
      { name: 'JavaScript (ES6+)', category: 'Language' },
      { name: 'CSS Tokens & Custom Properties', category: 'Styling' },
      { name: 'Local Storage API', category: 'Persistence' }
    ],
    links: {
      github: 'https://github.com/YvlLima/BagLess',
      demo: null
    },
    metrics: [
      { value: '40', label: 'Marcas Mapeadas no Catálogo', desc: 'Estruturação de marcas de moda organizadas por estilo e destino climático.' },
      { value: '100%', label: 'Cálculo de Preço Automatizado', desc: 'Lógica dinâmica considerando dias de aluguer, seguro e depósito caução.' },
      { value: '3', label: 'Moedas Suportadas (EUR/USD/GBP)', desc: 'Motor de conversão cambial com arredondamento e precisão financeira.' },
      { value: '< 60ms', label: 'Tempo de Resposta em Filtros', desc: 'Filtragem reativa sem latência para catálogo de dezenas de itens.' }
    ],
    context: {
      title: 'Problema & Contexto',
      paragraphs: [
        'As viagens modernas de curta e média duração enfrentam restrições cada vez mais severas de bagagem de cabine pelas companhias aéreas, com taxas exorbitantes de porão e o transtorno logístico de transportar e lavar roupas em viagem.',
        'O BagLess nasceu com o objetivo de desenhar uma solução digital onde os viajantes podem alugar conjuntos completos de vestuário diretamente no destino, filtrando peças por clima, ocasião e estilo, eliminando a necessidade de bagagem pesada.',
        'O desafio central foi conceber uma aplicação web extremamente rápida, intuitiva e com uma lógica matemática de preços robusta, que calculasse com precisão depósitos reembolsáveis, seguros de danos e conversões cambiais em tempo real.'
      ]
    },
    solution: {
      title: 'Abordagem Técnica & Principais Funcionalidades',
      paragraphs: [
        'Foi desenvolvida uma Single Page Application em React + Vite, focada em performance e modularidade de componentes. A interface adota uma estética limpa de alta tecnologia com micro-interações táteis e feedback visual imediato.',
        'O catálogo organiza mais de 40 marcas categorizadas por tipo de viagem (negócios, lazer, clima frio, verão), permitindo aos utilizadores compor malas virtuais personalizadas com seletores de datas de reserva.'
      ],
      features: [
        {
          title: 'Catálogo Modular com 40 Marcas',
          description: 'Estrutura de dados normalizada com filtragem facetada multicritério (categoria, marca, tamanho, gama de preço e clima).'
        },
        {
          title: 'Lógica de Pricing com Depósito e Seguro',
          description: 'Motor de cálculo que discrimina valor diário, taxa de higienização, franquia de seguro e depósito caução reembolsável na devolução.'
        },
        {
          title: 'Arquitetura Multi-Moeda (EUR / USD / GBP)',
          description: 'Suporte a múltiplas moedas com conversão dinâmica na camada de apresentação e persistência consistente do estado base.'
        },
        {
          title: 'Simulador de Mala Virtual & Checkout',
          description: 'Gestão de carrinho reativo com validação de datas e cálculo de capacidade cúbica estimada da bagagem poupada.'
        }
      ]
    },
    stackWhy: {
      title: 'Stack & Decisões de Arquitetura',
      items: [
        {
          tech: 'React + Vite',
          reason: 'Proporciona tempo de arranque ultrarrápido (HMR instantâneo), rendering declarativo eficiente e componentização limpa da árvore de estado dos itens alugados.'
        },
        {
          tech: 'CSS Custom Tokens & Modern Styling',
          reason: 'Garante controlo total sobre o design system, eliminando dependências pesadas e permitindo temas de contraste elevado com iluminação interativa.'
        },
        {
          tech: 'State Management com LocalStorage Sync',
          reason: 'Preserva a seleção de vestuário, moedas e datas mesmo em caso de refresh ou encerramento acidental do separador.'
        }
      ]
    },
    challenges: [
      {
        number: '01',
        title: 'Arquitetura de Pricing Multi-Moeda & Arredondamento Financeiro',
        problem: 'Flutuações cambiais e taxas compostas (diárias + seguro + caução) geravam discrepâncias de arredondamento de cêntimos ao alternar entre EUR, USD e GBP em tempo de execução.',
        solution: 'Implementação de uma função pura de cálculo financeiro baseada em inteiros (cents) na moeda base (EUR), convertendo e formatando através da API nativa Intl.NumberFormat apenas na camada visual, garantindo integridade absoluta nos totais.'
      },
      {
        number: '02',
        title: 'Gestão de Disponibilidade e Conflitos de Datas de Aluguer',
        problem: 'Necessidade de validar intervalos de datas de aluguer consecutivos sem permitir reservas com datas no passado ou períodos inferiores ao mínimo estipulado.',
        solution: 'Criação de um custom hook de calendário com verificação de sobreposição temporal (time-range overlap detection) e cálculo automático de dias de transit/higienização entre clientes.'
      },
      {
        number: '03',
        title: 'Desempenho de Filtragem de Catálogo em Dispositivos Móveis',
        problem: 'Re-renderizações excessivas ao aplicar múltiplos filtros em simultâneo (marca + tipo + preço) em ecrãs de smartphones.',
        solution: 'Otimização com useMemo e normalização da lista de produtos, reduzindo o processamento de filtragem para menos de 10ms mesmo com critérios combinados.'
      }
    ],
    results: {
      title: 'Resultados & Estado Atual',
      paragraphs: [
        'A aplicação encontra-se 100% funcional no seu fluxo de exploração, composição de mala, cálculo orçamental multi-moeda e simulação de reserva.',
        'O código está estruturado segundo as melhores práticas de modularidade em JavaScript moderno, servindo como uma prova de conceito de engenharia para e-commerce de economia circular.'
      ],
      currentStatusList: [
        'Catálogo com 40 marcas e dezenas de peças catalogadas',
        'Motor de preços transparente com discriminação de caução e seguro',
        'Seletor instantâneo de moedas (EUR, USD, GBP)',
        'Interface responsiva com suporte completo a ecrãs táteis'
      ]
    },
    gallery: [
      {
        id: 'placeholder-1',
        title: 'Catálogo de Vestuário & Filtros Facetados',
        caption: 'Interface de pesquisa e filtragem por marca e tipo de clima.',
        type: 'UI Mockup'
      },
      {
        id: 'placeholder-2',
        title: 'Motor de Preço e Detalhe de Caução',
        caption: 'Discriminação do custo diário, seguro e depósito caução reembolsável.',
        type: 'Architecture'
      },
      {
        id: 'placeholder-3',
        title: 'Simulador de Mala e Resumo de Reserva',
        caption: 'Visualização da composição da mala virtual antes do checkout.',
        type: 'Flow'
      }
    ]
  },
  {
    slug: 'musichub',
    title: 'MusicHub',
    tagline: 'Comunidade e plataforma de música portuguesa com sistema de submissão, aprovação admin e perfis públicos.',
    category: 'Full-Stack Web App',
    windowPath: 'src/services/MusicHubCore.ts',
    heroBadge: '🎵 Case Study • Full-Stack & Community Platform',
    thumbnail: {
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(100, 255, 218, 0.15) 100%)',
      accentColor: '#38bdf8',
      iconName: 'Layers'
    },
    meta: {
      year: '2026',
      role: 'Full-Stack Developer',
      duration: '6 Semanas',
      status: 'Live & Produção Contínua'
    },
    stack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Node.js & Express', category: 'Backend' },
      { name: 'PostgreSQL / Supabase', category: 'Database' },
      { name: 'Cloudflare Pages', category: 'Hosting / CDN' },
      { name: 'HTML5 Web Audio API', category: 'Media' }
    ],
    links: {
      github: 'https://github.com/YvlLima/MusicHub',
      demo: 'https://musichub-9hu.pages.dev/'
    },
    metrics: [
      { value: '100%', label: 'Fluxo de Moderação Automatizado', desc: 'Pipeline de aprovação/rejeição com feedback em tempo real para artistas.' },
      { value: 'Relacional', label: 'Modelagem de Dados Normalizada', desc: 'PostgreSQL estruturado com tabelas de utilizadores, faixas, álbuns e reviews.' },
      { value: 'Zero Latência', label: 'Streaming Áudio Web Nativo', desc: 'Player áudio contínuo sem interrupções durante a navegação entre rotas.' },
      { value: 'Edge CDN', label: 'Alojamento no Cloudflare Pages', desc: 'Deploy distribuído globalmente com alta performance de carregamento.' }
    ],
    context: {
      title: 'Problema & Contexto',
      paragraphs: [
        'O panorama musical português, especialmente no circuito independente e emergente, carece frequentemente de espaços centralizados que combinem catálogo musical, partilha comunitária e mecanismos de curadoria rigorosa.',
        'Muitas plataformas existentes ou são excessivamente burocráticas para artistas em início de carreira, ou não oferecem ferramentas comunitárias de avaliação e perfis públicos verificados.',
        'O MusicHub foi idealizado para preencher essa lacuna: uma plataforma colaborativa onde artistas e produtores podem submeter as suas criações, sujeitas a moderação por administradores, enquanto os ouvintes descobrem novas faixas, constroem reputação e interagem.'
      ]
    },
    solution: {
      title: 'Abordagem Técnica & Principais Funcionalidades',
      paragraphs: [
        'A solução assenta numa arquitetura Full-Stack desacoplada: um frontend moderno em React alojado na infraestrutura de alta velocidade do Cloudflare Pages, interligado com backend e base de dados relacional PostgreSQL gerida via Supabase.',
        'O sistema implementa papéis de utilizador rigorosos (Ouvinte, Artista, Moderador, Administrador), assegurando integridade e qualidade no catálogo público.'
      ],
      features: [
        {
          title: 'Sistema de Submissão e Aprovação Admin',
          description: 'Fluxo completo de ingestão onde novas faixas ficam em estado "Pendente" até validação por moderadores com painel administrativo dedicado.'
        },
        {
          title: 'Perfis Públicos & Discografia de Artistas',
          description: 'Páginas dinâmicas para músicos contendo biografia, links sociais, lista de álbuns, contagem de reproduções e estatísticas.'
        },
        {
          title: 'Mecanismo de Gamificação Comunitária',
          description: 'Sistema de pontos, distintivos e reputação para utilizadores que contribuem com críticas construtivas e descoberta de novos talentos.'
        },
        {
          title: 'Reprodutor de Áudio Global Persistente',
          description: 'Player áudio construído com a Web Audio API que mantém a reprodução de faixas ativa enquanto o utilizador navega pela plataforma.'
        }
      ]
    },
    stackWhy: {
      title: 'Stack & Decisões de Arquitetura',
      items: [
        {
          tech: 'PostgreSQL & Supabase',
          reason: 'Garante integridade referencial forte para relacionamentos complexos (artistas, álbuns, colaborações, permissões RBAC e avaliações).'
        },
        {
          tech: 'Node.js & Express REST API',
          reason: 'Tratamento assíncrono e eficiente de requisições de metadados, validação de streams de áudio e lógica de aprovação.'
        },
        {
          tech: 'Cloudflare Pages & Edge Network',
          reason: 'Garante tempos de carregamento (TTFB) inferiores a 100ms e escalabilidade global com zero custos de infraestrutura de servidor estático.'
        }
      ]
    },
    challenges: [
      {
        number: '01',
        title: 'Sistema de Permissões RBAC & Moderação Assíncrona',
        problem: 'Necessidade de isolar estritamente o painel de aprovação para administradores, impedindo submissões não verificadas de poluir o feed público.',
        solution: 'Desenho de políticas de segurança ao nível de linha (RLS - Row Level Security) na base de dados e middleware de autenticação JWT que valida roles antes de autorizar transações de aprovação.'
      },
      {
        number: '02',
        title: 'Persistência de Áudio Sem Interrupções na SPA',
        problem: 'Ao navegar entre diferentes páginas (perfil de artista, catálogo, pesquisa), a reprodução da música era interrompida devido ao ciclo de vida dos componentes.',
        solution: 'Elevação do estado do áudio para um Context Provider global no topo da hierarquia React, desacoplando o elemento áudio da vista ativa.'
      },
      {
        number: '03',
        title: 'Otimização de Consultas de Discografia e Pesquisa',
        problem: 'Lentidão em pesquisas textuais quando filtradas simultaneamente por género musical, artista e ano de lançamento.',
        solution: 'Criação de índices compostos e Full-Text Search no PostgreSQL, resultando em respostas de pesquisa inferiores a 40ms.'
      }
    ],
    results: {
      title: 'Resultados & Estado Atual',
      paragraphs: [
        'O MusicHub encontra-se alojado publicamente e em evolução contínua, com sistema de submissão e áudio operacional.',
        'A plataforma demonstra uma arquitetura escalável e resiliente, pronta para expansão de volume de utilizadores e integração de streaming avançado.'
      ],
      currentStatusList: [
        'Aplicação disponível em produção no Cloudflare Pages',
        'Painel administrativo com fila de moderação de faixas',
        'Perfis de artistas com reprodução direta e gestão de metadados',
        'Base de dados relacional normalizada e segura'
      ]
    },
    gallery: [
      {
        id: 'placeholder-1',
        title: 'Feed Principal & Player em Tempo Real',
        caption: 'Interface de descoberta com reprodutor áudio persistente no rodapé.',
        type: 'UI Mockup'
      },
      {
        id: 'placeholder-2',
        title: 'Painel de Aprovação de Artistas (Admin)',
        caption: 'Fila de moderação com opções de aprovar, rejeitar ou solicitar revisão.',
        type: 'Admin Panel'
      },
      {
        id: 'placeholder-3',
        title: 'Perfil Público de Artista e Discografia',
        caption: 'Apresentação detalhada de álbuns, faixas e estatísticas de audição.',
        type: 'Profile'
      }
    ]
  },
  {
    slug: 'fazbear-nightshift',
    title: 'Fazbear Nightshift',
    tagline: 'Bot Discord PvP temático FNAF com motor de combate por turnos, SQLite e 27 animatronics com atributos únicos.',
    category: 'Discord Bot & Game Engine',
    windowPath: 'src/engine/FazbearBattleEngine.js',
    heroBadge: '🤖 Case Study • Game Engine & Discord API',
    thumbnail: {
      gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
      accentColor: '#f43f5e',
      iconName: 'Bot'
    },
    meta: {
      year: '2026',
      role: 'Backend & Game Systems Developer',
      duration: '8 Semanas',
      status: 'Operacional / Comandos Slash Ativos'
    },
    stack: [
      { name: 'Node.js', category: 'Runtime' },
      { name: 'Discord.js v14', category: 'Bot Framework' },
      { name: 'SQLite (better-sqlite3)', category: 'Database' },
      { name: 'Async Queue & Events', category: 'Architecture' },
      { name: 'Discord REST / Slash Commands', category: 'API' }
    ],
    links: {
      github: 'https://github.com/YvlLima/FazbearNightshift',
      demo: null
    },
    metrics: [
      { value: '27', label: 'Animatronics com Stats Únicos', desc: 'Personagens balanceados individualmente com Vida, Ataque, Defesa, Velocidade e Habilidade.' },
      { value: '100% Turn-based', label: 'Motor de Combate Determinístico', desc: 'Sistema com cálculo de crítico, esquiva, status conditions (Stun, Bleed, Burn) e cooldowns.' },
      { value: 'Zero Concorrência', label: 'Transações Atómicas SQLite', desc: 'Prevenção total de duplicação de moedas ou race conditions em apostas de duelos.' },
      { value: '< 200ms', label: 'Tempo de Resposta em Comandos', desc: 'Interações interativas imediatas com botões e menus de seleção da Discord API.' }
    ],
    context: {
      title: 'Problema & Contexto',
      paragraphs: [
        'Muitos bots de jogos no Discord sofrem de mecânicas simplistas de "jogar dados", onde o combate se resume a números aleatórios sem estratégia, profundidade ou progressão real.',
        'O Fazbear Nightshift foi concebido para transformar servidores de Discord em arenas de estratégia inspiradas no universo de Five Nights at Freddy\'s, com combates PvP tácticos por turnos, gestão de inventário e economia interna sustentável.',
        'O desafio de engenharia foi implementar um motor de jogo assíncrono em Node.js capaz de gerir múltiplos duelos simultâneos sem bloquear o event loop e sem sofrer de condições de corrida (race conditions) no saldo dos jogadores.'
      ]
    },
    solution: {
      title: 'Abordagem Técnica & Principais Funcionalidades',
      paragraphs: [
        'O bot foi construído sobre Discord.js v14 e SQLite de alta performance, tirando partido de comandos slash modernos, botões interativos e select menus para uma experiência de jogo nativa na aplicação.',
        'O núcleo do sistema é um motor de combate por turnos que calcula ordem de iniciativa, resistências e habilidades passivas de 27 personagens distintos.'
      ],
      features: [
        {
          title: '27 Animatronics com Fichas Técnicas Únicas',
          description: 'Cada animatronic possui matriz de atributos (HP, ATK, DEF, SPD, Crit Rate) e uma habilidade especial exclusiva com custo de energia.'
        },
        {
          title: 'Motor de Batalha PvP em Tempo Real / Turnos',
          description: 'Duelos interativos com temporizadores de turno, botões de Ataque, Defesa, Habilidade Especial e Fuga com cálculo determinístico de dano.'
        },
        {
          title: 'Economia & Sistema de Inventário Persistente',
          description: 'Mecanismo de moedas (Faz-Coins), loja de consumíveis (baterias, lanternas, chips de melhoria) e drops pós-batalha.'
        },
        {
          title: 'Gestão Concorrente com SQLite Transacional',
          description: 'Transações em base de dados ACID prevenindo exploits de clonagem de itens e race conditions em apostas simultâneas.'
        }
      ]
    },
    stackWhy: {
      title: 'Stack & Decisões de Arquitetura',
      items: [
        {
          tech: 'Node.js & Discord.js v14',
          reason: 'Arquitetura orientada a eventos ideal para processar streams contínuos de mensagens e interações de botões com baixa latência.'
        },
        {
          tech: 'SQLite (better-sqlite3)',
          reason: 'Base de dados embutida síncrona ultrarrápida (in-process), que elimina overhead de rede e garante transações ACID atómicas.'
        },
        {
          tech: 'State Machine de Combate Modular',
          reason: 'Desacopla a lógica matemática de batalha dos manipuladores de eventos da API do Discord, permitindo testes unitários fáceis.'
        }
      ]
    },
    challenges: [
      {
        number: '01',
        title: 'Prevenção de Race Conditions em Apostas e Inventário',
        problem: 'Utilizadores podiam tentar iniciar múltiplos duelos em simultâneo para duplicar moedas ou usar o mesmo item duas vezes antes da escrita em disco.',
        solution: 'Uso de transações atómicas com WAL (Write-Ahead Logging) no SQLite e bloqueio de estado em memória (mutex por utilizador) durante as batalhas ativas.'
      },
      {
        number: '02',
        title: 'Gestão de Timeouts e Desconexões a Meio do Turno',
        problem: 'Se um jogador ignorasse o seu turno no Discord, o duelo ficava suspenso indefinidamente consumindo recursos de memória.',
        solution: 'Implementação de temporizadores por turno com handlers automáticos que passam o turno ou declaram derrota por abandono após 45 segundos de inatividade.'
      },
      {
        number: '03',
        title: 'Balanceamento Matemático dos 27 Animatronics',
        problem: 'Garantir que animatronics com alta velocidade não dominassem totalmente os combates nem que personagens tanques fossem invencíveis.',
        solution: 'Criação de fórmulas de atenuação de dano logarítmicas (Armor Scaling) e simulação de 10.000 batalhas automatizadas para calibrar os valores de atributos.'
      }
    ],
    results: {
      title: 'Resultados & Estado Atual',
      paragraphs: [
        'O Fazbear Nightshift conta com 27 animatronics totalmente jogáveis e balanceados, economia operacional e comandos slash integrados.',
        'A estrutura modular permite a adição rápida de novos modos de jogo (como Raids cooperativas ou modo Night Guard Endless Survival).'
      ],
      currentStatusList: [
        '27 personagens implementados com árvores de atributos próprias',
        'Motor de combate por turnos completo com status effects',
        'Base de dados SQLite otimizada com zero duplicados',
        'Interface do utilizador 100% baseada em botões e embeds da Discord API'
      ]
    },
    gallery: [
      {
        id: 'placeholder-1',
        title: 'Interface de Batalha com Embed & Botões de Ação',
        caption: 'Demonstração de um turno de combate com barra de vida e botões de ataque/habilidade.',
        type: 'Discord Embed'
      },
      {
        id: 'placeholder-2',
        title: 'Ficha de Estatísticas do Animatronic',
        caption: 'Exibição de atributos (Vida, Ataque, Defesa) e descrição da habilidade única.',
        type: 'Stats Screen'
      },
      {
        id: 'placeholder-3',
        title: 'Inventário e Loja de Faz-Coins',
        caption: 'Gestão de consumíveis e saldo de moedas ganhas em duelos.',
        type: 'Inventory'
      }
    ]
  }
];

export const getCaseStudyBySlug = (slug) => {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  return projectsCaseStudies.find((p) => p.slug === cleanSlug) || null;
};
