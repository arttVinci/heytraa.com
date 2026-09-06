"use client";

import { Mail, Zap, MapPin, Globe, MessageSquare, Sparkles } from "lucide-react";
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
    <div className="space-y-10">
      {/* Header Card */}
      <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-8 sm:p-12 shadow-xl shadow-sky-900/5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e4f5fc] border border-sky-200/60 text-[#0284c7] text-xs font-semibold tracking-wide mb-5">
          <Mail className="w-3.5 h-3.5 text-[#0284c7]" />
          <span>Get in Touch &amp; Collaboration</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
          Mari Terhubung &amp;{" "}
          <span className="bg-gradient-to-r from-[#0284c7] to-[#38bdf8] bg-clip-text text-transparent">
            Berkolaborasi
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          Saya selalu terbuka untuk peluang baru di bidang Software Engineering (Full-Stack &amp; Golang Backend), proyek pengembangan web kustom, maupun diskusi arsitektur sistem.
        </p>

        {/* Location Info */}
        <div className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-500">
          <MapPin className="w-4 h-4 text-[#0284c7]" />
          <span>Ujung Harapan, Bahagia, Babelan, Kab. Bekasi, Jawa Barat</span>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {contactMethods.map((cm) => {
          const Icon = cm.icon;
          return (
            <div
              key={cm.title}
              className="p-7 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#e4f5fc] flex items-center justify-center text-[#0284c7] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{cm.title}</h3>
                <p className="text-xs font-mono text-[#0284c7] font-semibold mt-0.5">
                  {cm.value}
                </p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {cm.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={cm.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#e4f5fc] text-slate-700 hover:text-[#0284c7] text-xs font-semibold transition-colors border border-slate-200/80 w-full"
                >
                  <span>{cm.cta}</span>
                </a>
              </div>
            </div>
          );
        })}
      </section>

      {/* Interactive AI Assistant Banner */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-white shadow-xl shadow-sky-600/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Powered Interactive Chat</span>
          </div>
          <h3 className="text-xl font-bold">
            Ingin Tanya Jawab Instan Tentang Pengalaman Saya?
          </h3>
          <p className="text-xs sm:text-sm text-sky-50/90 max-w-lg">
            Gunakan <strong>Assistant heytraa</strong> di pojok kanan bawah atau klik tombol Smart Talk di sidebar untuk berinteraksi langsung.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("open-assistant-chat"));
          }}
          className="px-6 py-3.5 rounded-2xl bg-white text-[#0284c7] text-xs sm:text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Buka Assistant heytraa</span>
        </button>
      </section>
    </div>
  );
}
