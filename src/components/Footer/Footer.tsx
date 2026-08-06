"use client";

import React from 'react';
import { FaLinkedin, FaDev, FaGithub } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-shell w-full flex items-center">
            <div className="container mx-auto px-6 pt-10 pb-20 md:pt-14 md:pb-24 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="footer-text text-center md:text-left">
                    <p>© {currentYear} Mikhael Groschitz. {t.footer.rights}</p>
                </div>

                <div className="flex items-center gap-3 pb-6">
                    <a
                        href="https://www.linkedin.com/in/mikhael-groschitz/"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-icon-link"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/Mikhael-Groschitz"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-icon-link"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://dev.to/arg"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-icon-link"
                        aria-label="Dev.to"
                    >
                        <FaDev />
                    </a>

                </div>

            </div>
        </footer>
    );
};

export default Footer;