"use client";

import React from 'react';
import ClickSpark from '@/components/ClickSpark/ClickSpark';
import PillNav from '@/components/Navbar/PillNav';
import Hero from '@/components/HeroSection/Hero';
import About from '@/components/AboutSection/About';
import SkillsSection from '@/components/Skills/Skills';
import CareerSection from '@/components/CareerSection/CareerSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import Footer from '@/components/Footer/Footer';
import {useLanguage} from "@/contexts/LanguageContext";

export default function Home() {
    const { t } = useLanguage();

    const navItems = [
        { label: t.nav.home, href: '#home' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.skills, href: '#skills' },
        { label: t.nav.career, href: '#career' },
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.contact, href: '#contact' },
    ];

    return (
        <ClickSpark
            sparkColor='#ffffff'
            sparkSize={10}
            sparkRadius={20}
            sparkCount={8}
            duration={400}
        >
            <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-white">

                <PillNav
                    items={navItems}
                />

                <main>
                    {/* HERO */}
                    <section id="home" className="h-screen w-full bg-black text-white">
                        <Hero />
                    </section>

                    {/* ABOUT */}
                    <section id="about" className="min-h-[40vh] w-full bg-[#1c1c1c] text-black py-24 flex items-center">
                        <About />
                    </section>

                    {/* SKILLS */}
                    <section id="skills" className="min-h-[40vh] w-full bg-[#181818] text-white py-24 flex items-center">
                        <SkillsSection />
                    </section>

                    {/* Career */}
                    <section id="career" className="min-h-[40vh] w-full bg-[#09090b] text-black py-24 flex items-center">
                        <CareerSection />
                    </section>

                    {/* PROJECTS */}
                    <section
                        id="projects"
                        className="min-h-screen w-full bg-[#1c1c1c] text-black py-24 flex flex-col justify-center"
                    >
                        <ProjectsSection />
                    </section>

                    {/* CONTACT */}
                    <section id="contact" className="w-full bg-[#181818] text-white py-24 flex items-center">
                        <ContactSection />
                    </section>
                </main>

                <Footer />

            </div>
        </ClickSpark>
    );
}