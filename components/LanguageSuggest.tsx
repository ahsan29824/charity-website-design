"use client";

import { useEffect, useState } from "react";
import { findLanguage, isRtl, readLanguage, ui, type Lang } from "@/lib/i18n";
import { Flag, switchLanguage } from "./LanguageSwitcher";

const DISMISSED = "sadique-language-suggest-dismissed";

// For an English-reading visit from a browser set to one of our other languages,
// a small card offers that language once; "No thanks" is remembered on this device
export default function LanguageSuggest() {
  const [lang, setLang] = useState<Lang | null>(null);

  useEffect(() => {
    if (readLanguage() !== "en") return;
    try {
      if (localStorage.getItem(DISMISSED)) return;
    } catch {}
    const match = (navigator.languages ?? [navigator.language])
      .map((l) => findLanguage(l.toLowerCase().split("-")[0]))
      .find((l) => l && l.code !== "en");
    // Only suggest when the browser prefers that language over English
    const prefersEnglishFirst = (navigator.languages?.[0] ?? "").toLowerCase().startsWith("en");
    if (match && !prefersEnglishFirst) {
      const t = window.setTimeout(() => setLang(match), 1500);
      return () => window.clearTimeout(t);
    }
  }, []);

  if (!lang) return null;
  const text = ui[lang.code];

  function dismiss() {
    try {
      localStorage.setItem(DISMISSED, "1");
    } catch {}
    setLang(null);
  }

  return (
    <div
      role="dialog"
      aria-label="Language suggestion"
      lang={lang.code}
      dir={isRtl(lang.code) ? "rtl" : "ltr"}
      translate="no"
      className="notranslate fixed bottom-5 left-5 z-40 flex max-w-[calc(100vw-7.5rem)] flex-wrap items-center gap-x-4 gap-y-3 rounded-[4px] border border-rule bg-paper px-4 py-3.5 shadow-[0_18px_40px_-16px_rgba(14,51,32,0.35)] md:bottom-8 md:left-8 md:max-w-sm"
    >
      <p className="flex items-center gap-2.5 text-[15px] text-ink">
        <Flag code={lang.flag} />
        {text.suggest}
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => switchLanguage(lang.code)}
          className="rounded-[3px] bg-forest px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-forest-deep"
        >
          {text.yes}
        </button>
        <button type="button" onClick={dismiss} className="px-2 py-2 text-[14px] text-body hover:text-forest">
          {text.no}
        </button>
      </div>
    </div>
  );
}
