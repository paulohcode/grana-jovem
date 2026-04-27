/* ============================================================
   DESAFIO CENTRAL — A pergunta que move tudo
   ============================================================ */

const CHALLENGE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663604408449/PozHxdF9g5QtYZLjQQ7bn7/challenge-section-AJxpuc8z3Atw6YTPjDCNSA.webp";

const axes = [
  {
    icon: "🧠",
    title: "Comportamental",
    desc: "Identifique os 20 vieses financeiros de Morgan Housel e entenda como eles afetam sua vida.",
    color: "#D4AF37",
  },
  {
    icon: "🎭",
    title: "Comunicação & Ética",
    desc: "Construa narrativas transparentes (storytelling financeiro) sem apelar para manipulação.",
    color: "#39FF14",
  },
  {
    icon: "🌍",
    title: "Intervenção Social",
    desc: "Proponha ações práticas que eduquem a comunidade sobre sorte, risco e patrimônio.",
    color: "#D4AF37",
  },
];

export default function DesafioSection() {
  return (
    <section className="section-mid py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${CHALLENGE_IMG})` }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono-data text-xs text-[#39FF14] tracking-[0.4em] uppercase">
            A pergunta que vai guiar tudo
          </span>
          <h2 className="font-display text-[clamp(40px,7vw,80px)] text-white mt-2 leading-none">
            O DESAFIO
          </h2>
          <div className="divider-neon w-48 mx-auto mt-4" />
        </div>

        {/* Central question */}
        <div className="reveal mb-20">
          <div className="relative border border-[#D4AF3744] bg-[#D4AF3708] p-8 md:p-12 text-center max-w-4xl mx-auto">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]" />

            <div className="font-mono-data text-sm text-[#D4AF37] tracking-widest uppercase mb-4">
              Pergunta Central
            </div>
            <blockquote className="font-display text-[clamp(24px,4vw,48px)] text-white leading-tight">
              "Como tomar{" "}
              <span className="text-gradient-gold">decisões financeiras inteligentes</span>{" "}
              em um mundo de{" "}
              <span className="text-[#39FF14] neon-glow">incertezas</span>?"
            </blockquote>
          </div>
        </div>

        {/* Three axes */}
        <div className="grid md:grid-cols-3 gap-6">
          {axes.map((ax, i) => (
            <div
              key={i}
              className={`reveal card-vip p-8 border rounded-none group`}
              style={{
                transitionDelay: `${i * 0.15}s`,
                borderColor: ax.color + "33",
              }}
            >
              <div className="text-4xl mb-4">{ax.icon}</div>
              <div
                className="font-mono-data text-xs tracking-widest uppercase mb-2"
                style={{ color: ax.color }}
              >
                Eixo {i + 1}
              </div>
              <h3 className="font-display text-2xl text-white mb-3">{ax.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{ax.desc}</p>
              <div
                className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: ax.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
