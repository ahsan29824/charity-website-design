import Link from "next/link";
import { Logo } from "./ui";

const groups = [
  {
    title: "The Foundation",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/founder", label: "About the Founder" },
      { href: "/trustees", label: "Trustees & Team" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { href: "/donate", label: "Donate" },
      { href: "/apply", label: "Apply for a Grant" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Policies",
    links: [
      { href: "/privacy", label: "Privacy & Safeguarding" },
      { href: "/privacy#cookies", label: "Cookie Policy" },
      { href: "/terms", label: "Terms of Donation" },
    ],
  },
];

// Replace each "#" with the Foundation's profile link once the accounts are set up
const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2H8.2v3.2h2.6V21H14v-9.3h2.6l.4-3.2z" fill="currentColor" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
      </g>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <path
        d="M6.9 8.8H3.7V20h3.2zM5.3 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.3 13.6c0-3-1.6-5-4.3-5-1.4 0-2.4.7-2.9 1.5V8.8H10V20h3.2v-5.7c0-1.5.6-2.7 2-2.7s1.9 1.1 1.9 2.7V20h3.2z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <path
        d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3z"
        fill="currentColor"
      />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo light className="h-20" />
            <p className="mt-6 font-serif text-xl leading-snug text-white/85">
              Honouring his memory. Investing in potential. Inspiring brighter futures.
            </p>
            <ul className="mt-7 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold"
                  >
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden>
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 md:gap-x-14">
            {groups.map((g) => (
              <div key={g.title}>
                <p className="text-[14px] font-semibold text-gold">{g.title}</p>
                <ul className="mt-4 space-y-2.5 text-[15px]">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-white/70 hover:text-white hover:underline">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-white/50 md:flex-row md:justify-between">
          <p>The Sadique Foundation is a philanthropic organisation established in the United Kingdom.</p>
          <p>sadique.org</p>
        </div>
      </div>
    </footer>
  );
}
