/* ============================================================
   FILME — Fome de Poder (The Founder)
   ============================================================ */

const MOVIE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663604408449/PozHxdF9g5QtYZLjQQ7bn7/movie-poster-PTrfpNDhuoardkyQX8oqwf.webp";

const connections = [
  {
    chapter: "Cap. 3",
    title: "Nunca é suficiente",
    desc: "Ray Kroc nunca está satisfeito com o acordo original com os irmãos McDonald.",
    color: "#D4AF37",
  },
  {
    chapter: "Cap. 15",
    title: "Nada é grátis",
    desc: "O preço do sucesso de Ray foi a perda de sua integridade e de seu casamento.",
    color: "#39FF14",
  },
  {
    chapter: "Cap. 18",
    title: "Quando você acredita em tudo",
    desc: "Ray ignora contratos verbais e acredita que pode simplesmente 'tomar' a marca.",
    color: "#D4AF37",
  },
];

export default function FilmeSection() {
  return (
    <section className="section-mid py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono-data text-xs text-[#39FF14] tracking-[0.4em] uppercase">
            Aprendendo com a história real
          </span>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] text-gradient-gold mt-2 leading-none">
            O FILME
          </h2>
          <div className="divider-neon w-48 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Movie poster */}
          <div className="reveal-left flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37] to-[#39FF14] opacity-30 group-hover:opacity-60 transition-opacity duration-300 blur-sm" />
              <img
                src={MOVIE_IMG}
                alt="Fome de Poder"
                className="relative w-64 md:w-80 object-cover"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <div className="w-full bg-black/80 p-3">
                  <div className="font-mono-data text-[10px] text-[#D4AF37] tracking-widest uppercase">
                    The Founder · 2016
                  </div>
                  <div className="font-display text-2xl text-white">FOME DE PODER</div>
                  <div className="font-mono-data text-[10px] text-white/50">
                    Classificação 12 anos · 115 min
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Movie details */}
          <div className="reveal-right">
            <p className="text-white/70 text-base leading-relaxed mb-8">
              A história real de <span className="text-[#FFD700] font-semibold">Ray Kroc</span>, vendedor de liquidificadores que transformou a lanchonete dos irmãos McDonald's em um império global. O filme mostra como a{" "}
              <span className="text-[#39FF14]">ambição sem limites</span> e a falta de ética podem destruir relações em nome do crescimento.
            </p>

            <div className="space-y-4">
              <div className="font-mono-data text-xs text-[#D4AF37] tracking-widest uppercase mb-4">
                Conexões com Housel
              </div>
              {connections.map((c, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 border-l-2 bg-[#111111]"
                  style={{ borderColor: c.color }}
                >
                  <div className="flex-shrink-0">
                    <span
                      className="font-mono-data text-xs tracking-wider"
                      style={{ color: c.color }}
                    >
                      {c.chapter}
                    </span>
                  </div>
                  <div>
                    <div className="font-display text-lg text-white mb-1">{c.title}</div>
                    <p className="text-white/50 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Activity teaser */}
            <div className="mt-8 p-4 border border-[#39FF1433] bg-[#39FF1408]">
              <div className="font-mono-data text-xs text-[#39FF14] tracking-widest uppercase mb-2">
                Atividade após o filme
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                <strong className="text-white">"O Júri do Franchising"</strong> — Você vai defender Ray Kroc, os irmãos McDonald ou será jurado? Cada aluno responde: Ray entendeu a psicologia financeira ou usou como desculpa para a ganância?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
