/* ============================================================
   SOBRE A OFICINA — Apresentação geral com cards de destaque
   ============================================================ */

const stats = [
  { value: "68", label: "Alunos", icon: "👥" },
  { value: "12", label: "Equipes", icon: "🏆" },
  { value: "5", label: "Disciplinas", icon: "📚" },
  { value: "5", label: "Professores", icon: "🎓" },
];

const disciplines = [
  { name: "Filosofia", teacher: "Caio", color: "#D4AF37" },
  { name: "Matemática", teacher: "Camila", color: "#39FF14" },  { name: "Artes", teacher: "Dayane", color: "#D4AF37" },
  { name: "Sociologia", teacher: "Caio", color: "#39FF14" },
  { name: "Dev. de Sistemas", teacher: "Paulo", color: "#D4AF37" },
];

export default function SobreSection() {
  return (
    <section id="sobre" className="section-dark py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono-data text-xs text-[#39FF14] tracking-[0.4em] uppercase">
            O que é isso?
          </span>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] text-gradient-gold mt-2 leading-none">
            A OFICINA
          </h2>
          <div className="divider-gold w-48 mx-auto mt-4" />
        </div>

        {/* Main description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="reveal-left">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Imagine uma experiência onde <span className="text-[#FFD700] font-semibold">Filosofia, Matemática, Artes, Sociologia e Tecnologia</span> se unem para te ensinar algo que a escola raramente ensina:
            </p>
            <p className="text-white text-2xl font-semibold leading-relaxed mb-6">
              Como o seu <span className="text-[#39FF14] neon-glow">cérebro</span> sabota as suas <span className="text-[#D4AF37] gold-glow">decisões financeiras</span>.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Baseada no livro <em className="text-[#D4AF37]">"A Psicologia Financeira"</em> de Morgan Housel, a Grana Jovem é uma oficina interdisciplinar que vai mudar a forma como você pensa sobre dinheiro, risco, sorte e liberdade.
            </p>
          </div>

          <div className="reveal-right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="card-vip p-6 text-center rounded-none border border-[#2A2A2A]"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className="font-display text-5xl text-gradient-gold">{s.value}</div>
                  <div className="font-mono-data text-xs text-white/50 tracking-widest uppercase mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disciplines */}
        <div className="reveal">
          <div className="text-center mb-8">
            <span className="font-mono-data text-xs text-[#D4AF37] tracking-[0.4em] uppercase">
              Quem está nessa com você
            </span>
            <h3 className="font-display text-4xl text-white mt-2">DISCIPLINAS ENVOLVIDAS</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {disciplines.map((d, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 border rounded-none transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: d.color + "66",
                  backgroundColor: d.color + "11",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: d.color, boxShadow: `0 0 8px ${d.color}` }}
                />
                <span className="font-display text-xl text-white tracking-wide">{d.name}</span>
                <span className="font-mono-data text-xs text-white/40">Prof. {d.teacher}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
