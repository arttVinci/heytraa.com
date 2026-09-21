"use client";

import React from "react";
import { Layout, Server, Sparkles } from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";
import { servicesData, ServicePillar } from "../data/services-data";

const iconMap = {
  Layout,
  Server,
  Sparkles,
};

export function ServicesPillars() {
  const { lang } = useLanguage();
  const { capabilities } = servicesData;

  return (
    <section className="py-6 sm:py-8 border-t border-slate-200/70 dark:border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Heading & Detailed Narrative */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {capabilities.title[lang]}
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
            <p>{capabilities.description1[lang]}</p>
            <p>{capabilities.description2[lang]}</p>
          </div>
        </div>

        {/* Right Area: 3 Pillar Columns (Pill Tab + Content Box) */}
        <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 [grid-auto-rows:1fr]">
          {capabilities.pillars.map((pillar: ServicePillar) => {
            const IconComponent = iconMap[pillar.iconName];

            return (
              <div key={pillar.id} className="flex flex-col gap-3.5 h-full">
                {/* Header Pill / Tab */}
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 px-4 py-3.5 flex items-center gap-2.5 shadow-2xs shrink-0 transition-colors duration-200 hover:border-[#689F99]/60">
                  <IconComponent className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0" />
                  <span className="text-sm font-semibold text-[#2D3342] dark:text-[#F5F8F9] tracking-tight">
                    {pillar.title[lang]}
                  </span>
                </div>

                {/* Content Box */}
                <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-6 shadow-2xs flex-1 flex flex-col justify-start transition-colors duration-200 hover:border-[#689F99]/40">
                  <ul className="space-y-3.5">
                    {pillar.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-normal"
                      >
                        {item[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
