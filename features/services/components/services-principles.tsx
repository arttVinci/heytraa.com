"use client";

import React from "react";
import { ShieldCheck, Zap, LayoutGrid, Clock } from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";
import { servicesData, ServicePrinciple } from "../data/services-data";

const iconMap = {
  ShieldCheck,
  Zap,
  LayoutGrid,
  Clock,
};

export function ServicesPrinciples() {
  const { lang } = useLanguage();
  const { principles } = servicesData;

  return (
    <section className="py-6 sm:py-8 border-t border-slate-200/70 dark:border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Heading & Context */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-2.5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {principles.title[lang]}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
            {principles.description[lang]}
          </p>
        </div>

        {/* Right Area: 2x2 Bento Grid */}
        <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {principles.items.map((item: ServicePrinciple) => {
            const IconComponent = iconMap[item.iconName];

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-6 shadow-2xs transition-all duration-200 hover:border-[#689F99]/60 hover:shadow-sm"
              >
                {/* Small Icon Badge */}
                <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 mb-3.5 group-hover:text-[#689F99] group-hover:scale-105 transition-all">
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Card Title */}
                <h3 className="text-sm sm:text-base font-bold text-[#2D3342] dark:text-[#F5F8F9] tracking-tight mb-2">
                  {item.title[lang]}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
