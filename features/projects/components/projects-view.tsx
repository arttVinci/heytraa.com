import { projects } from "../data/projects-data";
import { ProjectCard } from "./project-card";
import { ExternalLink, Folder, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectsView() {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-8 sm:p-11 shadow-xl shadow-sky-900/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e4f5fc] border border-sky-200/70 text-[#0284c7] text-xs font-semibold tracking-wide mb-5">
              <Folder className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Engineering Work &amp; Open Source</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Karya Rekayasa &amp;{" "}
              <span className="text-[#0284c7]">Production Systems</span>
            </h1>

            <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl">
              Bukan sekadar aplikasi demo CRUD sederhana; platform dengan pemisahan arsitektur bersih, pipeline data mandiri, transaksi database ACID, dan integrasi AI mutakhir.
            </p>
          </div>

          <a
            href="https://github.com/arttVinci"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors shadow-md shrink-0"
          >
            <span>Semua Repo di GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Projects Showcase List */}
      <section className="space-y-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </section>

      {/* Bridge to Services */}
      <section className="p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Ingin Membangun Solusi Seperti Ini untuk Bisnis Anda?
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Saya menerima proyek pengembangan aplikasi web, API backend kustom, dan sistem AI.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-sky-600/20 shrink-0"
        >
          <Sparkles className="w-4 h-4" />
          <span>Lihat Layanan Jasa</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
