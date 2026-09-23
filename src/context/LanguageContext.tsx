'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const stored = localStorage.getItem('preferred_language') as Language;
        if (stored === 'pt' || stored === 'en') {
          setLanguageState(stored);
          document.documentElement.lang = stored;
          return;
        }
        const navLang = navigator.language?.toLowerCase() || '';
        if (navLang.startsWith('pt')) {
          setLanguageState('pt');
          document.documentElement.lang = 'pt';
        } else {
          setLanguageState('en');
          document.documentElement.lang = 'en';
        }
      } catch {
        // ignore
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    try {
      document.documentElement.lang = language;
    } catch {
      // ignore
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('preferred_language', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next = language === 'pt' ? 'en' : 'pt';
    setLanguage(next);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
