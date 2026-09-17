export interface ShowcaseProject {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: string;
  image: string;
  description: string;
  architecture: string[];
  tags: string[];
  githubBackend?: string;
  githubFrontend?: string;
  liveUrl?: string;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "fixora",
    title: "Fixora",
    subtitle: "Pantau Infrastruktur. Dukung Fasilitas Publik.",
    badge: "Civic-Tech • Golang • RAG • Qdrant",
    category: "Civic-Tech & AI Platform",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301228/Cuplikan_layar_2026-09-13_184029_wv2zeu.png",
    description:
      "Platform keterbukaan data dan pelaporan masalah fasilitas publik terpadu di Jawa Barat dengan kecerdasan buatan. Tanpa login, transparan, dan terverifikasi. Terintegrasi dengan autonomous AI news crawler dan RAG Qdrant Vector DB.",
    architecture: [
      "Modular Monolith Backend: RESTful API modular menggunakan Golang (Fiber, GORM) dengan Clean Architecture & data isolation ketat.",
      "Autonomous Multi-Source Pipeline: Menggabungkan laporan warga, autonomous AI news crawler, dan open data pemerintah.",
      "Multi-Agent LLM & Qdrant RAG: Computer Vision klasifikasi foto kerusakan jalan, Multi-Agent LLM verification (Advocate, Skeptic, Manager), serta pencocokan anggaran APBD dengan Qdrant Vector DB.",
      "Security & Privacy: Alur autentikasi OTP dengan session token anonim untuk keamanan dan perlindungan warga pelapor.",
    ],
    tags: ["Golang (Fiber)", "Modular Monolith", "Qdrant Vector DB", "Multi-Agent LLM", "Computer Vision", "MySQL", "Clean Architecture"],
    githubBackend: "https://github.com/arttVinci/fixora-Backend",
    githubFrontend: "https://github.com/arttVinci/fixora-Frontend",
  },
  {
    id: "portofy",
    title: "Portofy.net",
    subtitle: "Buat Portofolio Kamu, Tunjukan Pada Mereka",
    badge: "SaaS • Full-Stack • AI CV Parser",
    category: "AI SaaS Portfolio Platform",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301228/Cuplikan_layar_2026-09-13_184347_ejhmsx.png",
    description:
      "Portofy membantu mahasiswa, freelancer, dan kreator Indonesia tampil profesional di dunia digital - dengan AI yang menulis, menganalisis, dan memberi saran langsung untuk portofoliomu dari CV tanpa perlu coding.",
    architecture: [
      "Golang Clean Architecture Backend: Scalable RESTful API dengan performa tinggi dan konkurensi efisien.",
      "Dynamic Editor Frontend: Antarmuka pengguna responsif dan interaktif menggunakan React dan TypeScript.",
      "AI CV Extraction Engine: Fitur parsing otomatis untuk menyaring keahlian, riwayat karir, dan skor kelengkapan profil.",
      "Production Deployment: Kontainerisasi Docker dan live deployment di Google Cloud Run (GCP) dengan Google OAuth 2.0 & JWT.",
    ],
    tags: ["Golang", "Clean Architecture", "React", "TypeScript", "Google Cloud Run", "JWT", "AI CV Parser", "Docker"],
    githubBackend: "https://github.com/arttVinci/portofy",
  },
  {
    id: "portofy-app",
    title: "Portofy Ecosystem",
    subtitle: "Multi-Device Dashboard & Mobile Experience",
    badge: "Responsive • Dashboard • Mobile UI",
    category: "Cross-Platform Web & Mobile",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301263/WhatsApp_Image_2026-05-21_at_23.35.28_s2whfw.jpg",
    description:
      "Ekosistem antarmuka multi-perangkat Portofy, mencakup desktop dashboard manajemen portofolio, autentikasi single sign-on, serta pengalaman mobile web responsif untuk edit profil dan live portfolio sharing.",
    architecture: [
      "Adaptive Responsive Architecture: Pengalaman mobile-first yang dioptimalkan untuk browsing dan edit portofolio di smartphone.",
      "User Management & Role Control: Session handling dan live preview link (portofy.net/username) dengan update real-time.",
      "Design System & Dark Mode: Tema gelap modern dengan aksen gradien ungu-biru dan micro-interactions halus.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Mobile-First", "REST API", "Framer Motion"],
    githubBackend: "https://github.com/arttVinci/portofy",
  },
  {
    id: "dekatku",
    title: "Dekatku",
    subtitle: "Jelajahi UMKM Sekitar Anda",
    badge: "Geolocation • AI Directory • Maps",
    category: "Location-Based MSME Directory",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301332/523473043-8a638696-1d4e-4894-8d22-2443a7eaef9e_ryghu5.png",
    description:
      "Dapatkan rekomendasi lokasi yang relevan untuk kebutuhan Anda. Platform direktori berbasis lokasi yang menghubungkan wisatawan dan warga lokal dengan UMKM serta penyedia jasa terdekat dilengkapi fitur Chat with AI Assistant.",
    architecture: [
      "Frontend Modern: Antarmuka responsif berbasis React, TypeScript, dan Tailwind CSS dengan efek visual neon aura.",
      "Integrasi Geolocation: Perhitungan jarak presisi dan visualisasi titik lokasi UMKM di peta interaktif.",
      "Chat with AI Assistant: Konsultasi cerdas berbasis AI untuk menemukan toko, produk, atau jasa lokal yang paling sesuai.",
    ],
    tags: ["React", "TypeScript", "Geolocation API", "AI Recommendation", "Tailwind CSS", "Lucide Icons"],
    githubBackend: "https://github.com/arttVinci/dekatku",
  },
  {
    id: "seapedia",
    title: "Seapedia",
    subtitle: "Belanja Hemat, Pilihan Tanpa Batas",
    badge: "E-Commerce • Clean Architecture • ACID",
    category: "Full-Featured E-Commerce Engine",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301228/Cuplikan_layar_2026-09-13_184915_hozogi.png",
    description:
      "Platform e-commerce modern dengan jutaan produk dari fashion, gadget, kecantikan, hingga kebutuhan harian. Dilengkapi sistem promo harian, voucher diskon, dan arsitektur backend transaksi yang tangguh.",
    architecture: [
      "High-Performance Backend: RESTful API e-commerce dengan Clean Architecture, penanganan checkout dengan jaminan transaksi ACID.",
      "Catalog & Promo Engine: Manajemen katalog produk multi-kategori, sistem kalkulasi voucher diskon dinamis, dan promo code handler.",
      "Containerized Environment: Integrasi Docker Compose, MySQL database migration, dan pipeline testing otomatis.",
    ],
    tags: ["Golang", "Fiber", "MySQL", "Clean Architecture", "Docker", "ACID Transactions", "REST API"],
    githubBackend: "https://github.com/arttVinci",
  },
  {
    id: "gctech",
    title: "Gctech Store",
    subtitle: "Everything you need to upgrade your tech life",
    badge: "E-Commerce • Tech Store • Curated",
    category: "Modern Gadget & Tech E-Commerce",
    image:
      "https://res.cloudinary.com/dvlhr7x7f/image/upload/v1789301371/1_tvvkif.png",
    description:
      "Platform toko daring perangkat teknologi dan gadget premium dengan kurasi produk ketat, pengiriman aman, garansi kualitas 100% original, dan sistem transaksi terproteksi.",
    architecture: [
      "Product Catalog & Curation: Manajemen inventaris perangkat teknologi berkecepatan tinggi dengan kategori dinamis.",
      "Secure Checkout & Payment: Integrasi sistem pembayaran aman dengan enkripsi data transaksi mutakhir.",
      "Customer Experience & Support: Antarmuka belanja responsif, sistem keranjang belanja interaktif, dan dukungan layanan 24/7.",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "E-Commerce", "REST API", "Responsive Design"],
    githubBackend: "https://github.com/arttVinci",
  },
];
