"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FlickeringGrid } from "./flickering-grid";
import { Highlighter } from "@/shared/components/highlighter";
import { RippleButton } from "@/shared/components/ripple-button";
import { TextAnimate } from "@/shared/components/text-animate";

export function HeroCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-sky-100/90 dark:border-sky-950/60 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-9 md:p-10 shadow-xl shadow-sky-900/5 dark:shadow-black/40 transition-colors duration-300">
      {/* Ambient Glow & Gradual Flickering Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft atmospheric gradient accents */}
        <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-gradient-to-br from-sky-400/20 via-sky-300/10 to-transparent dark:from-sky-500/15 dark:via-cyan-400/5 dark:to-transparent blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-gradient-to-tr from-sky-300/15 via-transparent to-transparent dark:from-sky-900/20 dark:via-transparent to-transparent blur-2xl" />

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
            color="rgb(2, 132, 199)"
            maxOpacity={0.45}
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="relative z-10">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200/80 dark:border-sky-800/60 text-sky-600 dark:text-sky-400 text-[11px] font-semibold tracking-wide mb-4">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span className="font-mono uppercase">
            Full-Stack • AI-Agent-Driven Workflow
          </span>
        </div>

        {/* Display Headline with Highlighter */}
        <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.25]">
          Engineering High-Performance Web Systems with{" "}
          <Highlighter
            action="underline"
            color="#f59e0b"
            strokeWidth={3}
          >
            Clean Architecture
          </Highlighter>{" "}
          &amp;{" "}
          <Highlighter
            action="highlight"
            color="rgba(56, 189, 248, 0.25)"
            strokeWidth={2}
          >
            AI Agent Integration.
          </Highlighter>
        </h1>

        {/* Crisp Value Proposition / Bio with TextAnimate */}
        <p className="mt-4 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          <TextAnimate as="span" by="word" animation="fadeIn" delay={0.1}>
            Halo! Saya{" "}
          </TextAnimate>
          <TextAnimate
            as="span"
            by="character"
            animation="blurInUp"
            delay={0.25}
            className="font-semibold text-slate-900 dark:text-white"
          >
            Putra Rizky Nugraha
          </TextAnimate>
          <TextAnimate as="span" by="word" animation="fadeIn" delay={0.4}>
            . Saya merancang arsitektur backend tangguh dengan{" "}
          </TextAnimate>
          <TextAnimate
            as="span"
            by="word"
            animation="blurInUp"
            delay={0.55}
            className="font-medium text-slate-900 dark:text-white"
          >
            Golang (Modular Monolith &amp; ACID)
          </TextAnimate>
          <TextAnimate as="span" by="word" animation="fadeIn" delay={0.7}>
            , antarmuka modern dengan{" "}
          </TextAnimate>
          <TextAnimate
            as="span"
            by="word"
            animation="blurInUp"
            delay={0.85}
            className="font-medium text-slate-900 dark:text-white"
          >
            Next.js 16 &amp; TypeScript
          </TextAnimate>
          <TextAnimate as="span" by="word" animation="fadeIn" delay={1.0}>
            , serta pipeline cerdas{" "}
          </TextAnimate>
          <TextAnimate
            as="span"
            by="word"
            animation="blurInUp"
            delay={1.15}
            className="font-medium text-slate-900 dark:text-white"
          >
            RAG dengan Qdrant Vector DB
          </TextAnimate>
          <TextAnimate as="span" by="word" animation="fadeIn" delay={1.3}>
            {" "}untuk solusi digital berkinerja tinggi.
          </TextAnimate>
        </p>

        {/* CTAs with Magic UI Ripple Button */}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          <Link href="/projects">
            <RippleButton
              rippleColor="rgba(255, 255, 255, 0.6)"
              className="bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white shadow-md shadow-sky-600/25 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl border-0"
            >
              <span>Jelajahi Proyek</span>
              <ArrowRight className="w-4 h-4" />
            </RippleButton>
          </Link>

          <Link href="/services">
            <RippleButton
              rippleColor="rgba(2, 132, 199, 0.25)"
              className="bg-white dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl shadow-xs"
            >
              <span>Katalog Layanan Jasa</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            </RippleButton>
          </Link>

          <Link href="/about">
            <RippleButton
              rippleColor="rgba(148, 163, 184, 0.2)"
              className="bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              <span>Tentang Saya</span>
            </RippleButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
