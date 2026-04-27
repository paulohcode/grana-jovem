/* ============================================================
   FOOTER — Rodapé simples
   ============================================================ */

const teachers = [
  { name: "Caio", subject: "Filosofia" },
  { name: "Camila", subject: "Coordenação" },
  { name: "Dayane", subject: "Artes" },
  { name: "Gustavo", subject: "Sociologia" },
  { name: "Paulo", subject: "Dev. de Sistemas" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1A1A1A] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display text-3xl text-gradient-gold mb-2">GRANA JOVEM</div>
            <div className="font-mono-data text-xs text-white/30 tracking-widest uppercase mb-4">
              SESI · Oficina de Aprendizagem
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              Uma experiência interdisciplinar baseada em{" "}
              <em className="text-[#D4AF37]">"A Psicologia Financeira"</em> de Morgan Housel.
            </p>
          </div>

          {/* Teachers */}
          <div>
            <div className="font-mono-data text-xs text-[#D4AF37] tracking-widest uppercase mb-4">
              Professores Responsáveis
            </div>
            <div className="space-y-2">
              {teachers.map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#39FF14]" />
                  <span className="text-white/60 text-xs">
                    <span className="text-white">{t.name}</span> · {t.subject}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div>
            <div className="font-mono-data text-xs text-[#39FF14] tracking-widest uppercase mb-4">
              Citação do Livro
            </div>
            <blockquote className="text-white/50 text-xs leading-relaxed italic border-l-2 border-[#D4AF37] pl-4">
              "A habilidade de fazer bem com o dinheiro não tem nada a ver com o quanto você é inteligente. Tem tudo a ver com como você se comporta."
            </blockquote>
            <p className="font-mono-data text-[10px] text-[#D4AF37] mt-2">— Morgan Housel</p>
          </div>
        </div>

        <div className="divider-gold mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-data text-[10px] text-white/20 tracking-wider">
            © 2026 SESI · Grana Jovem · 2º Ano do Ensino Médio
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
            <span className="font-mono-data text-[10px] text-white/30 tracking-wider">
              Início: 06/05/2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
