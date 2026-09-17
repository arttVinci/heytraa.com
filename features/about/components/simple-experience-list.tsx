"use client";

import React, { useState } from "react";
import {
  Briefcase,
  ChevronDown,
  ChevronRight,
  Check,
  Lightbulb,
  Rocket,
  ClipboardList,
} from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";
import { simpleExperienceData } from "../data/about-data";

/**
 * Section 2: Karier / Pengalaman Kerja
 * Simple, clean card layout with expandable detail (Tugas, Pelajari, Dampak)
 * matching the site's typography, palette, and spacing.
 */
export function SimpleExperienceList() {
  const { lang } = useLanguage();
  // Keep the first item expanded by default
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "serta-kuliner": true,
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="space-y-4 sm:space-y-5">
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#689F99]" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {lang === "id" ? "Karier" : "Career"}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">
          {lang === "id"
            ? "Perjalanan profesional dan rekayasa saya."
            : "My professional engineering journey."}
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-4 sm:space-y-5">
        {simpleExperienceData.map((exp) => {
          const isExpanded = !!expandedItems[exp.id];

          return (
            <div
              key={exp.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-5 sm:p-7 shadow-2xs hover:border-[#689F99]/40 transition-colors duration-200"
            >
              {/* Card Header Top */}
              <div className="flex items-start gap-4">
                {/* Company Logo / Initials Box */}
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center font-mono font-bold text-sm text-[#2D3342] dark:text-[#F5F8F9] shrink-0 select-none shadow-2xs">
                  {exp.initials}
                </div>

                {/* Role, Company, Location & Metadata */}
                <div className="flex-1 min-w-0 space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-[#2D3342] dark:text-[#F5F8F9] tracking-tight">
                    {exp.role[lang]}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm sm:text-[15px] text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-[#2D3342] dark:text-slate-200">
                      {exp.company}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span>{exp.location}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 pt-0.5">
                    <span>{exp.period}</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span>{exp.duration[lang]}</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span className="text-[#689F99] font-medium">{exp.type[lang]}</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span>{exp.workMode[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Detail Toggle Button */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center">
                <button
                  type="button"
                  onClick={() => toggleExpand(exp.id)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors select-none py-0.5 cursor-pointer"
                >
                  {isExpanded ? (
                    <>
                      <ChevronDown className="w-4 h-4 text-[#689F99]" />
                      <span>{lang === "id" ? "Sembunyikan detail" : "Hide details"}</span>
                    </>
                  ) : (
                    <>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                      <span>{lang === "id" ? "Tampilkan detail" : "View details"}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Expandable Content (Tugas, Pelajari, Dampak) */}
              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-4 animate-in fade-in-50 duration-200">
                  {/* 1. TUGAS */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#689F99] dark:text-[#88C0B9]">
                      <ClipboardList className="w-4 h-4" />
                      <span>{lang === "id" ? "Tugas" : "Tasks & Responsibilities"}</span>
                    </div>
                    <ul className="space-y-2 pl-0.5">
                      {exp.tasks[lang].map((task, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                          <Check className="w-4 h-4 text-[#689F99] dark:text-[#88C0B9] shrink-0 mt-1 stroke-[2.5]" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 2-Column Grid: APA YANG SAYA PELAJARI & DAMPAK */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-1">
                    {/* APA YANG SAYA PELAJARI */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#689F99] dark:text-[#88C0B9]">
                        <Lightbulb className="w-4 h-4" />
                        <span>{lang === "id" ? "Apa yang saya pelajari" : "What I Learned"}</span>
                      </div>
                      <ul className="space-y-2 pl-0.5">
                        {exp.learned[lang].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed"
                          >
                            <Check className="w-4 h-4 text-[#689F99] dark:text-[#88C0B9] shrink-0 mt-1 stroke-[2.5]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* DAMPAK */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#689F99] dark:text-[#88C0B9]">
                        <Rocket className="w-4 h-4" />
                        <span>{lang === "id" ? "Dampak" : "Impact"}</span>
                      </div>
                      <ul className="space-y-2 pl-0.5">
                        {exp.impact[lang].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed"
                          >
                            <Check className="w-4 h-4 text-[#689F99] dark:text-[#88C0B9] shrink-0 mt-1 stroke-[2.5]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
