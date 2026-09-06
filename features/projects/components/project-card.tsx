import { ProjectItem } from "../types";
import { GithubIcon } from "@/shared/components/icons";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-8 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-sm hover:shadow-md transition-all space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#e4f5fc] text-[#0284c7] border border-sky-200/60 font-mono">
            {project.badge}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2.5">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
            {project.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-colors border border-slate-200/80"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Backend Repo</span>
            </a>
          )}
          {project.githubFrontend && (
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-colors border border-slate-200/80"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Frontend Repo</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#e4f5fc] hover:bg-sky-100 text-[#0284c7] text-xs font-semibold transition-colors border border-sky-200/80"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Site</span>
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed">
        {project.description}
      </p>

      {/* Architecture Highlights */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-[#0284c7] font-mono">
          Architectural &amp; Engineering Highlights:
        </p>
        <div className="space-y-1.5">
          {project.architecture.map((arch, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{arch}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 pt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-3 py-1 rounded-full bg-slate-100/80 text-slate-600 border border-slate-200/60 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
