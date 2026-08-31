import React, { useState, useEffect } from 'react';

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
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Modal from './components/Modal';

// Hooks
import useTheme from './hooks/useTheme';

// Static Data & Utilities
import { contentTranslations } from './data/translations';
import { getAboutStatsList } from './data/aboutStats';
import { skillsList, getSoftSkills } from './data/skills';
import { getProjects } from './data/projects';
import { getNowProjects } from './data/nowProjects';
import { getTimelineItems, getCertifications } from './data/timeline';
import { getRecommendationLetters } from './data/recommendations';
import { getAllPosts } from './utils/blog';

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [lang, setLang] = useState('pt'); // 'pt' | 'en'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [ripples, setRipples] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedInfoModal, setSelectedInfoModal] = useState(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);

  // GitHub Live Activity State
  const [githubTab, setGithubTab] = useState('repos'); // 'repos' | 'activity' | 'stats' | 'contributions'
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
      name: 'PortfolioPessoal',
      description: 'Portfólio Pessoal moderno em React + Vite com design cyberpunk e spotlight interativo',
      language: 'JavaScript',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/YvlLima/PortfolioPessoal',
      updated_at: '2026-08-16T19:30:12Z'
    },
    {
      id: 'repo-3',
      name: 'MusicHub',
      description: 'Plataforma web de música interativa construída com React e Cloudflare Pages',
      language: 'JavaScript',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/YvlLima/MusicHub',
      updated_at: '2026-08-10T11:42:05Z'
    },
    {
      id: 'repo-4',
      name: 'BagLess',
      description: 'Aplicação web moderna para produtividade e organização pessoal ágil',
      language: 'JavaScript',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/YvlLima/BagLess',
      updated_at: '2026-08-04T15:18:22Z'
    }
  ]);

  const [githubEvents, setGithubEvents] = useState([
    {
      id: 'ev-1',
      type: 'PushEvent',
      repo: 'YvlLima/FazbearNightshift',
      created_at: '2026-08-18T21:51:57Z',
      actionText: {
        pt: 'Atualização de comandos slash e PvP',
        en: 'Updated slash commands and PvP engine'
      }
    },
    {
      id: 'ev-2',
      type: 'PushEvent',
      repo: 'YvlLima/PortfolioPessoal',
      created_at: '2026-08-16T19:30:12Z',
      actionText: {
        pt: 'Melhorias de interface e dados',
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

  const t = contentTranslations[lang];

  // Fechar modals e artigo de blog ao premir Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedInfoModal(null);
        setSelectedBlogPost(null);
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

  // Active section spy
  useEffect(() => {
    if (selectedBlogPost) return;

    const handleScroll = () => {
      const sections = ['hero', 'sobre', 'skills', 'projetos', 'agora', 'blog', 'educacao', 'contacto'];
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
  }, [selectedBlogPost]);

  // Email & Links do Gonçalo
  const userEmail = "goncalomartinslima2007@gmail.com";
  const githubUrl = "https://github.com/YvlLima";
  const linkedinUrl = "https://www.linkedin.com/in/gon%C3%A7alo-lima-532318428/?skipRedirect=true";

  // Toggle Language
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  // Click Ripple Effect
  const handleGlobalClick = (e) => {
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
  const projects = getProjects(t);
  const nowProjects = getNowProjects(lang, t);
  const blogPosts = getAllPosts();
  const timelineItems = getTimelineItems(t);
  const certifications = getCertifications(lang);
  const recommendationLetters = getRecommendationLetters(lang);

  return (
    <div className="portfolio-app" onClick={handleGlobalClick}>
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

      {/* Navigation Header */}
      <Navbar
        activeSection={selectedBlogPost ? 'blog' : activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        lang={lang}
        toggleLanguage={toggleLanguage}
        t={t}
        userEmail={userEmail}
        theme={theme}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />

      <main>
        {selectedBlogPost ? (
          /* Vista de Artigo Individual */
          <BlogPost
            post={selectedBlogPost}
            onBack={() => {
              setSelectedBlogPost(null);
              setTimeout(() => {
                const el = document.getElementById('blog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
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
              onSelectModal={(data) => setSelectedInfoModal(data)}
            />

            {/* 4. Projetos & GitHub Live Activity */}
            <Projects
              t={t}
              lang={lang}
              projects={projects}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />

            <div className="container">
              <GitHubLive
                t={t}
                lang={lang}
                githubUser={githubUser}
                githubRepos={githubRepos}
                githubEvents={githubEvents}
                githubTab={githubTab}
                setGithubTab={setGithubTab}
                isSyncing={isSyncing}
                lastSyncTime={lastSyncTime}
                fetchGitHubLive={fetchGitHubLive}
                githubUrl={githubUrl}
              />
            </div>

            {/* 5. Agora (Now) - Projetos Atuais */}
            <Now
              t={t}
              lang={lang}
              nowProjects={nowProjects}
              onSelectModal={(data) => setSelectedInfoModal(data)}
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
      <Footer t={t} />

      {/* Modals */}
      <Modal
        selectedProject={selectedProject}
        selectedInfoModal={selectedInfoModal}
        onCloseProject={() => setSelectedProject(null)}
        onCloseInfo={() => setSelectedInfoModal(null)}
        lang={lang}
        t={t}
      />
    </div>
  );
}
