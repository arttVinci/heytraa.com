"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  X,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  LogIn,
  Briefcase,
  UserCheck,
} from "lucide-react";
import { useLanguage } from "@/shared/context/language-context";
import { ServiceTestimonial } from "../data/services-data";
import { cn } from "@/shared/lib/utils";

interface AddFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTestimonial: (item: ServiceTestimonial) => void;
}

export function AddFeedbackModal({
  isOpen,
  onClose,
  onAddTestimonial,
}: AddFeedbackModalProps) {
  const { lang } = useLanguage();

  // =========================================================================
  // AUTH & TRANSACTION ELIGIBILITY STATE
  // Logic ini nantinya disambungkan dengan sistem autentikasi / session user
  // dan pengecekan apakah user memiliki transaksi jasa yang valid di database.
  // =========================================================================
  const [isClientEligible, setIsClientEligible] = useState(false);

  // Review Form State: Cukup Nama, Role, dan Isi Komen
  const [authorName, setAuthorName] = useState("");
  const [authorRole, setAuthorRole] = useState("");
  const [quoteText, setQuoteText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !quoteText.trim()) return;

    // Generate inisial dari nama
    const initials = authorName
      .trim()
      .split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

    const newFeedback: ServiceTestimonial = {
      id: `client-review-${Date.now()}`,
      author: authorName.trim(),
      role: {
        id: authorRole.trim() || "Fullstack Dev",
        en: authorRole.trim() || "Fullstack Dev",
      },
      quote: {
        id: quoteText.trim(),
        en: quoteText.trim(),
      },
      context: {
        id: "Proyek Kolaborasi",
        en: "Project Collaboration",
      },
      tag: {
        id: "Feedback",
        en: "Feedback",
      },
      stars: 5,
      initials: initials || "PR",
      accentBg: "bg-teal-100 dark:bg-teal-950/60",
      accentText: "text-teal-700 dark:text-teal-300",
    };

    onAddTestimonial(newFeedback);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsClientEligible(false);
    setAuthorName("");
    setAuthorRole("");
    setQuoteText("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl shadow-[#2D3342]/10 dark:shadow-black/60 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800/80 flex items-start justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#689F99]/10 text-[#689F99] border border-[#689F99]/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>
                {lang === "id"
                  ? "Ulasan Klien Terverifikasi"
                  : "Verified Client Reviews"}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
              {lang === "id"
                ? "Tulis Ulasan Kolaborasi"
                : "Leave Client Feedback"}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {/* STEP 1: SUCCESS STATE */}
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 animate-in zoom-in-50 duration-300">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base sm:text-lg font-bold text-[#2D3342] dark:text-[#F5F8F9]">
                  {lang === "id"
                    ? "Ulasan Berhasil Ditambahkan!"
                    : "Feedback Successfully Submitted!"}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                  {lang === "id"
                    ? "Terima kasih atas kerja sama dan kepercayaannya! Ulasan Anda sekarang langsung tampil di stream feedback."
                    : "Thank you for your trust and collaboration! Your review is now live in the feedback carousel."}
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-full bg-[#689F99] hover:bg-[#52837d] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                >
                  {lang === "id" ? "Selesai & Tutup" : "Done & Close"}
                </button>
              </div>
            </div>
          ) : !isClientEligible ? (
            /* STEP 2: PERINGATAN HARUS LOGIN & PERNAH BERTRANSAKSI */
            <div className="space-y-5">
              {/* Primary Notice Card */}
              <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/60 border border-amber-300 dark:border-amber-700/60 flex items-center justify-center text-amber-700 dark:text-amber-300 shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-950 dark:text-amber-200">
                      {lang === "id"
                        ? "Wajib Login & Pernah Bertransaksi"
                        : "Login & Completed Transaction Required"}
                    </h4>
                    <p className="text-xs text-amber-800/90 dark:text-amber-300/90 mt-0.5">
                      {lang === "id"
                        ? "Khusus klien yang telah menggunakan jasa kami"
                        : "Exclusively for clients who have used our services"}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
                  {lang === "id"
                    ? "Untuk menjaga keaslian dan integritas feedback kolaborasi, Anda harus login ke akun dan memiliki riwayat transaksi/proyek yang telah selesai di jasa kami sebelum dapat menulis ulasan."
                    : "To preserve review authenticity and trust, you must be logged into an account with at least one completed service transaction before writing a review."}
                </p>

                {/* Requirement Checklist */}
                <div className="pt-1 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-amber-900/90 dark:text-amber-200/90">
                    <div className="w-4 h-4 rounded-full bg-amber-200/80 dark:bg-amber-900 flex items-center justify-center text-[10px] font-bold">
                      1
                    </div>
                    <span>
                      {lang === "id"
                        ? "Login ke akun klien terdaftar"
                        : "Log in with a registered client account"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-900/90 dark:text-amber-200/90">
                    <div className="w-4 h-4 rounded-full bg-amber-200/80 dark:bg-amber-900 flex items-center justify-center text-[10px] font-bold">
                      2
                    </div>
                    <span>
                      {lang === "id"
                        ? "Memiliki minimal 1 transaksi jasa atau proyek yang selesai"
                        : "Have at least one completed project or service transaction"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                {/* Login Button (Placeholder hook untuk logic auth Anda nanti) */}
                <button
                  type="button"
                  onClick={() => {
                    // TODO: Ganti dengan alur login sistem Anda
                    // misal: router.push('/login') atau trigger modal auth
                    alert(
                      lang === "id"
                        ? "Hubungkan dengan sistem login / auth Anda di sini."
                        : "Connect with your login / auth system here."
                    );
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#1e293b] hover:bg-[#0f172a] dark:bg-[#f8fafc] dark:hover:bg-white text-white dark:text-[#0f172a] text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>
                    {lang === "id"
                      ? "Masuk ke Akun Klien"
                      : "Log In to Client Account"}
                  </span>
                </button>

                {/* Belum pernah pakai jasa? Mulai Proyek */}
                <Link
                  href={`/${lang}/contact`}
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:border-[#689F99]/60 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-[#689F99] transition-all"
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#689F99]" />
                  <span>
                    {lang === "id"
                      ? "Belum Bertransaksi? Mulai Proyek Baru"
                      : "Haven't Transacted? Start a Project"}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>
            </div>
          ) : (
            /* STEP 3: FORM ULASAN SETELAH LOGIN & TERVERIFIKASI TRANSAKSI */
            <form onSubmit={handleSubmitReview} className="space-y-4">
              {/* Status Header: Verified Client */}
              <div className="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/50 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-semibold">
                    {lang === "id"
                      ? "Status: Klien Terverifikasi (Pernah Bertransaksi)"
                      : "Status: Verified Client (Completed Transaction)"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsClientEligible(false)}
                  className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80 hover:underline shrink-0"
                >
                  {lang === "id" ? "Ganti Sesi" : "Switch"}
                </button>
              </div>

              {/* 1. Author Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {lang === "id" ? "Nama Lengkap" : "Full Name"}
                </label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder={
                    lang === "id" ? "Contoh: Putra Rizky" : "e.g., Putra Rizky"
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-[#689F99]"
                />
              </div>

              {/* 2. Author Role */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {lang === "id" ? "Role / Posisi" : "Role / Position"}
                </label>
                <input
                  type="text"
                  required
                  value={authorRole}
                  onChange={(e) => setAuthorRole(e.target.value)}
                  placeholder={
                    lang === "id"
                      ? "Contoh: Fullstack Dev"
                      : "e.g., Fullstack Dev"
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-[#689F99]"
                />
              </div>

              {/* 3. Comment Body */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {lang === "id" ? "Isi Komentar" : "Your Comment"}
                </label>
                <textarea
                  required
                  rows={3}
                  value={quoteText}
                  onChange={(e) => setQuoteText(e.target.value)}
                  placeholder={
                    lang === "id"
                      ? "Tulis komentar atau pengalaman kerja sama..."
                      : "Write your comment or feedback..."
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-[#689F99] resize-none"
                />
              </div>

              {/* Submit Review Button */}
              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsClientEligible(false)}
                  className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {lang === "id" ? "Kembali" : "Back"}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#689F99] hover:bg-[#52837d] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {lang === "id" ? "Publikasikan Ulasan" : "Publish Review"}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
