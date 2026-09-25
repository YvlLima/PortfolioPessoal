// Single source for curated cards, detail pages and terminal. See docs/project-sources.md.
export const projectsCaseStudies = [
  {
    "slug": "sengoku",
    "title": "Sengoku",
    "category": "games",
    "icon": "Gamepad2",
    "tags": [
      "Godot 4.4+",
      "GDScript",
      "JSON"
    ],
    "summary": {
      "pt": "Jogo de sobrevivência 3D no Japão feudal, com mundo procedural, inventário e construção.",
      "en": "A 3D survival game set in feudal Japan, with a procedural world, inventory and building."
    },
    "status": {
      "pt": "Protótipo publicado",
      "en": "Published prototype"
    },
    "context": {
      "pt": "Exploração de sistemas de jogo interligados: o mundo, os recursos e as ações do jogador partilham uma sessão de sobrevivência em terceira pessoa.",
      "en": "An exploration of connected game systems: the world, resources and player actions share a third-person survival session."
    },
    "features": {
      "pt": [
        "Implementado: Geração procedural de terreno por chunks (FastNoiseLite determinístico) e biomas",
        "Implementado: Controlador de personagem em 3.ª pessoa com locomoção, stamina, agachar e câmara orbital SpringArm3D",
        "Implementado: Inventário modular de 30 espaços (peso, arrastar e largar, divisão de pilhas com Shift e descarte)",
        "Implementado: Recolha de recursos no terreno (madeira, pedra, bambu, bagas), crafting transacional e fogueira de acampamento com descanso",
        "Implementado: Relógio e ciclo dinâmico de dia/noite com iluminação ambiente progressiva",
        "Planeado: Sistema de combate corpo a corpo com katana, bloqueio e esquiva",
        "Planeado: Fauna selvagem com IA (javali, veado, lobo) e NPCs interativos",
        "Planeado: Barras vitais de sobrevivência (fome, sede, vida) e persistência em ficheiro de save"
      ],
      "en": [
        "Implemented: Procedural chunk-based terrain generation (deterministic FastNoiseLite) and biomes",
        "Implemented: Third-person character controller with locomotion, stamina, crouching and SpringArm3D orbital camera",
        "Implemented: 30-slot modular inventory (weight limits, drag-and-drop, Shift stack splitting and dropping)",
        "Implemented: In-world resource gathering (wood, stone, bamboo, berries), transactional crafting and campfire placement with rest mechanics",
        "Implemented: Dynamic day/night cycle and game clock with ambient lighting transitions",
        "Planned: Katana melee combat system, blocking and dodge rolls",
        "Planned: Wildlife AI (wild boar, deer, wolf) and interactive NPCs",
        "Planned: Vital survival bars (hunger, thirst, health) and persistent file saves"
      ]
    },
    "technical": {
      "pt": "O projeto Godot separa mundo, jogador, inventário, combate e persistência em módulos. Os autoloads EventBus, GameClock e WorldSettings coordenam eventos e estado partilhado.",
      "en": "The Godot project separates world, player, inventory, combat and persistence into modules. EventBus, GameClock and WorldSettings autoloads coordinate events and shared state."
    },
    "scope": {
      "pt": "O protótipo no repositório foca-se na geração de terreno, locomoção e no ciclo inicial de recolha, inventário e acampamento, validado por suites de teste locais no motor. Mecânicas avançadas de combate com lâminas, IA de fauna e sobrevivência estrita constam do documento de design como fases futuras e não estão ativas na build jogável atual. Não há demo web publicada (requer o motor Godot 4.4 localmente).",
      "en": "The prototype in the repository focuses on terrain generation, locomotion and the core gathering, inventory and camping loop, verified by local engine test suites. Advanced blade combat, wildlife AI and full survival stats are specified in the design document as future phases and are not active in the current playable build. No public web demo is available (requires running Godot 4.4 locally)."
    },
    "links": {
      "github": "https://github.com/YvlLima/Sengoku"
    },
    "evidence": [
      "sengoku/project.godot",
      "sengoku/world",
      "sengoku/player",
      "sengoku/inventory",
      "sengoku/crafting",
      "sengoku/building",
      "sengoku/tests"
    ]
  },
  {
    "slug": "bagless",
    "title": "BagLess",
    "category": "web",
    "icon": "Luggage",
    "tags": [
      "React 18",
      "Vite",
      "JavaScript",
      "CSS",
      "REST APIs"
    ],
    "summary": {
      "pt": "Protótipo de aluguer de roupa para viagens, com planeamento de destinos, catálogo e composição de kits.",
      "en": "A travel clothing rental prototype, with destination planning, a catalogue and outfit kits."
    },
    "status": {
      "pt": "Protótipo de interface",
      "en": "Interface prototype"
    },
    "context": {
      "pt": "O conceito permite planear uma viagem e escolher vestuário para o destino. A aplicação demonstra o percurso de seleção, carrinho e gestão de uma viagem.",
      "en": "The concept lets travellers plan a trip and select clothing for their destination. The application demonstrates selection, cart and trip-management flows."
    },
    "features": {
      "pt": [
        "Pesquisa de destinos com Nominatim e meteorologia com Open-Meteo",
        "Catálogo com filtros e seleção de peças",
        "Gestão de viagem, kit e favoritos com React Context",
        "Apresentação de preços em várias moedas"
      ],
      "en": [
        "Destination search with Nominatim and weather with Open-Meteo",
        "Catalogue filtering and clothing selection",
        "Trip, kit and wishlist state through React Context",
        "Price presentation in multiple currencies"
      ]
    },
    "technical": {
      "pt": "Os ecrãs e componentes são separados dos contextos de viagem, aluguer e moeda. O catálogo usa dados de demonstração; a lógica de preços e o estado persistente têm utilitários próprios.",
      "en": "Screens and components are separated from trip, rental and currency contexts. The catalogue uses demonstration data; pricing and persistent state have dedicated utilities."
    },
    "scope": {
      "pt": "É uma demonstração de produto, não um serviço de aluguer operacional. Os fluxos de pagamento, entrega e devolução são apresentados como simulação. Não são reivindicadas parcerias com marcas, certificações de higiene ou poupanças ambientais medidas.",
      "en": "This is a product demonstration, not an operating rental service. Payment, delivery and return flows are presented as simulations. No brand partnerships, hygiene certifications or measured environmental savings are claimed."
    },
    "links": {
      "github": "https://github.com/YvlLima/BagLess"
    },
    "evidence": [
      "package.json",
      "src/screens",
      "src/context",
      "src/mockData/destinations.js",
      "src/utils/pricing.js"
    ]
  },
  {
    "slug": "musichub",
    "title": "MusicHub",
    "category": "web",
    "icon": "Music",
    "tags": [
      "JavaScript",
      "HTML5",
      "CSS",
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    "summary": {
      "pt": "Aplicação web de música e comunidade, com autenticação, likes e avaliações.",
      "en": "A music and community web application with authentication, likes and ratings."
    },
    "status": {
      "pt": "Código público",
      "en": "Public source"
    },
    "context": {
      "pt": "Uma aplicação que reúne uma interface de música e funcionalidades de comunidade, com contas de utilizador e dados persistentes no servidor.",
      "en": "An application combining a music interface with community features, user accounts and server-side persistence."
    },
    "features": {
      "pt": [
        "Frontend em HTML, CSS e JavaScript sem React",
        "Autenticação com JWT e hashing de palavras-passe com bcrypt",
        "Rotas para likes, avaliações e utilizadores",
        "PostgreSQL e testes de API com Jest/Supertest"
      ],
      "en": [
        "HTML, CSS and JavaScript frontend without React",
        "JWT authentication and password hashing with bcrypt",
        "Routes for likes, ratings and users",
        "PostgreSQL and API tests using Jest/Supertest"
      ]
    },
    "technical": {
      "pt": "O frontend está em public/ e o servidor Express organiza rotas e middleware em src/. A separação entre interface, autenticação e acesso à base de dados torna visíveis as responsabilidades de cada camada.",
      "en": "The frontend lives in public/ and the Express server organises routes and middleware in src/. Separating the interface, authentication and database access makes each layer’s responsibilities explicit."
    },
    "scope": {
      "pt": "O repositório inclui testes de API e segurança. A sua existência não equivale a uma auditoria de segurança nem a resultados de desempenho medidos. O funcionamento da demo depende dos serviços externos disponíveis.",
      "en": "The repository includes API and security tests. Their presence is not a security audit or a measured performance result. Demo functionality depends on available external services."
    },
    "links": {
      "github": "https://github.com/YvlLima/MusicHub",
      "demo": "https://musichub-9hu.pages.dev/"
    },
    "evidence": [
      "package.json",
      "public/js",
      "src/routes",
      "src/middleware/auth.js",
      "schema.sql",
      "tests"
    ]
  },
  {
    "slug": "fazbear-nightshift",
    "title": "Fazbear Nightshift",
    "category": "bots",
    "icon": "Bot",
    "tags": [
      "Node.js",
      "JavaScript",
      "Discord.js 14",
      "SQLite",
      "sql.js"
    ],
    "summary": {
      "pt": "Bot de Discord inspirado em FNAF, com ataques PvP, coleção de personagens e rankings.",
      "en": "A FNAF-inspired Discord bot with PvP attacks, character collections and rankings."
    },
    "status": {
      "pt": "Código público",
      "en": "Public source"
    },
    "context": {
      "pt": "Um jogo social dentro do Discord, em que comandos slash permitem atacar, consultar personagens e acompanhar a progressão dos jogadores.",
      "en": "A social game inside Discord, where slash commands let players attack, inspect characters and track progression."
    },
    "features": {
      "pt": [
        "Comandos /atacar, /status, /colecao e /perfil",
        "Personagens com poderes e efeitos de combate",
        "Rankings e histórico de duelos",
        "Persistência SQLite através de sql.js"
      ],
      "en": [
        "Commands including /atacar, /status, /colecao and /perfil",
        "Characters with powers and combat effects",
        "Rankings and duel history",
        "SQLite persistence through sql.js"
      ]
    },
    "technical": {
      "pt": "Os comandos, o motor de combate e a base de dados têm ficheiros separados. O registo de comandos usa a API do Discord; a configuração sensível fica em variáveis de ambiente.",
      "en": "Commands, the combat engine and the database have separate files. Command registration uses the Discord API; sensitive configuration stays in environment variables."
    },
    "scope": {
      "pt": "A execução exige configurar uma aplicação Discord e as respetivas credenciais. Não é apresentado um convite público nem são afirmadas garantias de disponibilidade ou proteção contra exploits não verificadas.",
      "en": "Running the bot requires a Discord application and its credentials. No public invite is provided, and no unverified availability or exploit-prevention guarantees are claimed."
    },
    "links": {
      "github": "https://github.com/YvlLima/FazbearNightshift"
    },
    "evidence": [
      "package.json",
      "commands",
      "game/combatEngine.js",
      "database.js"
    ]
  },
  {
    "slug": "galeria-piso-dois",
    "title": "Galeria Piso Dois (PAP)",
    "category": "cms",
    "icon": "Globe",
    "tags": [
      "WordPress",
      "CMS",
      "PHP"
    ],
    "summary": {
      "pt": "Galeria digital de trabalhos escolares, desenvolvida como Prova de Aptidão Profissional no curso de GPSI.",
      "en": "A digital gallery of school work, developed as the final project for the GPSI vocational course."
    },
    "status": {
      "pt": "Projeto académico",
      "en": "Academic project"
    },
    "context": {
      "pt": "Projeto de conclusão do curso de Gestão e Programação de Sistemas Informáticos na Escola Secundária de Felgueiras, dedicado à publicação e organização de trabalhos escolares.",
      "en": "A final project for the IT Management and Programming course at Escola Secundária de Felgueiras, dedicated to publishing and organising school work."
    },
    "features": {
      "pt": [
        "Publicação de conteúdos com WordPress",
        "Organização de trabalhos numa galeria digital"
      ],
      "en": [
        "Content publishing with WordPress",
        "School work organised in a digital gallery"
      ]
    },
    "technical": {
      "pt": "A gestão de conteúdos assenta no WordPress. A apresentação e organização do conteúdo fazem parte do trabalho académico descrito neste portfólio.",
      "en": "Content management is based on WordPress. Content presentation and organisation form part of the academic work described in this portfolio."
    },
    "scope": {
      "pt": "Não está associado um repositório público a este projeto. Não são apresentadas notas de avaliação ou métricas de utilização.",
      "en": "No public repository is associated with this project. No grades or usage metrics are presented."
    },
    "links": {
      "demo": "https://galeriapisodois.esfelgueiras.pt/"
    },
    "evidence": []
  },
  {
    "slug": "portfolio-pessoal",
    "title": "Portfólio Pessoal",
    "category": "web",
    "icon": "Terminal",
    "tags": [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "GitHub API"
    ],
    "summary": {
      "pt": "Este portfólio: projetos, percurso e contacto numa interface bilingue com terminal interativo.",
      "en": "This portfolio: projects, background and contact in a bilingual interface with an interactive terminal."
    },
    "status": {
      "pt": "Site publicado",
      "en": "Published website"
    },
    "context": {
      "pt": "Um espaço para apresentar o meu trabalho, reunir projetos e facilitar o contacto profissional.",
      "en": "A place to present my work, collect projects and make professional contact easier."
    },
    "features": {
      "pt": [
        "Português e inglês, temas claro e escuro",
        "Terminal com comandos e exemplos acessíveis",
        "Projetos selecionados e repositórios obtidos pela API do GitHub",
        "Páginas de projeto com conteúdo partilhado"
      ],
      "en": [
        "Portuguese and English, light and dark themes",
        "Terminal with commands and accessible examples",
        "Curated projects and repositories fetched from the GitHub API",
        "Project pages with shared content"
      ]
    },
    "technical": {
      "pt": "React organiza a interface em componentes. Um catálogo central fornece os dados dos cartões, páginas e terminal; a API pública do GitHub complementa esta seleção com dados atualizados.",
      "en": "React organises the interface into components. A central catalogue supplies cards, pages and terminal data; the public GitHub API complements this selection with fresh data."
    },
    "scope": {
      "pt": "O painel depende de uma API pública com limites de pedidos. Em caso de falha, identifica o erro e mantém apenas os dados reais da última consulta bem-sucedida nesta sessão.",
      "en": "The panel depends on a public API with rate limits. On failure, it identifies the error and retains only real data from the last successful request in this session."
    },
    "links": {
      "github": "https://github.com/YvlLima/PortfolioPessoal"
    },
    "evidence": [
      "src/data/projectsData.js",
      "src/hooks/useGitHub.js",
      "src/components/TerminalWidget.jsx"
    ]
  }
];
export const projectCategories = {"all": {"pt": "Todos", "en": "All"}, "web": {"pt": "Web", "en": "Web"}, "games": {"pt": "Jogos", "en": "Games"}, "bots": {"pt": "Bots", "en": "Bots"}, "cms": {"pt": "CMS", "en": "CMS"}};
export const getCaseStudyBySlug = slug => projectsCaseStudies.find(project => project.slug === slug);
