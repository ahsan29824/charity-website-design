import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Page not found — The Sadique Foundation",
};

const suggestions = [
  { href: "/about", label: "About the Foundation" },
  { href: "/donate", label: "Make a donation" },
  { href: "/apply", label: "Apply for a grant" },
  { href: "/contact", label: "Contact us" },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-hidden bg-forest-deep text-white">
        <Image
          src="/logo-mark-light.png"
          alt=""
          width={523}
          height={483}
          sizes="400px"
          className="pointer-events-none absolute -right-16 -bottom-24 -z-10 h-[34rem] w-auto opacity-[0.07] md:right-12"
        />
        <div className="mx-auto flex min-h-[80svh] max-w-6xl flex-col justify-center px-5 pt-36 pb-20 md:px-8 md:pt-44">
          <p className="font-serif text-[6rem] leading-none text-gold md:text-[9rem]">404</p>
          <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] font-medium tracking-[-0.01em] md:text-6xl">
            This page could not be found
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-[1.65] text-white/75">
            The link may be old, or the address may have a small mistake in it. These pages might help instead.
          </p>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {suggestions.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-[15px] font-semibold text-white underline decoration-gold decoration-2 underline-offset-[7px] hover:text-gold">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Button href="/" variant="gold">
              Back to the home page
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
