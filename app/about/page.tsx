import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ReadingChildArt from "@/components/ReadingChildArt";

export const metadata: Metadata = {
  title: "About Us — The Sadique Foundation",
  description:
    "Why The Sadique Foundation was founded, what we set out to do, and the values that guide every grant we make.",
};

const values = [
  {
    title: "Generosity without fanfare",
    body: "Mohammed Sadique gave quietly. We try to do the same: the student’s future is the story, not the donor or the Foundation.",
  },
  {
    title: "Merit and need, together",
    body: "We look for students with real ability who are held back only by circumstance, and we assess every application on its merits.",
  },
  {
    title: "Dignity first",
    body: "Many of the young people we support have lost a parent. We protect their privacy and never ask them to trade their story for help.",
  },
  {
    title: "Accountable to every donor",
    body: "Funds go directly to institutions and vetted programmes, and we report openly on where every pound has gone.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="About Us"
          title="A family’s promise, kept in his name"
          intro="The Sadique Foundation was established in 2026 by the family of Mohammed Sadique, so that his lifelong habit of quiet generosity would keep opening doors for young people."
        />

        {/* Story */}
        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="text-[15px] font-semibold text-gold-deep">Our story</p>
              <h2 className="mt-3 font-serif text-4xl leading-[1.1] font-medium tracking-[-0.01em] text-forest md:text-[2.75rem]">
                Why we exist
              </h2>
              <ReadingChildArt className="mt-10 w-full max-w-[24rem]" />
            </Reveal>
            <Reveal delay={100}>
              <div className="text-lg leading-[1.75] text-body">
                <div className="flex items-center gap-4 text-[13px] font-semibold tracking-[0.14em] text-gold-deep uppercase">
                  <span className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-gold ring-offset-2 ring-offset-paper">
                    <Image
                      src="/mohammed-sadique.jpg"
                      alt="Mohammed Sadique"
                      width={168}
                      height={168}
                      className="h-full w-full origin-[62%_42%] scale-[1.3] object-cover object-[62%_42%] grayscale"
                    />
                  </span>
                  Mohammed Sadique · 1953 – 2026
                </div>
                <p className="mt-5 font-serif text-[1.6rem] leading-[1.35] text-forest md:text-[1.85rem]">
                  He believed that giving to others is the highest responsibility a person can hold.
                </p>
                <p className="mt-5">
                  He rarely spoke about it, but those close to him knew how many people he had quietly helped. After his
                  passing, his family wanted that spirit to outlive him.
                </p>

                <blockquote className="mt-8 border-s-[3px] border-gold bg-cream/70 py-5 ps-6 pe-5 rounded-e-[4px]">
                  <p className="font-serif text-[1.3rem] leading-snug text-forest">
                    They chose education, because it is the one gift that keeps giving.
                  </p>
                  <p className="mt-2 text-base leading-[1.7]">
                    A student who graduates goes on to support a family, and often a whole community.
                  </p>
                </blockquote>

                <p className="mt-8 text-[15px] font-semibold text-forest">Today the Foundation funds</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { n: "01", t: "Scholarships for gifted students" },
                    { n: "02", t: "Care and mentorship for orphans" },
                    { n: "03", t: "Communities graduates serve" },
                  ].map((f) => (
                    <li
                      key={f.n}
                      className="rounded-[4px] border border-rule bg-paper px-4 py-4 shadow-[0_1px_2px_rgba(14,51,32,0.05)] transition-colors hover:border-gold/70"
                    >
                      <span className="font-serif text-xl leading-none text-gold-deep">{f.n}</span>
                      <p className="mt-2 text-[15px] leading-snug text-ink">{f.t}</p>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/founder"
                  className="group mt-9 inline-flex items-center gap-3 rounded-[3px] bg-forest px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-forest-deep"
                >
                  Read about Mohammed Sadique
                  <span className="flip-rtl inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold text-forest-deep transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Mission & vision */}
        <section className="bg-forest-deep py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-[4px] bg-white/10 px-0 md:grid-cols-2 md:px-0">
            <Reveal className="bg-forest-deep px-5 py-10 md:px-12 md:py-14">
              <p className="text-[15px] font-semibold text-gold">Our mission</p>
              <p className="mt-4 font-serif text-[1.75rem] leading-snug md:text-[2rem]">
                To remove the financial barriers that stop gifted students and orphans from completing their education.
              </p>
            </Reveal>
            <Reveal delay={100} className="bg-forest-deep px-5 py-10 md:px-12 md:py-14">
              <p className="text-[15px] font-semibold text-gold">Our vision</p>
              <p className="mt-4 font-serif text-[1.75rem] leading-snug md:text-[2rem]">
                A world where talent, not circumstance, decides how far a young person can go.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="flex items-end justify-between gap-8">
              <h2 className="max-w-xl font-serif text-4xl leading-[1.1] font-medium tracking-[-0.01em] text-forest md:text-[2.75rem]">
                The values behind every grant
              </h2>
              <Image
                src="/logo-mark.png"
                alt=""
                width={523}
                height={483}
                sizes="60px"
                className="hidden h-20 w-auto opacity-80 md:block"
              />
            </div>
            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={(i % 2) * 80} className="flex gap-5 border-t border-forest/15 pt-6">
                  <span className="font-serif text-2xl leading-none text-gold-deep">0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-forest">{v.title}</h3>
                    <p className="mt-2 leading-[1.7] text-body">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 flex flex-col gap-4 border-t border-forest/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-serif text-2xl text-forest">Meet the people who oversee our work.</p>
              <Link
                href="/trustees"
                className="inline-flex shrink-0 justify-center rounded-[3px] border border-forest/40 px-6 py-3.5 text-[15px] font-semibold text-forest transition-colors hover:border-forest hover:bg-forest/5"
              >
                Our Trustees
              </Link>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
