import { ProjectsView } from "@/features/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Engineering Portfolio | Putra Rizky",
  description:
    "Showcase karya rekayasa software oleh Putra Rizky Nugraha: Fixora (Civic-Tech AI), Portofy.net (AI SaaS di Cloud Run), Evermos E-Commerce API, dan Dekatku.",
};

export default function ProjectsPage() {
  return <ProjectsView />;
}
