import { useId } from "react";

// A child reading, cut out of a green-toned photo of schoolchildren, with letters and numbers rising from the book
export default function ReadingChildArt({
  src = "/images/children-duotone.jpg",
  className = "",
}: {
  src?: string;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const forest = "#174e2f";
  const gold = "#e4ac2a";

  return (
    <svg viewBox="0 0 440 480" className={className} role="img" aria-label="Illustration of a child reading a book, filled with photos of smiling schoolchildren">
      <defs>
        <mask id={`m${id}`}>
          {/* Built from thick rounded strokes so the figure stays soft and organic */}
          <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
            {/* Neck and back, curving down to the seat */}
            <path d="M168 136C126 180 108 250 112 320C114 362 120 392 128 414" strokeWidth="92" />
            {/* Thigh rising to the knee, shin down to the foot */}
            <path d="M124 418C192 410 250 356 290 296" strokeWidth="76" />
            <path d="M290 296C310 348 324 394 334 428" strokeWidth="56" />
            {/* Arm reaching round the knees to hold the book */}
            <path d="M172 190C186 256 230 284 284 258" strokeWidth="36" />
          </g>
          {/* Body filled in between the back, arm and knees */}
          <path fill="white" d="M150 170L284 258L292 296L130 420Z" />
          {/* Dress falling from the knee, so there is no gap beneath it */}
          <path fill="white" d="M180 440L292 296L328 440Z" />
          {/* Bowed head with a small bun of hair */}
          <circle cx="178" cy="96" r="54" fill="white" />
          <circle cx="128" cy="66" r="24" fill="white" />
          {/* Long dress sweeping out along the ground */}
          <path fill="white" d="M84 400C96 452 150 470 236 468C300 467 360 462 404 452C384 432 356 420 324 414C270 430 190 442 84 400Z" />
          {/* Open book, its pages fanned up towards the reader */}
          <path fill="white" d="M292 262L236 212C232 204 238 196 248 198L306 232Z" />
          <path fill="white" d="M292 262L334 196C340 188 350 190 352 200L318 258Z" />
          <path fill="white" d="M300 250L318 186C322 178 332 178 334 188L322 252Z" />
        </mask>
      </defs>

      {/* Soft halo behind the reader and a gold line for the ground */}
      <circle cx="210" cy="250" r="190" fill={gold} fillOpacity=".07" />
      <circle cx="210" cy="250" r="190" fill="none" stroke={gold} strokeOpacity=".35" strokeWidth="1" strokeDasharray="1 7" strokeLinecap="round" />
      <path d="M60 470H420" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />

      <image href={src} x="0" y="0" width="420" height="480" preserveAspectRatio="xMidYMid slice" mask={`url(#m${id})`} />

      {/* Letters, numbers and stars drifting up out of the book */}
      <g fontFamily="var(--font-serif), Georgia, serif" fontWeight="500">
        <g fill="none" strokeWidth="1.5" strokeDasharray="2 6" strokeLinecap="round">
          <path d="M300 196C292 160 276 130 250 104" stroke={forest} strokeOpacity=".35" />
          <path d="M318 190C318 150 330 112 352 76" stroke={gold} />
          <path d="M330 196C350 170 372 150 398 136" stroke={forest} strokeOpacity=".35" />
        </g>
        <text x="236" y="98" fontSize="34" fill={gold}>2</text>
        <text x="300" y="134" fontSize="30" fill={forest}>B</text>
        <text x="356" y="58" fontSize="32" fill={forest}>1</text>
        <text x="404" y="104" fontSize="32" fill={gold}>3</text>
        <text x="392" y="172" fontSize="30" fill={forest}>C</text>
        <text x="262" y="186" fontSize="30" fill={gold}>A</text>
        <path fill={gold} d="M312 30l6 13 14 1.2-10.6 9.4 3.2 13.8-12.6-7.4-12.6 7.4 3.2-13.8L292 44.2l14-1.2z" />
        <path fill={forest} fillOpacity=".7" d="M378 96l4 8.6 9.2.8-7 6.2 2 9-8.2-4.8-8.2 4.8 2-9-7-6.2 9.2-.8z" />
        <path fill={forest} fillOpacity=".5" d="M248 150l3 6.4 7 .6-5.3 4.7 1.6 6.9-6.3-3.7-6.3 3.7 1.6-6.9-5.3-4.7 7-.6z" />
      </g>
    </svg>
  );
}
