import { ProjectItem } from "../types";

export const projects: ProjectItem[] = [
  {
    title: "Fixora",
    subtitle: "AI-Powered Civic Infrastructure Accountability Platform",
    badge: "Civic-Tech • Golang • RAG • Qdrant",
    description:
      "Platform civic-tech open-source yang dirancang untuk mengawal akuntabilitas jangka panjang infrastruktur publik yang terbengkalai (jalan berlubang, drainase, jembatan) di kota-kota Indonesia. Mengatasi keterbatasan platform pelaporan reaktif yang sudah ada.",
    architecture: [
      "Robust Backend: RESTful API modular menggunakan Golang (Fiber, GORM) dengan Clean Architecture & Modular Monolith (strict data isolation & inter-module communication via explicit client interfaces).",
      "Multi-Source Data Pipeline: Pipeline data mandiri menggabungkan laporan warga, autonomous AI news crawler, dan open data pemerintah.",
      "AI & Vector Search: Computer Vision untuk klasifikasi otomatis foto kerusakan jalan, Multi-Agent LLM verification system (Advocate, Skeptic, Manager), serta RAG dengan Qdrant mencocokkan laporan dengan data anggaran pemda.",
      "Security & Auth: Alur autentikasi berbasis OTP dengan session token anonim untuk keamanan pelapor warga sambil menjaga akuntabilitas internal.",
      "Data Architecture: Skema relasional MySQL terstruktur dengan boundary kepemilikan data yang tegas antar modul.",
    ],
    tags: ["Golang (Fiber)", "Modular Monolith", "Qdrant Vector DB", "Multi-Agent LLM", "Computer Vision", "MySQL", "Clean Architecture"],
    githubBackend: "https://github.com/arttVinci/fixora-Backend",
    githubFrontend: "https://github.com/arttVinci/fixora-Frontend",
  },
  {
    title: "Portofy.net",
    subtitle: "AI-Powered Portfolio Builder SaaS",
    badge: "SaaS • Solo Full-Stack • AI CV Parser",
    description:
      "Platform SaaS multi-tenant berbasis AI untuk menghasilkan website portofolio profesional secara instan dari file CV pengguna tanpa perlu menulis satu baris kode pun. Dibangun secara mandiri dari awal hingga akhir dengan standar rekayasa perangkat lunak industri.",
    architecture: [
      "Robust Backend: RESTful API yang scalable menggunakan Golang dengan Clean Architecture untuk maintainability dan performa tinggi.",
      "Dynamic Frontend: Antarmuka pengguna responsif dan interaktif menggunakan React dan TypeScript.",
      "AI Integration: Fitur AI mutakhir mencakup Intelligent CV Parser, automated portfolio description generator, dan AI Customer Service chatbot.",
      "Security: Alur autentikasi end-to-end aman dengan integrasi Google OAuth 2.0 dan JWT session management.",
      "Cloud Deployment: Kontainerisasi aplikasi menggunakan Docker dan live deployment di Google Cloud Run (GCP).",
    ],
    tags: ["Golang", "Clean Architecture", "React", "TypeScript", "Google Cloud Run", "JWT", "AI CV Parser", "Docker"],
    githubBackend: "https://github.com/arttVinci/portofy",
  },
  {
    title: "Golang RESTful API E-Commerce",
    subtitle: "Production-Grade E-Commerce Backend (PT Evermos Project)",
    badge: "Clean Architecture • ACID • Docker",
    description:
      "RESTful API e-commerce berskala produksi yang dirancang dengan prinsip Clean Architecture. Menangani proses checkout dengan jaminan transaksi database atomik (ACID compliance) dan pencatatan riwayat snapshot produk.",
    architecture: [
      "Arsitektur bersih: Pemisahan lapisan Entity, UseCase, Repository, dan Delivery Handler.",
      "Transaksi ACID pada alur checkout inventaris produk dengan pembuatan snapshot histori (log_products).",
      "Kontainerisasi penuh aplikasi, MySQL database, dan script migrasi via Docker & Docker Compose.",
      "JWT Authentication dengan middleware RBAC khusus untuk Admin dan Customer.",
      "Manajemen skema relasional dengan Golang-Migrate.",
    ],
    tags: ["Golang", "Fiber", "GORM", "MySQL", "Docker Compose", "Golang-Migrate", "ACID Transactions"],
    githubBackend: "https://github.com/arttVinci",
  },
  {
    title: "Dekatku",
    subtitle: "Location-Based Local MSME & Service Directory",
    badge: "Geolocation • AI Recommendation",
    description:
      "Platform direktori berbasis lokasi yang menghubungkan wisatawan dan warga lokal dengan UMKM serta penyedia jasa rumahan yang sulit ditemukan di search engine umum. Terintegrasi dengan geolokasi dan AI untuk memberikan rekomendasi cerdas dan akurat.",
    architecture: [
      "Frontend modern menggunakan React, TypeScript, dan Tailwind CSS.",
      "Integrasi Geolocation API untuk menghitung jarak presisi dan rekomendasi lokasi terdekat.",
      "Logika pemetaan profil bisnis lokal untuk pencarian usaha rumahan non-indeks.",
    ],
    tags: ["React", "TypeScript", "Geolocation API", "AI Recommendation", "Tailwind CSS"],
    githubBackend: "https://github.com/arttVinci/dekatku",
  },
  {
    title: "E-Commerce Laravel Payment Gateway",
    subtitle: "Clean Architecture Laravel & Filament Application",
    badge: "Payment Gateway • Logistics Integration",
    description:
      "Aplikasi e-commerce berbasis Laravel dan Filament dengan Clean Architecture. Terintegrasi langsung dengan payment gateway Moota dan sistem ekspedisi kurir Kurirku untuk penanganan transaksi end-to-end.",
    architecture: [
      "Pengembangan panel admin interaktif dan responsif berbasis Filament PHP.",
      "Integrasi webhook dan payment confirmation otomatis melalui gateway Moota.",
      "Kalkulasi ongkos kirim dan pelacakan resi pengiriman real-time melalui Kurirku.",
    ],
    tags: ["PHP", "Laravel", "Filament", "Payment Gateway", "Moota", "Kurirku"],
    githubBackend: "https://github.com/arttVinci",
  },
];
