/* ============================================================
   EQUIPES — As 12 equipes e seus temas
   Cards com zoom, glow e animações ao hover
   ============================================================ */

const TEAMS_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663604408449/PozHxdF9g5QtYZLjQQ7bn7/teams-bg-i4QYui2xVXHJdgZgS57RSc.webp";

const teams = [
  { num: "01", chapters: "Prefácio + Cap. 1", theme: "Ninguém é Louco", task: "Mural Linha do Tempo", icon: "🗺️" },
  { num: "02", chapters: "Cap. 2 e 3", theme: "Sorte vs. Risco", task: "Podcast 5 min", icon: "🎙️" },
  { num: "03", chapters: "Cap. 4 e 5", theme: "Juros Compostos", task: "Comparativo de Investimentos", icon: "📊" },
  { num: "04", chapters: "Cap. 6 e 7", theme: "Liberdade", task: "Debate: Salário vs. Tempo", icon: "⚖️" },
  { num: "05", chapters: "Cap. 8 e 9", theme: "Riqueza Invisível", task: "Reels para Instagram", icon: "📱" },
  { num: "06", chapters: "Cap. 10 e 11", theme: "Racional vs. Sensato", task: "Orçamento Permissivo", icon: "📋" },
  { num: "07", chapters: "Cap. 12 e 13", theme: "Margem de Erro", task: "Estudo de Caso: Quebras", icon: "🔍" },
  { num: "08", chapters: "Cap. 14 e 15", theme: "O Preço do Sucesso", task: "Análise Emocional", icon: "💭" },
  { num: "09", chapters: "Cap. 16 e 17", theme: "O Pessimismo Atrai", task: "Análise do Noticiário", icon: "📰" },
  { num: "10", chapters: "Cap. 18 e 19", theme: "Armadilhas Mentais", task: "Infográfico dos 20 Vieses", icon: "🧩" },
  { num: "11", chapters: "Posfácio + Bônus", theme: "O Otimista", task: "Guia Anti-Golpes", icon: "🛡️" },
  { num: "12", chapters: "Consolidação", theme: "Visão Sistêmica", task: "Reformulação de Produto", icon: "🚀" },
];

export default function EquipesSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${TEAMS_BG})` }}
      />
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono-data text-xs text-[#39FF14] tracking-[0.4em] uppercase">
            Cada equipe, um capítulo
          </span>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] text-gradient-gold mt-2 leading-none">
            AS 12 EQUIPES
          </h2>
          <div className="divider-gold w-48 mx-auto mt-4" />
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm">
            Cada equipe recebe capítulos do livro e uma tarefa criativa exclusiva.
            Qual será a sua?
          </p>
        </div>

        {/* Teams grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {teams.map((team, i) => (
            <div
              key={i}
              className="reveal card-vip p-5 border border-[#2A2A2A] rounded-none group cursor-default transition-all duration-300 hover:scale-110 hover:border-[#D4AF37] hover:shadow-lg hover:bg-[#D4AF3708]"
              style={{
                transitionDelay: `${(i % 4) * 0.08}s`,
                boxShadow: "0 0 0 0px #D4AF3700",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 0 20px #D4AF3744, 0 8px 32px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 0 0 0px #D4AF3700";
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-display text-5xl text-[#D4AF3733] group-hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-lg">
                  {team.num}
                </span>
                <span className="text-2xl group-hover:scale-150 transition-transform duration-300 group-hover:rotate-12">
                  {team.icon}
                </span>
              </div>
              <div className="font-mono-data text-[10px] text-[#D4AF37] tracking-widest uppercase mb-1 group-hover:text-[#39FF14] transition-colors duration-300">
                {team.chapters}
              </div>
              <h3 className="font-display text-lg text-white mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                {team.theme}
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] group-hover:bg-[#D4AF37] transition-colors duration-300" />
                <p className="text-white/50 text-xs group-hover:text-white/70 transition-colors duration-300">
                  {team.task}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <p className="font-mono-data text-sm text-[#39FF14] tracking-wider">
            ↓ Qual equipe você vai querer?
          </p>
        </div>
      </div>
    </section>
  );
}
