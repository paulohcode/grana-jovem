/* ============================================================
   CTA FINAL — Chamada para participar
   ============================================================ */

const reasons = [
  { icon: "💰", text: "Aprenda a pensar sobre dinheiro de forma diferente" },
  { icon: "🧠", text: "Entenda os vieses que sabotam suas decisões" },
  { icon: "🎭", text: "Crie conteúdo real: podcast, reels, teatro e mais" },
  { icon: "🤝", text: "Trabalhe em equipe com seus colegas" },
  { icon: "🏆", text: "Apresente no EXPO Mentes que Geram Valor" },
  { icon: "📖", text: "Leia um livro que vai mudar sua visão de mundo" },
];

export default function CTASection() {
  return (
    <section className="section-mid py-24 px-4 relative overflow-hidden">
      {/* Neon line decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14] to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono-data text-xs text-[#D4AF37] tracking-[0.4em] uppercase">
            Por que entrar nessa?
          </span>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] text-white mt-2 leading-none">
            6 MOTIVOS
          </h2>
          <h2 className="font-display text-[clamp(32px,6vw,72px)] text-gradient-gold leading-none">
            PARA PARTICIPAR
          </h2>
          <div className="divider-gold w-48 mx-auto mt-4" />
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`reveal flex items-center gap-4 p-5 border border-[#2A2A2A] bg-[#111111] group hover:border-[#D4AF37] transition-all duration-300`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </span>
              <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                {r.text}
              </p>
            </div>
          ))}
        </div>

        {/* Book reference */}
        <div className="reveal mb-16 text-center">
          <div className="inline-block border border-[#D4AF3344] bg-[#D4AF3308] px-8 py-6 max-w-2xl">
            <div className="font-mono-data text-xs text-[#D4AF37] tracking-widest uppercase mb-3">
              Baseado no livro
            </div>
            <p className="font-display text-3xl text-white mb-1">
              "A Psicologia Financeira"
            </p>
            <p className="font-mono-data text-sm text-white/50">
              Morgan Housel · Ed. Sextante, 2020
            </p>
            <div className="divider-gold w-24 mx-auto my-4" />
            <p className="text-white/60 text-sm leading-relaxed italic">
              "Ser bom com dinheiro não tem nada a ver com o quanto você sabe. Tem tudo a ver com como você se comporta."
            </p>
          </div>
        </div>

        {/* Final statement */}
        <div className="reveal text-center">
          <div className="mb-6">
            <p className="font-display text-[clamp(28px,5vw,56px)] text-white leading-tight">
              Você está pronto para descobrir como{" "}
              <span className="text-gradient-gold">o seu cérebro</span>{" "}
              pensa sobre{" "}
              <span className="text-[#39FF14] neon-glow">dinheiro</span>?
            </p>
          </div>
          <p className="font-mono-data text-xs text-white/30 mt-4 tracking-wider">
            Colégio Sesi · 2º Ano do Ensino Médio · Início: 06/05/2026
          </p>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </section>
  );
}
