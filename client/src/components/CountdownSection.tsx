/* ============================================================
   COUNTDOWN — Contagem regressiva para o início da oficina
   ============================================================ */
import { useCountdown } from "@/hooks/useCountdown";

// Data de início: 06/05/2026
const TARGET_DATE = new Date("2026-05-06T08:00:00");

function CountdownBox({ value, label }: { value: number; label: string }) {
  const str = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="countdown-digit w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-none">
        <span className="font-display text-[clamp(36px,6vw,64px)] text-gradient-gold leading-none">
          {str}
        </span>
      </div>
      <span className="font-mono-data text-[10px] text-white/40 tracking-widest uppercase mt-2">
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);
  const isOver = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  return (
    <section className="section-dark py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="font-display text-[40vw] text-[#D4AF37] leading-none select-none">$</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="reveal mb-12">
          <span className="font-mono-data text-xs text-[#39FF14] tracking-[0.4em] uppercase">
            Prepare-se
          </span>
          <h2 className="font-display text-[clamp(48px,8vw,96px)] text-white mt-2 leading-none">
            COMEÇA EM
          </h2>
          <div className="divider-neon w-48 mx-auto mt-4" />
        </div>

        {/* Countdown */}
        <div className="reveal">
          {isOver ? (
            <div className="font-display text-4xl text-[#39FF14] neon-glow">
              A OFICINA JÁ COMEÇOU!
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <CountdownBox value={days} label="Dias" />
              <span className="font-display text-4xl text-[#D4AF37] mb-6 animate-pulse">:</span>
              <CountdownBox value={hours} label="Horas" />
              <span className="font-display text-4xl text-[#D4AF37] mb-6 animate-pulse">:</span>
              <CountdownBox value={minutes} label="Min" />
              <span className="font-display text-4xl text-[#D4AF37] mb-6 animate-pulse">:</span>
              <CountdownBox value={seconds} label="Seg" />
            </div>
          )}
        </div>

        {/* Date info */}
        <div className="reveal mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 px-6 py-3 border border-[#D4AF3344] bg-[#D4AF3308]">
            <span className="text-xl">📅</span>
            <div className="text-left">
              <div className="font-mono-data text-[10px] text-[#D4AF37] tracking-widest uppercase">
                Apresentação
              </div>
              <div className="font-display text-xl text-white">06 de Maio · 2026</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 border border-[#39FF1444] bg-[#39FF1408]">
            <span className="text-xl">🏫</span>
            <div className="text-left">
              <div className="font-mono-data text-[10px] text-[#39FF14] tracking-widest uppercase">
                Instituição
              </div>
              <div className="font-display text-xl text-white">Colégio Sesi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
