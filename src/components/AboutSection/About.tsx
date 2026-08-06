"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section className="about-section-container">
            <div className="w-full max-w-6xl mx-auto px-6 md:px-10 flex justify-center items-center">

                <div className="about-window">
                    <div className="about-window-header">
                        <div className="window-dot dot-red"></div>
                        <div className="window-dot dot-yellow"></div>
                        <div className="window-dot dot-green"></div>
                    </div>

                    <div className="about-content-wrapper">

                        <div className="about-col-photo">
                            <div className="about-photo-frame">
                                <div className="relative w-[240px] h-[280px] bg-[#fdfdfd]">
                                    <Image
                                        src="/mikhael-profile.jpg"
                                        alt="Mikhael"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        priority
                                    />
                                </div>
                                <div className="text-center py-3 text-[#999] text-[11px] font-mono">
                                    Mikhael, 2026
                                </div>
                            </div>
                        </div>

                        <div className="about-col-text">
                            <h2 className="text-2xl font-bold mb-5 border-b-2 border-[#f0d0d9]">
                                system.out.print("{t.about.title}");
                            </h2>

                            <div className="text-[15px] leading-relaxed">
                                <p className="mb-4">
                                    {t.about.desc1_start}
                                    <span className="about-highlight">{t.about.desc1_highlight}</span>
                                    {t.about.desc1_end}
                                </p>

                                <p className="mb-4">
                                    {t.about.desc2_start}
                                    <strong className="about-highlight font-bold">{t.about.desc2_highlight}</strong>
                                    {t.about.desc2_end}
                                </p>

                                <p className="mb-8">
                                    {t.about.desc3_start}
                                    <strong className="about-highlight font-bold">{t.about.desc3_highlight}</strong>
                                    {t.about.desc3_end}
                                </p>

                                <div className="border-t border-black/10 pt-5">
                                    <h3 className="font-bold text-sm mb-2 text-[#666]">{t.about.subtitle}</h3>

                                    <ul className="list-none p-0 text-[13px] space-y-1.5">
                                        <li>• <strong>{t.about.trait1_title}</strong> {t.about.trait1_desc}</li>
                                        <li>• <strong>{t.about.trait2_title}</strong> {t.about.trait2_desc}</li>
                                        <li>• <strong>{t.about.trait3_title}</strong> {t.about.trait3_desc}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;