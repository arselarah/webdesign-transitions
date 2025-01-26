// lib/smooth-scroll.ts
import Lenis from "@studio-freight/lenis";

export function setupSmoothScroll() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
