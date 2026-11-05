"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./ui";

const links = [
  { href: "/about", label: "About" },
  { href: "/#mission", label: "What we fund" },
  { href: "/#governance", label: "Governance" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent over the dark hero; a solid paper bar once the page scrolls or the menu opens
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-rule bg-paper/95 backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-8">
        <Logo light={!solid} className="h-14 md:h-16" />

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`text-[15px] underline-offset-[6px] transition-colors hover:underline aria-[current=page]:underline aria-[current=page]:decoration-gold aria-[current=page]:decoration-2 ${
                  solid ? "text-body hover:text-forest aria-[current=page]:text-forest" : "text-white/80 hover:text-white aria-[current=page]:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="hidden rounded-[3px] bg-gold px-5 py-2.5 text-[15px] font-semibold text-forest-deep transition-colors hover:bg-[#d39c1c] sm:inline-flex"
          >
            Donate
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`px-2 py-2 text-[15px] font-medium lg:hidden ${solid ? "text-forest" : "text-white"}`}
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-rule lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="block py-3 font-serif text-2xl text-forest aria-[current=page]:text-gold-deep"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-[3px] bg-gold px-5 py-3 font-semibold text-forest-deep"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
