"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FlickeringGrid } from "./flickering-grid";
import { Highlighter } from "@/shared/components/highlighter";
import { RippleButton } from "@/shared/components/ripple-button";

export function HeroCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#689F99]/20 dark:border-[#689F99]/20 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-9 md:p-10 shadow-xl shadow-[#2D3342]/5 dark:shadow-black/40 transition-colors duration-300">
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
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#689F99]/10 dark:bg-[#689F99]/15 border border-[#689F99]/30 text-[#689F99] dark:text-[#689F99] text-[11px] font-semibold tracking-wide mb-4">
          <span className="w-2 h-2 rounded-full bg-[#689F99] animate-pulse" />
          <span className="font-mono uppercase">
            Full-Stack • AI-Agent-Driven Workflow
          </span>
        </div>

        {/* Display Headline with Highlighter */}
        <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9] leading-[1.25]">
          Engineering High-Performance Web Systems with{" "}
          <Highlighter
            action="underline"
            color="#689F99"
            strokeWidth={3}
          >
            Clean Architecture
          </Highlighter>{" "}
          &amp;{" "}
          <Highlighter
            action="highlight"
            color="rgba(104, 159, 153, 0.28)"
            strokeWidth={2}
          >
            AI Agent Integration.
          </Highlighter>
        </h1>

        {/* Crisp Value Proposition / Bio */}
        <p className="mt-4 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Halo! Saya <span className="font-semibold text-[#2D3342] dark:text-white">Putra Rizky Nugraha</span>. Saya merancang arsitektur backend tangguh dengan <span className="font-medium text-[#2D3342] dark:text-white">Golang (Modular Monolith &amp; ACID)</span>, antarmuka modern dengan <span className="font-medium text-[#2D3342] dark:text-white">Next.js 16 &amp; TypeScript</span>, serta pipeline cerdas <span className="font-medium text-[#2D3342] dark:text-white">RAG dengan Qdrant Vector DB</span> untuk solusi digital berkinerja tinggi.
        </p>

        {/* CTAs with Magic UI Ripple Button */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          <Link href="/projects">
            <RippleButton
              rippleColor="rgba(255, 255, 255, 0.6)"
              className="bg-gradient-to-r from-[#689F99] to-[#558680] hover:from-[#588c86] hover:to-[#4a7570] text-white shadow-md shadow-[#689F99]/25 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl border-0"
            >
              <span className="text-white font-semibold">Jelajahi Proyek</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </RippleButton>
          </Link>

          <Link href="/services">
            <RippleButton
              rippleColor="rgba(104, 159, 153, 0.25)"
              className="bg-white dark:bg-slate-800 hover:bg-[#F5F8F9] dark:hover:bg-slate-700 text-[#2D3342] dark:text-slate-200 hover:text-[#689F99] dark:hover:text-[#689F99] border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl shadow-xs"
            >
              <span>Katalog Layanan Jasa</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#689F99]" />
            </RippleButton>
          </Link>

          <Link href="/about">
            <RippleButton
              rippleColor="rgba(104, 159, 153, 0.2)"
              className="bg-transparent hover:bg-[#F5F8F9] dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#2D3342] dark:hover:text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              <span>Tentang Saya</span>
            </RippleButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
