import type { Metadata } from "next";
import { ContactView } from "@/features/contact";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isId = lang === "id";

  return {
    title: isId
      ? "Kontak & Kolaborasi | Putra Rizky Nugraha - Fullstack Developer"
      : "Contact & Collaboration | Putra Rizky Nugraha - Fullstack Developer",
    description: isId
      ? "Hubungi Putra Rizky Nugraha untuk mendiskusikan kebutuhan arsitektur backend Golang, aplikasi web modern Next.js, dan integrasi sistem AI. Kirim pesan langsung atau terhubung via LinkedIn & GitHub."
      : "Get in touch with Putra Rizky Nugraha to discuss Golang backend architecture, modern Next.js web applications, and AI integrations. Send a direct message or connect via LinkedIn and GitHub.",
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  await params;
  return <ContactView />;
}
