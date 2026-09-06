"use client";

import { Mail, Zap, MapPin, MessageSquare, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/shared/components/icons";

export function ContactView() {
  const contactMethods = [
    {
      title: "Email",
      value: "traarzkyy97@gmail.com",
      href: "mailto:traarzkyy97@gmail.com",
      description: "Untuk diskusi kerja sama, freelance project, atau rekrutmen.",
      icon: Mail,
      cta: "Kirim Email",
    },
    {
      title: "WhatsApp",
      value: "+62 896-7330-2577",
      href: "https://wa.me/6289673302577?text=Halo%20Putra,%20saya%20ingin%20berdiskusi%20dengan%20Anda",
      description: "Fast response untuk diskusi cepat & konsultasi awal proyek.",
      icon: Zap,
      cta: "Chat WhatsApp",
    },
    {
      title: "LinkedIn",
      value: "putra-rizky-nugraha",
      href: "https://www.linkedin.com/in/putra-rizky-nugraha",
      description: "Koneksi profesional dan riwayat pengalaman karier.",
      icon: LinkedinIcon,
      cta: "Buka LinkedIn",
    },
    {
      title: "GitHub",
      value: "@arttVinci",
      href: "https://github.com/arttVinci",
      description: "Eksplorasi repository source code dan kontribusi open source.",
      icon: GithubIcon,
      cta: "Buka GitHub",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Card */}
      <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-6 sm:p-9 shadow-lg shadow-sky-900/5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e4f5fc] border border-sky-200/60 text-[#0284c7] text-[11px] font-semibold tracking-wide mb-4">
          <Mail className="w-3 h-3 text-[#0284c7]" />
          <span>Get in Touch &amp; Collaboration</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
          Mari Terhubung &amp;{" "}
          <span className="bg-gradient-to-r from-[#0284c7] to-[#38bdf8] bg-clip-text text-transparent">
            Berkolaborasi
          </span>
        </h1>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
          Saya terbuka untuk peluang baru sebagai Full Stack Developer, proyek pengembangan web, backend Golang, maupun diskusi seputar arsitektur aplikasi dan AI.
        </p>

        {/* Location Info */}
        <div className="mt-5 flex items-center gap-2 text-xs font-mono text-slate-500">
          <MapPin className="w-3.5 h-3.5 text-[#0284c7]" />
          <span>Ujung Harapan, Bahagia, Babelan, Kab. Bekasi, Jawa Barat</span>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactMethods.map((cm) => {
          const Icon = cm.icon;
          return (
            <div
              key={cm.title}
              className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3.5"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#e4f5fc] flex items-center justify-center text-[#0284c7] mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{cm.title}</h3>
                <p className="text-xs font-mono text-[#0284c7] font-semibold mt-0.5">
                  {cm.value}
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed">
                  {cm.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-100">
                <a
                  href={cm.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-[#e4f5fc] text-slate-700 hover:text-[#0284c7] text-xs font-medium transition-colors border border-slate-200/80 w-full"
                >
                  <span>{cm.cta}</span>
                </a>
              </div>
            </div>
          );
        })}
      </section>

      {/* Interactive AI Assistant Banner */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-white shadow-lg shadow-sky-600/20 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-[11px] font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>AI-Powered Interactive Chat</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold">
            Ingin Tanya Jawab Instan Tentang Pengalaman Saya?
          </h3>
          <p className="text-xs text-sky-50/90 max-w-lg">
            Gunakan <strong>Assistant heytraa</strong> di pojok kanan bawah atau klik tombol Smart Talk di sidebar untuk berinteraksi langsung.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("open-assistant-chat"));
          }}
          className="px-5 py-2.5 rounded-xl bg-white text-[#0284c7] text-xs sm:text-sm font-semibold shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shrink-0 flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Buka Assistant heytraa</span>
        </button>
      </section>
    </div>
  );
}
