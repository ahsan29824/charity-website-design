"use client";

import { useEffect } from "react";
import { codes, isRtl, readLanguage } from "@/lib/i18n";

declare global {
  interface Window {
    google?: { translate: { TranslateElement: new (opts: object, id: string) => unknown } };
    googleTranslateInit?: () => void;
  }
}

// Google Translate rewrites text nodes behind React's back; without this, React can crash
// when it later removes or moves one of those nodes
function guardReactAgainstTranslation() {
  const proto = Node.prototype as Node & { __guarded?: boolean };
  if (proto.__guarded) return;
  proto.__guarded = true;
  const removeChild = proto.removeChild;
  proto.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };
  const insertBefore = proto.insertBefore;
  proto.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return node;
    return insertBefore.call(this, node, ref) as T;
  };
}

// Loads Google Translate only for visitors who picked another language, and reveals the
// page (hidden by the early <head> script) once the translated text is in place
export default function Translator() {
  useEffect(() => {
    const code = readLanguage();
    const html = document.documentElement;
    if (code === "en") {
      html.classList.remove("gt-pending");
      return;
    }

    const reveal = () => {
      html.dir = isRtl(code) ? "rtl" : "ltr";
      html.lang = code;
      // A moment for the first screen of text to be swapped in before it shows
      window.setTimeout(() => html.classList.remove("gt-pending"), 250);
    };
    // Google marks <html> as soon as it starts, but the text arrives a moment later, wrapped
    // in <font> tags; wait for both so the first thing visitors see is already translated
    const observer = new MutationObserver(() => {
      if (/\btranslated-(rtl|ltr)\b/.test(html.className) && document.querySelector("main font, header font")) {
        observer.disconnect();
        reveal();
      }
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"], childList: true, subtree: true });
    // If Google is slow or blocked, show the page anyway rather than leave it blank;
    // the observer keeps watching and still flips the layout when the text arrives
    const fallback = window.setTimeout(() => html.classList.remove("gt-pending"), 8000);
    // Stop watching the whole page if Google never answers, so it costs nothing afterwards
    const giveUp = window.setTimeout(() => observer.disconnect(), 30000);

    if (!document.getElementById("google-translate-script")) {
      guardReactAgainstTranslation();
      window.googleTranslateInit = () => {
        new window.google!.translate.TranslateElement(
          { pageLanguage: "en", includedLanguages: codes.join(","), autoDisplay: false },
          "google_translate_element",
        );
      };
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
      script.async = true;
      script.onerror = () => html.classList.remove("gt-pending");
      document.body.appendChild(script);
    }

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      window.clearTimeout(giveUp);
    };
  }, []);

  // Google mounts its own (hidden) widget here
  return <div id="google_translate_element" hidden />;
}
