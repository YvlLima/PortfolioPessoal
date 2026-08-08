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
  Search
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
      educacao: 'Educação & Certificados',
      contacto: 'Contacto',
      ctaBtn: 'Contactar'
    },
    hero: {
      badge: 'A concluir CTeSP para ingressar em Licenciatura em Eng. Informática',
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
      p3: 'Atualmente foco-me na combinação entre Desenvolvimento Web moderno (React, JavaScript, C#, Node.js) e Segurança Informática & Redes. O meu próximo objetivo é ingressar na Licenciatura em Engenharia Informática e integrar equipas dinâmicas onde possa continuar a evoluir e criar impacto positivo.',
      stat1Title: 'Formação Atual',
      stat1Desc: 'CTeSP Cibersegurança, Redes e Sistemas (ESTG - P.PORTO)',
      stat2Title: 'Foco Principal',
      stat2Desc: 'Desenvolvimento Web & Segurança Informática',
      stat3Title: 'Próximo Passo',
      stat3Desc: 'Licenciatura em Eng. Informática & Estágio/Dev Júnior',
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
      filterAll: 'Todos',
      filterWeb: 'Web Apps',
      filterCms: 'WordPress',
      proj1Desc: 'Plataforma web interativa de música com várias funcionalidades modernas de pesquisa, reprodução e organização de conteúdos áudio numa interface responsiva.',
      proj2Desc: 'Projeto de Prova de Aptidão Profissional (PAP) desenvolvido no curso de GPSI na Escola Secundária de Felgueiras. Plataforma web completa desenvolvida sobre WordPress dedicada à galeria e comunidade escolar.',
      githubTitle: 'Ver Código no GitHub',
      demoTitle: 'Ver Demo Ao Vivo'
    },
    education: {
      title: 'Educação & Certificações',
      certTitle: 'Certificações & Cursos Extra',
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
      educacao: 'Education & Certs',
      contacto: 'Contact',
      ctaBtn: 'Get in touch'
    },
    hero: {
      badge: 'Completing CTeSP to pursue a B.Sc. in Computer Science',
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
      p3: 'Currently, I focus on combining modern Web Development (React, JavaScript, C#, Node.js) with Cybersecurity & Computer Networks. My next goal is to enroll in a B.Sc. in Computer Science and join dynamic teams where I can continue to grow and make a positive impact.',
      stat1Title: 'Current Education',
      stat1Desc: 'Cybersecurity, Networks & Systems CTeSP (ESTG - P.PORTO)',
      stat2Title: 'Core Focus',
      stat2Desc: 'Web Development & Cybersecurity',
      stat3Title: 'Next Step',
      stat3Desc: 'B.Sc. in Computer Science & Junior Dev / Internship',
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
      filterAll: 'All',
      filterWeb: 'Web Apps',
      filterCms: 'WordPress',
      proj1Desc: 'Interactive music web platform featuring modern audio search, playback, and playlist organization within a responsive user interface.',
      proj2Desc: 'Final High School Diploma Project (PAP) developed in the IT course at Escola Secundária de Felgueiras. Full web platform built on WordPress for the school gallery and community.',
      githubTitle: 'View Code on GitHub',
      demoTitle: 'View Live Demo'
    },
    education: {
      title: 'Education & Certifications',
      certTitle: 'Certifications & Extra Courses',
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
          name: formState.name,
          email: formState.email,
          _subject: `[Portfólio Web] ${formState.subject || 'Nova Mensagem de Contacto'}`,
          message: formState.message
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
          pt: 'Após a conclusão do CTeSP, o meu objetivo imediato é ingressar na Licenciatura em Engenharia Informática para aprofundar os fundamentos teóricos e práticos de ciência da computação, paralelamente à integração no mercado de trabalho como Junior Developer ou Estagiário.',
          en: 'Upon completing the CTeSP degree, my immediate goal is to pursue a B.Sc. in Computer Science to deepen my theoretical and practical computer science foundation, while entering the job market as a Junior Developer or Intern.'
        },
        highlights: {
          pt: [
            'Prossecução de estudos na Licenciatura em Engenharia Informática',
            'Procura ativa de estágio profissional',
            'Desenvolvimento contínuo de projetos reais no GitHub',
            'Disponibilidade para integrar equipas de desenvolvimento web / segurança'
          ],
          en: [
            'Enrolling in a B.Sc. in Computer Science',
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
      description: t.projects.proj1Desc,
      fullDesc: {
        pt: 'O Music Hub é uma plataforma web moderna e interativa desenvolvida com React e CSS3. Permite aos utilizadores pesquisar faixas musicais, controlar a reprodução áudio em tempo real, gerir listas de reprodução e navegar numa interface fluida, rápida e responsiva. O projeto foi construído com foco em performance e está alojado com integração contínua no Cloudflare Pages.',
        en: 'Music Hub is a modern, interactive web application built with React and CSS3. It allows users to search music tracks, control audio playback in real time, manage playlists, and navigate a smooth, fast, responsive interface. The project was engineered for performance and is hosted with continuous deployment on Cloudflare Pages.'
      },
      features: {
        pt: [
          'Pesquisa dinâmica e filtragem em tempo real',
          'Design moderno 100% responsivo para desktop e mobile',
          'Alojamento de alto desempenho no Cloudflare Pages'
        ],
        en: [
          'Dynamic real-time search and filtering',
          '100% responsive modern design for mobile & desktop',
          'High-performance hosting on Cloudflare Pages'
        ]
      },
      tags: ['React', 'JavaScript', 'CSS3', 'Cloudflare Pages'],
      github: 'https://github.com/YvlLima/MusicHub',
      demo: 'https://musichub-9hu.pages.dev/'
    },
    {
      id: 2,
      title: 'Galeria Piso Dois (PAP)',
      category: 'cms',
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
      tags: ['WordPress', 'CMS', 'Web Design'],
      demo: 'https://galeriapisodois.esfelgueiras.pt/'
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
                  <SpotlightCard key={index} className="skill-card">
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

              {/* Dynamic Project Filter Tabs */}
              <div className="filter-tabs">
                <button
                  className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setProjectFilter('all')}
                >
                  {t.projects.filterAll}
                </button>
                <button
                  className={`filter-btn ${projectFilter === 'web' ? 'active' : ''}`}
                  onClick={() => setProjectFilter('web')}
                >
                  {t.projects.filterWeb}
                </button>
                <button
                  className={`filter-btn ${projectFilter === 'cms' ? 'active' : ''}`}
                  onClick={() => setProjectFilter('cms')}
                >
                  {t.projects.filterCms}
                </button>
              </div>

              <div className="projects-grid">
                {filteredProjects.map((proj) => (
                  <SpotlightCard
                    key={proj.id}
                    className="project-card"
                    onClick={() => setSelectedProject(proj)}
                    title={lang === 'pt' ? 'Clique para ver detalhes do projeto' : 'Click to view project details'}
                  >
                    <div>
                      <div className="project-header">
                        <FolderGit2 size={32} className="project-folder-icon" />
                        <div className="project-links" onClick={(e) => e.stopPropagation()}>
                          {proj.github && (
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link-icon"
                              title={t.projects.githubTitle}
                            >
                              <GithubIcon size={20} />
                            </a>
                          )}
                          {proj.demo && (
                            <a
                              href={proj.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link-icon"
                              title={t.projects.demoTitle}
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="project-title">{proj.title}</h3>
                      <p className="project-desc">{proj.description}</p>
                    </div>

                    <div>
                      <ul className="project-tags">
                        {proj.tags.map((tag, i) => (
                          <li key={i} className="project-tag">
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <div className="project-card-footer-hint">
                        <span className="project-click-hint">
                          {lang === 'pt' ? 'Abrir projeto' : 'Open project'} <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
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

              {/* Certificações & Cursos Extra */}
              <div style={{ marginTop: '3.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
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
