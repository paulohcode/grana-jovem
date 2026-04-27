/* ============================================================
   FLOATING MONEY — Moedas e cifrões flutuando aleatoriamente
   ============================================================ */

const moneySymbols = ["💰", "$", "R$", "💵", "💴", "💶", "💷", "🪙", "₹", "€"];

export default function FloatingMoney() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 10 }).map((_, i) => {
        const symbol = moneySymbols[i % moneySymbols.length];
        const randomColor = i % 2 === 0 ? "#D4AF37" : "#39FF14";
        const randomOpacity = 0.3 + Math.random() * 0.4;

        return (
          <div
            key={i}
            className={`floating-money money-${i + 1}`}
            style={{
              color: randomColor,
              opacity: randomOpacity,
              textShadow: `0 0 10px ${randomColor}66`,
            }}
          >
            {symbol}
          </div>
        );
      })}
    </div>
  );
}
