const logoUrl = new URL("../../../logo.jpeg", import.meta.url).href;
const siteUrl = "https://microtrace-ai.onrender.com/";

export function Footer() {
  return (
    <footer className="bg-[#030D1A] border-t border-[#00A6A6]/15 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src={logoUrl}
                alt="Logo de MicroTrace AI"
                className="w-9 h-9 rounded-lg object-cover ring-1 ring-[#00E5FF]/30"
              />
              <span
                className="text-white"
                style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "1rem" }}
              >
                MicroTrace<span className="text-[#00E5FF]"> AI</span>
              </span>
            </div>
            <p className="text-[#7BA8C4] text-sm leading-relaxed">
              Herramienta inteligente para la integración de resultados multimodales en el estudio
              de microplásticos en sangre.
            </p>
            <div className="mt-3 inline-block px-2 py-0.5 rounded text-xs font-mono border border-[#00A6A6]/25 text-[#00A6A6]">
              TRL 3 — En desarrollo
            </div>
          </div>

          {/* Authors */}
          <div>
            <h4 className="text-[#E8F4F8] mb-3" style={{ fontSize: "0.9rem" }}>
              Equipo de desarrollo
            </h4>
            <div className="space-y-1.5 text-[#7BA8C4] text-sm">
              <p>Proyecto de ingeniería de software</p>
              <p>Área: Health Tech · AI Research</p>
              <p className="text-[#00A6A6] font-medium">ExpoCiencias 2026</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#E8F4F8]" style={{ fontSize: "0.9rem" }}>
              Acceso rápido
            </h4>
            <a
              href={siteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-lg border border-[#00A6A6]/30 px-4 py-2 text-sm font-semibold text-[#00E5FF] transition-colors hover:bg-[#00A6A6]/10"
            >
              microtrace-ai.onrender.com
            </a>
            <p className="max-w-xs text-[#7BA8C4] text-xs leading-relaxed">
              Sitio oficial del prototipo y demo del proyecto.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00A6A6]/20 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#7BA8C4]/50 text-xs">
            © 2026 MicroTrace AI · Todos los derechos reservados
          </p>
          <p className="text-[#7BA8C4]/40 text-xs text-center">
            ExpoCiencias 2026 · Herramienta de apoyo a la investigación
          </p>
          <div className="flex gap-4">
            {["Problema", "Solución", "Ciencia", "Demo"].map((label) => (
              <button
                key={label}
                onClick={() => {
                  const el = document.getElementById(label.toLowerCase());
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[#7BA8C4]/50 hover:text-[#00A6A6] text-xs transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
