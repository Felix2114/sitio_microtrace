import { motion } from "motion/react";
import { ArrowRight, ChevronDown, TrendingUp, Zap, FileText, Activity } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const spectralData = [
  { x: 400, y: 12 }, { x: 500, y: 18 }, { x: 600, y: 45 }, { x: 700, y: 22 },
  { x: 800, y: 78 }, { x: 900, y: 35 }, { x: 1000, y: 90 }, { x: 1100, y: 55 },
  { x: 1200, y: 30 }, { x: 1300, y: 68 }, { x: 1400, y: 42 }, { x: 1500, y: 15 },
  { x: 1600, y: 88 }, { x: 1700, y: 50 }, { x: 1800, y: 20 },
];

function ParticleBg() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={`${(i / 12) * 100}%`} x2="100%" y2={`${(i / 12) * 100}%`}
          stroke="#00A6A6" strokeWidth="0.5" strokeDasharray="4 20" opacity="0.4" />
      ))}
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={`v${i}`} x1={`${(i / 16) * 100}%`} y1="0" x2={`${(i / 16) * 100}%`} y2="100%"
          stroke="#00A6A6" strokeWidth="0.5" strokeDasharray="4 20" opacity="0.4" />
      ))}
      {[
        { cx: "15%", cy: "25%", r: 3 }, { cx: "35%", cy: "70%", r: 2 },
        { cx: "65%", cy: "30%", r: 4 }, { cx: "80%", cy: "60%", r: 2 },
        { cx: "50%", cy: "15%", r: 3 }, { cx: "90%", cy: "20%", r: 2 },
        { cx: "10%", cy: "80%", r: 3 }, { cx: "75%", cy: "85%", r: 2 },
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill="#00E5FF" opacity="0.6" />
      ))}
      <line x1="15%" y1="25%" x2="35%" y2="70%" stroke="#00A6A6" strokeWidth="0.8" opacity="0.3" />
      <line x1="65%" y1="30%" x2="80%" y2="60%" stroke="#00A6A6" strokeWidth="0.8" opacity="0.3" />
      <line x1="50%" y1="15%" x2="65%" y2="30%" stroke="#00E5FF" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute -inset-4 rounded-2xl bg-[#00A6A6]/10 blur-2xl" />
      <div className="relative bg-[#0D2540] border border-[#00A6A6]/30 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#00A6A6]/20 bg-[#071A2F]/60">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-3 text-[#7BA8C4] text-xs font-mono">MicroTrace AI — Dashboard v1.0</span>
        </div>
        <div className="p-4 grid grid-cols-3 gap-3">
          {[
            { label: "Nile Red", icon: Activity, value: "94.2%", note: "Confianza alta", color: "#FFD700" },
            { label: "FTIR", icon: Zap, value: "87.8%", note: "PET detectado", color: "#00A6A6" },
            { label: "Raman", icon: Activity, value: "91.5%", note: "Polipropileno", color: "#00E5FF" },
          ].map((card) => (
            <div key={card.label} className="bg-[#071A2F] rounded-xl p-3 border border-[#00A6A6]/20">
              <div className="text-[#7BA8C4] text-xs mb-1 flex items-center gap-1">
                <card.icon size={10} /> {card.label}
              </div>
              <div className="text-lg font-bold font-mono" style={{ color: card.color }}>{card.value}</div>
              <div className="text-[#4CAF50] text-xs mt-0.5 flex items-center gap-1">
                <TrendingUp size={8} /> {card.note}
              </div>
            </div>
          ))}

          <div className="col-span-2 bg-[#071A2F] rounded-xl p-3 border border-[#00A6A6]/20">
            <div className="text-[#7BA8C4] text-xs mb-2">Espectro FTIR — Muestra #MPS-047</div>
            <div className="h-20">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={spectralData} margin={{ top: 2, right: 2, bottom: 0, left: -30 }}>
                  <defs>
                    <linearGradient id="specGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00A6A6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#00A6A6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="x" tick={{ fill: "#7BA8C4", fontSize: 8 }} />
                  <YAxis tick={{ fill: "#7BA8C4", fontSize: 8 }} />
                  <Tooltip
                    contentStyle={{ background: "#0D2540", border: "1px solid #00A6A640", borderRadius: 8, fontSize: 10 }}
                    labelStyle={{ color: "#7BA8C4" }}
                    itemStyle={{ color: "#00E5FF" }}
                  />
                  <Area type="monotone" dataKey="y" stroke="#00A6A6" strokeWidth={1.5} fill="url(#specGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-[#071A2F] rounded-xl p-3 border border-[#00A6A6]/20 flex flex-col justify-between">
            <div className="text-[#7BA8C4] text-xs mb-2">Consistencia</div>
            <div className="space-y-2">
              {[{ label: "NR↔FTIR", val: 91 }, { label: "FTIR↔Raman", val: 85 }, { label: "Global", val: 89 }].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-0.5">
                    <span className="text-[#7BA8C4]">{item.label}</span>
                    <span className="text-[#00E5FF] font-mono">{item.val}%</span>
                  </div>
                  <div className="h-1.5 bg-[#0D2540] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#00A6A6] to-[#00E5FF]" style={{ width: `${item.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-3 bg-gradient-to-r from-[#00A6A6]/20 to-[#00E5FF]/10 rounded-xl p-3 border border-[#00E5FF]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-[#00E5FF]" />
              <span className="text-[#E8F4F8] text-xs font-medium">Reporte integrado listo</span>
            </div>
            <div className="text-xs px-3 py-1 rounded-full bg-[#00A6A6] text-[#071A2F] font-bold">Exportar PDF</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#071A2F]">
      <ParticleBg />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#00A6A6]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00A6A6]/40 bg-[#00A6A6]/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span className="text-[#00E5FF] text-xs font-mono tracking-widest uppercase">TRL 3 — Prueba de concepto</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white mb-2"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", lineHeight: 1.05 }}
          >
            MicroTrace
            <span className="block" style={{ background: "linear-gradient(90deg, #00A6A6, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#7BA8C4] mb-4"
            style={{ fontSize: "1.1rem", lineHeight: 1.6, maxWidth: "520px" }}
          >
            Inteligencia artificial para integrar resultados de{" "}
            <span className="text-[#00A6A6] font-semibold">Nile Red</span>,{" "}
            <span className="text-[#00A6A6] font-semibold">FTIR</span> y{" "}
            <span className="text-[#00A6A6] font-semibold">Raman</span> en el estudio de microplásticos en muestras de sangre.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#E8F4F8] mb-8"
            style={{ fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "480px" }}
          >
            Una herramienta inteligente para laboratorios que organiza, compara y relaciona resultados analíticos para generar reportes estructurados de apoyo a la investigación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => handleScroll("demo")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-[#071A2F] font-bold text-sm transition-all duration-300 hover:scale-[1.03]"
              style={{ background: "linear-gradient(90deg, #00A6A6, #00E5FF)" }}
            >
              Ver demo <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleScroll("problema")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#00A6A6]/50 text-[#00A6A6] hover:bg-[#00A6A6]/10 font-semibold text-sm transition-all duration-200"
            >
              Conocer el proyecto
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 pl-4 border-l-2 border-[#00E5FF]/40"
          >
            <p className="text-[#E8F4F8]/70 italic text-sm">
              "¿Y si pudiéramos hacer que todas las técnicas hablaran entre sí?"
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#7BA8C4]"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
