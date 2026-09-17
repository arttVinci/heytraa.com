"use client";

import React from "react";
import { Terminal, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";
import { GithubIcon, LinkedinIcon, XIcon } from "@/shared/components/icons";

export function FooterSection() {
  const { lang } = useLanguage();

  return (
    <footer className="relative pt-2 mb-2">
      {/* Outer Rounded Container Card */}
      <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-8 sm:p-10 lg:p-12 shadow-xs transition-colors duration-300">
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Col 1: Brand & Bio (Spans 5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-xs">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
                  heytraa.com
                </h3>
                <p className="text-[10px] font-mono tracking-wider text-[#689F99] font-medium uppercase">
                  @traa_rzkyy · FULLSTACK DEVELOPER
                </p>
              </div>
            </div>

            {/* Personalized Authentic Bio */}
            <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              {lang === "id"
                ? "Full-stack developer yang berfokus pada rekayasa backend Golang berkonkurensi tinggi, sistem web modern type-safe, dan eksplorasi produk AI mandiri."
                : "Full-stack developer focused on high-concurrency Golang backends, type-safe modern web systems, and autonomous AI-driven products."}
            </p>

            {/* Social Circle Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://x.com/traa_rzkyy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-full border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#689F99] hover:border-[#689F99]/50 dark:hover:text-[#689F99] transition-colors"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/putra-rizky-nugraha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#689F99] hover:border-[#689F99]/50 dark:hover:text-[#689F99] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/arttVinci"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#689F99] hover:border-[#689F99]/50 dark:hover:text-[#689F99] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: REAL SERVICES (Spans 3 Columns) */}
          <div className="lg:col-span-3 space-y-3.5">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {lang === "id" ? "LAYANAN" : "SERVICES"}
            </p>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="#what-i-do"
                  className="hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
                >
                  {lang === "id"
                    ? "Aplikasi Web & SaaS (Next.js)"
                    : "Web Apps & SaaS (Next.js)"}
                </a>
              </li>
              <li>
                <a
                  href="#what-i-do"
                  className="hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
                >
                  {lang === "id"
                    ? "REST API & Backend (Golang)"
                    : "REST APIs & Backend (Golang)"}
                </a>
              </li>
              <li>
                <a
                  href="#what-i-do"
                  className="hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
                >
                  {lang === "id"
                    ? "Desain Skema Database & ERD"
                    : "Database & ERD Schema Design"}
                </a>
              </li>
              <li>
                <a
                  href="#what-i-do"
                  className="hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
                >
                  {lang === "id"
                    ? "Tugas Kuliah Pemrograman"
                    : "College Coursework & Tasks"}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: REAL PROJECTS (Fixora & Portofy Only) */}
          <div className="lg:col-span-2 space-y-3.5">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {lang === "id" ? "PROYEK" : "PROJECTS"}
            </p>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="https://github.com/arttVinci/fixora-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
                >
                  <span>Fixora</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/arttVinci/portofy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
                >
                  <span>Portofy</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: CONNECT (Spans 2 Columns) */}
          <div className="lg:col-span-2 space-y-3.5">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {lang === "id" ? "KONTAK" : "CONNECT"}
            </p>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="https://www.linkedin.com/in/putra-rizky-nugraha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/arttVinci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/traa_rzkyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:putrarizkynugraha@gmail.com"
                  className="hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
                >
                  {lang === "id" ? "Kirim Email" : "Email Me"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Meaningful Status & Back to Top */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-4">
          <p className="font-mono">
            &copy; 2026 heytraa.com · Putra Rizky Nugraha
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {lang === "id"
                  ? "Terbuka untuk Kolaborasi & Proyek"
                  : "Available for Collaboration & Projects"}
              </span>
            </div>
            <a
              href="#hero"
              className="font-mono text-[11px] hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
            >
              {lang === "id" ? "Kembali ke Atas ↑" : "Back to Top ↑"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
