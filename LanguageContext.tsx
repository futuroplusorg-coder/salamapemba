import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { translations } from './translations';

type Language = 'pt' | 'en';
type Translations = typeof translations.pt;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  texts: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('salama-pemba-lang') as Language;
    if (storedLanguage && (storedLanguage === 'pt' || storedLanguage === 'en')) {
      setLanguage(storedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('salama-pemba-lang', lang);
  };

  // Memoize texts to prevent unnecessary re-renders
  const texts = useMemo(() => translations[language], [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
