"use client";

import React from "react";
import { cn } from "@/shared/lib/utils";
import { useLanguage } from "@/shared/context/language-context";
import {
  typeFilterOptions,
  categoryFilterOptions,
  type ProjectType,
  type ProjectCategoryType,
} from "../data/projects-data";

interface ProjectFiltersProps {
  activeType: ProjectType;
  onSelectType: (type: ProjectType) => void;
  activeCategory: ProjectCategoryType;
  onSelectCategory: (cat: ProjectCategoryType) => void;
}

/**
 * ProjectFilters (Source Inspiration: ReUI Stepped Filter Controls)
 * Clean, minimalistic two-row pill filter for Type and Category.
 */
export function ProjectFilters({
  activeType,
  onSelectType,
  activeCategory,
  onSelectCategory,
}: ProjectFiltersProps) {
  const { lang } = useLanguage();

  return (
    <div className="space-y-3 select-none">
      {/* Row 1: TIPE */}
      <div className="flex items-center gap-2.5 flex-wrap">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 w-20 shrink-0">
          {lang === "id" ? "Tipe" : "Type"}
        </span>

        <div className="flex items-center gap-1.5 flex-wrap">
          {typeFilterOptions.map((opt) => {
            const isActive = activeType === opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSelectType(opt.id as ProjectType)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer",
                  isActive
                    ? "bg-[#689F99] text-white shadow-xs font-semibold ring-1 ring-[#689F99]"
                    : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80"
                )}
              >
                {opt.label[lang]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 2: KATEGORI */}
      <div className="flex items-center gap-2.5 flex-wrap">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 w-20 shrink-0">
          {lang === "id" ? "Kategori" : "Category"}
        </span>

        <div className="flex items-center gap-1.5 flex-wrap">
          {categoryFilterOptions.map((opt) => {
            const isActive = activeCategory === opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSelectCategory(opt.id as ProjectCategoryType)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer",
                  isActive
                    ? "bg-[#689F99] text-white shadow-xs font-semibold ring-1 ring-[#689F99]"
                    : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80"
                )}
              >
                {opt.label[lang]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
