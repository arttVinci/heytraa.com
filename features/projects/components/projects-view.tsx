"use client";

import React, { useState, useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";
import { FooterSection } from "@/shared/components/layout";
import {
  projectsData,
  type ProjectType,
  type ProjectCategoryType,
} from "../data/projects-data";
import { ProjectCard } from "./project-card";
import { ProjectFilters } from "./project-filters";

/**
 * ProjectsView
 * Simple, elegant project showcase matching user reference:
 * - Clean editorial header with dashed divider
 * - Two-tier pill filter bar (Tipe & Kategori)
 * - 2-column cards with direct navigation to dedicated project detail pages
 * - GSAP entrance animation
 */
export function ProjectsView() {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeType, setActiveType] = useState<ProjectType>("all");
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategoryType>("all");

  // Filter projects by active type and category
  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchType = activeType === "all" || p.type === activeType;
      const matchCategory =
        activeCategory === "all" || p.category === activeCategory;
      return matchType && matchCategory;
    });
  }, [activeType, activeCategory]);

  // GSAP entrance animation
  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.from(".project-animate-block", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="space-y-6 sm:space-y-8">
      {/* 1. Header & Filter Card */}
      <section className="project-animate-block rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 md:p-7 shadow-2xs transition-colors duration-200">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {lang === "id" ? "Proyek" : "Projects"}
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            {lang === "id"
              ? "Etalase proyek pribadi maupun sumber terbuka (open-source) yang telah saya bangun atau kontribusikan."
              : "Showcase of personal and open-source engineering projects I've built or contributed to."}
          </p>
        </div>

        {/* Subtle Dashed Divider */}
        <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-800 my-4 sm:my-5" />

        {/* Filters (Tipe & Kategori) */}
        <ProjectFilters
          activeType={activeType}
          onSelectType={setActiveType}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </section>

      {/* 2. Projects Grid (2 columns) */}
      <section className="project-animate-block">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 space-y-2">
            <Sparkles className="w-6 h-6 text-slate-400 mx-auto" />
            <p className="text-sm font-medium text-slate-500">
              {lang === "id"
                ? "Tidak ada proyek yang sesuai dengan filter ini."
                : "No projects match this filter."}
            </p>
          </div>
        )}
      </section>

      {/* 3. Footer */}
      <div className="project-animate-block">
        <FooterSection />
      </div>
    </div>
  );
}
