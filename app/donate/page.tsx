import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import DonateForm from "@/components/DonateForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Donate — The Sadique Foundation",
  description:
    "Sponsor a student's education. Every contribution directly funds tuition, books and living costs for gifted students and orphans.",
};

const uses = [
  {
    title: "Academic Scholarships",
    body: "University tuition, books, exam fees, and essential living costs for high-achieving individuals.",
  },
  {
    title: "Orphan Care & Sponsorship",
    body: "Tailored welfare and academic mentorship for students who have lost parental care.",
  },
  {
    title: "Community Development",
    body: "Graduates who go on to meaningful careers and lift their own local communities.",
  },
];

const promises = [
  { title: "Merit-driven vetting", body: "Support reaches only genuinely eligible, academically capable candidates." },
  { title: "Direct disbursement", body: "Funds are audited and paid straight to institutions and vetted programmes." },
  { title: "UK governance", body: "Managed to UK charity compliance standards with clear reporting." },
];

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="Donate"
          title="Help a gifted student reach their future"
          intro="Every contribution directly sponsors a student’s education, turning raw talent into a lifetime of opportunity — in memory of Mohammed Sadique."
        />

        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <Reveal className="lg:order-2">
              <div className="lg:sticky lg:top-28">
                <DonateForm />
              </div>
            </Reveal>

            <div className="lg:order-1">
              <Reveal>
                <p className="text-[15px] font-semibold text-gold-deep">Where your gift goes</p>
                <h2 className="mt-3 font-serif text-4xl leading-[1.1] font-medium tracking-[-0.01em] text-forest md:text-[2.75rem]">
                  Talent is universal. Opportunity is not.
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-[1.7] text-body">
                  We remove the financial barriers that hold back extraordinary minds. You choose where your support
                  goes, or let us direct it to where it&rsquo;s needed most.
                </p>
              </Reveal>

              <ol className="mt-10 space-y-4">
                {uses.map((u, i) => (
                  <Reveal as="li" key={u.title} delay={i * 80}>
                    <div className="flex gap-5 rounded-[4px] border border-rule bg-paper p-6">
                      <span className="font-serif text-3xl leading-none text-gold">{i + 1}</span>
                      <div>
                        <h3 className="font-serif text-xl text-forest">{u.title}</h3>
                        <p className="mt-1.5 leading-[1.65] text-body">{u.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>

              <Reveal>
                <div className="mt-10 flex items-center gap-6 rounded-[4px] bg-forest-deep p-7 text-white">
                  <span className="font-serif text-5xl text-gold md:text-6xl">100%</span>
                  <p className="leading-snug text-white/80">
                    Direct-to-education allocation model. Your gift is transferred to educational institutions and
                    vetted student programmes.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-paper py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="font-serif text-3xl text-forest md:text-4xl">Our promise to every donor</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {promises.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} className="border-t-2 border-gold pt-5">
                  <h3 className="text-lg font-semibold text-forest">{p.title}</h3>
                  <p className="mt-2 leading-[1.65] text-body">{p.body}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 flex flex-col gap-5 border-t border-rule pt-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-serif text-2xl text-forest">Giving as an organisation?</p>
                <p className="mt-1 text-body">Partner with us to sponsor several students or a whole programme.</p>
              </div>
              <Link
                href="/contact?topic=Partnership"
                className="inline-flex shrink-0 justify-center rounded-[3px] border border-forest/40 px-6 py-3.5 text-[15px] font-semibold text-forest transition-colors hover:border-forest hover:bg-forest/5"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
