import type { Metadata } from "next";
import { ServicesView } from "@/features/services";
import { ServiceJsonLd } from "@/shared/components/seo/json-ld";

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
    alternates: {
      canonical: `https://heytraa.com/${lang}/services`,
      languages: {
        id: "https://heytraa.com/id/services",
        en: "https://heytraa.com/en/services",
      },
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <ServiceJsonLd lang={lang as "id" | "en"} />
      <ServicesView />
    </>
  );
}
