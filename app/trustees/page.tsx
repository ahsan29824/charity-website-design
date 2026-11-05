import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Trustees & Team — The Sadique Foundation",
  description: "The trustees responsible for The Sadique Foundation’s governance, finances and safeguarding.",
};

// Replace each name and bio with the real trustee, and add `photo: "/trustees/name.jpg"` once portraits are ready
const trustees: { name: string; role: string; bio: string; photo?: string }[] = [
  {
    name: "Trustee name",
    role: "Chair of Trustees",
    bio: "Leads the board and makes sure the Foundation stays true to Mohammed Sadique’s purpose.",
  },
  {
    name: "Trustee name",
    role: "Treasurer",
    bio: "Oversees the Foundation’s finances, the annual accounts and the direct disbursement of every grant.",
  },
  {
    name: "Trustee name",
    role: "Safeguarding Lead",
    bio: "Responsible for the safety and wellbeing of every student we support, and for handling any concern raised.",
  },
  {
    name: "Trustee name",
    role: "Trustee, Education",
    bio: "Guides how scholarship applications are assessed and how we work with schools and universities.",
  },
];

const duties = [
  "Meet regularly to approve grants and review spending",
  "Sign off the annual report and accounts",
  "Hold the Foundation to its safeguarding and data-protection policies",
  "Act only in the Foundation’s interests and declare any conflict of interest",
];

export default function TrusteesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="Trustees & Team"
          title="The people accountable for every pound"
          intro="Our trustees are legally responsible for how the Foundation is run. They give their time freely, and they answer to our donors and the students we serve."
        />

        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustees.map((t, i) => (
                <Reveal as="li" key={t.role} delay={i * 80}>
                  <article className="flex h-full flex-col overflow-hidden rounded-[4px] bg-white shadow-[0_1px_2px_rgba(14,51,32,0.06),0_14px_34px_-20px_rgba(14,51,32,0.35)]">
                    <div className="relative flex aspect-[4/4.2] items-center justify-center bg-forest-deep">
                      {t.photo ? (
                        <Image src={t.photo} alt={t.name} fill sizes="(min-width: 1024px) 270px, 50vw" className="object-cover" />
                      ) : (
                        <Image
                          src="/logo-mark-light.png"
                          alt=""
                          width={523}
                          height={483}
                          sizes="80px"
                          className="h-24 w-auto opacity-40"
                        />
                      )}
                    </div>
                    <div className="flex-1 border-t-2 border-gold p-6">
                      <p className="text-[14px] font-semibold text-gold-deep">{t.role}</p>
                      <h2 className="mt-1 font-serif text-2xl text-forest">{t.name}</h2>
                      <p className="mt-3 text-[15px] leading-[1.65] text-body">{t.bio}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal>
              <h2 className="font-serif text-4xl leading-[1.1] font-medium tracking-[-0.01em] text-forest md:text-[2.75rem]">
                What our trustees do
              </h2>
              <p className="mt-5 max-w-md text-lg leading-[1.7] text-body">
                The board sets direction and keeps the Foundation accountable. Day-to-day decisions on grants are always
                checked against our published criteria.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="divide-y divide-forest/15 border-y border-forest/15">
                {duties.map((d) => (
                  <li key={d} className="flex gap-4 py-5 text-lg leading-snug text-forest">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-body">
                Want to read our policies?{" "}
                <Link href="/privacy" className="font-semibold text-forest underline decoration-gold underline-offset-4">
                  Privacy &amp; Safeguarding
                </Link>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
