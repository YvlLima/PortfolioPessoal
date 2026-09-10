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

    // 2. Update Document Title
    const seo = activeTranslations.seo || {};
    if (seo.title) {
      // Only set main title if not on privacy page or sub-page with custom title
      if (!window.location.pathname.includes('/privacidade')) {
        document.title = seo.title;
      }
    }

    // 3. Update Meta Description
    if (seo.description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', seo.description);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', seo.description);
      }
      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) {
        twitterDesc.setAttribute('content', seo.description);
      }
    }

    // 4. Update OpenGraph / Twitter Title
    if (seo.title) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', seo.title);
      }
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', seo.title);
      }
    }
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
