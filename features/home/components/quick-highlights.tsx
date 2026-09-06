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
        "Bagaimana disiplin presisi maintenance elektrikal di sektor manufaktur membentuk pola pikir zero-downtime dan root-cause analysis dalam menulis kode.",
      cta: "Baca Kisah Transisi",
    },
    {
      title: "Riwayat Pengalaman & Karier",
      href: "/experience",
      badge: "Career Track",
      icon: Briefcase,
      description:
        "Rekam jejak kerja di PT Serta Kuliner Mandiri, fasilitator workshop web di Gunadarma, proyek backend di PT Evermos, dan PT Akebono Brake Astra.",
      cta: "Lihat Timeline Karier",
    },
    {
      title: "Karya Rekayasa & Portofolio",
      href: "/projects",
      badge: "Codebases",
      icon: Folder,
      description:
        "Eksplorasi mendalam proyek nyata: Fixora (Civic-Tech AI & Qdrant RAG), Portofy.net (AI SaaS di Google Cloud Run), dan Evermos E-Commerce API.",
      cta: "Buka Galeri Proyek",
    },
    {
      title: "Katalog Jasa & Penawaran",
      href: "/services",
      badge: "Digital Services",
      icon: Sparkles,
      description:
        "Layanan pengembangan Full-Stack Web modern, high-performance Backend REST API dengan Golang, hingga solusi sistem berbasis AI & RAG.",
      cta: "Konsultasi Layanan",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold tracking-widest text-[#0284c7] uppercase font-mono">
            NAVIGATION HUBS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Jelajahi Profil &amp; Karya Rekayasa
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-1">
            Pilih topik untuk melihat detail mendalam per halaman tanpa tumpukan scroll panjang.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {hubs.map((hub) => {
          const Icon = hub.icon;
          return (
            <Link
              key={hub.title}
              href={hub.href}
              className="group p-7 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#e4f5fc] flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 font-mono group-hover:bg-[#e4f5fc] group-hover:text-[#0284c7] transition-colors">
                    {hub.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                  {hub.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {hub.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284c7]">
                <span>{hub.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
