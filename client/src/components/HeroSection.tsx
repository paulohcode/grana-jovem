/* ============================================================
   HERO SECTION — Neo-Luxury Dark Finance
   Full-screen hero with particle canvas, glitch title, typewriter subtitle
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663604408449/PozHxdF9g5QtYZLjQQ7bn7/hero-bg-TKv3hmVD8DZRQfPr46MT2d.webp";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  char: string;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const { displayed: subtitle, done: subtitleDone } = useTypewriter(
    "Como tomar decisões financeiras inteligentes em um mundo de incertezas?",
    40,
    2200
  );

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = ["$", "R$", "%", "↑", "↗", "◆", "●"];
    const colors = ["#D4AF37", "#FFD700", "#39FF14", "#D4AF3788"];
    const particles: Particle[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.2,
        size: Math.random() * 14 + 8,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        char: chars[Math.floor(Math.random() * chars.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.font = `bold ${p.size}px 'Space Mono', monospace`;
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    // Trigger title animation
    const timer = setTimeout(() => setTitleVisible(true), 300);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
      clearTimeout(timer);
    };
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById("sobre");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className={`mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37] bg-[#D4AF3711] transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#39FF14] neon-glow animate-pulse" />
          <span className="font-mono-data text-xs text-[#D4AF37] tracking-widest uppercase">
            SESI · 2º Ano do Ensino Médio · 2026
          </span>
        </div>

        {/* Main title with glitch */}
        <div
          className={`transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="font-display text-[clamp(72px,14vw,160px)] leading-none tracking-wide glitch-container text-gradient-gold"
            data-text="GRANA JOVEM"
          >
            GRANA JOVEM
          </h1>
        </div>

        {/* Subtitle line */}
        <div
          className={`mt-2 mb-8 transition-all duration-1000 delay-300 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="divider-gold w-64 mx-auto mb-6" />
          <p className="font-display text-[clamp(18px,3vw,28px)] text-white/80 tracking-[0.3em] uppercase">
            Oficina de Aprendizagem
          </p>
        </div>

        {/* Typewriter question */}
        <div
          className={`max-w-3xl transition-all duration-1000 delay-500 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-mono-data text-[clamp(12px,1.6vw,16px)] text-[#39FF14] leading-relaxed" style={{ minHeight: '4em' }}>
            &ldquo;{subtitle}
            {!subtitleDone && <span className="typewriter-cursor" />}&rdquo;
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`mt-10 transition-all duration-1000 delay-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToNext}
            className="btn-neon-pulse bg-[#39FF14] text-[#0A0A0A] font-display text-xl tracking-widest px-10 py-4 rounded-none hover:bg-[#FFD700] transition-colors duration-300"
          >
            QUERO PARTICIPAR
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono-data text-xs text-white/40 tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </div>
    </section>
  );
}
