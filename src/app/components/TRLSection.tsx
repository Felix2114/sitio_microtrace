import { motion } from "motion/react";
import { CheckCircle2, Circle, Zap } from "lucide-react";

const trlSteps = [
  {
    level: "TRL 1",
    label: "Investigación documental",
    desc: "Revisión de literatura científica y estado del arte.",
    status: "done",
  },
  {
    level: "TRL 2",
    label: "Concepto tecnológico",
    desc: "Definición de arquitectura y alcance del sistema.",
    status: "done",
  },
  {
    level: "TRL 3",
    label: "Prueba de concepto analítica",
    desc: "Interfaz inicial, arquitectura funcional y flujo preliminar de integración.",
    status: "active",
  },
  {
    level: "TRL 4",
    label: "Prototipo funcional",
    desc: "Integración completa con datos reales de laboratorio.",
    status: "future",
  },
  {
    level: "TRL 5",
    label: "Validación preliminar",
    desc: "Pruebas con muestras clínicas y expertos del área.",
    status: "future",
  },
];

export function TRLSection() {
  return (
    <section className="py-24 bg-[#050F1E] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A6A6]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A6A6]/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-[#00A6A6]/30 text-[#00A6A6] text-xs font-mono tracking-widest uppercase mb-4">
            Madurez tecnológica
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Estado actual:{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00A6A6, #00E5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TRL 3
            </span>
          </h2>
          <p className="text-[#7BA8C4] max-w-xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            MicroTrace AI se encuentra iniciando TRL 3: prueba de concepto analítica. Actualmente
            cuenta con una interfaz inicial, arquitectura funcional y flujo preliminar de
            integración.
          </p>
        </motion.div>

        {/* TRL Timeline */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-5 bottom-5 w-px bg-gradient-to-b from-[#00A6A6] via-[#00E5FF] to-[#00A6A6]/10" />

          {trlSteps.map((step, i) => (
            <motion.div
              key={step.level}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative flex items-start gap-5 pb-8 last:pb-0"
            >
              {/* Icon */}
              <div className="relative z-10 shrink-0 mt-0.5">
                {step.status === "done" && (
                  <CheckCircle2 size={40} className="text-[#00A6A6]" fill="#00A6A620" />
                )}
                {step.status === "active" && (
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-[#00E5FF]/30 blur-sm animate-pulse" />
                    <Zap
                      size={40}
                      className="relative"
                      style={{ color: "#00E5FF" }}
                      fill="#00E5FF20"
                    />
                  </div>
                )}
                {step.status === "future" && (
                  <Circle size={40} className="text-[#1A3A5C]" fill="#0D2540" />
                )}
              </div>

              {/* Content */}
              <div
                className={`flex-1 rounded-xl p-5 border transition-all duration-200 ${
                  step.status === "active"
                    ? "border-[#00E5FF]/40 bg-[#00E5FF]/06 shadow-lg shadow-[#00E5FF]/10"
                    : step.status === "done"
                    ? "border-[#00A6A6]/25 bg-[#00A6A6]/06"
                    : "border-[#1A3A5C] bg-[#0D2540]/40 opacity-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="font-mono font-bold text-xs px-2 py-0.5 rounded"
                    style={
                      step.status === "active"
                        ? { background: "#00E5FF20", color: "#00E5FF" }
                        : step.status === "done"
                        ? { background: "#00A6A620", color: "#00A6A6" }
                        : { background: "#1A3A5C50", color: "#7BA8C4" }
                    }
                  >
                    {step.level}
                  </span>
                  <h3
                    className={`${
                      step.status === "active"
                        ? "text-[#00E5FF]"
                        : step.status === "done"
                        ? "text-white"
                        : "text-[#7BA8C4]"
                    }`}
                    style={{ fontSize: "1rem" }}
                  >
                    {step.label}
                  </h3>
                  {step.status === "active" && (
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-[#00E5FF] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                      En curso
                    </span>
                  )}
                  {step.status === "future" && (
                    <span className="ml-auto text-xs text-[#7BA8C4] font-mono">Próximo</span>
                  )}
                </div>
                <p
                  className={`text-sm ${
                    step.status === "future" ? "text-[#7BA8C4]/60" : "text-[#7BA8C4]"
                  }`}
                  style={{ lineHeight: 1.6 }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
