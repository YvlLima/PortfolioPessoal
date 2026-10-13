import React, { useRef, useState } from 'react';
import { Code2, UserRound, Cpu, Send, ArrowUpRight } from 'lucide-react';
import useReducedMotion from '../hooks/useReducedMotion';

export default function ExploreMap({ lang }) {
  const pt = lang === 'pt';
  const reduced = useReducedMotion();
  const surface = useRef(null);
  const [active, setActive] = useState(null);
  const destinations = [
    { id: 'projetos', icon: Code2, label: pt ? 'Projetos' : 'Projects', detail: pt ? 'Explora o que construí.' : 'Explore what I built.' },
    { id: 'sobre', icon: UserRound, label: pt ? 'Sobre mim' : 'About me', detail: pt ? 'Conhece o meu percurso.' : 'Discover my journey.' },
    { id: 'skills', icon: Cpu, label: 'Skills', detail: pt ? 'As ferramentas que uso.' : 'The tools I work with.' },
    { id: 'contacto', icon: Send, label: pt ? 'Contacto' : 'Contact', detail: pt ? 'Vamos conversar.' : 'Let’s talk.' },
  ];
  const move = e => {
    if (reduced || e.pointerType !== 'mouse') return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - bounds.left) / bounds.width - .5;
    const y = (e.clientY - bounds.top) / bounds.height - .5;
    surface.current.style.setProperty('--map-x', `${x * 12}px`);
    surface.current.style.setProperty('--map-y', `${y * 12}px`);
  };
  const reset = () => {
    surface.current?.style.setProperty('--map-x', '0px');
    surface.current?.style.setProperty('--map-y', '0px');
    setActive(null);
  };
  return <div className="explore-map" ref={surface} onPointerMove={move} onPointerLeave={reset}>
    <div className="explore-map-top"><span>dev.lima / explore</span><span className="explore-live-dot" aria-hidden="true" /></div>
    <div className="explore-map-stage">
      <svg className="explore-connections" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
        {[[80,65],[320,65],[80,235],[320,235]].map(([x,y], index) => <path key={index} className={active === index ? 'is-active' : ''} d={`M200 150 Q${x} 150 ${x} ${y}`} />)}
      </svg>
      <div className="explore-orbit" aria-hidden="true" />
      <div className="explore-core" aria-hidden="true"><span>GL<span className="accent">.</span></span><small>Gonçalo Lima</small></div>
      <nav aria-label={pt ? 'Explorar o portfólio' : 'Explore portfolio'} className="explore-nodes">
        {destinations.map(({id, icon: Icon, label}, index) => <a key={id} href={`#${id}`} className={`explore-node explore-node-${index}`} onPointerEnter={() => setActive(index)} onFocus={() => setActive(index)} onBlur={() => setActive(null)} onClick={() => {
          const heading = document.getElementById(id)?.querySelector('h2');
          heading?.setAttribute('tabindex', '-1');
          heading?.focus({preventScroll: true});
        }}><Icon size={20} /><span>{label}</span><ArrowUpRight size={13} className="explore-node-arrow" /></a>)}
      </nav>
    </div>
    <p className="explore-map-caption">{active === null ? (pt ? 'Escolhe um ponto. Descobre o meu mundo.' : 'Pick a point. Discover my world.') : destinations[active].detail}</p>
  </div>;
}
