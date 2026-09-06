import { HeroCard } from "./hero-card";
import { QuickHighlights } from "./quick-highlights";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export function HomeView() {
  return (
    <div className="space-y-10">
      {/* Hero Card */}
      <HeroCard />

      {/* Navigation Hubs to Dedicated Pages */}
      <QuickHighlights />

      {/* Bridge Banner to Services */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#0f172a] text-white p-8 sm:p-11 shadow-xl shadow-sky-950/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-200 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUSI DIGITAL &amp; JASA</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
            Mencari Developer untuk Membangun Website, API, atau AI Chatbot?
          </h2>
          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed">
            Tersedia layanan profesional untuk Full-Stack Web Development, Backend Golang berkinerja tinggi, dan integrasi AI cerdas dengan Vector DB (Qdrant).
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white hover:bg-[#e4f5fc] text-[#0284c7] text-sm font-bold shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-all duration-200 shrink-0"
        >
          <span>Buka Halaman Jasa</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
