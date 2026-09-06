import { projects } from "../data/projects-data";
import { ProjectCard } from "./project-card";
import { ExternalLink, Folder, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectsView() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-6 sm:p-9 shadow-lg shadow-sky-900/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e4f5fc] border border-sky-200/70 text-[#0284c7] text-[11px] font-semibold tracking-wide mb-4">
              <Folder className="w-3 h-3 text-[#0284c7]" />
              <span>Engineering Work &amp; Open Source</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
              Karya Rekayasa &amp;{" "}
              <span className="text-[#0284c7]">Production Systems</span>
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Bukan sekadar aplikasi demo CRUD sederhana; platform dengan pemisahan arsitektur bersih, pipeline data mandiri, transaksi database ACID, dan integrasi AI mutakhir.
            </p>
          </div>

          <a
            href="https://github.com/arttVinci"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-colors shadow-sm shrink-0"
          >
            <span>Semua Repo di GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* Projects Showcase List */}
      <section className="space-y-5">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </section>

      {/* Bridge to Services */}
      <section className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Ingin Membangun Solusi Seperti Ini untuk Bisnis Anda?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Saya menerima proyek pengembangan aplikasi web, API backend kustom, dan sistem AI.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-medium transition-colors shadow-sm shadow-sky-600/20 shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Lihat Layanan Jasa</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}
