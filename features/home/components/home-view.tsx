import { HeroCard } from "./hero-card";
import { ProjectSpiralShowcase } from "./project-spiral-showcase";
import { TechStackSection } from "./tech-stack-section";
import { HowIWorkSection } from "./how-i-work-section";
import { WhatIDoSection } from "./what-i-do-section";
import { FooterSection } from "@/shared/components/layout";

export function HomeView() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <HeroCard />
      <ProjectSpiralShowcase />
      <TechStackSection />
      <HowIWorkSection />
      <WhatIDoSection />
      <FooterSection />
    </div>
  );
}

