import { createContext } from 'react';
import ptTranslations from '../locales/pt.json';

export const LanguageContext = createContext({
  language: 'pt',
  lang: 'pt',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: ptTranslations
});

export default LanguageContext;
