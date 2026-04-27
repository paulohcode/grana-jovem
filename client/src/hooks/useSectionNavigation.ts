import { useEffect } from "react";

const sections: (string | null)[] = [
  null, // hero (top)
  "#sobre",
  "#desafio",
  "#atividades",
  "#equipes",
  "#filme",
  "#expo",
  "#countdown",
];

export function useSectionNavigation() {
  useEffect(() => {
    let isNavigating = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if a modal is open
      const hasOpenModal = document.querySelector("[data-modal-open='true']");
      if (hasOpenModal) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (isNavigating) return;
        isNavigating = true;

        const scrollPos = window.scrollY;
        let nextSectionIndex = 0;

        // Find current section
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section === null) {
            if (scrollPos < 100) {
              nextSectionIndex = 1;
              break;
            }
          } else {
            const el = document.querySelector(section);
            if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
              nextSectionIndex = (i + 1) % sections.length;
              break;
            }
          }
        }

        const targetSection = sections[nextSectionIndex];
        if (targetSection === null) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.querySelector(targetSection);
          el?.scrollIntoView({ behavior: "smooth" });
        }

        setTimeout(() => {
          isNavigating = false;
        }, 800);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (isNavigating) return;
        isNavigating = true;

        const scrollPos = window.scrollY;
        let prevSectionIndex = sections.length - 1;

        // Find current section
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (section === null) {
            if (scrollPos < 100) {
              prevSectionIndex = sections.length - 1;
              break;
            }
          } else {
            const el = document.querySelector(section);
            if (el && el.getBoundingClientRect().top > window.innerHeight / 2) {
              prevSectionIndex = i - 1;
              if (prevSectionIndex < 0) prevSectionIndex = sections.length - 1;
              break;
            }
          }
        }

        const targetSection = sections[prevSectionIndex];
        if (targetSection === null) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.querySelector(targetSection);
          el?.scrollIntoView({ behavior: "smooth" });
        }

        setTimeout(() => {
          isNavigating = false;
        }, 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
}
