/* ============================================================
   NAVBAR — Navegação fixa com logo placeholder
   ============================================================ */
import { useState, useEffect } from "react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Desafio", href: "#desafio" },
  { label: "Atividades", href: "#atividades" },
  { label: "Equipes", href: "#equipes" },
  { label: "Filme", href: "#filme" },
  { label: "EXPO", href: "#expo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 border-b border-[#D4AF3322] backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo area */}
        <div className="flex items-center gap-3">
          {/* Logo placeholder */}
          <div className="w-8 h-8 border border-[#D4AF3766] bg-[#D4AF3711] flex items-center justify-center">
            <span className="font-mono-data text-xs text-[#D4AF37]">S</span>
          </div>
          <div>
            <span className="font-display text-xl text-gradient-gold tracking-wide">
              GRANA JOVEM
            </span>
            <span className="font-mono-data text-[10px] text-white/30 ml-2 tracking-widest">
              SESI
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="font-mono-data text-xs text-white/50 hover:text-[#D4AF37] tracking-widest uppercase transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}

        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-px bg-[#D4AF37] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-px bg-[#D4AF37] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-px bg-[#D4AF37] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/98 border-b border-[#D4AF3322] px-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="block w-full text-left font-mono-data text-xs text-white/60 hover:text-[#D4AF37] tracking-widest uppercase py-3 border-b border-[#1A1A1A] transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}

        </div>
      )}
    </nav>
  );
}
