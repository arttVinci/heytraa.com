"use client";

import React from "react";
import { useLanguage } from "@/shared/context/language-context";

/**
 * Section 1: Background & Profil Diri (Clean Editorial & Storytelling Style)
 * Framed inside a sleek card container with balanced typography, harmonious colors, and authentic signature.
 */
export function SimpleProfileStory() {
  const { lang } = useLanguage();

  return (
    <section className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-7 md:p-8 shadow-2xs transition-colors duration-200">
      {/* Header */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
          {lang === "id" ? "Tentang" : "About"}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          {lang === "id"
            ? "Pengenalan singkat mengenai siapa saya dan apa yang saya bangun."
            : "A brief introduction to who I am and what I engineer."}
        </p>
      </div>

      {/* Subtle Dashed Divider */}
      <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-800 my-5 sm:my-6" />

      {/* Narrative Body - Readable, comfortable editorial flow */}
      <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-8">
        <p>
          {lang === "id"
            ? "Saya Putra Rizky Nugraha, seorang Fullstack Developer yang berbasis di Bekasi, Jawa Barat. Perjalanan saya di dunia teknologi bermula dari latar belakang teknisi pemeliharaan elektrikal dan elektronika industri. Pengalaman langsung di lapangan membentuk etos kerja saya: disiplin troubleshooting yang ketat, analisis akar masalah yang presisi, dan komitmen tinggi terhadap keandalan sistem."
            : "I am Putra Rizky Nugraha, a Fullstack Developer based in Bekasi, Indonesia. My journey into technology started with a hands-on background in industrial electrical and electronics maintenance. Working on physical systems ingrained in me a rigorous troubleshooting discipline, rapid root-cause analysis, and an unwavering focus on system uptime and reliability."}
        </p>

        <p>
          {lang === "id"
            ? "Fokus utama saya adalah merancang sistem backend yang scalable dan modular menggunakan Golang (Go Fiber, GORM) dengan standar Clean Architecture & Modular Monolith, serta membangun antarmuka web modern yang cepat dan responsif menggunakan Next.js, React, dan TypeScript. Saya memegang prinsip bahwa kode yang baik adalah kode yang mudah dipelihara, terisolasi dengan rapi, dan teruji secara fungsional."
            : "My core focus is engineering modular, high-performance backend systems using Golang (Fiber, GORM) rooted in Clean Architecture and Modular Monolith principles, alongside crafting responsive, type-safe web applications with Next.js, React, and TypeScript. I firmly believe that robust software requires clean separation of concerns, reliable data persistence, and straightforward maintainability."}
        </p>

        <p>
          {lang === "id"
            ? "Di samping itu, saya aktif mendalami konsep kecerdasan buatan, termasuk pipeline Retrieval-Augmented Generation (RAG), vector database Qdrant, dan orkestrasi alur Multi-Agent LLM melalui proyek-proyek mandiri seperti Fixora dan Portofy. Saya menikmati lingkungan kolaboratif dan selalu antusias belajar hal baru untuk menghasilkan solusi perangkat lunak yang memberikan dampak nyata."
            : "In addition, I actively explore applied AI concepts, including Retrieval-Augmented Generation (RAG), vector search with Qdrant, and Multi-Agent LLM pipelines through autonomous projects like Fixora and Portofy. I thrive in collaborative environments and am driven by building software that solves practical real-world challenges."}
        </p>

        {/* Warm Sign-Off with Handwritten Signature */}
        <div className="pt-3">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            {lang === "id" ? "Salam hangat," : "Warm regards,"}
          </p>
          <p className="font-[family-name:var(--font-caveat)] font-bold text-4xl sm:text-5xl text-[#689F99] dark:text-[#88C0B9] tracking-wide mt-1 select-none">
            putra.
          </p>
        </div>
      </div>
    </section>
  );
}

