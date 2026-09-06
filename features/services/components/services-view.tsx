import { serviceCategories } from "../data/services-data";
import { ServiceCard } from "./service-card";
import { ProcessWorkflow } from "./process-workflow";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesView() {
  return (
    <div className="space-y-8">
      {/* Header Card */}
      <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-6 sm:p-9 shadow-lg shadow-sky-900/5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e4f5fc] border border-sky-200/60 text-[#0284c7] text-[11px] font-semibold tracking-wide mb-4">
          <Sparkles className="w-3 h-3 text-[#0284c7]" />
          <span>Services &amp; Solusi Digital</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
          Layanan Pengembangan Sistem &amp;{" "}
          <span className="bg-gradient-to-r from-[#0284c7] to-[#38bdf8] bg-clip-text text-transparent">
            Digital Products
          </span>
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          Solusi rekayasa perangkat lunak profesional dengan arsitektur modular yang bersih, performa andal, serta integrasi teknologi modern untuk pertumbuhan produk dan bisnis Anda.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3.5 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7]" />
            Clean Code &amp; Modular
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7]" />
            Direct Communication
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7]" />
            Transparent Timeline &amp; Cost
          </span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {serviceCategories.map((srv) => (
          <ServiceCard key={srv.title} service={srv} />
        ))}
      </section>

      {/* Workflow Process */}
      <ProcessWorkflow />

      {/* Quick Consult Card */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-slate-900">
            Punya Kebutuhan Kustom atau Mau Diskusi Dulu?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            Tidak masalah jika kebutuhan proyek Anda belum memiliki spesifikasi lengkap. Kita bisa mulai dengan diskusi singkat mengenai problem dan solusi teknis yang paling efisien.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="https://wa.me/6289673302577?text=Halo%20Putra,%20saya%20ingin%20diskusi%20kebutuhan%20proyek%20kustom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-medium transition-colors shadow-sm shadow-sky-600/20"
          >
            <span>Chat via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Halaman Kontak</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
