import React from 'react';
import { Gamepad2, GraduationCap } from 'lucide-react';
import { getNowProjects as getRawNowProjects } from './nowProjects.js';

const icons = {
  Gamepad2,
  GraduationCap
};

export const getNowProjects = (lang = 'pt') => {
  return getRawNowProjects(lang).map(item => {
    const IconComponent = icons[item.iconName] || Gamepad2;
    return {
      ...item,
      icon: <IconComponent size={24} className="accent" />
    };
  });
};
