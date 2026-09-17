"use client";

import React from "react";
import { useLanguage } from "@/shared/context/language-context";

interface StepItem {
  number: string;
  title: {
    id: string;
    en: string;
  };
  desc: {
    id: string;
    en: string;
  };
}

const steps: StepItem[] = [
  {
    number: "01",
    title: {
      id: "Penemuan & Tolok Ukur",
      en: "Discovery & Success",
    },
    desc: {
      id: "Tujuan, kendala teknis (skala, latensi, budget), dan kriteria sukses terukur.",
      en: "Goals, technical constraints (scale, latency, budget), and measurable criteria.",
    },
  },
  {
    number: "02",
    title: {
      id: "PRD & Desain Sistem",
      en: "PRD & System Specs",
    },
    desc: {
      id: "PRD, SDD, rancangan schema database / ERD, dan kontrak API type-safe.",
      en: "PRD, SDD, database schema / ERD design, and type-safe API contracts.",
    },
  },
  {
    number: "03",
    title: {
      id: "Membangun & Pengujian",
      en: "Build & Verification",
    },
    desc: {
      id: "Clean architecture, kode modular berkonkurensi aman, dan automated testing.",
      en: "Clean architecture, safe concurrent modular code, and automated testing.",
    },
  },
  {
    number: "04",
    title: {
      id: "Serah Terima & Rilis",
      en: "Handover & Telemetry",
    },
    desc: {
      id: "Deployment zero-downtime, dokumentasi serah terima, dan observabilitas log.",
      en: "Zero-downtime deployment, handover documentation, and log observability.",
    },
  },
];

export function HowIWorkSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="how-i-work"
      className="relative py-4 sm:py-6 px-1 space-y-8 transition-colors duration-300"
    >
      {/* Header */}
      <div className="border-b border-slate-200/80 dark:border-slate-800/80 pb-5">
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {lang === "id" ? "Bagaimana Saya Bekerja" : "How I Work"}
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {lang === "id"
              ? "Alur terstruktur dari perumusan masalah hingga sistem produksi."
              : "Structured flow from problem framing to production system."}
          </p>
        </div>
      </div>

      {/* Connected Pipeline Nodes */}
      <div className="relative pt-2">
        {/* Subtle Horizontal Connector Laser Track (Desktop) */}
        <div className="hidden lg:block absolute top-[27px] left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#689F99]/35 to-transparent pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col items-start transition-all duration-300"
            >
              {/* Connected Step Node */}
              <div className="relative mb-4">
                <div className="w-11 h-11 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center font-mono text-sm font-bold text-[#689F99] group-hover:border-[#689F99] group-hover:shadow-[0_0_20px_rgba(104,159,153,0.35)] group-hover:scale-105 transition-all duration-300 shadow-2xs">
                  {step.number}
                </div>
              </div>

              {/* Step Details */}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-[#2D3342] dark:text-[#F5F8F9] group-hover:text-[#689F99] transition-colors duration-200">
                  {step.title[lang]}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
