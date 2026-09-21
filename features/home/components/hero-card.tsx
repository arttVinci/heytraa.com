"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FlickeringGrid } from "./flickering-grid";
import { Highlighter } from "@/shared/components/highlighter";
import { RippleButton } from "@/shared/components/ripple-button";
import { useLanguage } from "@/shared/context/language-context";

export function HeroCard() {
  const { lang } = useLanguage();
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#689F99]/20 dark:border-[#689F99]/20 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-7 md:p-8 shadow-xl shadow-[#2D3342]/5 dark:shadow-black/40 transition-colors duration-300">
      {/* Ambient Glow & Gradual Flickering Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft atmospheric gradient accents */}
        <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-gradient-to-br from-[#689F99]/20 via-[#689F99]/10 to-transparent dark:from-[#689F99]/15 dark:via-cyan-900/10 dark:to-transparent blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-tr from-[#689F99]/15 via-transparent to-transparent dark:from-[#2D3342]/30 dark:via-transparent to-transparent blur-2xl" />

        {/* Flickering Grid with progressive linear & radial falloff */}
        <div
          className="absolute inset-0 opacity-45 dark:opacity-30"
          style={{
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.35) 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.35) 75%, transparent 100%)",
          }}
        >
          <FlickeringGrid
            squareSize={4}
            gridGap={8}
            flickerChance={0.25}
            color="rgb(104, 159, 153)"
            maxOpacity={0.45}
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="relative z-10">
        {/* Eyebrow */}
        <p className="text-xs font-mono font-medium tracking-wider uppercase text-[#689F99] mb-3">
          {lang === "id"
            ? "Rekayasa Sistem Full-Stack & Agen AI"
            : "Full-Stack & AI-Agent Systems Engineering"}
        </p>

        {/* Display Headline with Highlighter */}
        <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9] leading-[1.25]">
          {lang === "id" ? (
            <>
              Merancang sistem scalable dengan{" "}
              <Highlighter action="underline" color="#689F99" strokeWidth={3}>
                Clean Architecture
              </Highlighter>{" "}
              &amp;{" "}
              <Highlighter
                action="highlight"
                color="rgba(104, 159, 153, 0.28)"
                strokeWidth={2}
              >
                Integrasi AI.
              </Highlighter>
            </>
          ) : (
            <>
              Crafting scalable systems with{" "}
              <Highlighter action="underline" color="#689F99" strokeWidth={3}>
                Clean Architecture
              </Highlighter>{" "}
              &amp;{" "}
              <Highlighter
                action="highlight"
                color="rgba(104, 159, 153, 0.28)"
                strokeWidth={2}
              >
                AI Integration.
              </Highlighter>
            </>
          )}
        </h1>

        {/* Crisp Value Proposition / Bio */}
        <p
          className="mt-4 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed w-full max-w-none"
          style={{ maxWidth: "none" }}
        >
          {lang === "id" ? (
            <>
              Software Engineer yang berfokus pada arsitektur backend berkinerja tinggi dan sistem web modern. Membawa disiplin ketat serta presisi dari latar belakang rekayasa elektrikal/elektronika ke dalam pengembangan perangkat lunak berbasis{" "}
              <span className="font-medium text-[#2D3342] dark:text-white">
                Golang (Fiber, GORM)
              </span>{" "}
              dengan fondasi{" "}
              <span className="font-medium text-[#2D3342] dark:text-white">
                Clean Architecture
              </span>{" "}
              dan{" "}
              <span className="font-medium text-[#2D3342] dark:text-white">
                Modular Monolith
              </span>,{" "}
              serta antarmuka responsif{" "}
              <span className="font-medium text-[#2D3342] dark:text-white">
                React/TypeScript
              </span>.{" "}
              Aktif mengintegrasikan alur kerja AI modern seperti RAG kontekstual, vector database (Qdrant), dan arsitektur multi-agent LangGraph untuk menghasilkan sistem yang andal dan siap skala.
            </>
          ) : (
            <>
              Software Engineer specializing in high-throughput backend architecture, resilient systems, and modern web applications. Bringing engineering discipline and failure-resilient precision from an electrical/electronics background into scalable{" "}
              <span className="font-medium text-[#2D3342] dark:text-white">
                Golang (Fiber, GORM)
              </span>{" "}
              systems engineered with{" "}
              <span className="font-medium text-[#2D3342] dark:text-white">
                Clean Architecture
              </span>{" "}
              and{" "}
              <span className="font-medium text-[#2D3342] dark:text-white">
                Modular Monolith
              </span>{" "}
              principles, paired with type-safe{" "}
              <span className="font-medium text-[#2D3342] dark:text-white">
                React/TypeScript
              </span>{" "}
              frontends. Actively developing agentic AI workflows, contextual RAG with vector databases (Qdrant), and LangGraph multi-agent systems built for real-world production.
            </>
          )}
        </p>

        {/* CTAs with Magic UI Ripple Button */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          <Link href={`/${lang}/projects`}>
            <RippleButton
              rippleColor="rgba(255, 255, 255, 0.6)"
              className="bg-gradient-to-r from-[#689F99] to-[#558680] hover:from-[#588c86] hover:to-[#4a7570] text-white shadow-md shadow-[#689F99]/25 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl border-0"
            >
              <span className="text-white font-semibold">
                {lang === "id" ? "Jelajahi Proyek" : "Explore Projects"}
              </span>
              <ArrowRight className="w-4 h-4 text-white" />
            </RippleButton>
          </Link>

          <Link href={`/${lang}/services`}>
            <RippleButton
              rippleColor="rgba(104, 159, 153, 0.25)"
              className="bg-white dark:bg-slate-800 hover:bg-[#F5F8F9] dark:hover:bg-slate-700 text-[#2D3342] dark:text-slate-200 hover:text-[#689F99] dark:hover:text-[#689F99] border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl shadow-xs"
            >
              <span>{lang === "id" ? "Katalog Layanan Jasa" : "Services Catalog"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#689F99]" />
            </RippleButton>
          </Link>

          <Link href={`/${lang}/about`}>
            <RippleButton
              rippleColor="rgba(104, 159, 153, 0.2)"
              className="bg-transparent hover:bg-[#F5F8F9] dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#2D3342] dark:hover:text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              <span>{lang === "id" ? "Tentang Saya" : "About Me"}</span>
            </RippleButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
