import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Donation — The Sadique Foundation",
  description: "The terms that apply when you donate to The Sadique Foundation or use this website.",
};

const sections = [
  {
    id: "donations",
    title: "Your donation",
    points: [
      "Donations are voluntary gifts to The Sadique Foundation and are used for our charitable purpose: funding the education of gifted students and orphans.",
      "If you choose a particular fund, we will use your gift for that purpose. If that programme is already fully funded, we may use your gift where it is needed most within our charitable work.",
      "We do not accept donations that we believe come from illegal activity, or that conflict with our values. We may return any such gift.",
    ],
  },
  {
    id: "regular",
    title: "Monthly gifts",
    points: [
      "A monthly gift is taken on or around the same date each month until you ask us to stop.",
      "You can change or cancel a monthly gift at any time by emailing info@sadique.org. There is no minimum period.",
    ],
  },
  {
    id: "refunds",
    title: "Refunds",
    points: [
      "If you donate by mistake, or donate the wrong amount, contact us within 30 days and we will refund your gift in full.",
      "After 30 days your gift may already have been paid to a student’s institution, and we may not be able to refund it.",
    ],
  },
  {
    id: "gift-aid",
    title: "Gift Aid",
    points: [
      "If you make a Gift Aid declaration, you confirm that you are a UK taxpayer and that you understand you must pay enough Income Tax or Capital Gains Tax to cover the Gift Aid we claim.",
      "Please tell us if you stop paying enough tax, change your name or address, or want to cancel your declaration.",
    ],
  },
  {
    id: "website",
    title: "Using this website",
    points: [
      "The content of this website belongs to The Sadique Foundation. You may share it for non-commercial purposes with credit to us.",
      "We take care to keep this website accurate, but we cannot guarantee that every page is always complete or up to date.",
      "How we handle your personal information is explained in our Privacy & Safeguarding Policy.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    points: [
      "We may update these terms from time to time. The version on this page is the one that applies to your donation.",
      "Questions about these terms? Email info@sadique.org.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="Terms of Donation"
          title="Clear terms for every gift"
          intro="We want giving to the Foundation to be simple and safe. These terms explain how your donation is used, how monthly gifts work and when you can ask for a refund."
        />

        <section className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[14rem_1fr] lg:gap-20">
            <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[15px] font-semibold text-gold-deep">On this page</p>
              <ul className="mt-4 space-y-2.5 border-l border-rule pl-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-body hover:text-forest hover:underline">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="max-w-2xl space-y-14">
              {sections.map((s, i) => (
                <article key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="font-serif text-3xl text-forest">
                    <span className="mr-3 text-gold-deep">{i + 1}.</span>
                    {s.title}
                  </h2>
                  <ul className="mt-6 space-y-4">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-4 text-lg leading-[1.7] text-body">
                        <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
              <p className="border-t border-rule pt-6 text-[15px] text-body">Last updated: November 2026</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
