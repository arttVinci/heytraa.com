"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const iconTileVariants = cva(
  "inline-flex items-center justify-center shrink-0 transition-all duration-200 select-none",
  {
    variants: {
      variant: {
        outline:
          "border border-slate-200/80 dark:border-slate-800 bg-transparent text-slate-700 dark:text-slate-200",
        elevated:
          "border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800 text-[#689F99] shadow-xs",
        soft: "border border-[#689F99]/20 bg-[#689F99]/10 text-[#689F99] dark:border-[#689F99]/25 dark:bg-[#689F99]/15",
        solid: "bg-[#689F99] text-white shadow-xs",
        frame:
          "border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-[#689F99]",
      },
      size: {
        xs: "w-6 h-6 rounded-md text-xs [&_svg]:w-3.5 [&_svg]:h-3.5",
        sm: "w-8 h-8 rounded-lg text-sm [&_svg]:w-4 [&_svg]:h-4",
        default: "w-10 h-10 rounded-xl text-base [&_svg]:w-5 [&_svg]:h-5",
        lg: "w-12 h-12 rounded-2xl text-lg [&_svg]:w-6 [&_svg]:h-6",
        xl: "w-14 h-14 rounded-2xl text-xl [&_svg]:w-7 [&_svg]:h-7",
      },
    },
    defaultVariants: {
      variant: "soft",
      size: "default",
    },
  }
);

export interface IconTileProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof iconTileVariants> {
  children?: React.ReactNode;
}

export function IconTile({
  className,
  variant,
  size,
  children,
  ...props
}: IconTileProps) {
  return (
    <span
      className={cn(iconTileVariants({ variant, size, className }))}
      data-slot="icon-tile"
      {...props}
    >
      {children}
    </span>
  );
}
