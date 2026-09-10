import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const LanguageToggle = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  const isPt = language === 'pt';
  const label = isPt
    ? 'Alternar idioma para Inglês'
    : 'Switch language to Portuguese';
  const title = isPt ? 'Mudar para Inglês' : 'Switch to Portuguese';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`lang-toggle ${className}`}
      title={title}
      aria-label={label}
    >
      <Globe size={14} aria-hidden="true" />
      <span className="lang-text-full">
        <span className={isPt ? 'lang-active' : 'lang-inactive'}>PT</span>
        <span className="lang-divider">|</span>
        <span className={!isPt ? 'lang-active' : 'lang-inactive'}>EN</span>
      </span>
      <span className="lang-badge-compact">{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;
