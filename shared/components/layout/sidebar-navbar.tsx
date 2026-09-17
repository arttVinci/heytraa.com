"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Folder,
  Send,
  ChevronRight,
  MessageSquare,
  Menu,
  X,
  BadgeCheck,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/shared/components/icons";
import { cn } from "@/shared/lib/utils";
import { useLanguage } from "@/shared/context/language-context";
import { SidebarControls } from "./sidebar-controls";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

export function SidebarNavbar() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: lang === "id" ? "Beranda" : "Home", href: `/${lang}`, icon: Home },
    {
      label: lang === "id" ? "Tentang" : "About",
      href: `/${lang}/about`,
      icon: User,
    },
    {
      label: lang === "id" ? "Pengalaman" : "Experience",
      href: `/${lang}/experience`,
      icon: Briefcase,
    },
    {
      label: lang === "id" ? "Proyek" : "Projects",
      href: `/${lang}/projects`,
      icon: Folder,
    },
    {
      label: lang === "id" ? "Layanan" : "Services",
      href: `/${lang}/services`,
      icon: Sparkles,
    },
    {
      label: lang === "id" ? "Kontak" : "Contact",
      href: `/${lang}/contact`,
      icon: Send,
    },
  ];

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderNavContent = () => (
    <div className="flex flex-col items-center w-full">
      {/* Profile Avatar (Placeholder / Kosong) */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-[#F5F8F9] dark:bg-slate-800 border-2 border-dashed border-slate-300/90 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 shadow-inner transition-colors duration-200 hover:border-[#689F99] hover:bg-[#689F99]/10 hover:text-[#689F99]">
          <User className="w-10 h-10 stroke-[1.5]" />
        </div>
      </div>

      {/* Name & Handle */}
      <div className="flex flex-col items-center mt-3 text-center">
        <div className="flex items-center gap-1.5">
          <h2 className="text-base font-bold tracking-tight text-[#2D3342] dark:text-[#F5F8F9]">
            Putra Rizky
          </h2>
          <BadgeCheck className="w-4 h-4 text-[#689F99] fill-[#689F99] shrink-0" />
        </div>
        <span className="text-[11px] font-medium text-[#689F99] mt-0.5 font-mono">
          @traa_rzkyy
        </span>
      </div>

      {/* Sidebar Controls (Replaces old static tagline) */}
      <SidebarControls />

      {/* Divider */}
      <div className="w-full h-px bg-slate-100 dark:bg-slate-800/80 my-3.5" />

      {/* Nav Menu */}
      <nav className="flex flex-col w-full gap-1" aria-label="Main Navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isHome = item.href === `/${lang}`;
          const isActive = isHome
            ? pathname === `/${lang}` || pathname === `/${lang}/`
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className={cn(
                "group flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium transition-all duration-200",
                isActive
                  ? "bg-[#689F99] text-white shadow-sm shadow-[#689F99]/25 font-semibold"
                  : "text-[#2D3342]/80 dark:text-slate-300 hover:text-[#689F99] dark:hover:text-[#689F99] hover:bg-[#689F99]/10",
              )}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isActive
                      ? "text-white"
                      : "text-slate-400 dark:text-slate-500 group-hover:text-[#689F99]",
                  )}
                />
                <span>{item.label}</span>
              </div>
              <ChevronRight
                className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  isActive
                    ? "text-white/80 translate-x-0.5"
                    : "text-slate-300 dark:text-slate-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5",
                )}
              />
            </Link>
          );
        })}
      </nav>

      {/* CTA Button - Smart Talk with Muted Sage Teal Gradient */}
      <div className="w-full mt-4">
        <button
          type="button"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("open-assistant-chat"));
          }}
          className={cn(
            "relative w-full group overflow-hidden flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl",
            "bg-gradient-to-r from-[#689F99] to-[#52837d] text-white text-xs sm:text-[13px] font-semibold tracking-wide",
            "shadow-md shadow-[#689F99]/25 hover:shadow-lg hover:shadow-[#689F99]/40",
            "transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
          )}
        >
          {/* Subtle light shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          <MessageSquare className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform duration-200" />
          <span>Smart Talk</span>
          <Sparkles className="w-3 h-3 text-[#F5F8F9] ml-0.5 opacity-90" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-slate-100 dark:bg-slate-800/80 my-4" />

      {/* Social Links from CV */}
      <div className="flex items-center justify-center gap-3 my-1">
        <a
          href="https://github.com/arttVinci"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub @arttVinci"
          className="p-1.5 rounded-xl text-slate-400 hover:text-[#2D3342] dark:hover:text-white hover:bg-[#F5F8F9] dark:hover:bg-slate-800 transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/putra-rizky-nugraha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Putra Rizky Nugraha"
          className="p-1.5 rounded-xl text-slate-400 hover:text-[#689F99] hover:bg-[#689F99]/10 transition-colors"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Footer Copyright */}
      <footer className="w-full text-center mt-1">
        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-mono tracking-tight">
          &copy; 2025 Traa Rzkyy. All rights reserved.
        </p>
      </footer>
    </div>
  );

  return (
    <>
      {/* Mobile Top Header (Visible on < lg screens) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-[#689F99]/20 px-4 py-3 flex items-center justify-between shadow-xs transition-colors">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#F5F8F9] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400">
            <User className="w-4 h-4 stroke-[1.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-[#2D3342] dark:text-[#F5F8F9]">
                Putra Rizky
              </span>
              <BadgeCheck className="w-3.5 h-3.5 text-[#689F99] fill-[#689F99]" />
            </div>
            <span className="text-[10px] font-mono text-[#689F99]">
              @traa_rzkyy
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-[#689F99] hover:bg-[#689F99]/10 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </header>

      {/* Mobile Drawer Overlay & Content */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#2D3342]/40 dark:bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
          <div
            className="w-[300px] h-full bg-white dark:bg-slate-900 p-5 overflow-y-auto shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-[#2D3342] dark:hover:text-white hover:bg-[#F5F8F9] dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {renderNavContent()}
          </div>
        </div>
      )}

      {/* Desktop Sticky Sidebar (Visible on lg screens) */}
      <aside className="hidden lg:block w-[280px] shrink-0 self-stretch">
        <div className="sticky top-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-[#689F99]/20 rounded-3xl p-5 shadow-xl shadow-[#2D3342]/5 dark:shadow-black/40 max-h-[calc(100vh-4rem)] overflow-y-auto transition-colors">
          {renderNavContent()}
        </div>
      </aside>
    </>
  );
}
