"use client";

import React, { useState, useEffect } from 'react';
import DecryptedText from '@/components/DecryptedText/DecryptedText';
import LetterGlitch from '@/components/LetterGlitch/LetterGlitch';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % t.hero.roles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [t.hero.roles.length]);

    return (
        <div id="hero" className="hero-container">

            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden [&>div]:w-full [&>div]:h-full [&>canvas]:w-full [&>canvas]:h-full">
                <LetterGlitch
                    glitchSpeed={50}
                    centerVignette={false}
                    outerVignette={true}
                    smooth={true}
                    glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
                />
            </div>

            <div className="hero-overlay"></div>

            <div className="hero-content-wrapper">
                <h1 className="hero-title">
                    {t.hero.title}
                </h1>

                <h2 className="hero-subtitle">
                    {t.hero.subtitle}
                </h2>

                <div className="hero-role-container">
                    <DecryptedText
                        text={t.hero.roles[index]}
                        speed={70}
                        maxIterations={25}
                        sequential={true}
                        revealDirection="center"
                        useOriginalCharsOnly={false}
                        animateOn="change"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;