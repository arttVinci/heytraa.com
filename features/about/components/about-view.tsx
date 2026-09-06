import { StoryNarrative } from "./story-narrative";
import { MindsetPillars } from "./mindset-pillars";
import { EducationList } from "./education-list";
import Link from "next/link";
import { Briefcase, Folder } from "lucide-react";

export function AboutView() {
  return (
    <div className="space-y-8">
      <StoryNarrative />
      <MindsetPillars />
      <EducationList />

      {/* Next Step Nav Banner */}
      <section className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Ingin Melihat Rekam Jejak Kerja &amp; Proyek?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Lihat riwayat karier profesional atau jelajahi repository kode nyata yang telah saya bangun.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-medium transition-colors shadow-sm shadow-sky-600/20"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Riwayat Karier</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors"
          >
            <Folder className="w-3.5 h-3.5" />
            <span>Karya Rekayasa</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
