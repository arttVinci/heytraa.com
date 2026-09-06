import { ExperienceView } from "@/features/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Career Track | Putra Rizky",
  description:
    "Riwayat pengalaman kerja profesional Putra Rizky Nugraha: PT Serta Kuliner Mandiri, Universitas Gunadarma, PT Evermos, dan PT Akebono Brake Astra Indonesia.",
};

export default function ExperiencePage() {
  return <ExperienceView />;
}
