/* ============================================================
   VIESES FINANCEIROS — Os 20 vieses de Morgan Housel
   ============================================================ */
import { useState } from "react";

const biases = [
  { num: "01", name: "Viés da Experiência Pessoal", short: "Sua história molda sua visão de risco", color: "#D4AF37" },
  { num: "02", name: "Sorte vs. Mérito", short: "Confundir sorte com habilidade", color: "#39FF14" },
  { num: "03", name: "Nunca é Suficiente", short: "A ganância que destrói o suficiente", color: "#D4AF37" },
  { num: "04", name: "Efeito Confusão", short: "Não ver o que está bem na sua frente", color: "#39FF14" },
  { num: "05", name: "Poder dos Juros Compostos", short: "Subestimar o tempo e a paciência", color: "#D4AF37" },
  { num: "06", name: "Ficar Rico vs. Permanecer Rico", short: "Habilidades diferentes para cada etapa", color: "#39FF14" },
  { num: "07", name: "Liberdade como Riqueza", short: "Controle do tempo é o maior dividendo", color: "#D4AF37" },
  { num: "08", name: "Carro do Manicômio", short: "Buscar status através de posses", color: "#39FF14" },
  { num: "09", name: "Riqueza Invisível", short: "Riqueza é o que você não gasta", color: "#D4AF37" },
  { num: "10", name: "Salve-se", short: "Poupança sem motivo específico", color: "#39FF14" },
  { num: "11", name: "Racional vs. Sensato", short: "Ser sensato é melhor que ser racional", color: "#D4AF37" },
  { num: "12", name: "Viés da Surpresa", short: "O mundo muda de formas inesperadas", color: "#39FF14" },
  { num: "13", name: "Margem de Erro", short: "Planejar para o imprevisível", color: "#D4AF37" },
  { num: "14", name: "Você vai Mudar", short: "Seus objetivos de hoje não são os de amanhã", color: "#39FF14" },
  { num: "15", name: "Nada é Grátis", short: "Todo retorno tem um custo emocional", color: "#D4AF37" },
  { num: "16", name: "Cada um na Sua", short: "Não copie o jogo de outros investidores", color: "#39FF14" },
  { num: "17", name: "O Pessimismo Atrai", short: "Más notícias vendem mais que boas", color: "#D4AF37" },
  { num: "18", name: "Quando você Acredita em Tudo", short: "Narrativas que nos enganam", color: "#39FF14" },
  { num: "19", name: "Tudo junto", short: "A visão sistêmica das finanças", color: "#D4AF37" },
  { num: "20", name: "O Otimismo Histórico", short: "O longo prazo sempre venceu", color: "#39FF14" },
];

export default function ViesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section-dark py-24 px-4 relative overflow-hidden">
      {/* Background number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="font-display text-[30vw] text-[#D4AF37] leading-none">20</span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono-data text-xs text-[#D4AF37] tracking-[0.4em] uppercase">
            O que você vai descobrir
          </span>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] text-gradient-gold mt-2 leading-none">
            20 VIESES
          </h2>
          <h3 className="font-display text-[clamp(24px,4vw,48px)] text-white leading-none">
            FINANCEIROS
          </h3>
          <div className="divider-gold w-48 mx-auto mt-4" />
          <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm">
            Cada equipe vai estudar e apresentar alguns desses vieses que controlam nossas decisões com dinheiro.
          </p>
        </div>

        {/* Biases grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
          {biases.map((b, i) => (
            <div
              key={i}
              className={`reveal p-4 border cursor-default transition-all duration-300 group`}
              style={{
                transitionDelay: `${(i % 5) * 0.06}s`,
                borderColor: hovered === i ? b.color : "#1A1A1A",
                backgroundColor: hovered === i ? b.color + "10" : "#111111",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="font-mono-data text-2xl font-bold mb-2 transition-colors duration-300"
                style={{ color: hovered === i ? b.color : "#2A2A2A" }}
              >
                {b.num}
              </div>
              <div className="font-display text-sm text-white leading-tight mb-1">{b.name}</div>
              <div
                className="text-[10px] leading-relaxed transition-colors duration-300"
                style={{ color: hovered === i ? b.color + "cc" : "#ffffff33" }}
              >
                {b.short}
              </div>
            </div>
          ))}
        </div>

        {/* Teaser */}
        <div className="text-center mt-10 reveal">
          <p className="font-mono-data text-sm text-white/40 tracking-wider">
            Você reconhece algum desses vieses na sua vida?
          </p>
        </div>
      </div>
    </section>
  );
}
