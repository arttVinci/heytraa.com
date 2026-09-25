import type { Metadata } from "next";
import { ProjectsView } from "@/features/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isId = lang === "id";

  return {
    title: isId
      ? "Proyek & Rekayasa — Putra Rizky Nugraha | Fullstack Developer"
      : "Projects & Engineering — Putra Rizky Nugraha | Fullstack Developer",
    description: isId
      ? "Koleksi proyek nyata, arsitektur sistem backend Golang Clean Architecture, dan integrasi AI (Fixora, Portofy, Dekatku, Seapedia) oleh Putra Rizky Nugraha."
      : "A showcase of real-world software engineering, high-throughput Golang systems, and AI integrations (Fixora, Portofy, Dekatku, Seapedia) by Putra Rizky Nugraha.",
    alternates: {
      canonical: `https://heytraa.com/${lang}/projects`,
      languages: {
        id: "https://heytraa.com/id/projects",
        en: "https://heytraa.com/en/projects",
      },
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return <ProjectsView />;
}
