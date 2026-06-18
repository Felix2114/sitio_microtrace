import { motion } from "motion/react";
import { Check, Layers, TrendingDown, GitMerge, Archive, FileCheck, FlaskConical } from "lucide-react";

const values = [
  {
    icon: Layers,
    text: "Integra resultados de múltiples técnicas",
    desc: "Un único flujo unifica Nile Red, FTIR y Raman.",
  },
  {
    icon: TrendingDown,
    text: "Reduce la fragmentación del análisis",
    desc: "Elimina silos de datos entre métodos analíticos.",
  },
  {
    icon: GitMerge,
    text: "Disminuye la comparación manual",
    desc: "El motor integrador automatiza las concordancias.",
  },
  {
    icon: Archive,
    text: "Organiza evidencia en un solo flujo",
    desc: "Trazabilidad completa por muestra y técnica.",
  },
  {
    icon: FileCheck,
    text: "Genera reportes analíticos estructurados",
    desc: "Exportables en PDF, JSON y CSV.",
  },
  {
    icon: FlaskConical,
    text: "No sustituye al laboratorio: lo fortalece",
    desc: "Herramienta de apoyo, no de reemplazo.",
  },
];

export function ValueSection() {
  return (
    <section className="py-24 bg-[#050F1E] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A6A6]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A6A6]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-[#00A6A6]/30 text-[#00A6A6] text-xs font-mono tracking-widest uppercase mb-4">
            Diferenciadores
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            ¿Qué hace diferente a{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00A6A6, #00E5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MicroTrace AI?
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Value list */}
          <div className="space-y-4">
            {values.map((v, i) => (
              <motion.div
                key={v.text}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-[#00A6A6]/15 bg-[#0D2540]/50 hover:border-[#00A6A6]/40 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-7 h-7 rounded-full bg-[#00A6A6]/15 border border-[#00A6A6]/30 flex items-center justify-center">
                    <Check size={13} className="text-[#00A6A6]" strokeWidth={3} />
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#00E5FF]/08 flex items-center justify-center group-hover:bg-[#00E5FF]/15 transition-colors">
                    <v.icon size={17} className="text-[#00E5FF]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#E8F4F8] font-semibold text-sm">{v.text}</p>
                  <p className="text-[#7BA8C4] text-xs mt-0.5">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlight card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A6A6]/30 via-[#071A2F] to-[#00E5FF]/20" />
              <div className="absolute inset-0 border border-[#00E5FF]/25 rounded-2xl" />
              <div className="relative p-8 flex flex-col gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A6A6] to-[#00E5FF] flex items-center justify-center shadow-lg shadow-[#00A6A6]/30">
                  <Layers size={26} className="text-[#071A2F]" strokeWidth={2} />
                </div>
                <blockquote>
                  <p
                    className="text-white leading-snug"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", fontWeight: 700 }}
                  >
                    "No es una nueva técnica de laboratorio. Es una herramienta de integración
                    inteligente."
                  </p>
                </blockquote>
                <div className="h-px bg-gradient-to-r from-[#00A6A6]/40 to-transparent" />
                <p className="text-[#7BA8C4] text-sm leading-relaxed">
                  MicroTrace AI no compite con los instrumentos analíticos existentes. Complementa
                  el trabajo científico al conectar sus resultados en un flujo común, trazable y
                  estructurado.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Nile Red", "FTIR", "Raman", "Integración IA"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono border border-[#00A6A6]/30 text-[#00A6A6] bg-[#00A6A6]/08"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
