import { motion } from "motion/react";
import { Heart, Cpu, Recycle } from "lucide-react";

const ods = [
  {
    number: "ODS 3",
    icon: Heart,
    title: "Salud y Bienestar",
    desc: "Contribuye al análisis de microplásticos como contaminantes emergentes con impacto en la salud humana.",
    color: "#4CAF50",
    bg: "rgba(76,175,80,0.08)",
    border: "rgba(76,175,80,0.25)",
  },
  {
    number: "ODS 9",
    icon: Cpu,
    title: "Industria, Innovación e Infraestructura",
    desc: "Impulsa la innovación tecnológica en laboratorios científicos mediante integración inteligente de datos.",
    color: "#FF9800",
    bg: "rgba(255,152,0,0.08)",
    border: "rgba(255,152,0,0.25)",
  },
  {
    number: "ODS 12",
    icon: Recycle,
    title: "Producción y Consumo Responsables",
    desc: "Apoya la investigación sobre el impacto del plástico en ecosistemas y organismos vivos.",
    color: "#00A6A6",
    bg: "rgba(0,166,166,0.08)",
    border: "rgba(0,166,166,0.25)",
  },
];

export function ImpactSection() {
  return (
    <section id="impacto" className="py-24 bg-[#071A2F] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A6A6]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-[#00A6A6]/30 text-[#00A6A6] text-xs font-mono tracking-widest uppercase mb-4">
            Contribución global
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Impacto{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00A6A6, #00E5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              científico y social
            </span>
          </h2>
          <p className="text-[#7BA8C4] max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            MicroTrace AI contribuye al análisis de contaminantes emergentes, la innovación
            tecnológica en laboratorios y la investigación sobre el impacto del plástico en la
            salud y el ambiente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {ods.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl p-6 border flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300"
              style={{ background: item.bg, borderColor: item.border }}
            >
              {/* ODS badge */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.color}20` }}
                >
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <span
                  className="font-mono font-bold text-sm"
                  style={{ color: item.color }}
                >
                  {item.number}
                </span>
              </div>

              <div>
                <h3 className="text-white mb-2" style={{ fontSize: "1.05rem" }}>
                  {item.title}
                </h3>
                <p className="text-[#7BA8C4] text-sm" style={{ lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block rounded-2xl border border-[#00A6A6]/20 bg-[#00A6A6]/05 px-8 py-5">
            <p className="text-[#E8F4F8] font-medium" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
              Alineado con la{" "}
              <span className="text-[#00E5FF] font-bold">Agenda 2030</span> de Naciones Unidas
              y los objetivos de desarrollo sostenible en ciencia y salud ambiental.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
