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

      {/* Narrative Body - Readable, comfortable editorial flow answering search intent */}
      <div className="space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed sm:leading-7">
        <p>
          {lang === "id" ? (
            <>
              <strong className="font-semibold text-[#2D3342] dark:text-[#F5F8F9]">
                Putra Rizky Nugraha
              </strong>{" "}
              adalah seorang Software Engineer dan Full-Stack Developer asal
              Indonesia yang berfokus pada rekayasa sistem backend berkinerja
              tinggi, arsitektur web modern, serta integrasi kecerdasan buatan
              (AI). Dikenal di dunia digital dengan nama panggung{" "}
              <span className="font-mono text-xs font-semibold text-[#689F99] bg-[#689F99]/10 px-1.5 py-0.5 rounded">
                @traa_rzkyy
              </span>
              , ia saat ini menempuh pendidikan Sarjana (S1) Sistem Informasi di
              Universitas Terbuka setelah menyelesaikan pendidikan vokasi Teknik
              Elektronika Industri di SMKN 5 Kota Bekasi.
            </>
          ) : (
            <>
              <strong className="font-semibold text-[#2D3342] dark:text-[#F5F8F9]">
                Putra Rizky Nugraha
              </strong>{" "}
              (also known online as{" "}
              <span className="font-mono text-xs font-semibold text-[#689F99] bg-[#689F99]/10 px-1.5 py-0.5 rounded">
                @traa_rzkyy
              </span>
              ) is an Indonesian Software Engineer and Full-Stack Developer
              specializing in high-throughput backend architecture, modern web
              applications, and artificial intelligence (AI) integrations. He is
              currently pursuing a Bachelor&apos;s degree (S1) in Information Systems
              at Universitas Terbuka, building upon a technical foundation in
              Industrial Electronics Engineering from SMKN 5 Kota Bekasi.
            </>
          )}
        </p>

        <p>
          {lang === "id"
            ? "Perjalanan profesionalnya ditandai oleh transisi karier yang terarah — beralih dari dunia pemeliharaan elektrikal dan sirkuit elektronika industri menuju rekayasa perangkat lunak profesional. Disiplin ketat, metode investigasi akar masalah (root-cause analysis), serta ketelitian troubleshooting perangkat keras di lantai industri menjadi fondasi cara berpikir analitis yang ia bawa ke dalam rancang bangun perangkat lunak."
            : "His professional path is shaped by a deliberate career transition — evolving from electrical maintenance and industrial electronic circuitry into professional software engineering. The rigorous discipline, root-cause troubleshooting methodologies, and hardware precision gained on the industrial floor now form the analytical foundation he applies to software system design."}
        </p>

        <p>
          {lang === "id" ? (
            <>
              Dalam rekayasa sistem, fokus utamanya tertuju pada pengembangan
              backend menggunakan{" "}
              <strong className="font-medium text-[#2D3342] dark:text-slate-100">
                Golang (Fiber, GORM)
              </strong>{" "}
              dengan kepatuhan terhadap prinsip{" "}
              <strong className="font-medium text-[#2D3342] dark:text-slate-100">
                Clean Architecture
              </strong>{" "}
              dan Modular Monolith guna menghasilkan arsitektur yang scalable,
              mudah diuji, dan andal. Di ranah antarmuka, ia menggunakan React,
              Next.js, dan TypeScript untuk merancang aplikasi web yang cepat dan
              intuitif. Keterampilan ini teruji secara riil melalui perancangan
              REST API e-commerce siap produksi serta berbagai proyek rekayasa
              sumber terbuka.
            </>
          ) : (
            <>
              In systems engineering, his primary focus centers on backend
              development using{" "}
              <strong className="font-medium text-[#2D3342] dark:text-slate-100">
                Golang (Fiber, GORM)
              </strong>
              , strictly applying{" "}
              <strong className="font-medium text-[#2D3342] dark:text-slate-100">
                Clean Architecture
              </strong>{" "}
              and Modular Monolith principles to build scalable, testable, and
              resilient services. On the client side, he leverages React, Next.js,
              and TypeScript to create fast, intuitive web interfaces. These
              skills have been proven through production-ready e-commerce REST
              APIs and active open-source engineering initiatives.
            </>
          )}
        </p>

        <p>
          {lang === "id"
            ? "Selain sistem inti, Putra aktif mengeksplorasi ekosistem AI/LLM, termasuk implementasi Retrieval-Augmented Generation (RAG) berbasis vector database (Qdrant) dan agen cerdas multi-langkah. Membangun kompetensi secara mandiri sembari bekerja penuh waktu di luar industri teknologi, ia membuktikan dedikasi tinggi dan komitmen jangka panjang untuk terus bertumbuh sebagai engineer profesional."
            : "Beyond core backend systems, Putra actively explores the AI/LLM ecosystem, including Retrieval-Augmented Generation (RAG) architectures with vector databases (Qdrant) and autonomous multi-agent workflows. Having built his technical expertise independently while working full-time outside the tech sector, he embodies a relentless drive for mastery and a long-term dedication to engineering excellence."}
        </p>
      </div>
    </section>
  );
}
