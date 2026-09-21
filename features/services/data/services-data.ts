export interface LocalizedString {
  id: string;
  en: string;
}

export interface ServicePrinciple {
  id: string;
  iconName: "ShieldCheck" | "Zap" | "LayoutGrid" | "Clock";
  title: LocalizedString;
  description: LocalizedString;
}

export interface ServiceStat {
  id: string;
  value: string;
  label: LocalizedString;
  description: LocalizedString;
}

export interface ServicePillar {
  id: string;
  iconName: "Layout" | "Server" | "Sparkles";
  title: LocalizedString;
  items: LocalizedString[];
}

export interface ServiceTestimonial {
  id: string;
  quote: LocalizedString;
  author: string;
  role: LocalizedString;
  context: LocalizedString;
  tag: LocalizedString;
  stars: number;
  initials: string;
  accentBg: string;
  accentText: string;
}

export interface ServicesContent {
  hero: {
    title: LocalizedString;
    subtitle: LocalizedString;
    cta: LocalizedString;
    secondaryCta: LocalizedString;
  };
  principles: {
    title: LocalizedString;
    description: LocalizedString;
    items: ServicePrinciple[];
  };
  stats: ServiceStat[];
  capabilities: {
    title: LocalizedString;
    description1: LocalizedString;
    description2: LocalizedString;
    pillars: ServicePillar[];
  };
  testimonials: {
    title: LocalizedString;
    description: LocalizedString;
    items: ServiceTestimonial[];
  };
}

export const servicesData: ServicesContent = {
  hero: {
    title: {
      id: "Solusi Rekayasa Web & Backend Modern",
      en: "Scalable Web & Backend Engineering Services",
    },
    subtitle: {
      id: "Membantu founder, tim, dan bisnis membangun aplikasi web berkinerja tinggi, arsitektur backend Golang yang scalable, serta integrasi AI cerdas yang siap produksi.",
      en: "Helping founders, teams, and businesses build high-performance web applications, scalable Golang backend systems, and production-ready AI integrations.",
    },
    cta: {
      id: "Mulai Diskusi Proyek",
      en: "Start a Project",
    },
    secondaryCta: {
      id: "Tanya AI Assistant",
      en: "Ask AI Assistant",
    },
  },
  principles: {
    title: {
      id: "Prinsip Kerja & Pola Pikir",
      en: "Engineering Principles & Mindset",
    },
    description: {
      id: "Fondasi rekayasa perangkat lunak yang saya terapkan untuk memastikan kode mudah dirawat, efisien, dan bebas kendala teknis jangka panjang.",
      en: "Core software engineering principles I apply to ensure every system is maintainable, robust, and free of technical debt.",
    },
    items: [
      {
        id: "clean-arch",
        iconName: "ShieldCheck",
        title: {
          id: "Clean Architecture by Default",
          en: "Clean Architecture by Default",
        },
        description: {
          id: "Pemisahan lapisan kode yang disiplin (domain, use case, repository) agar logika bisnis tetap independen, mudah diuji unit test, dan fleksibel terhadap perubahan.",
          en: "Disciplined layer separation (domain, use case, repository) keeping business logic isolated, easily testable, and adaptable to future changes.",
        },
      },
      {
        id: "concurrency",
        iconName: "Zap",
        title: {
          id: "Type-Safe & High Concurrency",
          en: "Type-Safe & High Concurrency",
        },
        description: {
          id: "Kombinasi performa Golang dengan ketatnya tipe TypeScript. Meminimalkan runtime exception, menjaga latensi rendah, serta menjamin konsistensi data transaksi.",
          en: "Combining Golang high-performance routines with TypeScript strict types to minimize runtime errors, ensure low latency, and maintain data integrity.",
        },
      },
      {
        id: "full-ownership",
        iconName: "LayoutGrid",
        title: {
          id: "End-to-End Ownership",
          en: "End-to-End Ownership",
        },
        description: {
          id: "Menguasai rantai pengembangan utuh: dari desain skema database relasional (PostgreSQL/MySQL), penulisan REST API, hingga antarmuka Next.js yang presisi.",
          en: "Complete lifecycle ownership: from relational database schema modeling and RESTful API design to pixel-perfect, responsive Next.js interfaces.",
        },
      },
      {
        id: "async-transparent",
        iconName: "Clock",
        title: {
          id: "Async-First & Transparent Delivery",
          en: "Async-First & Transparent Delivery",
        },
        description: {
          id: "Progres terpantau lewat Git commit yang rapi, dokumentasi API yang jelas (Swagger/Postman), serta komunikasi asinkron yang teratur tanpa perlu mikromanajemen.",
          en: "Clear progress tracking with structured Git commits, well-documented API contracts, and predictable async communication without micromanagement.",
        },
      },
    ],
  },
  stats: [
    {
      id: "architecture",
      value: "Production-Ready",
      label: {
        id: "Standar Arsitektur",
        en: "Architectural Standard",
      },
      description: {
        id: "Sistem modular berkinerja tinggi berbasis Clean Architecture di Golang, terisolasi dengan rapi, dan bebas hambatan teknis jangka panjang.",
        en: "Modular, high-throughput systems built with Clean Architecture in Golang, clean layer isolation, and zero technical debt shortcuts.",
      },
    },
    {
      id: "contract-api",
      value: "Contract-First",
      label: {
        id: "Spesifikasi & API",
        en: "API Contracts & Safety",
      },
      description: {
        id: "REST API berkecepatan tinggi dengan kontrak data ketat, validasi presisi, dan dokumentasi OpenAPI/Swagger lengkap.",
        en: "High-performance REST APIs with strict type validation, deterministic payloads, and complete OpenAPI/Swagger documentation.",
      },
    },
    {
      id: "container-cloud",
      value: "Deploy-Ready",
      label: {
        id: "DevOps & Kontainer",
        en: "Cloud & Containerization",
      },
      description: {
        id: "Dikonfigurasi Docker secara efisien, siap di-deploy ke GCP, VPS, atau Cloudflare tanpa kerumitan konfigurasi manual.",
        en: "Efficient Docker multi-stage builds, clean environment orchestration, and hassle-free deployment to GCP, VPS, or Cloudflare.",
      },
    },
    {
      id: "sync-delivery",
      value: "Transparent Sync",
      label: {
        id: "Kolaborasi & Pengiriman",
        en: "Collaboration & Delivery",
      },
      description: {
        id: "Komunikasi asinkron disiplin, progres terukur via commit Git terstruktur, dan demo berkala tanpa perlu mikromanajemen.",
        en: "Disciplined async communication, structured Git milestone visibility, and regular staging previews with zero ghosting.",
      },
    },
  ],
  capabilities: {
    title: {
      id: "Bagaimana Saya Membantu Proyek Anda",
      en: "How I Help Build Your Vision",
    },
    description1: {
      id: "Mulai dari validasi konsep teknis hingga aplikasi siap rilis, saya menyediakan keahlian rekayasa full-stack dengan penekanan pada stabilitas backend dan keanggunan tampilan frontend.",
      en: "From initial technical architecture to production release, I provide hands-on full-stack engineering with strong emphasis on backend resilience and refined frontend UX.",
    },
    description2: {
      id: "Setiap deliverable dirancang dengan standar kode industri, dokumentasi rapi, dan kontainerisasi agar mudah di-deploy ke server cloud pilihan Anda.",
      en: "Every deliverable is crafted to industry standards, fully documented, and containerized for seamless cloud deployment.",
    },
    pillars: [
      {
        id: "frontend",
        iconName: "Layout",
        title: {
          id: "Frontend & Web Apps",
          en: "Frontend & Web Apps",
        },
        items: [
          {
            id: "Aplikasi web responsif Next.js & React 19",
            en: "Modern Next.js & React 19 web applications",
          },
          {
            id: "Desain UI/UX estetik dengan Tailwind CSS",
            en: "Clean, bespoke UI/UX built with Tailwind CSS",
          },
          {
            id: "Dashboard analitik & manajemen data interaktif",
            en: "Interactive analytics dashboards & data portals",
          },
          {
            id: "Optimalisasi Core Web Vitals, performa, dan SEO",
            en: "Core Web Vitals optimization, speed, and SEO",
          },
          {
            id: "Animasi mikro halus menggunakan Framer & GSAP",
            en: "Fluid micro-animations with Framer & GSAP",
          },
        ],
      },
      {
        id: "backend",
        iconName: "Server",
        title: {
          id: "Backend & API Engineering",
          en: "Backend & API Engineering",
        },
        items: [
          {
            id: "RESTful API berkinerja tinggi berbasis Go Fiber",
            en: "High-throughput RESTful APIs with Go Fiber",
          },
          {
            id: "Penerapan Clean Architecture & pemisahan domain",
            en: "Clean Architecture design & strict domain separation",
          },
          {
            id: "Desain database relasional (PostgreSQL & MySQL)",
            en: "Relational database modeling (PostgreSQL & MySQL)",
          },
          {
            id: "Sistem autentikasi JWT aman & kontrol akses RBAC",
            en: "Secure JWT authentication & role-based access control",
          },
          {
            id: "Kontainerisasi Docker & konfigurasi CI/CD ready",
            en: "Docker containerization & deployment readiness",
          },
        ],
      },
      {
        id: "solutions",
        iconName: "Sparkles",
        title: {
          id: "AI Integration & Custom Solutions",
          en: "AI Integration & Custom Solutions",
        },
        items: [
          {
            id: "Integrasi asisten LLM cerdas & prompt engineering",
            en: "Intelligent LLM assistant integration & prompt workflows",
          },
          {
            id: "Automasi alur data dan integrasi API pihak ketiga",
            en: "Data automation pipelines & third-party webhook integrations",
          },
          {
            id: "Pengembangan MVP SaaS mandiri dari nol ke live",
            en: "End-to-end MVP SaaS development from concept to launch",
          },
          {
            id: "Refactoring sistem lama & perbaikan bug mendalam",
            en: "Legacy system refactoring & deep bug troubleshooting",
          },
          {
            id: "Pendampingan teknis & asistensi kode pemrograman",
            en: "Technical guidance, code reviews, and coursework mentorship",
          },
        ],
      },
    ],
  },
  testimonials: {
    title: {
      id: "Kata Rekan & Pengguna",
      en: "Collaboration Feedback & Trust",
    },
    description: {
      id: "Umpan balik nyata dari peserta workshop pemrograman, rekan rekayasa perangkat lunak, dan pengguna produk.",
      en: "Genuine feedback from coding workshop attendees, engineering peers, and product users.",
    },
    items: [
      {
        id: "putra-rizky",
        quote: {
          id: "Arsitektur backend Golang yang dibangun sangat teratur berkat penerapan Clean Architecture. Kontrak API jelas dan integrasi dengan frontend berjalan sangat mulus.",
          en: "The Golang backend architecture is well-organized with Clean Architecture. Clear API contracts made the frontend integration completely seamless.",
        },
        author: "Putra Rizky",
        role: {
          id: "Fullstack Dev",
          en: "Fullstack Dev",
        },
        context: {
          id: "Proyek Full-Stack",
          en: "Full-Stack Project",
        },
        tag: {
          id: "Code Review",
          en: "Code Review",
        },
        stars: 5,
        initials: "PR",
        accentBg: "bg-teal-100 dark:bg-teal-950/60",
        accentText: "text-teal-700 dark:text-teal-300",
      },
      {
        id: "budi-santoso",
        quote: {
          id: "Aplikasi manajemen servis Fixora sangat membantu alur operasional. Pencatatan unit, status perbaikan, dan inventori terasa sangat solid dan intuitif.",
          en: "The Fixora repair management system streamlined daily operations. Repair logging, technician statuses, and inventory tracking are solid and intuitive.",
        },
        author: "Budi Santoso",
        role: {
          id: "SaaS Founder",
          en: "SaaS Founder",
        },
        context: {
          id: "Implementasi Sistem Fixora",
          en: "Fixora System Deployment",
        },
        tag: {
          id: "SaaS Feedback",
          en: "SaaS Feedback",
        },
        stars: 5,
        initials: "BS",
        accentBg: "bg-emerald-100 dark:bg-emerald-950/60",
        accentText: "text-emerald-700 dark:text-emerald-300",
      },
      {
        id: "rizky-ramadhan",
        quote: {
          id: "Penyampaian materi pengembangan web dari setup lokal hingga live hosting sangat runut dan mudah dipahami. Praktik Git workflow-nya sangat aplikatif bagi pemula.",
          en: "The web development mentoring from local setup to live hosting was structured and practical. The Git workflow sessions were especially clear for beginners.",
        },
        author: "Rizky Ramadhan",
        role: {
          id: "Frontend Engineer",
          en: "Frontend Engineer",
        },
        context: {
          id: "Workshop Web Development",
          en: "Web Development Workshop",
        },
        tag: {
          id: "Mentorship",
          en: "Mentorship",
        },
        stars: 5,
        initials: "RR",
        accentBg: "bg-sky-100 dark:bg-sky-950/60",
        accentText: "text-sky-700 dark:text-sky-300",
      },
      {
        id: "dimas-pratama",
        quote: {
          id: "Proses delivery sangat transparan dan tepat waktu. Backend Golang-nya luar biasa responsif dengan latensi rendah dan konsumsi resource yang sangat hemat di server cloud.",
          en: "The delivery process was completely transparent and on schedule. The Golang backend is remarkably responsive with minimal resource overhead on our cloud cluster.",
        },
        author: "Dimas Pratama",
        role: {
          id: "Backend Engineer",
          en: "Backend Engineer",
        },
        context: {
          id: "Sistem Manajemen Pesanan",
          en: "Order Management Backend",
        },
        tag: {
          id: "Backend & API",
          en: "Backend & API",
        },
        stars: 5,
        initials: "DP",
        accentBg: "bg-indigo-100 dark:bg-indigo-950/60",
        accentText: "text-indigo-700 dark:text-indigo-300",
      },
      {
        id: "farhan-alamsyah",
        quote: {
          id: "Integrasi pipeline RAG dengan Qdrant vector database berjalan presisi. Respon asisten AI menjadi sangat relevan terhadap dokumen internal tanpa halusinasi data.",
          en: "The RAG pipeline integration with Qdrant vector database was accurate and fast. The AI assistant responds strictly based on our internal documents without hallucination.",
        },
        author: "Farhan Alamsyah",
        role: {
          id: "Engineering Lead",
          en: "Engineering Lead",
        },
        context: {
          id: "Implementasi RAG & Vector DB",
          en: "RAG & Vector DB Deployment",
        },
        tag: {
          id: "AI Integration",
          en: "AI Integration",
        },
        stars: 5,
        initials: "FA",
        accentBg: "bg-amber-100 dark:bg-amber-950/60",
        accentText: "text-amber-700 dark:text-amber-300",
      },
    ],
  },
};
