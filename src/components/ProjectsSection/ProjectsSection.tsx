"use client";

import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectsSection() {
    const { t } = useLanguage();

    const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

    const selectedProject = selectedProjectId !== null
        ? t.projects.items.find(p => p.id === selectedProjectId)
        : null;

    return (
        <section className="py-20">
            <div className="text-center mb-12 px-4">
                <h2 className="projects-heading">
                    <span className="projects-prompt">&gt;</span> {t.projects.title}
                    <span className="pill-cursor is-visible">_</span>
                </h2>
                <p className="projects-subtitle">{t.projects.subtitle}</p>
            </div>

            <div className="projects-center">
                {t.projects.items.map((project) => {
                    const categories = [project.category, project.category2, project.category3].filter(
                        (cat): cat is string => Boolean(cat)
                    );

                    return (
                        <article
                            key={project.id}
                            className="project"
                            onClick={() => setSelectedProjectId(project.id)}
                        >
                            <div className="project-chrome" aria-hidden="true">
                                <span className="project-dot" />
                                <span className="project-dot" />
                                <span className="project-dot" />
                            </div>

                            <div className="project-thumb">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-img"
                                />
                            </div>

                            <div className="project-body">
                                <h4 className="project-title">{project.title}</h4>

                                {categories.length > 0 && (
                                    <div className="project-tags">
                                        {categories.map((cat) => (
                                            <span key={cat} className="project-tag">{cat}</span>
                                        ))}
                                    </div>
                                )}

                                {project.techs && project.techs.length > 0 && (
                                    <div className="project-tags">
                                        {project.techs.map((tech) => (
                                            <span key={tech} className="project-tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                )}

                                <div className="link-container">
                                    <a
                                        href={project.repoLink}
                                        className="project-icon"
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        title="GitHub"
                                    >
                                        <FaGithub />
                                    </a>

                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            className="project-icon"
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            title="Live Demo"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                            onClick={() => setSelectedProjectId(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="project-modal relative w-full max-w-3xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] z-10"
                        >
                            <button
                                onClick={() => setSelectedProjectId(null)}
                                className="project-modal-close"
                                aria-label="Fechar"
                            >
                                <FaTimes />
                            </button>

                            <div className="w-full md:w-2/5 h-48 md:h-auto relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full md:w-3/5 p-8 flex flex-col overflow-y-auto">
                                <span className="project-modal-category">{selectedProject.category}</span>
                                <h3 className="project-modal-title">{selectedProject.title}</h3>
                                <p className="project-modal-desc">{selectedProject.description}</p>

                                <div className="mb-6">
                                    <h4 className="project-modal-techs-label">{t.projects.techStack}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techs.map((tech) => (
                                            <span key={tech} className="project-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-modal-footer">
                                    <a
                                        href={selectedProject.repoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-modal-github"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}