"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  ChevronDown,
  ChevronRight,
  Check,
  BookOpen,
} from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";
import { simpleEducationData } from "../data/about-data";

/**
 * Section 3: Pendidikan (Education)
 * Clean, minimalistic cards matching user's visual reference with expandable learning pillars.
 */
export function SimpleEducationList() {
  const { lang } = useLanguage();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    "univ-terbuka": true,
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
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[#689F99]" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {lang === "id" ? "Pendidikan" : "Education"}
          </h2>
        </div>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 mt-1">
          {lang === "id"
            ? "Perjalanan pendidikan dan fondasi akademis saya."
            : "My educational journey and academic foundations."}
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-3.5 sm:space-y-4">
        {simpleEducationData.map((edu) => {
          const isExpanded = !!expandedItems[edu.id];

          return (
            <div
              key={edu.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 shadow-2xs hover:border-[#689F99]/40 transition-colors duration-200"
            >
              {/* Header */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* School Emblem / Initial Box */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-[#2D3342] dark:text-[#F5F8F9] shrink-0 select-none shadow-2xs">
                  {edu.initials}
                </div>

                {/* Degree Info */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#2D3342] dark:text-[#F5F8F9] tracking-tight">
                    {edu.institution}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-[#2D3342] dark:text-slate-200">
                      {edu.degree[lang]}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span>{edu.field[lang]}</span>
                    {edu.gpaOrScore && (
                      <>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span className="font-mono text-[#689F99] dark:text-[#88C0B9] font-medium">
                          {lang === "id" ? `Skor / IPK: ${edu.gpaOrScore}` : `Score / GPA: ${edu.gpaOrScore}`}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 pt-0.5">
                    <span>{edu.period}</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span>{edu.location}</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span className="text-[#689F99] font-medium">{edu.status[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Detail Toggle Button */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center">
                <button
                  type="button"
                  onClick={() => toggleExpand(edu.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors select-none py-0.5 cursor-pointer"
                >
                  {isExpanded ? (
                    <>
                      <ChevronDown className="w-3.5 h-3.5 text-[#689F99]" />
                      <span>{lang === "id" ? "Sembunyikan detail" : "Hide details"}</span>
                    </>
                  ) : (
                    <>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      <span>{lang === "id" ? "Tampilkan detail" : "View details"}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Expandable Content (Learning Pillars) */}
              {isExpanded && (
                <div className="mt-3.5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 space-y-3 animate-in fade-in-50 duration-200">
                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {edu.description[lang]}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#689F99] dark:text-[#88C0B9] pt-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{lang === "id" ? "Fokus Keilmuan" : "Core Academic Pillars"}</span>
                    </div>
                    <ul className="space-y-1.5 pl-0.5">
                      {edu.highlights[lang].map((area, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed"
                        >
                          <Check className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5 stroke-[2]" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
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
