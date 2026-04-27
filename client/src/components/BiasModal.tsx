/* ============================================================
   BIAS MODAL — Modal fullscreen para exibir vieses
   Navegação por setas esquerda/direita
   ============================================================ */
import { useEffect } from "react";

interface Bias {
  num: string;
  name: string;
  short: string;
  detail: string;
  icon: string;
  color: string;
}

interface BiasModalProps {
  isOpen: boolean;
  onClose: () => void;
  biases: Bias[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function BiasModal({
  isOpen,
  onClose,
  biases,
  currentIndex,
  onPrevious,
  onNext,
}: BiasModalProps) {
  const bias = biases[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    // Prevent body scroll
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onPrevious, onNext, onClose]);

  if (!isOpen || !bias) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
      data-modal-open="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-6xl">{bias.icon}</span>
            <div>
              <div
                className="font-mono-data text-sm tracking-widest uppercase"
                style={{ color: bias.color }}
              >
                Viés {bias.num}
              </div>
              <h2 className="font-display text-5xl text-white leading-tight">
                {bias.name}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors text-3xl leading-none"
            title="Fechar (ESC)"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto mb-6">
          <div className="space-y-6">
            <div className="p-6 border border-[#2A2A2A] bg-[#111111]">
              <div className="font-mono-data text-xs text-white/40 tracking-widest uppercase mb-2">
                Resumo
              </div>
              <p
                className="text-xl leading-relaxed"
                style={{ color: bias.color }}
              >
                {bias.short}
              </p>
            </div>

            <div className="p-6 border" style={{ borderColor: bias.color + "44" }}>
              <div
                className="font-mono-data text-xs tracking-widest uppercase mb-3"
                style={{ color: bias.color }}
              >
                Explicação Completa
              </div>
              <p className="text-lg leading-relaxed text-white/85 italic">
                "{bias.detail}"
              </p>
            </div>
          </div>
        </div>

        {/* Footer with navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-[#2A2A2A]">
          <button
            onClick={onPrevious}
            className="flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] hover:border-[#D4AF37] text-white/60 hover:text-[#D4AF37] transition-all duration-300"
            title="Anterior (← Seta Esquerda)"
          >
            <span className="text-xl">←</span>
            <span className="font-mono-data text-xs tracking-wider uppercase">
              Anterior
            </span>
          </button>

          <div className="text-center">
            <div className="font-mono-data text-xs text-white/40 tracking-widest uppercase mb-1">
              Navegação
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl text-[#D4AF37]">
                {currentIndex + 1}
              </span>
              <span className="text-white/30">/</span>
              <span className="font-display text-2xl text-white/50">
                {biases.length}
              </span>
            </div>
          </div>

          <button
            onClick={onNext}
            className="flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] hover:border-[#39FF14] text-white/60 hover:text-[#39FF14] transition-all duration-300"
            title="Próximo (→ Seta Direita)"
          >
            <span className="font-mono-data text-xs tracking-wider uppercase">
              Próximo
            </span>
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Keyboard hints */}
        <div className="mt-4 text-center text-white/20 font-mono-data text-xs tracking-wider">
          Use ← → para navegar | ESC para fechar
        </div>
      </div>
    </div>
  );
}
