import { Wrench, Layers, Users2 } from "lucide-react";

export function MindsetPillars() {
  const pillars = [
    {
      title: "Disiplin Presisi & Root-Cause Analysis",
      icon: Wrench,
      description:
        "Pengalaman menangani short circuit, overloading, dan integrasi hardware-software HMI & RFID menumbuhkan kebiasaan men-trace bug hingga ke akarnya tanpa sekadar menambal gejala.",
    },
    {
      title: "Modular Monolith & Clean Architecture",
      icon: Layers,
      description:
        "Menghindari arsitektur kusut dengan membagi sistem ke dalam domain yang terisolasi ketat, pemisahan lapisan (handler, usecase, repository), serta jaminan integritas transaksi ACID.",
    },
    {
      title: "Mentoring & Menyederhanakan Kompleksitas",
      icon: Users2,
      description:
        "Sebagai Workshop Facilitator di Universitas Gunadarma, saya terbiasa menerjemahkan jargon teknis rumit menjadi konsep yang mudah dipahami mahasiswa baru, memperkuat kejelasan komunikasi.",
    },
  ];

  return (
    <section className="space-y-4">
      <div>
        <span className="text-[11px] font-bold tracking-wider text-[#0284c7] uppercase font-mono">
          CORE PHILOSOPHY
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mt-0.5">
          3 Pilar Pola Pikir Rekayasa
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map((pil) => {
          const Icon = pil.icon;
          return (
            <div
              key={pil.title}
              className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e4f5fc] flex items-center justify-center text-[#0284c7] mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-[15px] font-bold text-slate-900">{pil.title}</h3>
              <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed">
                {pil.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
