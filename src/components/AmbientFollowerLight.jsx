import React, { useState, useEffect } from 'react';

export const AmbientFollowerLight = () => {
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

export default AmbientFollowerLight;
