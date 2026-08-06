"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SiteProtection() {
    const { t } = useLanguage();

    useEffect(() => {
        console.clear();

        console.log(
            `%c${t.console.fanfare} https://www.youtube.com/watch?v=rgUksX6eM0Y`,
            "color: #ffd1dc; font-size: 12px; font-style: italic; padding-top: 5px;"
        );

        console.log(
            `%c${t.console.secret}`,
            "color: #22d3ee; font-size: 20px; font-weight: bold; padding: 10px;"
        );

        console.log(
            `%c${t.console.contact}`,
            "color: #ffffff; font-size: 14px; background: #2c253d; padding: 5px; border-radius: 4px;"
        );

    }, [t]);


    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "F12") {
                e.preventDefault();
            }
            if (e.ctrlKey && e.shiftKey && e.key === "I") {
                e.preventDefault();
            }
            if (e.ctrlKey && e.shiftKey && e.key === "J") {
                e.preventDefault();
            }
            if (e.ctrlKey && e.key === "u") {
                e.preventDefault();
            }
            if (e.ctrlKey && e.key === "s") {
                e.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    return null;
}