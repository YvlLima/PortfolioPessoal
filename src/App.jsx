import React, { useState, useEffect, useCallback } from 'react';

// Components
import SimpleCursor from './components/SimpleCursor';
import AmbientFollowerLight from './components/AmbientFollowerLight';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubLive from './components/GitHubLive';
import Now from './components/Now';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import PrivacyPolicy from './components/PrivacyPolicy';
import ProjectsList from './components/ProjectsList';
import ProjectCaseStudy from './components/ProjectCaseStudy';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Modal from './components/Modal';

// Hooks
import useTheme from './hooks/useTheme';
import useReducedMotion from './hooks/useReducedMotion';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './hooks/useLanguage';

// Static Data & Utilities
import { getAboutStatsList } from './data/aboutStats';
import { skillsList, getSoftSkills } from './data/skills';
import { getProjects } from './data/projects';
import { getNowProjects } from './data/nowProjects';
import { getTimelineItems, getCertifications } from './data/timeline';
import { getRecommendationLetters } from './data/recommendations';
import { getCaseStudyBySlug } from './data/projectsData';
import { getAllPosts } from './utils/blog';

const isPrivacyRoute = (path, hash) => {
  const p = (path || '').toLowerCase();
  const h = (hash || '').toLowerCase();
  return p === '/privacidade' || p === '/privacy' || p === '/politica-de-privacidade' || h === '#privacidade' || h === '#privacy';
};

const getCaseStudyRoute = (path, hash) => {
  const p = (path || '').toLowerCase();
  const h = (hash || '').toLowerCase();

  const matchPathDetail = p.match(/^\/(?:projetos|projects)\/([a-z0-9_-]+)\/?$/);
  if (matchPathDetail && matchPathDetail[1]) {
    return { type: 'detail', slug: matchPathDetail[1] };
  }

  if (p === '/projetos' || p === '/projects') {
    return { type: 'list', slug: null };
  }

  const matchHashDetail = h.match(/^#(?:projetos|projects)\/([a-z0-9_-]+)$/);
  if (matchHashDetail && matchHashDetail[1]) {
    return { type: 'detail', slug: matchHashDetail[1] };
  }

  if (h === '#projetos-cases' || h === '#cases' || h === '#projetos-list') {
    return { type: 'list', slug: null };
  }

  return null;
};

function PortfolioContent() {
  const { toggleTheme, isDark } = useTheme();
  const reducedMotion = useReducedMotion();
  const { lang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [ripples, setRipples] = useState([]);
  const [selectedInfoModal, setSelectedInfoModal] = useState(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return isPrivacyRoute(window.location.pathname, window.location.hash);
    }
    return false;
  });
  const [caseStudyRoute, setCaseStudyRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      return getCaseStudyRoute(window.location.pathname, window.location.hash);
    }
    return null;
  });

  // Sync with browser history and URL routes (popstate and hashchange)
  useEffect(() => {
    const handleLocationChange = () => {
      const isPriv = isPrivacyRoute(window.location.pathname, window.location.hash);
      const csRoute = getCaseStudyRoute(window.location.pathname, window.location.hash);

      setIsPrivacyOpen(isPriv);
      setCaseStudyRoute(csRoute);

      if (isPriv || csRoute) {
        setSelectedBlogPost(null);

        setSelectedInfoModal(null);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleOpenPrivacy = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setSelectedBlogPost(null);

    setSelectedInfoModal(null);
    setCaseStudyRoute(null);
    setIsPrivacyOpen(true);
    try {
      window.history.pushState({ view: 'privacy' }, '', '/privacidade');
    } catch {
      // Fallback in environments without history pushState support
      window.location.hash = 'privacidade';
    }
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };

  const handleClosePrivacy = useCallback(() => {
    setIsPrivacyOpen(false);
    try {
      window.history.pushState({ view: 'home' }, '', '/');
    } catch {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }, []);

  const handleOpenProjectsList = useCallback((e) => {
    if (e && e.preventDefault) e.preventDefault();
    setSelectedBlogPost(null);

    setSelectedInfoModal(null);
    setIsPrivacyOpen(false);
    setCaseStudyRoute({ type: 'list', slug: null });
    try {
      window.history.pushState({ view: 'projects_list' }, '', '/projetos');
    } catch {
      window.location.hash = 'projetos-cases';
    }
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }, []);

  const handleOpenCaseStudy = useCallback((slug) => {
    setSelectedBlogPost(null);

    setSelectedInfoModal(null);
    setIsPrivacyOpen(false);
    setCaseStudyRoute({ type: 'detail', slug });
    try {
      window.history.pushState({ view: 'project_detail', slug }, '', `/projetos/${slug}`);
    } catch {
      window.location.hash = `projetos/${slug}`;
    }
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }, []);

  const handleBackToProjectsList = useCallback(() => {
    setCaseStudyRoute({ type: 'list', slug: null });
    try {
      window.history.pushState({ view: 'projects_list' }, '', '/projetos');
    } catch {
      window.location.hash = 'projetos-cases';
    }
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }, []);

  const handleNavigateHome = useCallback((section = 'hero') => {
    setIsPrivacyOpen(false);
    setCaseStudyRoute(null);
    setSelectedBlogPost(null);
    try {
      window.history.pushState({ view: 'home' }, '', `/#${typeof section === 'string' ? section : 'hero'}`);
    } catch {
      window.location.hash = 'hero';
    }
    requestAnimationFrame(() => {
      const target = document.getElementById(typeof section === 'string' ? section : 'hero');
      target?.scrollIntoView();
      const heading = target?.querySelector('h1, h2');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
    });
  }, []);

  // Escape closes overlays; ordinary project pages stay in browser history.
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        setSelectedInfoModal(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu or modal is open
  useEffect(() => {
    if (mobileMenuOpen || selectedInfoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, selectedInfoModal]);

  // Active section spy
  useEffect(() => {
    if (selectedBlogPost || isPrivacyOpen || caseStudyRoute) return;

    const handleScroll = () => {
      const sections = ['hero', 'projetos', 'sobre', 'skills', 'agora', 'blog', 'educacao', 'contacto'];
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop - 120;
          if (scrollY >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedBlogPost, isPrivacyOpen, caseStudyRoute]);

  useEffect(() => {
    if (!caseStudyRoute) return;
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      const heading = document.querySelector('main h1');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [caseStudyRoute]);

  // Email & Links do Gonçalo
  const userEmail = "goncalomartinslima2007@gmail.com";
  const githubUrl = "https://github.com/YvlLima";
  const linkedinUrl = "https://www.linkedin.com/in/gon%C3%A7alo-lima-532318428/?skipRedirect=true";

  // Click Ripple Effect
  const handleGlobalClick = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const newRipple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setRipples((prev) => [...prev.slice(-4), newRipple]);
  };

  // Data instances derived from active language and files
  const aboutStatsList = getAboutStatsList(t);
  const softSkills = getSoftSkills(lang);
  const projects = getProjects(lang);
  const nowProjects = getNowProjects(lang, t);
  const blogPosts = getAllPosts(lang);
  const timelineItems = getTimelineItems(t);
  const certifications = getCertifications(lang);
  const recommendationLetters = getRecommendationLetters(lang);

  const activeNavSection = isPrivacyOpen
    ? ''
    : caseStudyRoute
    ? 'projetos'
    : selectedBlogPost
    ? 'blog'
    : activeSection;

  return (
    <div className="portfolio-app" onClick={handleGlobalClick}>
      {/* Minimalist Dot + Soft Ring Cursor */}
      {!reducedMotion && <SimpleCursor />}
      {!reducedMotion && <AmbientFollowerLight />}

      {/* Global Click Ripples */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="click-ripple"
          style={{ left: `${r.x}px`, top: `${r.y}px` }}
        />
      ))}

      {/* Navigation Header */}
      <Navbar
        activeSection={activeNavSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        lang={lang}
        t={t}
        toggleTheme={toggleTheme}
        isDark={isDark}
        onNavigateHome={handleNavigateHome}
      />

      <a className="skip-link" href="#main-content">{lang === 'pt' ? 'Saltar para o conteúdo' : 'Skip to content'}</a>
      <main id="main-content" tabIndex={-1}>
        {isPrivacyOpen ? (
          /* Vista de Política de Privacidade */
          <PrivacyPolicy
            onBack={handleClosePrivacy}
            t={t}
            lang={lang}
            userEmail={userEmail}
          />
        ) : caseStudyRoute?.type === 'detail' ? (
          /* Vista de Case Study Individual (/projetos/:slug) */
          <ProjectCaseStudy
            project={getCaseStudyBySlug(caseStudyRoute.slug)}
            onBackToProjects={handleBackToProjectsList}
            onSelectCaseStudy={handleOpenCaseStudy}
            onBackHome={handleNavigateHome}
            t={t}
            lang={lang}
          />
        ) : caseStudyRoute?.type === 'list' ? (
          /* Vista de Lista de Case Studies (/projetos) */
          <ProjectsList
            onSelectCaseStudy={handleOpenCaseStudy}
            onBackHome={handleNavigateHome}
            t={t}
            lang={lang}
          />
        ) : selectedBlogPost ? (
          /* Vista de Artigo Individual */
          <BlogPost
            post={blogPosts.find(post => post.slug === selectedBlogPost.slug) || selectedBlogPost}
            onBack={() => {
              setSelectedBlogPost(null);
              setTimeout(() => {
                const el = document.getElementById('blog');
                if (el) el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
              }, 50);
            }}
            t={t}
            lang={lang}
          />
        ) : (
          /* Vista Principal da Página */
          <>
            {/* 1. Hero Section */}
            <Hero
              t={t}
              lang={lang}
              userEmail={userEmail}
              githubUrl={githubUrl}
              linkedinUrl={linkedinUrl}
            />

            {/* 4. Projetos & GitHub Live Activity */}
            <Projects
              t={t}
              lang={lang}
              projects={projects}
              onOpenProjectsList={handleOpenProjectsList}
              onOpenCaseStudy={handleOpenCaseStudy}
            />

            <div className="container">
              <GitHubLive lang={lang} />
            </div>

            {/* 2. Sobre Mim Section */}
            <About
              t={t}
              lang={lang}
              aboutStatsList={aboutStatsList}
              softSkills={softSkills}
              onSelectModal={(data) => setSelectedInfoModal(data)}
            />

            {/* 3. Skills Section */}
            <Skills
              t={t}
              lang={lang}
              skillsList={skillsList}
              onOpenCaseStudy={handleOpenCaseStudy}
              onSelectModal={(data) => setSelectedInfoModal(data)}
            />

            {/* 5. Agora (Now) - Projetos Atuais */}
            <Now
              t={t}
              lang={lang}
              nowProjects={nowProjects}
              onOpenCaseStudy={handleOpenCaseStudy}
            />

            {/* 6. Blog & Artigos em Markdown */}
            <Blog
              posts={blogPosts}
              onSelectPost={(post) => setSelectedBlogPost(post)}
              t={t}
              lang={lang}
            />

            {/* 7. Educação, Estágios & Certificações */}
            <Education
              t={t}
              lang={lang}
              timelineItems={timelineItems}
              recommendationLetters={recommendationLetters}
              certifications={certifications}
              onSelectModal={(data) => setSelectedInfoModal(data)}
            />

            {/* 8. Contacto Section & Form */}
            <ContactForm
              t={t}
              lang={lang}
              userEmail={userEmail}
              githubUrl={githubUrl}
              linkedinUrl={linkedinUrl}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        t={t}
        onOpenPrivacy={handleOpenPrivacy}
        onOpenProjectsList={handleOpenProjectsList}
      />

      {/* Modals */}
      <Modal
        selectedInfoModal={selectedInfoModal}
        onCloseInfo={() => setSelectedInfoModal(null)}
        lang={lang}
        t={t}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

