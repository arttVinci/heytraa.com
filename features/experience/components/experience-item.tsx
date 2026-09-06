import { ExperienceItem as ExperienceItemType } from "../types";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface ExperienceItemProps {
  exp: ExperienceItemType;
  index: number;
}

export function ExperienceItem({ exp }: ExperienceItemProps) {
  return (
    <div className="relative group">
      {/* Timeline Dot Indicator */}
      <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#0284c7] group-hover:scale-125 transition-transform" />

      <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-sm hover:shadow-md transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#e4f5fc] text-[#0284c7] border border-sky-200/60 font-mono">
              {exp.type}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
              {exp.role}
            </h3>
            <p className="text-sm font-semibold text-[#0284c7]">
              {exp.company}
            </p>
          </div>

          <div className="flex flex-col sm:items-end text-xs text-slate-500 font-mono">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
              <Calendar className="w-3.5 h-3.5 text-[#0284c7]" />
              {exp.period}
            </span>
            <span className="inline-flex items-center gap-1 mt-0.5 text-slate-400">
              <MapPin className="w-3 h-3" />
              {exp.location}
            </span>
          </div>
        </div>

        <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
          {exp.highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-100">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100/80 text-slate-600 border border-slate-200/60 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
