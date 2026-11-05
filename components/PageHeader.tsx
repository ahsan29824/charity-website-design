import Image from "next/image";

type PageHeaderProps = {
  label: string;
  title: string;
  intro: string;
};

export default function PageHeader({ label, title, intro }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep text-white">
      <Image
        src="/logo-mark-light.png"
        alt=""
        width={523}
        height={483}
        sizes="300px"
        priority
        className="pointer-events-none absolute -right-10 -bottom-24 -z-10 h-[26rem] w-auto opacity-[0.07] md:right-16"
      />
      <div className="mx-auto max-w-6xl px-5 pt-36 pb-16 md:px-8 md:pt-44 md:pb-20">
        <p className="text-[15px] font-semibold text-gold">{label}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-[2.6rem] leading-[1.05] font-medium tracking-[-0.015em] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-[1.65] text-white/75">{intro}</p>
      </div>
    </section>
  );
}
