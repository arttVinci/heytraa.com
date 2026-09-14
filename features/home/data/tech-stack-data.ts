export type TechCategory = "backend" | "ai-llm" | "frontend" | "database" | "devops";

export type TechStatus = "production" | "exploring";

export interface TechItem {
  id: string;
  name: string;
  category: TechCategory;
  status: TechStatus;
  tagline: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  highlightColor: string;
}

export interface TechCategoryInfo {
  id: TechCategory;
  name: {
    id: string;
    en: string;
  };
  badge: {
    id: string;
    en: string;
  };
  summary: {
    id: string;
    en: string;
  };
  cardSpan: string;
  accent: string;
}

export const techCategories: TechCategoryInfo[] = [
  {
    id: "backend",
    name: {
      id: "Backend & Systems",
      en: "Backend & Systems",
    },
    badge: {
      id: "Core Competency",
      en: "Core Competency",
    },
    summary: {
      id: "Membangun service berkecepatan tinggi dengan konkurensi native dan framework Go modern.",
      en: "Building high-throughput services with native Go concurrency and modern routing.",
    },
    cardSpan: "md:col-span-5",
    accent: "#689F99",
  },
  {
    id: "ai-llm",
    name: {
      id: "AI & LLM Systems",
      en: "AI & LLM Systems",
    },
    badge: {
      id: "Exploring & Integrating",
      en: "Exploring & Integrating",
    },
    summary: {
      id: "Eksplorasi Retrieval-Augmented Generation, cyclic multi-agent graph, dan protokol MCP.",
      en: "Exploring Retrieval-Augmented Generation, cyclic multi-agent graph, and MCP standards.",
    },
    cardSpan: "md:col-span-7",
    accent: "#8BAAA6",
  },
  {
    id: "frontend",
    name: {
      id: "Frontend Engineering",
      en: "Frontend Engineering",
    },
    badge: {
      id: "Interactive UI",
      en: "Interactive UI",
    },
    summary: {
      id: "Antarmuka type-safe, dinamis, dan responsif dengan ekosistem modern React & TypeScript.",
      en: "Type-safe, dynamic, responsive client interfaces with modern React and TypeScript.",
    },
    cardSpan: "md:col-span-5",
    accent: "#4A7A75",
  },
  {
    id: "database",
    name: {
      id: "Database & Storage",
      en: "Database & Storage",
    },
    badge: {
      id: "Relational Persistence",
      en: "Relational Persistence",
    },
    summary: {
      id: "Penyimpanan data relasional terstruktur dengan integritas ACID dan indexing teroptimasi.",
      en: "Structured relational data persistence with ACID integrity and optimized indexing.",
    },
    cardSpan: "md:col-span-3",
    accent: "#38645F",
  },
  {
    id: "devops",
    name: {
      id: "Cloud & Infrastruktur",
      en: "Cloud & Infrastructure",
    },
    badge: {
      id: "Cloud & Tools",
      en: "Cloud & Tools",
    },
    summary: {
      id: "Kontainerisasi Docker, deployment cloud di GCP & Cloudflare, serta pengujian API via Postman.",
      en: "Docker containerization, GCP & Cloudflare deployments, and API testing via Postman.",
    },
    cardSpan: "md:col-span-4",
    accent: "#5C8F8A",
  },
];

export const techStackItems: TechItem[] = [
  // 1. Backend
  {
    id: "golang",
    name: "Golang",
    category: "backend",
    status: "production",
    tagline: {
      id: "Concurrency & High-Throughput Core",
      en: "Concurrency & High-Throughput Core",
    },
    description: {
      id: "Bahasa utama untuk backend microservices dengan goroutines efisien dan runtime memory footprint yang ringan.",
      en: "Primary language for high-performance backend microservices leveraging lightweight goroutines.",
    },
    highlightColor: "#00ADD8",
  },
  {
    id: "fiber",
    name: "Fiber",
    category: "backend",
    status: "production",
    tagline: {
      id: "Ultra-Fast HTTP Framework",
      en: "Ultra-Fast HTTP Framework",
    },
    description: {
      id: "Web framework Golang berkinerja tinggi di atas Fasthttp untuk routing REST API berlatensi minimal.",
      en: "High-performance Go web framework built atop Fasthttp for minimal-latency REST API routing.",
    },
    highlightColor: "#00ADD8",
  },

  // 2. AI / LLM
  {
    id: "rag",
    name: "RAG",
    category: "ai-llm",
    status: "exploring",
    tagline: {
      id: "Retrieval-Augmented Generation",
      en: "Retrieval-Augmented Generation",
    },
    description: {
      id: "Pipeline ekstraksi dokumen, chunking, dan semantic retrieval untuk context grounding LLM yang akurat.",
      en: "Document ingestion, semantic chunking, and contextual retrieval pipelines for grounding LLM outputs.",
    },
    highlightColor: "#689F99",
  },
  {
    id: "langgraph",
    name: "LangGraph",
    category: "ai-llm",
    status: "exploring",
    tagline: {
      id: "Multi-Agent Cyclic Workflows",
      en: "Multi-Agent Cyclic Workflows",
    },
    description: {
      id: "Membangun sistem AI agentik berbasis state graph dengan kontrol alur siklis, memory persistence, dan koordinasi multi-agent.",
      en: "Building stateful multi-agent systems with cyclic execution graphs, memory persistence, and checkpointing.",
    },
    highlightColor: "#2563EB",
  },
  {
    id: "mcp",
    name: "Model Context Protocol",
    category: "ai-llm",
    status: "exploring",
    tagline: {
      id: "Open AI-Tool Connection Standard",
      en: "Open AI-Tool Connection Standard",
    },
    description: {
      id: "Standar protokol terbuka untuk menghubungkan model AI dengan data source, tools eksternal, dan API secara aman dan konsisten.",
      en: "Open protocol standard for seamlessly and securely connecting AI models with local/remote data sources and tools.",
    },
    highlightColor: "#00ADD8",
  },
  {
    id: "ai-concepts",
    name: "AI Concepts & Models",
    category: "ai-llm",
    status: "exploring",
    tagline: {
      id: "LLM Architectures & Foundations",
      en: "LLM Architectures & Foundations",
    },
    description: {
      id: "Pemahaman fundamental arsitektur transformer, tokenization, prompt engineering berstruktur, embeddings, dan konsep inference.",
      en: "Foundational understanding of transformer architectures, tokenization, structured prompt engineering, and embeddings.",
    },
    highlightColor: "#8B5CF6",
  },

  // 3. Frontend
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    status: "production",
    tagline: {
      id: "Full-Stack React Framework",
      en: "Full-Stack React Framework",
    },
    description: {
      id: "Framework full-stack modern dengan App Router, React Server Components, server actions, dan optimasi performa rendering.",
      en: "Modern full-stack framework with App Router, React Server Components, and optimized rendering.",
    },
    highlightColor: "#000000",
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    status: "production",
    tagline: {
      id: "Declarative Component Architecture",
      en: "Declarative Component Architecture",
    },
    description: {
      id: "Library UI deklaratif berbasis komponen modular, reusable hooks, dan reactive state management.",
      en: "Declarative UI library powered by component modularity, reusable hooks, and reactive state.",
    },
    highlightColor: "#61DAFB",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    status: "production",
    tagline: {
      id: "Strict Type Safety & Contracts",
      en: "Strict Type Safety & Contracts",
    },
    description: {
      id: "Static typing ketat di seluruh aplikasi untuk mencegah runtime bug dan memperjelas kontrak data.",
      en: "Strict static typing across frontend layers preventing runtime defects and enforcing data contracts.",
    },
    highlightColor: "#3178C6",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    status: "production",
    tagline: {
      id: "Modern ES6+ Core Language",
      en: "Modern ES6+ Core Language",
    },
    description: {
      id: "Pondasi bahasa web modern dengan penguasaan asynchronous event-loop, DOM manipulation, dan modular ES syntax.",
      en: "Modern web foundation with mastery over asynchronous execution, event loops, and modular ES standards.",
    },
    highlightColor: "#F7DF1E",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    status: "production",
    tagline: {
      id: "Engineered Design Tokens",
      en: "Engineered Design Tokens",
    },
    description: {
      id: "Utility-first CSS framework untuk styling presisi tinggi, responsive design, dan seamless dark mode.",
      en: "Utility-first CSS framework enabling precision styling, responsive design tokens, and dark mode.",
    },
    highlightColor: "#38BDF8",
  },
  {
    id: "vite",
    name: "Vite",
    category: "frontend",
    status: "production",
    tagline: {
      id: "Lightning Fast Frontend Tooling",
      en: "Lightning Fast Frontend Tooling",
    },
    description: {
      id: "Build tool generasi terbaru berbasis native ES modules dengan Instant HMR dan bundling Rollup teroptimasi.",
      en: "Next-gen frontend build tool with native ES modules, instant hot module replacement, and lean builds.",
    },
    highlightColor: "#646CFF",
  },

  // 4. Database & Storage
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    status: "production",
    tagline: {
      id: "Relational ACID Persistence",
      en: "Relational ACID Persistence",
    },
    description: {
      id: "Sistem basis data relasional teruji untuk integritas data transaksional, skema ternormalisasi, dan query indexing efisien.",
      en: "Battle-tested relational database for ACID transactions, normalized data schemas, and query indexing.",
    },
    highlightColor: "#4479A1",
  },
  {
    id: "qdrant",
    name: "Qdrant",
    category: "database",
    status: "exploring",
    tagline: {
      id: "Vector Database Engine",
      en: "Vector Database Engine",
    },
    description: {
      id: "Vector database berkecepatan tinggi dengan HNSW indexing untuk semantic similarity search dan memori AI/RAG.",
      en: "High-speed vector database with HNSW indexing for semantic similarity search and AI/RAG memory.",
    },
    highlightColor: "#DC2626",
  },
  {
    id: "cloudflare-r2",
    name: "Cloudflare R2",
    category: "database",
    status: "production",
    tagline: {
      id: "S3-Compatible Object Storage",
      en: "S3-Compatible Object Storage",
    },
    description: {
      id: "Penyimpanan objek tanpa biaya egress data dengan latensi rendah dan integrasi edge global.",
      en: "Zero-egress fee object storage offering low latency and global edge integration.",
    },
    highlightColor: "#F38020",
  },

  // 5. DevOps, Cloud & Tools
  {
    id: "docker",
    name: "Docker",
    category: "devops",
    status: "production",
    tagline: {
      id: "Containerization & Parity",
      en: "Containerization & Parity",
    },
    description: {
      id: "Isolasi runtime container dan multi-stage build untuk paritas environment development hingga production.",
      en: "Container runtime isolation and multi-stage builds ensuring dev-to-prod environment parity.",
    },
    highlightColor: "#2496ED",
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    category: "devops",
    status: "production",
    tagline: {
      id: "Cloud Infrastructure & Services",
      en: "Cloud Infrastructure & Services",
    },
    description: {
      id: "Infrastruktur komputasi cloud, deployment container, dan pemanfaatan managed services Google Cloud.",
      en: "Cloud infrastructure management, containerized deployments, and managed services on Google Cloud.",
    },
    highlightColor: "#4285F4",
  },
  {
    id: "cloudflare",
    name: "Cloudflare Pages",
    category: "devops",
    status: "production",
    tagline: {
      id: "Global Edge Deployment",
      en: "Global Edge Deployment",
    },
    description: {
      id: "Platform hosting Jamstack modern dengan deployment otomatis dari Git dan distribusi ultra cepat di edge network global.",
      en: "Modern Jamstack hosting with automated Git deployments and ultra-fast edge network delivery.",
    },
    highlightColor: "#F38020",
  },
  {
    id: "github",
    name: "GitHub",
    category: "devops",
    status: "production",
    tagline: {
      id: "Version Control & CI/CD",
      en: "Version Control & CI/CD",
    },
    description: {
      id: "Pusat kolaborasi kode, workflow branching Git terstruktur, pull request review, dan pipeline CI/CD GitHub Actions.",
      en: "Collaborative code repository, structured Git branching, pull request reviews, and CI/CD automation.",
    },
    highlightColor: "#181717",
  },
  {
    id: "postman",
    name: "Postman",
    category: "devops",
    status: "production",
    tagline: {
      id: "API Testing & Documentation",
      en: "API Testing & Documentation",
    },
    description: {
      id: "Pengujian endpoint REST API secara komprehensif, environment variable management, dan automated collection runner.",
      en: "Comprehensive REST API testing, environment variable management, and automated collection runs.",
    },
    highlightColor: "#FF6C37",
  },
];
