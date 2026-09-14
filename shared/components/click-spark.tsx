"use client";

import React, { useRef, useEffect, useCallback } from "react";

export interface ClickSparkProps {
  sparkColor?: string | string[];
  sparkColors?: string[];
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
  extraScale?: number;
  children?: React.ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
  color: string;
}

// Theme-aligned palettes matching brand colors (#689F99, #52837d, #88C0B9, #2D3342, #F5F8F9)
const DEFAULT_LIGHT_COLORS = ["#689F99", "#52837d", "#88C0B9", "#2D3342"];
const DEFAULT_DARK_COLORS = ["#689F99", "#88C0B9", "#AEE6DE", "#F5F8F9"];

export function ClickSpark({
  sparkColor,
  sparkColors,
  sparkSize = 12,
  sparkRadius = 26,
  sparkCount = 8,
  duration = 420,
  easing = "ease-out",
  extraScale = 1.0,
  children,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationIdRef = useRef<number | null>(null);

  // Normalize explicit color palette if passed as prop
  const explicitPalette = React.useMemo(() => {
    if (sparkColors && sparkColors.length > 0) return sparkColors;
    if (Array.isArray(sparkColor)) return sparkColor;
    if (typeof sparkColor === "string") return [sparkColor];
    return null;
  }, [sparkColor, sparkColors]);

  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case "linear":
          return t;
        case "ease-in":
          return t * t;
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  // Resize canvas to match window viewport with devicePixelRatio support
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Animation draw loop (only runs when sparks are active)
  const startAnimation = useCallback(() => {
    if (animationIdRef.current !== null) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = (timestamp: number) => {
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = spark.color;
        ctx.lineWidth = 2.4;
        ctx.lineCap = "round";
        const isDark =
          typeof document !== "undefined" &&
          document.documentElement.classList.contains("dark");
        ctx.shadowColor = isDark ? spark.color : "rgba(104, 159, 153, 0.45)";
        ctx.shadowBlur = isDark ? 6 : 3;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      if (sparksRef.current.length > 0) {
        animationIdRef.current = requestAnimationFrame(draw);
      } else {
        animationIdRef.current = null;
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      }
    };

    animationIdRef.current = requestAnimationFrame(draw);
  }, [duration, easeFunc, extraScale, sparkRadius, sparkSize]);

  // Global capture-phase click listener so ANY click in the entire website triggers sparks
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const now = performance.now();
      const isDark =
        typeof document !== "undefined" &&
        document.documentElement.classList.contains("dark");
      const palette =
        explicitPalette ??
        (isDark ? DEFAULT_DARK_COLORS : DEFAULT_LIGHT_COLORS);

      const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
        x,
        y,
        angle: (2 * Math.PI * i) / sparkCount,
        startTime: now,
        color: palette[i % palette.length],
      }));

      sparksRef.current.push(...newSparks);
      startAnimation();
    };

    window.addEventListener("click", handleGlobalClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleGlobalClick, { capture: true });
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [explicitPalette, sparkCount, startAnimation]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[100000] h-full w-full"
      />
      {children}
    </>
  );
}

export default ClickSpark;
