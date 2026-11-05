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
              <div className="space-y-5 text-lg leading-[1.75] text-body">
                <p className="drop-cap">
                  Mohammed Sadique (1950 – 2026) believed that giving to others is the highest responsibility a person
                  can hold. He rarely spoke about it, but those close to him knew how many people he had quietly helped.
                </p>
                <p>
                  After his passing, his family wanted that spirit to outlive him. They chose education, because it is
                  the one gift that keeps giving: a student who graduates goes on to support a family, and often a whole
                  community.
                </p>
                <p>
                  Today the Foundation funds scholarships for gifted students, care and mentorship for orphans, and the
                  wider communities those graduates return to serve.
                </p>
                <Link
                  href="/founder"
                  className="group inline-flex items-center gap-2 pt-2 text-[15px] font-semibold text-forest underline decoration-gold decoration-2 underline-offset-[7px] hover:decoration-forest"
                >
                  Read about Mohammed Sadique
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
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
