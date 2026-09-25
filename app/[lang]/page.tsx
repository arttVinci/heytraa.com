import type { Metadata } from "next";
import { HomeView } from "@/features/home";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isId = lang === "id";

  return {
    title: isId
      ? "Putra Rizky (@traa_rzkyy) — Fullstack Developer & Portofolio"
      : "Putra Rizky (@traa_rzkyy) — Fullstack Developer & Portfolio",
    description: isId
      ? "Portofolio pribadi, perjalanan engineering, dan layanan digital oleh Putra Rizky Nugraha. Full-Stack Developer, Golang Clean Architecture, Next.js, dan Integrasi AI."
      : "Personal portfolio, engineering journey, and digital services by Putra Rizky Nugraha. Full-Stack Developer, Golang Clean Architecture, Next.js, and AI Integration.",
    alternates: {
      canonical: `https://heytraa.com/${lang}`,
      languages: {
        id: "https://heytraa.com/id",
        en: "https://heytraa.com/en",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return <HomeView />;
}
