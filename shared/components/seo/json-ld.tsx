/**
 * JSON-LD Structured Data components for SEO.
 *
 * Renders <script type="application/ld+json"> blocks for:
 * - Person / ProfilePage (global, in root layout)
 * - Service (services page)
 * - SoftwareApplication (individual project detail pages)
 */

import React from "react";

const BASE_URL = "https://heytraa.com";

/* ------------------------------------------------------------------ */
/*  Person + ProfilePage — lives in root layout                       */
/* ------------------------------------------------------------------ */

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Putra Rizky Nugraha",
      alternateName: "traa",
      url: BASE_URL,
      image: `${BASE_URL}/profile.png`,
      jobTitle: "Full-Stack Developer",
      description:
        "Full-Stack Developer specializing in Golang Clean Architecture, Next.js, and AI Integration.",
      knowsAbout: [
        "Golang",
        "Next.js",
        "React",
        "REST API",
        "Clean Architecture",
        "AI Integration",
        "TypeScript",
        "Docker",
      ],
      sameAs: [
        "https://github.com/arttVinci",
        "https://www.linkedin.com/in/putra-rizky-nugraha",
        "https://x.com/traa_rzkyy",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  WebSite — root layout (enables sitelinks search box)              */
/* ------------------------------------------------------------------ */

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "heytraa.com",
    url: BASE_URL,
    description:
      "Personal portfolio, engineering journey, and digital services by Putra Rizky Nugraha.",
    author: {
      "@type": "Person",
      name: "Putra Rizky Nugraha",
    },
    inLanguage: ["id", "en"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Service — services page                                           */
/* ------------------------------------------------------------------ */

interface ServiceJsonLdProps {
  lang: "id" | "en";
}

export function ServiceJsonLd({ lang }: ServiceJsonLdProps) {
  const isId = lang === "id";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Person",
      name: "Putra Rizky Nugraha",
      url: BASE_URL,
    },
    name: isId
      ? "Layanan Pengembangan Web & Backend"
      : "Web & Backend Development Services",
    description: isId
      ? "Layanan pengembangan aplikasi web dan mobile siap produksi: Next.js, Golang Clean Architecture, REST API, dan integrasi modern."
      : "Production-ready full-stack web and mobile development services: Next.js, Golang Clean Architecture, REST APIs, and modern integrations.",
    url: `${BASE_URL}/${lang}/services`,
    areaServed: "Worldwide",
    serviceType: [
      "Web Application Development",
      "Backend API Development",
      "AI Integration",
      "Full-Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  BreadcrumbList — all pages                                        */
/* ------------------------------------------------------------------ */

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
