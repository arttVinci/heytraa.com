import { ContactView } from "@/features/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Collaboration | Putra Rizky",
  description:
    "Hubungi Putra Rizky Nugraha untuk peluang kerja Software Engineering, kolaborasi proyek web development, backend Golang, dan konsultasi AI.",
};

export default function ContactPage() {
  return <ContactView />;
}
