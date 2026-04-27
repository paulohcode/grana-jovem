/* ============================================================
   ATIVIDADES — O que você vai fazer (cards flip 3D)
   ============================================================ */

const activities = [
  {
    icon: "🎭",
    title: "Pitches Teatrais",
    tag: "Auditório",
    front: "Cada equipe apresenta um pitch teatral de até 4 minutos baseado nos capítulos do livro.",
    back: "Roteiro, personagens, conflito e resolução — tudo baseado na Psicologia Financeira de Housel.",
    color: "#D4AF37",
  },
  {
    icon: "🎙️",
    title: "Podcast",
    tag: "Equipe 2",
    front: '"Sorte ou Risco?" — 5 minutos de histórias reais sobre ganhar ou perder dinheiro.',
    back: "Cada integrante conta uma história real e o grupo classifica usando os conceitos de Housel.",
    color: "#39FF14",
  },
  {
    icon: "📊",
    title: "Análise de Investimentos",
    tag: "Equipe 3",
    front: "Compare Ibovespa, CDB e Poupança: qual rende mais em 20 anos com R$100/mês?",
    back: "Juros compostos na prática — o conceito que Warren Buffett chama de 'a oitava maravilha do mundo'.",
    color: "#D4AF37",
  },
  {
    icon: "📱",
    title: "Reels para Instagram",
    tag: "Equipe 5",
    front: "Crie um Reels mostrando o conceito de Riqueza Invisível: gasto baixo vs. status.",
    back: "O carro do vizinho não significa que ele é rico. Riqueza é o que você não vê.",
    color: "#39FF14",
  },
  {
    icon: "⚖️",
    title: "Tribunal dos Viés",
    tag: "Evento Especial",
    front: "Casos reais de vieses financeiros vão a julgamento. Você é jurado, defensor ou acusador.",
    back: "Baseado em entrevistas reais com membros da comunidade escolar sobre decisões financeiras.",
    color: "#D4AF37",
  },
  {
    icon: "🎬",
    title: "Debate: Fome de Poder",
    tag: "Filme",
    front: 'Assistir "Fome de Poder" (The Founder) e debater: Ray Kroc foi inteligente ou ganancioso?',
    back: "Conecte o filme com os capítulos de Housel: 'Nunca é suficiente', 'Nada é grátis' e mais.",
    color: "#39FF14",
  },
  {
    icon: "🗺️",
    title: "Mural Linha do Tempo",
    tag: "Equipe 1",
    front: "Como a inflação ou crises afetaram a história financeira da sua família?",
    back: "Cada integrante mapeia eventos econômicos que moldaram as decisões da sua família.",
    color: "#D4AF37",
  },
  {
    icon: "📋",
    title: "Orçamento Permissivo",
    tag: "Equipe 6",
    front: "Como gastar em lazer sem culpa, mas com planejamento? Crie sua planilha.",
    back: "Ser sensato é melhor que ser puramente racional — Housel, Cap. 11.",
    color: "#39FF14",
  },
];

export default function AtividadesSection() {
  return (
    <section className="section-dark py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono-data text-xs text-[#D4AF37] tracking-[0.4em] uppercase">
            Nada de aula tradicional
          </span>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] text-gradient-gold mt-2 leading-none">
            O QUE VOCÊ VAI FAZER
          </h2>
          <div className="divider-gold w-48 mx-auto mt-4" />
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm">
            Passe o mouse sobre os cards para descobrir mais sobre cada atividade
          </p>
        </div>

        {/* Activity cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activities.map((act, i) => (
            <div
              key={i}
              className={`reveal flip-card hover-flip h-52`}
              style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
            >
              <div className="flip-card-inner w-full h-full">
                {/* Front */}
                <div
                  className="flip-card-front w-full h-full p-5 border rounded-none flex flex-col justify-between"
                  style={{
                    backgroundColor: "#111111",
                    borderColor: act.color + "44",
                  }}
                >
                  <div>
                    <div className="text-3xl mb-3">{act.icon}</div>
                    <div
                      className="font-mono-data text-[10px] tracking-widest uppercase mb-1"
                      style={{ color: act.color }}
                    >
                      {act.tag}
                    </div>
                    <h3 className="font-display text-xl text-white leading-tight">{act.title}</h3>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">{act.front}</p>
                </div>

                {/* Back */}
                <div
                  className="flip-card-back w-full h-full p-5 border rounded-none flex flex-col justify-center"
                  style={{
                    backgroundColor: act.color + "15",
                    borderColor: act.color,
                  }}
                >
                  <div
                    className="font-mono-data text-[10px] tracking-widest uppercase mb-3"
                    style={{ color: act.color }}
                  >
                    Saiba mais
                  </div>
                  <p className="text-white text-sm leading-relaxed italic">"{act.back}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
