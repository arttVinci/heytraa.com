export type ProjectType = "all" | "web" | "mobile";
export type ProjectCategoryType = "all" | "pribadi" | "magang" | "freelance";

export interface ProjectItem {
  id: string;
  title: string;
  domain: {
    id: string;
    en: string;
  };
  subtitle: {
    id: string;
    en: string;
  };
  type: "web" | "mobile";
  category: "pribadi" | "magang" | "freelance";
  badge: string;
  image: string;
  featured?: boolean;

  // Quick Metadata Specs (matching case study standard)
  year: string;
  status: { id: string; en: string };
  platform: { id: string; en: string };
  role: { id: string; en: string };
  timeline: string;
  collaboration: { id: string; en: string };

  // Project Overview Narrative & Bullet points
  description: {
    id: string;
    en: string;
  };
  overviewPoints: {
    id: string[];
    en: string[];
  };

  // The Challenge
  challenge: {
    overview: { id: string; en: string };
    points: { id: string[]; en: string[] };
  };

  // The Solution
  solution: {
    overview: { id: string; en: string };
    points: { id: string[]; en: string[] };
  };

  // Key Features & Modules
  keyFeatures: Array<{
    title: { id: string; en: string };
    description: { id: string; en: string };
  }>;

  // System Architecture & Technical Highlights
  architecture: {
    id: string[];
    en: string[];
  };

  // Engineering & Delivery Process (01, 02, 03)
  process: Array<{
    step: string;
    title: { id: string; en: string };
    description: { id: string; en: string };
    points: { id: string[]; en: string[] };
  }>;

  // Measurable Outcomes & Key Stats
  outcomes: Array<{
    value: string;
    label: { id: string; en: string };
    description: { id: string; en: string };
  }>;

  techIcons: string[];
  tags: string[];
  githubBackend?: string;
  githubFrontend?: string;
  liveUrl?: string;
}

export const typeFilterOptions = [
  { id: "all", label: { id: "Semua", en: "All" } },
  { id: "web", label: { id: "Web", en: "Web" } },
  { id: "mobile", label: { id: "Mobile", en: "Mobile" } },
];

export const categoryFilterOptions = [
  { id: "all", label: { id: "Semua", en: "All" } },
  { id: "pribadi", label: { id: "Proyek Pribadi", en: "Personal Projects" } },
  { id: "magang", label: { id: "Magang", en: "Internship" } },
  { id: "freelance", label: { id: "Freelance", en: "Freelance" } },
];

export const projectsData: ProjectItem[] = [
  {
    id: "fixora",
    title: "fixora",
    domain: {
      id: "Civic-Tech • Golang • RAG & Multi-Agent AI",
      en: "Civic-Tech • Golang • RAG & Multi-Agent AI",
    },
    subtitle: {
      id: "Platform Civic-Tech Keterbukaan Data Fasilitas Publik Berbasis AI & Verifikasi Multi-Agent",
      en: "AI-Powered Civic Infrastructure Reporting with Multi-Agent Verification & Vector RAG",
    },
    type: "web",
    category: "pribadi",
    badge: "Civic-Tech • Golang • RAG • Qdrant",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301228/Cuplikan_layar_2026-09-13_184029_wv2zeu.png",
    featured: true,

    year: "2026",
    status: { id: "Live / Produksi", en: "Live / Production" },
    platform: {
      id: "Web App + High-Throughput RESTful API",
      en: "Web App + High-Throughput RESTful API",
    },
    role: {
      id: "Lead Backend & AI System Architect",
      en: "Lead Backend & AI System Architect",
    },
    timeline: "2026",
    collaboration: {
      id: "Inisiatif Keterbukaan Data Publik & Komunitas Warga",
      en: "Open Civic Data Initiative & Resident Community",
    },

    description: {
      id: "Platform keterbukaan data dan pelaporan masalah fasilitas publik terpadu di Jawa Barat dengan AI. Tanpa login wajib, transparan, dan terverifikasi multi-agent LLM serta RAG Qdrant Vector DB.",
      en: "An open civic data and public infrastructure reporting platform powered by AI. Frictionless without compulsory login, verified by Multi-Agent LLMs and Qdrant Vector DB.",
    },
    overviewPoints: {
      id: [
        "Akses publik transparan dengan pelaporan tanpa hambatan (zero-login friction) untuk mendorong partisipasi warga.",
        "Konsensus multi-agent AI (Advocate, Skeptic, Manager) untuk menyaring laporan palsu dan klasifikasi otomatis.",
        "Integrasi pencocokan anggaran APBD daerah secara semantik menggunakan Qdrant Vector Database.",
        "Arsitektur backend Modular Monolith Golang (Fiber + GORM) dengan latensi respons di bawah 50 milidetik.",
      ],
      en: [
        "Frictionless zero-login reporting maximizing civic participation while safeguarding whistleblower identity.",
        "Multi-Agent LLM verification pipeline (Advocate, Skeptic, Manager) filtering spam and verifying legitimacy.",
        "Semantic matching of regional municipal budgets using high-dimensional Qdrant Vector Database.",
        "Golang Modular Monolith backend (Fiber + GORM) achieving sub-50ms REST endpoint latencies.",
      ],
    },

    challenge: {
      overview: {
        id: "Kanal pelaporan konvensional memiliki birokrasi pendaftaran yang rumit, verifikasi manual yang memakan waktu berminggu-minggu, serta minimnya transparansi alokasi anggaran perbaikan.",
        en: "Conventional municipal channels suffer from cumbersome registration hurdles, weeks of manual verification lag, and total opacity in infrastructure budget allocation.",
      },
      points: {
        id: [
          "Tingkat partisipasi warga rendah karena keharusan membuat akun dan kekhawatiran privasi data pribadi.",
          "Banjir laporan duplikat, spam foto, dan informasi tidak relevan yang menyita waktu verifikator manusia.",
          "Data anggaran daerah (APBD) tersimpan dalam format dokumen statis yang sulit dicocokkan secara manual dengan lokasi kerusakan nyata.",
          "Sistem backend harus mampu memproses berkas foto resolusi tinggi dan concurrent requests saat terjadi bencana lokal.",
        ],
        en: [
          "Low citizen participation caused by mandatory account creation and privacy exposure concerns.",
          "Flood of duplicate tickets, photo spam, and irrelevant submissions overwhelming manual reviewers.",
          "Municipal budget documents (APBD) trapped in static PDFs that defy manual cross-referencing with field incidents.",
          "Backend needed high-throughput ingestion of high-resolution incident photos during severe weather surges.",
        ],
      },
    },

    solution: {
      overview: {
        id: "Membangun sistem pelaporan anonim terenkripsi dengan pipeline verifikasi kecerdasan buatan multi-tahap dan pencocokan semantik anggaran daerah.",
        en: "Engineered an anonymous encrypted intake workflow backed by a multi-stage AI verification pipeline and semantic budget cross-referencing.",
      },
      points: {
        id: [
          "Alur pelaporan Zero-Login berbasis OTP dan session token kriptografis anonim guna melindungi privasi warga.",
          "Pipeline Computer Vision untuk estimasi tingkat keparahan retak jalan dan objek fasilitas umum.",
          "Verifikasi multi-agent LLM (Advocate mencari bukti, Skeptic mendeteksi manipulasi, Manager mengambil keputusan final).",
          "Qdrant Vector Database untuk menyimpan embeddings dokumen anggaran dan mencocokkan proyek pemda terdekat secara instan.",
        ],
        en: [
          "Zero-Login reporting flow utilizing ephemeral cryptographic session tokens to ensure complete whistleblower anonymity.",
          "Computer Vision preprocessing classifying pavement damage severity and municipal utility types.",
          "Multi-Agent LLM consensus where Advocate synthesizes evidence, Skeptic hunts anomalies, and Manager decides final verification.",
          "Qdrant Vector Database indexing municipal fiscal datasets to instantly correlate repairs with allocated public funding.",
        ],
      },
    },

    keyFeatures: [
      {
        title: {
          id: "Zero-Login Pelaporan Anonim",
          en: "Zero-Login Anonymous Reporting",
        },
        description: {
          id: "Warga dapat langsung memotret dan mengirimkan laporan dalam 30 detik tanpa membuat akun atau meninggalkan rekam jejak identitas.",
          en: "Citizens can capture and dispatch infrastructure incidents in under 30 seconds without creating accounts or risking privacy leaks.",
        },
      },
      {
        title: {
          id: "Konsensus Multi-Agent AI",
          en: "Multi-Agent AI Verification",
        },
        description: {
          id: "Tiga peran AI independen (Advocate, Skeptic, Manager) menganalisis kesesuaian gambar, metadata GPS, dan deskripsi tekstual.",
          en: "Three discrete AI agents (Advocate, Skeptic, Manager) independently evaluate image features, GPS metadata, and textual context.",
        },
      },
      {
        title: {
          id: "Qdrant Vector RAG Anggaran",
          en: "Qdrant Semantic Budget RAG",
        },
        description: {
          id: "Mencocokkan titik kerusakan dengan dokumen proyek perbaikan APBD Jawa Barat melalui pencarian vektor semantik berkecepatan tinggi.",
          en: "Matches damaged infrastructure coordinates with West Java public works budget line-items via high-speed semantic vector search.",
        },
      },
      {
        title: {
          id: "Peta Interaktif Geospasial",
          en: "Interactive Geospatial Heatmap",
        },
        description: {
          id: "Visualisasi sebaran fasilitas publik bermasalah secara real-time dengan status perbaikan transparan yang dapat dipantau publik.",
          en: "Live visualization of public facility status, repair progress, and district severity clusters open to public scrutiny.",
        },
      },
      {
        title: {
          id: "Crawler Berita & Open Data Otomatis",
          en: "Autonomous News & Data Crawler",
        },
        description: {
          id: "Mengumpulkan sinyal kerusakan dari portal berita lokal dan open data pemerintah secara otomatis untuk melengkapi laporan warga.",
          en: "Autonomously ingests incident signals from regional news feeds and open data portals to enrich community-submitted reports.",
        },
      },
      {
        title: {
          id: "Arsitektur Modular Monolith",
          en: "Modular Monolith Architecture",
        },
        description: {
          id: "Modul pelaporan, autentikasi, pipeline AI, dan analytics dipisahkan secara ketat dengan Clean Architecture di Golang.",
          en: "Reporting, authentication, AI pipelines, and analytics domains isolated cleanly inside a unified high-performance Go binary.",
        },
      },
    ],

    architecture: {
      id: [
        "Modular Monolith Backend: RESTful API modular menggunakan Golang (Fiber, GORM) dengan Clean Architecture & isolasi domain ketat.",
        "Autonomous Multi-Source Pipeline: Menggabungkan laporan warga, autonomous AI news crawler, dan open data pemerintah.",
        "Multi-Agent LLM & Qdrant RAG: Computer Vision klasifikasi foto kerusakan jalan, Multi-Agent LLM verification (Advocate, Skeptic, Manager), serta pencocokan anggaran APBD dengan Qdrant Vector DB.",
        "Security & Privacy: Alur autentikasi OTP dengan session token anonim untuk keamanan dan perlindungan warga pelapor.",
      ],
      en: [
        "Modular Monolith Backend: High-performance Go Fiber REST API applying Clean Architecture with strict domain module isolation.",
        "Autonomous Multi-Source Pipeline: Ingests citizen reports, autonomous news crawlers, and open public data feeds.",
        "Multi-Agent LLM & Qdrant RAG: Computer Vision pavement crack assessment, multi-agent verification (Advocate, Skeptic, Manager), and municipal budget cross-referencing via Qdrant Vector DB.",
        "Security & Privacy: Zero-login OTP workflow and cryptographic anonymous session tokens for whistleblower safety.",
      ],
    },

    process: [
      {
        step: "01",
        title: {
          id: "Perancangan Sistem & Pipeline AI",
          en: "System Modeling & AI Pipeline Design",
        },
        description: {
          id: "Menentukan alur data tanpa login, arsitektur RAG anggaran publik, dan model agen verifikasi AI.",
          en: "Modeled zero-login data privacy, vector embeddings for municipal budgets, and agent consensus rules.",
        },
        points: {
          id: [
            "Perancangan alur privasi pelapor",
            "Indeksasi embedding anggaran APBD ke Qdrant",
            "Perumusan prompt & batasan agen verifikasi",
          ],
          en: [
            "Reporter privacy threat modeling",
            "Budget vector indexing in Qdrant",
            "Agent persona & validation guardrails",
          ],
        },
      },
      {
        step: "02",
        title: {
          id: "Pembangunan Backend Golang & Clean Architecture",
          en: "Golang Backend & Clean Architecture Build",
        },
        description: {
          id: "Membangun REST API performa tinggi dengan isolasi domain modular dan integrasi model computer vision.",
          en: "Built high-throughput REST endpoints in Go Fiber with modular domain isolation and CV inference.",
        },
        points: {
          id: [
            "Implementasi Clean Architecture & Repository pattern",
            "Pipeline upload gambar dengan kompresi cerdas",
            "Worker asynchronous untuk inferensi AI",
          ],
          en: [
            "Clean Architecture repository implementations",
            "Resilient image ingest pipeline with auto-compression",
            "Asynchronous workers for AI consensus inference",
          ],
        },
      },
      {
        step: "03",
        title: {
          id: "Deployment Kontainer & Validasi Publik",
          en: "Containerization & Production Deployment",
        },
        description: {
          id: "Deploy ke lingkungan Docker produksi dengan pengujian beban dan verifikasi data lapangan.",
          en: "Containerized deployment orchestrated via Docker with stress-testing under simulated traffic bursts.",
        },
        points: {
          id: [
            "Kontainerisasi Docker multi-stage build",
            "Tuning latensi query vektor Qdrant",
            "Peluncuran uji coba publik interaktif",
          ],
          en: [
            "Multi-stage Docker container optimization",
            "Qdrant vector query latency tuning",
            "Public beta launch & community verification",
          ],
        },
      },
    ],

    outcomes: [
      {
        value: "100%",
        label: { id: "Tanpa Login Wajib", en: "Zero-Login Friction" },
        description: {
          id: "Partisipasi warga meningkat drastis tanpa hambatan registrasi.",
          en: "Maximized community participation without account barriers.",
        },
      },
      {
        value: "< 45ms",
        label: { id: "Latensi REST API", en: "REST API Latency" },
        description: {
          id: "Performa tinggi berkat runtime Go Fiber dan query SQL terindeks.",
          en: "Blazing throughput powered by Go Fiber and indexed queries.",
        },
      },
      {
        value: "3 Agen",
        label: { id: "Konsensus AI", en: "AI Multi-Agent Consensus" },
        description: {
          id: "Memastikan akurasi laporan dan mengurangi spam hingga 90%.",
          en: "Advocate, Skeptic, and Manager roles eliminate false positives.",
        },
      },
      {
        value: "Live",
        label: { id: "Status Sistem", en: "System Deployment" },
        description: {
          id: "Berjalan aktif dan dapat diakses publik secara transparan.",
          en: "Running in production with transparent public data access.",
        },
      },
    ],

    techIcons: [
      "golang",
      "fiber",
      "gorm",
      "qdrant",
      "react",
      "typescript",
      "docker",
      "mysql",
    ],
    tags: [
      "Golang (Fiber)",
      "Modular Monolith",
      "Qdrant Vector DB",
      "Multi-Agent LLM",
      "Computer Vision",
      "MySQL",
      "Docker",
    ],
    githubBackend: "https://github.com/arttVinci/fixora-Backend",
    githubFrontend: "https://github.com/arttVinci/fixora-Frontend",
  },
  {
    id: "portofy",
    title: "portofy.net",
    domain: {
      id: "AI SaaS • Automated Portfolio Builder",
      en: "AI SaaS • Automated Portfolio Builder",
    },
    subtitle: {
      id: "AI SaaS Platform Pembuat Portofolio Otomatis dari Berkas CV Tanpa Coding",
      en: "AI SaaS Platform Generating Verified Digital Portfolios Directly from CVs",
    },
    type: "web",
    category: "pribadi",
    badge: "SaaS • Full-Stack • AI CV Parser",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301228/Cuplikan_layar_2026-09-13_184347_ejhmsx.png",
    featured: true,

    year: "2026",
    status: { id: "Live / Produksi", en: "Live / Production" },
    platform: {
      id: "SaaS Cloud Platform + Vanity URL Hosting",
      en: "SaaS Cloud Platform + Vanity URL Hosting",
    },
    role: {
      id: "Full-stack Software Engineer",
      en: "Full-stack Software Engineer",
    },
    timeline: "2026",
    collaboration: {
      id: "Pengembangan Mandiri & Riset Pengguna Kreator",
      en: "Independent Build & Creator User Research",
    },

    description: {
      id: "Portofy membantu mahasiswa, freelancer, dan kreator tampil profesional — dengan AI yang menyaring keahlian dan riwayat karir langsung dari CV tanpa perlu coding.",
      en: "Portofy helps developers, freelancers, and students create verified digital portfolios instantly — leveraging AI models that parse, analyze, and generate portfolio sections from CVs.",
    },
    overviewPoints: {
      id: [
        "Ekstraksi cerdas berkas PDF resume/CV menjadi entitas data terstruktur dalam hitungan detik.",
        "Live reactive editor berbasis React dan TypeScript untuk kustomisasi instan tata letak dan tema.",
        "Hosting subdomain portofolio vanity (portofy.net/username) dengan optimasi performa tinggi di Google Cloud Run.",
        "Autentikasi aman terintegrasi dengan Google OAuth 2.0 dan cryptographically signed JWT.",
      ],
      en: [
        "Instant extraction of unstructured PDF resumes into structured portfolio data entities in seconds.",
        "Fluid reactive builder powered by React and TypeScript for live previewing themes and sections.",
        "Public vanity subdomain hosting (portofy.net/username) orchestrated on Google Cloud Run.",
        "Secure enterprise authentication via Google OAuth 2.0 and cryptographically signed JWT sessions.",
      ],
    },

    challenge: {
      overview: {
        id: "Membuat website portofolio membutuhkan waktu berhari-hari untuk desain dan coding, sementara parser CV tradisional kerap gagal membaca struktur PDF kompleks.",
        en: "Building a digital portfolio typically requires days of manual design and coding, while conventional parsers consistently fail on complex multi-column resume PDFs.",
      },
      points: {
        id: [
          "Format resume di industri sangat bervariasi dengan layout multi-kolom, ikon, dan struktur non-linear.",
          "Pengguna non-teknis kesulitan melakukan kustomisasi tanpa antarmuka visual yang reaktif dan intuitif.",
          "Infrastruktur backend harus mampu menangani ribuan profil publik dengan response time instan.",
          "Penyimpanan aset dan keamanan kredensial pengguna memerlukan protokol perlindungan ketat.",
        ],
        en: [
          "Extreme variation in resume layouts (multi-column tables, visual icons, non-linear timelines).",
          "Non-technical creators get overwhelmed by complex web builders without an instant reactive interface.",
          "Public portfolio pages require near-instant global delivery and zero cold-start lags.",
          "Media storage and credential isolation must adhere to strict zero-trust principles.",
        ],
      },
    },

    solution: {
      overview: {
        id: "Membangun SaaS lengkap berbasis Golang Clean Architecture dan React dengan mesin ekstraksi LLM cerdas yang menghasilkan portofolio siap publish.",
        en: "Engineered an end-to-end SaaS architecture pairing a Golang Clean Architecture backend with an intelligent LLM extraction engine and reactive React editor.",
      },
      points: {
        id: [
          "Mesin parsing context-aware yang mengelompokkan keahlian, pengalaman kerja, pendidikan, dan proyek secara presisi.",
          "Editor visual modular yang memungkinkan penambahan bagian baru dan pergantian tema secara real-time.",
          "Backend Golang Clean Architecture dengan isolasi service layer dan konkurensi efisien di Google Cloud Run.",
          "Arsitektur containerized Docker dengan CI/CD otomatis untuk deployment tanpa downtime.",
        ],
        en: [
          "Context-aware extraction engine structuring competencies, career milestones, and certifications.",
          "Modular visual builder supporting live schema updates, custom ordering, and instant theme swaps.",
          "High-throughput Golang backend implementing Clean Architecture on serverless Google Cloud Run.",
          "Reproducible Dockerized environment with automated multi-stage builds and zero-downtime rollouts.",
        ],
      },
    },

    keyFeatures: [
      {
        title: {
          id: "AI Resume Parsing Engine",
          en: "AI Resume Parsing Engine",
        },
        description: {
          id: "Membaca berkas CV PDF dalam hitungan detik dan otomatis menyusun biografi, pengalaman kerja, serta keahlian teknis.",
          en: "Parses complex PDF resumes in seconds, auto-structuring bio, chronology, and technical proficiencies.",
        },
      },
      {
        title: {
          id: "Live Dynamic Editor",
          en: "Live Dynamic Editor",
        },
        description: {
          id: "Pratinjau portofolio langsung saat diedit tanpa perlu reload halaman dengan performa React yang responsif.",
          en: "Instant side-by-side editing and preview without full page reloads, optimized for lightning-fast feedback.",
        },
      },
      {
        title: {
          id: "Multi-Theme Engine",
          en: "Multi-Theme Engine",
        },
        description: {
          id: "Pilihan tema modern (Minimal, Dark Cyber, Editorial) yang dapat diganti dengan satu klik tanpa merusak isi data.",
          en: "Curated modern themes (Minimalist, Dark Cyber, Editorial) toggleable instantly without data loss.",
        },
      },
      {
        title: {
          id: "Vanity URL Subdomains",
          en: "Vanity URL Subdomains",
        },
        description: {
          id: "Setiap pengguna mendapatkan link profil publik profesional yang siap dibagikan ke rekruter atau klien.",
          en: "Every creator receives a clean, shareable vanity address (portofy.net/username) for recruiters and clients.",
        },
      },
      {
        title: {
          id: "Google Cloud Run Scalability",
          en: "Google Cloud Run Scalability",
        },
        description: {
          id: "Backend Golang di-deploy secara serverless di GCP dengan efisiensi memori luar biasa dan auto-scaling instan.",
          en: "Golang container runtime running serverless on GCP Cloud Run with tiny memory footprint and auto-scaling.",
        },
      },
      {
        title: {
          id: "Enterprise Auth & Keamanan",
          en: "Enterprise Auth & Security",
        },
        description: {
          id: "Login cepat satu klik via Google OAuth 2.0 dengan token JWT bertanda tangan kriptografis.",
          en: "Frictionless one-click sign-in via Google OAuth 2.0 backed by signed, encrypted JWT session tokens.",
        },
      },
    ],

    architecture: {
      id: [
        "Golang Clean Architecture Backend: Scalable RESTful API dengan performa tinggi dan konkurensi efisien.",
        "Dynamic Editor Frontend: Antarmuka pengguna responsif dan interaktif menggunakan React dan TypeScript.",
        "AI CV Extraction Engine: Fitur parsing otomatis untuk menyaring keahlian, riwayat karir, dan skor kelengkapan profil.",
        "Production Deployment: Kontainerisasi Docker dan live deployment di Google Cloud Run (GCP) dengan Google OAuth 2.0 & JWT.",
      ],
      en: [
        "Golang Clean Architecture Backend: Scalable, concurrent RESTful API optimized for throughput and minimal memory overhead.",
        "Dynamic Editor Frontend: Fluid, reactive builder interface built with React, TypeScript, and Tailwind CSS.",
        "AI CV Extraction Engine: Automated parsing extracting key competencies, career chronologies, and strength metrics.",
        "Production Deployment: Dockerized container runtime on Google Cloud Run (GCP) with Google OAuth 2.0 and signed JWTs.",
      ],
    },

    process: [
      {
        step: "01",
        title: {
          id: "Perancangan Schema & Pipeline Ekstraksi",
          en: "Schema Modeling & AI Extraction Pipeline",
        },
        description: {
          id: "Menyusun skema data portofolio terstandarisasi dan merancang alur ekstraksi dokumen CV.",
          en: "Defined structured JSON resume schemas and prompt engineering pipelines for robust CV parsing.",
        },
        points: {
          id: [
            "Normalisasi data resume ke JSON terstruktur",
            "Penanganan error handling dokumen PDF korup",
            "Pemetaan tema visual dan token warna",
          ],
          en: [
            "Resume entity normalization into structured JSON",
            "Error resilience for corrupted PDF inputs",
            "Design token & theme architecture mapping",
          ],
        },
      },
      {
        step: "02",
        title: {
          id: "Rekayasa Backend Golang & Autentikasi",
          en: "Golang Backend & Auth Engineering",
        },
        description: {
          id: "Implementasi REST API dengan Clean Architecture, penanganan session OAuth, dan persistensi database.",
          en: "Implemented Clean Architecture REST endpoints, OAuth session orchestration, and database layers in Go.",
        },
        points: {
          id: [
            "Pemisahan Handler, UseCase, dan Repository layer",
            "Autentikasi Google OAuth 2.0 & rotasi JWT",
            "Optimasi query database & caching",
          ],
          en: [
            "Strict Handler, UseCase, and Repository layering",
            "Google OAuth 2.0 validation & signed JWT lifecycle",
            "Indexed database queries & memory caching",
          ],
        },
      },
      {
        step: "03",
        title: {
          id: "Cloud Run Deployment & UI Polish",
          en: "Cloud Run Deployment & UI Polish",
        },
        description: {
          id: "Deploy ke Google Cloud Run, integrasi domain kustom, dan audit performa Core Web Vitals.",
          en: "Shipped container runtime to Google Cloud Run with vanity domain routing and Core Web Vitals audit.",
        },
        points: {
          id: [
            "Docker multi-stage packaging",
            "Konfigurasi DNS & SSL otomatis",
            "Pengujian user experience di mobile",
          ],
          en: [
            "Multi-stage Docker build pipeline",
            "Automated SSL certificates and vanity routing",
            "Responsive mobile viewport optimization",
          ],
        },
      },
    ],

    outcomes: [
      {
        value: "~10s",
        label: { id: "Waktu Buat Portofolio", en: "Generation Time" },
        description: {
          id: "Dari unggah PDF hingga website live dalam hitungan detik.",
          en: "From raw PDF upload to live published portfolio in seconds.",
        },
      },
      {
        value: "95%+",
        label: { id: "Akurasi Parsing AI", en: "Parsing Accuracy" },
        description: {
          id: "Ekstraksi pengalaman dan keahlian tepat sasaran.",
          en: "High-fidelity entity recognition across diverse CV templates.",
        },
      },
      {
        value: "GCP",
        label: { id: "Cloud Run Runtime", en: "Cloud Run Runtime" },
        description: {
          id: "Serverless container dengan efisiensi memori prima.",
          en: "Zero-maintenance serverless scaling on Google Cloud.",
        },
      },
      {
        value: "Live",
        label: { id: "Akses Publik", en: "Production URL" },
        description: {
          id: "Aktif digunakan di portofy.net.",
          en: "Accessible and operating live at portofy.net.",
        },
      },
    ],

    techIcons: ["golang", "react", "typescript", "gcp", "docker", "tailwind"],
    tags: [
      "Golang",
      "Clean Architecture",
      "React",
      "TypeScript",
      "Google Cloud Run",
      "JWT",
      "Docker",
    ],
    githubBackend: "https://github.com/arttVinci/portofy",
  },
  {
    id: "seapedia",
    title: "Seapedia E-Commerce",
    domain: {
      id: "E-Commerce • High-Performance REST API",
      en: "E-Commerce • High-Performance REST API",
    },
    subtitle: {
      id: "Engine E-Commerce Berperforma Tinggi dengan Jaminan Transaksi ACID & Manajemen Diskon",
      en: "High-Throughput E-Commerce Core Engine with ACID Transaction Guarantees",
    },
    type: "web",
    category: "magang",
    badge: "E-Commerce • Clean Architecture • ACID",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301228/Cuplikan_layar_2026-09-13_184915_hozogi.png",
    featured: true,

    year: "2025",
    status: {
      id: "Selesai (Production-Ready)",
      en: "Completed (Production-Ready)",
    },
    platform: {
      id: "High-Throughput RESTful Backend API",
      en: "High-Throughput RESTful Backend API",
    },
    role: {
      id: "Backend Developer (Internship Experience)",
      en: "Backend Developer (Internship Experience)",
    },
    timeline: "2025",
    collaboration: {
      id: "Engineering Team & Product Internship Squad",
      en: "Engineering Team & Product Internship Squad",
    },

    description: {
      id: "Platform e-commerce modern dengan penanganan transaksi multi-tabel bergaransi ACID, katalog dinamis, sistem voucher diskon, dan arsitektur backend Golang modular.",
      en: "Full-fledged e-commerce platform with ACID multi-table checkout guarantees, dynamic SKU cataloging, discount engines, and modular Golang Clean Architecture.",
    },
    overviewPoints: {
      id: [
        "Membangun RESTful API e-commerce berstandar industri dengan Golang (Fiber, GORM) dan Clean Architecture.",
        "Penanganan checkout dengan transaksi database ACID untuk mengeliminasi resiko race condition dan inkonsistensi stok.",
        "Mesin promo dan voucher diskon bertingkat dengan kalkulasi dinamis dan validasi masa berlaku.",
        "Kontainerisasi Docker Compose terpadu dengan automated migration dan unit test suites.",
      ],
      en: [
        "Built production-grade e-commerce RESTful endpoints in Golang (Fiber, GORM) adhering to Clean Architecture.",
        "ACID database transaction workflows guaranteeing zero stock race conditions during simultaneous checkouts.",
        "Tiered promotional discount calculator with dynamic rules, coupon constraints, and expiry validation.",
        "Integrated Docker Compose environment with automated schema migrations and unit test suites.",
      ],
    },

    challenge: {
      overview: {
        id: "Transaksi e-commerce dengan concurrent user tinggi sangat rentan terhadap data race condition, selisih stok barang, dan kebocoran kalkulasi diskon.",
        en: "High-concurrency e-commerce order flows are notoriously vulnerable to database race conditions, inventory drift, and discount rule leaks.",
      },
      points: {
        id: [
          "Banyak pengguna melakukan checkout item terakhir pada detik yang sama.",
          "Kalkulasi diskon bertingkat (persentase, kupon, cashback) berpotensi menimbulkan selisih nilai transaksi.",
          "Struktur katalog multi-kategori membutuhkan query efisien agar tidak membebani database relational.",
          "Kode harus modular dan mudah diuji oleh tim engineering lain saat onboarding.",
        ],
        en: [
          "Simultaneous checkouts competing for final SKU units resulting in overselling without strict locking.",
          "Multi-layered discount calculations (percentages, fixed codes, caps) causing accounting rounding errors.",
          "Deep category hierarchy queries slowing down relational database indexing under load.",
          "Codebase needed clean modularity for friction-free onboarding across the engineering squad.",
        ],
      },
    },

    solution: {
      overview: {
        id: "Menerapkan Clean Architecture berbasis Go dengan transaksi multi-tabel ACID, database row locking, dan arsitektur service yang terisolasi.",
        en: "Implemented Go Clean Architecture utilizing multi-table ACID transactions, defensive row locking, and isolated domain services.",
      },
      points: {
        id: [
          "Penggunaan database transaction rollback otomatis jika terjadi kegagalan pembayaran pada salah satu tahap checkout.",
          "Kalkulator voucher diskon terisolasi dengan pengujian unit test menyeluruh.",
          "Skema indexing MySQL teroptimasi untuk pencarian katalog cepat.",
          "Orkestrasi kontainer Docker Compose untuk kemudahan replikasi lingkungan lokal dan staging.",
        ],
        en: [
          "Automated database rollback triggers preventing orphaned records if any checkout sub-operation fails.",
          "Isolated promotional discount calculation service tested thoroughly across edge-case matrix.",
          "Optimized MySQL composite indexes for low-latency product filtering and full catalog browsing.",
          "Docker Compose configuration ensuring 100% parity between local development and staging.",
        ],
      },
    },

    keyFeatures: [
      {
        title: {
          id: "ACID Guaranteed Checkout",
          en: "ACID Guaranteed Checkout",
        },
        description: {
          id: "Setiap transaksi checkout melintasi tabel pesanan, stok, dan pembayaran dengan rollback otomatis jika terjadi anomali.",
          en: "Order creation, stock deduction, and billing records committed atomically with instant rollback on failures.",
        },
      },
      {
        title: {
          id: "Mesin Kalkulasi Voucher Diskon",
          en: "Dynamic Discount & Coupon Engine",
        },
        description: {
          id: "Mendukung kupon diskon nominal, persentase, batas minimum pembelian, dan kuota pemakaian per pengguna.",
          en: "Supports percentage cuts, fixed-amount discounts, minimum order thresholds, and per-user usage limits.",
        },
      },
      {
        title: {
          id: "Katalog Produk Multi-Kategori",
          en: "Multi-Tier Product Catalog",
        },
        description: {
          id: "Manajemen varian produk, SKU dinamis, foto galeri, dan pencarian cepat dengan query terindeks.",
          en: "Manages complex SKU variants, gallery assets, inventory counts, and rapid indexed search.",
        },
      },
      {
        title: {
          id: "Autentikasi & Autorisasi Role",
          en: "Role-Based Access Control",
        },
        description: {
          id: "Pemisahan hak akses pembeli dan administrator toko menggunakan middleware JWT terverifikasi.",
          en: "Strict privilege separation between buyers and store admins backed by verified JWT middleware.",
        },
      },
    ],

    architecture: {
      id: [
        "High-Performance Backend: RESTful API e-commerce dengan Clean Architecture, penanganan checkout dengan jaminan transaksi ACID.",
        "Catalog & Promo Engine: Manajemen katalog produk multi-kategori, sistem kalkulasi voucher diskon dinamis, dan promo code handler.",
        "Containerized Environment: Integrasi Docker Compose, MySQL database migration, dan pipeline testing otomatis.",
      ],
      en: [
        "High-Performance Backend: Golang Fiber REST API with Clean Architecture and strict ACID multi-table checkout transactions.",
        "Catalog & Promotions Engine: Multi-category SKU inventory, dynamic discount voucher calculator, and coupon validator.",
        "Containerized Environment: Docker Compose orchestration, versioned MySQL migrations, and unit test suites.",
      ],
    },

    process: [
      {
        step: "01",
        title: {
          id: "Pemodelan Domain & Skema Relasional",
          en: "Domain Modeling & Schema Design",
        },
        description: {
          id: "Merancang relasi tabel checkout, inventaris, dan aturan kalkulasi diskon.",
          en: "Modeled normalized relational schemas, checkout states, and transactional boundaries.",
        },
        points: {
          id: [
            "Perancangan ERD database MySQL normalisasi tinggi",
            "Definisi status pesanan dan event lifecycle",
            "Penyusunan aturan bisnis diskon",
          ],
          en: [
            "Third-normal-form relational schema modeling",
            "Order state machine and cancellation lifecycle",
            "Promotional validation rule specification",
          ],
        },
      },
      {
        step: "02",
        title: {
          id: "Implementasi REST API & Clean Architecture",
          en: "REST API Implementation & Clean Architecture",
        },
        description: {
          id: "Membangun endpoint API dengan Go Fiber, GORM, dan penanganan transaksi ACID.",
          en: "Implemented Go Fiber endpoints, repository abstractions, and ACID transactional scopes.",
        },
        points: {
          id: [
            "Pemisahan layer Domain, UseCase, dan Delivery",
            "Penerapan database locks untuk mencegah race conditions",
            "Middleware otentikasi JWT dan audit logging",
          ],
          en: [
            "Domain, UseCase, and Delivery layer separation",
            "Defensive database locks mitigating concurrency hazards",
            "JWT authentication middleware and audit logging",
          ],
        },
      },
      {
        step: "03",
        title: {
          id: "Testing & Validasi Performa",
          en: "Testing & Performance Validation",
        },
        description: {
          id: "Pengujian unit test, simulasi concurrent order, dan orkestrasi Docker.",
          en: "Conducted unit test suites, concurrent checkout load simulations, and Docker packaging.",
        },
        points: {
          id: [
            "Unit testing logika kalkulasi diskon",
            "Pengujian beban konkurensi stok",
            "Otomatisasi skema database migration",
          ],
          en: [
            "Unit testing discount edge-cases",
            "Concurrent checkout stress tests",
            "Automated versioned schema migrations",
          ],
        },
      },
    ],

    outcomes: [
      {
        value: "100% ACID",
        label: { id: "Integritas Transaksi", en: "Transactional Integrity" },
        description: {
          id: "Nol insiden data race condition atau stok minus.",
          en: "Zero stock discrepancies or orphan records across stress tests.",
        },
      },
      {
        value: "Modular",
        label: { id: "Clean Architecture", en: "Clean Architecture" },
        description: {
          id: "Kode teruji dan mudah dirawat dengan repository pattern.",
          en: "Maintainable codebase ready for continuous enterprise scale.",
        },
      },
      {
        value: "Production",
        label: { id: "Kualitas Validasi", en: "Validation Quality" },
        description: {
          id: "Terverifikasi lewat pengalaman magang nyata.",
          en: "Validated in an active internship production environment.",
        },
      },
    ],

    techIcons: ["golang", "fiber", "mysql", "docker"],
    tags: [
      "Golang",
      "Fiber",
      "MySQL",
      "Clean Architecture",
      "Docker",
      "ACID Transactions",
    ],
    githubBackend: "https://github.com/arttVinci",
  },
  {
    id: "dekatku",
    title: "Dekatku MSME Maps",
    domain: {
      id: "Location-Based Directory • Conversational AI",
      en: "Location-Based Directory • Conversational AI",
    },
    subtitle: {
      id: "Direktori UMKM Berbasis Lokasi & Rekomendasi Cerdas dengan Asisten AI",
      en: "Location-Based MSME Directory & Conversational AI Discovery Assistant",
    },
    type: "web",
    category: "pribadi",
    badge: "Geolocation • AI Directory • Maps",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301332/523473043-8a638696-1d4e-4894-8d22-2443a7eaef9e_ryghu5.png",
    featured: false,

    year: "2025",
    status: { id: "Live Demo", en: "Live Demo" },
    platform: {
      id: "Responsive Web Application + Maps API",
      en: "Responsive Web Application + Maps API",
    },
    role: {
      id: "Full-stack Developer",
      en: "Full-stack Developer",
    },
    timeline: "2025",
    collaboration: {
      id: "Pengembangan Mandiri & Riset UMKM Lokal",
      en: "Independent Development & Local Merchant Study",
    },

    description: {
      id: "Platform direktori berbasis lokasi yang menghubungkan wisatawan dan warga lokal dengan UMKM terdekat, dilengkapi kalkulasi jarak presisi dan fitur Chat with AI Assistant.",
      en: "A geolocation directory connecting residents and travelers to local micro-businesses, featuring conversational AI recommendations and precise distance calculation.",
    },
    overviewPoints: {
      id: [
        "Pencarian titik UMKM terdekat secara real-time dengan kalkulasi jarak formula Haversine.",
        "Chat with AI Assistant yang memahami bahasa natural untuk merekomendasikan kuliner atau layanan terdekat.",
        "Antarmuka peta interaktif yang ringan dan responsif pada perangkat mobile.",
      ],
      en: [
        "Real-time nearest vendor detection powered by precise Haversine distance calculations.",
        "Natural language conversational AI assistant recommending local foods and services tailored to user preferences.",
        "Lightweight, touch-ergonomic interactive maps interface optimized for mobile viewports.",
      ],
    },

    challenge: {
      overview: {
        id: "Banyak UMKM lokal berkualitas tidak terindeks dengan baik di platform besar, membuat wisatawan kesulitan menemukan produk lokal autentik.",
        en: "High-quality micro-merchants are frequently buried under algorithmic noise in giant delivery apps, hindering local discovery.",
      },
      points: {
        id: [
          "Informasi jam operasional dan titik koordinat UMKM sering kali tidak akurat.",
          "Pengguna membutuhkan rekomendasi cepat tanpa harus membaca puluhan ulasan panjang.",
          "Performa aplikasi harus tetap cepat pada koneksi internet seluler yang terbatas.",
        ],
        en: [
          "Inconsistent GPS coordinates and operating hours across independent local businesses.",
          "Users want instant, contextual suggestions without reading lengthy review threads.",
          "Application needs to perform reliably on constrained mobile data connections.",
        ],
      },
    },

    solution: {
      overview: {
        id: "Mengintegrasikan geolocation browser modern dengan antarmuka peta interaktif dan asisten chat AI yang memberikan rekomendasi instan.",
        en: "Synthesized browser geolocation with interactive map visualizations and an AI conversational agent that delivers instant recommendations.",
      },
      points: {
        id: [
          "Kalkulasi jarak instan di sisi klien dengan formula Haversine untuk meminimalkan beban server.",
          "Asisten AI percakapan yang menyaring preferensi makanan, kisaran harga, dan jarak.",
          "Desain modern berbasis Tailwind CSS dengan nuansa neon aura yang menarik.",
        ],
        en: [
          "Client-side Haversine distance calculations ensuring zero backend latency during geo-sorting.",
          "Conversational assistant filtering cuisines, pricing brackets, and walking radii.",
          "Tailwind CSS aesthetic with distinctive neon aura branding and accessible typography.",
        ],
      },
    },

    keyFeatures: [
      {
        title: {
          id: "Formula Jarak Haversine",
          en: "Haversine Distance Engine",
        },
        description: {
          id: "Menghitung jarak akurat dalam hitungan meter antara pengguna dan puluhan titik UMKM secara instan.",
          en: "Calculates metric distances between the user's live coordinates and surrounding stores instantaneously.",
        },
      },
      {
        title: {
          id: "Chat with AI Assistant",
          en: "Conversational AI Discovery",
        },
        description: {
          id: "Ketik 'Cari kopi susu enak di bawah 20 ribu' dan AI akan langsung menyajikan rekomendasi terbaik beserta rutenya.",
          en: "Prompt natural conversational queries like 'Best iced coffee under $2 nearby' for instant tailored picks.",
        },
      },
      {
        title: {
          id: "Peta Interaktif Interaktif",
          en: "Interactive Map Exploration",
        },
        description: {
          id: "Pin lokasi interaktif dengan pratinjau kartu toko, jam operasional, dan navigasi langsung.",
          en: "Interactive map pins with instant drawer preview, opening schedules, and turn-by-turn routing.",
        },
      },
    ],

    architecture: {
      id: [
        "Frontend Modern: Antarmuka responsif berbasis React, TypeScript, dan Tailwind CSS dengan visual neon aura.",
        "Integrasi Geolocation: Perhitungan jarak presisi (Haversine Formula) dan visualisasi titik lokasi UMKM di peta interaktif.",
        "Chat with AI Assistant: Konsultasi cerdas berbasis AI untuk menemukan toko, produk, atau jasa lokal yang paling sesuai.",
      ],
      en: [
        "Modern Reactive UI: Clean React and TypeScript interface styled with Tailwind CSS tokens.",
        "Geolocation Engine: Precise distance calculation and dynamic interactive map pins for surrounding vendors.",
        "AI Assistant Dialog: Contextual chatbot recommending shops, cuisines, and services based on user intent.",
      ],
    },

    process: [
      {
        step: "01",
        title: {
          id: "Riset Kebutuhan & Integrasi Geolocation",
          en: "Research & Geolocation Ingestion",
        },
        description: {
          id: "Mengumpulkan data titik UMKM dan merancang sistem pemetaan koordinat.",
          en: "Curated local vendor coordinates and mapped geometric distance formulas.",
        },
        points: {
          id: [
            "Pengumpulan data sampel UMKM",
            "Implementasi formula Haversine",
            "Pengujian akurasi GPS seluler",
          ],
          en: [
            "Local vendor dataset curation",
            "Haversine formula implementation",
            "Mobile GPS precision testing",
          ],
        },
      },
      {
        step: "02",
        title: {
          id: "Pengembangan Asisten AI & Antarmuka",
          en: "AI Assistant & UI Development",
        },
        description: {
          id: "Mengintegrasikan prompt chat AI dan membangun peta interaktif di React.",
          en: "Integrated conversational prompt engines with reactive React map layers.",
        },
        points: {
          id: [
            "Penyusunan persona asisten rekomendasi",
            "Komponen peta interaktif dinamis",
            "Pengoptimalan UI mobile-first",
          ],
          en: [
            "Recommendation persona tuning",
            "Dynamic interactive map componentry",
            "Mobile-first ergonomic UI polish",
          ],
        },
      },
    ],

    outcomes: [
      {
        value: "Presisi",
        label: { id: "Kalkulasi Haversine", en: "Haversine Accuracy" },
        description: {
          id: "Jarak presisi hingga satuan meter dari titik pengguna.",
          en: "Metric distance precision computed instantly on device.",
        },
      },
      {
        value: "AI",
        label: { id: "Pencarian Alami", en: "Conversational AI" },
        description: {
          id: "Membantu pengguna menemukan rekomendasi tanpa repot.",
          en: "Natural conversation replaces tedious manual searching.",
        },
      },
    ],

    techIcons: ["react", "typescript", "tailwind"],
    tags: [
      "React",
      "TypeScript",
      "Geolocation API",
      "AI Recommendation",
      "Tailwind CSS",
    ],
    githubBackend: "https://github.com/arttVinci/dekatku",
  },
  {
    id: "gctech",
    title: "Gctech Store",
    domain: {
      id: "Curated Retail • E-Commerce Storefront",
      en: "Curated Retail • E-Commerce Storefront",
    },
    subtitle: {
      id: "Toko Daring Modern untuk Kurasi Gadget & Aksesoris Premium Berbasis Next.js",
      en: "Modern Curated Tech & Hardware Retail Web Experience",
    },
    type: "web",
    category: "pribadi",
    badge: "E-Commerce • Tech Store • Curated",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301371/1_tvvkif.png",
    featured: false,

    year: "2025",
    status: { id: "Live", en: "Live" },
    platform: {
      id: "High-Performance Modern Web Storefront",
      en: "High-Performance Modern Web Storefront",
    },
    role: {
      id: "Frontend & Next.js Developer",
      en: "Frontend & Next.js Developer",
    },
    timeline: "2025",
    collaboration: {
      id: "Pengembangan Mandiri",
      en: "Independent Development",
    },

    description: {
      id: "Platform toko daring perangkat teknologi dan gadget premium dengan kurasi produk ketat, antarmuka responsif modern, dan sistem transaksi terproteksi.",
      en: "Premium gadget and hardware e-commerce store with strict product curation, secure delivery verification, and responsive customer checkout.",
    },
    overviewPoints: {
      id: [
        "Katalog produk perangkat teknologi premium dengan navigasi kategori dinamis.",
        "Antarmuka belanja modern berbasis Next.js dengan optimasi kecepatan halaman tinggi.",
        "Sistem keranjang belanja interaktif dengan kalkulasi instan.",
      ],
      en: [
        "Curated premium hardware catalog with responsive multi-category navigation.",
        "Next.js storefront optimized for lightning-fast Core Web Vitals and fluid interactions.",
        "Interactive state-driven cart system with instant total and discount updates.",
      ],
    },

    challenge: {
      overview: {
        id: "Website toko online gadget sering terasa lambat karena banyaknya gambar berukuran besar dan skrip analitik yang berat.",
        en: "Consumer gadget storefronts frequently suffer from severe layout shifts and bloated image payloads that hinder conversion.",
      },
      points: {
        id: [
          "Gambar produk resolusi tinggi dapat memperlambat First Contentful Paint jika tidak dioptimalkan.",
          "Keranjang belanja harus tetap sinkron tanpa menyebabkan re-render seluruh halaman.",
          "Desain harus tampak mewah dan elegan mencerminkan gadget premium.",
        ],
        en: [
          "High-resolution hardware product galleries degrade First Contentful Paint without modern image optimization.",
          "Shopping cart state must synchronize seamlessly without triggering full page re-renders.",
          "Visual design needs to reflect luxury consumer hardware standards.",
        ],
      },
    },

    solution: {
      overview: {
        id: "Membangun storefront Next.js dengan image optimization otomatis, arsitektur komponen modular, dan dark mode elegan.",
        en: "Built a Next.js storefront leveraging automated image pipelines, modular component trees, and sleek dark mode styling.",
      },
      points: {
        id: [
          "Next.js Image component dengan lazy-loading dan responsive srcset otomatis.",
          "State management ringan untuk keranjang belanja tanpa dependensi berlebih.",
          "Desain visual bernuansa gelap dengan aksen tipografi modern.",
        ],
        en: [
          "Next.js Image optimization delivering responsive webp formats and progressive loading.",
          "Lightweight client state orchestrating cart additions, removals, and voucher adjustments.",
          "Sleek dark-mode aesthetic with crisp typography and subtle card borders.",
        ],
      },
    },

    keyFeatures: [
      {
        title: {
          id: "Katalog Gadget Premium",
          en: "Curated Hardware Showcase",
        },
        description: {
          id: "Penyusunan produk berbasis kategori dengan filter spesifikasi teknis yang intuitif.",
          en: "Categorized hardware collections with intuitive technical spec filtering.",
        },
      },
      {
        title: {
          id: "Keranjang Belanja Reaktif",
          en: "Reactive Shopping Cart",
        },
        description: {
          id: "Pembaruan jumlah barang dan kalkulasi total berjalan instan tanpa jeda.",
          en: "Instant item adjustments and automated checkout tallying with fluid transitions.",
        },
      },
    ],

    architecture: {
      id: [
        "Product Catalog & Curation: Manajemen inventaris perangkat teknologi berkecepatan tinggi dengan kategori dinamis.",
        "Secure Checkout & Payment: Integrasi sistem pembayaran aman dengan enkripsi data transaksi mutakhir.",
        "Customer Experience & Support: Antarmuka belanja responsif, sistem keranjang belanja interaktif, dan dukungan layanan 24/7.",
      ],
      en: [
        "Product Catalog & Curation: High-speed hardware inventory management with dynamic categorization.",
        "Secure Checkout: Encrypted checkout flow and robust state management for cart items.",
        "Responsive Customer Experience: Smooth modern layout with 24/7 interactive customer assistance touchpoints.",
      ],
    },

    process: [
      {
        step: "01",
        title: {
          id: "Perancangan Visual & Desain Komponen",
          en: "Visual Design & Component Architecture",
        },
        description: {
          id: "Menyusun sistem desain dark mode dan kartu produk.",
          en: "Designed cohesive dark-mode design tokens and modular product cards.",
        },
        points: {
          id: [
            "Penyusunan palet warna & tipografi",
            "Perancangan komponen kartu produk",
            "Struktur keranjang belanja interaktif",
          ],
          en: [
            "Color palette and typography definition",
            "Reusable product card components",
            "Interactive cart drawer structure",
          ],
        },
      },
    ],

    outcomes: [
      {
        value: "< 1s",
        label: { id: "First Contentful Paint", en: "First Contentful Paint" },
        description: {
          id: "Loading super cepat berkat Next.js server rendering.",
          en: "Optimized delivery pipeline maximizing user engagement.",
        },
      },
      {
        value: "100%",
        label: { id: "Desain Responsif", en: "Responsive Design" },
        description: {
          id: "Nyaman dijelajahi di smartphone maupun layar desktop.",
          en: "Flawless rendering across phones, tablets, and desktops.",
        },
      },
    ],

    techIcons: ["next.js", "react", "typescript", "tailwind"],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "E-Commerce"],
    githubBackend: "https://github.com/arttVinci",
  },
  {
    id: "portofy-app",
    title: "Portofy Ecosystem",
    domain: {
      id: "Multi-Device Dashboard • Responsive UX",
      en: "Multi-Device Dashboard • Responsive UX",
    },
    subtitle: {
      id: "Dashboard Multi-Perangkat & Pengalaman Mobile Responsif Portofy",
      en: "Multi-Device Dashboard & Mobile-First Portfolio Management Experience",
    },
    type: "mobile",
    category: "pribadi",
    badge: "Responsive • Dashboard • Mobile UI",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301263/WhatsApp_Image_2026-05-21_at_23.35.28_s2whfw.jpg",
    featured: false,

    year: "2026",
    status: { id: "Live", en: "Live" },
    platform: {
      id: "Mobile-First Web App & Dashboard Console",
      en: "Mobile-First Web App & Dashboard Console",
    },
    role: {
      id: "Frontend & UI/UX Engineer",
      en: "Frontend & UI/UX Engineer",
    },
    timeline: "2026",
    collaboration: {
      id: "Portofy Ecosystem Initiative",
      en: "Portofy Ecosystem Initiative",
    },

    description: {
      id: "Ekosistem antarmuka multi-perangkat Portofy, mencakup desktop dashboard manajemen portofolio, autentikasi SSO, dan pengalaman mobile web responsif untuk edit profil real-time.",
      en: "Cross-device user experience for Portofy, including administrative management console, SSO authentication, and mobile-optimized interfaces for live portfolio sharing.",
    },
    overviewPoints: {
      id: [
        "Antarmuka admin mobile-first untuk edit data portofolio dari smartphone di mana pun berada.",
        "Manajemen vanity link portofolio (portofy.net/username) dengan pratinjau instan.",
        "Sistem desain terpadu dengan performa rendering 60 FPS pada peramban mobile.",
      ],
      en: [
        "Mobile-first administrative interface empowering creators to edit their portfolio on the go.",
        "Real-time vanity URL management with instant live viewport previews.",
        "Unified design system delivering 60 FPS rendering performance on mobile browsers.",
      ],
    },

    challenge: {
      overview: {
        id: "Banyak pengguna mengakses dan membagikan tautan portofolio mereka dari smartphone, tetapi editor website tradisional sangat canggung dioperasikan di layar kecil.",
        en: "Creators share portfolios predominantly on mobile devices, yet conventional web builders are notoriously unwieldy on small touchscreens.",
      },
      points: {
        id: [
          "Interaksi form dan upload berkas di smartphone sering kali lambat dan berpotensi freeze.",
          "Pratinjau tampilan desktop dan mobile harus dapat disimulasikan langsung.",
          "Konsistensi tema dan palet warna antara dashboard dan public storefront.",
        ],
        en: [
          "File upload and form interactions on mobile often trigger touch lag.",
          "Live preview needs seamless toggling between mobile and desktop rendering.",
          "Color tokens and theme consistency between administrative tools and public profiles.",
        ],
      },
    },

    solution: {
      overview: {
        id: "Merancang tata letak ergonomis berbasis sentuhan dengan arsitektur responsif bertingkat dan komponen interaktif ringan.",
        en: "Engineered touch-ergonomic layouts backed by multi-tier responsive breakpoints and lightweight reactive widgets.",
      },
      points: {
        id: [
          "Ergonomi tombol sentuh ramah jempol (thumb-zone ergonomics).",
          "Kompresi otomatis gambar avatar dan berkas resume sebelum proses upload.",
          "Desain visual modern dengan dark mode hemat daya baterai.",
        ],
        en: [
          "Thumb-friendly navigation drawers and floating action buttons.",
          "Client-side image and document pre-compression prior to network dispatch.",
          "Power-saving modern dark theme with accessible contrast ratios.",
        ],
      },
    },

    keyFeatures: [
      {
        title: {
          id: "Thumb-Friendly Mobile Dashboard",
          en: "Thumb-Friendly Mobile Dashboard",
        },
        description: {
          id: "Seluruh navigasi dan formulir pengeditan mudah dijangkau dengan satu tangan di layar ponsel.",
          en: "All essential administrative controls positioned within natural one-handed thumb reach.",
        },
      },
      {
        title: {
          id: "Live Mobile Preview",
          en: "Live Mobile Preview",
        },
        description: {
          id: "Lihat langsung bagaimana portofolio tampil di mata rekruter sebelum menyebarkan link.",
          en: "Simulate real-time visitor experience before broadcasting your vanity link.",
        },
      },
    ],

    architecture: {
      id: [
        "Adaptive Responsive Architecture: Pengalaman mobile-first yang dioptimalkan untuk browsing dan edit portofolio di smartphone.",
        "User Management & Role Control: Session handling dan live preview link (portofy.net/username) dengan update real-time.",
        "Design System & Dark Mode: Tema gelap modern dengan aksen gradien dan micro-interactions halus.",
      ],
      en: [
        "Adaptive Responsive Architecture: Mobile-first ergonomic touch controls and responsive layouts for smartphones.",
        "User Management & Role Control: Session lifecycle and instant vanity URL preview (portofy.net/username).",
        "Design System & Dark Mode: Modern dark mode with cohesive color tokens and fluid motion effects.",
      ],
    },

    process: [
      {
        step: "01",
        title: {
          id: "Audit Ergonomi Mobile & Wireframing",
          en: "Mobile Ergonomics & Wireframing",
        },
        description: {
          id: "Memetakan zona sentuh jari dan menyusun alur input portofolio di smartphone.",
          en: "Mapped thumb-reach zones and structured mobile-first input flows.",
        },
        points: {
          id: [
            "Pemetaan zona jangkauan jempol",
            "Desain formulir ringkas bertahap",
            "Pengujian prototipe layar kecil",
          ],
          en: [
            "Thumb-zone interaction mapping",
            "Step-by-step lightweight forms",
            "Small viewport prototyping",
          ],
        },
      },
    ],

    outcomes: [
      {
        value: "60 FPS",
        label: { id: "Performa Animasi", en: "UI Fluidity" },
        description: {
          id: "Transisi antar-halaman mulus tanpa lag di perangkat mobile.",
          en: "Hardware-accelerated transitions on mobile devices.",
        },
      },
      {
        value: "100%",
        label: { id: "Mobile-First", en: "Mobile-First UX" },
        description: {
          id: "Dioptimalkan untuk kreator modern yang serba cepat.",
          en: "Built specifically for agile creators operating from smartphones.",
        },
      },
    ],

    techIcons: ["next.js", "typescript", "tailwind"],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mobile-First",
      "Responsive UX",
    ],
    githubBackend: "https://github.com/arttVinci/portofy",
  },
];

/**
 * Find project by its unique slug/id
 */
export function getProjectById(id: string): ProjectItem | undefined {
  return projectsData.find((p) => p.id.toLowerCase() === id.toLowerCase());
}

/**
 * Get all project slugs for static generation
 */
export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.id);
}

/**
 * Get adjacent (previous & next) projects for navigation
 */
export function getAdjacentProjects(currentId: string): {
  prev: ProjectItem | null;
  next: ProjectItem | null;
} {
  const index = projectsData.findIndex((p) => p.id === currentId);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? projectsData[index - 1] : null;
  const next = index < projectsData.length - 1 ? projectsData[index + 1] : null;
  return { prev, next };
}
