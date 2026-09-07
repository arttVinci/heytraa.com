"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  CodeXml,
  Boxes,
  ShieldCheck,
  Layers,
  Network,
  Cpu,
  DatabaseZap,
  BrainCircuit,
  Bot,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { TechStackCard } from "./tech-stack-card";
import {
  techStackData,
  architecturePatterns,
  aiConcepts,
  type TechCategory,
} from "../data/tech-stack-data";

const filterTabs: { id: TechCategory; label: string; count: number }[] = [
  { id: "all", label: "Semua", count: techStackData.length },
  {
    id: "languages",
    label: "Languages",
    count: techStackData.filter((t) => t.category === "languages").length,
  },
  {
    id: "frameworks",
    label: "Frameworks",
    count: techStackData.filter((t) => t.category === "frameworks").length,
  },
  {
    id: "cloud-db",
    label: "Cloud & DB",
    count: techStackData.filter((t) => t.category === "cloud-db").length,
  },
  {
    id: "tools",
    label: "Tools",
    count: techStackData.filter((t) => t.category === "tools").length,
  },
  {
    id: "agent-llm",
    label: "Coding Agents",
    count: techStackData.filter((t) => t.category === "agent-llm").length,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.03,
    },
  },
};

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState<TechCategory>("all");

  const filteredTech =
    activeTab === "all"
      ? techStackData
      : techStackData.filter((t) => t.category === activeTab);

  return (
    <div className="space-y-10">
      {/* -----------------------------------------------------------------
          SECTION 1: TECH STACK & TOOLS GRID
      ------------------------------------------------------------------- */}
      <section className="space-y-4">
        {/* Full-Width Header */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#0284c7] uppercase font-mono">
            <CodeXml className="w-3.5 h-3.5" />
            <span>TECH STACK &amp; TOOLS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Keahlian &amp; Ekosistem Teknologi
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            Teknologi pilihan untuk backend berkinerja tinggi, antarmuka web modern reaktif, infrastruktur cloud terisolasi, dan autonomous coding agent.
          </p>
        </div>

        {/* Filter Pills - Positioned below header */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100/90 border border-slate-200/80 w-fit">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-[#0284c7] rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{tab.label}</span>
                <span
                  className={`ml-1.5 text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-200/80 text-slate-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Cards */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeTab}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-3xl bg-white/70 backdrop-blur-sm border border-sky-100/80 shadow-xs"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech, index) => (
              <TechStackCard key={tech.name} tech={tech} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 2: SOFTWARE ARCHITECTURE & DESIGN PATTERNS
      ------------------------------------------------------------------- */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#0284c7] uppercase font-mono">
            <Boxes className="w-3.5 h-3.5" />
            <span>SYSTEM ARCHITECTURE &amp; PATTERNS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Prinsip Arsitektur Perangkat Lunak
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            Arsitektur yang saya implementasikan untuk memastikan kode terstruktur bersih, mudah dipelihara, siap diuji secara otomatis, dan dapat diskalakan tanpa overengineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {architecturePatterns.map((arch) => {
            const Icon = arch.icon;
            return (
              <div
                key={arch.id}
                className="group relative p-4 sm:p-5 rounded-2xl bg-white/80 hover:bg-white backdrop-blur-sm border border-slate-200/80 hover:border-sky-300/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${arch.accentColor}15`,
                          color: arch.accentColor,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                          {arch.title}
                        </h3>
                        <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60 mt-0.5">
                          {arch.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5">
                    {arch.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100/90 space-y-1.5">
                  {arch.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-500">
                      <CheckCircle2
                        size={13}
                        className="text-emerald-500 shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* -----------------------------------------------------------------
          SECTION 3: AI / LLM CONCEPTS & CODING AGENT ECOSYSTEM
      ------------------------------------------------------------------- */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#0284c7] uppercase font-mono">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>AI &amp; LLM ENGINEERING ECOSYSTEM</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Konsep AI, LLM &amp; Workflow Coding Agent
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
            Penerapan teknologi AI generasi baru dari protokol penghubung tool standar, pencarian vektor dengan RAG, hingga akselerasi rekayasa kode berbasis autonomous agent.
          </p>
        </div>

        {/* 3 Core AI Concepts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {aiConcepts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative p-4 sm:p-5 rounded-2xl bg-white/80 hover:bg-white backdrop-blur-sm border border-slate-200/80 hover:border-sky-300/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${item.accentColor}15`,
                        color: item.accentColor,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 block">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100/90 space-y-1.5">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-500">
                      <Sparkles
                        size={11}
                        className="text-sky-500 shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Coding Agent Workflow Callout Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white shadow-sm border border-slate-700/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-sky-300">
              <Bot className="w-3.5 h-3.5" />
              <span>AI-AUGMENTED WORKFLOW</span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
              Akselerasi Development dengan Coding Agent &amp; LLM Provider Router
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Workflow harian saya memanfaatkan integrasi sinergis antara <strong className="text-purple-300">Oh My Pi</strong> (CLI autonomous coding agent), <strong className="text-indigo-300">Antigravity</strong> (Google DeepMind agentic IDE), didukung oleh <strong className="text-emerald-300">9router</strong> sebagai gateway perutean model dan <strong className="text-rose-300">CommandCode</strong> sebagai provider hub. Kombinasi ini menghadirkan kecepatan iterasi tinggi dengan akurasi arsitektur terjamin.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
            <div className="flex -space-x-1.5 overflow-hidden">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/30 border border-purple-400/40 text-[10px] font-bold text-purple-200">
                π
              </span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500/30 border border-indigo-400/40 text-[10px] font-bold text-indigo-200">
                AG
              </span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-[10px] font-bold text-emerald-200">
                9R
              </span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-500/30 border border-rose-400/40 text-[10px] font-bold text-rose-200">
                CC
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
