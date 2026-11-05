"use client";

import { useEffect, useState } from "react";

// Round button that appears once the visitor has scrolled down; the gold ring fills as they read
export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function toTop() {
    if (window.smoothScroll) window.smoothScroll.scrollTo(0);
    else {
      // Lenis is off for visitors who prefer reduced motion, so jump straight up for them
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    }
  }

  const r = 22;
  const length = 2 * Math.PI * r;

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`group fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-forest-deep text-white shadow-[0_10px_28px_-10px_rgba(14,51,32,0.7)] transition-all duration-300 hover:bg-forest md:right-8 md:bottom-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 56 56" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden>
        <circle cx="28" cy="28" r={r} fill="none" stroke="currentColor" strokeOpacity=".15" strokeWidth="2" />
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={length}
          strokeDashoffset={length * (1 - progress)}
        />
      </svg>
      <svg viewBox="0 0 24 24" className="relative h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden>
        <path d="M12 19V5M5.5 11.5L12 5l6.5 6.5" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
