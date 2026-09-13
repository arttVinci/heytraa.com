"use client";

import React from "react";
import { AnimatedGridPattern } from "@/shared/components/animated-grid-pattern";
import { cn } from "@/shared/lib/utils";

/**
 * Main Architectural Background
 * Uses Magic UI Animated Grid Pattern Demo style for the entire site background.
 */
export function BackgroundGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <AnimatedGridPattern
        numSquares={45}
        maxOpacity={0.12}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 fill-sky-500/25 stroke-slate-900/[0.08] dark:stroke-slate-100/[0.08] dark:fill-sky-400/20"
        )}
      />
    </div>
  );
}
