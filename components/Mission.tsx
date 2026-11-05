import Image from "next/image";
import Reveal from "./Reveal";
import ReadingChildArt from "./ReadingChildArt";

const pillars = [
  {
    title: "Academic Scholarships",
    tag: "Targeted Higher Education",
    body: "Direct sponsorship covering university tuition, books, exam fees, and essential living costs for high-achieving individuals.",
    image: "/images/scholarships.jpg",
    alt: "Graduates throwing their caps in the air",
  },
  {
    title: "Orphan Care & Sponsorship",
    tag: "Dignity & Security",
    body: "Tailored welfare and academic mentorship specifically designated for students who have lost parental care.",
    image: "/images/orphan-care.jpg",
    alt: "A group of smiling children",
  },
  {
    title: "Community Development",
    tag: "A Lasting Multiplier",
    body: "Scholars are empowered to graduate, pursue meaningful careers, and give back to lift their own local communities.",
    image: "/images/community.jpg",
    alt: "Children learning together in a classroom",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-serif text-4xl leading-[1.1] font-medium tracking-[-0.01em] text-forest md:text-5xl">
            Transforming Lives Through Education
          </h2>
          <p className="mt-6 text-lg leading-[1.65] text-body">
            Talent is universal, but opportunity is not. We remove the financial barriers that hold back
            extraordinary minds.
          </p>
          <ReadingChildArt className="mt-10 hidden w-full max-w-[16rem] lg:block" />
        </div>

        <div className="divide-y divide-rule border-t border-rule">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="grid gap-6 py-9 sm:grid-cols-[14rem_1fr] sm:gap-8 md:py-10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] bg-cream sm:aspect-[4/3.4]">
                  <Image src={p.image} alt={p.alt} fill sizes="(min-width: 640px) 224px, 100vw" className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-[1.65rem] leading-snug text-forest">{p.title}</h3>
                  <p className="mt-1 text-[15px] font-semibold text-gold-deep">{p.tag}</p>
                  <p className="mt-4 max-w-md leading-[1.7] text-body">{p.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
