import { ServicesView } from "@/features/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Digital Solutions | Putra Rizky",
  description:
    "Layanan pengembangan Full-Stack Web modern, high-performance Backend REST API dengan Golang, serta integrasi AI & RAG untuk produk dan bisnis Anda.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
