import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

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
    <html lang="en-GB" className={`${hanken.variable} ${newsreader.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
