import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "forest" | "gold" | "outline";
  className?: string;
};

const variants = {
  forest: "bg-forest text-white hover:bg-forest-deep",
  gold: "bg-gold text-forest-deep hover:bg-[#d39c1c]",
  outline: "border border-forest/40 text-forest hover:border-forest hover:bg-forest/5",
};

export function Button({ href, children, variant = "forest", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[3px] px-6 py-3.5 text-[15px] font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Logo({ light = false, className = "h-11" }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className="block shrink-0" aria-label="The Sadique Foundation home">
      <Image
        src={light ? "/logo-light.png" : "/logo.png"}
        alt="Sadique Foundation"
        width={1345}
        height={499}
        sizes="320px"
        priority
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
