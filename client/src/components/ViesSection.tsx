/* ============================================================
   VIESES FINANCEIROS — 20 vieses de Morgan Housel
   Design: Cards grandes estilo "baralho de cartas" com flip 3D
   Cada carta tem frente impactante e verso com explicação
   ============================================================ */
import { useState, useRef, useEffect } from "react";

const biases = [
  {
    num: "01",
    name: "Ninguém é Louco",
    short: "Sua história molda sua visão de risco",
    detail: "Cada pessoa cresceu em contextos diferentes. O que parece irracional para você pode ser perfeitamente lógico para outro — baseado nas experiências que moldaram sua relação com dinheiro.",
    icon: "🧠",
    color: "#D4AF37",
  },
  {
    num: "02",
    name: "Sorte & Risco",
    short: "Confundir sorte com habilidade",
    detail: "Nada é tão bom ou ruim quanto parece. O sucesso de alguém pode ter sido 99% sorte — mas a história que contamos sempre exagera o mérito.",
    icon: "🎲",
    color: "#39FF14",
  },
  {
    num: "03",
    name: "Nunca é Suficiente",
    short: "A ganância que destrói o suficiente",
    detail: "A habilidade mais difícil em finanças é parar de mover o alvo. Pessoas que tinham tudo perderam tudo porque queriam mais.",
    icon: "♾️",
    color: "#D4AF37",
  },
  {
    num: "04",
    name: "Efeito Confusão",
    short: "Não ver o que está bem na sua frente",
    detail: "Warren Buffett acumulou 84% de sua riqueza depois dos 65 anos. O poder dos juros compostos é incompreensível para a mente humana.",
    icon: "🌀",
    color: "#39FF14",
  },
  {
    num: "05",
    name: "Juros Compostos",
    short: "A oitava maravilha do mundo",
    detail: "R$100 por mês durante 30 anos pode valer mais de R$300.000 — sem fazer nada além de esperar. O tempo é o maior ativo financeiro.",
    icon: "📈",
    color: "#D4AF37",
  },
  {
    num: "06",
    name: "Ficar Rico vs. Permanecer Rico",
    short: "São habilidades completamente diferentes",
    detail: "Para ficar rico você precisa de otimismo e risco. Para permanecer rico você precisa do oposto: humildade e paranoia. Poucos conseguem os dois.",
    icon: "💎",
    color: "#39FF14",
  },
  {
    num: "07",
    name: "Liberdade",
    short: "Controle do tempo é o maior dividendo",
    detail: "O maior valor do dinheiro não é o que você compra, mas a liberdade de fazer o que quiser, quando quiser, com quem quiser — pelo tempo que quiser.",
    icon: "🕊️",
    color: "#D4AF37",
  },
  {
    num: "08",
    name: "Carro do Manicômio",
    short: "Buscar admiração através de posses",
    detail: "Quando você vê um carro de luxo, raramente pensa no dono — você pensa em si mesmo com aquele carro. Ninguém te admira tanto quanto você imagina.",
    icon: "🚗",
    color: "#39FF14",
  },
  {
    num: "09",
    name: "Riqueza Invisível",
    short: "Riqueza é o que você não gasta",
    detail: "Riqueza são ativos financeiros que ainda não foram convertidos em coisas. É invisível por definição. O cara do carro de luxo pode estar quebrado.",
    icon: "👁️",
    color: "#D4AF37",
  },
  {
    num: "10",
    name: "Salve-se",
    short: "Poupança sem motivo específico",
    detail: "Você não precisa de um motivo para poupar. A poupança é uma proteção contra as surpresas inevitáveis da vida — e a vida sempre surpreende.",
    icon: "🛡️",
    color: "#39FF14",
  },
  {
    num: "11",
    name: "Racional vs. Sensato",
    short: "Ser sensato é melhor que ser racional",
    detail: "Uma estratégia financeira que te faz dormir bem à noite é melhor que uma estratégia matematicamente perfeita que te causa ansiedade constante.",
    icon: "⚖️",
    color: "#D4AF37",
  },
  {
    num: "12",
    name: "Surpresa!",
    short: "O mundo muda de formas inesperadas",
    detail: "Os maiores eventos econômicos da história foram os que ninguém previu. Planejar para o imprevisível é mais importante que prever o futuro.",
    icon: "⚡",
    color: "#39FF14",
  },
  {
    num: "13",
    name: "Margem de Erro",
    short: "Planejar para o imprevisível",
    detail: "O plano mais importante é planejar que o plano não vai funcionar. Mantenha sempre uma reserva — não porque você vai precisar, mas porque você vai precisar.",
    icon: "🔧",
    color: "#D4AF37",
  },
  {
    num: "14",
    name: "Você vai Mudar",
    short: "Seus objetivos de hoje não são os de amanhã",
    detail: "O maior erro financeiro é tomar decisões de longo prazo baseadas em quem você é hoje. Você vai mudar — e seus objetivos também.",
    icon: "🦋",
    color: "#39FF14",
  },
  {
    num: "15",
    name: "Nada é Grátis",
    short: "Todo retorno tem um custo emocional",
    detail: "O preço de entrada do mercado financeiro não é dinheiro — é volatilidade, medo e incerteza. Quem não consegue pagar esse preço não recebe o retorno.",
    icon: "💸",
    color: "#D4AF37",
  },
  {
    num: "16",
    name: "Cada um na Sua",
    short: "Não copie o jogo de outros investidores",
    detail: "Um trader de curto prazo e um investidor de longo prazo podem comprar a mesma ação por razões completamente diferentes. Copiar sem entender é perigoso.",
    icon: "🎯",
    color: "#39FF14",
  },
  {
    num: "17",
    name: "O Pessimismo Atrai",
    short: "Más notícias vendem mais que boas",
    detail: "O pessimismo parece inteligente. O otimismo parece ingênuo. Mas historicamente, o mundo melhorou — e os otimistas foram recompensados.",
    icon: "📰",
    color: "#D4AF37",
  },
  {
    num: "18",
    name: "Quando Você Acredita em Tudo",
    short: "Narrativas que nos enganam",
    detail: "Quanto mais você quer que algo seja verdade, mais você acredita em histórias que superestimam as chances de que seja. Cuidado com o que você quer acreditar.",
    icon: "🎭",
    color: "#39FF14",
  },
  {
    num: "19",
    name: "Tudo Junto",
    short: "A visão sistêmica das finanças",
    detail: "Finanças pessoais não são sobre planilhas — são sobre comportamento. Tudo está conectado: seus medos, sua história, sua identidade e seu dinheiro.",
    icon: "🔗",
    color: "#D4AF37",
  },
  {
    num: "20",
    name: "O Otimismo Histórico",
    short: "O longo prazo sempre venceu",
    detail: "Em 200 anos de história, apesar de guerras, crises e pandemias, o mundo ficou melhor. Apostar no progresso humano é a aposta mais racional de todas.",
    icon: "🌅",
    color: "#39FF14",
  },
];

function BiasCard({ bias, index }: { bias: typeof biases[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flip-card h-64 cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
        transition: `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`,
      }}
      onClick={() => setFlipped(!flipped)}
      title="Clique para virar"
    >
      <div
        className="flip-card-inner w-full h-full"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRENTE */}
        <div
          className="flip-card-front w-full h-full flex flex-col justify-between p-5 border"
          style={{
            background: `linear-gradient(145deg, #141414 0%, #0e0e0e 100%)`,
            borderColor: bias.color + "55",
          }}
        >
          {/* Top row */}
          <div className="flex items-start justify-between">
            <span
              className="font-mono-data text-4xl font-bold leading-none"
              style={{ color: bias.color + "33" }}
            >
              {bias.num}
            </span>
            <span className="text-3xl">{bias.icon}</span>
          </div>

          {/* Center */}
          <div>
            <h3 className="font-display text-2xl text-white leading-tight mb-2">
              {bias.name}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: bias.color + "aa" }}>
              {bias.short}
            </p>
          </div>

          {/* Bottom hint */}
          <div className="flex items-center gap-2">
            <div
              className="w-full h-px"
              style={{ background: `linear-gradient(90deg, ${bias.color}66, transparent)` }}
            />
            <span className="font-mono-data text-[9px] text-white/25 whitespace-nowrap tracking-wider">
              CLIQUE
            </span>
          </div>
        </div>

        {/* VERSO */}
        <div
          className="flip-card-back w-full h-full flex flex-col justify-between p-5 border"
          style={{
            background: `linear-gradient(145deg, ${bias.color}18 0%, #0a0a0a 100%)`,
            borderColor: bias.color,
            boxShadow: `0 0 20px ${bias.color}33`,
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: bias.color }}
            />
            <span
              className="font-mono-data text-[10px] tracking-widest uppercase"
              style={{ color: bias.color }}
            >
              Viés {bias.num}
            </span>
          </div>

          <p className="text-white/85 text-sm leading-relaxed italic flex-1 flex items-center">
            "{bias.detail}"
          </p>

          <div className="flex items-center gap-2">
            <span className="font-mono-data text-[9px] text-white/25 tracking-wider">
              CLIQUE PARA VOLTAR
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${bias.color}66)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ViesSection() {
  return (
    <section className="section-dark py-24 px-4 relative overflow-hidden">
      {/* Huge decorative background number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[50vw] text-[#D4AF37] leading-none opacity-[0.025]">
          20
        </span>
      </div>

      {/* Neon line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono-data text-xs text-[#D4AF37] tracking-[0.4em] uppercase">
            O que você vai descobrir
          </span>
          <h2 className="font-display text-[clamp(56px,10vw,120px)] text-gradient-gold mt-1 leading-none">
            20 VIESES
          </h2>
          <h3 className="font-display text-[clamp(28px,5vw,60px)] text-white leading-none -mt-2">
            FINANCEIROS
          </h3>
          <div className="divider-gold w-48 mx-auto mt-5" />
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Esses são os 20 padrões de comportamento que controlam as decisões financeiras das pessoas — incluindo as suas. Cada equipe vai estudar e apresentar alguns deles.
          </p>
          <p className="font-mono-data text-xs text-[#39FF14] mt-3 tracking-wider animate-pulse">
            ↓ Clique nas cartas para revelar o conceito
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {biases.map((bias, i) => (
            <BiasCard key={i} bias={bias} index={i} />
          ))}
        </div>

        {/* Bottom teaser */}
        <div className="text-center mt-14 reveal">
          <div className="inline-block border border-[#D4AF3333] bg-[#D4AF3308] px-8 py-5">
            <p className="font-display text-2xl text-white mb-1">
              Você reconhece algum desses vieses{" "}
              <span className="text-gradient-gold">na sua vida?</span>
            </p>
            <p className="text-white/40 text-xs font-mono-data tracking-wider">
              Morgan Housel · A Psicologia Financeira · Ed. Sextante, 2020
            </p>
          </div>
        </div>
      </div>

      {/* Neon line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </section>
  );
}
