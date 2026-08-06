"use client";

import React from 'react';
import LogoLoop, { LogoItem } from '@/components/LogoLoop/LogoLoop';
import { FaJava, FaPython, FaDocker, FaDatabase, FaLinux, FaChartBar, FaPhp } from 'react-icons/fa6';
import { SiSpringboot, SiPandas, SiPostgresql, SiMongodb } from 'react-icons/si';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection = () => {
    const { t } = useLanguage();

    const SKILLS_DATA = [
        { name: 'Java', icon: <FaJava /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'Php', icon: <FaPhp />},
        { name: 'Python', icon: <FaPython /> },
        { name: 'Pandas', icon: <SiPandas /> },
        { name: 'MS SQL', icon: <FaDatabase />},
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Power BI', icon: <FaChartBar /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Linux', icon: <FaLinux /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
    ];

    const logoItems: LogoItem[] = SKILLS_DATA.map(skill => ({
        title: skill.name,
        node: (
            <div className="skill-item" data-skill={skill.name.toLowerCase().replace(/\s+/g, '-')}>
                <div className="skill-icon">
                    {skill.icon}
                </div>
                <div className="skill-tooltip">
                    {skill.name}
                </div>
            </div>
        )
    }));

    return (
        <div className="w-full h-full flex flex-col justify-center">

            <div className="container mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-highlight-white mb-4">
                    {t.skills.title}
                </h2>

                <div className="w-12 h-1 bg-white mx-auto rounded-full"></div>
            </div>

            <div className="w-full group/track overflow-hidden">
                <LogoLoop
                    logos={logoItems}
                    direction="left"
                    speed={40}
                    logoHeight={80}
                    gap={80}
                    pauseOnHover={true}
                    fadeOut={true}
                    fadeOutColor="#474343"
                    className="py-24 [&_ul]:list-none [&_li]:list-none"
                />
            </div>
        </div>
    );
};

export default SkillsSection;