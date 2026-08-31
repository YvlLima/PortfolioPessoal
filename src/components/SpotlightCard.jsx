import React, { useRef, useEffect } from 'react';

export const SpotlightCard = ({ children, className = '', style = {}, ...props }) => {
  const cardRef = useRef(null);
  const rafIdRef = useRef(null);
  const latestEventRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    latestEventRef.current = { clientX: e.clientX, clientY: e.clientY };

    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(() => {
        if (cardRef.current && latestEventRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          const x = latestEventRef.current.clientX - rect.left;
          const y = latestEventRef.current.clientY - rect.top;

          // Set CSS variables for spotlight radial gradient
          cardRef.current.style.setProperty('--mouse-x', `${x}px`);
          cardRef.current.style.setProperty('--mouse-y', `${y}px`);

          // Calculate 3D tilt relative to center
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -4; // Max tilt 4deg
          const rotateY = ((x - centerX) / centerX) * 4;

          cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        }
        rafIdRef.current = null;
      });
    }
  };

  const handleMouseLeave = () => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        willChange: 'transform',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
