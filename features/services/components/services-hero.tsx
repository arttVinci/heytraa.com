"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FlickeringGrid } from "@/features/home/components/flickering-grid";
import { useLanguage } from "@/shared/context/language-context";
import { servicesData } from "../data/services-data";

export function ServicesHero() {
  const { lang } = useLanguage();
  const { hero } = servicesData;

  const handleOpenChat = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-assistant-chat"));
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#689F99]/20 dark:border-[#689F99]/20 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-7 md:p-8 shadow-xl shadow-[#2D3342]/5 dark:shadow-black/40 transition-colors duration-300">
      {/* Ambient Glow & Gradual Flickering Grid Background matching site theme */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft atmospheric gradient accents */}
        <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-gradient-to-br from-[#689F99]/20 via-[#689F99]/10 to-transparent dark:from-[#689F99]/15 dark:via-cyan-900/10 dark:to-transparent blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-tr from-[#689F99]/15 via-transparent to-transparent dark:from-[#2D3342]/30 dark:via-transparent to-transparent blur-2xl" />

        {/* Flickering Grid with progressive falloff */}
        <div
          className="absolute inset-0 opacity-40 dark:opacity-25"
          style={{
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.2) 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.2) 75%, transparent 100%)",
          }}
        >
          <FlickeringGrid
            squareSize={4}
            gridGap={8}
            flickerChance={0.25}
            color="rgb(104, 159, 153)"
            maxOpacity={0.4}
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* Eyebrow */}
        <p className="text-xs font-mono font-medium tracking-wider uppercase text-[#689F99] mb-3">
          {lang === "id"
            ? "Layanan & Solusi Rekayasa"
            : "Services & Engineering Solutions"}
        </p>

        {/* Main Headline - Balanced & proportional typography */}
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9] leading-snug">
          {hero.title[lang]}
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-xs sm:text-sm md:text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
          {hero.subtitle[lang]}
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={`/${lang}/contact`}
            className="group inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-[#1e293b] hover:bg-[#0f172a] dark:bg-[#f8fafc] dark:hover:bg-white text-white dark:text-[#0f172a] text-xs sm:text-sm font-semibold tracking-tight shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{hero.cta[lang]}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={handleOpenChat}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full border border-slate-200/80 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 hover:border-[#689F99]/60 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#689F99] dark:hover:text-[#689F99] transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#689F99]" />
            <span>{hero.secondaryCta[lang]}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
