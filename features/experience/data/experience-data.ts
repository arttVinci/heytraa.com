import { ExperienceItem } from "../types";

export const experiences: ExperienceItem[] = [
  {
    company: "PT Serta Kuliner Mandiri",
    role: "Maintenance & Electrical Technician",
    period: "Desember 2023 - Sekarang",
    location: "Bekasi / Jakarta",
    type: "Full-time Industrial Role",
    highlights: [
      "Menjalankan inspeksi berkala dan preventive maintenance pada sistem distribusi elektrikal dan perangkat elektronik untuk memastikan reliabilitas operasional maksimal dan zero unexpected downtime.",
      "Mendiagnosis serta menuntaskan gangguan elektrikal kompleks (short circuits, beban berlebih/overload, serta risiko kabel) dengan turnaround time cepat dan terukur.",
      "Menjaga kontinuitas suplai daya dan kepatuhan standar keselamatan kerja melalui audit grounding rutin, manajemen tata kabel presisi, dan ketaatan pada electrical safety codes.",
      "Menguji, menyervis, dan mengkalibrasi peralatan elektronik untuk menjamin performa puncak dan masa pakai optimal.",
    ],
    tags: ["Electrical Distribution", "Preventive Maintenance", "Zero-Downtime", "Grounding Audit", "Safety Compliance"],
  },
  {
    company: "Universitas Gunadarma",
    role: "Web Development Workshop Facilitator",
    period: "April 2026 - Mei 2026",
    location: "Depok / Bekasi",
    type: "Educational Mentorship",
    highlights: [
      "Mementori mahasiswa baru (maba) dalam membangun aplikasi web dari nol hingga live deployment, menjembatani gap antara konsep teoretis dan implementasi praktis.",
      "Curriculum Design: Mengembangkan roadmap kurikulum terstruktur mencakup full development lifecycle dari setup local development hingga live deployment.",
      "Foundational Instruction: Memandu sesi deep-dive mengenai semantic HTML, struktur web standar industri, dan best practices awal.",
      "Technical Guidance & Support: Memberikan pendampingan teknis langsung untuk instalasi tools, konfigurasi code editor, dan troubleshooting error.",
      "Simplifying Complexity: Menguraikan jargon teknis yang rumit menjadi konsep yang ramah pemula untuk menciptakan atmosfer belajar yang inklusif.",
    ],
    tags: ["Web Architecture", "Curriculum Roadmap", "Technical Teaching", "Mentorship", "Semantic HTML"],
  },
  {
    company: "PT Evermos",
    role: "Backend Developer Intern Based Project",
    period: "November 2025 - Desember 2025",
    location: "Remote / Bandung",
    type: "Project-Based Internship",
    highlights: [
      "High-Performance REST API: Membangun RESTful API menggunakan Go Fiber dan GORM, menerapkan Clean Architecture untuk memastikan modularitas kode dan kemudahan unit testing.",
      "Atomic Transactions (ACID): Mengimplementasikan transaksi database atomik pada proses checkout, menjaga integritas inventaris dan keakuratan data dengan pembuatan historical snapshot (log_products).",
      "Containerization: Membungkus aplikasi, basis data relasional, dan service migrasi ke dalam kontainer menggunakan Docker & Docker Compose untuk konsistensi lingkungan deployment.",
      "Security & Authentication: Mengamankan endpoint API dengan autentikasi JWT (JSON Web Token) dan kustom middleware untuk Role-Based Access Control (Admin vs Customer).",
      "Database & Migrations: Merancang skema relasional di MySQL dan mengelola version control database menggunakan Golang-Migrate.",
      "Fitur Terkirim: Manajemen pengguna, pembuatan toko (store), inventaris produk dengan upload gambar, manajemen alamat pengiriman, dan riwayat transaksi.",
    ],
    tags: ["Golang", "Go Fiber", "GORM", "Clean Architecture", "Docker", "MySQL", "ACID Transactions", "JWT RBAC"],
  },
  {
    company: "PT Akebono Brake Astra Indonesia",
    role: "IT Support Intern",
    period: "Desember 2021 - April 2022",
    location: "Jakarta Utara",
    type: "Industrial IT Internship",
    highlights: [
      "Mengembangkan sistem absensi operator lapangan berbasis teknologi RFID berkolaborasi dengan mentor, menjadi pengalaman awal penting dalam integrasi hardware dan software.",
      "Mengonfigurasi dan memasang kabel perangkat HMI (Human-Machine Interface) untuk on-site deployment di area kerja operator manufaktur.",
      "Melakukan registrasi kartu Kanban dan memantau pelacakan data real-time aliran barang masuk/keluar demi mendukung kelancaran operasional lini produksi.",
      "Menjalankan prosedur troubleshooting sistem dan senantiasa menjaga kepatuhan area kerja terhadap regulasi Keselamatan dan Kesehatan Kerja (K3).",
    ],
    tags: ["RFID Attendance", "HMI Wiring", "Kanban Tracking", "Hardware-Software Integration", "K3 Regulations"],
  },
];
