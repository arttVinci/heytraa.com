"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Mail,
  AlertCircle,
  ExternalLink,
  User,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";
import { contactData } from "../data/contact-data";

export function ContactForm() {
  const { lang } = useLanguage();
  const { directInfo } = contactData;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage(
        lang === "id"
          ? "Mohon lengkapi semua kolom."
          : "Please fill in all fields."
      );
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage(
        lang === "id"
          ? "Format alamat email tidak valid."
          : "Please enter a valid email address."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate submission delay
      await new Promise((resolve) => setTimeout(resolve, 600));

      // Construct mailto URL as client fallback
      const subject = encodeURIComponent(`Project Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Hi Putra,\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}\n\nSalam,\n${name}`
      );
      const mailtoUrl = `mailto:${directInfo.email}?subject=${subject}&body=${body}`;

      if (typeof window !== "undefined") {
        const link = document.createElement("a");
        link.href = mailtoUrl;
        link.click();
      }

      setIsSuccess(true);
    } catch {
      setErrorMessage(
        lang === "id"
          ? "Gagal mengirim pesan. Silakan coba kirim email langsung."
          : "Failed to send message. Please email directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSuccess(false);
    setErrorMessage("");
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-7 md:p-8 shadow-sm transition-colors duration-300">
      {/* Decorative Corner Glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#689F99]/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 space-y-5">
        <div className="border-b border-slate-100 dark:border-slate-800/80 pb-4 flex items-center gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0">
            <Send className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
              {lang === "id" ? "Kirimkan Pesan" : "Send Me a Message"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === "id"
                ? "Saya akan membalas pesan Anda dalam 24 jam."
                : "I'll get back to you within 24 hours."}
            </p>
          </div>
        </div>

        {isSuccess ? (
          /* SUCCESS STATE */
          <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1 max-w-md mx-auto">
              <h3 className="text-base sm:text-lg font-bold text-[#2D3342] dark:text-[#F5F8F9]">
                {lang === "id" ? "Pesan Siap Terkirim!" : "Message Ready!"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {lang === "id"
                  ? "Draf pesan telah disiapkan di aplikasi email Anda."
                  : "Draft message has been prepared in your email client."}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={`mailto:${directInfo.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#689F99]" />
                <span>{directInfo.email}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-[#689F99] hover:bg-[#52837d] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>{lang === "id" ? "Kirim Pesan Lain" : "Send Another"}</span>
              </button>
            </div>
          </div>
        ) : (
          /* FORM BODY */
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Row 1: Nama & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Nama */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  <User className="w-3.5 h-3.5 text-[#689F99]" />
                  <span>{lang === "id" ? "Nama" : "Name"}</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === "id" ? "Nama Anda" : "Your Name"}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#689F99] focus:bg-white dark:focus:bg-slate-800 focus:ring-1 focus:ring-[#689F99] transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  <Mail className="w-3.5 h-3.5 text-[#689F99]" />
                  <span>Email</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    lang === "id"
                      ? "Alamat Email (email@domain.com)"
                      : "Email Address (name@domain.com)"
                  }
                  className="w-full px-4 py-2.5 sm:py-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#689F99] focus:bg-white dark:focus:bg-slate-800 focus:ring-1 focus:ring-[#689F99] transition-all"
                />
              </div>
            </div>

            {/* Row 2: Deskripsi */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#689F99]" />
                <span>{lang === "id" ? "Deskripsi" : "Description"}</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  lang === "id"
                    ? "Ceritakan tentang proyek, kebutuhan jasa, atau rencana kerja sama Anda..."
                    : "Tell me about your project, service needs, or collaboration..."
                }
                className="w-full px-4 py-2.5 sm:py-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#689F99] focus:bg-white dark:focus:bg-slate-800 focus:ring-1 focus:ring-[#689F99] transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e293b] hover:bg-[#0f172a] dark:bg-[#f8fafc] dark:hover:bg-white text-white dark:text-[#0f172a] text-xs sm:text-sm font-semibold tracking-tight shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer disabled:opacity-50 active:scale-95"
              >
                {isSubmitting ? (
                  <span>
                    {lang === "id" ? "Menyiapkan..." : "Sending..."}
                  </span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === "id" ? "Kirim Pesan" : "Send Message"}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
