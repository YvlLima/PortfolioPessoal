export const projectsCaseStudies = [
  {
    slug: 'bagless',
    title: 'BagLess',
    tagline: {
      pt: 'Plataforma de aluguer de guarda-roupa para viajantes com catálogo de 40 marcas e arquitetura multi-moeda.',
      en: 'Wardrobe rental platform for travelers featuring a 40-brand catalog and multi-currency architecture.'
    },
    category: {
      pt: 'Web App & E-Commerce',
      en: 'Web App & E-Commerce'
    },
    windowPath: 'src/apps/BagLessEngine.ts',
    heroBadge: {
      pt: '⚡ Case Study • Travel Tech & E-Commerce',
      en: '⚡ Case Study • Travel Tech & E-Commerce'
    },
    thumbnail: {
      gradient: 'linear-gradient(135deg, rgba(100, 255, 218, 0.15) 0%, rgba(13, 148, 136, 0.25) 100%)',
      accentColor: '#64ffda',
      iconName: 'Zap'
    },
    meta: {
      year: '2026',
      role: {
        pt: 'Frontend & Architecture Lead',
        en: 'Frontend & Architecture Lead'
      },
      duration: {
        pt: '4 Semanas',
        en: '4 Weeks'
      },
      status: {
        pt: 'Funcional / Em Otimização',
        en: 'Functional / In Optimization'
      }
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
      {
        value: '40',
        label: {
          pt: 'Marcas Mapeadas no Catálogo',
          en: 'Brands Mapped in Catalog'
        },
        desc: {
          pt: 'Estruturação de marcas de moda organizadas por estilo e destino climático.',
          en: 'Structured fashion brands categorized by style and climate destination.'
        }
      },
      {
        value: '100%',
        label: {
          pt: 'Cálculo de Preço Automatizado',
          en: 'Automated Price Computation'
        },
        desc: {
          pt: 'Lógica dinâmica considerando dias de aluguer, seguro e depósito caução.',
          en: 'Dynamic logic calculating rental duration, damage protection, and security deposits.'
        }
      },
      {
        value: '3',
        label: {
          pt: 'Moedas Suportadas (EUR/USD/GBP)',
          en: 'Supported Currencies (EUR/USD/GBP)'
        },
        desc: {
          pt: 'Motor de conversão cambial com arredondamento e precisão financeira.',
          en: 'Currency conversion engine with exact financial precision and rounding.'
        }
      },
      {
        value: '< 60ms',
        label: {
          pt: 'Tempo de Resposta em Filtros',
          en: 'Filter Response Time'
        },
        desc: {
          pt: 'Filtragem reativa sem latência para catálogo de dezenas de itens.',
          en: 'Zero-latency reactive filtering across dozens of catalog items.'
        }
      }
    ],
    context: {
      pt: {
        title: 'Problema & Contexto',
        paragraphs: [
          'As viagens modernas de curta e média duração enfrentam restrições cada vez mais severas de bagagem de cabine pelas companhias aéreas, com taxas exorbitantes de porão e o transtorno logístico de transportar e lavar roupas em viagem.',
          'O BagLess nasceu com o objetivo de desenhar uma solução digital onde os viajantes podem alugar conjuntos completos de vestuário diretamente no destino, filtrando peças por clima, ocasião e estilo, eliminando a necessidade de bagagem pesada.',
          'O desafio central foi conceber uma aplicação web extremamente rápida, intuitiva e com uma lógica matemática de preços robusta, que calculasse com precisão depósitos reembolsáveis, seguros de danos e conversões cambiais em tempo real.'
        ]
      },
      en: {
        title: 'Problem & Context',
        paragraphs: [
          'Short- and medium-duration modern travel faces increasingly strict airline cabin luggage restrictions, accompanied by steep hold luggage fees and the logistical hassle of carrying and laundering clothes on the go.',
          'BagLess was designed to provide a digital solution where travelers can rent curated wardrobe sets directly at their destination, filtering apparel by climate, occasion, and style, eliminating the burden of heavy luggage.',
          'The core challenge was engineering an ultra-fast, intuitive web application with a resilient pricing calculation engine that accurately handles refundable security deposits, damage insurance, and real-time currency conversions.'
        ]
      }
    },
    solution: {
      pt: {
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
      en: {
        title: 'Technical Approach & Key Features',
        paragraphs: [
          'A performance-focused Single Page Application was developed using React + Vite, emphasizing component modularity and low latency. The interface delivers a clean high-tech aesthetic with tactile micro-interactions and instant visual feedback.',
          'The catalog indexes over 40 brands categorized by travel type (business, leisure, cold weather, summer), allowing users to assemble custom virtual suitcases with reservation date pickers.'
        ],
        features: [
          {
            title: 'Modular Catalog with 40 Brands',
            description: 'Normalized data structure with multi-criteria faceted filtering (category, brand, size, price range, and climate destination).'
          },
          {
            title: 'Pricing Engine with Deposit & Insurance',
            description: 'Calculation engine breaking down daily rates, sanitization fees, insurance deductibles, and refundable security deposits.'
          },
          {
            title: 'Multi-Currency Architecture (EUR / USD / GBP)',
            description: 'Multi-currency support with dynamic conversion in the presentation layer and consistent base-currency state persistence.'
          },
          {
            title: 'Virtual Suitcase Simulator & Checkout',
            description: 'Reactive cart management with date validation and cubic capacity calculation for estimated luggage saved.'
          }
        ]
      }
    },
    stackWhy: {
      pt: {
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
      en: {
        title: 'Stack & Architecture Decisions',
        items: [
          {
            tech: 'React + Vite',
            reason: 'Provides ultra-fast startup and instant HMR, efficient declarative rendering, and clean state componentization for rental items.'
          },
          {
            tech: 'CSS Custom Tokens & Modern Styling',
            reason: 'Ensures complete control over the design system, eliminating heavy dependencies while supporting high-contrast themes and interactive lighting.'
          },
          {
            tech: 'State Management with LocalStorage Sync',
            reason: 'Preserves clothing selections, currency preference, and dates across browser refreshes or accidental tab closures.'
          }
        ]
      }
    },
    challenges: [
      {
        number: '01',
        pt: {
          title: 'Arquitetura de Pricing Multi-Moeda & Arredondamento Financeiro',
          problem: 'Flutuações cambiais e taxas compostas (diárias + seguro + caução) geravam discrepâncias de arredondamento de cêntimos ao alternar entre EUR, USD e GBP em tempo de execução.',
          solution: 'Implementação de uma função pura de cálculo financeiro baseada em inteiros (cents) na moeda base (EUR), convertendo e formatando através da API nativa Intl.NumberFormat apenas na camada visual, garantindo integridade absoluta nos totais.'
        },
        en: {
          title: 'Multi-Currency Pricing Architecture & Financial Rounding',
          problem: 'Exchange rate conversions and composite fees (daily rate + insurance + deposit) caused cent-rounding discrepancies when switching between EUR, USD, and GBP at runtime.',
          solution: 'Implemented a pure financial computation function operating in base integer cents (EUR), converting and formatting strictly via the native Intl.NumberFormat API in the presentation layer to ensure total mathematical integrity.'
        }
      },
      {
        number: '02',
        pt: {
          title: 'Gestão de Disponibilidade e Conflitos de Datas de Aluguer',
          problem: 'Necessidade de validar intervalos de datas de aluguer consecutivos sem permitir reservas com datas no passado ou períodos inferiores ao mínimo estipulado.',
          solution: 'Criação de um custom hook de calendário com verificação de sobreposição temporal (time-range overlap detection) e cálculo automático de dias de transit/higienização entre clientes.'
        },
        en: {
          title: 'Availability Management & Rental Date Conflict Handling',
          problem: 'Need to validate consecutive rental date ranges while preventing past-date bookings or intervals below the mandatory minimum rental window.',
          solution: 'Built a custom calendar hook with time-range overlap detection and automatic turnaround calculation for cleaning and transit between clients.'
        }
      },
      {
        number: '03',
        pt: {
          title: 'Desempenho de Filtragem de Catálogo em Dispositivos Móveis',
          problem: 'Re-renderizações excessivas ao aplicar múltiplos filtros em simultâneo (marca + tipo + preço) em ecrãs de smartphones.',
          solution: 'Otimização com useMemo e normalização da lista de produtos, reduzindo o processamento de filtragem para menos de 10ms mesmo com critérios combinados.'
        },
        en: {
          title: 'Catalog Filtering Performance on Mobile Devices',
          problem: 'Excessive re-renders when applying multiple simultaneous facet filters (brand + type + price range) on mobile devices.',
          solution: 'Optimized product list processing with useMemo and normalized data structures, reducing filtering latency to under 10ms under combined multi-filter conditions.'
        }
      }
    ],
    results: {
      pt: {
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
      en: {
        title: 'Results & Current Status',
        paragraphs: [
          'The application is 100% operational across catalog exploration, custom suitcase assembly, multi-currency budgeting, and booking simulation.',
          'The codebase follows modern JavaScript modularity best practices, acting as an engineering proof of concept for circular economy e-commerce.'
        ],
        currentStatusList: [
          'Curated catalog with 40 brands and dozens of cataloged items',
          'Transparent pricing engine breaking down deposits and insurance',
          'Instant multi-currency selector (EUR, USD, GBP)',
          'Responsive interface with comprehensive touch support'
        ]
      }
    },
    gallery: [
      {
        id: 'placeholder-1',
        type: 'UI Mockup',
        pt: {
          title: 'Catálogo de Vestuário & Filtros Facetados',
          caption: 'Interface de pesquisa e filtragem por marca e tipo de clima.'
        },
        en: {
          title: 'Garment Catalog & Faceted Filters',
          caption: 'Search and filtering interface categorized by brand and climate destination.'
        }
      },
      {
        id: 'placeholder-2',
        type: 'Architecture',
        pt: {
          title: 'Motor de Preço e Detalhe de Caução',
          caption: 'Discriminação do custo diário, seguro e depósito caução reembolsável.'
        },
        en: {
          title: 'Pricing Engine & Deposit Breakdown',
          caption: 'Detailed breakdown of daily costs, insurance, and refundable security deposits.'
        }
      },
      {
        id: 'placeholder-3',
        type: 'Flow',
        pt: {
          title: 'Simulador de Mala e Resumo de Reserva',
          caption: 'Visualização da composição da mala virtual antes do checkout.'
        },
        en: {
          title: 'Suitcase Simulator & Booking Summary',
          caption: 'Virtual suitcase composition overview prior to checkout initiation.'
        }
      }
    ]
  },
  {
    slug: 'musichub',
    title: 'MusicHub',
    tagline: {
      pt: 'Comunidade e plataforma de música portuguesa com sistema de submissão, aprovação admin e perfis públicos.',
      en: 'Portuguese music community and platform featuring a submission pipeline, admin approval, and public profiles.'
    },
    category: {
      pt: 'Full-Stack Web App',
      en: 'Full-Stack Web App'
    },
    windowPath: 'src/services/MusicHubCore.ts',
    heroBadge: {
      pt: '🎵 Case Study • Full-Stack & Community Platform',
      en: '🎵 Case Study • Full-Stack & Community Platform'
    },
    thumbnail: {
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(100, 255, 218, 0.15) 100%)',
      accentColor: '#38bdf8',
      iconName: 'Layers'
    },
    meta: {
      year: '2026',
      role: {
        pt: 'Full-Stack Developer',
        en: 'Full-Stack Developer'
      },
      duration: {
        pt: '6 Semanas',
        en: '6 Weeks'
      },
      status: {
        pt: 'Live & Produção Contínua',
        en: 'Live & Continuous Production'
      }
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
      {
        value: '100%',
        label: {
          pt: 'Fluxo de Moderação Automatizado',
          en: 'Automated Moderation Workflow'
        },
        desc: {
          pt: 'Pipeline de aprovação/rejeição com feedback em tempo real para artistas.',
          en: 'Approval/rejection pipeline with real-time feedback for submitting artists.'
        }
      },
      {
        value: 'Relacional',
        label: {
          pt: 'Modelagem de Dados Normalizada',
          en: 'Normalized Data Modeling'
        },
        desc: {
          pt: 'PostgreSQL estruturado com tabelas de utilizadores, faixas, álbuns e reviews.',
          en: 'Structured PostgreSQL schema with relational tables for users, tracks, albums, and reviews.'
        }
      },
      {
        value: 'Zero Latência',
        label: {
          pt: 'Streaming Áudio Web Nativo',
          en: 'Native Web Audio Streaming'
        },
        desc: {
          pt: 'Player áudio contínuo sem interrupções durante a navegação entre rotas.',
          en: 'Uninterrupted audio playback maintained seamlessly across client-side route changes.'
        }
      },
      {
        value: 'Edge CDN',
        label: {
          pt: 'Alojamento no Cloudflare Pages',
          en: 'Cloudflare Pages Edge CDN'
        },
        desc: {
          pt: 'Deploy distribuído globalmente com alta performance de carregamento.',
          en: 'Globally distributed edge deployment delivering high-speed asset delivery and sub-100ms TTFB.'
        }
      }
    ],
    context: {
      pt: {
        title: 'Problema & Contexto',
        paragraphs: [
          'O panorama musical português, especialmente no circuito independente e emergente, carece frequentemente de espaços centralizados que combinem catálogo musical, partilha comunitária e mecanismos de curadoria rigorosa.',
          'Muitas plataformas existentes ou são excessivamente burocráticas para artistas em início de carreira, ou não oferecem ferramentas comunitárias de avaliação e perfis públicos verificados.',
          'O MusicHub foi idealizado para preencher essa lacuna: uma plataforma colaborativa onde artistas e produtores podem submeter as suas criações, sujeitas a moderação por administradores, enquanto os ouvintes descobrem novas faixas, constroem reputação e interagem.'
        ]
      },
      en: {
        title: 'Problem & Context',
        paragraphs: [
          'The Portuguese music landscape, especially within the independent and emerging scene, frequently lacks centralized hubs combining music discovery, community engagement, and curated quality control.',
          'Existing platforms are often either overly bureaucratic for early-career independent artists or lack dedicated community review mechanisms and verified public artist profiles.',
          'MusicHub was conceived to bridge this gap: a collaborative platform where artists and producers submit tracks for admin moderation, while listeners discover new music, build reputation, and engage.'
        ]
      }
    },
    solution: {
      pt: {
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
      en: {
        title: 'Technical Approach & Key Features',
        paragraphs: [
          'The solution is built on a decoupled Full-Stack architecture: a modern React frontend hosted on Cloudflare Pages edge infrastructure, connected to a backend and a relational PostgreSQL database managed via Supabase.',
          'The system implements robust Role-Based Access Control (Listener, Artist, Moderator, Administrator) to enforce content integrity across the public catalog.'
        ],
        features: [
          {
            title: 'Submission Pipeline & Admin Approval',
            description: 'Complete ingestion workflow where submitted tracks remain in a "Pending" state until reviewed in a dedicated moderation queue.'
          },
          {
            title: 'Public Artist Profiles & Discography',
            description: 'Dynamic pages for musicians featuring bios, social links, full album discography, play counts, and analytics.'
          },
          {
            title: 'Community Gamification Mechanics',
            description: 'Points, badges, and reputation scoring for users who provide constructive reviews and highlight rising artists.'
          },
          {
            title: 'Persistent Global Audio Player',
            description: 'Audio player built on HTML5 Web Audio API that maintains continuous playback during SPA route navigation.'
          }
        ]
      }
    },
    stackWhy: {
      pt: {
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
      en: {
        title: 'Stack & Architecture Decisions',
        items: [
          {
            tech: 'PostgreSQL & Supabase',
            reason: 'Enforces strong referential integrity for complex domain models (artists, albums, collaborations, RBAC policies, and reviews).'
          },
          {
            tech: 'Node.js & Express REST API',
            reason: 'Asynchronous and efficient handling of metadata queries, audio stream validation, and moderation endpoints.'
          },
          {
            tech: 'Cloudflare Pages & Edge Network',
            reason: 'Ensures sub-100ms TTFB and global scalability with zero static server maintenance overhead.'
          }
        ]
      }
    },
    challenges: [
      {
        number: '01',
        pt: {
          title: 'Sistema de Permissões RBAC & Moderação Assíncrona',
          problem: 'Necessidade de isolar estritamente o painel de aprovação para administradores, impedindo submissões não verificadas de poluir o feed público.',
          solution: 'Desenho de políticas de segurança ao nível de linha (RLS - Row Level Security) na base de dados e middleware de autenticação JWT que valida roles antes de autorizar transações de aprovação.'
        },
        en: {
          title: 'RBAC Permission System & Asynchronous Moderation',
          problem: 'Need to strictly isolate admin approval workflows and prevent unverified submissions from leaking into the public catalog.',
          solution: 'Designed database Row Level Security (RLS) policies paired with JWT authentication middleware to validate user roles before permitting state transitions.'
        }
      },
      {
        number: '02',
        pt: {
          title: 'Persistência de Áudio Sem Interrupções na SPA',
          problem: 'Ao navegar entre diferentes páginas (perfil de artista, catálogo, pesquisa), a reprodução da música era interrompida devido ao ciclo de vida dos componentes.',
          solution: 'Elevação do estado do áudio para um Context Provider global no topo da hierarquia React, desacoplando o elemento áudio da vista ativa.'
        },
        en: {
          title: 'Uninterrupted Audio Persistence Across SPA Navigation',
          problem: 'Navigating across routes (artist profile, catalog, search) caused playback interruptions due to standard React component unmounting.',
          solution: 'Lifted audio player state into a global React Context Provider high in the tree, decoupling the audio element lifecycle from active page views.'
        }
      },
      {
        number: '03',
        pt: {
          title: 'Otimização de Consultas de Discografia e Pesquisa',
          problem: 'Lentidão em pesquisas textuais quando filtradas simultaneamente por género musical, artista e ano de lançamento.',
          solution: 'Criação de índices compostos e Full-Text Search no PostgreSQL, resultando em respostas de pesquisa inferiores a 40ms.'
        },
        en: {
          title: 'Discography & Full-Text Search Query Optimization',
          problem: 'Performance lag during complex text searches combined with simultaneous filters for genre, artist name, and release year.',
          solution: 'Created composite B-tree indexes and PostgreSQL Full-Text Search vectors, bringing multi-criteria query response times below 40ms.'
        }
      }
    ],
    results: {
      pt: {
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
      en: {
        title: 'Results & Current Status',
        paragraphs: [
          'MusicHub is publicly deployed and actively maintained, with fully operational submission, moderation, and audio playback engines.',
          'The architecture proves resilient and scalable, prepared for increased user volume and future streaming integrations.'
        ],
        currentStatusList: [
          'Application deployed in production on Cloudflare Pages',
          'Admin control panel with pending track moderation queue',
          'Artist profiles with direct playback and metadata management',
          'Secure, normalized relational database with RLS policies'
        ]
      }
    },
    gallery: [
      {
        id: 'placeholder-1',
        type: 'UI Mockup',
        pt: {
          title: 'Feed Principal & Player em Tempo Real',
          caption: 'Interface de descoberta com reprodutor áudio persistente no rodapé.'
        },
        en: {
          title: 'Main Feed & Persistent Player',
          caption: 'Discovery interface with persistent bottom audio player bar.'
        }
      },
      {
        id: 'placeholder-2',
        type: 'Admin Panel',
        pt: {
          title: 'Painel de Aprovação de Artistas (Admin)',
          caption: 'Fila de moderação com opções de aprovar, rejeitar ou solicitar revisão.'
        },
        en: {
          title: 'Artist Moderation Panel (Admin)',
          caption: 'Review queue with actions to approve, reject, or request revisions.'
        }
      },
      {
        id: 'placeholder-3',
        type: 'Profile',
        pt: {
          title: 'Perfil Público de Artista e Discografia',
          caption: 'Apresentação detalhada de álbuns, faixas e estatísticas de audição.'
        },
        en: {
          title: 'Public Artist Profile & Discography',
          caption: 'Detailed overview of albums, track listings, and stream metrics.'
        }
      }
    ]
  },
  {
    slug: 'fazbear-nightshift',
    title: 'Fazbear Nightshift',
    tagline: {
      pt: 'Bot Discord PvP temático FNAF com motor de combate por turnos, SQLite e 27 animatronics com atributos únicos.',
      en: 'FNAF-themed PvP Discord bot featuring a turn-based battle engine, SQLite, and 27 animatronics with unique attributes.'
    },
    category: {
      pt: 'Discord Bot & Game Engine',
      en: 'Discord Bot & Game Engine'
    },
    windowPath: 'src/engine/FazbearBattleEngine.js',
    heroBadge: {
      pt: '🤖 Case Study • Game Engine & Discord API',
      en: '🤖 Case Study • Game Engine & Discord API'
    },
    thumbnail: {
      gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
      accentColor: '#f43f5e',
      iconName: 'Bot'
    },
    meta: {
      year: '2026',
      role: {
        pt: 'Backend & Game Systems Developer',
        en: 'Backend & Game Systems Developer'
      },
      duration: {
        pt: '8 Semanas',
        en: '8 Weeks'
      },
      status: {
        pt: 'Operacional / Comandos Slash Ativos',
        en: 'Operational / Slash Commands Active'
      }
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
      {
        value: '27',
        label: {
          pt: 'Animatronics com Stats Únicos',
          en: 'Animatronics with Unique Stats'
        },
        desc: {
          pt: 'Personagens balanceados individualmente com Vida, Ataque, Defesa, Velocidade e Habilidade.',
          en: 'Individually balanced characters with Health, Attack, Defense, Speed, and Ability.'
        }
      },
      {
        value: '100% Turn-based',
        label: {
          pt: 'Motor de Combate Determinístico',
          en: 'Deterministic Battle Engine'
        },
        desc: {
          pt: 'Sistema com cálculo de crítico, esquiva, status conditions (Stun, Bleed, Burn) e cooldowns.',
          en: 'Turn-based system calculating critical hits, evasion, status effects (Stun, Bleed, Burn), and cooldowns.'
        }
      },
      {
        value: 'Zero Concorrência',
        label: {
          pt: 'Transações Atómicas SQLite',
          en: 'Atomic SQLite Transactions'
        },
        desc: {
          pt: 'Prevenção total de duplicação de moedas ou race conditions em apostas de duelos.',
          en: 'Total prevention of item duplication or race conditions during simultaneous duel wagers.'
        }
      },
      {
        value: '< 200ms',
        label: {
          pt: 'Tempo de Resposta em Comandos',
          en: 'Command Response Time'
        },
        desc: {
          pt: 'Interações interativas imediatas com botões e menus de seleção da Discord API.',
          en: 'Instant interactive feedback through Discord API buttons and select menus.'
        }
      }
    ],
    context: {
      pt: {
        title: 'Problema & Contexto',
        paragraphs: [
          'Muitos bots de jogos no Discord sofrem de mecânicas simplistas de "jogar dados", onde o combate se resume a números aleatórios sem estratégia, profundidade ou progressão real.',
          'O Fazbear Nightshift foi concebido para transformar servidores de Discord em arenas de estratégia inspiradas no universo de Five Nights at Freddy\'s, com combates PvP tácticos por turnos, gestão de inventário e economia interna sustentável.',
          'O desafio de engenharia foi implementar um motor de jogo assíncrono em Node.js capaz de gerir múltiplos duelos simultâneos sem bloquear o event loop e sem sofrer de condições de corrida (race conditions) no saldo dos jogadores.'
        ]
      },
      en: {
        title: 'Problem & Context',
        paragraphs: [
          'Many Discord game bots rely on oversimplified dice-roll mechanics where combat boils down to random numbers without strategy, depth, or meaningful player progression.',
          'Fazbear Nightshift was created to turn Discord servers into strategic battle arenas inspired by Five Nights at Freddy\'s, featuring tactical turn-based PvP combat, inventory management, and a sustainable in-game economy.',
          'The core engineering challenge was developing an asynchronous Node.js game engine capable of running multiple concurrent duels without blocking the event loop or introducing race conditions in player balances.'
        ]
      }
    },
    solution: {
      pt: {
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
      en: {
        title: 'Technical Approach & Key Features',
        paragraphs: [
          'The bot was built with Discord.js v14 and high-performance SQLite, taking advantage of modern slash commands, interactive buttons, and select menus for a native in-app gameplay experience.',
          'The core of the system is a turn-based combat engine calculating initiative order, damage resistances, and passive abilities for 27 distinct characters.'
        ],
        features: [
          {
            title: '27 Animatronics with Unique Stat Sheets',
            description: 'Each character features custom stat matrices (HP, ATK, DEF, SPD, Crit Rate) and an exclusive special ability with energy cost.'
          },
          {
            title: 'Turn-Based PvP Battle Engine',
            description: 'Interactive duels with turn timers, action buttons (Attack, Defend, Special Ability, Flee), and deterministic damage calculation.'
          },
          {
            title: 'Economy & Persistent Inventory System',
            description: 'Faz-Coin currency loop, consumable store (batteries, flashlights, upgrade chips), and post-battle loot drops.'
          },
          {
            title: 'Concurrency Safety via Transactional SQLite',
            description: 'ACID database transactions preventing item duplication exploits and race conditions in concurrent wagers.'
          }
        ]
      }
    },
    stackWhy: {
      pt: {
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
      en: {
        title: 'Stack & Architecture Decisions',
        items: [
          {
            tech: 'Node.js & Discord.js v14',
            reason: 'Event-driven architecture well suited for processing continuous streams of message events and button interactions with low latency.'
          },
          {
            tech: 'SQLite (better-sqlite3)',
            reason: 'Ultra-fast in-process synchronous embedded database eliminating network overhead while guaranteeing atomic ACID transactions.'
          },
          {
            tech: 'Modular Combat State Machine',
            reason: 'Decouples battle math from Discord API event handlers, enabling straightforward state validation and unit testing.'
          }
        ]
      }
    },
    challenges: [
      {
        number: '01',
        pt: {
          title: 'Prevenção de Race Conditions em Apostas e Inventário',
          problem: 'Utilizadores podiam tentar iniciar múltiplos duelos em simultâneo para duplicar moedas ou usar o mesmo item duas vezes antes da escrita em disco.',
          solution: 'Uso de transações atómicas com WAL (Write-Ahead Logging) no SQLite e bloqueio de estado em memória (mutex por utilizador) durante as batalhas ativas.'
        },
        en: {
          title: 'Race Condition Prevention in Wagering and Inventory',
          problem: 'Users could attempt to launch simultaneous duels to duplicate currency or consume an item twice prior to disk writes.',
          solution: 'Utilized atomic SQLite transactions with Write-Ahead Logging (WAL) and in-memory mutex locks per user during active battles.'
        }
      },
      {
        number: '02',
        pt: {
          title: 'Gestão de Timeouts e Desconexões a Meio do Turno',
          problem: 'Se um jogador ignorasse o seu turno no Discord, o duelo ficava suspenso indefinidamente consumindo recursos de memória.',
          solution: 'Implementação de temporizadores por turno com handlers automáticos que passam o turno ou declaram derrota por abandono após 45 segundos de inatividade.'
        },
        en: {
          title: 'Turn Timeouts & Disconnection Handling',
          problem: 'If a player abandoned their turn in Discord, active battles hung indefinitely, holding allocated memory.',
          solution: 'Implemented per-turn countdown timers with automatic event handlers that forfeit or pass turns after 45 seconds of inactivity.'
        }
      },
      {
        number: '03',
        pt: {
          title: 'Balanceamento Matemático dos 27 Animatronics',
          problem: 'Garantir que animatronics com alta velocidade não dominassem totalmente os combates nem que personagens tanques fossem invencíveis.',
          solution: 'Criação de fórmulas de atenuação de dano logarítmicas (Armor Scaling) e simulação de 10.000 batalhas automatizadas para calibrar os valores de atributos.'
        },
        en: {
          title: 'Mathematical Balancing of 27 Animatronics',
          problem: 'Preventing high-speed characters from dominating initiative loops while ensuring tank animatronics remained defeatable.',
          solution: 'Developed logarithmic damage mitigation curves (Armor Scaling) and ran 10,000 automated battle simulations to calibrate base stats.'
        }
      }
    ],
    results: {
      pt: {
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
      en: {
        title: 'Results & Current Status',
        paragraphs: [
          'Fazbear Nightshift features 27 fully playable and balanced animatronics, an active economy loop, and integrated slash commands.',
          'The modular structure allows seamless addition of future game modes (such as cooperative Raids or Endless Survival).'
        ],
        currentStatusList: [
          '27 characters implemented with custom attribute sheets',
          'Comprehensive turn-based battle engine with status effects',
          'Optimized SQLite database with zero race conditions',
          '100% button- and embed-driven Discord API user interface'
        ]
      }
    },
    gallery: [
      {
        id: 'placeholder-1',
        type: 'Discord Embed',
        pt: {
          title: 'Interface de Batalha com Embed & Botões de Ação',
          caption: 'Demonstração de um turno de combate com barra de vida e botões de ataque/habilidade.'
        },
        en: {
          title: 'Battle Interface with Embed & Action Buttons',
          caption: 'Combat turn demonstration showing health bars and attack/ability buttons.'
        }
      },
      {
        id: 'placeholder-2',
        type: 'Stats Screen',
        pt: {
          title: 'Ficha de Estatísticas do Animatronic',
          caption: 'Exibição de atributos (Vida, Ataque, Defesa) e descrição da habilidade única.'
        },
        en: {
          title: 'Animatronic Stat Sheet & Overview',
          caption: 'Attribute inspection (Health, Attack, Defense) and unique ability description.'
        }
      },
      {
        id: 'placeholder-3',
        type: 'Inventory',
        pt: {
          title: 'Inventário e Loja de Faz-Coins',
          caption: 'Gestão de consumíveis e saldo de moedas ganhas em duelos.'
        },
        en: {
          title: 'Inventory & Faz-Coin Store',
          caption: 'Consumable item management and coin balance earned from duels.'
        }
      }
    ]
  }
];

export const getCaseStudyBySlug = (slug) => {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  return projectsCaseStudies.find((p) => p.slug === cleanSlug) || null;
};
