import Reveal from "./Reveal";

const points = [
  {
    title: "Merit-Driven Vetting",
    body: "Rigorous assessment ensures support reaches only genuinely eligible and academically capable candidates.",
  },
  {
    title: "Direct Disbursement",
    body: "Funds are audited and transferred directly to educational institutions and vetted student programs.",
  },
  {
    title: "UK Governance Standards",
    body: "Managed in strict adherence to charity compliance, financial integrity, and clear reporting.",
  },
];

export default function Governance() {
  return (
    <section id="governance" className="scroll-mt-20 bg-forest py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="max-w-2xl font-serif text-4xl leading-[1.1] font-medium tracking-[-0.01em] md:text-5xl">
          Built on Complete Trust and Accountability
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="border-t border-gold pt-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 leading-[1.7] text-white/70">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
