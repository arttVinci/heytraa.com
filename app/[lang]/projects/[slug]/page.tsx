import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProjectDetailView,
  getProjectById,
  getAllProjectSlugs,
} from "@/features/projects";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  const langs = ["id", "en"];
  const paramsList: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    for (const slug of slugs) {
      paramsList.push({ lang, slug });
    }
  }

  return paramsList;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    return {
      title: lang === "id" ? "Proyek Tidak Ditemukan" : "Project Not Found",
    };
  }

  const isId = lang === "id";
  const desc = project.description[isId ? "id" : "en"];
  const sub = project.subtitle[isId ? "id" : "en"];

  return {
    title: `${project.title} — ${sub} | Putra Rizky Nugraha`,
    description: desc,
    openGraph: {
      title: `${project.title} — ${sub}`,
      description: desc,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
