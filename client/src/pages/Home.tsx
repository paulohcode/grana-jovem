/* ============================================================
   HOME PAGE — Grana Jovem SESI
   Monta todas as seções em ordem com scroll reveal
   ============================================================ */
import { useEffect } from "react";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TickerTape from "@/components/TickerTape";
import SobreSection from "@/components/SobreSection";
import DesafioSection from "@/components/DesafioSection";
import AtividadesSection from "@/components/AtividadesSection";
import EquipesSection from "@/components/EquipesSection";
import FilmeSection from "@/components/FilmeSection";
import ExpoSection from "@/components/ExpoSection";
import CountdownSection from "@/components/CountdownSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ViesSection from "@/components/ViesSection";

export default function Home() {
  // Enable section navigation with arrow keys
  useSectionNavigation();

  // Initialize scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TickerTape />

      <div id="sobre">
        <SobreSection />
      </div>

      <div id="desafio">
        <DesafioSection />
      </div>

      <ViesSection />

      <TickerTape />

      <div id="atividades">
        <AtividadesSection />
      </div>

      <div id="equipes">
        <EquipesSection />
      </div>

      <div id="filme">
        <FilmeSection />
      </div>

      <TickerTape />

      <div id="expo">
        <ExpoSection />
      </div>

      <div id="countdown">
        <CountdownSection />
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}
