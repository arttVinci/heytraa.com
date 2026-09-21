"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ContactHero } from "./contact-hero";
import { ContactForm } from "./contact-form";
import { ContactProfiles } from "./contact-profiles";
import { FooterSection } from "@/shared/components/layout";

export function ContactView() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle GSAP entrance animation on mount
  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.from(".contact-section-block", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="space-y-6 sm:space-y-8">
      {/* 1. Hero / Header */}
      <div className="contact-section-block">
        <ContactHero />
      </div>

      {/* 2. Main Two-Column Grid: Form & Professional Profiles */}
      <div className="contact-section-block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (7 cols): Send Message Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column (5 cols): Email, LinkedIn, GitHub, Social */}
          <div className="lg:col-span-5">
            <ContactProfiles />
          </div>
        </div>
      </div>

      {/* 3. Footer */}
      <FooterSection />
    </div>
  );
}
