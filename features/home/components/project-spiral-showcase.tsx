"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  X,
  Layers,
  CheckCircle2,
  Cpu,
  MoveVertical,
  MousePointerClick,
} from "lucide-react";
import { GithubIcon } from "@/shared/components/icons";
import { InfiniteSpiral, InfiniteSpiralItem } from "@/shared/components/InfiniteSpiral";
import { useLanguage } from "@/shared/context/language-context";
import { showcaseProjects, ShowcaseProject } from "../data/showcase-projects";

export function ProjectSpiralShowcase() {
  const { lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  // We repeat the projects to form an endless, seamless looping 3D helix
  const spiralItems: InfiniteSpiralItem[] = [...showcaseProjects, ...showcaseProjects].map(
    (project, index) => ({
      id: `${project.id}-${index}`,
      src: project.image,
      alt: project.title,
    })
  );

  const handleCardClick = (item: InfiniteSpiralItem) => {
    // Find the matching project by matching the id prefix
    const projectId = typeof item.id === "string" ? item.id.split("-")[0] : "";
    const found = showcaseProjects.find((p) => p.id === projectId) || showcaseProjects[0];
    setSelectedProject(found);
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Section - separated from the spiral */}
      <div className="relative overflow-hidden rounded-3xl border border-[#689F99]/25 dark:border-[#689F99]/20 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-8 shadow-md shadow-[#2D3342]/5 dark:shadow-black/30 transition-colors duration-300">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-mono font-medium tracking-wider uppercase text-[#689F99]">
              {lang === "id" ? "Produk & Arsitektur Unggulan" : "Featured Products & Systems"}
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9] leading-snug">
              {lang === "id"
                ? "Showcase Produk & Arsitektur Interaktif"
                : "Interactive Product & Architecture Showcase"}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === "id"
                ? "Jelajahi portofolio sistem backend Golang berskala produksi, platform AI terintegrasi Qdrant, dan aplikasi full-stack modern."
                : "Explore production-grade Golang backend systems, Qdrant-integrated AI platforms, and modern full-stack apps."}
            </p>
          </div>

          {/* Interactive controls hint */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5F8F9] dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
              <MoveVertical className="w-3.5 h-3.5 text-[#689F99]" />
              <span>Drag to Spin</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F5F8F9] dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
              <MousePointerClick className="w-3.5 h-3.5 text-[#689F99]" />
              <span>Click for Details</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Free-floating 3D Spiral - Lengthened downwards with spacious layout */}
      <div
        className="relative w-full h-[740px] sm:h-[820px] lg:h-[880px] overflow-hidden my-4"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <InfiniteSpiral
          items={spiralItems}
          cardWidth={460}
          cardHeight={260}
          radius={280}
          cardsPerTurn={6}
          verticalSpacing={135}
          perspective={1400}
          speed={0.34}
          animationMode="all"
          pauseOnHover={true}
          centerScale={1.05}
          edgeBlur={0}
          edgeFade={0.15}
          cardRadius={16}
          onItemClick={handleCardClick}
          className="w-full h-full"
        />
      </div>


      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl border border-[#689F99]/30 shadow-2xl shadow-black/40 p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-20"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Hero Image */}
            <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-4 sm:p-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#689F99]/30 text-[#F5F8F9] border border-[#689F99]/50 text-xs font-mono font-semibold backdrop-blur-md">
                  <Cpu className="w-3.5 h-3.5 text-[#689F99]" />
                  <span>{selectedProject.badge}</span>
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2D3342] dark:text-[#F5F8F9] tracking-tight">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#689F99]">
                {selectedProject.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                {selectedProject.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#2D3342] dark:text-[#F5F8F9] uppercase tracking-wider">
                <Layers className="w-4 h-4 text-[#689F99]" />
                <span>Pilar Arsitektur &amp; Rekayasa Sistem</span>
              </div>
              <ul className="space-y-2">
                {selectedProject.architecture.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#689F99] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Teknologi &amp; Tools:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#F5F8F9] dark:bg-slate-800 text-[#2D3342] dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              {selectedProject.githubBackend && (
                <a
                  href={selectedProject.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2D3342] hover:bg-[#222732] dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#2D3342] text-xs font-semibold shadow-sm transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              )}

              {selectedProject.githubFrontend && (
                <a
                  href={selectedProject.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F5F8F9] hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[#2D3342] dark:text-slate-200 text-xs font-semibold transition-all border border-slate-200 dark:border-slate-700"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Frontend Repo</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              )}

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#689F99] hover:bg-[#588c86] text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <span>Kunjungi Live Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="ml-auto px-4 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
