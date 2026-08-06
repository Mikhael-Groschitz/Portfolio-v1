"use client";

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/locales/dictionaries';

const LANGUAGES = [
    { code: 'pt', label: 'PORTUGUÊS', short: 'BR' },
    { code: 'en', label: 'ENGLISH', short: 'US' }
] as const;

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    const activeLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

    const handleSelect = (code: Language) => {
        setLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="lang-toggle-wrapper" ref={wrapperRef}>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className={`lang-btn ${isOpen ? 'open' : ''}`}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label={`Idioma atual: ${activeLang.label}. Alterar idioma.`}
            >
                <span className="lang-btn-text">{activeLang.short}</span>
            </button>

            <div className={`lang-dropdown ${isOpen ? 'is-open' : ''}`} role="listbox">
                {LANGUAGES.map((lang) => {
                    const isActive = language === lang.code;
                    return (
                        <button
                            key={lang.code}
                            onClick={() => handleSelect(lang.code as Language)}
                            className={`lang-option ${isActive ? 'is-active' : ''}`}
                            role="option"
                            aria-selected={isActive}
                        >
                            <span className="lang-option-icon">
                                {lang.short}
                            </span>
                            <span className="lang-option-label">
                                {lang.label}
                                <span className={`pill-cursor ${isActive ? 'is-visible' : ''}`}>_</span>
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}