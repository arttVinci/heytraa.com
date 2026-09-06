import Link from "next/link";
import {
  User,
  Briefcase,
  Folder,
  Sparkles,
  ArrowRight,
  Wrench,
  Layers,
  Database,
} from "lucide-react";

export function QuickHighlights() {
  const hubs = [
    {
      title: "Cerita & Filosofi Rekayasa",
      href: "/about",
      badge: "The Story",
      icon: Wrench,
      description:
        "Bagaimana disiplin presisi maintenance elektrikal industri membentuk pola pikir zero-downtime dan root-cause analysis dalam kode.",
      cta: "Baca Kisah Transisi",
    },
    {
      title: "Riwayat Pengalaman & Karier",
      href: "/experience",
      badge: "Career Track",
      icon: Briefcase,
      description:
        "Rekam jejak kerja di PT Serta Kuliner Mandiri, workshop web di Gunadarma, proyek backend di PT Evermos, dan PT Akebono Astra.",
      cta: "Lihat Timeline Karier",
    },
    {
      title: "Karya Rekayasa & Portofolio",
      href: "/projects",
      badge: "Codebases",
      icon: Folder,
      description:
        "Eksplorasi mendalam: Fixora (Civic-Tech AI & Qdrant RAG), Portofy.net (AI SaaS di GCP Cloud Run), dan Evermos E-Commerce API.",
      cta: "Buka Galeri Proyek",
    },
    {
      title: "Katalog Jasa & Penawaran",
      href: "/services",
      badge: "Digital Services",
      icon: Sparkles,
      description:
        "Layanan pengembangan Full-Stack Web modern, high-performance Backend REST API dengan Golang, hingga solusi AI & RAG.",
      cta: "Konsultasi Layanan",
    },
  ];

  return (
    <section className="space-y-4">
      <div>
        <span className="text-[11px] font-bold tracking-wider text-[#0284c7] uppercase font-mono">
          NAVIGATION HUBS
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-1">
          Jelajahi Profil &amp; Karya Rekayasa
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Pilih topik untuk melihat detail mendalam per halaman tanpa tumpukan scroll panjang.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hubs.map((hub) => {
          const Icon = hub.icon;
          return (
            <Link
              key={hub.title}
              href={hub.href}
              className="group p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#e4f5fc] flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono group-hover:bg-[#e4f5fc] group-hover:text-[#0284c7] transition-colors">
                    {hub.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                  {hub.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed">
                  {hub.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0284c7]">
                <span>{hub.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
