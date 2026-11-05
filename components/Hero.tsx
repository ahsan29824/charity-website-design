import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-forest-deep text-white">
      {/* Full-bleed photo, graded towards the brand green so the copy on the left stays readable */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-students.jpg"
          alt="Smiling schoolchildren in uniform waving at the camera"
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover object-[60%_30%]"
        />
        <div className="absolute inset-0 bg-[#082414]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/85 to-forest-deep/10 lg:via-forest-deep/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/10 to-forest-deep/70" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 items-center px-5 pt-28 pb-14 md:px-8 md:pt-32 md:pb-16">
        <div className="max-w-2xl">
          <p className="hero-in flex items-center gap-4 text-[13px] font-semibold tracking-[0.18em] text-white/85 uppercase">
            <span className="h-px w-10 bg-gold" />
            A UK-based philanthropic charity
          </p>

          <h1
            className="hero-in mt-7 font-serif text-[2.75rem] leading-[1.04] font-medium tracking-[-0.015em] sm:text-6xl lg:text-[4.5rem]"
            style={{ "--hero-delay": "120ms" } as React.CSSProperties}
          >
            Honouring a Legacy.
            <span className="mt-1 block text-gold italic">Empowering Future Generations.</span>
          </h1>

          <p
            className="hero-in mt-7 max-w-xl text-lg leading-[1.65] text-white/80"
            style={{ "--hero-delay": "240ms" } as React.CSSProperties}
          >
            Inspired by the lifelong generosity of{" "}
            <span className="font-semibold text-white">Mohammed Sadique (1950–2026)</span>, we provide educational
            pathways and financial grants to academically gifted students and orphans across developing nations.
          </p>

          <div
            className="hero-in mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
            style={{ "--hero-delay": "360ms" } as React.CSSProperties}
          >
            <Button href="/donate" variant="gold" className="px-7 py-4 shadow-[0_10px_30px_-10px_rgba(228,172,42,0.6)]">
              Support a Student
            </Button>
            <Link href="#legacy" className="group inline-flex items-center gap-3 text-[15px] font-semibold text-white">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-white/35 bg-white/5 backdrop-blur-sm transition-colors group-hover:border-gold group-hover:text-gold">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="underline decoration-white/40 underline-offset-[7px] transition-colors group-hover:text-gold group-hover:decoration-gold">
                Read the Legacy
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom rail: memorial note on the left, the 100% promise on the right */}
      <div className="hero-in border-t border-white/15" style={{ "--hero-delay": "520ms" } as React.CSSProperties}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5 md:px-8">
          <div className="flex items-center gap-4">
            <Image src="/logo-mark-light.png" alt="" width={523} height={483} sizes="48px" className="h-10 w-auto" />
            <p className="text-[14px] leading-snug text-white/70">
              In loving memory of
              <span className="block font-serif text-lg text-white">Mohammed Sadique</span>
            </p>
          </div>
          <ul className="hidden items-center gap-3 text-[14px] text-white/70 lg:flex">
            {["Scholarships", "Orphan Care", "Community Development"].map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-gold" />}
                {t}
              </li>
            ))}
          </ul>
          <a
            href="#impact"
            aria-label="Scroll to our impact"
            className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-gold hover:text-gold md:grid"
          >
            <svg viewBox="0 0 24 24" className="hero-bob h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
