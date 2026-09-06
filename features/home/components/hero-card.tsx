import Link from "next/link";
import { Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-8 sm:p-12 shadow-xl shadow-sky-900/5">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e4f5fc] border border-sky-200/70 text-[#0284c7] text-xs font-semibold tracking-wide mb-6">
        <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
        <span>Full-Stack &amp; AI-Integrated Software Engineering</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
        Architecting Resilient Systems with{" "}
        <span className="text-[#0284c7]">Clean Code</span> &amp;{" "}
        <span className="bg-gradient-to-r from-[#0284c7] to-[#38bdf8] bg-clip-text text-transparent">
          AI Integration.
        </span>
      </h1>

      <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
        Halo! Saya <span className="font-bold text-slate-900">Putra Rizky Nugraha</span> — Software Engineer yang mentransformasikan ketelitian dan disiplin <span className="font-semibold text-slate-800">maintenance elektrikal industri</span> ke dalam rekayasa perangkat lunak modern. Berfokus pada backend tangguh dengan <span className="font-semibold text-slate-800">Golang (Clean Architecture &amp; Modular Monolith)</span>, antarmuka modern dengan <span className="font-semibold text-slate-800">Next.js &amp; TypeScript</span>, serta penerapan mutakhir <span className="font-semibold text-slate-800">AI / RAG &amp; Vector Database (Qdrant)</span>.
      </p>

      {/* Page Navigation CTAs */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] hover:from-[#0369a1] hover:to-[#0284c7] text-white text-sm font-semibold transition-all shadow-md shadow-sky-600/20 active:scale-[0.98]"
        >
          <span>Jelajahi Proyek Rekayasa</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#e4f5fc]/60 text-slate-700 hover:text-[#0284c7] text-sm font-semibold transition-colors border border-sky-100 shadow-xs"
        >
          <span>Katalog Layanan Jasa</span>
          <ArrowUpRight className="w-4 h-4 text-[#0284c7]" />
        </Link>

        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-medium transition-colors border border-slate-200/80"
        >
          <span>Cerita Perjalanan &amp; Mindset</span>
        </Link>
      </div>

      {/* Quick Metrics / Key Strengths */}
      <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#0284c7]">Clean &amp; Modular</p>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Architecture Principles</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">Golang (Fiber)</p>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">High-Throughput Backend</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#0284c7]">RAG &amp; Qdrant</p>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Vector DB &amp; Multi-Agent</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">Zero-Downtime</p>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Industrial Rigor &amp; Uptime</p>
        </div>
      </div>
    </section>
  );
}
