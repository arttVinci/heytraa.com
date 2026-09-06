import { Globe, Database, Cpu } from "lucide-react";
import { ServiceCategory, WorkflowStep } from "../types";

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Full-Stack Web Application",
    description:
      "Pengembangan web aplikasi modern dari hulu ke hilir menggunakan Next.js/React di frontend dan Golang/Node.js di backend. Dirancang responsif, performa kencang, dan mudah diskalakan.",
    icon: Globe,
    features: [
      "Antarmuka responsif & modern (Tailwind CSS)",
      "SEO-friendly, SSR/SSG & performa muat kencang",
      "Clean Architecture & Modular Monolith",
      "Autentikasi aman (JWT / Google OAuth 2.0)",
      "Dukungan basis data relasional MySQL/PostgreSQL",
    ],
    whatsappMsg: "Halo Putra, saya ingin konsultasi mengenai jasa Full-Stack Web Application.",
  },
  {
    title: "High-Performance Backend & REST API",
    description:
      "Rekayasa API backend tangguh menggunakan Golang (Fiber / GORM) dengan prinsip Clean Architecture, transaksi ACID, isolasi domain data, dan deployment kontainer Docker.",
    icon: Database,
    features: [
      "High concurrency & low latency dengan Golang",
      "ACID compliant database transactions (e-commerce & checkout)",
      "Pemisahan lapisan Clean Architecture (Entity, Usecase, Repo)",
      "Docker & Docker Compose containerization",
      "Dokumentasi API terstruktur & security middleware",
    ],
    whatsappMsg: "Halo Putra, saya ingin konsultasi mengenai jasa Backend Golang & REST API.",
  },
  {
    title: "AI Integration & RAG Systems",
    description:
      "Integrasi kecerdasan buatan (LLM) ke dalam ekosistem sistem bisnis Anda, mulai dari chatbot pintar pengetahuan internal, sistem RAG dengan Vector Database (Qdrant), hingga otomatisasi alur kerja.",
    icon: Cpu,
    features: [
      "Retrieval-Augmented Generation (RAG) cerdas",
      "Penyimpanan & pencarian vektor dengan Qdrant",
      "Multi-Agent LLM verification & parsing alur kerja",
      "AI Customer Service & knowledge base otomatis",
      "Prompt engineering & validasi output terstruktur",
    ],
    whatsappMsg: "Halo Putra, saya ingin konsultasi mengenai jasa AI Integration & RAG Systems.",
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Discovery & Requirement Analysis",
    description:
      "Mendiskusikan kebutuhan bisnis, arsitektur yang tepat, estimasi timeline, dan batasan teknis proyek secara transparan.",
  },
  {
    step: "02",
    title: "Architecture & System Design",
    description:
      "Menyusun skema database terisolasi, kontrak antarmuka API, dan pemilihan tech stack yang efisien tanpa overengineering.",
  },
  {
    step: "03",
    title: "Iterative Development & Testing",
    description:
      "Pengembangan berkala dengan kode bersih, unit/integration test, serta demo progres berkala kepada Anda.",
  },
  {
    step: "04",
    title: "Deployment & Knowledge Transfer",
    description:
      "Deployment ke cloud (Docker / Cloud Run / VPS), konfigurasi domain & SSL, serta serah terima dokumentasi teknis lengkap.",
  },
];
