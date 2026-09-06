import Link from "next/link";
import { Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-6 sm:p-10 shadow-lg shadow-sky-900/5">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e4f5fc] border border-sky-200/70 text-[#0284c7] text-[11px] font-semibold tracking-wide mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-pulse" />
        <span>Full Stack Developer • AI-Agent-Driven Workflow</span>
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-slate-900 leading-snug">
        Membangun Aplikasi Web dengan{" "}
        <span className="text-[#0284c7]">Clean Architecture</span> &amp;{" "}
        <span className="bg-gradient-to-r from-[#0284c7] to-[#38bdf8] bg-clip-text text-transparent">
          AI Integration.
        </span>
      </h1>

      <p className="mt-4 text-sm sm:text-[14.5px] text-slate-600 leading-relaxed max-w-2xl">
        Halo! Saya <span className="font-semibold text-slate-900">Putra Rizky Nugraha</span> — aspiring software engineer yang sedang bertransisi dari latar belakang maintenance elektrikal industri ke dunia pengembangan web. Sebagai <span className="font-medium text-slate-800">Full Stack Developer</span>, saya terbiasa membangun backend dengan <span className="font-medium text-slate-800">Golang (Clean Architecture &amp; Modular Monolith)</span>, merancang frontend dengan <span className="font-medium text-slate-800">Next.js &amp; TypeScript</span>, serta mengintegrasikan fitur AI seperti <span className="font-medium text-slate-800">RAG dengan Qdrant Vector DB</span> dan memanfaatkan <span className="font-medium text-slate-800">AI coding agents</span> untuk mempercepat alur kerja pengembangan.
      </p>

      {/* Page Navigation CTAs */}
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] hover:from-[#0369a1] hover:to-[#0284c7] text-white text-xs sm:text-sm font-medium transition-all shadow-sm shadow-sky-600/20 active:scale-[0.98]"
        >
          <span>Jelajahi Proyek</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#e4f5fc]/60 text-slate-700 hover:text-[#0284c7] text-xs sm:text-sm font-medium transition-colors border border-sky-100 shadow-2xs"
        >
          <span>Katalog Layanan Jasa</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#0284c7]" />
        </Link>

        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs sm:text-sm font-medium transition-colors border border-slate-200/80"
        >
          <span>Cerita &amp; Perjalanan</span>
        </Link>
      </div>

      {/* Quick Highlights */}
      <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-5">
        <div>
          <p className="text-xl sm:text-2xl font-bold text-[#0284c7]">Golang Backend</p>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Clean &amp; Modular Monolith</p>
        </div>
        <div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">Next.js &amp; React</p>
          <p className="text-xs text-slate-500 font-medium mt-0.5">TypeScript &amp; Tailwind</p>
        </div>
        <div>
          <p className="text-xl sm:text-2xl font-bold text-[#0284c7]">AI Integrated</p>
          <p className="text-xs text-slate-500 font-medium mt-0.5">RAG, Qdrant &amp; AI Agents</p>
        </div>
        <div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">Industrial Rigor</p>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Ketelitian &amp; Reliability</p>
        </div>
      </div>
    </section>
  );
}
