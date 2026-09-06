import { workflowSteps } from "../data/services-data";

export function ProcessWorkflow() {
  return (
    <section className="p-8 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-sm space-y-6">
      <div>
        <span className="text-xs font-bold tracking-widest text-[#0284c7] uppercase font-mono">
          ENGINEERING PROCESS
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
          Alur Kolaborasi &amp; Eksekusi Proyek
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Pendekatan terstruktur dan transparan dari tahap ideasi hingga live deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
        {workflowSteps.map((wf) => (
          <div
            key={wf.step}
            className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100/80 flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl font-black text-[#0284c7] font-mono">
                {wf.step}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mt-2">{wf.title}</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {wf.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
