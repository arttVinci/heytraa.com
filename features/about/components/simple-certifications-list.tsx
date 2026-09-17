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
} from "lucide-react";
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

  return (
    <section className="space-y-4 sm:space-y-5">
      {/* Section Header */}
      <div className="flex items-start justify-between flex-wrap gap-2">
        <div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#689F99]" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
              {lang === "id" ? "Sertifikasi & Kredensial" : "Certifications & Credentials"}
            </h2>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 mt-1">
            {lang === "id"
              ? `${simpleCertificationsData.length} sertifikasi keahlian teknis dan bootcamp yang tervalidasi.`
              : `${simpleCertificationsData.length} validated technical training and bootcamp credentials.`}
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#689F99] dark:text-[#88C0B9] bg-[#689F99]/10 dark:bg-[#689F99]/15 px-3 py-1 rounded-full border border-[#689F99]/25 self-start font-medium">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>
            {lang === "id"
              ? `${simpleCertificationsData.length} Kredensial Resmi`
              : `${simpleCertificationsData.length} Verified Records`}
          </span>
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {simpleCertificationsData.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-4 sm:p-5 shadow-2xs hover:border-[#689F99]/40 transition-all duration-200 group"
          >
            <div className="space-y-3">
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
                    className="object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#2D3342]/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-white text-xs font-semibold backdrop-blur-[2px]">
                    <Eye className="w-4 h-4" />
                    <span>{lang === "id" ? "Lihat Sertifikat" : "Preview"}</span>
                  </div>
                </div>
              )}

              {/* Header Info */}
              <div className="flex items-center justify-between gap-2 pt-0.5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3 h-3 text-[#689F99]" />
                  <span>{cert.issuedDate || cert.year}</span>
                </div>

                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold text-[#689F99] dark:text-[#88C0B9] bg-[#689F99]/10 dark:bg-[#689F99]/15 border border-[#689F99]/25">
                  {cert.issuer}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-xs sm:text-[13.5px] font-bold text-[#2D3342] dark:text-[#F5F8F9] leading-snug line-clamp-2">
                  {cert.title[lang]}
                </h3>
              </div>

              {/* ID Box */}
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-[10.5px] font-mono text-slate-600 dark:text-slate-300 truncate">
                <span className="text-slate-400 dark:text-slate-500 mr-1.5">ID:</span>
                {cert.credentialId}
              </div>
            </div>

            {/* Bottom action row */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-1 font-semibold text-[#689F99] hover:underline cursor-pointer select-none"
              >
                <Eye className="w-3.5 h-3.5" />
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
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#689F99]" />
                  <span>{cert.status[lang]}</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

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
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-semibold text-[#689F99] uppercase tracking-wider">
                  {selectedCert.issuer} • {selectedCert.issuedDate}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#2D3342] dark:text-[#F5F8F9] leading-snug">
                  {selectedCert.title[lang]}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
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
            <div className="flex items-center justify-between flex-wrap gap-2 pt-1 text-xs">
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#689F99] hover:bg-[#52837d] text-white font-semibold transition-colors shadow-xs"
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
                    <ExternalLink className="w-3.5 h-3.5" />
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

