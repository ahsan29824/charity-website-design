import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const timeline = [
  { year: "1953", text: "Mohammed Sadique is born" },
  { year: "A lifetime", text: "Of quiet, unannounced generosity" },
  { year: "2026", text: "His family establishes The Sadique Foundation" },
  { year: "Today", text: "Opening doors for students who need them most" },
];

export default function Legacy({ showStoryLink = true }: { showStoryLink?: boolean }) {
  return (
    <section id="legacy" className="relative scroll-mt-20 overflow-hidden bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Memorial arch with his portrait */}
          <Reveal className="mx-auto w-full max-w-[17rem] pr-4 sm:max-w-[22rem] lg:mx-0">
            <figure className="relative">
              <div
                aria-hidden
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-gold/70"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-forest-deep shadow-[0_24px_50px_-24px_rgba(14,51,32,0.55)]">
                <Image
                  src="/mohammed-sadique.jpg"
                  alt="Portrait of Mohammed Sadique"
                  fill
                  sizes="(min-width: 640px) 352px, 272px"
                  className="object-cover object-[58%_50%] grayscale contrast-[1.05]"
                  priority={false}
                />
                {/* Soft green wash so the photo sits in the site's palette, deepening behind the name */}
                <div aria-hidden className="absolute inset-0 bg-forest-deep/10 mix-blend-multiply" />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-7 text-center">
                  <div className="mx-auto h-px w-10 bg-gold/70" />
                  <p className="mt-4 font-serif text-[1.65rem] leading-tight text-white">Mohammed Sadique</p>
                  <p className="mt-1.5 text-[15px] tracking-[0.12em] text-gold">1953 – 2026</p>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[15px] font-semibold text-gold-deep">The Inspiration</p>
              <h2 className="mt-3 font-serif text-4xl leading-[1.08] font-medium tracking-[-0.01em] text-forest md:text-[3.25rem]">
                A Life Defined by Quiet Generosity
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 max-w-xl space-y-5 text-lg leading-[1.75] text-body">
                <p className="drop-cap">
                  Mohammed Sadique lived with an unwavering belief: that giving to others is the highest
                  responsibility one can hold.
                </p>
                <p>
                  Following his passing in 2026, The Sadique Foundation was established by his family to ensure his
                  spirit of quiet charity continues indefinitely.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <figure className="relative mt-10 max-w-xl rounded-[4px] bg-paper px-7 pt-10 pb-7 shadow-[0_1px_2px_rgba(14,51,32,0.06),0_14px_34px_-20px_rgba(14,51,32,0.35)] md:px-9">
                <span
                  aria-hidden
                  className="absolute -top-7 left-6 font-serif text-[5.5rem] leading-none text-gold select-none md:left-8"
                >
                  &ldquo;
                </span>
                <blockquote className="font-serif text-[1.45rem] leading-snug text-forest italic md:text-[1.7rem]">
                  We do not just remember his name; we carry forward his purpose by opening doors for students who
                  need them most.
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 text-[15px] text-body">
                  <span className="h-px w-8 bg-gold" />
                  The Sadique Foundation
                </figcaption>
              </figure>

              {showStoryLink && (
                <Link
                  href="/founder"
                  className="group mt-9 inline-flex items-center gap-2 text-[15px] font-semibold text-forest underline decoration-gold decoration-2 underline-offset-[7px] hover:decoration-forest"
                >
                  Discover Mohammed Sadique&rsquo;s Story
                  <span className="flip-rtl inline-block transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">&rarr;</span>
                </Link>
              )}
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <Reveal delay={100}>
          <ol className="mt-20 grid gap-8 border-t border-forest/15 pt-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-6">
            {timeline.map((t, i) => (
              <li key={t.year} className="relative">
                <span
                  aria-hidden
                  className={`absolute -top-[2.85rem] left-0 h-3 w-3 rounded-full border-2 border-cream ${
                    i === timeline.length - 1 ? "bg-gold" : "bg-forest"
                  } hidden lg:block`}
                />
                <p className="font-serif text-2xl text-forest">{t.year}</p>
                <p className="mt-1.5 max-w-[15rem] text-[15px] leading-snug text-body">{t.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
