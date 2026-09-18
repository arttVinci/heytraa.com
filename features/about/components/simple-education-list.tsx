"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  ChevronDown,
  Check,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/shared/lib/utils";
import { useLanguage } from "@/shared/context/language-context";
import { simpleEducationData } from "../data/about-data";

/**
 * Section 3: Pendidikan (Education)
 * Clean, minimalistic cards matching user's visual reference with expandable learning pillars
 * and buttery smooth accordion expansion.
 */
export function SimpleEducationList() {
  const { lang } = useLanguage();
  // All items collapsed by default
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

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
          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#689F99]" />
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {lang === "id" ? "Pendidikan" : "Education"}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">
          {lang === "id"
            ? "Perjalanan pendidikan dan fondasi akademis saya."
            : "My educational journey and academic foundations."}
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-4 sm:space-y-5 max-w-3xl">
        {simpleEducationData.map((edu) => {
          const isExpanded = !!expandedItems[edu.id];

          return (
            <div
              key={edu.id}
              className={cn(
                "rounded-2xl border bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-300",
                isExpanded
                  ? "border-[#689F99]/40 dark:border-[#689F99]/30 shadow-xs ring-1 ring-[#689F99]/10"
                  : "border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-[#689F99]/30"
              )}
            >
              {/* Header */}
              <div className="flex items-start gap-3">
                {/* School Emblem / Initial Box */}
                <div
                  className={cn(
                    "w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center font-mono font-bold text-xs shrink-0 select-none shadow-2xs overflow-hidden",
                    edu.logo
                      ? "bg-white p-1"
                      : "bg-slate-100 dark:bg-slate-800/90 text-[#2D3342] dark:text-[#F5F8F9]"
                  )}
                >
                  {edu.logo ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        fill
                        sizes="44px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    edu.initials
                  )}
                </div>

                {/* Degree Info */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="text-sm sm:text-base font-medium text-[#2D3342] dark:text-[#F5F8F9] tracking-tight">
                    {edu.institution}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm sm:text-[15px] text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-[#2D3342] dark:text-slate-200">
                      {edu.degree[lang]}
                    </span>
                    <span className="text-slate-300 dark:text-slate-600">
                      •
                    </span>
                    <span>{edu.field[lang]}</span>
                    {edu.gpaOrScore && (
                      <>
                        <span className="text-slate-300 dark:text-slate-600">
                          •
                        </span>
                        <span className="font-mono text-[#689F99] dark:text-[#88C0B9] font-medium">
                          {lang === "id"
                            ? `Skor / IPK: ${edu.gpaOrScore}`
                            : `Score / GPA: ${edu.gpaOrScore}`}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 pt-0.5">
                    <span>{edu.period}</span>
                    <span className="text-slate-300 dark:text-slate-600">
                      •
                    </span>
                    <span>{edu.location}</span>
                    <span className="text-slate-300 dark:text-slate-600">
                      •
                    </span>
                    <span className="text-[#689F99] font-medium">
                      {edu.status[lang]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Detail Toggle Button */}
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleExpand(edu.id)}
                  aria-expanded={isExpanded}
                  className="group inline-flex items-center gap-2 px-2.5 py-1 -ml-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-[#689F99] dark:hover:text-[#689F99] hover:bg-[#689F99]/5 dark:hover:bg-[#689F99]/10 transition-all select-none cursor-pointer"
                >
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                    className="inline-flex items-center justify-center text-[#689F99]"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                  <span>
                    {isExpanded
                      ? lang === "id"
                        ? "Sembunyikan detail"
                        : "Hide details"
                      : lang === "id"
                        ? "Tampilkan detail"
                        : "View details"}
                  </span>
                </button>
              </div>

              {/* Expandable Content (Learning Pillars) */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key={`edu-content-${edu.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.38, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.25, delay: 0.08, ease: "easeOut" },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.28, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.18, ease: "easeIn" },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-3.5">
                      <motion.p
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        {edu.description[lang]}
                      </motion.p>

                      <motion.div
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.16 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-mono font-semibold uppercase tracking-wider text-[#689F99] dark:text-[#88C0B9] pt-1">
                          <BookOpen className="w-4 h-4" />
                          <span>
                            {lang === "id"
                              ? "Fokus Keilmuan"
                              : "Core Academic Pillars"}
                          </span>
                        </div>
                        <ul className="space-y-2 pl-0.5">
                          {edu.highlights[lang].map((area, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed"
                            >
                              <Check className="w-4 h-4 text-[#689F99] dark:text-[#88C0B9] shrink-0 mt-1 stroke-[2.5]" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
