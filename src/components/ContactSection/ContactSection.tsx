"use client";

import React, { useState } from 'react';
import { FaPaperPlane, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
    const { t } = useLanguage();
    const [mailLink, setMailLink] = useState("#");

    const handleInteraction = () => {
        const u = "mgroschitz";
        const d = "gmail.com";

        if (mailLink !== `mailto:${u}@${d}`) {
            setMailLink(`mailto:${u}@${d}`);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center text-center gap-5">
            <div className="container mx-auto px-6 max-w-3xl flex flex-col items-center gap-6">

                <div className="contact-icon-plane">
                    <FaPaperPlane className="transform -translate-x-0.5 translate-y-0.5" />
                </div>

                <h2 className="contact-heading">
                    <span className="contact-prompt">&gt;</span> {t.contact.title}
                    <span className="pill-cursor is-visible">_</span>
                </h2>

                <p className="contact-description">
                    {t.contact.description}
                </p>

                <p className="contact-invite">{t.contact.cta}</p>

                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <a
                        href={mailLink}
                        onMouseEnter={handleInteraction}
                        onFocus={handleInteraction}
                        onClick={handleInteraction}
                        className="btn-contact-icon"
                        aria-label={t.contact.emailAriaLabel}
                    >
                        <FaEnvelope />
                    </a>

                    <a
                        href="https://wa.link/pxm6md"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-contact-icon"
                        aria-label={t.contact.whatsappAriaLabel}
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;