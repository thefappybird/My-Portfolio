"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import RevealText from "./RevealText";
import KineticMarquee from "./KineticMarquee";

const MARQUEE_ITEMS_TOP = [
  "Frontend Engineering",
  "Dubai · UAE",
  "React & Next.js",
  "Pixel-Perfect UI",
  "Full Stack",
  "TypeScript",
  "Motion Design",
];
const MARQUEE_ITEMS_BTM = [
  "GRC SaaS Platform",
  "4+ Years",
  "Arabic / RTL",
  "WebSocket Real-Time",
  "RBAC Systems",
  "Tailwind CSS",
  "Open to Roles",
];

export default function KineticHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Color block accent — top-right quadrant */}
      <div
        className="absolute top-0 right-0 w-[45vw] h-[55vh] pointer-events-none"
        style={{ backgroundColor: "var(--k-1)", opacity: 0.08 }}
        aria-hidden
      />

      <motion.div
        style={{ y: parallaxY, opacity }}
        className="flex-1 flex flex-col justify-center max-w-[1400px] mx-auto px-6 md:px-10 w-full"
      >
        {/* Location / status pill */}
        <div className="mb-8 flex items-center gap-3">
          <span
            className="inline-block w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--k-7)" }}
            aria-hidden
          />
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
            Dubai, UAE — Available for opportunities
          </span>
        </div>

        {/* Main headline — oversized display */}
        <h1 className="font-display leading-[0.9] tracking-tight text-foreground mb-6"
          style={{
            fontFamily: "var(--font-display-face)",
            fontSize: "clamp(4rem, 12vw, 13rem)",
          }}
        >
          <RevealText delay={0.05}>
            <span>CREATIVE</span>
          </RevealText>
          <RevealText delay={0.15}>
            <span className="flex items-baseline gap-4 flex-wrap">
              <span>FRONT</span>
              <span
                className="px-4 py-1 inline-block text-white"
                style={{ backgroundColor: "var(--k-1)" }}
              >
                END
              </span>
            </span>
          </RevealText>
          <RevealText delay={0.25}>
            <span>ENGINEER</span>
          </RevealText>
        </h1>

        {/* Sub-copy + CTA row */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <RevealText delay={0.4} className="max-w-md">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I build performant, accessible, and visually precise interfaces.
              Currently owning front-end on a GRC SaaS platform serving GCC enterprises —
              shipping real-time data, Arabic RTL, and complex RBAC at scale.
            </p>
          </RevealText>

          <RevealText delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                data-cursor="↗"
                className="px-8 py-4 text-sm font-bold tracking-widest uppercase text-white inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "var(--k-1)" }}
              >
                See My Work <span aria-hidden>→</span>
              </a>
              <a
                href="#about"
                data-cursor="↗"
                className="px-8 py-4 text-sm font-bold tracking-widest uppercase border-2 border-foreground text-foreground inline-flex items-center gap-2 hover:bg-foreground hover:text-background transition-colors"
              >
                About Me
              </a>
            </div>
          </RevealText>
        </div>
      </motion.div>

      {/* Marquee strip — bottom of hero */}
      <div className="mt-16 border-t-2 border-foreground">
        <div className="py-4 border-b border-foreground/20">
          <KineticMarquee
            items={MARQUEE_ITEMS_TOP}
            direction="left"
            className="text-sm font-medium tracking-widest uppercase text-foreground"
          />
        </div>
        <div className="py-4">
          <KineticMarquee
            items={MARQUEE_ITEMS_BTM}
            direction="right"
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground"
          />
        </div>
      </div>
    </section>
  );
}
