"use client";

import RevealText from "./RevealText";

const SKILLS = [
  { label: "React / Next.js", color: "var(--k-1)" },
  { label: "TypeScript", color: "var(--k-2)" },
  { label: "Node.js", color: "var(--k-3)" },
  { label: "Tailwind CSS", color: "var(--k-4)" },
  { label: "PostgreSQL", color: "var(--k-5)" },
  { label: "Vue / Nuxt", color: "var(--k-6)" },
  { label: "WebSocket", color: "var(--k-7)" },
  { label: "RTL / i18n", color: "var(--k-1)" },
];

const STATS = [
  { value: "4+", label: "Years shipping" },
  { value: "15+", label: "Products built" },
  { value: "2", label: "Enterprise SaaS" },
  { value: "GCC", label: "Market focus" },
];

export default function KineticAbout() {
  return (
    <section
      id="about"
      className="border-t-2 border-foreground"
      aria-labelledby="about-heading"
    >
      {/* Color-block header row */}
      <div className="flex">
        <div
          className="hidden md:block w-[35%] min-h-[120px]"
          style={{ backgroundColor: "var(--k-7)" }}
          aria-hidden
        />
        <div className="flex-1 px-6 md:px-10 py-10 border-l-2 border-foreground">
          <RevealText>
            <h2
              id="about-heading"
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium"
            >
              01 — About
            </h2>
          </RevealText>
        </div>
      </div>

      {/* Body grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24">
        {/* Left — stats */}
        <div>
          <RevealText className="mb-12">
            <h3
              className="leading-[0.92] tracking-tight text-foreground"
              style={{
                fontFamily: "var(--font-display-face)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
              }}
            >
              NUMBERS
              <br />
              THAT
              <br />
              <span style={{ color: "var(--k-1)" }}>MATTER.</span>
            </h3>
          </RevealText>

          <dl className="grid grid-cols-2 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="border-t-2 border-foreground pt-4">
                <dt
                  className="text-4xl font-bold leading-none mb-1"
                  style={{ fontFamily: "var(--font-display-face)", color: "var(--k-1)" }}
                >
                  {value}
                </dt>
                <dd className="text-xs tracking-widest uppercase text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — copy + skills */}
        <div>
          <RevealText delay={0.1}>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
              I engineer the front-end, own the product UX, and push code that
              scales. Currently at a GRC SaaS company where I lead client-facing
              interfaces for GCC enterprises — risk dashboards, maturity
              assessments, Arabic RTL, real-time WebSocket data.
            </p>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-base text-muted-foreground leading-relaxed mb-12">
              Before that: Accenture (deep legacy refactor on internal QA tooling),
              freelance CRM, hotel management systems. I've seen the full stack —
              from PostgreSQL query tuning to CSS keyframe animation — and I write
              code the same way whether anyone's watching or not.
            </p>
          </RevealText>

          {/* Skill chips */}
          <RevealText delay={0.3}>
            <ul className="flex flex-wrap gap-3 list-none p-0 m-0" aria-label="Technologies">
              {SKILLS.map(({ label, color }) => (
                <li
                  key={label}
                  className="px-4 py-2 text-xs font-bold tracking-widest uppercase border-2 border-foreground"
                  style={{ color }}
                >
                  {label}
                </li>
              ))}
            </ul>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
