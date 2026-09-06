import { serviceCategories } from "../data/services-data";
import { ServiceCard } from "./service-card";
import { ProcessWorkflow } from "./process-workflow";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesView() {
  return (
    <div className="space-y-10">
      {/* Header Card */}
      <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-8 sm:p-12 shadow-xl shadow-sky-900/5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e4f5fc] border border-sky-200/60 text-[#0284c7] text-xs font-semibold tracking-wide mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
          <span>Services &amp; Solusi Digital</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
          Layanan Pengembangan Sistem &amp;{" "}
          <span className="bg-gradient-to-r from-[#0284c7] to-[#38bdf8] bg-clip-text text-transparent">
            Digital Products
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          Solusi rekayasa perangkat lunak profesional dengan standar kualitas industri: arsitektur modular yang bersih, performa andal, serta integrasi teknologi modern untuk pertumbuhan produk dan bisnis Anda.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0284c7]" />
            Clean Code &amp; Modular
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0284c7]" />
            Direct Communication
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0284c7]" />
            Transparent Timeline &amp; Cost
          </span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serviceCategories.map((srv) => (
          <ServiceCard key={srv.title} service={srv} />
        ))}
      </section>

      {/* Workflow Process */}
      <ProcessWorkflow />

      {/* Quick Consult Card */}
      <section className="p-8 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900">
            Punya Kebutuhan Kustom atau Mau Diskusi Dulu?
          </h3>
          <p className="text-sm text-slate-500 max-w-xl">
            Tidak masalah jika kebutuhan proyek Anda belum memiliki spesifikasi lengkap. Kita bisa mulai dengan diskusi singkat mengenai problem dan solusi teknis yang paling efisien.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/6289673302577?text=Halo%20Putra,%20saya%20ingin%20diskusi%20kebutuhan%20proyek%20kustom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-sky-600/20"
          >
            <span>Chat via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Halaman Kontak</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
