import React from "react";
import {
  Boxes,
  ShieldCheck,
  Layers,
  Network,
  Cpu,
  DatabaseZap,
  BrainCircuit,
} from "lucide-react";

export type TechCategory =
  | "all"
  | "languages"
  | "frameworks"
  | "cloud-db"
  | "tools"
  | "agent-llm";

export interface TechStackItem {
  name: string;
  role: string;
  category: "languages" | "frameworks" | "cloud-db" | "tools" | "agent-llm";
  logoSrc: string;
  color: string;
  description?: string;
}

export interface ArchitectureItem {
  id: string;
  title: string;
  badge: string;
  summary: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string; size?: number; color?: string }>;
  accentColor: string;
}

export interface AIConceptItem {
  id: string;
  title: string;
  badge: string;
  summary: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string; size?: number; color?: string }>;
  accentColor: string;
}

/* =========================================================================
   COMPREHENSIVE TECH STACK ITEMS (SVGL Official Logos)
   ========================================================================= */

export const techStackData: TechStackItem[] = [
  // Languages & Core
  {
    name: "Golang",
    role: "High-Performance Concurrency & Microservices",
    category: "languages",
    logoSrc: "/logos/golang.svg",
    color: "#00ADD8",
    description: "Bahasa utama untuk backend sistemik berlatensi rendah, goroutines, dan throughput tinggi.",
  },
  {
    name: "TypeScript",
    role: "Strict Type Safety & Enterprise Contracts",
    category: "languages",
    logoSrc: "/logos/typescript.svg",
    color: "#3178C6",
    description: "Standardisasi penulisan kode modern, static typing, dan arsitektur frontend skala besar.",
  },
  {
    name: "JavaScript",
    role: "Core Web Engine & Async Run-time",
    category: "languages",
    logoSrc: "/logos/javascript.svg",
    color: "#F7DF1E",
    description: "Ekosistem web universal, interoperabilitas event-driven, dan fungsionalitas browser dinamis.",
  },
  {
    name: "PHP",
    role: "Server-side Web Systems & Dynamic Services",
    category: "languages",
    logoSrc: "/logos/php.svg",
    color: "#777BB4",
    description: "Pengembangan sistem web dinamis, integrasi database cepat, dan backend service teruji.",
  },
  {
    name: "CSS3",
    role: "Responsive Design & Advanced Animations",
    category: "languages",
    logoSrc: "/logos/css.svg",
    color: "#1572B6",
    description: "Layouting modern (Flexbox, Grid), CSS variables, transisi halus, dan arsitektur UI adaptif.",
  },

  // Frameworks & UI
  {
    name: "Next.js",
    role: "App Router, SSR/SSG & Edge Rendering",
    category: "frameworks",
    logoSrc: "/logos/nextjs.svg",
    color: "#0f172a",
    description: "Framework React produksi untuk SEO optimal, Server Components, dan routing mutakhir.",
  },
  {
    name: "React",
    role: "Declarative Component Architecture",
    category: "frameworks",
    logoSrc: "/logos/react.svg",
    color: "#61DAFB",
    description: "Fondasi UI interaktif, state management reaktif, dan ekosistem komponen modular.",
  },
  {
    name: "Go Fiber",
    role: "Express-Inspired Ultra Fast Web Framework",
    category: "frameworks",
    logoSrc: "/logos/fiber.svg",
    color: "#00ACD7",
    description: "Web framework Golang berbasis Fasthttp untuk perutean API berkecepatan tinggi dan alokasi memori minimal.",
  },
  {
    name: "Tailwind CSS",
    role: "Utility-First Design System",
    category: "frameworks",
    logoSrc: "/logos/tailwind.svg",
    color: "#06B6D4",
    description: "Styling efisien tanpa stylesheet bengkak, konsistensi token desain, dan kemudahan kustomisasi UI.",
  },

  // Database, Cloud & DevOps
  {
    name: "MySQL",
    role: "Relational Schema, Indexing & ACID",
    category: "cloud-db",
    logoSrc: "/logos/mysql.svg",
    color: "#00546B",
    description: "Database relasional andal untuk transaksi bisnis kritis, optimasi query, dan integritas data.",
  },
  {
    name: "Google Cloud",
    role: "GCP Cloud Run, Compute & Cloud Storage",
    category: "cloud-db",
    logoSrc: "/logos/google-cloud.svg",
    color: "#4285F4",
    description: "Deploy aplikasi terisolasi container secara serverless dengan auto-scaling dan keamanan tinggi.",
  },
  {
    name: "Cloudflare",
    role: "Edge CDN, DNS, Security & Caching",
    category: "cloud-db",
    logoSrc: "/logos/cloudflare.svg",
    color: "#F38020",
    description: "Perlindungan DDoS, caching global di ratusan edge node dunia, SSL otomatis, dan latency tuning.",
  },
  {
    name: "Docker",
    role: "Containerization & Multi-stage Builds",
    category: "cloud-db",
    logoSrc: "/logos/docker.svg",
    color: "#2496ED",
    description: "Standardisasi environment lokal ke produksi, isolasi dependensi, dan konsistensi pipeline CI/CD.",
  },

  // Developer Tools & Workflow
  {
    name: "Postman",
    role: "API Testing, Mocking & Documentation",
    category: "tools",
    logoSrc: "/logos/postman.svg",
    color: "#FF6C37",
    description: "Validasi kontrak endpoint HTTP/REST, penulisan script test otomatis, dan dokumentasi koleksi API.",
  },
  {
    name: "TablePlus",
    role: "GUI Database Management & Query Tuning",
    category: "tools",
    logoSrc: "/logos/tableplus.svg",
    color: "#E87A36",
    description: "Tool native yang cepat untuk manajemen database MySQL, pemantauan indeks, dan inspeksi schema.",
  },
  {
    name: "GitHub",
    role: "CI/CD Actions, Code Review & Collaboration",
    category: "tools",
    logoSrc: "/logos/github.svg",
    color: "#181717",
    description: "Pusat kolaborasi kode, manajemen pull request, tracking issue, dan otomatisasi rilis.",
  },
  {
    name: "Git",
    role: "Distributed Version Control System",
    category: "tools",
    logoSrc: "/logos/git.svg",
    color: "#F05032",
    description: "Branching strategies (Trunk-based/Gitflow), rebasing bersih, dan tracking riwayat perubahan kode.",
  },

  // Coding Agent Tools & LLM Provider Gateway
  {
    name: "Oh My Pi",
    role: "Autonomous CLI Coding Agent",
    category: "agent-llm",
    logoSrc: "/logos/oh-my-pi.svg",
    color: "#A855F7",
    description: "Agent terminal cerdas untuk akselerasi refactoring, scaffolding modular, dan otomatisasi repetitive coding.",
  },
  {
    name: "Antigravity",
    role: "Google DeepMind Agentic IDE & Pair Programming",
    category: "agent-llm",
    logoSrc: "/logos/antigravity.svg",
    color: "#4285F4",
    description: "Lingkungan AI agentic tingkat lanjut untuk orkestrasi task kompleks, pair programming, dan analisis codebase mendalam.",
  },
  {
    name: "9router",
    role: "High-Throughput LLM Gateway & Provider Proxy",
    category: "agent-llm",
    logoSrc: "/logos/9router.svg",
    color: "#10B981",
    description: "Sistem routing cerdas untuk mendistribusikan request antar-model AI dengan failover andal dan efisiensi biaya.",
  },
  {
    name: "CommandCode",
    role: "Source LLM Engine & Provider Hub",
    category: "agent-llm",
    logoSrc: "/logos/commandcode.svg",
    color: "#F43F5E",
    description: "Hub provider LLM dan eksekusi command terpadu untuk menyuplai model AI ke dalam agent workflow harian.",
  },
];

/* =========================================================================
   SOFTWARE ARCHITECTURE & SYSTEM DESIGN PRINCIPLES
   ========================================================================= */

export const architecturePatterns: ArchitectureItem[] = [
  {
    id: "modular-monolith",
    title: "Modular Monolith Architecture",
    badge: "Modularity without Complexity",
    summary:
      "Mengorganisasi kode ke dalam modul-modul fungsional independen dengan batas domain yang jelas (bounded contexts) dalam satu codebase terpadu.",
    highlights: [
      "Isolasi domain ketat dengan public interface / contracts antar modul",
      "Komunikasi in-process tanpa latency jaringan dan overhead distributed system",
      "Kemudahan deployment tunggal dengan jalur migrasi siap jika kelak butuh microservices",
    ],
    icon: Boxes,
    accentColor: "#0284c7",
  },
  {
    id: "clean-architecture",
    title: "Clean Architecture",
    badge: "Domain-Centric & Decoupled",
    summary:
      "Penerapan prinsip Inversion of Control dan Dependency Rule di mana business core sama sekali tidak bergantung pada framework, UI, maupun database eksternal.",
    highlights: [
      "Entities & Use Cases murni terbebas dari library pihak ketiga",
      "Database & framework hanya berperan sebagai adapter / detail implementasi",
      "Kemudahan unit testing 100% tanpa perlu menyalakan database atau HTTP server nyata",
    ],
    icon: ShieldCheck,
    accentColor: "#10b981",
  },
  {
    id: "layered-architecture",
    title: "Layered Architecture (N-Tier)",
    badge: "Predictable Separation of Concerns",
    summary:
      "Pemisahan tanggung jawab sistem ke dalam tingkatan vertikal yang terstruktur rapi: Presentation/Handler, Business Service, Repository/Data Access, dan Storage.",
    highlights: [
      "Struktur kode yang intuitif dan mudah dipahami oleh tim engineering",
      "Pencegahan kebocoran logika SQL ke controller atau komponen antarmuka",
      "Standarisasi alur data satu arah (unidirectional data flow) yang stabil",
    ],
    icon: Layers,
    accentColor: "#8b5cf6",
  },
  {
    id: "rest-api-design",
    title: "RESTful API Contract Design",
    badge: "Standards, Idempotency & DX",
    summary:
      "Perancangan antarmuka API yang konsisten, mudah dipelajari (high DX), mematuhi spesifikasi standar HTTP, serta dilengkapi kontrak OpenAPI yang terverifikasi.",
    highlights: [
      "Penerapan HTTP methods semantik (GET, POST, PUT, PATCH, DELETE) & idempotency",
      "Format respons seragam (envelope format) dengan HTTP status codes yang tepat",
      "Skema error informatif, pagination terstruktur, dan dokumentasi kontrak interaktif",
    ],
    icon: Network,
    accentColor: "#f59e0b",
  },
];

/* =========================================================================
   AI & LLM ENGINEERING CONCEPTS
   ========================================================================= */

export const aiConcepts: AIConceptItem[] = [
  {
    id: "mcp",
    title: "Model Context Protocol (MCP)",
    badge: "Standardized Agent Connectivity",
    summary:
      "Protokol universal yang menghubungkan model bahasa (LLM) dengan data eksternal, tool eksekusi, filesystem lokal, dan layanan API secara aman dan real-time.",
    highlights: [
      "Menggantikan custom connector yang kaku dengan protokol standar multi-client",
      "Membuka akses agent ke tools lokal (CLI, database, workspace files) dengan kontrol hak akses",
      "Menyediakan context injection terstruktur untuk dynamic tool calling",
    ],
    icon: Cpu,
    accentColor: "#6366f1",
  },
  {
    id: "rag",
    title: "Retrieval-Augmented Generation (RAG)",
    badge: "Fact Grounding & Vector Search",
    summary:
      "Teknik memperkaya prompt LLM dengan potongan informasi relevan dari knowledge base internal menggunakan semantic vector embedding sebelum respons digenerasi.",
    highlights: [
      "Mengeliminasi halusinasi model dengan membatasi jawaban pada fakta dokumen terverifikasi",
      "Penyimpanan embeddings berdimensi tinggi pada Vector Database untuk pencarian semantik sub-detik",
      "Chunking strategies dan hybrid search (semantic + keyword) untuk akurasi jawaban maksimal",
    ],
    icon: DatabaseZap,
    accentColor: "#0284c7",
  },
  {
    id: "llm-integration",
    title: "LLM Integration & Routing",
    badge: "Multi-Model Orchestration",
    summary:
      "Arsitektur integrasi multi-provider (Google Gemini, OpenAI, Claude, Open Models) yang dihubungkan melalui gateway router cerdas untuk performa optimal.",
    highlights: [
      "Routing cerdas berbasis latency, kuota, dan kapabilitas model via gateway terpusat (9router)",
      "Streaming responses untuk zero-delay feedback pada UI pengguna",
      "Prompt chaining, defensive validation, dan penanganan token limit secara graceful",
    ],
    icon: BrainCircuit,
    accentColor: "#ec4899",
  },
];
