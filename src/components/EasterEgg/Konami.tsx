"use client";

import { useEffect, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
];

export default function Konami() {
    const { t } = useLanguage(); // <-- 2. Puxa o dicionário
    const [input, setInput] = useState<string[]>([]);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const newInput = [...input, e.key];

            if (newInput.length > KONAMI_CODE.length) {
                newInput.shift();
            }

            setInput(newInput);

            if (JSON.stringify(newInput) === JSON.stringify(KONAMI_CODE)) {
                triggerEasterEgg();
                setInput([]);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [input]);

    const triggerEasterEgg = () => {
        setActive(true);
    };

    if (!active) return null;

    return (
        // Overlay
        <div className="konami-overlay">
            <div
                className="konami-card"
                onClick={(e) => e.stopPropagation()}
            >

                <img
                    src="/EasterEgg.png"
                    alt="What is a man?"
                    className="konami-image"
                />

                <h2 className="konami-title">
                    {t.easterEgg.title}
                </h2>

                <p className="konami-text">
                    {t.easterEgg.text}
                </p>

                <button
                    onClick={() => setActive(false)}
                    className="konami-btn"
                >
                    {t.easterEgg.button}
                </button>
            </div>
        </div>
    );
}