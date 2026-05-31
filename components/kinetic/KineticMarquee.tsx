"use client";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  className?: string;
  separator?: string;
}

// Pure CSS infinite marquee — no JS, fully reduced-motion safe.
export default function KineticMarquee({
  items,
  direction = "left",
  className = "",
  separator = "◆",
}: MarqueeProps) {
  // Duplicate so the seam is invisible
  const row = [...items, ...items];

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden="true"
    >
      <span
        className={`inline-flex gap-8 ${
          direction === "left" ? "marquee-track-left" : "marquee-track-right"
        }`}
      >
        {row.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8">
            <span>{item}</span>
            <span className="text-[var(--k-1)]">{separator}</span>
          </span>
        ))}
      </span>
    </div>
  );
}
