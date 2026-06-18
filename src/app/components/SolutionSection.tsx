import { motion } from "motion/react";
import { Eye, Zap, Activity, FileText, ArrowRight, Brain } from "lucide-react";

const inputs = [
  { icon: Eye, label: "Modelo IA\nNile Red", color: "#FFD700", delay: 0 },
  { icon: Zap, label: "Modelo IA\nFTIR", color: "#00A6A6", delay: 0.15 },
  { icon: Activity, label: "Modelo IA\nRaman", color: "#00E5FF", delay: 0.3 },
];

export function SolutionSection() {
  return (
    <section id="solucion" className="py-24 bg-[#050F1E] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A6A6]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A6A6]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00A6A6]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-[#00A6A6]/30 text-[#00A6A6] text-xs font-mono tracking-widest uppercase mb-4">
            La solución
          </span>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Integración{" "}
            <span style={{ background: "linear-gradient(90deg, #00A6A6, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              multimodal
            </span>
          </h2>
          <p className="text-[#7BA8C4] max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            MicroTrace AI recibe las salidas de modelos especializados, compara coincidencias, identifica discrepancias y evalúa niveles de consistencia entre técnicas.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Inputs */}
          <div className="flex flex-col gap-4">
            {inputs.map((inp) => (
              <motion.div
                key={inp.label}
                initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: inp.delay }}
                className="rounded-xl p-4 border flex items-center gap-3 min-w-[180px]"
                style={{ background: `${inp.color}08`, borderColor: `${inp.color}30` }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${inp.color}18` }}>
                  <inp.icon size={18} style={{ color: inp.color }} />
                </div>
                <span className="text-[#E8F4F8] text-sm font-semibold whitespace-pre-line leading-tight">{inp.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Normalize arrow */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="hidden md:flex items-center gap-1">
              <div className="w-10 h-px bg-[#00A6A6]" />
              <ArrowRight size={14} className="text-[#00A6A6]" />
            </div>
            <div className="px-3 py-2 rounded-lg border border-[#00A6A6]/20 bg-[#00A6A6]/8">
              <span className="text-[#00A6A6] text-xs font-mono">Normalización</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <div className="w-10 h-px bg-[#00A6A6]" />
              <ArrowRight size={14} className="text-[#00A6A6]" />
            </div>
            <div className="md:hidden my-2"><ArrowRight size={18} className="text-[#00A6A6] rotate-90" /></div>
          </motion.div>

          {/* Core model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#00A6A6]/20 to-[#00E5FF]/10 blur-xl" />
            <div className="relative rounded-2xl border border-[#00E5FF]/40 bg-[#0D2540] p-8 flex flex-col items-center gap-3 min-w-[200px] shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00A6A6] to-[#00E5FF] flex items-center justify-center">
                <Brain size={28} className="text-[#071A2F]" strokeWidth={2} />
              </div>
              <span className="text-white text-center font-bold" style={{ fontSize: "0.95rem" }}>Modelo Integrador</span>
              <span className="text-center font-black" style={{ background: "linear-gradient(90deg, #00A6A6, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "1.1rem" }}>
                MicroTrace AI
              </span>
              <div className="w-full h-px bg-[#00A6A6]/20 my-1" />
              <div className="text-[#7BA8C4] text-xs text-center">Comparación · Consistencia · Discrepancias</div>
            </div>
          </motion.div>

          {/* Arrow out */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="hidden md:flex items-center gap-1">
              <div className="w-8 h-px bg-[#00E5FF]" />
              <ArrowRight size={14} className="text-[#00E5FF]" />
            </div>
            <div className="md:hidden my-2"><ArrowRight size={18} className="text-[#00E5FF] rotate-90" /></div>
          </motion.div>

          {/* Output */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}
            className="rounded-2xl p-6 border border-[#00E5FF]/30 bg-[#00E5FF]/5 flex flex-col items-center gap-3 min-w-[180px]"
          >
            <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/15 flex items-center justify-center">
              <FileText size={22} className="text-[#00E5FF]" />
            </div>
            <span className="text-white font-bold text-center text-sm">Reporte analítico estructurado</span>
            <div className="text-[#00E5FF] text-xs font-mono bg-[#00E5FF]/10 px-2 py-1 rounded">PDF · JSON · CSV</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
