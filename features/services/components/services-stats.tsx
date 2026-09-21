"use client";

import React from "react";
import { useLanguage } from "@/shared/context/language-context";
import { servicesData, ServiceStat } from "../data/services-data";

export function ServicesStats() {
  const { lang } = useLanguage();
  const { stats } = servicesData;

  return (
    <section className="py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((stat: ServiceStat) => (
          <div
            key={stat.id}
            className="group rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-6 shadow-2xs transition-all duration-200 hover:border-[#689F99]/60 hover:shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="text-lg sm:text-xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9] group-hover:text-[#689F99] transition-colors">
                {stat.value}
              </div>
              <div className="text-[11px] font-mono font-medium text-[#689F99] mt-1 tracking-tight">
                {stat.label[lang]}
              </div>
              <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed mt-2.5">
                {stat.description[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
