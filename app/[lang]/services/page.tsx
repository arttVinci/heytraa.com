import type { Metadata } from "next";
import { ServicesView } from "@/features/services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isId = lang === "id";

  return {
    title: isId
      ? "Layanan | Putra Rizky Nugraha - Fullstack Developer"
      : "Services | Putra Rizky Nugraha - Fullstack Developer",
    description: isId
      ? "Layanan pengembangan aplikasi web dan mobile siap produksi: Next.js, Golang Clean Architecture, REST API, dan integrasi modern."
      : "Production-ready full-stack web and mobile development services: Next.js, Golang Clean Architecture, REST APIs, and modern integrations.",
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return <ServicesView />;
}
