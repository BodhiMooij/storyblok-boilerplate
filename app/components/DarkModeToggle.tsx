"use client";

import { useEffect, useState } from "react";

function SunIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 12H4M12 3V4M20 12H21M12 20V21M5.6 5.6L6.3 6.3M18.4 5.6L17.7 6.3M17.7 17.7L18.4 18.4M6.3 17.7L5.6 18.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C12.132 3 12.263 3 12.393 3C11.1083 4.19371 10.2826 5.79985 10.0593 7.53923C9.83598 9.2786 10.2293 11.0412 11.1707 12.5207C12.1122 14.0002 13.5424 15.103 15.2126 15.6375C16.8828 16.1719 18.6875 16.1042 20.313 15.446C19.6877 16.9505 18.6658 18.257 17.3562 19.2263C16.0466 20.1955 14.4984 20.791 12.8769 20.9494C11.2554 21.1077 9.62126 20.823 8.14888 20.1254C6.67651 19.4279 5.42111 18.3437 4.51658 16.9886C3.61206 15.6335 3.09235 14.0583 3.01288 12.431C2.93341 10.8037 3.29718 9.1853 4.06537 7.74852C4.83356 6.31174 5.97736 5.11043 7.37476 4.27274C8.77216 3.43505 10.3707 2.9924 12 2.992V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Default is dark, only light if explicitly set or system prefers light
        const isLightMode =
            document.documentElement.classList.contains("light") ||
            (!document.documentElement.classList.contains("dark") &&
                window.matchMedia("(prefers-color-scheme: light)").matches);
        setIsDark(!isLightMode);
    }, []);

    const toggleDarkMode = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    };

    if (!mounted) {
        return (
            <button className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20" />
        );
    }

    return (
        <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 flex items-center justify-center text-foreground shadow-lg shadow-primary/10"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}
