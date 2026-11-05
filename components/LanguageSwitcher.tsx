"use client";

import { useEffect, useRef, useState } from "react";
import { findLanguage, isRtl, languages, readLanguage, ui, writeLanguage, type Code } from "@/lib/i18n";

// Flags live in public/flags (MIT-licensed flag-icons set), one for the country most associated with each language
export function Flag({ code }: { code: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/flags/${code}.svg`}
      alt=""
      width={20}
      height={15}
      className="h-[15px] w-5 shrink-0 rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(14,51,32,0.15)]"
    />
  );
}

export function switchLanguage(code: Code) {
  writeLanguage(code);
  window.location.reload();
}

export default function LanguageSwitcher({ light = false, up = false }: { light?: boolean; up?: boolean }) {
  const [current, setCurrent] = useState<Code>("en");
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => setCurrent(readLanguage()), []);

  // On open, move focus to the current language so the arrow keys work straight away
  useEffect(() => {
    if (!open) return;
    items.current[languages.findIndex((l) => l.code === current)]?.focus();
    const onPointer = (e: PointerEvent) => {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open, current]);

  function close(returnFocus = true) {
    setOpen(false);
    if (returnFocus) trigger.current?.focus();
  }

  function onMenuKey(e: React.KeyboardEvent) {
    const list = items.current.filter(Boolean) as HTMLButtonElement[];
    const at = list.indexOf(document.activeElement as HTMLButtonElement);
    const go = (i: number) => list[(i + list.length) % list.length]?.focus();
    if (e.key === "ArrowDown") go(at + 1);
    else if (e.key === "ArrowUp") go(at - 1);
    else if (e.key === "Home") go(0);
    else if (e.key === "End") go(list.length - 1);
    else if (e.key === "Escape") close();
    else if (e.key === "Tab") return setOpen(false);
    else return;
    e.preventDefault();
  }

  function choose(code: Code) {
    close(false);
    if (code !== current) switchLanguage(code);
  }

  const active = findLanguage(current)!;

  return (
    <div ref={box} className="notranslate relative" translate="no">
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        aria-expanded={open}
        aria-label={`Language: ${active.name}. Change language`}
        className={`inline-flex items-center gap-1.5 rounded-[3px] px-2 py-2 text-[14px] font-semibold tracking-wide transition-colors ${
          light ? "text-white/85 hover:text-white" : "text-forest hover:text-forest-deep"
        }`}
      >
        <Flag code={active.flag} />
        {active.short}
        <svg
          viewBox="0 0 12 12"
          className={`h-2.5 w-2.5 transition-transform ${open !== up ? "rotate-180" : ""}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4z" />
        </svg>
      </button>

      {open && (
        <div
          onKeyDown={onMenuKey}
          className={`absolute end-0 z-50 w-56 overflow-hidden rounded-[4px] border border-rule bg-paper shadow-[0_18px_40px_-16px_rgba(14,51,32,0.35)] ${
            up ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <ul aria-label="Choose a language" className="max-h-[min(70vh,440px)] overflow-y-auto py-2">
            {languages.map((l, i) => (
              <li key={l.code}>
                <button
                  ref={(el) => {
                    items.current[i] = el;
                  }}
                  type="button"
                  onClick={() => choose(l.code)}
                  aria-current={l.code === current ? "true" : undefined}
                  className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-start text-[15px] text-ink outline-none transition-colors hover:bg-cream focus-visible:bg-cream aria-[current=true]:font-semibold"
                >
                  <span className="flex items-center gap-3">
                    <Flag code={l.flag} />
                    <span lang={l.code} dir={isRtl(l.code) ? "rtl" : "ltr"}>
                      {l.name}
                    </span>
                  </span>
                  {l.code === current ? (
                    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 8.5l3.2 3L13 4.5" />
                    </svg>
                  ) : (
                    <span className="text-[11px] font-semibold tracking-wider text-body/60">{l.short}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <p
            lang={current}
            dir={isRtl(current) ? "rtl" : "ltr"}
            className="border-t border-rule px-4 py-2.5 text-[11px] leading-snug text-body/70"
          >
            {ui[current].note}
          </p>
        </div>
      )}
    </div>
  );
}
