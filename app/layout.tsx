import type { Metadata } from "next";
import {
  Hanken_Grotesk,
  Newsreader,
  Noto_Nastaliq_Urdu,
  Noto_Naskh_Arabic,
  Noto_Sans_Bengali,
  Noto_Sans_Devanagari,
} from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import BackToTop from "@/components/BackToTop";
import Translator from "@/components/Translator";
import LanguageSuggest from "@/components/LanguageSuggest";
import { earlyScript } from "@/lib/i18n";
import "./globals.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

// Fonts for translated pages. Not preloaded: the browser only downloads one when a page
// actually shows text in that script
const nastaliq = Noto_Nastaliq_Urdu({ subsets: ["arabic"], variable: "--font-nastaliq", preload: false });
const naskh = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-naskh", preload: false });
const devanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-devanagari", preload: false });
const bengali = Noto_Sans_Bengali({ subsets: ["bengali"], variable: "--font-bengali", preload: false });
const scriptFonts = [nastaliq, naskh, devanagari, bengali].map((f) => f.variable).join(" ");

export const metadata: Metadata = {
  metadataBase: new URL("https://sadique.org"),
  title: "The Sadique Foundation — Honouring a Legacy. Empowering Future Generations.",
  description:
    "A UK-based philanthropic charity providing educational pathways and financial grants to academically gifted students and orphans across developing nations.",
  openGraph: {
    title: "The Sadique Foundation",
    description:
      "Honouring the legacy of Mohammed Sadique (1950–2026) through scholarships for gifted students and orphans.",
    url: "https://sadique.org",
    siteName: "The Sadique Foundation",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The early script may set lang and a class before React loads, hence suppressHydrationWarning
    <html lang="en-GB" className={`${hanken.variable} ${newsreader.variable} ${scriptFonts}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyScript }} />
      </head>
      <body>
        <SmoothScroll />
        {children}
        <BackToTop />
        <LanguageSuggest />
        <Translator />
      </body>
    </html>
  );
}
