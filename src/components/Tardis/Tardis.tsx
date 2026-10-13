"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

const V2_URL = "https://mgroschitz.dev";
const DEMATERIALIZE_MS = 1400;

const SIDES = ["front", "right", "back", "left"] as const;
const DOOR_X = [8, 33];
const PANEL_Y = [36, 56, 76];
const PANES = [0, 6, 12].flatMap((dx) => [0, 6.5].map((dy) => ({ dx, dy })));

function TardisFace({ front }: { front: boolean }) {
    return (
        <svg viewBox="0 0 60 104" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <rect width="60" height="104" fill="#1a447f" />
            <rect width="5" height="104" fill="#10305c" />
            <rect x="55" width="5" height="104" fill="#10305c" />
            <rect x="5" y="2" width="50" height="11" fill="#0b0d12" />
            <text
                x="30"
                y="9.7"
                textAnchor="middle"
                fontSize="6"
                fontWeight="700"
                letterSpacing="0.3"
                fontFamily="Arial, Helvetica, sans-serif"
                fill="#f5f5f5"
            >
                POLICE BOX
            </text>
            <rect x="5" y="13" width="50" height="2" fill="#10305c" />
            <rect x="29" y="15" width="2" height="85" fill="#10305c" />
            {DOOR_X.map((x) => (
                <g key={x}>
                    <rect x={x} y="18" width="19" height="14" fill="#10305c" />
                    {PANES.map(({ dx, dy }) => (
                        <rect
                            key={`${dx}-${dy}`}
                            className="tardis-pane"
                            x={x + 1 + dx}
                            y={19 + dy}
                            width="5"
                            height="5.5"
                        />
                    ))}
                    {PANEL_Y.map((y) => (
                        <rect key={y} x={x} y={y} width="19" height="17" fill="#163b70" stroke="#0e2a52" strokeWidth="1" />
                    ))}
                </g>
            ))}
            {front && (
                <g>
                    <rect x="10.5" y="38.5" width="14" height="12" fill="#f1f1f1" />
                    <rect x="12.5" y="41" width="10" height="0.9" fill="#8c96a6" />
                    <rect x="12.5" y="43.6" width="10" height="0.9" fill="#8c96a6" />
                    <rect x="12.5" y="46.2" width="7" height="0.9" fill="#8c96a6" />
                    <rect x="34.2" y="60" width="1.4" height="6" rx="0.7" fill="#c7ced8" />
                </g>
            )}
            <rect y="100" width="60" height="4" fill="#0c2546" />
        </svg>
    );
}

export default function Tardis() {
    const { t } = useLanguage();
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        const handlePageShow = (e: PageTransitionEvent) => {
            if (e.persisted) setLeaving(false);
        };

        window.addEventListener("pageshow", handlePageShow);
        return () => window.removeEventListener("pageshow", handlePageShow);
    }, []);

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        e.preventDefault();
        if (leaving) return;

        setLeaving(true);
        setTimeout(() => window.location.assign(V2_URL), DEMATERIALIZE_MS);
    };

    return (
        <a
            href={V2_URL}
            className={`tardis-link ${leaving ? 'is-leaving' : ''}`}
            aria-label={t.tardis.label}
            onClick={handleClick}
        >
            <span className="tardis-shadow" aria-hidden="true" />
            <span className="tardis-float" aria-hidden="true">
                <span className="tardis-scene">
                    <span className="tardis-model">
                        {SIDES.map((side) => (
                            <span key={side} className={`tardis-face is-${side}`}>
                                <TardisFace front={side === "front"} />
                            </span>
                        ))}
                        <span className="tardis-cap" />
                        {SIDES.map((side) => (
                            <span key={side} className={`tardis-roof is-${side}`} />
                        ))}
                        <span className="tardis-roof-cap" />
                        <span className="tardis-lamp" />
                        <span className="tardis-lamp is-cross" />
                    </span>
                </span>
                <span className="tardis-glow" />
            </span>
            <span className="tardis-label" aria-hidden="true">
                <span className="tardis-prompt">&gt;</span> {t.tardis.label}
                <span className="pill-cursor is-visible">_</span>
            </span>
            <span className="tardis-badge" aria-hidden="true">
                <span className="tardis-prompt">&gt;</span> v2
                <span className="pill-cursor is-visible">_</span>
            </span>
        </a>
    );
}
