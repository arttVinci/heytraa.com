import type { Metadata } from "next";
import { AboutView } from "@/features/about";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isId = lang === "id";

  return {
    title: isId
      ? "Tentang — Putra Rizky Nugraha | Fullstack Developer"
      : "About — Putra Rizky Nugraha | Fullstack Developer",
    description: isId
      ? "Pengenalan singkat mengenai siapa saya, riwayat karier profesional, latar belakang pendidikan, dan sertifikasi teknis Putra Rizky Nugraha."
      : "A brief introduction about who I am, professional career journey, education background, and technical certifications of Putra Rizky Nugraha.",
    alternates: {
      canonical: `https://heytraa.com/${lang}/about`,
      languages: {
        id: "https://heytraa.com/id/about",
        en: "https://heytraa.com/en/about",
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return <AboutView />;
}
