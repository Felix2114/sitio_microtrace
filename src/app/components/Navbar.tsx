import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const logoUrl = new URL("../../../logo.jpeg", import.meta.url).href;

const navLinks = [
  { label: "Problema", href: "problema" },
  { label: "Solución", href: "solucion" },
  { label: "Funcionamiento", href: "funcionamiento" },
  { label: "Ciencia", href: "ciencia" },
  { label: "Impacto", href: "impacto" },
  { label: "Demo", href: "demo" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071A2F]/95 backdrop-blur-md border-b border-[#00A6A6]/20 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <img
            src={logoUrl}
            alt="Logo de MicroTrace AI"
            className="w-9 h-9 rounded-lg object-cover ring-1 ring-[#00E5FF]/35"
          />
          <span style={{ fontFamily: "Manrope, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "white" }}>
            MicroTrace<span style={{ color: "#00E5FF" }}> AI</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-[#7BA8C4] hover:text-[#00E5FF] transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("demo")}
            className="ml-2 px-4 py-2 rounded-lg bg-[#00A6A6] hover:bg-[#00E5FF] text-[#071A2F] text-sm font-bold transition-all duration-200"
          >
            Ver demo
          </button>
        </div>

        <button
          className="md:hidden text-[#7BA8C4] hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#071A2F]/98 backdrop-blur-md border-t border-[#00A6A6]/20 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-[#7BA8C4] hover:text-[#00E5FF] py-2 text-sm font-medium border-b border-[#00A6A6]/10"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("demo")}
            className="mt-2 w-full py-3 rounded-lg bg-[#00A6A6] text-[#071A2F] text-sm font-bold"
          >
            Ver demo
          </button>
        </div>
      )}
    </nav>
  );
}
