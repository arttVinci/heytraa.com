"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Award,
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

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "Services", href: "/services", icon: Sparkles },
  { label: "Contact", href: "/contact", icon: Send },
];

export function SidebarNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-dashed border-slate-300/90 flex items-center justify-center text-slate-400 shadow-inner transition-colors duration-200 hover:border-[#0284c7] hover:bg-[#e4f5fc]/40 hover:text-[#0284c7]">
          <User className="w-10 h-10 stroke-[1.5]" />
        </div>
      </div>

      {/* Name & Handle */}
      <div className="flex flex-col items-center mt-3 text-center">
        <div className="flex items-center gap-1.5">
          <h2 className="text-base font-bold tracking-tight text-slate-900">
            Putra Rizky
          </h2>
          <BadgeCheck className="w-4 h-4 text-[#0284c7] fill-[#0284c7] shrink-0" />
        </div>
        <span className="text-[11px] font-medium text-[#0284c7]/80 mt-0.5 font-mono">
          @traa_rzkyy
        </span>
      </div>

      {/* Bio / Tagline */}
      <p className="text-[11px] text-slate-500 font-mono tracking-tight text-center mt-1.5 px-2 leading-relaxed">
        Full Stack Dev &nbsp;|&nbsp; Golang &amp; Next.js &nbsp;|&nbsp; AI / RAG
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-slate-100 my-3.5" />

      {/* Nav Menu */}
      <nav className="flex flex-col w-full gap-1" aria-label="Main Navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className={cn(
                "group flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white shadow-sm shadow-sky-500/25 font-semibold"
                  : "text-slate-600 hover:text-[#0284c7] hover:bg-[#e4f5fc]/70",
              )}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110",
                    isActive
                      ? "text-white"
                      : "text-slate-400 group-hover:text-[#0284c7]",
                  )}
                />
                <span>{item.label}</span>
              </div>

              {isActive && (
                <ChevronRight className="w-3.5 h-3.5 text-white/90 animate-in fade-in slide-in-from-left-1 duration-200" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* CTA Button - Smart Talk with JelajahKode Vibrant Blue Gradient */}
      <div className="w-full mt-4">
        <button
          type="button"
          onClick={() => {
            window.dispatchEvent(new CustomEvent("open-assistant-chat"));
          }}
          className={cn(
            "relative w-full group overflow-hidden flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl",
            "bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-white text-xs sm:text-[13px] font-semibold tracking-wide",
            "shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/40",
            "transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
          )}
        >
          {/* Subtle light shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          <MessageSquare className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform duration-200" />
          <span>Smart Talk</span>
          <Sparkles className="w-3 h-3 text-sky-100 ml-0.5 opacity-90" />
        </button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-slate-100 my-4" />

      {/* Social Links from CV */}
      <div className="flex items-center justify-center gap-3 my-1">
        <a
          href="https://github.com/arttVinci"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub @arttVinci"
          className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/putra-rizky-nugraha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Putra Rizky Nugraha"
          className="p-1.5 rounded-xl text-slate-400 hover:text-[#0284c7] hover:bg-[#e4f5fc] transition-colors"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Footer Copyright */}
      <footer className="w-full text-center mt-1">
        <p className="text-[11px] text-slate-400 font-mono tracking-tight">
          &copy; 2025 Traa Rzkyy. All rights reserved.
        </p>
      </footer>
    </div>
  );

  return (
    <>
      {/* Mobile Top Header (Visible on < lg screens) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-sky-100 px-4 py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
            <User className="w-4 h-4 stroke-[1.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-slate-900">
                Putra Rizky
              </span>
              <BadgeCheck className="w-3.5 h-3.5 text-[#0284c7] fill-[#0284c7]" />
            </div>
            <span className="text-[10px] font-mono text-[#0284c7]/80">
              @traa_rzkyy
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="p-2 rounded-xl text-slate-600 hover:text-[#0284c7] hover:bg-[#e4f5fc] transition-colors"
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
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
          <div
            className="w-[300px] h-full bg-white p-5 overflow-y-auto shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
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
        <div className="sticky top-8 bg-white/95 backdrop-blur-md border border-sky-100/90 rounded-3xl p-5 shadow-xl shadow-sky-900/5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {renderNavContent()}
        </div>
      </aside>
    </>
  );
}
