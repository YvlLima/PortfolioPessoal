import React, { useEffect, useRef } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';
export const SimpleCursor = () => {
  const dot = useRef(null), ring = useRef(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion || window.matchMedia('(pointer: coarse)').matches) return;
    let frame = 0, target = {x:-100,y:-100}, position = {...target};
    const animate = () => {
      frame = 0;
      if (!ring.current) return;
      position.x += (target.x-position.x)*0.35; position.y += (target.y-position.y)*0.35;
      ring.current.style.left = `${position.x}px`; ring.current.style.top = `${position.y}px`;
      if (Math.abs(target.x-position.x)+Math.abs(target.y-position.y)>0.25) frame=requestAnimationFrame(animate);
    };
    const move = event => {
      if (!dot.current || !ring.current) return;
      target={x:event.clientX,y:event.clientY};
      dot.current.style.left=`${target.x}px`; dot.current.style.top=`${target.y}px`;
      dot.current.style.visibility=ring.current.style.visibility='visible';
      document.body.classList.add('has-custom-cursor');
      ring.current.classList.toggle('is-hovering',!!event.target.closest('a,button,input,textarea,[role="button"]'));
      if (!frame) frame=requestAnimationFrame(animate);
    };
    const down=()=>ring.current?.classList.add('is-clicking');
    const up=()=>ring.current?.classList.remove('is-clicking');
    const hide=()=>{
      if(dot.current&&ring.current) dot.current.style.visibility=ring.current.style.visibility='hidden';
      document.body.classList.remove('has-custom-cursor'); cancelAnimationFrame(frame); frame=0;
    };
    window.addEventListener('mousemove',move,{passive:true}); window.addEventListener('mousedown',down); window.addEventListener('mouseup',up);
    window.addEventListener('blur',hide); document.addEventListener('mouseleave',hide); document.addEventListener('visibilitychange',hide);
    return ()=>{
      hide(); window.removeEventListener('mousemove',move); window.removeEventListener('mousedown',down); window.removeEventListener('mouseup',up);
      window.removeEventListener('blur',hide); document.removeEventListener('mouseleave',hide); document.removeEventListener('visibilitychange',hide);
    };
  },[reducedMotion]);
  if(reducedMotion) return null;
  return <><div ref={dot} aria-hidden="true" className="simple-cursor-dot" style={{visibility:'hidden'}} /><div ref={ring} aria-hidden="true" className="simple-cursor-ring" style={{visibility:'hidden'}} /></>;
};
export default SimpleCursor;
