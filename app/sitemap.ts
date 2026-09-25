import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/features/projects";

const BASE_URL = "https://heytraa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const projectSlugs = getAllProjectSlugs();

  // Static pages with both language variants
  const staticRoutes = ["", "/about", "/projects", "/services", "/contact", "/chat"];

  const entries: MetadataRoute.Sitemap = [];

  // Static pages — each has /id and /en variants
  for (const route of staticRoutes) {
    entries.push({
      url: `${BASE_URL}/id${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          id: `${BASE_URL}/id${route}`,
          en: `${BASE_URL}/en${route}`,
        },
      },
    });

    entries.push({
      url: `${BASE_URL}/en${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          id: `${BASE_URL}/id${route}`,
          en: `${BASE_URL}/en${route}`,
        },
      },
    });
  }

  // Dynamic project detail pages
  for (const slug of projectSlugs) {
    entries.push({
      url: `${BASE_URL}/id/projects/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          id: `${BASE_URL}/id/projects/${slug}`,
          en: `${BASE_URL}/en/projects/${slug}`,
        },
      },
    });

    entries.push({
      url: `${BASE_URL}/en/projects/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          id: `${BASE_URL}/id/projects/${slug}`,
          en: `${BASE_URL}/en/projects/${slug}`,
        },
      },
    });
  }

  return entries;
}
