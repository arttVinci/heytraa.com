"use client";

import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
  tag?: string;
  meta?: ReactNode;
}

export const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta = "Detail",
  tag,
  meta,
  children,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800",
      "bg-white/95 dark:bg-slate-900/90 backdrop-blur-md shadow-xs transition-all duration-300 min-h-[23rem]",
      "hover:border-[#689F99]/60 hover:shadow-xl hover:shadow-[#689F99]/10",
      className
    )}
    {...props}
  >
    {/* Background visual slot */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-transform duration-500 group-hover:scale-105">
      {background}
    </div>

    {/* Top Header Row with Icon & Optional Tag */}
    <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between gap-3">
      <div className="w-10 h-10 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm flex items-center justify-center text-[#689F99] shadow-2xs group-hover:border-[#689F99] transition-colors duration-200">
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
      </div>

      {tag && (
        <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#689F99] px-2 py-0.5 rounded-md bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-sm shadow-2xs">
          {tag}
        </span>
      )}
    </div>

    {/* Content & Metadata Slot */}
    <div className="relative z-10 p-5 sm:p-6 pt-0 space-y-3 mt-auto">
      {meta && <div>{meta}</div>}

      <div className="space-y-1.5 transition-transform duration-300 group-hover:-translate-y-1">
        <h3 className="text-base sm:text-lg font-bold text-[#2D3342] dark:text-[#F5F8F9] group-hover:text-[#689F99] transition-colors duration-200">
          {name}
        </h3>
        <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Action link if provided */}
      {href && (
        <div className="pt-1 flex items-center justify-between">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 hover:text-[#689F99] dark:text-slate-400 dark:hover:text-[#689F99] transition-colors"
          >
            <span>{cta}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      )}

      {children}
    </div>

    {/* Subtle gradient overlay to ensure text readability */}
    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-white via-white/70 to-transparent dark:from-slate-950 dark:via-slate-950/75 dark:to-transparent" />
  </div>
);
