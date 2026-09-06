import { Sparkles } from "lucide-react";

export function StoryNarrative() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md border border-sky-100/90 p-6 sm:p-9 shadow-lg shadow-sky-900/5 space-y-5">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e4f5fc] border border-sky-200/70 text-[#0284c7] text-[11px] font-semibold tracking-wide">
        <Sparkles className="w-3 h-3 text-[#0284c7]" />
        <span>The Journey &amp; Personal Philosophy</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
        Dari Presisi Maintenance Industri ke{" "}
        <span className="text-[#0284c7]">Dunia Software</span>
      </h1>

      <div className="space-y-3.5 text-sm sm:text-[14.5px] text-slate-600 leading-relaxed max-w-3xl">
        <p>
          Bagi kebanyakan developer, perjalanan dimulai dari editor teks dan layar terminal. Namun langkah awal saya berakar dari lantai produksi manufaktur dan instalasi panel kelistrikan industri di <span className="font-medium text-slate-800">PT Serta Kuliner Mandiri</span> serta <span className="font-medium text-slate-800">PT Akebono Brake Astra Indonesia</span>.
        </p>
        <p>
          Bekerja di pemeliharaan elektrikal mengajarkan saya disiplin tentang keandalan sistem, audit grounding, dan pentingnya mencari akar masalah (<span className="italic">root-cause analysis</span>) secara tenang dan terstruktur ketika terjadi gangguan.
        </p>
        <p>
          Meskipun bekerja penuh waktu di luar industri teknologi, saya terus belajar secara mandiri untuk bertransisi ke rekayasa perangkat lunak. Sebagai Full Stack Developer, saya mendalami backend <span className="font-medium text-slate-800">Golang (Fiber, GORM)</span> dengan Clean Architecture &amp; Modular Monolith, membangun frontend dengan <span className="font-medium text-slate-800">Next.js &amp; TypeScript</span>, mengintegrasikan fitur AI seperti <span className="font-medium text-slate-800">RAG dengan Qdrant Vector DB</span>, serta aktif menggunakan <span className="font-medium text-slate-800">AI coding agents</span> sebagai partner untuk mempercepat proses pembuatan aplikasi.
        </p>
      </div>

      {/* Snapshot Tags */}
      <div className="pt-3.5 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-mono font-medium text-slate-600">
        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/70">
          Career Transition
        </span>
        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/70">
          Full Stack Dev
        </span>
        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/70">
          Golang Clean Architecture
        </span>
        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/70">
          Next.js &amp; TypeScript
        </span>
        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/70">
          RAG &amp; AI Agents
        </span>
      </div>
    </section>
  );
}
