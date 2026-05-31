"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations, useLocale } from "next-intl";
import RevealText from "./RevealText";
import KineticMarquee from "./KineticMarquee";

const MARQUEE_TOP_EN = [
  "Frontend Engineering",
  "Dubai · UAE",
  "React & Next.js",
  "Pixel-Perfect UI",
  "Full Stack",
  "TypeScript",
  "Motion Design",
];
const MARQUEE_BTM_EN = [
  "GRC SaaS Platform",
  "4+ Years",
  "Arabic / RTL",
  "WebSocket Real-Time",
  "RBAC Systems",
  "Tailwind CSS",
  "Open to Roles",
];
const MARQUEE_TOP_AR = [
  "هندسة الواجهات",
  "دبي · الإمارات",
  "React & Next.js",
  "تصميم دقيق",
  "Full Stack",
  "TypeScript",
  "تصميم حركي",
];
const MARQUEE_BTM_AR = [
  "منصة GRC SaaS",
  "4+ سنوات",
  "عربي / RTL",
  "بيانات فورية WebSocket",
  "أنظمة RBAC",
  "Tailwind CSS",
  "متاح للعمل",
];

export default function KineticHero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const marqueeTop = isRtl ? MARQUEE_TOP_AR : MARQUEE_TOP_EN;
  const marqueeBottom = isRtl ? MARQUEE_BTM_AR : MARQUEE_BTM_EN;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Color block accent — top-end quadrant (logical property) */}
      <div
        className="absolute top-0 end-0 w-[45vw] h-[55vh] pointer-events-none"
        style={{ backgroundColor: "var(--k-1)", opacity: 0.08 }}
        aria-hidden
      />

      <motion.div
        style={{ y: parallaxY, opacity }}
        className="flex-1 flex flex-col justify-center max-w-[1400px] mx-auto px-6 md:px-10 w-full"
      >
        {/* Status pill */}
        <div className="mb-8 flex items-center gap-3">
          <span
            className="inline-block w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--k-7)" }}
            aria-hidden
          />
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
            {t("status")}
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-display leading-[0.9] tracking-tight text-foreground mb-6"
          style={{
            fontFamily: "var(--font-display-face)",
            fontSize: "clamp(3rem, 11vw, 13rem)",
          }}
        >
          <RevealText delay={0.05}>
            <span>{t("line1")}</span>
          </RevealText>
          <RevealText delay={0.15}>
            <span className="flex items-baseline gap-4 flex-wrap">
              <span>{t("line2a")}</span>
              <span
                className="px-4 py-1 inline-block text-white"
                style={{ backgroundColor: "var(--k-1)" }}
              >
                {t("line2b")}
              </span>
            </span>
          </RevealText>
          <RevealText delay={0.25}>
            <span>{t("line3")}</span>
          </RevealText>
        </h1>

        {/* Sub-copy + CTAs */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <RevealText delay={0.4} className="max-w-md">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t("sub")}
            </p>
          </RevealText>

          <RevealText delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                data-cursor="↗"
                className="px-8 py-4 text-sm font-bold tracking-widest uppercase text-white inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "var(--k-1)" }}
              >
                {t("ctaWork")} <span aria-hidden>→</span>
              </a>
              <a
                href="#about"
                data-cursor="↗"
                className="px-8 py-4 text-sm font-bold tracking-widest uppercase border-2 border-foreground text-foreground inline-flex items-center justify-center gap-2 hover:bg-foreground hover:text-background transition-colors"
              >
                {t("ctaAbout")}
              </a>
              <a
                href="/Alexander_Banaag_Resume.pdf"
                download
                data-cursor="↗"
                className="px-8 py-4 text-sm font-bold tracking-widest uppercase border-2 border-foreground/40 text-foreground/70 inline-flex items-center justify-center gap-2 hover:border-foreground hover:text-foreground transition-colors"
              >
                {t("ctaCv")} <span aria-hidden>↓</span>
              </a>
            </div>
          </RevealText>
        </div>
      </motion.div>

      {/* Marquee strip — opaque band so it never bleeds into the fixed nav */}
      <div className="relative z-30 mt-16 border-t-2 border-foreground bg-background">
        <div className="py-4 border-b border-foreground/20">
          <KineticMarquee
            items={marqueeTop}
            direction="left"
            className="text-sm font-medium tracking-widest uppercase text-foreground"
          />
        </div>
        <div className="py-4">
          <KineticMarquee
            items={marqueeBottom}
            direction="right"
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground"
          />
        </div>
      </div>
    </section>
  );
}
