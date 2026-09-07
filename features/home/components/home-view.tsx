import { HeroCard } from "./hero-card";
import { TechStackSection } from "./tech-stack-section";
import { QuickHighlights } from "./quick-highlights";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function HomeView() {
  return (
    <div className="space-y-8">
      {/* Hero Card */}
      <HeroCard />

      {/* Tech Stack with Logos */}
      <TechStackSection />

      {/* Navigation Hubs to Dedicated Pages */}
      <QuickHighlights />

      {/* Bridge Banner to Services */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#0f172a] text-white p-6 sm:p-9 shadow-lg shadow-sky-950/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-[11px] uppercase font-bold tracking-wider text-sky-200 flex items-center gap-1.5 font-mono">
            <Sparkles className="w-3 h-3" />
            <span>SOLUSI DIGITAL &amp; JASA</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
            Mencari Developer untuk Membangun Website, API, atau AI Chatbot?
          </h2>
          <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed">
            Tersedia layanan profesional untuk Full-Stack Web Development, Backend Golang berkinerja tinggi, dan integrasi AI cerdas dengan Vector DB (Qdrant).
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#e4f5fc] text-[#0284c7] text-xs sm:text-sm font-semibold shadow-md shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
        >
          <span>Buka Halaman Jasa</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}
