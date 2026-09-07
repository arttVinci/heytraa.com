"use client";

import React from "react";

/**
 * Modern Architectural Grid Background
 * Replaces generic graph paper with a spacious, dashed CAD-style vector grid
 * featuring delicate micro-crosshairs (+) at intersections and smooth radial falloff.
 */
export function BackgroundGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-900/[0.08]"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 15%, black 50%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 15%, black 50%, transparent 95%)",
        }}
      >
        <defs>
          <pattern
            id="architectural-grid"
            width={48}
            height={48}
            patternUnits="userSpaceOnUse"
            x="50%"
            y={-1}
          >
            {/* Subtle dashed architectural grid lines */}
            <path
              d="M.5 48V.5H48"
              fill="none"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
            {/* Delicate crosshairs (+) at each grid intersection */}
            <path
              d="M-3.5 .5h7M.5 -3.5v7"
              fill="none"
              stroke="rgba(15, 23, 42, 0.16)"
              strokeWidth={1}
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#architectural-grid)"
        />
      </svg>
    </div>
  );
}
