"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SimpleProfileStory } from "./simple-profile-story";
import { SimpleExperienceList } from "./simple-experience-list";
import { SimpleEducationList } from "./simple-education-list";
import { SimpleCertificationsList } from "./simple-certifications-list";
import { FooterSection } from "@/features/home/components/footer-section";

/**
 * AboutView (Clean, Minimalist, & Structured layout inspired by user reference)
 * Composed of:
 * 1. Background / Profil Diri (Editorial narrative & sign-off)
 * 2. Karier / Pengalaman Kerja (Expandable cards: Tugas, Pelajari, Dampak)
 * 3. Pendidikan (Clean cards with degree, field, and learning pillars)
 * 4. Sertifikasi (Structured cards with TODO markers)
 * 5. Footer (Aligned with sidebar)
 */
export function AboutView() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle GSAP entrance animation on page mount
  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.from(".about-section-block", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        clearProps: "all",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="space-y-8 sm:space-y-10">
      {/* 1. Background / Profil Diri */}
      <div className="about-section-block">
        <SimpleProfileStory />
      </div>

      {/* 2. Karier / Pengalaman Kerja */}
      <div className="about-section-block">
        <SimpleExperienceList />
      </div>

      {/* 3. Pendidikan */}
      <div className="about-section-block">
        <SimpleEducationList />
      </div>

      {/* 4. Sertifikasi & Kredensial */}
      <div className="about-section-block">
        <SimpleCertificationsList />
      </div>

      {/* 5. Footer */}
      <FooterSection />
    </div>
  );
}
