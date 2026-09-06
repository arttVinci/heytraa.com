import { workflowSteps } from "../data/services-data";

export function ProcessWorkflow() {
  return (
    <section className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-xs space-y-5">
      <div>
        <span className="text-[11px] font-bold tracking-wider text-[#0284c7] uppercase font-mono">
          ENGINEERING PROCESS
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-0.5">
          Alur Kolaborasi &amp; Eksekusi Proyek
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Pendekatan terstruktur dan transparan dari tahap ideasi hingga live deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
        {workflowSteps.map((wf) => (
          <div
            key={wf.step}
            className="p-4 rounded-xl bg-slate-50/80 border border-slate-100/80 flex flex-col justify-between"
          >
            <div>
              <span className="text-xl font-bold text-[#0284c7] font-mono">
                {wf.step}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1.5">{wf.title}</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {wf.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
