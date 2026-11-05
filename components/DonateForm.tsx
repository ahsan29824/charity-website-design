"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const amounts = [25, 50, 100, 250];
const funds = ["Where it's needed most", "Academic Scholarships", "Orphan Care & Sponsorship", "Community Development"];

export default function DonateForm() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");
  const [amount, setAmount] = useState<number | null>(50);
  const [custom, setCustom] = useState("");
  const [fund, setFund] = useState(funds[0]);
  const router = useRouter();

  const total = custom ? Number(custom) : amount ?? 0;
  const valid = total >= 1;
  const summary = `£${total.toLocaleString("en-GB")}${frequency === "monthly" ? " a month" : ""}`;

  // Online payments aren't connected yet, so the pledge is sent to the Foundation by email
  const pledgeMail = `mailto:info@sadique.org?subject=${encodeURIComponent(`Donation pledge — ${summary}`)}&body=${encodeURIComponent(
    `I would like to give ${summary} (${frequency === "monthly" ? "monthly" : "one-off"}) towards: ${fund}.\n\nPlease send me details of how to complete my donation.\n\nName:\nPhone (optional):`,
  )}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!valid) return;
        window.location.href = pledgeMail;
        setTimeout(() => router.push("/thank-you?for=pledge"), 400);
      }}
      className="rounded-[4px] bg-white p-6 shadow-[0_1px_2px_rgba(14,51,32,0.06),0_14px_34px_-20px_rgba(14,51,32,0.35)] sm:p-8 md:p-10"
    >
      {/* Frequency */}
      <div className="grid grid-cols-2 rounded-[4px] bg-cream p-1" role="radiogroup" aria-label="Donation frequency">
        {(["monthly", "once"] as const).map((f) => (
          <button
            type="button"
            key={f}
            role="radio"
            aria-checked={frequency === f}
            onClick={() => setFrequency(f)}
            className={`rounded-[3px] py-3 text-[15px] font-semibold transition-colors ${
              frequency === f ? "bg-forest text-white shadow-sm" : "text-body hover:text-forest"
            }`}
          >
            {f === "monthly" ? "Give monthly" : "Give once"}
          </button>
        ))}
      </div>

      {/* Amount */}
      <p className="mt-8 text-[15px] font-semibold text-forest">Choose an amount</p>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {amounts.map((a) => {
          const active = !custom && amount === a;
          return (
            <button
              type="button"
              key={a}
              onClick={() => {
                setAmount(a);
                setCustom("");
              }}
              aria-pressed={active}
              className={`rounded-[3px] border py-4 font-serif text-2xl transition-colors ${
                active ? "border-forest bg-forest/[0.04] text-forest ring-1 ring-forest" : "border-rule text-ink hover:border-forest/50"
              }`}
            >
              £{a}
            </button>
          );
        })}
      </div>

      <label className="mt-3 flex items-center rounded-[3px] border border-rule bg-white px-4 transition-colors focus-within:border-forest focus-within:ring-2 focus-within:ring-gold/40">
        <span className="font-serif text-2xl text-body">£</span>
        <input
          inputMode="numeric"
          placeholder="Other amount"
          value={custom}
          onChange={(e) => setCustom(e.target.value.replace(/[^\d]/g, "").slice(0, 6))}
          className="w-full bg-transparent px-2 py-4 text-[16px] outline-none placeholder:text-body/50"
          aria-label="Other amount in pounds"
        />
      </label>

      {/* Fund */}
      <label className="mt-8 block text-[15px] font-semibold text-forest">
        Direct my gift to
        <span className="relative mt-2 block">
          <select
            value={fund}
            onChange={(e) => setFund(e.target.value)}
            className="w-full appearance-none rounded-[3px] border border-rule bg-white py-3.5 pr-11 pl-4 text-[16px] font-normal text-ink outline-none focus:border-forest focus:ring-2 focus:ring-gold/40"
          >
            {funds.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-forest"
            aria-hidden
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </label>

      {/* Summary + submit */}
      <div className="mt-10 border-t border-rule pt-8">
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-body">Your gift</span>
          {/* Keyed so the text is replaced, not edited, which still works after Google Translate has rewritten it */}
          <span key={valid ? summary : "none"} className="font-serif text-3xl text-forest">
            {valid ? summary : "—"}
          </span>
        </div>
        <button
          type="submit"
          disabled={!valid}
          className="mt-6 w-full rounded-[3px] bg-gold py-4 text-[16px] font-semibold text-forest-deep transition-colors hover:bg-[#d39c1c] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span key={`${frequency}-${total}`}>
            {frequency === "monthly" ? "Give monthly" : "Donate"} {valid ? summary.replace(" a month", "") : ""}
          </span>
        </button>
        <p className="mt-4 flex items-start gap-2 text-[14px] leading-snug text-body">
          <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 018 0v4" />
          </svg>
          100% of your gift is allocated directly to education.
        </p>
      </div>
    </form>
  );
}
