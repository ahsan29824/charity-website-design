const stats = [
  { value: "100%", text: "Direct-to-Education Allocation Model" },
  { value: "Academic Grants", text: "Full Tuition & Living Support" },
  { value: "Target Focus", text: "Orphans & Gifted Students in Developing Nations" },
];

export default function ImpactBar() {
  return (
    <section id="impact" aria-label="Key impact" className="mx-auto scroll-mt-20 max-w-6xl px-5 pt-12 md:px-8 md:pt-16">
      <dl className="grid border-y border-rule sm:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.value}
            className={`py-7 sm:py-9 ${i > 0 ? "border-t border-rule sm:border-t-0 sm:border-l sm:pl-8" : ""} ${
              i < 2 ? "sm:pr-8" : ""
            }`}
          >
            <dt className="font-serif text-[1.75rem] leading-tight text-forest md:text-[2rem]">{s.value}</dt>
            <dd className="mt-2 text-[15px] leading-snug text-body">{s.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
