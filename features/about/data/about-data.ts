export interface StructuredExperienceItem {
  id: string;
  role: {
    id: string;
    en: string;
  };
  company: string;
  location: string;
  period: string;
  duration: {
    id: string;
    en: string;
  };
  type: {
    id: string;
    en: string;
  };
  workMode: {
    id: string;
    en: string;
  };
  initials: string;
  logo?: string;
  accentColor?: string;
  tasks: {
    id: string[];
    en: string[];
  };
  learned: {
    id: string[];
    en: string[];
  };
  impact: {
    id: string[];
    en: string[];
  };
}

export interface StructuredEducationItem {
  id: string;
  institution: string;
  degree: {
    id: string;
    en: string;
  };
  field: {
    id: string;
    en: string;
  };
  period: string;
  location: string;
  status: {
    id: string;
    en: string;
  };
  gpaOrScore?: string;
  initials: string;
  logo?: string;
  description: {
    id: string;
    en: string;
  };
  highlights: {
    id: string[];
    en: string[];
  };
}

export interface StructuredCertificationItem {
  id: string;
  title: {
    id: string;
    en: string;
  };
  issuer: string;
  year: string;
  issuedDate?: string;
  credentialId: string;
  credentialUrl?: string;
  image?: string;
  isPlaceholder?: boolean;
  status: {
    id: string;
    en: string;
  };
  skills: string[];
}

export const simpleExperienceData: StructuredExperienceItem[] = [
  {
    id: "serta-kuliner",
    role: {
      id: "Teknisi Elektrikal & Maintenance",
      en: "Maintenance & Electrical Technician",
    },
    company: "PT Setya Kuliner Mandiri",
    location: "Bekasi, Indonesia ID",
    period: "Des 2023 - Sekarang",
    duration: {
      id: "Sedang Berjalan",
      en: "Present",
    },
    type: {
      id: "Penuh Waktu",
      en: "Full-time",
    },
    workMode: {
      id: "Onsite",
      en: "Onsite",
    },
    initials: "SKM",
    logo: "/images/experience/skm.jpg",
    accentColor: "#689F99",
    tasks: {
      id: [
        "Melakukan inspeksi preventif berkala pada sistem distribusi elektrikal dan perangkat elektronik utama.",
        "Mendiagnosis serta menyelesaikan kendala kelistrikan kompleks (korsleting, beban berlebih, bahaya kabel) dengan respon cepat.",
        "Menjaga kontinuitas suplai daya dan standar keselamatan melalui manajemen kabel rapi dan audit grounding rutin.",
      ],
      en: [
        "Conducted routine inspections and preventive maintenance on electrical distribution systems and electronic equipment.",
        "Diagnosed and resolved complex electrical faults (short circuits, overloads, wiring hazards) with rapid turnaround times.",
        "Maintained power continuity and system safety through structured cable management and regular grounding audits.",
      ],
    },
    learned: {
      id: [
        "Disiplin pemecahan masalah perangkat keras di bawah tekanan tinggi dan target uptime ketat.",
        "Kepatuhan ketat terhadap standar keselamatan kerja (K3) dan regulasi kelistrikan industri.",
        "Koordinasi tim operasional lintas divisi untuk menjamin kelancaran fungsi fasilitas.",
      ],
      en: [
        "Hardware troubleshooting discipline under operational pressure with strict uptime requirements.",
        "Strict adherence to occupational health & safety (K3) and electrical safety codes.",
        "Cross-functional operational coordination ensuring facility integrity.",
      ],
    },
    impact: {
      id: [
        "Menjamin ketersediaan daya dan operasional peralatan mencapai standar uptime 100%.",
        "Mencegah potensi bahaya korsleting dan meminimalkan kerugian downtime bisnis operasional.",
      ],
      en: [
        "Maintained continuous power availability and near 100% operational equipment uptime.",
        "Eliminated electrical hazard risks and avoided costly business downtime.",
      ],
    },
  },
  {
    id: "gunadarma-workshop",
    role: {
      id: "Fasilitator Workshop Pemrograman Web",
      en: "Web Development Workshop Facilitator",
    },
    company: "Universitas Gunadarma",
    location: "Depok, Indonesia ID",
    period: "April 2026 - Mei 2026",
    duration: {
      id: "Program Workshop",
      en: "Workshop Program",
    },
    type: {
      id: "Mentorship",
      en: "Mentorship",
    },
    workMode: {
      id: "Hybrid",
      en: "Hybrid",
    },
    initials: "UG",
    logo: "/images/experience/gunadarma.jpg",
    accentColor: "#38bdf8",
    tasks: {
      id: [
        "Membimbing mahasiswa baru dalam membangun aplikasi web dari nol, menjembatani konsep teoritis dengan deployment praktis.",
        "Menyusun kurikulum alur kerja coding modern: setup environment lokal, Git workflow, hingga live hosting.",
        "Memfasilitasi sesi teknis mendalam tentang struktur semantic HTML dan best practices web modern.",
      ],
      en: [
        "Mentored incoming freshmen in building web applications from scratch, bridging theory with practical deployment.",
        "Developed a structured roadmap covering local editor configuration, Git workflow, and live deployment.",
        "Facilitated deep-dive sessions on semantic HTML and modern web standards.",
      ],
    },
    learned: {
      id: [
        "Kemampuan komunikasi teknis: menerjemahkan konsep arsitektur rumit menjadi materi yang mudah dipahami pemula.",
        "Manajemen kelas interaktif dan bimbingan problem-solving satu-per-satu.",
      ],
      en: [
        "Technical communication: translating complex programming topics into digestible beginner concepts.",
        "Interactive workshop facilitation and one-on-one debugging mentorship.",
      ],
    },
    impact: {
      id: [
        "Membantu mahasiswa baru memahami siklus hidup pengembangan web secara menyeluruh.",
        "Meningkatkan kemandirian peserta dalam mengatasi error coding dan konfigurasi tools.",
      ],
      en: [
        "Helped freshmen grasp the end-to-end web development lifecycle with confidence.",
        "Enhanced participant self-sufficiency in debugging and development environment setup.",
      ],
    },
  },
  {
    id: "evermos",
    role: {
      id: "Backend Developer Intern (Project-Based)",
      en: "Backend Developer Intern (Project-Based)",
    },
    company: "PT Evermos",
    location: "Bandung, Indonesia ID",
    period: "Nov 2025 - Des 2025",
    duration: {
      id: "2 bulan",
      en: "2 months",
    },
    type: {
      id: "Magang Proyek",
      en: "Project Internship",
    },
    workMode: {
      id: "Remote",
      en: "Remote",
    },
    initials: "EVM",
    logo: "/images/experience/evermos.jpg",
    accentColor: "#689F99",
    tasks: {
      id: [
        "Merancang RESTful API e-commerce berkinerja tinggi menggunakan Golang (Go Fiber) dan GORM berbasis Clean Architecture.",
        "Melakukan kontainerisasi aplikasi, database, dan layanan migrasi menggunakan Docker dan Docker Compose.",
        "Mengamankan endpoint API dengan otentikasi JWT dan middleware kustom Role-Based Access Control (Admin vs Customer).",
      ],
      en: [
        "Engineered a robust e-commerce REST API using Go Fiber and GORM, implementing Clean Architecture for modularity.",
        "Fully containerized the application, database, and migration services using Docker and Docker Compose.",
        "Secured API endpoints using JWT authentication and custom Role-Based Access Control middleware.",
      ],
    },
    learned: {
      id: [
        "Penerapan pola Clean Architecture Golang untuk modularitas kode, isolasi domain, dan kemudahan unit testing.",
        "Pengelolaan transaksi database atomik (ACID compliance) pada alur checkout produk inventori.",
        "Manajemen skema database relasional MySQL dan versioning via Golang-Migrate.",
      ],
      en: [
        "Applied Golang Clean Architecture principles ensuring code modularity and testability.",
        "Handled atomic database transactions (ACID compliance) for multi-table checkout operations.",
        "Relational MySQL schema design and automated version control using Golang-Migrate.",
      ],
    },
    impact: {
      id: [
        "Menghasilkan backend e-commerce siap produksi mencakup User, Store Creation, Inventory, dan Transaction History.",
        "Menjamin konsistensi data harga dan stok melalui snapshot produk historis (log_products).",
      ],
      en: [
        "Delivered production-ready e-commerce services for User Management, Stores, Inventory, and Transactions.",
        "Maintained absolute inventory and pricing integrity via historical snapshot tables (log_products).",
      ],
    },
  },
  {
    id: "akebono",
    role: {
      id: "IT Support Intern",
      en: "IT Support Intern",
    },
    company: "PT Akebono Brake Astra Indonesia",
    location: "Jakarta / Bekasi, Indonesia ID",
    period: "Des 2021 - Apr 2022",
    duration: {
      id: "5 bulan",
      en: "5 months",
    },
    type: {
      id: "Magang",
      en: "Internship",
    },
    workMode: {
      id: "Onsite",
      en: "Onsite",
    },
    initials: "ABI",
    logo: "/images/experience/akebono.jpg",
    accentColor: "#689F99",
    tasks: {
      id: [
        "Mengembangkan sistem absensi operator lapangan berbasis RFID bersama mentor, memperdalam integrasi hardware-software.",
        "Melakukan konfigurasi dan perkabelan perangkat HMI (Human-Machine Interface) untuk workstation operator.",
        "Mengelola pendaftaran kartu kanban untuk perhitungan dan pelacakan material otomatis oleh sistem.",
      ],
      en: [
        "Developed an RFID-based field operator attendance system with mentor, gaining hands-on hardware-software integration.",
        "Configured and wired HMI (Human-Machine Interface) devices for on-site operator work areas.",
        "Managed kanban registration and real-time incoming/outgoing material tracking in production floor.",
      ],
    },
    learned: {
      id: [
        "Integrasi antarmuka mesin dan perangkat lunak dalam ekosistem manufaktur skala besar.",
        "Standar mutu dan kedisiplinan operasional industri Astra Group.",
      ],
      en: [
        "Human-Machine Interface (HMI) and hardware-software integration within a major manufacturing ecosystem.",
        "Operational quality standards and industrial discipline of the Astra Group.",
      ],
    },
    impact: {
      id: [
        "Meningkatkan kecepatan dan akurasi pencatatan kehadiran operator secara otomatis.",
        "Memperlancar pelacakan komponen produksi melalui integrasi data kanban real-time.",
      ],
      en: [
        "Accelerated operator attendance processing and accuracy via RFID automation.",
        "Streamlined production floor tracking through real-time kanban data synchronization.",
      ],
    },
  },
];

export const simpleEducationData: StructuredEducationItem[] = [
  {
    id: "univ-terbuka",
    institution: "Universitas Terbuka (Open University)",
    degree: {
      id: "Sarjana (S1)",
      en: "Bachelor's degree",
    },
    field: {
      id: "Sistem Informasi (Information Systems)",
      en: "Information Systems",
    },
    period: "2024 - Sekarang",
    location: "Indonesia ID",
    status: {
      id: "Sedang Ditempuh",
      en: "In Progress",
    },
    initials: "UT",
    logo: "/images/education/univ-terbuka.jpg",
    description: {
      id: "Mendalami rekayasa sistem informasi enterprise, perancangan database relasional ACID, analisis proses bisnis, arsitektur data, dan manajemen proyek perangkat lunak.",
      en: "Studying enterprise information systems, relational database architecture (ACID), business process modeling, data engineering, and software project management.",
    },
    highlights: {
      id: [
        "Arsitektur Sistem Informasi Enterprise & Basis Data",
        "Analisis Proses Bisnis & Pemodelan Sistem",
        "Rekayasa Perangkat Lunak & Manajemen Mutu Data",
      ],
      en: [
        "Enterprise Information Systems & Database Architecture",
        "Business Process Analysis & System Modeling",
        "Software Engineering & Data Quality Assurance",
      ],
    },
  },
  {
    id: "smkn-5-bekasi",
    institution: "SMKN 5 Kota Bekasi",
    degree: {
      id: "Sekolah Menengah Kejuruan (SMK)",
      en: "Vocational High School",
    },
    field: {
      id: "Teknik Elektronika Industri (Industrial Electronics)",
      en: "Industrial Electronics Engineering",
    },
    period: "2020 - 2023",
    location: "Bekasi, Jawa Barat, Indonesia ID",
    status: {
      id: "Lulus",
      en: "Graduated",
    },
    gpaOrScore: "83",
    initials: "SMK",
    logo: "/images/education/smkn5-bekasi.jpg",
    description: {
      id: "Membangun fondasi logika berpikir sistematis, troubleshooting sirkuit terpadu, mikrokontroler, otomasi industri, dan kedisiplinan standar keselamatan kerja (K3).",
      en: "Built systematic troubleshooting foundations, integrated circuits, microcontrollers, industrial automation, and occupational safety (K3) discipline.",
    },
    highlights: {
      id: [
        "Logika Pemrograman Mikrokontroler & Otomasi",
        "Troubleshooting Sirkuit & Perangkat Keras",
        "Disiplin Standar Keselamatan Kerja (K3)",
      ],
      en: [
        "Microcontroller Logic & Industrial Automation",
        "Circuit Troubleshooting & Hardware Integration",
        "Occupational Health and Safety (K3) Standards",
      ],
    },
  },
];

export const simpleCertificationsData: StructuredCertificationItem[] = [
  {
    id: "cert-google-ai",
    title: {
      id: "Google AI Professional Certificate",
      en: "Google AI Professional Certificate",
    },
    issuer: "Google & Coursera",
    year: "2026",
    issuedDate: "September 2026",
    credentialId: "Mn3TUzi9",
    credentialUrl: "https://www.credly.com/go/Mn3TUzi9",
    image: "/images/certificate/sertif-google-ai.png",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: [
      "Google AI",
      "Generative AI",
      "Machine Learning",
      "Prompt Engineering",
      "Large Language Models",
    ],
  },
  {
    id: "cert-juara-vibe-coding",
    title: {
      id: "Vibe Coding Study Jam - #JuaraVibeCoding Participant",
      en: "Vibe Coding Study Jam - #JuaraVibeCoding Participant",
    },
    issuer: "Google Developer Groups",
    year: "2026",
    issuedDate: "Mei 2026",
    credentialId: "JVC2605-LQ82-7R33",
    credentialUrl: "https://goo.gle/jvc-cert-verifier",
    image: "/images/certificate/sertif-juara-vibe-coding.png",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: [
      "AI Coding",
      "Rapid Prototyping",
      "Prompt Engineering",
      "Developer Community",
    ],
  },
  {
    id: "cert-oracle-ai-agent",
    title: {
      id: "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1",
      en: "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1",
    },
    issuer: "Oracle University",
    year: "2026",
    issuedDate: "Januari 2026",
    credentialId: "Oracle Certified Foundations Associate",
    credentialUrl: "/images/certificate/sertif-oracle-ai-agent.jpg",
    image: "/images/certificate/sertif-oracle-ai-agent.jpg",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: [
      "AI Agents",
      "Oracle Fusion",
      "AI Agent Studio",
      "Enterprise AI",
    ],
  },
  {
    id: "cert-go-coursera",
    title: {
      id: "Programming With Go-Lang: Fundamental, OOP, Database, Web, RESTful API",
      en: "Programming With Go-Lang: Fundamental, OOP, Database, Web, RESTful API",
    },
    issuer: "Coursera",
    year: "2026",
    issuedDate: "April 2026",
    credentialId: "DG1673M87PBV",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/DG1673M87PBV",
    image: "/images/certificate/sertif-go.png",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: ["Go-Lang", "OOP", "Database", "RESTful API", "Web Services"],
  },
  {
    id: "cert-ai-hackathon",
    title: {
      id: "Innovation AI For UMKM, IMPHNEN x Kolosal.ai Hackathon",
      en: "Innovation AI For UMKM, IMPHNEN x Kolosal.ai Hackathon",
    },
    issuer: "IMPHNEN & Kolosal.ai",
    year: "2025",
    issuedDate: "Desember 2025",
    credentialId: "hackathon.imphnen.dev-certificate-O2BKb4xLLc",
    credentialUrl:
      "https://hackathon.imphnen.dev/certificate/O%2BKb4xLLc%2BtQ2B40jl5Nh6rnwBwm4JYuO2qYas1k%2BjQNstTxIRHEbzJhCtMdYdaD4e9kiQTx6Id4%2FADGwEkEH5tEY5Twk1FhtUIot30RvnI3ZtcJTn%2FdFzGT2h%2Fgb6WzNVPkyYANtGr1BRCIEzu0AOk8sJqsm8XTYLl3FsjOYc7dh4TL4krQT6xZw7r6lSrfr8BMSO5mMi8xPQZf",
    image: "/images/certificate/serti2.jpg",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: ["AI Innovation", "Hackathon", "UMKM Tech", "LLM Integration"],
  },
  {
    id: "cert-rakamin-evermos",
    title: {
      id: "Project-Based Internship: Evermos Backend Developer",
      en: "Project-Based Internship: Evermos Backend Developer",
    },
    issuer: "Rakamin Academy & Evermos",
    year: "2025",
    issuedDate: "Desember 2025",
    credentialId: "240169IAPPGIE26112025",
    credentialUrl: "/images/certificate/serti3.jpg",
    image: "/images/certificate/serti3.jpg",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: ["Backend Engineering", "Golang API", "Relational Database", "E-Commerce"],
  },
  {
    id: "cert-udemy-php",
    title: {
      id: "Programming With PHP: Fundamental, OOP, Web, Composer, Unit Test, MVC",
      en: "Programming With PHP: Fundamental, OOP, Web, Composer, Unit Test, MVC",
    },
    issuer: "Udemy",
    year: "2025",
    issuedDate: "Juni 2025",
    credentialId: "UC-ab92d8b2-24f4-4152-bd8c-05e7abc868ae",
    credentialUrl: "/images/certificate/serti1.jpg",
    image: "/images/certificate/serti1.jpg",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: ["PHP OOP", "Composer", "Unit Testing", "MVC Architecture"],
  },
  {
    id: "cert-wpu-laravel",
    title: {
      id: "Programming With Laravel",
      en: "Programming With Laravel",
    },
    issuer: "WPU Course",
    year: "2025",
    issuedDate: "November 2025",
    credentialId: "VVR9QAL4",
    credentialUrl: "/images/certificate/serti4.jpg",
    image: "/images/certificate/serti4.jpg",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: ["Laravel", "MVC", "REST API", "Blade Engine"],
  },
  {
    id: "cert-wpu-react",
    title: {
      id: "ReactJS Bootcamp",
      en: "ReactJS Bootcamp",
    },
    issuer: "WPU Course",
    year: "2025",
    issuedDate: "November 2025",
    credentialId: "IAE14ID5",
    credentialUrl: "/images/certificate/serti8.jpg",
    image: "/images/certificate/serti8.jpg",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: ["ReactJS", "Hooks", "Component Architecture", "SPA"],
  },
  {
    id: "cert-ekraf-developer-day",
    title: {
      id: "Badan EKRAF Developer Day 2025 Participant & Selection",
      en: "Badan EKRAF Developer Day 2025 Participant & Selection",
    },
    issuer: "Dicoding & KemenEkraf",
    year: "2025",
    issuedDate: "November 2025",
    credentialId: "2VX36K113XYQ",
    credentialUrl: "/images/certificate/serti9.png",
    image: "/images/certificate/serti9.png",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: ["Developer Day", "Creative Economy", "Web Tech", "Innovation"],
  },
  {
    id: "cert-dicoding-web-prog",
    title: {
      id: "Belajar Dasar Pemrograman Web",
      en: "Fundamental Programming Web",
    },
    issuer: "Dicoding",
    year: "2025",
    issuedDate: "Oktober 2025",
    credentialId: "2VX36K113XYQ",
    credentialUrl: "/images/certificate/serti10.jpg",
    image: "/images/certificate/serti10.jpg",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: ["HTML5", "CSS3", "JavaScript DOM", "Responsive Web"],
  },
  {
    id: "cert-dicoding-frontend",
    title: {
      id: "Belajar Membuat Front-End Web untuk Pemula",
      en: "Fundamental Front-End Web For Beginner",
    },
    issuer: "Dicoding",
    year: "2025",
    issuedDate: "Oktober 2025",
    credentialId: "N9ZO509LYPG5",
    credentialUrl: "/images/certificate/serti7.jpg",
    image: "/images/certificate/serti7.jpg",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: ["Front-End Web", "Flexbox", "Grid", "Web Semantics"],
  },
  {
    id: "cert-coding-studio-mysql",
    title: {
      id: "Fundamental Database MySQL",
      en: "Fundamental Database MySQL",
    },
    issuer: "Coding Studio",
    year: "2025",
    issuedDate: "Juli 2025",
    credentialId: "QEVUZERQAR",
    credentialUrl: "/images/certificate/serti5.jpg",
    image: "/images/certificate/serti5.jpg",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: ["MySQL", "Database Normalization", "DDL/DML", "Query Optimization"],
  },
  {
    id: "cert-dicoding-finance",
    title: {
      id: "Pengenalan Literasi Keuangan (Financial Literacy)",
      en: "Introduction to Financial Literacy",
    },
    issuer: "Dicoding",
    year: "2025",
    issuedDate: "Oktober 2025",
    credentialId: "N9ZO2RMO6PG5",
    credentialUrl: "/images/certificate/serti6.jpg",
    image: "/images/certificate/serti6.jpg",
    isPlaceholder: false,
    status: {
      id: "Tervalidasi",
      en: "Verified",
    },
    skills: ["Financial Planning", "Budgeting", "Risk Management"],
  },
];
