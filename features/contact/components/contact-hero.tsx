"use client";

import React from "react";
import { Sparkles, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { FlickeringGrid } from "@/features/home/components/flickering-grid";
import { useLanguage } from "@/shared/context/language-context";
import { contactData } from "../data/contact-data";

export function ContactHero() {
  const { lang } = useLanguage();
  const { hero, directInfo } = contactData;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#689F99]/20 dark:border-[#689F99]/20 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-7 md:p-8 shadow-xl shadow-[#2D3342]/5 dark:shadow-black/40 transition-colors duration-300">
      {/* Ambient Atmospheric Glow & Flickering Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-gradient-to-br from-[#689F99]/20 via-[#689F99]/10 to-transparent dark:from-[#689F99]/15 dark:via-cyan-900/10 dark:to-transparent blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-tr from-[#689F99]/15 via-transparent to-transparent dark:from-[#2D3342]/30 dark:via-transparent to-transparent blur-2xl" />

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

      <div className="relative z-10 max-w-3xl space-y-4">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#689F99]/10 text-[#689F99] border border-[#689F99]/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{hero.eyebrow[lang]}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9] leading-snug">
          {hero.title[lang]}
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
          {hero.subtitle[lang]}
        </p>

        {/* Quick Highlights / Availability Pills */}
        <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-200/80 dark:border-emerald-900/50 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{directInfo.availability[lang]}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#689F99]" />
            <span>{directInfo.location[lang]}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#689F99]" />
            <span>{directInfo.timezone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
