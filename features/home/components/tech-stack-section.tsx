"use client";

import React from "react";
import {
  Layers,
  Sparkles,
  Terminal,
  Database,
  Boxes,
} from "lucide-react";
import { Marquee } from "@/shared/components/marquee";
import { TechIcon } from "@/shared/components/tech-icons";
import { useLanguage } from "@/shared/context/language-context";
import {
  techStackItems,
  TechCategory,
} from "../data/tech-stack-data";

export function TechStackSection() {
  const { lang } = useLanguage();

  const getItemsByCategory = (category: TechCategory) =>
    techStackItems.filter((item) => item.category === category);

  return (
    <section
      id="tech-stack"
      className="relative py-4 sm:py-6 px-1 space-y-8 transition-colors duration-300"
    >
      {/* 1. Header Section */}
      <div className="border-b border-slate-200/80 dark:border-slate-800/80 pb-5">
        <div className="space-y-1.5">
          <p className="text-xs font-mono font-medium tracking-wider uppercase text-[#689F99]">
            {lang === "id"
              ? "Kapabilitas Rekayasa"
              : "Engineered Capabilities"}
          </p>

          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {lang === "id"
              ? "Tech Stack & Fokus Arsitektur"
              : "Tech Stack & Architectural Focus"}
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {lang === "id"
              ? "Spesialisasi backend Golang berkonkurensi tinggi & database, rekayasa web modern type-safe, dan eksplorasi aktif sistem AI agentik."
              : "Specialized in high-concurrency Golang backend & databases, type-safe modern web engineering, and active agentic AI exploration."}
          </p>
        </div>
      </div>

      {/* 2. Magic UI Marquee Ticker (Logo Icon & Title Only) */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-1.5">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white/95 dark:from-slate-900/90 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white/95 dark:from-slate-900/90 to-transparent z-10" />

        <Marquee pauseOnHover repeat={3} className="[--duration:36s]">
          {techStackItems.map((tech) => (
            <div
              key={tech.id}
              className="group/item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:border-[#689F99] hover:bg-[#689F99]/10 hover:shadow-xs transition-all duration-300 cursor-default select-none"
            >
              <TechIcon
                name={tech.id}
                className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/item:scale-120"
              />
              <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-[#689F99] transition-colors duration-200">
                {tech.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* 3. Balanced Bento Grid (Row 1: 50/50, Row 2: 33/33/33) */}
      <div className="relative space-y-5">
        
        {/* ROW 1: BACKEND (50%) & AI/LLM (50%) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* CARD 1: BACKEND & SYSTEMS */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 sm:p-6 shadow-xs hover:border-[#689F99]/40 transition-all duration-300 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#689F99]/10 dark:bg-[#689F99]/15 text-[#689F99]">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#2D3342] dark:text-[#F5F8F9]">
                      {lang === "id" ? "Backend & Systems" : "Backend & Systems"}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {lang === "id"
                        ? "Clean Code, Clean Architecture & Modular Monolith"
                        : "Clean Code, Clean Architecture & Modular Monolith"}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === "id"
                  ? "Merancang REST API performa tinggi dengan Golang (Fiber) berlandaskan prinsip Clean Code, Clean Architecture, dan Modular Monolith. Menjamin kode rapi, mudah di-maintain, batas modul terisolasi dengan baik, keamanan solid, serta standar desain HTTP yang konsisten."
                  : "Engineering high-performance REST APIs using Golang (Fiber) rooted in Clean Code, Clean Architecture, and Modular Monolith principles. Ensuring clean and maintainable code, clear module boundaries, solid security practices, and consistent HTTP design."}
              </p>
            </div>

            {/* Chips: Golang & Fiber */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {getItemsByCategory("backend").map((item) => (
                <div
                  key={item.id}
                  className="group/item flex items-center gap-3 p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-[#689F99] hover:bg-[#689F99]/10 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 cursor-default select-none"
                >
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-xs border border-slate-200/60 dark:border-slate-700 shrink-0 group-hover/item:scale-115 group-hover/item:border-[#689F99]/40 transition-transform duration-300 flex items-center justify-center">
                    <TechIcon name={item.id} className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#2D3342] dark:text-[#F5F8F9] group-hover/item:text-[#689F99] transition-colors duration-200">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 2: AI & LLM INTEGRATION */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 sm:p-6 shadow-xs hover:border-[#689F99]/40 transition-all duration-300 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#689F99]/10 dark:bg-[#689F99]/15 text-[#689F99]">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#2D3342] dark:text-[#F5F8F9]">
                      {lang === "id" ? "AI & LLM Integration" : "AI & LLM Integration"}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {lang === "id"
                        ? "Riset aktif, arsitektur agentik & protokol MCP"
                        : "Active research, agentic graphs & MCP protocols"}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === "id"
                  ? "Mendalami pipeline RAG untuk grounding informasi, orkestrasi alur siklis multi-agent berbasis LangGraph, standar integrasi Model Context Protocol (MCP), dan konsep fundamental model AI."
                  : "Deepening knowledge in RAG contextual retrieval pipelines, stateful cyclic multi-agent graphs via LangGraph, Model Context Protocol (MCP) standards, and foundational AI models."}
              </p>
            </div>

            {/* Chips: RAG, LangGraph, MCP, AI Concepts (2x2 grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {getItemsByCategory("ai-llm").map((item) => (
                <div
                  key={item.id}
                  className="group/item flex items-center gap-2.5 p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-[#689F99] hover:bg-[#689F99]/10 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 cursor-default select-none"
                >
                  <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-xs border border-slate-200/60 dark:border-slate-700 shrink-0 group-hover/item:scale-115 group-hover/item:border-[#689F99]/40 transition-transform duration-300 flex items-center justify-center">
                    <TechIcon name={item.id} className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#2D3342] dark:text-[#F5F8F9] group-hover/item:text-[#689F99] transition-colors duration-200 leading-snug">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2: FRONTEND (33.3%), DATABASE (33.3%), DEVOPS (33.3%) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* CARD 3: FRONTEND & WEB */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 sm:p-6 shadow-xs hover:border-[#689F99]/40 transition-all duration-300 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#689F99]/10 dark:bg-[#689F99]/15 text-[#689F99]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D3342] dark:text-[#F5F8F9]">
                      {lang === "id" ? "Frontend & Web" : "Frontend & Web"}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {lang === "id" ? "Type-safe, dinamis & modern" : "Type-safe, dynamic & modern"}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === "id"
                  ? "Membangun antarmuka web modern dengan Next.js App Router, React, TypeScript, JavaScript, Tailwind CSS, dan bundling kilat Vite."
                  : "Crafting modern web interfaces with Next.js App Router, React, TypeScript, JavaScript, Tailwind CSS, and lightning-fast Vite bundling."}
              </p>
            </div>

            {/* Chips: 6 items in 2 columns */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {getItemsByCategory("frontend").map((item) => (
                <div
                  key={item.id}
                  className="group/item flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-[#689F99] hover:bg-[#689F99]/10 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 cursor-default select-none"
                >
                  <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-xs border border-slate-200/60 dark:border-slate-700 shrink-0 group-hover/item:scale-115 group-hover/item:border-[#689F99]/40 transition-transform duration-300 flex items-center justify-center">
                    <TechIcon name={item.id} className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-[#2D3342] dark:text-[#F5F8F9] group-hover/item:text-[#689F99] transition-colors duration-200 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 4: DATABASE & STORAGE (MySQL, Qdrant, Cloudflare R2) */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 sm:p-6 shadow-xs hover:border-[#689F99]/40 transition-all duration-300 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#689F99]/10 dark:bg-[#689F99]/15 text-[#689F99]">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D3342] dark:text-[#F5F8F9]">
                      {lang === "id" ? "Database & Storage" : "Database & Storage"}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {lang === "id" ? "Relasional, vector & object" : "Relational, vector & object"}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === "id"
                  ? "Penyimpanan data relasional MySQL teruji ACID, vector database Qdrant untuk embeddings AI/RAG, dan Cloudflare R2 untuk object storage terdistribusi."
                  : "Battle-tested relational MySQL persistence, Qdrant vector database for AI/RAG semantic search, and Cloudflare R2 for distributed object storage."}
              </p>
            </div>

            {/* Chips: MySQL, Qdrant, Cloudflare R2 */}
            <div className="flex flex-col gap-2 pt-1">
              {getItemsByCategory("database").map((item) => (
                <div
                  key={item.id}
                  className="group/item flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-[#689F99] hover:bg-[#689F99]/10 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 cursor-default select-none"
                >
                  <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-xs border border-slate-200/60 dark:border-slate-700 shrink-0 group-hover/item:scale-115 group-hover/item:border-[#689F99]/40 transition-transform duration-300 flex items-center justify-center">
                    <TechIcon name={item.id} className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#2D3342] dark:text-[#F5F8F9] group-hover/item:text-[#689F99] transition-colors duration-200">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 5: DEVOPS, CLOUD & TOOLS */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-5 sm:p-6 shadow-xs hover:border-[#689F99]/40 transition-all duration-300 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#689F99]/10 dark:bg-[#689F99]/15 text-[#689F99]">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#2D3342] dark:text-[#F5F8F9]">
                      {lang === "id" ? "Cloud & Infrastruktur" : "Cloud & Infrastructure"}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {lang === "id" ? "Kontainer, cloud compute & workflow" : "Containers, cloud compute & workflow"}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === "id"
                  ? "Pengelolaan kontainer dengan Docker, komputasi cloud di GCP, hosting edge Cloudflare Pages, kolaborasi GitHub, dan pengujian API via Postman."
                  : "Container management with Docker, GCP cloud compute, Cloudflare Pages edge hosting, GitHub collaboration, and Postman API testing."}
              </p>
            </div>

            {/* Chips: Docker, GCP, Cloudflare Pages, GitHub, Postman */}
            <div className="flex flex-col gap-1.5 pt-1">
              {getItemsByCategory("devops").map((item) => (
                <div
                  key={item.id}
                  className="group/item flex items-center gap-2 p-2 rounded-xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-[#689F99] hover:bg-[#689F99]/10 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 cursor-default select-none"
                >
                  <div className="p-1 rounded-lg bg-white dark:bg-slate-800 shadow-xs border border-slate-200/60 dark:border-slate-700 shrink-0 group-hover/item:scale-115 group-hover/item:border-[#689F99]/40 transition-transform duration-300 flex items-center justify-center">
                    <TechIcon name={item.id} className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-[#2D3342] dark:text-[#F5F8F9] group-hover/item:text-[#689F99] transition-colors duration-200 truncate">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
