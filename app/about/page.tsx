import { AboutView } from "@/features/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Engineering Philosophy | Putra Rizky",
  description:
    "Perjalanan transisi Putra Rizky Nugraha dari presisi maintenance industri ke ketangguhan software engineering, filosofi arsitektur, dan landasan akademis.",
};

export default function AboutPage() {
  return <AboutView />;
}
