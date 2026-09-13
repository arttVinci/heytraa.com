import { HeroCard } from "./hero-card";
import { ProjectSpiralShowcase } from "./project-spiral-showcase";

export function HomeView() {
  return (
    <div className="space-y-10 sm:space-y-12 pb-16">
      <HeroCard />
      <ProjectSpiralShowcase />
    </div>
  );
}

