"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Eye,
  X,
  Calendar,
  CheckCircle2,
  Maximize2,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { useLanguage } from "@/shared/context/language-context";
import {
  simpleCertificationsData,
  type StructuredCertificationItem,
} from "../data/about-data";

/**
 * Section 4: Sertifikasi & Kredensial
 * Clean minimalistic card list with real certificate images,
 * preview lightbox modal, and verified credentials.
 */
export function SimpleCertificationsList() {
  const { lang } = useLanguage();
  const [selectedCert, setSelectedCert] =
    useState<StructuredCertificationItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 6;
  const visibleCertifications = showAll
    ? simpleCertificationsData
    : simpleCertificationsData.slice(0, INITIAL_COUNT);
  const remainingCount = simpleCertificationsData.length - INITIAL_COUNT;

  return (
    <section className="space-y-4 sm:space-y-5">
      {/* Section Header */}
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#689F99]" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
              {lang === "id" ? "Sertifikasi & Kredensial" : "Certifications & Credentials"}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">
            {lang === "id"
              ? `${simpleCertificationsData.length} sertifikasi keahlian teknis dan bootcamp yang tervalidasi.`
              : `${simpleCertificationsData.length} validated technical training and bootcamp credentials.`}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#689F99] dark:text-[#88C0B9] bg-[#689F99]/10 dark:bg-[#689F99]/15 px-3.5 py-1.5 rounded-full border border-[#689F99]/25 self-start font-medium">
          <CheckCircle2 className="w-4 h-4" />
          <span>
            {lang === "id"
              ? `${simpleCertificationsData.length} Kredensial Resmi`
              : `${simpleCertificationsData.length} Verified Records`}
          </span>
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {visibleCertifications.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-3.5 sm:p-4 shadow-2xs hover:border-[#689F99]/40 transition-all duration-200 group"
          >
            <div className="space-y-3.5">
              {/* Image Preview Thumbnail */}
              {cert.image && (
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 cursor-pointer select-none group/img shadow-2xs"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title[lang]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 ease-out group-hover/img:scale-[1.03]"
                  />
                  {/* Subtle Elegant Expand Icon on Top-Right */}
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-black/50 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xs">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* Header Info */}
              <div className="flex items-center justify-between gap-2 pt-0.5">
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-[#689F99]" />
                  <span>{cert.issuedDate || cert.year}</span>
                </div>

                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold text-[#689F99] dark:text-[#88C0B9] bg-[#689F99]/10 dark:bg-[#689F99]/15 border border-[#689F99]/25">
                  {cert.issuer}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#2D3342] dark:text-[#F5F8F9] leading-snug line-clamp-2">
                  {cert.title[lang]}
                </h3>
              </div>

              {/* ID Box */}
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs font-mono text-slate-600 dark:text-slate-300 truncate">
                <span className="text-slate-400 dark:text-slate-500 mr-1.5">ID:</span>
                {cert.credentialId}
              </div>
            </div>

            {/* Bottom action row */}
            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs sm:text-sm">
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-1.5 font-semibold text-[#689F99] hover:underline cursor-pointer select-none"
              >
                <Eye className="w-4 h-4" />
                <span>{lang === "id" ? "Pratinjau" : "Preview"}</span>
              </button>

              {cert.credentialUrl && cert.credentialUrl.startsWith("http") ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 font-semibold text-slate-500 dark:text-slate-400 hover:text-[#689F99] dark:hover:text-[#689F99] transition-colors"
                >
                  <span>{lang === "id" ? "Verifikasi" : "Verify"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#689F99]" />
                  <span>{cert.status[lang]}</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* See All / Show Less Toggle Button */}
      {simpleCertificationsData.length > INITIAL_COUNT && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#689F99] dark:hover:text-[#689F99] hover:border-[#689F99]/40 dark:hover:border-[#689F99]/40 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer select-none"
          >
            <span>
              {showAll
                ? lang === "id"
                  ? "Tampilkan lebih sedikit"
                  : "Show less"
                : lang === "id"
                  ? `Lihat semua sertifikat (+${remainingCount})`
                  : `See all certificates (+${remainingCount})`}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-[#689F99] transition-transform duration-300",
                showAll && "rotate-180"
              )}
            />
          </button>
        </div>
      )}

      {/* Certificate Modal Lightbox */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in-50 duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3.5">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-[#689F99] uppercase tracking-wider">
                  {selectedCert.issuer} • {selectedCert.issuedDate}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#2D3342] dark:text-[#F5F8F9] leading-snug">
                  {selectedCert.title[lang]}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Certificate High-Res Image Display */}
            {selectedCert.image && (
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title[lang]}
                  fill
                  sizes="(max-width: 1024px) 95vw, 800px"
                  className="object-contain"
                  priority
                />
              </div>
            )}

            {/* Modal Footer Info & Actions */}
            <div className="flex items-center justify-between flex-wrap gap-2 pt-1 text-xs sm:text-sm">
              <div className="font-mono text-slate-500 dark:text-slate-400">
                <span className="text-slate-400 dark:text-slate-500 mr-1">
                  Credential ID:
                </span>
                <span className="font-semibold text-[#2D3342] dark:text-[#F5F8F9]">
                  {selectedCert.credentialId}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#689F99] hover:bg-[#52837d] text-white font-semibold transition-colors shadow-xs text-xs sm:text-sm"
                  >
                    <span>
                      {selectedCert.credentialUrl.startsWith("http")
                        ? lang === "id"
                          ? "Buka Tautan Verifikasi"
                          : "Verify Online"
                        : lang === "id"
                          ? "Buka Gambar Penuh"
                          : "Open Full Image"}
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

