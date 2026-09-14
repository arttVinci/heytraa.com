"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, FileDown } from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";
import { cn } from "@/shared/lib/utils";

export function SidebarControls() {
  const { lang, setLang } = useLanguage();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(hasDarkClass);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }
  };

  return (
    <div className="flex items-center justify-center w-full mt-2">
      {/* Control Strip: Language, Theme & Download CV */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 rounded-xl backdrop-blur-xs shadow-xs transition-colors">
        {/* Language Segmented Toggle */}
        <div className="flex items-center bg-white dark:bg-slate-900/90 p-0.5 rounded-lg border border-slate-200/60 dark:border-slate-700/50 shadow-2xs">
          <button
            type="button"
            onClick={() => setLang("en")}
            className={cn(
              "px-2 py-0.5 rounded-md text-[10.5px] font-mono font-semibold transition-all duration-150 active:scale-95",
              lang === "en"
                ? "bg-[#689F99] text-white shadow-xs"
                : "text-slate-500 dark:text-slate-400 hover:text-[#689F99] dark:hover:text-[#88C0B9]"
            )}
            title="English"
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("id")}
            className={cn(
              "px-2 py-0.5 rounded-md text-[10.5px] font-mono font-semibold transition-all duration-150 active:scale-95",
              lang === "id"
                ? "bg-[#689F99] text-white shadow-xs"
                : "text-slate-500 dark:text-slate-400 hover:text-[#689F99] dark:hover:text-[#88C0B9]"
            )}
            title="Bahasa Indonesia"
          >
            ID
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-3.5 bg-slate-200 dark:bg-slate-700 mx-0.5" />

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Mode Terang (Light)" : "Mode Gelap (Dark)"}
          className="p-1.5 rounded-lg text-slate-500 dark:text-slate-300 hover:text-[#689F99] dark:hover:text-[#88C0B9] hover:bg-white dark:hover:bg-slate-900/90 transition-all duration-200 active:scale-90"
        >
          {mounted && isDark ? (
            <Sun className="w-3.5 h-3.5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-slate-600 transition-transform duration-300 hover:-rotate-12" />
          )}
        </button>

        {/* Divider */}
        <div className="w-px h-3.5 bg-slate-200 dark:bg-slate-700 mx-0.5" />

        {/* Unduh CV / Resume */}
        <a
          href="/cv.pdf"
          download="CV-Putra-Rizky-Nugraha.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={lang === "id" ? "Unduh CV" : "Download Resume"}
          title={lang === "id" ? "Unduh CV" : "Download Resume"}
          className="px-2 py-1 rounded-lg text-slate-600 dark:text-slate-300 hover:text-[#689F99] dark:hover:text-[#88C0B9] hover:bg-white dark:hover:bg-slate-900/90 transition-all duration-200 active:scale-95 flex items-center gap-1.5 text-[11px] font-medium"
        >
          <FileDown className="w-3.5 h-3.5 text-[#689F99]" />
          <span className="leading-none">{lang === "id" ? "Unduh CV" : "Resume"}</span>
        </a>
      </div>
    </div>
  );
}
