'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const CareerSection = () => {
    const { t } = useLanguage();

    return (
        <section className="timeline-section">
            <div className="text-center mb-12 px-4">
                <h2 className="career-heading">
                    <span className="career-prompt">&gt;</span> {t.career.title}
                    <span className="pill-cursor is-visible">_</span>
                </h2>
            </div>


            <div className="timeline-container">
                <div className="timeline-line"></div>

                {t.career.items.map((item, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px 0px 200px 0px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={`timeline-row ${isEven ? 'even' : ''}`}
                        >
                            <div className="timeline-dot"></div>

                            <div className="timeline-card">
                                <span className="timeline-period">{item.period}</span>
                                <h3 className="timeline-role">{item.role}</h3>
                                <h4 className="timeline-company">{item.company}</h4>
                                <p className="timeline-desc">{item.description}</p>
                            </div>

                            <div className="timeline-spacer"></div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default CareerSection;