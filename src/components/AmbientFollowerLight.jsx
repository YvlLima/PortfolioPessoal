import React, { useState, useEffect, useRef } from 'react';

export const AmbientFollowerLight = () => {
  const lightRef = useRef(null);
  const rafIdRef = useRef(null);
  const latestPosRef = useRef({ x: -300, y: -300 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touchCheck = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (touchCheck) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      latestPosRef.current = { x: e.clientX, y: e.clientY };

      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(() => {
          if (lightRef.current) {
            lightRef.current.style.transform = `translate3d(${latestPosRef.current.x}px, ${latestPosRef.current.y}px, 0) translate(-50%, -50%)`;
          }
          rafIdRef.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={lightRef}
      className="ambient-follower"
      style={{
        transform: 'translate3d(-300px, -300px, 0) translate(-50%, -50%)',
      }}
    />
  );
};

export default AmbientFollowerLight;
