import { Button } from "./ui";

export default function CallToAction() {
  return (
    <section id="support" className="scroll-mt-20 bg-gold">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
        <div>
          <h2 className="font-serif text-4xl leading-[1.08] font-medium tracking-[-0.01em] text-forest-deep md:text-[3.25rem]">
            Help Us Shape the Next Generation of Leaders
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-[1.6] text-forest-deep/80">
            Every contribution directly sponsors a student&rsquo;s education, turning raw talent into a lifetime of
            opportunity.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button href="/donate">Make a Contribution</Button>
          <Button href="/contact?topic=Partnership" variant="outline" className="border-forest-deep/50 text-forest-deep">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
