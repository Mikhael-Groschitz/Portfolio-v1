"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import LanguageToggle from "@/components/Navbar/LanguageToggle";

export type PillNavItem = {
    label: string;
    href: string;
    ariaLabel?: string;
};

export interface PillNavProps {
    items: PillNavItem[];
    activeHref?: string;
    className?: string;
    onMobileMenuClick?: () => void;
}

const PillNav: React.FC<PillNavProps> = ({
                                             items,
                                             activeHref,
                                             className = '',
                                             onMobileMenuClick
                                         }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
    const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

    const activeIndex = items.findIndex(item => item.href === activeHref);
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

    useLayoutEffect(() => {
        const el = itemRefs.current[targetIndex];
        if (el) {
            setIndicator({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
        } else {
            setIndicator(prev => ({ ...prev, ready: false }));
        }
    }, [targetIndex, items]);

    const isRouterLink = (href: string) => !href.startsWith('http') && !href.startsWith('#');

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);
        onMobileMenuClick?.();
    };

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
        onMobileMenuClick?.();
    };

    return (
        <div className={`pill-nav-wrapper ${className}`}>
            <nav className="pill-nav-container" aria-label="Main Navigation">

                <div className="pill-nav-items">
                    <span
                        className="pill-nav-indicator"
                        style={{
                            transform: `translateX(${indicator.left}px)`,
                            width: indicator.width,
                            opacity: indicator.ready ? 1 : 0
                        }}
                        aria-hidden="true"
                    />
                    {items.map((item, i) => {
                        const isActive = item.href === activeHref;
                        const isHighlighted = i === targetIndex;

                        const content = (
                            <span className="pill-label">
                                {item.label}
                                <span className={`pill-cursor ${isHighlighted ? 'is-visible' : ''}`}>_</span>
                            </span>
                        );

                        const sharedProps = {
                            ref: (el: HTMLAnchorElement | null) => { itemRefs.current[i] = el; },
                            className: 'pill-nav-link',
                            onMouseEnter: () => setHoveredIndex(i),
                            onMouseLeave: () => setHoveredIndex(null),
                            'aria-current': isActive ? ('page' as const) : undefined,
                            'aria-label': item.ariaLabel || item.label,
                        };

                        return isRouterLink(item.href) ? (
                            <Link key={item.href} href={item.href} {...sharedProps}>
                                {content}
                            </Link>
                        ) : (
                            <a key={item.href} href={item.href} {...sharedProps}>
                                {content}
                            </a>
                        );
                    })}
                </div>

                <span className="pill-nav-divider" aria-hidden="true" />

                <div className="pill-nav-lang">
                    <LanguageToggle />
                </div>

                <button
                    className={`pill-nav-hamburger ${isMobileMenuOpen ? 'is-open' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
            </nav>

            <div className={`pill-mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
                {items.map((item, i) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="pill-mobile-link"
                        style={{ transitionDelay: `${i * 40}ms` }}
                        onClick={handleMobileLinkClick}
                    >
                        <span className="pill-mobile-index">{String(i + 1).padStart(2, '0')}</span>
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PillNav;