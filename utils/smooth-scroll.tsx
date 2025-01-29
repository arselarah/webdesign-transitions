// lib/smooth-scroll.ts
import Lenis from "@studio-freight/lenis";

let lenis: Lenis | null = null;

export function setupSmoothScroll() {
  if (!lenis) {
    lenis = new Lenis();

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}

export function destroySmoothScroll() {
  if (lenis) {
    lenis.destroy(); // 🔴 Detenemos Lenis completamente
    lenis = null; // 🔄 Eliminamos la instancia para que no se duplique
  }
}
