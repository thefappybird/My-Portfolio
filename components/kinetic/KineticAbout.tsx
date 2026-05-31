"use client";

import { useTranslations } from "next-intl";
import RevealText from "./RevealText";

const SKILL_COLORS = [
  "var(--k-1)",
  "var(--k-2)",
  "var(--k-3)",
  "var(--k-4)",
  "var(--k-5)",
  "var(--k-6)",
  "var(--k-7)",
  "var(--k-1)",
];

export default function KineticAbout() {
  const t = useTranslations("about");
  const skills = t.raw("skills") as string[];

  const STATS = [
    { value: t("statYears"), label: t("statYearsLabel") },
    { value: t("statProducts"), label: t("statProductsLabel") },
    { value: t("statSaaS"), label: t("statSaaSLabel") },
    { value: t("statMarket"), label: t("statMarketLabel") },
  ];

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
        {/* border-s-2 = logical border-inline-start, respects RTL automatically */}
        <div className="flex-1 px-6 md:px-10 py-10 border-s-2 border-foreground">
          <RevealText>
            <h2
              id="about-heading"
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium"
            >
              {t("label")}
            </h2>
          </RevealText>
        </div>
      </div>

      {/* Body grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24">
        {/* Left — stats + heading */}
        <div>
          <RevealText className="mb-12">
            <h3
              className="leading-[0.92] tracking-tight text-foreground"
              style={{
                fontFamily: "var(--font-display-face)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
              }}
            >
              {t("headingLine1")}
              <br />
              {t("headingLine2")}
              <br />
              <span style={{ color: "var(--k-1)" }}>{t("headingLine3")}</span>
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
              {t("body1")}
            </p>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-base text-muted-foreground leading-relaxed mb-12">
              {t("body2")}
            </p>
          </RevealText>

          <RevealText delay={0.3}>
            <ul
              className="flex flex-wrap gap-3 list-none p-0 m-0"
              aria-label={t("skillsLabel")}
            >
              {skills.map((label, i) => (
                <li
                  key={label}
                  className="px-4 py-2 text-xs font-bold tracking-widest uppercase border-2 border-foreground"
                  style={{ color: SKILL_COLORS[i % SKILL_COLORS.length] }}
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
