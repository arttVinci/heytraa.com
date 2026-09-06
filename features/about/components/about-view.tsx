import { StoryNarrative } from "./story-narrative";
import { MindsetPillars } from "./mindset-pillars";
import { EducationList } from "./education-list";
import Link from "next/link";
import { ArrowRight, Briefcase, Folder } from "lucide-react";

export function AboutView() {
  return (
    <div className="space-y-10">
      <StoryNarrative />
      <MindsetPillars />
      <EducationList />

      {/* Next Step Nav Banner */}
      <section className="p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Ingin Melihat Rekam Jejak Kerja &amp; Proyek?
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Lihat riwayat karier profesional atau jelajahi repository kode nyata yang telah saya bangun.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-sky-600/20"
          >
            <Briefcase className="w-4 h-4" />
            <span>Riwayat Karier</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors"
          >
            <Folder className="w-4 h-4" />
            <span>Karya Rekayasa</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
