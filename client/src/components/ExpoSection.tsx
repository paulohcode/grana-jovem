/* ============================================================
   EXPO FINAL — Mentes que Geram Valor
   ============================================================ */

const EXPO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663604408449/PozHxdF9g5QtYZLjQQ7bn7/expo-bg-PbLWc7uDJtnW6DKghyL94A.webp";

const highlights = [
  { icon: "🎤", title: "Palestra", desc: "Convidado externo especialista em Educação Financeira" },
  { icon: "🏛️", title: "Tribunal dos Viés", desc: "Julgamento de casos reais de vieses financeiros" },
  { icon: "🎭", title: "Pitches Teatrais", desc: "12 equipes apresentando no auditório" },
  { icon: "🏆", title: "Premiação", desc: "As melhores equipes são reconhecidas" },
];

export default function ExpoSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${EXPO_BG})` }}
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#111111] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono-data text-xs text-[#D4AF37] tracking-[0.4em] uppercase">
            O grande evento final
          </span>
          <h2 className="font-display text-[clamp(36px,7vw,80px)] text-white mt-2 leading-none">
            EXPO{" "}
            <span className="text-gradient-gold">MENTES</span>
          </h2>
          <h2 className="font-display text-[clamp(24px,5vw,56px)] text-[#39FF14] neon-glow leading-none">
            QUE GERAM VALOR
          </h2>
          <div className="divider-gold w-48 mx-auto mt-6" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Ao final da oficina, você vai apresentar o que aprendeu para toda a comunidade escolar. Não é uma prova. É um evento.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="reveal text-center p-6 border border-[#D4AF3733] bg-[#D4AF3708] group hover:border-[#D4AF37] transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {h.icon}
              </div>
              <h3 className="font-display text-xl text-[#D4AF37] mb-2">{h.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Evaluation criteria */}
        <div className="reveal border border-[#2A2A2A] bg-[#0A0A0A88] p-8">
          <div className="font-mono-data text-xs text-[#39FF14] tracking-widest uppercase mb-6 text-center">
            Como você será avaliado
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="font-display text-lg text-[#D4AF37] mb-4">Avaliação em Equipe</div>
              {[
                { label: "Fidelidade teórica ao livro", weight: 10 },
                { label: "Qualidade teatral", weight: 10 },
                { label: "Comunicação clara", weight: 10 },
                { label: "Criatividade na solução", weight: 10 },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <div className="flex-1">
                    <div className="text-white/70 text-xs mb-1">{c.label}</div>
                    <div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#D4AF37] rounded-full"
                        style={{ width: `${c.weight * 10}%` }}
                      />
                    </div>
                  </div>
                  <span className="font-mono-data text-xs text-[#D4AF37] w-10 text-right">
                    {c.weight}%
                  </span>
                </div>
              ))}
            </div>
            <div>
              <div className="font-display text-lg text-[#39FF14] mb-4">Avaliação Individual</div>
              {[
                { label: "Domínio e profundidade do conteúdo", weight: 20 },
                { label: "Clareza e estrutura de comunicação", weight: 20 },
                { label: "Postura, interação e recursos", weight: 20 },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <div className="flex-1">
                    <div className="text-white/70 text-xs mb-1">{c.label}</div>
                    <div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#39FF14] rounded-full"
                        style={{ width: `${c.weight * 5}%` }}
                      />
                    </div>
                  </div>
                  <span className="font-mono-data text-xs text-[#39FF14] w-10 text-right">
                    {c.weight}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
