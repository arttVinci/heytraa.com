"use client";

import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/shared/components/icons";
import { useLanguage } from "@/shared/context/language-context";
import { contactData, SocialProfile } from "../data/contact-data";

const profileIcons = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
};

export function ContactProfiles() {
  const { lang } = useLanguage();
  const { directInfo, socialProfiles } = contactData;

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* 1. Direct Email Card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-6 shadow-sm transition-colors duration-300">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Email
            </span>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{lang === "id" ? "Aktif" : "Active"}</span>
            </div>
          </div>

          <a
            href={`mailto:${directInfo.email}`}
            className="group flex items-center justify-between gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-800 hover:border-[#689F99]/60 hover:shadow-xs transition-all duration-200"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-[#689F99]/10 border border-[#689F99]/20 flex items-center justify-center text-[#689F99] group-hover:scale-105 transition-transform shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold font-mono text-[#2D3342] dark:text-[#F5F8F9] group-hover:text-[#689F99] transition-colors truncate">
                {directInfo.email}
              </span>
            </div>

            <div className="p-1.5 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 group-hover:border-[#689F99] group-hover:text-[#689F99] transition-colors shrink-0">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>

      {/* 2. Professional Profiles List */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-6 shadow-sm transition-colors duration-300 space-y-3.5">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80">
          <h3 className="text-xs sm:text-sm font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            {lang === "id" ? "Profil Profesional" : "Professional Profiles"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {socialProfiles.map((profile: SocialProfile) => {
            const IconComponent = profileIcons[profile.iconName];

            return (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 hover:border-[#689F99]/60 hover:shadow-xs transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:text-[#689F99] transition-colors shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[#2D3342] dark:text-[#F5F8F9] group-hover:text-[#689F99] transition-colors truncate">
                      {profile.name}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-400 dark:text-slate-500 truncate">
                      {profile.handle}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#689F99] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
