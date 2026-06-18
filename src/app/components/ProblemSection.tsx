import { motion } from "motion/react";
import { Eye, Zap, Activity, AlertTriangle, ArrowRight } from "lucide-react";

const techniques = [
  {
    icon: Eye,
    name: "Nile Red",
    color: "#FFD700",
    borderColor: "rgba(255,215,0,0.3)",
    bg: "rgba(255,215,0,0.06)",
    desc: "Visualización fluorescente y conteo de partículas. Identifica microplásticos por tinción, pero no diferencia polímeros.",
    tag: "Fluorescencia",
    output: "Conteo & morfología",
  },
  {
    icon: Zap,
    name: "FTIR",
    color: "#00A6A6",
    borderColor: "rgba(0,166,166,0.3)",
    bg: "rgba(0,166,166,0.06)",
    desc: "Identificación química del polímero mediante absorción infrarroja. Alta especificidad, pero análisis tedioso.",
    tag: "Espectroscopía IR",
    output: "Tipo de polímero",
  },
  {
    icon: Activity,
    name: "Raman",
    color: "#00E5FF",
    borderColor: "rgba(0,229,255,0.3)",
    bg: "rgba(0,229,255,0.06)",
    desc: "Información molecular y estructural con alta resolución espacial. Complementa FTIR con dispersión de luz.",
    tag: "Dispersión Raman",
    output: "Estructura molecular",
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="py-24 bg-[#071A2F] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A6A6]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-[#00A6A6]/30 text-[#00A6A6] text-xs font-mono tracking-widest uppercase mb-4">
            El desafío
          </span>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            El problema:{" "}
            <span style={{ background: "linear-gradient(90deg, #00A6A6, #00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              datos fragmentados
            </span>
          </h2>
          <p className="text-[#7BA8C4] max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Cada técnica aporta una parte de la respuesta. El reto es integrarlas en un flujo común para obtener una interpretación más completa y trazable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {techniques.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02]"
              style={{ background: tech.bg, borderColor: tech.borderColor }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${tech.color}15`, border: `1px solid ${tech.color}30` }}>
                <tech.icon size={22} style={{ color: tech.color }} />
              </div>
              <div className="inline-block px-2 py-0.5 rounded text-xs font-mono mb-3" style={{ background: `${tech.color}15`, color: tech.color }}>
                {tech.tag}
              </div>
              <h3 className="text-white mb-2" style={{ fontSize: "1.25rem" }}>{tech.name}</h3>
              <p className="text-[#7BA8C4] text-sm mb-4" style={{ lineHeight: 1.65 }}>{tech.desc}</p>
              <div className="flex items-center gap-2 text-xs font-medium py-2 px-3 rounded-lg" style={{ background: `${tech.color}10`, color: tech.color }}>
                <span>Salida:</span>
                <span className="font-bold">{tech.output}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-16 h-px bg-[#00A6A6]/30" />
            <ArrowRight size={16} className="text-[#00A6A6]" />
            <div className="w-16 h-px bg-[#00A6A6]/30" />
          </div>
          <div className="max-w-2xl w-full rounded-2xl border border-[#FF6B6B]/20 bg-[#FF6B6B]/5 p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B6B]/15 border border-[#FF6B6B]/25 flex items-center justify-center shrink-0">
              <AlertTriangle size={18} className="text-[#FF6B6B]" />
            </div>
            <div>
              <h4 className="text-[#FF9999] mb-1" style={{ fontSize: "0.95rem" }}>Resultado sin integración</h4>
              <p className="text-[#7BA8C4] text-sm" style={{ lineHeight: 1.6 }}>
                Más tiempo de análisis · Dependencia manual · Dificultad para interpretar la muestra completa · Resultados no trazables entre técnicas
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
