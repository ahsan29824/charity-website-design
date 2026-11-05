"use client";

import { useEffect, useState } from "react";
import { glossary, readLanguage, type Code } from "@/lib/i18n";

// Shows our own wording for a short label when the glossary has it for the chosen
// language (and keeps Google from re-translating it); otherwise leaves it to Google
export default function T({ children }: { children: string }) {
  const [code, setCode] = useState<Code>("en");
  useEffect(() => setCode(readLanguage()), []);

  const own = glossary[code]?.[children];
  // Keyed by the text so a changed label (Menu → Close) gets a fresh node: Google Translate
  // swaps text nodes for its own, and React could otherwise no longer update them
  if (!own) return <span key={children}>{children}</span>;
  return (
    <span key={children} className="notranslate" translate="no" lang={code}>
      {own}
    </span>
  );
}
