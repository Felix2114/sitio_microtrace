import { motion } from "motion/react";
import { BookOpen, ExternalLink } from "lucide-react";

const papers = [
  {
    authors: "Leslie et al.",
    year: "2022",
    title: "Discovery and quantification of plastic particle pollution in human blood",
    journal: "Environment International",
    topic: "Microplásticos en sangre humana",
    color: "#00A6A6",
  },
  {
    authors: "Roslan et al.",
    year: "2024",
    title: "Detection of microplastics in human tissues and organs",
    journal: "Science of The Total Environment",
    topic: "Tejidos y órganos humanos",
    color: "#00B8D4",
  },
  {
    authors: "Periyasamy",
    year: "2023",
    title: "Role of Machine Learning and Machine Vision on Microplastics",
    journal: "ACS Environmental Science & Technology",
    topic: "ML & visión artificial en microplásticos",
    color: "#00CCE0",
  },
  {
    authors: "Villegas-Camacho et al.",
    year: "2025",
    title: "FTIR-Based Microplastic Classification Using Deep Learning",
    journal: "Analytical Chemistry",
    topic: "Clasificación FTIR con IA",
    color: "#00D8EF",
  },
  {
    authors: "Lorenzo-Navarro et al.",
    year: "2021",
    title: "Deep Learning Approach for Automatic Microplastics Counting and Classification",
    journal: "Marine Pollution Bulletin",
    topic: "Conteo automático con deep learning",
    color: "#00E5FF",
  },
];

export function ScienceSection() {
  return (
    <section id="ciencia" className="py-24 bg-[#071A2F] relative">
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
            Evidencia científica
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Basado en{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00A6A6, #00E5FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              investigación científica
            </span>
          </h2>
          <p className="text-[#7BA8C4] max-w-xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            MicroTrace AI se fundamenta en literatura científica revisada por pares sobre detección
            de microplásticos e inteligencia artificial aplicada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {papers.map((paper, i) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border bg-[#0D2540]/60 p-6 hover:border-[#00A6A6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00A6A6]/10 flex flex-col gap-4"
              style={{ borderColor: `${paper.color}20` }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${paper.color}50, transparent)` }}
              />

              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${paper.color}15`, border: `1px solid ${paper.color}25` }}
                >
                  <BookOpen size={17} style={{ color: paper.color }} />
                </div>
                <ExternalLink
                  size={14}
                  className="text-[#7BA8C4] opacity-0 group-hover:opacity-100 transition-opacity mt-1 shrink-0"
                />
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="font-mono font-bold text-xs px-2 py-0.5 rounded"
                  style={{ background: `${paper.color}15`, color: paper.color }}
                >
                  {paper.year}
                </span>
                <span className="text-[#7BA8C4] text-xs font-semibold">{paper.authors}</span>
              </div>

              {/* Title */}
              <h3
                className="text-[#E8F4F8] leading-snug"
                style={{ fontSize: "0.9rem", fontWeight: 600 }}
              >
                {paper.title}
              </h3>

              {/* Journal */}
              <p className="text-[#7BA8C4] text-xs italic">{paper.journal}</p>

              {/* Topic tag */}
              <div className="mt-auto pt-2 border-t border-[#00A6A6]/12">
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ background: `${paper.color}10`, color: paper.color }}
                >
                  {paper.topic}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
