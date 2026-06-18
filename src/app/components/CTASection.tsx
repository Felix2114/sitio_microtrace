import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const siteUrl = "https://microtrace-ai.onrender.com/";
const logoUrl = new URL("../../../logo.jpeg", import.meta.url).href;

export function CTASection() {
  return (
    <section id="demo" className="py-28 relative overflow-hidden bg-[#050F1E]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00A6A6]/30 to-transparent" />

      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#00A6A6]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00E5FF]/08 blur-3xl" />
        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0" y1={`${i * 10}%`} x2="100%" y2={`${i * 10}%`}
              stroke="#00E5FF" strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={`${i * 7.14}%`} y1="0" x2={`${i * 7.14}%`} y2="100%"
              stroke="#00E5FF" strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 rounded-full border border-[#00E5FF]/40 text-[#00E5FF] text-xs font-mono tracking-widest uppercase mb-8">
            Comienza ahora
          </span>

          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1 }}
          >
            Conecta técnicas.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #00A6A6, #00E5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Integra datos.
            </span>
            <br />
            Sigue el rastro.
          </h2>

          <p className="text-[#7BA8C4] mb-10 max-w-xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            MicroTrace AI convierte resultados aislados en una interpretación analítica
            integrada.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-2">
            <motion.a
              href={siteUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00A6A6] to-[#00E5FF] text-[#071A2F] font-bold text-base shadow-lg shadow-[#00A6A6]/30 hover:shadow-[#00E5FF]/40 transition-all duration-300"
            >
              Entrar al sitio web <ArrowRight size={18} />
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#00A6A6]/50 bg-[#071A2F]/70"
              aria-label="Logo de MicroTrace AI"
            >
              <img
                src={logoUrl}
                alt="Logo de MicroTrace AI"
                className="h-12 w-12 rounded-lg object-cover ring-1 ring-[#00E5FF]/25"
              />
              <span className="text-[#E8F4F8] font-semibold text-base">MicroTrace AI</span>
            </motion.div>
          </div>

        </motion.div>
      </div>

      {/* Disclaimer */}
      <div className="relative mt-14 text-center">
        <p className="text-[#7BA8C4]/50 text-xs max-w-md mx-auto" style={{ lineHeight: 1.6 }}>
          Herramienta de apoyo para investigación y laboratorio. No emite diagnóstico médico ni
          sustituye el juicio clínico de un profesional de la salud.
        </p>
      </div>
    </section>
  );
}
