"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Pin,
} from "lucide-react";
import { GithubIcon } from "@/shared/components/icons";
import { TechIcon } from "@/shared/components/tech-icons";
import { cn } from "@/shared/lib/utils";
import { useLanguage } from "@/shared/context/language-context";
import { type ProjectItem } from "../data/projects-data";

interface ProjectCardProps {
  project: ProjectItem;
}

/**
 * ProjectCard
 * Clean, minimalistic card with direct page link:
 * - 16:9 thumbnail with "📌 Featured" badge
 * - "Lihat Proyek ➔" overlay on hover
 * - Brand title with crisp typography leading to /[lang]/projects/[id]
 * - 2-line clean description
 * - Horizontal brand tech icons row (Go, React, TS, Docker, etc.)
 * - Direct action links for GitHub & Live Demo
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLanguage();
  const detailHref = `/${lang}/projects/${project.id}`;

  return (
    <div
      className={cn(
        "flex flex-col justify-between h-full rounded-2xl border border-slate-200/80 dark:border-slate-800",
        "bg-white/95 dark:bg-slate-900/90 backdrop-blur-md shadow-2xs hover:border-[#689F99]/40 transition-all duration-300 group overflow-hidden"
      )}
    >
      <div>
        {/* Thumbnail Area with Direct Link */}
        <Link
          href={detailHref}
          className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer select-none group/img block"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105"
          />

          {/* Top-Right "Featured" Badge with Pin */}
          {project.featured && (
            <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-[#EAB308] text-slate-950 text-[11px] font-mono font-bold tracking-wide flex items-center gap-1 shadow-md z-10">
              <Pin className="w-3 h-3 fill-slate-950 rotate-45" />
              <span>Featured</span>
            </div>
          )}

          {/* Hover Text: "Lihat Proyek →" (Clean, Small, No Dark Overlay) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white [text-shadow:_0_1px_3px_rgba(0,0,0,0.9),_0_0_8px_rgba(0,0,0,0.7)] select-none">
              <span>{lang === "id" ? "Lihat Proyek" : "View Project"}</span>
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </Link>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-3">
          {/* Title */}
          <div>
            <Link
              href={detailHref}
              className="text-base sm:text-lg font-bold tracking-tight text-[#689F99] hover:underline transition-colors block text-left"
            >
              {project.title}
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mt-1">
              {project.description[lang]}
            </p>
          </div>

          {/* Tech Stack Brand Icons Row */}
          <div className="flex items-center gap-2 pt-1 overflow-x-auto scrollbar-none select-none">
            {project.techIcons.map((icon, idx) => (
              <div
                key={idx}
                title={icon}
                className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shrink-0 shadow-2xs"
              >
                <TechIcon name={icon} className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-4 sm:p-5 pt-0 mt-auto border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 text-xs sm:text-sm">
        {/* Detail Link */}
        <Link
          href={detailHref}
          className="inline-flex items-center gap-1 font-medium text-xs sm:text-sm text-slate-600 dark:text-slate-300 hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors cursor-pointer select-none"
        >
          <span>{lang === "id" ? "Lihat Detail" : "View Details"}</span>
          <ArrowRight className="w-3 h-3" />
        </Link>

        {/* External Links: GitHub & Live Demo */}
        <div className="flex items-center gap-1.5">
          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Backend"
              className="w-8 h-8 rounded-lg border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#689F99] hover:border-[#689F99]/50 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#689F99]/10 hover:bg-[#689F99]/20 text-[#689F99] font-medium text-xs transition-colors"
            >
              <span>Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
