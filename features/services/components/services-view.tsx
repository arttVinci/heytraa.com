"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ServicesHero } from "./services-hero";
import { ServicesPrinciples } from "./services-principles";
import { ServicesStats } from "./services-stats";
import { ServicesPillars } from "./services-pillars";
import { ServicesTestimonials } from "./services-testimonials";
import { FooterSection } from "@/shared/components/layout";

export function ServicesView() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle GSAP entrance animation on mount
  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.from(".service-section-block", {
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
      {/* 1. Hero Section */}
      <div className="service-section-block">
        <ServicesHero />
      </div>

      {/* 2. Our way of thinking (Principles) */}
      <div className="service-section-block">
        <ServicesPrinciples />
      </div>

      {/* 3. Stats & Metrics Banner */}
      <div className="service-section-block">
        <ServicesStats />
      </div>

      {/* 4. How we help you grow (Pillars) */}
      <div className="service-section-block">
        <ServicesPillars />
      </div>

      {/* 5. Kind words from clients (Testimonials) */}
      <div className="service-section-block">
        <ServicesTestimonials />
      </div>

      {/* 6. Footer */}
      <FooterSection />
    </div>
  );
}
