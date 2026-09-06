import { ServiceCategory } from "../types";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceCategory;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5">
      <div>
        <div className="w-10 h-10 rounded-xl bg-[#e4f5fc] flex items-center justify-center text-[#0284c7] mb-4">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
          {service.title}
        </h3>
        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-5">
          {service.description}
        </p>

        <div className="space-y-2 pt-3.5 border-t border-slate-100">
          <p className="text-[11px] font-bold text-[#0284c7] uppercase font-mono tracking-wider">
            Deliverables &amp; Value:
          </p>
          {service.features.map((feat) => (
            <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7] shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <a
          href={`https://wa.me/6289673302577?text=${encodeURIComponent(service.whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] hover:from-[#0369a1] hover:to-[#0284c7] text-white text-xs font-medium transition-all shadow-sm shadow-sky-600/20 active:scale-[0.98]"
        >
          <span>Konsultasi Paket Ini</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
