"use client";

import React, { forwardRef, useRef } from "react";
import Link from "next/link";
import {
  FolderGit2,
  Briefcase,
  Sparkles,
  Cpu,
  ArrowRight,
  Database,
  Cloud,
  Layers,
  CheckCircle2,
  Terminal,
  Activity,
  Globe,
  Server,
  Code2,
  Wrench,
  GraduationCap,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedBeam } from "@/components/ui/animated-beam";

// ============================================================================
// 1. PROJECT CODEBASE MARQUEE & TERMINAL INSPECTOR
// ============================================================================
const techStackPills = [
  { name: "Qdrant Vector DB", role: "RAG Embeddings" },
  { name: "GCP Cloud Run", role: "Serverless Container" },
  { name: "Golang Fiber", role: "Clean Architecture" },
  { name: "Next.js 16", role: "React 19 & Turbopack" },
  { name: "Tailwind CSS v4", role: "Design System" },
  { name: "Docker", role: "OCI Multi-Stage" },
  { name: "MySQL / ACID", role: "Relational Indexing" },
  { name: "Model Context Protocol", role: "Agent Tools" },
];

function CodebaseInspectorDemo() {
  return (
    <div className="absolute inset-0 p-3.5 flex flex-col justify-between">
      {/* Mock IDE / Terminal Status Bar */}
      <div className="group/terminal rounded-xl border border-slate-200/80 bg-slate-900 text-slate-200 p-3 font-mono text-[11px] shadow-sm transition-all duration-300 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 hover:bg-slate-950">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 transition-transform duration-200 group-hover/terminal:scale-125" />
            <span className="w-2 h-2 rounded-full bg-amber-500 transition-transform duration-200 group-hover/terminal:scale-125" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 transition-transform duration-200 group-hover/terminal:scale-125" />
            <span className="ml-1 text-slate-400 group-hover/terminal:text-slate-300 transition-colors">traa-cluster // prod</span>
          </div>
          <span className="text-emerald-400 font-bold flex items-center gap-1 group-hover/terminal:text-emerald-300 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ONLINE
          </span>
        </div>

        <div className="mt-2 space-y-1 text-[10px]">
          <div className="flex items-center justify-between px-1.5 py-0.5 -mx-1 rounded transition-all duration-200 hover:bg-slate-800/90 hover:translate-x-1 cursor-pointer group/row">
            <span className="text-sky-400 font-semibold group-hover/row:text-sky-300 transition-colors">✔ Fixora RAG</span>
            <span className="text-slate-400 font-mono text-[9px] group-hover/row:text-slate-200 transition-colors">0.984 Sim · 14ms</span>
          </div>
          <div className="flex items-center justify-between px-1.5 py-0.5 -mx-1 rounded transition-all duration-200 hover:bg-slate-800/90 hover:translate-x-1 cursor-pointer group/row">
            <span className="text-emerald-400 font-semibold group-hover/row:text-emerald-300 transition-colors">✔ Portofy.net</span>
            <span className="text-slate-400 font-mono text-[9px] group-hover/row:text-slate-200 transition-colors">GCP Cloud Run · 200 OK</span>
          </div>
          <div className="flex items-center justify-between px-1.5 py-0.5 -mx-1 rounded transition-all duration-200 hover:bg-slate-800/90 hover:translate-x-1 cursor-pointer group/row">
            <span className="text-amber-400 font-semibold group-hover/row:text-amber-300 transition-colors">✔ Evermos API</span>
            <span className="text-slate-400 font-mono text-[9px] group-hover/row:text-slate-200 transition-colors">Go Fiber · 10k rps</span>
          </div>
        </div>
      </div>

      {/* Marquee of Tech Badges */}
      <div className="mt-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <Marquee pauseOnHover className="[--duration:24s]">
          {techStackPills.map((pill, idx) => (
            <div
              key={idx}
              className="group/pill flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100/90 border border-slate-200 text-[10px] font-mono text-slate-700 whitespace-nowrap shadow-2xs transition-all duration-200 hover:scale-105 hover:bg-white hover:border-sky-400 hover:text-sky-700 hover:shadow-xs cursor-pointer select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] transition-transform duration-200 group-hover/pill:scale-150" />
              <span className="font-bold">{pill.name}</span>
              <span className="text-slate-400 text-[9px] group-hover/pill:text-slate-600 transition-colors">({pill.role})</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

// ============================================================================
// 2. VERIFIED CAREER STREAM FOR ANIMATED LIST
// ============================================================================
const careerMilestones = [
  {
    company: "PT Serta Kuliner Mandiri",
    role: "Full-Stack Web Developer",
    period: "2024 — Sekarang",
    tag: "Next.js 16 · Tailwind · Internal Tools",
    status: "Active Production",
    icon: Briefcase,
    color: "#0284c7",
  },
  {
    company: "PT Evermos",
    role: "Backend Engineer (Proyek)",
    period: "2024",
    tag: "Golang REST API · Clean Architecture",
    status: "10k rps Verified",
    icon: Code2,
    color: "#059669",
  },
  {
    company: "PT Akebono Brake Astra",
    role: "Electrical Maintenance & Automation",
    period: "2022 — 2023",
    tag: "PLC Automation · Zero-Downtime · Root-Cause",
    status: "Industrial Grade",
    icon: Wrench,
    color: "#d97706",
  },
  {
    company: "Universitas Gunadarma",
    role: "Workshop Speaker & Instructor",
    period: "2024",
    tag: "Modern Web Ecosystem · REST APIs",
    status: "Community",
    icon: GraduationCap,
    color: "#7c3aed",
  },
];

function CareerStreamCard({ item }: { item: (typeof careerMilestones)[0] }) {
  const Icon = item.icon;
  return (
    <div
      className={cn(
        "group/career relative mx-auto w-full max-w-[460px] p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs cursor-pointer",
        "transition-all duration-200 ease-in-out hover:border-sky-400 hover:shadow-md hover:-translate-y-0.5 hover:bg-white flex items-center justify-between gap-3"
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className="size-9 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 group-hover/career:scale-110 group-hover/career:shadow-sm"
          style={{
            backgroundColor: `${item.color}10`,
            borderColor: `${item.color}30`,
            color: item.color,
          }}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-xs font-bold text-slate-900 truncate group-hover/career:text-[#0284c7] transition-colors">
              {item.company}
            </h4>
            <span className="text-[10px] font-mono text-slate-400 shrink-0 group-hover/career:text-slate-600 transition-colors">
              {item.period}
            </span>
          </div>
          <p className="text-[11px] font-medium text-slate-600 truncate group-hover/career:text-slate-800 transition-colors">
            {item.role}
          </p>
          <p className="text-[10px] font-mono text-slate-400 truncate mt-0.5 group-hover/career:text-slate-600 transition-colors">
            {item.tag}
          </p>
        </div>
      </div>

      <span
        className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold shrink-0 border transition-all duration-200 group-hover/career:scale-105"
        style={{
          backgroundColor: `${item.color}08`,
          borderColor: `${item.color}25`,
          color: item.color,
        }}
      >
        {item.status}
      </span>
    </div>
  );
}

// ============================================================================
// 3. HIGH-TECH ARCHITECTURE BEAM COMPONENT (REMAKED TOTAL)
// ============================================================================
const ArchitectureNode = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group/node z-10 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md p-2.5 shadow-sm shadow-slate-900/5",
        "transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:shadow-lg hover:border-sky-400",
        className
      )}
    >
      {children}
    </div>
  );
});

ArchitectureNode.displayName = "ArchitectureNode";

function HighTechArchitectureBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const divClientRef = useRef<HTMLDivElement>(null);
  const divGatewayRef = useRef<HTMLDivElement>(null);
  const divQdrantRef = useRef<HTMLDivElement>(null);
  const divGoRef = useRef<HTMLDivElement>(null);
  const divCloudRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative h-[215px] w-full p-3.5 flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Blueprint / Grid Background Overlay */}
      <div className="absolute inset-0 bg-slate-50/70 border border-slate-200/80 rounded-2xl [background-image:radial-gradient(#0284c7_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

      {/* Top Status Header */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[9px] font-mono text-slate-500 pb-1 border-b border-slate-200/60 z-10">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-[#0284c7]" />
          <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">ACTIVE_SYSTEM_PIPELINE</span>
        </div>
        <span className="text-sky-600 font-bold group-hover:text-sky-700 transition-colors">10,000 REQ/SEC · 99.99% SLA</span>
      </div>

      {/* 3-Stage Layout */}
      <div className="relative z-10 flex w-full max-w-[560px] items-center justify-between gap-4 pt-3">
        {/* Stage 1: Client Node */}
        <div className="flex flex-col items-center">
          <ArchitectureNode
            ref={divClientRef}
            className="w-28 border-sky-200 bg-sky-50/70 flex flex-col items-center text-center p-2 hover:bg-sky-50 hover:shadow-sky-500/10"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0284c7] text-white flex items-center justify-center shadow-xs mb-1 transition-all duration-200 group-hover/node:scale-110 group-hover/node:bg-[#0369a1]">
              <Globe className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-slate-900 leading-tight group-hover/node:text-[#0284c7] transition-colors">
              Client Layer
            </span>
            <span className="text-[8px] font-mono text-slate-500 mt-0.5">
              Next.js 16 SSR
            </span>
          </ArchitectureNode>
        </div>

        {/* Stage 2: Core Gateway Hub */}
        <div className="flex flex-col items-center">
          <ArchitectureNode
            ref={divGatewayRef}
            className="w-36 border-sky-400 bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white p-2.5 flex flex-col items-center text-center shadow-md shadow-sky-500/20 ring-2 ring-sky-200 hover:ring-4 hover:ring-sky-300 hover:shadow-sky-500/40"
          >
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center mb-1 transition-transform duration-200 group-hover/node:scale-110 group-hover/node:rotate-6">
              <Server className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold tracking-tight">
              Traa API Gateway
            </span>
            <span className="text-[8px] font-mono text-sky-100 bg-white/15 px-1.5 py-0.5 rounded mt-0.5 group-hover/node:bg-white/25 transition-colors">
              Golang Clean Arch
            </span>
          </ArchitectureNode>
        </div>

        {/* Stage 3: Ecosystem Destinations (Qdrant, Go API, GCP) */}
        <div className="flex flex-col gap-2">
          {/* Target 1: Qdrant */}
          <ArchitectureNode
            ref={divQdrantRef}
            className="w-36 border-indigo-200 bg-white py-1.5 px-2 flex items-center gap-2 hover:border-indigo-400 hover:shadow-indigo-500/15 hover:translate-x-1"
          >
            <div className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 transition-all duration-200 group-hover/node:scale-110 group-hover/node:bg-indigo-100">
              <Database className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-bold text-slate-800 leading-tight group-hover/node:text-indigo-600 transition-colors">Qdrant RAG</p>
              <p className="text-[8px] font-mono text-slate-400">0.984 Sim · 14ms</p>
            </div>
          </ArchitectureNode>

          {/* Target 2: Go Backend */}
          <ArchitectureNode
            ref={divGoRef}
            className="w-36 border-sky-200 bg-white py-1.5 px-2 flex items-center gap-2 hover:border-sky-400 hover:shadow-sky-500/15 hover:translate-x-1"
          >
            <div className="w-6 h-6 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 transition-all duration-200 group-hover/node:scale-110 group-hover/node:bg-sky-100">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-bold text-slate-800 leading-tight group-hover/node:text-sky-600 transition-colors">Go REST API</p>
              <p className="text-[8px] font-mono text-slate-400">Clean Architecture</p>
            </div>
          </ArchitectureNode>

          {/* Target 3: GCP Cloud Run */}
          <ArchitectureNode
            ref={divCloudRef}
            className="w-36 border-emerald-200 bg-white py-1.5 px-2 flex items-center gap-2 hover:border-emerald-400 hover:shadow-emerald-500/15 hover:translate-x-1"
          >
            <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 transition-all duration-200 group-hover/node:scale-110 group-hover/node:bg-emerald-100">
              <Cloud className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-bold text-slate-800 leading-tight group-hover/node:text-emerald-600 transition-colors">GCP Cloud Run</p>
              <p className="text-[8px] font-mono text-slate-400">Serverless 200 OK</p>
            </div>
          </ArchitectureNode>
        </div>
      </div>

      {/* Animated Gradient Beams with High Contrast */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divClientRef}
        toRef={divGatewayRef}
        pathColor="#94a3b8"
        pathWidth={2.5}
        pathOpacity={0.6}
        gradientStartColor="#0284c7"
        gradientStopColor="#38bdf8"
        duration={2.5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divGatewayRef}
        toRef={divQdrantRef}
        pathColor="#94a3b8"
        pathWidth={2.5}
        pathOpacity={0.6}
        gradientStartColor="#38bdf8"
        gradientStopColor="#6366f1"
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divGatewayRef}
        toRef={divGoRef}
        pathColor="#94a3b8"
        pathWidth={2.5}
        pathOpacity={0.6}
        gradientStartColor="#38bdf8"
        gradientStopColor="#0284c7"
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divGatewayRef}
        toRef={divCloudRef}
        pathColor="#94a3b8"
        pathWidth={2.5}
        pathOpacity={0.6}
        gradientStartColor="#38bdf8"
        gradientStopColor="#10b981"
        duration={3}
      />
    </div>
  );
}

// ============================================================================
// 4. DELIVERABLES & SERVICES MATRIX COMPONENT
// ============================================================================
function ServicesMatrixDemo() {
  return (
    <div className="absolute inset-0 p-3.5 flex flex-col justify-between">
      {/* Availability Status Header */}
      <div className="p-2 rounded-xl bg-emerald-50/80 border border-emerald-200/70 flex items-center justify-between text-[10px] font-mono shadow-2xs transition-all duration-200 hover:bg-emerald-100/90 hover:border-emerald-300 cursor-pointer group/status">
        <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse group-hover/status:scale-125 transition-transform" />
          <span>OPEN FOR COLLABORATION</span>
        </div>
        <span className="text-emerald-600 font-bold group-hover/status:text-emerald-700 transition-colors">SLA: &lt; 24H</span>
      </div>

      {/* 3 Structured Deliverable Items */}
      <div className="space-y-1.5">
        <div className="p-2.5 rounded-xl bg-white/95 border border-slate-200 shadow-2xs flex items-center justify-between text-xs transition-all duration-200 hover:border-sky-400 hover:shadow-sm hover:translate-x-1.5 hover:bg-sky-50/30 cursor-pointer group/service">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded transition-all duration-200 group-hover/service:bg-[#0284c7] group-hover/service:text-white">01</span>
            <span className="font-bold text-[11px] text-slate-800 group-hover/service:text-[#0284c7] transition-colors">Full-Stack Web App</span>
          </div>
          <span className="text-[9px] font-mono text-slate-500 group-hover/service:text-slate-700 group-hover/service:font-bold transition-colors">Next.js 16</span>
        </div>

        <div className="p-2.5 rounded-xl bg-white/95 border border-slate-200 shadow-2xs flex items-center justify-between text-xs transition-all duration-200 hover:border-emerald-400 hover:shadow-sm hover:translate-x-1.5 hover:bg-emerald-50/30 cursor-pointer group/service">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded transition-all duration-200 group-hover/service:bg-emerald-600 group-hover/service:text-white">02</span>
            <span className="font-bold text-[11px] text-slate-800 group-hover/service:text-emerald-700 transition-colors">Golang REST API</span>
          </div>
          <span className="text-[9px] font-mono text-slate-500 group-hover/service:text-slate-700 group-hover/service:font-bold transition-colors">Clean Arch</span>
        </div>

        <div className="p-2.5 rounded-xl bg-white/95 border border-slate-200 shadow-2xs flex items-center justify-between text-xs transition-all duration-200 hover:border-indigo-400 hover:shadow-sm hover:translate-x-1.5 hover:bg-indigo-50/30 cursor-pointer group/service">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded transition-all duration-200 group-hover/service:bg-indigo-600 group-hover/service:text-white">03</span>
            <span className="font-bold text-[11px] text-slate-800 group-hover/service:text-indigo-700 transition-colors">AI Agent &amp; RAG Vector</span>
          </div>
          <span className="text-[9px] font-mono text-slate-500 group-hover/service:text-slate-700 group-hover/service:font-bold transition-colors">Qdrant DB</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 5. BENTO DEMO MAIN COMPONENT
// ============================================================================
export function BentoDemo() {
  const features = [
    {
      Icon: FolderGit2,
      name: "Karya & Portofolio",
      description: "Eksplorasi arsitektur produksi: Fixora (Civic-Tech AI & Qdrant RAG), Portofy.net (GCP Cloud Run), dan Evermos API.",
      href: "/projects",
      cta: "Buka Galeri Proyek & Arsitektur",
      tag: "Codebases & RAG",
      className: "col-span-1 lg:col-span-1",
      background: <CodebaseInspectorDemo />,
    },
    {
      Icon: Briefcase,
      name: "Riwayat Pengalaman & Karier",
      description: "Rekam jejak jam terbang di industri kuliner modern, platform e-commerce nasional, hingga manufaktur otomotif global.",
      href: "/experience",
      cta: "Lihat Timeline Karier Lengkap",
      tag: "Career Track",
      className: "col-span-1 lg:col-span-2",
      background: (
        <div className="absolute inset-0 p-3 flex flex-col justify-start">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pb-1.5 mb-1.5 border-b border-slate-200/70">
            <div className="flex items-center gap-1.5 font-bold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>CAREER STREAM // PRODUCTION ACTIVITY</span>
            </div>
            <span className="text-sky-600 font-bold">VERIFIED TRACK</span>
          </div>
          <AnimatedList delay={2000}>
            {careerMilestones.map((item, idx) => (
              <CareerStreamCard key={idx} item={item} />
            ))}
          </AnimatedList>
        </div>
      ),
    },
    {
      Icon: Cpu,
      name: "Integrasi & Arsitektur Sistem",
      description: "Orkestrasi sistem terdistribusi: client web terhubung ke Golang API Gateway, Qdrant Vector Search, dan GCP Cloud Run.",
      href: "/about",
      cta: "Baca Filosofi & Arsitektur Rekayasa",
      tag: "System Architecture",
      className: "col-span-1 lg:col-span-2",
      background: <HighTechArchitectureBeamDemo />,
    },
    {
      Icon: Sparkles,
      name: "Katalog Jasa & Penawaran",
      description: "Layanan rekayasa perangkat lunak siap rilis untuk bisnis & startup: Full-Stack Web, Golang API, dan AI RAG.",
      href: "/services",
      cta: "Konsultasi Layanan",
      tag: "Available",
      className: "col-span-1 lg:col-span-1",
      background: <ServicesMatrixDemo />,
    },
  ];

  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-[11px] font-bold tracking-wider text-[#0284c7] uppercase font-mono flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" />
            <span>NAVIGATION HUBS &amp; DIRECTORY</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-1">
            Jelajahi Profil &amp; Karya Rekayasa
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Pilih area eksplorasi untuk melihat detail per halaman tanpa tumpukan scroll panjang.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>MAGIC UI BENTO</span>
        </div>
      </div>

      {/* Bento Grid */}
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}

export default BentoDemo;
