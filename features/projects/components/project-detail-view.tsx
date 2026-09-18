"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/shared/components/icons";
import { TechIcon } from "@/shared/components/tech-icons";
import { useLanguage } from "@/shared/context/language-context";
import { FooterSection } from "@/shared/components/layout";
import { type ProjectItem, getAdjacentProjects } from "../data/projects-data";

interface ProjectDetailViewProps {
  project: ProjectItem;
}

/**
 * ProjectDetailView
 * Polished, clean editorial case study with balanced typography & card backgrounds:
 * - Controlled font-weight (font-semibold instead of heavy font-extrabold)
 * - Solid card containers (bg-white/95 dark:bg-slate-900/90 backdrop-blur-md)
 * - Zero decorative icon soup on headings
 * - Zero fake/gimmicky big metric numbers
 * - Cohesive monochromatic styling with subtle #689F99 accent
 * - Clean dashed bullet points and structured definition layouts
 */
export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { prev, next } = getAdjacentProjects(project.id);

  // Smooth entrance animation
  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.from(".detail-block", {
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        clearProps: "all",
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="space-y-6 sm:space-y-8 max-w-5xl mx-auto"
    >
      {/* 1. Back Navigation & Metadata Eyebrow */}
      <div className="detail-block flex items-center justify-between gap-4">
        <Link
          href={`/${lang}/projects`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>
            {lang === "id" ? "Kembali ke Proyek" : "Back to Projects"}
          </span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 uppercase tracking-wider">
            {project.type}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300">
            {project.category === "pribadi"
              ? lang === "id"
                ? "Pribadi"
                : "Personal"
              : project.category === "magang"
                ? lang === "id"
                  ? "Magang"
                  : "Internship"
                : "Freelance"}
          </span>
          {project.featured && (
            <span className="px-2.5 py-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 uppercase tracking-wider font-medium">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* 2. Editorial Header Card with Balanced Typography */}
      <section className="detail-block rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-2xs space-y-5">
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-[#689F99] font-medium">
            {project.domain[lang]}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            {project.subtitle[lang]}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 flex-wrap pt-3 border-t border-slate-100 dark:border-slate-800/80">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#689F99] text-white font-medium text-xs sm:text-sm hover:bg-[#588983] shadow-2xs transition-colors"
            >
              <span>{lang === "id" ? "Buka Live Demo" : "Live Demo"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm hover:border-[#689F99] hover:text-[#689F99] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>
                {project.githubFrontend ? "Backend Repo" : "GitHub Repo"}
              </span>
            </a>
          )}
          {project.githubFrontend && (
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm hover:border-[#689F99] hover:text-[#689F99] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Frontend Repo</span>
            </a>
          )}
        </div>
      </section>

      {/* 3. Natural Showcase Hero Image */}
      <section className="detail-block rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-2xs relative aspect-[16/9] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1000px"
          className="object-cover object-top"
        />
      </section>

      {/* 4. Project Overview Card with Background */}
      <section className="detail-block rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 shadow-2xs space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
          {lang === "id" ? "Ikhtisar Proyek" : "Project Overview"}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.description[lang]}
        </p>

        {project.overviewPoints && project.overviewPoints[lang] && (
          <ul className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            {project.overviewPoints[lang].map((pt, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <span className="text-[#689F99] select-none font-mono font-medium">
                  —
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* 5. The Challenge & The Solution */}
      <div className="detail-block grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* The Challenge */}
        <section className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-7 shadow-2xs space-y-3">
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Problem Statement
            </div>
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
              {lang === "id" ? "Tantangan Utama" : "The Challenge"}
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.challenge.overview[lang]}
          </p>
          <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            {project.challenge.points[lang].map((pt, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <span className="text-slate-400 select-none font-mono font-medium">
                  —
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* The Solution */}
        <section className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-7 shadow-2xs space-y-3">
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Architectural Response
            </div>
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
              {lang === "id" ? "Solusi Rekayasa" : "The Solution"}
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.solution.overview[lang]}
          </p>
          <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            {project.solution.points[lang].map((pt, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <span className="text-[#689F99] select-none font-mono font-medium">
                  —
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* 6. Key Features Card */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="detail-block rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
              {lang === "id" ? "Fitur & Modul Utama" : "Key Features"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {lang === "id"
                ? "Kapabilitas fungsional yang dirancang untuk menjawab kebutuhan nyata pengguna."
                : "Functional capabilities built to solve core user and operational friction."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 space-y-1.5"
              >
                <h3 className="text-sm font-semibold text-[#2D3342] dark:text-[#F5F8F9]">
                  {feat.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feat.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. System Architecture Highlights */}
      <section className="detail-block rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 shadow-2xs space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {lang === "id" ? "Arsitektur Sistem" : "System Architecture"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {lang === "id"
              ? "Pola perancangan, efisiensi backend, dan keputusan teknis utama."
              : "Architectural patterns, backend performance paradigms, and key design decisions."}
          </p>
        </div>

        <div className="space-y-3 pt-1">
          {project.architecture[lang].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              <span className="text-xs font-mono font-medium text-[#689F99] shrink-0 mt-0.5 select-none">
                0{idx + 1}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Engineering Process */}
      {project.process && project.process.length > 0 && (
        <section className="detail-block rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 shadow-2xs space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
              {lang === "id" ? "Tahapan Rekayasa" : "Engineering Process"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {lang === "id"
                ? "Alur kerja mulai dari perancangan hingga rilis produksi."
                : "Development lifecycle from modeling to production deployment."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.process.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-xs font-mono font-medium text-[#689F99]">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-semibold text-[#2D3342] dark:text-[#F5F8F9]">
                    {step.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description[lang]}
                  </p>
                </div>

                <ul className="space-y-1 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                  {step.points[lang].map((p, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5"
                    >
                      <span className="text-[#689F99] font-mono">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. Tech Stack Card */}
      <section className="detail-block rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 shadow-2xs space-y-5">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
          {lang === "id" ? "Teknologi & Tools" : "Tech Stack & Tools"}
        </h2>

        {/* Brand Tech Icons in Clean Background Boxes */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {project.techIcons.map((icon, idx) => (
            <div
              key={idx}
              title={icon}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800 text-[#2D3342] dark:text-[#F5F8F9] text-xs font-mono shadow-2xs"
            >
              <TechIcon name={icon} className="w-3.5 h-3.5" />
              <span className="capitalize">{icon}</span>
            </div>
          ))}
        </div>

        {/* Minimal Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* 10. Minimal Previous / Next Switcher */}
      <section className="detail-block pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-mono">
          {prev ? (
            <Link
              href={`/${lang}/projects/${prev.id}`}
              className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md hover:border-[#689F99]/50 transition-colors flex items-center gap-2.5 group shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-[#689F99] transition-colors group-hover:-translate-x-1 shrink-0" />
              <div className="overflow-hidden text-left">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                  {lang === "id" ? "Sebelumnya" : "Previous"}
                </div>
                <div className="font-medium text-[#2D3342] dark:text-[#F5F8F9] truncate">
                  {prev.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/${lang}/projects/${next.id}`}
              className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md hover:border-[#689F99]/50 transition-colors flex items-center justify-end gap-2.5 group sm:text-right shadow-2xs"
            >
              <div className="overflow-hidden text-right">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">
                  {lang === "id" ? "Selanjutnya" : "Next"}
                </div>
                <div className="font-medium text-[#2D3342] dark:text-[#F5F8F9] truncate">
                  {next.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#689F99] transition-colors group-hover:translate-x-1 shrink-0" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* 11. Footer */}
      <div className="detail-block">
        <FooterSection />
      </div>
    </div>
  );
}
