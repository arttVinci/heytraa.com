"use client";

import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import type { RoughAnnotationType } from "rough-notation/lib/model";
import { cn } from "@/shared/lib/utils";

export interface HighlighterProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  action?: RoughAnnotationType;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number | [number, number] | [number, number, number, number];
  multiline?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd54f",
  strokeWidth = 2,
  animationDuration = 800,
  iterations = 2,
  padding = 2,
  multiline = true,
  className,
  ...props
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const annotation = annotate(el, {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    });

    annotation.show();

    return () => {
      annotation.remove();
    };
  }, [
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span
      ref={elementRef}
      className={cn("relative inline-block", className)}
      {...props}
    >
      {children}
    </span>
  );
}
