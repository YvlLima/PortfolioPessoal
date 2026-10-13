import React, { useEffect, useState } from 'react';
import FadeInSection from './FadeInSection';
import NowProjectCards, { displayNowProjects } from './NowProjectCards';

export default function Now({ t, lang, nowProjects, onOpenCaseStudy }) {
  const [published, setPublished] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/now', {signal:controller.signal}).then(response => {
      if (!response.ok) throw new Error('Content unavailable');
      return response.json();
    }).then(content => {
      if (Array.isArray(content.projects) && content.subtitle) setPublished(content);
    }).catch(() => {});
    return () => controller.abort();
  }, []);
  const projects = published ? displayNowProjects(published,lang) : nowProjects;
  return <section id="agora" className="section"><div className="container"><FadeInSection>
    <div className="section-header-row"><div>
      <h2 className="section-title"><span className="number">04.</span> {t.now.title}</h2>
      <p className="projects-subtitle-text">{published?.subtitle[lang] || (lang === 'pt' ? 'Projetos em curso e o que estou a aprender.' : 'Work in progress and what I’m learning.')}</p>
    </div></div>
    <NowProjectCards projects={projects} lang={lang} onOpenCaseStudy={onOpenCaseStudy} />
    {!projects.length && <p className="projects-subtitle-text">{lang === 'pt' ? 'Novidades em breve.' : 'Updates coming soon.'}</p>}
  </FadeInSection></div></section>;
}
