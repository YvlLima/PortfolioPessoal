import React, { useState, useEffect, useCallback } from 'react';
import ptTranslations from '../locales/pt.json';
import enTranslations from '../locales/en.json';
import { LanguageContext } from './languageContextCore';

const STORAGE_KEY = 'site_language';

const translationsMap = {
  pt: ptTranslations,
  en: enTranslations
};

const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'pt' || saved === 'en') {
        return saved;
      }
      const browserLang = navigator.language || navigator.userLanguage || '';
      if (browserLang.toLowerCase().startsWith('pt')) {
        return 'pt';
      }
      return 'en';
    } catch {
      return 'pt';
    }
  }
  return 'pt';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = useCallback((newLang) => {
    const validLang = newLang === 'en' ? 'en' : 'pt';
    setLanguageState(validLang);
    try {
      localStorage.setItem(STORAGE_KEY, validLang);
    } catch (e) {
      console.warn('Unable to persist language preference in localStorage', e);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const nextLang = prev === 'pt' ? 'en' : 'pt';
      try {
        localStorage.setItem(STORAGE_KEY, nextLang);
      } catch (e) {
        console.warn('Unable to persist language preference in localStorage', e);
      }
      return nextLang;
    });
  }, []);

  const activeTranslations = translationsMap[language] || ptTranslations;

  // Sync HTML lang attribute and SEO meta tags
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // 1. Update <html lang="...">
    document.documentElement.lang = language;

  }, [language, activeTranslations]);

  const value = {
    language,
    lang: language,
    setLanguage,
    toggleLanguage,
    t: activeTranslations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
