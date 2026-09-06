import { Sparkles, Terminal, Activity, Award } from "lucide-react";

export function StoryNarrative() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-8 sm:p-12 shadow-xl shadow-sky-900/5 space-y-6">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e4f5fc] border border-sky-200/70 text-[#0284c7] text-xs font-semibold tracking-wide">
        <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
        <span>The Journey &amp; Personal Philosophy</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
        Dari Presisi Maintenance Industri ke{" "}
        <span className="text-[#0284c7]">Ketangguhan Software</span>
      </h1>

      <div className="space-y-4 text-base text-slate-600 leading-relaxed max-w-4xl">
        <p>
          Bagi kebanyakan developer, software dimulai dari editor teks dan layar terminal. Namun perjalanan saya berakar dari lantai produksi manufaktur dan instalasi panel kelistrikan industri di <span className="font-semibold text-slate-800">PT Serta Kuliner Mandiri</span> serta <span className="font-semibold text-slate-800">PT Akebono Brake Astra Indonesia</span>.
        </p>
        <p>
          Di dunia industri, kesalahan pengkabelan atau kegagalan proteksi daya berarti mesin berhenti, jalur produksi terhenti, dan keselamatan terancam. Dari sana saya belajar satu prinsip vital: <span className="font-semibold text-slate-900">reliability tanpa kompromi, audit keselamatan grounding yang teliti, serta kemampuan investigasi akar penyebab masalah (root-cause analysis) dengan cepat dan tepat sasaran.</span>
        </p>
        <p>
          Meskipun bekerja penuh waktu di luar industri teknologi, saya mengarahkan dedikasi tinggi tersebut secara mandiri untuk menguasai rekayasa perangkat lunak modern: dari backend performa tinggi dengan <span className="font-semibold text-slate-800">Golang (Fiber, GORM)</span> berarsitektur Clean Architecture &amp; Modular Monolith, transaksi ACID inventaris, hingga antarmuka dinamis <span className="font-semibold text-slate-800">Next.js/React</span> dan integrasi kecerdasan buatan <span className="font-semibold text-slate-800">RAG (Retrieval-Augmented Generation) &amp; Qdrant Vector DB</span>.
        </p>
      </div>

      {/* Snapshot Tags */}
      <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-mono font-medium text-slate-600">
        <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200/70">
          Industrial Rigor
        </span>
        <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200/70">
          Clean Architecture
        </span>
        <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200/70">
          Modular Monolith
        </span>
        <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200/70">
          RAG &amp; Vector Search
        </span>
      </div>
    </section>
  );
}
