import { experiences } from "../data/experience-data";
import { ExperienceItem } from "./experience-item";
import Link from "next/link";
import { Briefcase, ArrowRight, Folder, Sparkles } from "lucide-react";

export function ExperienceView() {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-8 sm:p-11 shadow-xl shadow-sky-900/5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e4f5fc] border border-sky-200/70 text-[#0284c7] text-xs font-semibold tracking-wide mb-5">
          <Briefcase className="w-3.5 h-3.5 text-[#0284c7]" />
          <span>Professional History &amp; Milestones</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Riwayat Pengalaman &amp;{" "}
          <span className="text-[#0284c7]">Jejak Rekayasa</span>
        </h1>

        <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-3xl">
          Pengalaman kerja komprehensif di sektor pemeliharaan sistem industri, pengajaran kurikulum pengembangan web, serta rekayasa backend berskala produksi dengan transaksi ACID dan kontainerisasi Docker.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="relative border-l-2 border-sky-100 pl-6 sm:pl-8 space-y-8 ml-2 sm:ml-4">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={exp.company} exp={exp} index={idx} />
        ))}
      </section>

      {/* Next Step Nav Banner */}
      <section className="p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Ingin Menguji Kode &amp; Arsitektur Proyek Saya?
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Lihat implementasi nyata dari Clean Architecture, RAG, dan AI Agent di halaman Projects.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-sky-600/20 shrink-0"
        >
          <Folder className="w-4 h-4" />
          <span>Buka Halaman Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
