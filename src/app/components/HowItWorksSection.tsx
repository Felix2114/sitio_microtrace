import { motion } from "motion/react";
import { Upload, SlidersHorizontal, Brain, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Carga de resultados",
    desc: "El laboratorio carga resultados provenientes de modelos especializados de Nile Red, FTIR y Raman.",
    color: "#00A6A6",
    detail: "CSV · JSON · XLS",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Organización de datos",
    desc: "La herramienta normaliza la información por técnica, muestra y nivel de confianza.",
    color: "#00B8D4",
    detail: "Normalización · Etiquetado",
  },
  {
    number: "03",
    icon: Brain,
    title: "Integración inteligente",
    desc: "El modelo integrador compara resultados visuales, espectroscópicos y analíticos entre técnicas.",
    color: "#00CCE0",
    detail: "Motor de consistencia",
  },
  {
    number: "04",
    icon: FileText,
    title: "Reporte estructurado",
    desc: "Se genera un reporte claro para apoyar investigación y revisión en laboratorio.",
    color: "#00E5FF",
    detail: "PDF · Exportable",
  },
];

export function HowItWorksSection() {
  return (
    <section id="funcionamiento" className="py-24 bg-[#071A2F] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A6A6]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-[#00A6A6]/30 text-[#00A6A6] text-xs font-mono tracking-widest uppercase mb-4">
            Flujo de trabajo
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            ¿Cómo{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00A6A6, #00E5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              funciona?
            </span>
          </h2>
          <p className="text-[#7BA8C4] max-w-xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Un flujo diseñado para laboratorios: simple de usar, riguroso en su integración analítica.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#00A6A6]/20 via-[#00E5FF]/50 to-[#00A6A6]/20" />

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon circle */}
                <div className="relative mb-6 z-10">
                  <div
                    className="absolute -inset-2 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `${step.color}30` }}
                  />
                  <div
                    className="relative w-[104px] h-[104px] rounded-full border-2 flex flex-col items-center justify-center gap-1 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: `${step.color}12`,
                      borderColor: `${step.color}40`,
                    }}
                  >
                    <step.icon size={28} style={{ color: step.color }} />
                    <span
                      className="font-mono font-bold text-xs"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                <div
                  className="inline-block px-2 py-0.5 rounded text-xs font-mono mb-3"
                  style={{ background: `${step.color}14`, color: step.color }}
                >
                  {step.detail}
                </div>

                <h3 className="text-white mb-3" style={{ fontSize: "1.1rem" }}>
                  {step.title}
                </h3>

                <p className="text-[#7BA8C4] text-sm" style={{ lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile step arrows */}
        <div className="md:hidden mt-8 flex justify-center">
          <div className="flex flex-col items-center gap-1 text-[#7BA8C4]">
            <div className="w-px h-8 bg-gradient-to-b from-[#00A6A6]/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
