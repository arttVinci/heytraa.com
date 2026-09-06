import { ProjectItem } from "../types";
import { GithubIcon } from "@/shared/components/icons";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-xs hover:shadow-md transition-all space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="text-[10.5px] font-bold px-2 py-0.5 rounded-md bg-[#e4f5fc] text-[#0284c7] border border-sky-200/60 font-mono">
            {project.badge}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {project.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-xs font-medium transition-colors border border-slate-200/80"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Backend Repo</span>
            </a>
          )}
          {project.githubFrontend && (
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-xs font-medium transition-colors border border-slate-200/80"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Frontend Repo</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#e4f5fc] hover:bg-sky-100 text-[#0284c7] text-xs font-medium transition-colors border border-sky-200/80"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Site</span>
            </a>
          )}
        </div>
      </div>

      <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
        {project.description}
      </p>

      {/* Architecture Highlights */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 border border-slate-100 space-y-1.5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7] font-mono">
          Architectural Highlights:
        </p>
        <div className="space-y-1">
          {project.architecture.map((arch, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{arch}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10.5px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100/80 text-slate-600 border border-slate-200/60 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
