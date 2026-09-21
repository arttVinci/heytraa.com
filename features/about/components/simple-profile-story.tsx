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
    <section className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 md:p-7 shadow-2xs transition-colors duration-200">
      {/* Header */}
      <div className="space-y-1.5">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
          {lang === "id" ? "Tentang" : "About"}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          {lang === "id"
            ? "Pengenalan singkat mengenai siapa saya dan apa yang saya bangun."
            : "A brief introduction to who I am and what I engineer."}
        </p>
      </div>

      {/* Subtle Dashed Divider */}
      <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-800 my-3 sm:my-4" />

      {/* Narrative Body - Readable, comfortable editorial flow */}
      <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-7">
        <p>
          {lang === "id"
            ? "Saya adalah seorang Software Engineer yang membangun fondasi teknis secara mandiri sembari bekerja penuh waktu di luar industri teknologi — melalui pembelajaran terarah, eksperimen langsung, dan proyek-proyek riil. Fokus utama saya saat ini adalah backend development menggunakan Golang (Fiber, GORM), menerapkan prinsip Clean Architecture dan Modular Monolith untuk membangun sistem yang scalable dan mudah dipelihara. Di sisi frontend, saya menggunakan React dan TypeScript untuk merancang antarmuka yang responsif dan terstruktur dengan baik. Keterampilan ini telah divalidasi melalui pengalaman magang riil, di mana saya turut membangun REST API e-commerce siap produksi."
            : "I am a Software Engineer who has built my technical foundation independently while working full-time outside the tech industry — through self-directed learning, hands-on experimentation, and real-world projects. My primary focus right now is backend development using Golang (Fiber, GORM), applying Clean Architecture and Modular Monolith principles to build systems that are scalable and maintainable. On the frontend side, I use React and TypeScript to build responsive, well-structured interfaces. These skills have been validated through real-world engineering experience, including building production-ready e-commerce REST APIs."}
        </p>

        <p>
          {lang === "id"
            ? "Jalur saya menuju rekayasa perangkat lunak sebenarnya berawal dari latar belakang yang berbeda — pemeliharaan elektrikal dan elektronika industri — sebelum akhirnya saya memutuskan untuk beralih karier dan mendalami software development secara penuh."
            : "My path toward software engineering actually started from a different background — electrical/electronics maintenance — before I decided to make a career shift and pursue software development full-on."}
        </p>

        <p>
          {lang === "id"
            ? "Selain itu, saya aktif mengeksplorasi integrasi AI/LLM ke dalam sistem yang saya bangun, termasuk implementasi Retrieval-Augmented Generation (RAG) dan vector database, yang saya kembangkan melalui proyek open-source pribadi. Beberapa proyek yang saat ini sedang saya kerjakan meliputi aplikasi asisten percakapan AI untuk pelaporan kendala infrastruktur dengan backend Go/Fiber dan integrasi LangGraph, serta bereksperimen membangun tool AI coding CLI sendiri dan infrastruktur self-hosted untuk mendeploy produk yang saya kembangkan."
            : "Beyond that, I'm also actively exploring AI/LLM integration into the systems I build, including implementing Retrieval-Augmented Generation (RAG) and vector databases, which I've developed through a personal open-source project. Some of the projects I'm currently working on include an AI conversational assistant app for reporting infrastructure issues, with a Go/Fiber backend and LangGraph integration, as well as experimenting with building my own AI coding CLI tool and self-hosted infrastructure for deploying the products I develop."}
        </p>

        <p>
          {lang === "id"
            ? "Saya adalah seorang pembelajar mandiri yang terbiasa mengeksplorasi teknologi baru secara independen, serta memiliki komitmen penuh untuk membangun karier jangka panjang sebagai Software Engineer profesional."
            : "I'm a self-driven learner, accustomed to exploring new technologies independently, and fully committed to building a long-term career as a professional Software Engineer."}
        </p>
      </div>
    </section>
  );
}

