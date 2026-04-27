/* ============================================================
   TICKER TAPE — Fita de cotações estilo bolsa de valores
   ============================================================ */

const tickers = [
  { symbol: "VIÉS FINANCEIRO", value: "+20 identificados", up: true },
  { symbol: "PSICOLOGIA", value: "100% aplicada", up: true },
  { symbol: "EQUIPES", value: "12 times", up: true },
  { symbol: "INÍCIO", value: "06/05/2026", up: true },
  { symbol: "MORGAN HOUSEL", value: "A Psicologia Financeira", up: true },
  { symbol: "DISCIPLINAS", value: "5 áreas do saber", up: true },
  { symbol: "ALUNOS", value: "68 participantes", up: true },
  { symbol: "EXPO FINAL", value: "Mentes que Geram Valor", up: true },
  { symbol: "FILME", value: "Fome de Poder", up: true },
  { symbol: "LIBERDADE FINANCEIRA", value: "O objetivo final", up: true },
];

export default function TickerTape() {
  const doubled = [...tickers, ...tickers];

  return (
    <div className="w-full bg-[#111111] border-y border-[#D4AF3733] py-2 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {doubled.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-6">
              <span className="font-mono-data text-xs text-[#D4AF37] font-bold tracking-wider">
                {t.symbol}
              </span>
              <span className="font-mono-data text-xs text-white/60">
                {t.value}
              </span>
              <span className={`font-mono-data text-xs ${t.up ? "text-[#39FF14]" : "text-red-400"}`}>
                {t.up ? "▲" : "▼"}
              </span>
              <span className="text-[#D4AF3733] mx-2">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
