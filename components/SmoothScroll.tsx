"use client";

import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    smoothScroll?: Lenis;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: -80 },
    });

    // Shared so other components (the back-to-top button) can scroll through Lenis
    window.smoothScroll = lenis;

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.smoothScroll = undefined;
    };
  }, []);

  return null;
}
