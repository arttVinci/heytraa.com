import { experiences } from "../data/experience-data";
import { ExperienceItem } from "./experience-item";
import Link from "next/link";
import { Briefcase, ArrowRight, Folder } from "lucide-react";

export function ExperienceView() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-6 sm:p-9 shadow-lg shadow-sky-900/5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e4f5fc] border border-sky-200/70 text-[#0284c7] text-[11px] font-semibold tracking-wide mb-4">
          <Briefcase className="w-3 h-3 text-[#0284c7]" />
          <span>Professional History &amp; Milestones</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
          Riwayat Pengalaman &amp;{" "}
          <span className="text-[#0284c7]">Jejak Rekayasa</span>
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          Pengalaman kerja komprehensif di sektor pemeliharaan sistem industri, pengajaran kurikulum pengembangan web, serta rekayasa backend berskala produksi dengan transaksi ACID dan kontainerisasi Docker.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="relative border-l-2 border-sky-100 pl-6 sm:pl-8 space-y-6 ml-2 sm:ml-4">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={exp.company} exp={exp} index={idx} />
        ))}
      </section>

      {/* Next Step Nav Banner */}
      <section className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Ingin Menguji Kode &amp; Arsitektur Proyek Saya?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Lihat implementasi nyata dari Clean Architecture, RAG, dan AI Agent di halaman Projects.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-medium transition-colors shadow-sm shadow-sky-600/20 shrink-0"
        >
          <Folder className="w-3.5 h-3.5" />
          <span>Buka Halaman Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}
