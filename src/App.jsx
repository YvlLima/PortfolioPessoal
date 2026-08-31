import React, { useState, useEffect, useRef } from 'react';
import {
  Code,
  Terminal,
  Mail,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  Cpu,
  Layers,
  Menu,
  X,
  ChevronRight,
  Copy,
  Check,
  ShieldCheck,
  Globe,
  Sparkles,
  FileText,
  Award,
  Send,
  Brain,
  Users,
  Zap,
  Search,
  GitCommit,
  Star,
  RefreshCw,
  Activity,
  Clock,
  Bot,
  Info,
  Briefcase,
  FileCheck,
  Quote
} from 'lucide-react';

// Custom SVG for GitHub Icon
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom SVG for LinkedIn Icon
const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Dicionário de Traduções (PT / EN)
const contentTranslations = {
  pt: {
    nav: {
      sobre: 'Sobre mim',
      skills: 'Skills',
      projetos: 'Projetos',
      educacao: 'Educação & Estágios',
      contacto: 'Contacto',
      ctaBtn: 'Contactar'
    },
    hero: {
      badge: 'A concluir CTeSP para ingressar em Licenciatura em Segurança Informática em Redes de Computadores',
      title: 'Estudante de Cibersegurança & Developer Júnior',
      desc: 'Estudante no Politécnico do Porto (ESTG) focado em Cibersegurança, Redes e Desenvolvimento Web. Apaixonado por criar soluções digitais seguras, eficientes e com excelente experiência de utilização.',
      btnProjects: 'Ver Projetos',
      btnContact: 'Entrar em Contacto',
      btnCv: 'Descarregar CV'
    },
    about: {
      title: 'Sobre mim',
      p1: 'Olá! Sou o Gonçalo Martins de Lima, estudante no 2.º ano do CTeSP em Cibersegurança, Redes e Sistemas Informáticos na Escola Superior de Tecnologia e Gestão (ESTG) do Politécnico do Porto (P.PORTO).',
      p2: 'A minha jornada na informática iniciou-se na Escola Secundária de Felgueiras com o curso profissional de Gestão e Programação de Sistemas Informáticos (GPSI), onde desenvolvi a minha paixão pela lógica de programação, arquitetura de sistemas e desenvolvimento de projetos web.',
      p3: 'Atualmente foco-me na combinação entre Desenvolvimento Web moderno (React, JavaScript, C#, Node.js) e Segurança Informática & Redes. O meu próximo objetivo é ingressar na Licenciatura em Segurança Informática em Redes de Computadores e integrar equipas dinâmicas onde possa continuar a evoluir e criar impacto positivo.',
      stat1Title: 'Formação Atual',
      stat1Desc: 'CTeSP Cibersegurança, Redes e Sistemas (ESTG - P.PORTO)',
      stat2Title: 'Foco Principal',
      stat2Desc: 'Desenvolvimento Web & Segurança Informática',
      stat3Title: 'Próximo Passo',
      stat3Desc: 'Licenciatura em Seg. Informática em Redes & Estágio/Dev Júnior',
      softSkillsTitle: 'Competências Pessoais & Valores'
    },
    skills: {
      title: 'Skills & Tecnologias',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        languages: 'Linguagens',
        tools: 'Ferramentas',
        cms: 'CMS',
        systems: 'CTeSP'
      }
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Projetos reais com foco em código limpo, arquitetura escalável e segurança.',
      filterAll: 'Todos',
      filterWeb: 'Web Apps',
      filterBots: 'Bots & Backend',
      filterCms: 'WordPress & CMS',
      proj1Desc: 'Plataforma web interativa de música com pesquisa dinâmica, controlo de áudio em tempo real e interface responsiva alojada no Cloudflare Pages.',
      proj2Desc: 'Projeto de Prova de Aptidão Profissional (PAP) no curso de GPSI. Plataforma comunitária e galeria digital desenvolvida sobre WordPress.',
      proj3Desc: 'Bot dinâmico para Discord inspirado no universo FNAF com sistema de batalha PvP por turnos, comandos slash e gestão de dados.',
      proj4Desc: 'Utilitário e aplicação web moderna desenhada para otimização de rotinas, organização ágil de tarefas e produtividade diária.',
      proj5Desc: 'Portfólio interativo de alta performance construído em React + Vite com design cyberpunk, iluminação Spotlight 3D e Live Sync do GitHub.',
      githubTitle: 'Ver Código no GitHub',
      demoTitle: 'Ver Demo Ao Vivo',
      btnLive: 'Demo Ao Vivo',
      btnCode: 'GitHub',
      btnDetails: 'Detalhes'
    },
    githubLive: {
      badge: 'Live Sync • GitHub API',
      title: 'Atividade em Tempo Real no GitHub',
      subtitle: 'Sincronização em direto com a API pública do GitHub (@YvlLima). Repositórios públicos, commits e métricas de desenvolvimento.',
      tabRepos: 'Repositórios Ativos',
      tabActivity: 'Feed de Commits & Ações',
      tabStats: 'Linguagens & Métricas',
      syncBtn: 'Sincronizar',
      syncing: 'A atualizar...',
      liveStatus: 'API Online • Conectado',
      viewAllRepos: 'Ver todos os repositórios no GitHub',
      stars: 'Estrelas',
      forks: 'Forks',
      updated: 'Atualizado',
      noDesc: 'Repositório de código aberto no GitHub',
      eventPush: 'Push de novos commits',
      eventRepo: 'no repositório',
      langDistribution: 'Distribuição de Linguagens nos Repositórios',
      statRepos: 'Repositórios Públicos',
      statLanguage: 'Linguagem Principal',
      statFollowers: 'Seguidores',
      statActivity: 'Estado de Atividade',
      statActivityVal: 'Ativo & Em Desenvolvimento'
    },
    education: {
      title: 'Educação & Experiência',
      recommendationsTitle: 'Cartas de Recomendação de Estágio',
      recommendationsSub: 'Avaliações formais de desempenho emitidas pela entidade de acolhimento nos estágios curriculares de 11.º e 12.º ano (GPSI).',
      certTitle: 'Certificações & Habilitações',
      edu1Period: 'Setembro 2025 — Presente',
      edu1Degree: 'CTeSP em Cibersegurança, Redes e Sistemas Informáticos',
      edu1Inst: 'ESTG — Escola Superior de Tecnologia e Gestão (P.PORTO)',
      edu1Desc: 'Foco em Programação para a Web, Bases de Dados, Fundamentos de Programação Orientada a Objetos, Ferramentas de Segurança Informática e Administração de Redes.',
      edu2Period: 'Setembro 2022 a Julho 2025',
      edu2Degree: 'Técnico de Gestão e Programação de Sistemas Informáticos (GPSI)',
      edu2Inst: 'Escola Secundária de Felgueiras',
      edu2Desc: 'Curso Profissional de Informática focado em lógica de programação, arquitetura de sistemas, bases de dados relacionais e desenvolvimento do projeto final PAP (Galeria Piso Dois).'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Estou atualmente à procura de novas oportunidades como Developer Júnior ou Estágio em Cibersegurança / Desenvolvimento Web. Se tiveres um projeto ou uma proposta, entra em contacto!',
      cardTitle: 'Informação de Contacto Directo',
      cardSub: 'Clique abaixo para copiar ou enviar email direto',
      formTitle: 'Envia-me uma Mensagem',
      formName: 'Teu Nome',
      formEmail: 'Teu Email',
      formSubject: 'Assunto',
      formMessage: 'Mensagem',
      formNamePlaceholder: 'O teu nome',
      formEmailPlaceholder: 'exemplo@email.com',
      formSubjectPlaceholder: 'Oportunidade de Estágio / Projeto Web',
      formMessagePlaceholder: 'Escreve aqui a tua mensagem...',
      formSubmit: 'Enviar Mensagem',
      copiedToast: 'Email copiado para a área de transferência!',
      formSuccess: 'Mensagem enviada com sucesso! Entrarei em contacto em breve.',
      githubTooltip: 'Perfil GitHub',
      linkedinTooltip: 'Perfil LinkedIn',
      emailTooltip: 'Enviar Email Direto'
    },
    footer: {
      designedBy: 'Desenhado & Criado por',
      sub: 'ESTG (P.PORTO) — CTeSP em Cibersegurança, Redes e Sistemas Informáticos'
    }
  },
  en: {
    nav: {
      sobre: 'About me',
      skills: 'Skills',
      projetos: 'Projects',
      educacao: 'Education & Internships',
      contacto: 'Contact',
      ctaBtn: 'Get in touch'
    },
    hero: {
      badge: 'Completing CTeSP to pursue a B.Sc. in Information Security in Computer Networks',
      title: 'Cybersecurity Student & Junior Developer',
      desc: 'Student at the Polytechnic of Porto (ESTG) focused on Cybersecurity, Networks, and Web Development. Passionate about creating secure, efficient digital solutions with great user experience.',
      btnProjects: 'View Projects',
      btnContact: 'Get in Touch',
      btnCv: 'Download Resume (CV)'
    },
    about: {
      title: 'About me',
      p1: 'Hello! I am Gonçalo Martins de Lima, a 2nd-year student in Cybersecurity, Networks, and Computer Systems at the School of Technology and Management (ESTG) of the Polytechnic of Porto (P.PORTO).',
      p2: 'My journey in computer science began at Escola Secundária de Felgueiras in the IT Management & Programming course (GPSI), where I developed my passion for programming logic, system architecture, and web development.',
      p3: 'Currently, I focus on combining modern Web Development (React, JavaScript, C#, Node.js) with Cybersecurity & Computer Networks. My next goal is to enroll in a B.Sc. in Information Security in Computer Networks and join dynamic teams where I can continue to grow and make a positive impact.',
      stat1Title: 'Current Education',
      stat1Desc: 'Cybersecurity, Networks & Systems CTeSP (ESTG - P.PORTO)',
      stat2Title: 'Core Focus',
      stat2Desc: 'Web Development & Cybersecurity',
      stat3Title: 'Next Step',
      stat3Desc: 'B.Sc. in Information Security & Networks & Junior Dev / Internship',
      softSkillsTitle: 'Soft Skills & Personal Values'
    },
    skills: {
      title: 'Skills & Technologies',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        languages: 'Languages',
        tools: 'Tools',
        cms: 'CMS',
        systems: 'CTeSP'
      }
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Real-world projects emphasizing clean code, scalable architecture, and security.',
      filterAll: 'All',
      filterWeb: 'Web Apps',
      filterBots: 'Bots & Backend',
      filterCms: 'WordPress & CMS',
      proj1Desc: 'Interactive music web platform featuring dynamic search, real-time audio playback, and responsive UI hosted on Cloudflare Pages.',
      proj2Desc: 'High school graduation diploma project (PAP) in IT. Community platform and digital gallery developed on WordPress CMS.',
      proj3Desc: 'Dynamic Discord Bot inspired by the FNAF universe featuring turn-based PvP battle engine, slash commands, and data management.',
      proj4Desc: 'Modern utility and web application designed for workflow optimization, agile task organization, and daily productivity.',
      proj5Desc: 'High-performance interactive portfolio built with React + Vite featuring cyberpunk aesthetic, dynamic 3D spotlight, and live GitHub sync.',
      githubTitle: 'View Code on GitHub',
      demoTitle: 'View Live Demo',
      btnLive: 'Live Demo',
      btnCode: 'GitHub',
      btnDetails: 'Details'
    },
    githubLive: {
      badge: 'Live Sync • GitHub API',
      title: 'GitHub Live Activity',
      subtitle: 'Real-time synchronization with GitHub Public API (@YvlLima). Public repositories, commits, and development metrics.',
      tabRepos: 'Active Repositories',
      tabActivity: 'Commits & Activity Feed',
      tabStats: 'Languages & Metrics',
      syncBtn: 'Synchronize',
      syncing: 'Updating...',
      liveStatus: 'API Online • Connected',
      viewAllRepos: 'View all repositories on GitHub',
      stars: 'Stars',
      forks: 'Forks',
      updated: 'Updated',
      noDesc: 'Open source code repository on GitHub',
      eventPush: 'Pushed new commits',
      eventRepo: 'to repository',
      langDistribution: 'Language Distribution across Repositories',
      statRepos: 'Public Repositories',
      statLanguage: 'Primary Language',
      statFollowers: 'Followers',
      statActivity: 'Activity Status',
      statActivityVal: 'Active & Building'
    },
    education: {
      title: 'Education & Experience',
      recommendationsTitle: 'Internship Recommendation Letters',
      recommendationsSub: 'Formal performance evaluation letters issued by the host company during the 11th & 12th grade vocational internships (GPSI).',
      certTitle: 'Certifications & Qualifications',
      edu1Period: 'September 2025 — Present',
      edu1Degree: 'Associate Degree (CTeSP) in Cybersecurity, Networks & Systems',
      edu1Inst: 'ESTG — School of Technology and Management (P.PORTO)',
      edu1Desc: 'Focused on Web Programming, Databases, Object-Oriented Programming (OOP) Fundamentals, Cybersecurity Tools, and Network Administration.',
      edu2Period: 'September 2022 to July 2025',
      edu2Degree: 'IT Systems Management & Programming Diploma (GPSI)',
      edu2Inst: 'Escola Secundária de Felgueiras',
      edu2Desc: 'Vocational IT course covering programming logic, system architecture, relational databases, and the final diploma project (Galeria Piso Dois).'
    },
    contact: {
      title: 'Contact',
      subtitle: 'I am currently looking for new opportunities as a Junior Developer or Internship in Cybersecurity / Web Development. If you have a project or an opportunity, feel free to reach out!',
      cardTitle: 'Direct Contact Info',
      cardSub: 'Click below to copy email or send a direct message',
      formTitle: 'Send me a Message',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formNamePlaceholder: 'Your name',
      formEmailPlaceholder: 'example@email.com',
      formSubjectPlaceholder: 'Internship Opportunity / Web Project',
      formMessagePlaceholder: 'Write your message here...',
      formSubmit: 'Send Message',
      copiedToast: 'Email copied to clipboard!',
      formSuccess: 'Message sent successfully! I will reach out to you shortly.',
      githubTooltip: 'GitHub Profile',
      linkedinTooltip: 'LinkedIn Profile',
      emailTooltip: 'Send Direct Email'
    },
    footer: {
      designedBy: 'Designed & Built by',
      sub: 'ESTG (P.PORTO) — Cybersecurity, Networks & Systems'
    }
  }
};

// --------------------------------------------------------------------------
// Minimalist Dot + Soft Ring Cursor Component (Snappy & Lag-free)
// --------------------------------------------------------------------------
const SimpleCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if user is on a touch device / coarse pointer
    const touchCheck = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (touchCheck) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive = target.closest(
        'a, button, .spotlight-card, .project-card, .skill-card, .stat-card, .timeline-content, .email-box, .social-icon-btn, .lang-toggle, .filter-btn'
      );
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Fast snappy lerp factor (0.35) so it feels zero-lag
  useEffect(() => {
    if (isTouch) return;
    let animationFrameId;
    const followMouse = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.35,
        y: prev.y + (position.y - prev.y) * 0.35,
      }));
      animationFrameId = requestAnimationFrame(followMouse);
    };
    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      <div
        className="simple-cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`simple-cursor-ring ${isHovering ? 'is-hovering' : ''} ${isClicking ? 'is-clicking' : ''
          }`}
        style={{ left: `${ringPosition.x}px`, top: `${ringPosition.y}px` }}
      />
    </>
  );
};

// --------------------------------------------------------------------------
// Ambient Follower Light Component
// --------------------------------------------------------------------------
const AmbientFollowerLight = () => {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touchCheck = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (touchCheck) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="ambient-follower"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    />
  );
};

// --------------------------------------------------------------------------
// Spotlight Card Component (Interactive 3D Tilt & Cursor Light Tracking)
// --------------------------------------------------------------------------
const SpotlightCard = ({ children, className = '', style = {}, ...props }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set CSS variables for spotlight radial gradient
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    // Calculate 3D tilt relative to center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4; // Max tilt 4deg
    const rotateY = ((x - centerX) / centerX) * 4;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        willChange: 'transform',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// --------------------------------------------------------------------------
// Fade In Section Component
// --------------------------------------------------------------------------
const FadeInSection = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

// --------------------------------------------------------------------------
// Main Application
// --------------------------------------------------------------------------
export default function App() {
  const [lang, setLang] = useState('pt'); // 'pt' | 'en'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [projectFilter, setProjectFilter] = useState('all'); // 'all' | 'web' | 'cms'
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedInfoModal, setSelectedInfoModal] = useState(null);

  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // GitHub Live Activity State
  const [githubTab, setGithubTab] = useState('repos'); // 'repos' | 'activity' | 'stats'
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState(null);
  const [githubUser, setGithubUser] = useState({
    login: 'YvlLima',
    name: 'Lima',
    avatar_url: 'https://avatars.githubusercontent.com/u/171243763?v=4',
    public_repos: 4,
    followers: 0,
    following: 0,
    html_url: 'https://github.com/YvlLima',
    bio: 'Cybersecurity Student & Web Developer'
  });

  const [githubRepos, setGithubRepos] = useState([
    {
      id: 'repo-1',
      name: 'FazbearNightshift',
      description: 'Fazbear Nightshift - Bot Discord FNAF PvP interativo e dinâmico',
      language: 'JavaScript',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/YvlLima/FazbearNightshift',
      updated_at: '2026-08-18T21:51:57Z'
    },
    {
      id: 'repo-2',
      name: 'MusicHub',
      description: 'Plataforma web interativa de música, áudio search e player com React',
      language: 'JavaScript',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/YvlLima/MusicHub',
      updated_at: '2026-08-09T14:58:35Z'
    },
    {
      id: 'repo-3',
      name: 'PortfolioPessoal',
      description: 'Portfólio Pessoal moderno em React + Vite com design cyberpunk e spotlight',
      language: 'JavaScript',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/YvlLima/PortfolioPessoal',
      updated_at: '2026-08-08T16:21:10Z'
    },
    {
      id: 'repo-4',
      name: 'BagLess',
      description: 'Aplicação e utilitário web moderno para produtividade e organização',
      language: 'JavaScript',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/YvlLima/BagLess',
      updated_at: '2026-08-13T17:46:57Z'
    }
  ]);

  const [githubEvents, setGithubEvents] = useState([
    {
      id: 'ev-1',
      type: 'PushEvent',
      repo: 'YvlLima/FazbearNightshift',
      created_at: '2026-08-18T21:50:55Z',
      actionText: {
        pt: 'Atualização de código e novos commits',
        en: 'Code update and pushed commits'
      }
    },
    {
      id: 'ev-2',
      type: 'PushEvent',
      repo: 'YvlLima/BagLess',
      created_at: '2026-08-13T17:46:57Z',
      actionText: {
        pt: 'Melhorias de interface e estruturação de dados',
        en: 'UI improvements and data structuring'
      }
    },
    {
      id: 'ev-3',
      type: 'PushEvent',
      repo: 'YvlLima/MusicHub',
      created_at: '2026-08-09T14:58:35Z',
      actionText: {
        pt: 'Ajustes de reprodução e componentes React',
        en: 'Playback adjustments and React components'
      }
    },
    {
      id: 'ev-4',
      type: 'PushEvent',
      repo: 'YvlLima/PortfolioPessoal',
      created_at: '2026-08-08T16:21:10Z',
      actionText: {
        pt: 'Deploy e otimização de performance do site',
        en: 'Deploy and site performance optimization'
      }
    }
  ]);

  const fetchGitHubLive = async () => {
    setIsSyncing(true);
    try {
      // 1. Fetch User Profile
      const userRes = await fetch('https://api.github.com/users/YvlLima');
      if (userRes.ok) {
        const userData = await userRes.json();
        setGithubUser(userData);
      }

      // 2. Fetch User Repos
      const reposRes = await fetch('https://api.github.com/users/YvlLima/repos?sort=updated&per_page=6');
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        if (Array.isArray(reposData) && reposData.length > 0) {
          setGithubRepos(reposData);
        }
      }

      // 3. Fetch User Events
      const eventsRes = await fetch('https://api.github.com/users/YvlLima/events/public?per_page=6');
      if (eventsRes.ok) {
        const eventsData = await eventsRes.json();
        if (Array.isArray(eventsData) && eventsData.length > 0) {
          const parsedEvents = eventsData.slice(0, 5).map((e, idx) => ({
            id: e.id || `event-${idx}`,
            type: e.type,
            repo: e.repo?.name || 'YvlLima/Repository',
            created_at: e.created_at,
            actionText: {
              pt: e.type === 'PushEvent' ? 'Push de novos commits' : 'Atividade no repositório',
              en: e.type === 'PushEvent' ? 'Pushed new commits' : 'Repository activity'
            }
          }));
          setGithubEvents(parsedEvents);
        }
      }

      setLastSyncTime(new Date());
    } catch (err) {
      console.warn('Erro ao sincronizar com GitHub API (usando cache local):', err);
    } finally {
      setTimeout(() => setIsSyncing(false), 600);
    }
  };

  useEffect(() => {
    fetchGitHubLive();
  }, []);

  // Format Relative / Friendly Date
  const formatFriendlyDate = (dateStr, currentLang) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      const now = new Date();
      const diffMs = now - date;
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) {
        return currentLang === 'pt' ? 'Hoje' : 'Today';
      }
      if (diffDays === 1) {
        return currentLang === 'pt' ? 'Ontem' : 'Yesterday';
      }
      if (diffDays > 0 && diffDays < 30) {
        return currentLang === 'pt' ? `há ${diffDays} dias` : `${diffDays} days ago`;
      }
      
      return date.toLocaleDateString(currentLang === 'pt' ? 'pt-PT' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  // Language Color Mapping
  const getLanguageMeta = (langName) => {
    switch (langName?.toLowerCase()) {
      case 'javascript':
        return { color: '#f7df1e', name: 'JavaScript' };
      case 'typescript':
        return { color: '#3178c6', name: 'TypeScript' };
      case 'c#':
      case 'csharp':
        return { color: '#178600', name: 'C#' };
      case 'python':
        return { color: '#3572a5', name: 'Python' };
      case 'html':
        return { color: '#e34c26', name: 'HTML5' };
      case 'css':
        return { color: '#563d7c', name: 'CSS3' };
      case 'php':
        return { color: '#4F5D95', name: 'PHP' };
      default:
        return { color: 'var(--accent)', name: langName || 'Web / Code' };
    }
  };

  const t = contentTranslations[lang];

  // Fechar modals ao premir Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedInfoModal(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu or modal is open
  useEffect(() => {
    if (mobileMenuOpen || selectedProject || selectedInfoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, selectedProject, selectedInfoModal]);

  // Email & Links do Gonçalo
  const userEmail = "goncalomartinslima2007@gmail.com";
  const githubUrl = "https://github.com/YvlLima";
  const linkedinUrl = "https://www.linkedin.com/in/gon%C3%A7alo-lima-532318428/?skipRedirect=true";

  // Toggle Language
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  // Handle Form Submit (Real Email Delivery via FormSubmit)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${userEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _template: 'box',
          _replyto: formState.email,
          _subject: `📬 [Portfólio Web] ${formState.subject || 'Nova Mensagem'} (de ${formState.name})`,
          _autoresponse: `Olá ${formState.name}!\n\nObrigado por entrares em contacto através do meu portfólio (goncalolima.pt).\nRecebi a tua mensagem com o assunto "${formState.subject || 'Contacto'}" e irei responder com a maior brevidade possível.\n\nCom os melhores cumprimentos,\nGonçalo Martins de Lima`,
          'Nome do Remetente': formState.name,
          'Email do Remetente': formState.email,
          'Assunto da Mensagem': formState.subject,
          'Conteúdo da Mensagem': formState.message
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 6000);
      } else {
        // Fallback: Se falhar a API, abre mailto pré-preenchido
        window.location.href = `mailto:${userEmail}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Nome: ${formState.name}\nEmail: ${formState.email}\n\nMensagem:\n${formState.message}`)}`;
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      window.location.href = `mailto:${userEmail}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Nome: ${formState.name}\nEmail: ${formState.email}\n\nMensagem:\n${formState.message}`)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Click Ripple Effect
  const handleGlobalClick = (e) => {
    const newRipple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setRipples((prev) => [...prev.slice(-4), newRipple]); // Keep max 5 ripples
  };

  useEffect(() => {
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  // Intersection Observer for scroll navigation highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { id: 'sobre', label: t.nav.sobre, num: '01.' },
    { id: 'skills', label: t.nav.skills, num: '02.' },
    { id: 'projetos', label: t.nav.projetos, num: '03.' },
    { id: 'educacao', label: t.nav.educacao, num: '04.' },
    { id: 'contacto', label: t.nav.contacto, num: '05.' },
  ];

  // Stat Cards de Sobre Mim com modalData
  const aboutStatsList = [
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

  // Soft Skills Array com modalData
  const softSkills = [
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

  // Certificações & Cursos Extra com modalData
  const certifications = [
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

  // Cartas de Recomendação de Estágio (11.º e 12.º Ano)
  const recommendationLetters = [
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

  // Skills com informação detalhada para abrir em modal
  const skillsList = [
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

  // Projetos Reais do Gonçalo com categorias para filtro e modal detalhado
  const projects = [
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

  // Filter projects by active tab
  const filteredProjects = projects.filter((p) => {
    if (projectFilter === 'all') return true;
    return p.category === projectFilter;
  });

  // Educação Real do Gonçalo com tradução e modalData
  const timelineItems = [
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

  const getSkillModalData = (skill) => ({
    title: skill.name,
    badge: t.skills.categories[skill.catKey] || skill.catKey,
    icon: skill.icon,
    desc: skill.desc,
    highlights: {
      pt: skill.highlights,
      en: skill.highlights
    }
  });

  return (
    <div className="portfolio-app">
      {/* Minimalist Dot + Soft Ring Cursor */}
      <SimpleCursor />
      <AmbientFollowerLight />

      {/* Global Click Ripples */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="click-ripple"
          style={{ left: `${r.x}px`, top: `${r.y}px` }}
        />
      ))}

      {/* Mobile Menu Overlay Backdrop */}
      <div
        className={`nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ------------------- HEADER / NAV ------------------- */}
      <header className="header">
        <div className="container nav-container">
          <a href="#hero" className="logo">
            <Terminal size={22} className="accent" />
            <span>dev<span className="accent">.lima</span></span>
          </a>

          {/* Desktop & Mobile Nav */}
          <nav>
            <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li className="mobile-drawer-header">
                <span className="logo" style={{ fontSize: '1.1rem' }}>
                  <Terminal size={18} className="accent" />
                  <span>dev<span className="accent">.lima</span></span>
                </span>
                <button
                  className="mobile-close-icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar Menu"
                >
                  <X size={20} />
                </button>
              </li>

              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="num">{link.num}</span> {link.label}
                  </a>
                </li>
              ))}

              {/* Selector / Switcher de Idioma PT / EN */}
              <li className="nav-lang-item">
                <button
                  onClick={toggleLanguage}
                  className="lang-toggle"
                  title={lang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
                >
                  <Globe size={15} />
                  <span className={lang === 'pt' ? 'lang-active' : 'lang-inactive'}>PT</span>
                  <span style={{ opacity: 0.3 }}>|</span>
                  <span className={lang === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
                </button>
              </li>

              <li className="nav-cta-item">
                <a
                  href={`mailto:${userEmail}`}
                  className="btn btn-outline nav-cta-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.ctaBtn}
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <main>
        {/* ------------------- 1. HERO SECTION ------------------- */}
        <section id="hero" className="hero-section">
          <div className="container">
            <FadeInSection>
              <div className="hero-badge">
                <Sparkles size={14} className="accent" />
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="hero-name">
                Gonçalo Lima
              </h1>

              <h2 className="hero-title">
                {t.hero.title}
              </h2>

              <p className="hero-description">
                {t.hero.desc}
              </p>

              <div className="hero-cta">
                <a href="#projetos" className="btn btn-primary">
                  {t.hero.btnProjects} <ChevronRight size={18} />
                </a>
                <a href="/CV_Goncalo_Lima.pdf" download className="btn btn-outline">
                  <FileText size={18} /> {t.hero.btnCv}
                </a>
                <a href="#contacto" className="btn btn-outline" style={{ borderStyle: 'dashed' }}>
                  {t.hero.btnContact}
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ------------------- 2. SOBRE MIM SECTION ------------------- */}
        <section id="sobre" className="section">
          <div className="container">
            <FadeInSection>
              <h2 className="section-title">
                <span className="number">01.</span> {t.about.title}
              </h2>

              <div className="about-grid">
                <div className="about-text">
                  <p>{t.about.p1}</p>
                  <p>{t.about.p2}</p>
                  <p>{t.about.p3}</p>
                </div>

                <div className="about-highlights">
                  {aboutStatsList.map((stat) => (
                    <SpotlightCard
                      key={stat.id}
                      className="stat-card"
                      onClick={() => setSelectedInfoModal(stat.modalData)}
                      title={lang === 'pt' ? 'Clique para ver mais informações' : 'Click for details'}
                    >
                      {stat.icon}
                      <h4>{stat.title}</h4>
                      <p>{stat.desc}</p>
                      <span className="card-click-hint">
                        {lang === 'pt' ? 'Ver detalhes' : 'Details'} <ChevronRight size={12} />
                      </span>
                    </SpotlightCard>
                  ))}
                </div>
              </div>

              {/* Soft Skills & Personal Values */}
              <div style={{ marginTop: '3.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  {t.about.softSkillsTitle}
                </h3>
                <div className="soft-skills-grid">
                  {softSkills.map((ss, idx) => (
                    <SpotlightCard
                      key={idx}
                      className="soft-skill-card"
                      onClick={() => setSelectedInfoModal(ss.modalData)}
                      title={lang === 'pt' ? 'Clique para ver mais informações' : 'Click for details'}
                    >
                      <div className="soft-skill-icon">
                        {ss.icon}
                      </div>
                      <div className="soft-skill-info">
                        <h4>{ss.title}</h4>
                        <p>{ss.desc}</p>
                        <span className="card-click-hint">
                          {lang === 'pt' ? 'Ver mais' : 'More info'} <ChevronRight size={12} />
                        </span>
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ------------------- 3. SKILLS SECTION ------------------- */}
        <section id="skills" className="section">
          <div className="container">
            <FadeInSection>
              <h2 className="section-title">
                <span className="number">02.</span> {t.skills.title}
              </h2>

              <div className="skills-grid">
                {skillsList.map((skill, index) => (
                  <SpotlightCard
                    key={index}
                    className="skill-card"
                    onClick={() => setSelectedInfoModal(getSkillModalData(skill))}
                    title={lang === 'pt' ? 'Clique para ver detalhes da competência' : 'Click for skill details'}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="skill-icon-wrapper">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </SpotlightCard>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ------------------- 4. PROJETOS SECTION ------------------- */}
        <section id="projetos" className="section">
          <div className="container">
            <FadeInSection>
              <h2 className="section-title">
                <span className="number">03.</span> {t.projects.title}
              </h2>
              {t.projects.subtitle && (
                <p className="projects-subtitle-text">
                  {t.projects.subtitle}
                </p>
              )}

              {/* Dynamic Project Filter Tabs */}
              <div className="filter-tabs">
                <button
                  className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setProjectFilter('all')}
                >
                  {t.projects.filterAll} <span className="filter-count">({projects.length})</span>
                </button>
                <button
                  className={`filter-btn ${projectFilter === 'web' ? 'active' : ''}`}
                  onClick={() => setProjectFilter('web')}
                >
                  {t.projects.filterWeb} <span className="filter-count">({projects.filter(p => p.category === 'web').length})</span>
                </button>
                <button
                  className={`filter-btn ${projectFilter === 'bots' ? 'active' : ''}`}
                  onClick={() => setProjectFilter('bots')}
                >
                  {t.projects.filterBots} <span className="filter-count">({projects.filter(p => p.category === 'bots').length})</span>
                </button>
                <button
                  className={`filter-btn ${projectFilter === 'cms' ? 'active' : ''}`}
                  onClick={() => setProjectFilter('cms')}
                >
                  {t.projects.filterCms} <span className="filter-count">({projects.filter(p => p.category === 'cms').length})</span>
                </button>
              </div>

              <div className="projects-grid-v2">
                {filteredProjects.map((proj) => (
                  <SpotlightCard
                    key={proj.id}
                    className="project-card-v2"
                    onClick={() => setSelectedProject(proj)}
                    title={lang === 'pt' ? 'Clique para ver arquitetura e detalhes completos' : 'Click to view full architecture & details'}
                  >
                    {/* Terminal Window Header */}
                    <div className="project-window-bar">
                      <div className="window-dots">
                        <span className="window-dot red" />
                        <span className="window-dot yellow" />
                        <span className="window-dot green" />
                      </div>
                      <span className="window-title">{proj.windowPath}</span>
                      {proj.badge && (
                        <span className="project-badge-pill">{proj.badge[lang]}</span>
                      )}
                    </div>

                    {/* Card Content Body */}
                    <div className="project-card-body-v2">
                      <div className="project-card-header-row">
                        <div className="project-icon-box">
                          {proj.icon}
                        </div>
                        <h3 className="project-title-v2">{proj.title}</h3>
                      </div>

                      <p className="project-desc-v2">{proj.description}</p>

                      {/* Mini Feature Highlights */}
                      {proj.features && proj.features[lang] && (
                        <ul className="project-mini-highlights">
                          {proj.features[lang].slice(0, 2).map((feat, i) => (
                            <li key={i}>
                              <Check size={13} className="accent" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Footer with Tags and Action Buttons */}
                    <div className="project-card-bottom-v2">
                      <ul className="project-tags-v2">
                        {proj.tags.map((tag, i) => (
                          <li key={i} className="project-tag-v2">
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <div className="project-actions-row" onClick={(e) => e.stopPropagation()}>
                        {proj.demo && (
                          <a
                            href={proj.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-action-btn primary"
                            title={t.projects.demoTitle}
                          >
                            <ExternalLink size={14} />
                            <span>{t.projects.btnLive}</span>
                          </a>
                        )}
                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-action-btn outline"
                            title={t.projects.githubTitle}
                          >
                            <GithubIcon size={14} />
                            <span>{t.projects.btnCode}</span>
                          </a>
                        )}
                        <button
                          type="button"
                          className="project-action-btn info"
                          onClick={() => setSelectedProject(proj)}
                          title={lang === 'pt' ? 'Ver detalhes da arquitetura' : 'View architecture details'}
                        >
                          <Info size={14} />
                          <span>{t.projects.btnDetails}</span>
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </div>

              {/* ------------------- GITHUB LIVE ACTIVITY DASHBOARD ------------------- */}
              <div className="github-live-wrapper" style={{ marginTop: '4.5rem' }}>
                <SpotlightCard className="github-live-panel">
                  {/* Top Live Sync Header Bar */}
                  <div className="github-live-header">
                    <div className="github-live-header-left">
                      <div className="github-badge-pulse">
                        <span className="live-pulse-dot" />
                        <span className="github-badge-text">{t.githubLive.badge}</span>
                      </div>
                      <div className="github-user-pill">
                        {githubUser.avatar_url && (
                          <img
                            src={githubUser.avatar_url}
                            alt={githubUser.login}
                            className="github-avatar-img"
                          />
                        )}
                        <span className="github-user-handle">@{githubUser.login}</span>
                      </div>
                    </div>

                    <div className="github-live-header-right">
                      {lastSyncTime && (
                        <span className="github-last-sync-tag">
                          {lastSyncTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                      <button
                        onClick={fetchGitHubLive}
                        disabled={isSyncing}
                        className={`github-sync-btn ${isSyncing ? 'syncing' : ''}`}
                        title={lang === 'pt' ? 'Clique para sincronizar com a API do GitHub' : 'Click to sync with GitHub API'}
                      >
                        <RefreshCw size={14} className={isSyncing ? 'spin-icon' : ''} />
                        <span>{isSyncing ? t.githubLive.syncing : t.githubLive.syncBtn}</span>
                      </button>
                    </div>
                  </div>

                  {/* Panel Title & Description */}
                  <div className="github-live-intro">
                    <h3 className="github-live-title">
                      <Terminal size={22} className="accent" />
                      {t.githubLive.title}
                    </h3>
                    <p className="github-live-sub">
                      {t.githubLive.subtitle}
                    </p>
                  </div>

                  {/* Sub Tabs: Repositórios / Atividade / Estatísticas */}
                  <div className="github-subtabs">
                    <button
                      className={`github-tab-btn ${githubTab === 'repos' ? 'active' : ''}`}
                      onClick={() => setGithubTab('repos')}
                    >
                      <FolderGit2 size={15} />
                      <span>{t.githubLive.tabRepos} ({githubRepos.length})</span>
                    </button>
                    <button
                      className={`github-tab-btn ${githubTab === 'activity' ? 'active' : ''}`}
                      onClick={() => setGithubTab('activity')}
                    >
                      <Activity size={15} />
                      <span>{t.githubLive.tabActivity}</span>
                    </button>
                    <button
                      className={`github-tab-btn ${githubTab === 'stats' ? 'active' : ''}`}
                      onClick={() => setGithubTab('stats')}
                    >
                      <Cpu size={15} />
                      <span>{t.githubLive.tabStats}</span>
                    </button>
                  </div>

                  {/* TAB 1: REPOSITÓRIOS ATIVOS */}
                  {githubTab === 'repos' && (
                    <div className="github-repos-grid">
                      {githubRepos.map((repo) => {
                        const langMeta = getLanguageMeta(repo.language);
                        return (
                          <a
                            key={repo.id || repo.name}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-repo-card"
                          >
                            <div className="github-repo-top">
                              <div className="github-repo-name-box">
                                <FolderGit2 size={18} className="accent" />
                                <span className="github-repo-name">{repo.name}</span>
                              </div>
                              <ExternalLink size={16} className="github-ext-icon" />
                            </div>

                            <p className="github-repo-desc">
                              {repo.description || (lang === 'pt' ? 'Repositório de código e utilitários no GitHub' : 'GitHub source code and utility repository')}
                            </p>

                            <div className="github-repo-footer">
                              <div className="github-repo-lang">
                                <span
                                  className="lang-color-dot"
                                  style={{ backgroundColor: langMeta.color }}
                                />
                                <span>{langMeta.name}</span>
                              </div>

                              <div className="github-repo-meta-right">
                                {repo.stargazers_count > 0 && (
                                  <span className="github-stat-pill">
                                    <Star size={13} /> {repo.stargazers_count}
                                  </span>
                                )}
                                {repo.updated_at && (
                                  <span className="github-repo-date" title={repo.updated_at}>
                                    <Clock size={12} /> {formatFriendlyDate(repo.updated_at, lang)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  )}

                  {/* TAB 2: ATIVIDADE RECENTE & COMMITS */}
                  {githubTab === 'activity' && (
                    <div className="github-activity-stream">
                      {githubEvents.map((evt, idx) => (
                        <div key={evt.id || idx} className="github-activity-item">
                          <div className="github-activity-dot-line">
                            <div className="github-activity-dot">
                              <GitCommit size={14} />
                            </div>
                            {idx < githubEvents.length - 1 && <div className="github-activity-line" />}
                          </div>

                          <div className="github-activity-content">
                            <div className="github-activity-header">
                              <span className="github-activity-type">
                                {evt.actionText ? evt.actionText[lang] : t.githubLive.eventPush}
                              </span>
                              <span className="github-activity-date">
                                <Clock size={12} /> {formatFriendlyDate(evt.created_at, lang)}
                              </span>
                            </div>
                            <div className="github-activity-repo">
                              <a
                                href={`https://github.com/${evt.repo}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-activity-repo-link"
                              >
                                <GithubIcon size={14} />
                                <span>{evt.repo}</span>
                                <ExternalLink size={12} />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TAB 3: LINGUAGENS & MÉTRICAS */}
                  {githubTab === 'stats' && (
                    <div className="github-stats-wrapper">
                      <div className="github-stats-grid">
                        <div className="github-stat-card">
                          <span className="github-stat-num">{githubUser.public_repos || 4}</span>
                          <span className="github-stat-label">{t.githubLive.statRepos}</span>
                        </div>
                        <div className="github-stat-card">
                          <span className="github-stat-num" style={{ color: '#f7df1e' }}>JavaScript</span>
                          <span className="github-stat-label">{t.githubLive.statLanguage}</span>
                        </div>
                        <div className="github-stat-card">
                          <span className="github-stat-num" style={{ color: 'var(--accent)' }}>2024 — Presente</span>
                          <span className="github-stat-label">{t.githubLive.statActivity}</span>
                        </div>
                        <div className="github-stat-card">
                          <span className="github-stat-num">
                            {formatFriendlyDate(githubRepos[0]?.updated_at, lang)}
                          </span>
                          <span className="github-stat-label">{lang === 'pt' ? 'Último Update' : 'Latest Update'}</span>
                        </div>
                      </div>

                      {/* Language Distribution Bar */}
                      <div className="github-lang-progress-box">
                        <h4>{t.githubLive.langDistribution}</h4>
                        <div className="github-lang-bar">
                          <div className="github-lang-segment" style={{ width: '75%', backgroundColor: '#f7df1e' }} title="JavaScript: 75%" />
                          <div className="github-lang-segment" style={{ width: '15%', backgroundColor: '#563d7c' }} title="CSS3: 15%" />
                          <div className="github-lang-segment" style={{ width: '10%', backgroundColor: '#e34c26' }} title="HTML5: 10%" />
                        </div>
                        <div className="github-lang-legend">
                          <div className="github-legend-item">
                            <span className="lang-color-dot" style={{ backgroundColor: '#f7df1e' }} />
                            <span>JavaScript (75%)</span>
                          </div>
                          <div className="github-legend-item">
                            <span className="lang-color-dot" style={{ backgroundColor: '#563d7c' }} />
                            <span>CSS3 (15%)</span>
                          </div>
                          <div className="github-legend-item">
                            <span className="lang-color-dot" style={{ backgroundColor: '#e34c26' }} />
                            <span>HTML5 (10%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Footer Action */}
                  <div className="github-live-footer">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-view-all-link"
                    >
                      <GithubIcon size={16} />
                      <span>{t.githubLive.viewAllRepos}</span>
                      <ChevronRight size={16} />
                    </a>
                  </div>
                </SpotlightCard>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ------------------- 5. EDUCAÇÃO / PERCURSO & CERTIFICAÇÕES ------------------- */}
        <section id="educacao" className="section">
          <div className="container">
            <FadeInSection>
              <h2 className="section-title">
                <span className="number">04.</span> {t.education.title}
              </h2>

              <div className="timeline">
                {timelineItems.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <SpotlightCard
                      className="timeline-content"
                      onClick={() => setSelectedInfoModal(item.modalData)}
                      title={lang === 'pt' ? 'Clique para ver detalhes do curso' : 'Click to view course details'}
                    >
                      <span className="timeline-date">{item.period}</span>
                      <h3 className="timeline-title">{item.degree}</h3>
                      <p className="timeline-subtitle">{item.institution}</p>
                      <p className="timeline-desc">{item.description}</p>
                      <span className="card-click-hint">
                        {lang === 'pt' ? 'Ver detalhes do curso' : 'View course details'} <ChevronRight size={12} />
                      </span>
                    </SpotlightCard>
                  </div>
                ))}
              </div>

              {/* Cartas de Recomendação de Estágio */}
              <div style={{ marginTop: '3.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <FileCheck size={22} className="accent" /> {t.education.recommendationsTitle}
                </h3>
                {t.education.recommendationsSub && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.35rem', marginBottom: '1.5rem' }}>
                    {t.education.recommendationsSub}
                  </p>
                )}

                <div className="recommendations-grid">
                  {recommendationLetters.map((rec) => (
                    <SpotlightCard
                      key={rec.id}
                      className="recommendation-card"
                      onClick={() => setSelectedInfoModal(rec.modalData)}
                      title={lang === 'pt' ? 'Clique para ver a carta e pontos-chave' : 'Click to view recommendation details'}
                    >
                      <div className="rec-card-header">
                        <div className="rec-icon-box">
                          <Briefcase size={20} className="accent" />
                        </div>
                        <div className="rec-header-info">
                          <span className="rec-year-badge">{rec.year}</span>
                          <h4 className="rec-company-name">{rec.company}</h4>
                          <span className="rec-role-tag">{rec.role} • {rec.period}</span>
                        </div>
                      </div>

                      <div className="rec-body">
                        <Quote size={16} className="rec-quote-icon" />
                        <p className="rec-desc">{rec.desc}</p>
                      </div>

                      <div className="rec-footer">
                        <span className="card-click-hint">
                          {lang === 'pt' ? 'Ver carta & pontos-chave' : 'View letter & key points'} <ChevronRight size={12} />
                        </span>
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              </div>

              {/* Certificações & Habilitações */}
              <div style={{ marginTop: '3.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  <Award size={22} className="accent" /> {t.education.certTitle}
                </h3>
                <div className="certifications-grid">
                  {certifications.map((cert, idx) => (
                    <SpotlightCard
                      key={idx}
                      className="cert-card"
                      onClick={() => setSelectedInfoModal(cert.modalData)}
                      title={lang === 'pt' ? 'Clique para ver detalhes do certificado' : 'Click for certificate details'}
                    >
                      <Award size={24} className="cert-icon" />
                      <div>
                        <h4 className="cert-title">{cert.title}</h4>
                        <span className="cert-issuer">{cert.issuer}</span>
                        <p className="cert-desc">{cert.desc}</p>
                        <span className="card-click-hint">
                          {lang === 'pt' ? 'Ver detalhes' : 'View details'} <ChevronRight size={12} />
                        </span>
                      </div>
                    </SpotlightCard>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ------------------- 6. CONTACTO SECTION & FORM ------------------- */}
        <section id="contacto" className="section">
          <div className="container">
            <FadeInSection>
              <h2 className="section-title" style={{ justifyContent: 'center' }}>
                <span className="number">05.</span> {t.contact.title}
              </h2>

              <div className="contact-container">
                <p className="contact-subtitle">
                  {t.contact.subtitle}
                </p>

                <SpotlightCard className="contact-card">
                  <Mail size={36} style={{ color: 'var(--accent)' }} />
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                      {t.contact.cardTitle}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      {t.contact.cardSub}
                    </p>
                  </div>

                  <div className="email-box" onClick={copyToClipboard} title="Clique para copiar email">
                    <span>{userEmail}</span>
                    {copiedEmail ? <Check size={18} color="var(--accent)" /> : <Copy size={18} />}
                  </div>

                  {copiedEmail && (
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-code)' }}>
                      {t.contact.copiedToast}
                    </span>
                  )}
                </SpotlightCard>

                {/* Interactive Contact Form */}
                <SpotlightCard className="contact-form-wrapper">
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Mail size={20} className="accent" /> {t.contact.formTitle}
                  </h3>

                  {formSubmitted && (
                    <div className="form-success-alert">
                      <Check size={20} />
                      <span>{t.contact.formSuccess}</span>
                    </div>
                  )}

                  <form className="contact-form" onSubmit={handleFormSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label>{t.contact.formName}</label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder={t.contact.formNamePlaceholder}
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label>{t.contact.formEmail}</label>
                        <input
                          type="email"
                          required
                          className="form-input"
                          placeholder={t.contact.formEmailPlaceholder}
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>{t.contact.formSubject}</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder={t.contact.formSubjectPlaceholder}
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>{t.contact.formMessage}</label>
                      <textarea
                        required
                        className="form-textarea"
                        placeholder={t.contact.formMessagePlaceholder}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary form-submit-btn"
                      disabled={isSubmitting}
                      style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                    >
                      {isSubmitting ? (
                        <span>{lang === 'pt' ? 'A enviar...' : 'Sending...'}</span>
                      ) : (
                        <>
                          <Send size={16} /> {t.contact.formSubmit}
                        </>
                      )}
                    </button>
                  </form>
                </SpotlightCard>

                <div className="social-links" style={{ marginTop: '2.5rem' }}>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    title={t.contact.githubTooltip}
                  >
                    <GithubIcon size={22} />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    title={t.contact.linkedinTooltip}
                  >
                    <LinkedinIcon size={22} />
                  </a>
                  <a
                    href={`mailto:${userEmail}`}
                    className="social-icon-btn"
                    title={t.contact.emailTooltip}
                  >
                    <Mail size={22} />
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      {/* ------------------- FOOTER ------------------- */}
      <footer className="footer">
        <div className="container">
          <p>
            {t.footer.designedBy} <span style={{ color: 'var(--accent)' }}>Gonçalo Lima</span> — 2026
          </p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
            {t.footer.sub}
          </p>
        </div>
      </footer>

      {/* ------------------- PROJECT DETAILS MODAL ------------------- */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="skill-icon-wrapper modal-icon">
                <FolderGit2 size={26} />
              </div>
              <div>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <span className="modal-category-tag">
                  {selectedProject.category === 'web' ? 'Web Application' : 'WordPress'}
                </span>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedProject.fullDesc[lang]}</p>

              {selectedProject.features && selectedProject.features[lang] && (
                <div className="modal-highlights-section">
                  <h4>{lang === 'pt' ? 'Funcionalidades & Destaques:' : 'Features & Highlights:'}</h4>
                  <ul className="project-features-list">
                    {selectedProject.features[lang].map((feat, idx) => (
                      <li key={idx} className="project-feature-item">
                        <Check size={16} className="accent" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-highlights-section" style={{ marginTop: '1.25rem' }}>
                <h4>{lang === 'pt' ? 'Tecnologias Utilizadas:' : 'Technologies Used:'}</h4>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-modal-actions">
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <ExternalLink size={18} /> {t.projects.demoTitle}
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <GithubIcon size={18} /> {t.projects.githubTitle}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ------------------- GENERAL INFO / ABOUT / EDUCATION MODAL ------------------- */}
      {selectedInfoModal && (
        <div className="modal-backdrop" onClick={() => setSelectedInfoModal(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedInfoModal(null)}
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="skill-icon-wrapper modal-icon">
                {selectedInfoModal.icon || <Sparkles size={24} />}
              </div>
              <div>
                <h3 className="modal-title">{selectedInfoModal.title}</h3>
                {selectedInfoModal.badge && (
                  <span className="modal-category-tag">
                    {selectedInfoModal.badge}
                  </span>
                )}
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedInfoModal.desc[lang]}</p>

              {selectedInfoModal.highlights && selectedInfoModal.highlights[lang] && (
                <div className="modal-highlights-section">
                  <h4>{lang === 'pt' ? 'Pontos-Chave & Detalhes:' : 'Key Points & Details:'}</h4>
                  <ul className="project-features-list">
                    {selectedInfoModal.highlights[lang].map((point, idx) => (
                      <li key={idx} className="project-feature-item">
                        <Check size={16} className="accent" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="modal-footer" style={{ marginTop: '1.5rem' }}>
              <button
                className="btn btn-outline"
                onClick={() => setSelectedInfoModal(null)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {lang === 'pt' ? 'Fechar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
