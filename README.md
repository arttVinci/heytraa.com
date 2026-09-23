# heytraa.com

Website portofolio personal, platform profil, dan layanan digital milik **Putra Rizky Nugraha** (@arttVinci / @traa_rzkyy).

Proyek ini dibangun menggunakan Next.js App Router, React 19, TypeScript, dan Tailwind CSS v4. Dilengkapi dengan asisten AI percakapan berbasis RAG (Retrieval-Augmented Generation) yang memanfaatkan Google Gemini API, basis data vektor Qdrant, dan Upstash Redis untuk manajemen sesi chat.

---

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Arsitektur RAG AI Assistant](#arsitektur-rag-ai-assistant)
- [Struktur Direktori](#struktur-direktori)
- [Prasyarat](#prasyarat)
- [Instalasi dan Konfigurasi](#instalasi-dan-konfigurasi)
- [Pengindeksan Knowledge Base (Qdrant)](#pengindeksan-knowledge-base-qdrant)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Daftar Skrip](#daftar-skrip)
- [Lisensi](#lisensi)

---

## Fitur Utama

- **Dukungan Multibahasa (i18n):** Routing dinamis untuk Bahasa Indonesia (`/id`) dan Bahasa Inggris (`/en`) dengan pendeteksi otomatis melalui header browser dan cookies.
- **RAG AI Assistant:** Asisten cerdas yang menjawab pertanyaan pengunjung mengenai pengalaman kerja, keahlian teknis, dan portofolio berdasarkan dokumen pengetahuan faktual.
- **Studi Kasus & Portofolio Proyek:** Dokumentasi proyek backend (Golang Clean Architecture, REST API) dan aplikasi frontend/fullstack dengan detail arsitektur serta tautan repositori.
- **Etalase Layanan Teknis:** Penjelasan paket layanan pengembangan perangkat lunak (backend engineering, pembuatan web, integrasi API & AI).
- **Interaksi Komunitas (Group Chat):** Ruang percakapan interaktif berbasis browser dengan pemilihan peran pengguna.
- **Animasi dan Performa:** Transisi halus menggunakan integrasi GSAP dan Framer Motion yang dioptimalkan untuk performa tinggi.

---

## Teknologi yang Digunakan

### Core & Frontend
- **Framework:** Next.js 16 (App Router)
- **Library UI:** React 19, TypeScript
- **Styling:** Tailwind CSS v4, Base UI, Rough Notation
- **Animasi:** GSAP (@gsap/react), Framer Motion
- **Icons:** Lucide React, Simple Icons

### AI & Data
- **LLM Engine:** Google Gemini API (`gemini-3.5-flash-lite`)
- **Embedding Model:** Google Gemini (`gemini-embedding-2`)
- **Vector Database:** Qdrant Cloud / Self-hosted (`@qdrant/js-client-rest`)
- **Session Cache:** Upstash Redis (`@upstash/redis`)

---

## Arsitektur RAG AI Assistant

Alur kerja asisten AI pada rute `POST /api/assistant`:

1. Pengguna mengirimkan pesan pertanyaan berserta `sessionId`.
2. Pertanyaan diubah menjadi representasi vektor 3072 dimensi melalui model `gemini-embedding-2`.
3. Qdrant mencari potongan konteks dokumen yang paling relevan dari koleksi `heytraa_knowledge` menggunakan metrik *Cosine Distance*.
4. Riwayat obrolan sesi pengguna ditarik dari Upstash Redis.
5. Pertanyaan, riwayat obrolan, dan konteks dokumen disusun ke dalam prompt sistem terstruktur dan diproses oleh `gemini-3.5-flash-lite`.
6. Jawaban yang dihasilkan dikirim kembali ke pengguna dan riwayat sesi diperbarui di Redis dengan TTL otomatis (1 jam).

---

## Struktur Direktori

Kode sumber diorganisasikan dengan arsitektur berbasis fitur (*feature-driven architecture*):

```text
heytraa.com/
├── app/                        # Next.js App Router (Layouts & Routes)
│   ├── [lang]/                 # Halaman multibahasa (id/en)
│   │   ├── about/              # Profil lengkap, pengalaman, pendidikan
│   │   ├── chat/               # Halaman group chat komunitas
│   │   ├── contact/            # Formulir & kanal komunikasi
│   │   ├── projects/           # Katalog & detail proyek
│   │   └── services/           # Layanan jasa pengembangan perangkat lunak
│   ├── api/                    # Endpoint API backend (Next.js route handlers)
│   │   └── assistant/          # Endpoint RAG AI Assistant
│   ├── globals.css             # Konfigurasi gaya global & CSS variables
│   └── layout.tsx              # Root layout & providers
├── features/                   # Modul spesifik per fitur
│   ├── about/                  # Komponen & data profil
│   ├── assistant/              # Komponen widget chat & data dokumen RAG (knowledge.md)
│   ├── chat/                   # Komponen obrolan grup
│   ├── home/                   # Komponen halaman beranda
│   ├── projects/               # Komponen & database data proyek
│   └── services/               # Komponen katalog layanan
├── shared/                     # Komponen, context, dan utilitas yang dipakai bersama
│   ├── components/             # Reusable UI components & layouts
│   ├── context/                # Language context provider
│   └── lib/                    # Klien Qdrant, Redis, dan fungsi helper
├── scripts/                    # Skrip CLI untuk inisialisasi dan seeding database
│   ├── init-collection.ts      # Skrip pembuatan collection di Qdrant
│   └── seed-knowledge.ts       # Skrip chunking, embedding, dan indexing dokumen
├── public/                     # Aset statis (gambar, logo, dokumen)
├── proxy.ts                    # Logika routing & deteksi bahasa i18n
├── .env.example                # Panduan variabel lingkungan
└── package.json
```

---

## Prasyarat

Pastikan lingkungan lokal Anda telah terpasang:

- **Node.js:** Versi 20.x atau lebih baru
- **Package Manager:** `npm`, `pnpm`, atau `bun`
- Akun dan kredensial API untuk:
  - Google AI Studio (Gemini API Key)
  - Qdrant Cloud (atau instance Qdrant lokal)
  - Upstash Redis (REST URL & REST Token)

---

## Instalasi dan Konfigurasi

1. **Clone repositori:**
   ```bash
   git clone https://github.com/arttVinci/heytraa.com.git
   cd heytraa.com
   ```

2. **Pasang dependensi:**
   ```bash
   npm install
   ```

3. **Salin dan lengkapi berkas konfigurasi lingkungan:**
   ```bash
   cp .env.example .env
   ```

4. **Isi variabel lingkungan pada `.env`:**
   ```env
   # Google Gemini API
   GEMINI_API_KEY="AIzaSy..."

   # Qdrant Vector Database
   QDRANT_URL="https://your-cluster-url.qdrant.io"
   QDRANT_API_KEY="your-qdrant-api-key"

   # Upstash Redis
   UPSTASH_REDIS_REST_URL="https://your-database.upstash.io"
   UPSTASH_REDIS_REST_TOKEN="your-upstash-token"
   ```

---

## Pengindeksan Knowledge Base (Qdrant)

Jika ingin mengaktifkan fungsionalitas asisten AI, inisialisasikan koleksi vektor dan masukkan data pengetahuan dari berkas `features/assistant/data/knowledge.md`:

1. **Buat collection pada Qdrant:**
   ```bash
   npx tsx scripts/init-collection.ts
   ```

2. **Jalankan proses chunking, embedding, dan upload vektor:**
   ```bash
   npx tsx scripts/seed-knowledge.ts
   ```

---

## Menjalankan Aplikasi

Jalankan server pengembangan lokal:

```bash
npm run dev
```

Buka peramban di [http://localhost:3000](http://localhost:3000). Rute otomatis dialihkan ke bahasa default ([http://localhost:3000/id](http://localhost:3000/id)).

Untuk pengujian kompilasi produksi:

```bash
npm run build
npm run start
```

---

## Daftar Skrip

| Perintah | Deskripsi |
| --- | --- |
| `npm run dev` | Menjalankan Next.js server dalam mode pengembangan |
| `npm run build` | Melakukan build produksi aplikasi |
| `npm run start` | Menjalankan server aplikasi hasil build produksi |
| `npm run lint` | Menjalankan analisis statis kode dengan ESLint |
| `npx tsx scripts/init-collection.ts` | Membuat collection vektor baru di Qdrant |
| `npx tsx scripts/seed-knowledge.ts` | Mengindeks berkas `knowledge.md` ke dalam Qdrant |

---

## Lisensi

Proyek ini dirilis di bawah lisensi [MIT](LICENSE). Hak Cipta (c) 2026 Putra Rizky Nugraha.
