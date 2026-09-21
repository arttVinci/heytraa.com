"use client";

import React, { useState } from "react";
import { MessageSquarePlus, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";
import { servicesData, ServiceTestimonial } from "../data/services-data";
import { cn } from "@/shared/lib/utils";
import { Marquee } from "@/shared/components/marquee";
import { AddFeedbackModal } from "./add-feedback-modal";

export function ServicesTestimonials() {
  const { lang } = useLanguage();
  const { testimonials } = servicesData;

  // Local state for dynamic testimonials list (supports client additions)
  const [items, setItems] = useState<ServiceTestimonial[]>(testimonials.items);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTestimonial = (newItem: ServiceTestimonial) => {
    setItems((prev) => [newItem, ...prev]);
  };

  return (
    <section className="py-6 sm:py-8 border-t border-slate-200/70 dark:border-slate-800/80">
      <div className="space-y-6">
        {/* Section Header & Action Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#689F99]/10 text-[#689F99] border border-[#689F99]/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>
                {lang === "id"
                  ? "Ulasan Klien Terverifikasi"
                  : "Verified Client Reviews"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
              {testimonials.title[lang]}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {testimonials.description[lang]}
            </p>
          </div>

          {/* Add Comment CTA Button */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#1e293b] hover:bg-[#0f172a] dark:bg-[#f8fafc] dark:hover:bg-white text-white dark:text-[#0f172a] text-xs sm:text-sm font-semibold tracking-tight shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
            >
              <MessageSquarePlus className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>{lang === "id" ? "Tulis Ulasan" : "Leave Feedback"}</span>
            </button>
          </div>
        </div>

        {/* Continuous Gliding Marquee Stream */}
        <div className="relative overflow-hidden rounded-3xl py-2">
          {/* Subtle Left & Right Gradient Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#f8fafc] dark:from-[#090e17] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#f8fafc] dark:from-[#090e17] to-transparent z-10" />

          <Marquee
            pauseOnHover={true}
            repeat={3}
            className="[--duration:45s] [--gap:1.25rem] py-2"
          >
            {items.map((item: ServiceTestimonial) => (
              <div
                key={item.id}
                className="group relative w-[290px] sm:w-[350px] shrink-0 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 sm:p-5 shadow-2xs hover:shadow-lg hover:shadow-[#689F99]/10 hover:border-[#689F99]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#689F99]/15 via-[#689F99]/5 to-transparent rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-3">
                  {/* Author Name & Role */}
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 select-none border border-slate-200/70 dark:border-slate-700/60 shadow-2xs group-hover:scale-105 transition-transform",
                        item.accentBg,
                        item.accentText
                      )}
                    >
                      {item.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-[#2D3342] dark:text-[#F5F8F9] leading-tight truncate">
                        {item.author}
                      </h4>
                      <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium mt-0.5 leading-normal truncate">
                        {item.role[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Comment Content */}
                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    &ldquo;{item.quote[lang]}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Modal: Client Feedback Gate */}
        <AddFeedbackModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddTestimonial={handleAddTestimonial}
        />
      </div>
    </section>
  );
}
