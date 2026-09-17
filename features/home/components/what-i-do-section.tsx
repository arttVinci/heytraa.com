"use client";

import React from "react";
import { Package, Monitor, Server } from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";

interface ServiceCard {
  id: string;
  title: {
    id: string;
    en: string;
  };
  icon: React.ElementType;
  items: {
    id: string;
    en: string;
  }[];
}

const serviceCards: ServiceCard[] = [
  {
    id: "products",
    title: {
      id: "Produk Mandiri",
      en: "Core Products",
    },
    icon: Package,
    items: [
      {
        id: "Fixora",
        en: "Fixora",
      },
      {
        id: "Portofy.net",
        en: "Portofy.net",
      },
    ],
  },
  {
    id: "web-dev",
    title: {
      id: "Web Development",
      en: "Web Development",
    },
    icon: Monitor,
    items: [
      {
        id: "Web Apps & SaaS",
        en: "Web Apps & SaaS",
      },
      {
        id: "Interactive Dashboards",
        en: "Interactive Dashboards",
      },
      {
        id: "Modern Landing Pages",
        en: "Modern Landing Pages",
      },
      {
        id: "Next.js & TypeScript UI",
        en: "Next.js & TypeScript UI",
      },
    ],
  },
  {
    id: "backend-solutions",
    title: {
      id: "Backend & Solutions",
      en: "Backend & Solutions",
    },
    icon: Server,
    items: [
      {
        id: "Golang Fiber REST APIs",
        en: "Golang Fiber REST APIs",
      },
      {
        id: "Database & ERD Design",
        en: "Database & ERD Design",
      },
      {
        id: "Tugas Kuliah Pemrograman",
        en: "College Coursework & Tasks",
      },
      {
        id: "Bug Fixing & Troubleshooting",
        en: "Bug Fixing & Troubleshooting",
      },
    ],
  },
];

export function WhatIDoSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="what-i-do"
      className="relative py-6 sm:py-8 px-1 transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Clean Title & Subtitle */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-2.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {lang === "id" ? "Apa yang saya lakukan" : "What I do"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
            {lang === "id"
              ? "Membangun sistem full-stack yang scalable, aman, dan mudah dirawat."
              : "Building scalable, secure, and maintainable full-stack systems."}
          </p>
        </div>

        {/* Right Area: 3 Clean Minimalist Columns */}
        <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 [grid-auto-rows:1fr]">
          {serviceCards.map((card) => (
            <div key={card.id} className="flex flex-col gap-3.5 h-full">
              {/* Top Header Pill / Tab */}
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 px-4 py-3.5 flex items-center gap-2.5 shadow-2xs shrink-0">
                <card.icon className="w-4 h-4 text-slate-700 dark:text-slate-300 shrink-0" />
                <span className="text-sm font-semibold text-[#2D3342] dark:text-[#F5F8F9] tracking-tight">
                  {card.title[lang]}
                </span>
              </div>

              {/* Content Body Box */}
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-6 shadow-2xs flex-1 flex flex-col justify-start">
                <ul className="space-y-3.5">
                  {card.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-normal select-none"
                    >
                      {item[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
