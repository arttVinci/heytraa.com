import { Wrench, Layers, Users2 } from "lucide-react";

export function MindsetPillars() {
  const pillars = [
    {
      title: "Disiplin Presisi & Root-Cause Analysis",
      icon: Wrench,
      description:
        "Pengalaman menangani short circuit, overloading, kontinuitas daya, dan integrasi hardware-software HMI & RFID menumbuhkan insting alamiah dalam men-trace bug hingga ke akarnya tanpa sekadar menambal gejala.",
    },
    {
      title: "Modular Monolith & Clean Architecture",
      icon: Layers,
      description:
        "Menghindari arsitektur monolitik yang spaghetti dengan membagi sistem ke dalam domain yang terisolasi ketat, pemisahan lapisan (handler, usecase, repository), serta jaminan integritas transaksi ACID.",
    },
    {
      title: "Mentoring & Menyederhanakan Kompleksitas",
      icon: Users2,
      description:
        "Sebagai Workshop Facilitator di Universitas Gunadarma, saya terbiasa menerjemahkan jargon teknis rumit menjadi konsep yang mudah dipahami mahasiswa baru, memperkuat kejelasan komunikasi dan kerja tim.",
    },
  ];

  return (
    <section className="space-y-5">
      <div>
        <span className="text-xs font-bold tracking-widest text-[#0284c7] uppercase font-mono">
          CORE PHILOSOPHY
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
          3 Pilar Pola Pikir Rekayasa
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pillars.map((pil) => {
          const Icon = pil.icon;
          return (
            <div
              key={pil.title}
              className="p-7 rounded-3xl bg-white/95 backdrop-blur-sm border border-sky-100/90 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#e4f5fc] flex items-center justify-center text-[#0284c7] mb-5">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{pil.title}</h3>
              <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                {pil.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
