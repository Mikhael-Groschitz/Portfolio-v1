"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionaries, Language } from '@/locales/dictionaries';

type LanguageContextType = {
    language: Language;
    t: typeof dictionaries.pt;
    setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('pt');

    useEffect(() => {
        const savedLang = localStorage.getItem('portfolio-lang') as Language;
        if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
            setLanguageState(savedLang);
        }
    }, []);


    useEffect(() => {
        if (typeof window !== 'undefined') {

            document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });

            document.body.scrollTo({ top: 0, behavior: 'smooth' });

            const hero = document.getElementById('home');
            if (hero) {
                hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-US';
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('portfolio-lang', lang);
    };

    const t = dictionaries[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }
    return context;
};