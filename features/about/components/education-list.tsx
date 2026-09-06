import { educationList } from "../data/education-data";
import { Calendar, GraduationCap } from "lucide-react";

export function EducationList() {
  return (
    <section className="space-y-5">
      <div>
        <span className="text-xs font-bold tracking-widest text-[#0284c7] uppercase font-mono">
          ACADEMIC FOUNDATION
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
          Pendidikan Formal &amp; Landasan Teori
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {educationList.map((edu) => (
          <div
            key={edu.institution}
            className="p-7 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#e4f5fc] text-[#0284c7] border border-sky-200/60 font-mono">
                  {edu.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#0284c7]" />
                  {edu.period}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
              <p className="text-sm font-semibold text-[#0284c7] mt-0.5">
                {edu.institution}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
