"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
} from "motion/react";
import { useTranslations, useLocale } from "next-intl";
import KineticProjectCard, { type Project } from "./KineticProjectCard";
import GallurioFeature from "./GallurioFeature";
import RevealText from "./RevealText";
import {
  chronoTaskImages,
  platoImages,
  carImages,
  estateImages,
  trackrImages,
  userLogsImages,
  nomadImages,
  financeImages,
} from "@/lib/exports";

// Card width + gap in px — must match Tailwind card sizes below
const CARD_W = 436;
const RAIL_PADDING = 40;

export default function KineticProjectsRail() {
  const t = useTranslations("projects");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const PROJECTS: Project[] = [
    {
      title: "ChronoTask",
      tagline: t("items.chronoTask.tagline"),
      tags: ["Vue 3", "Nuxt", "TypeScript", "Sass"],
      description: t("items.chronoTask.description"),
      images: chronoTaskImages,
      link: "https://chrono-task-orcin.vercel.app",
      repos: [
        { linkTitle: tCommon("repo"), link: "https://github.com/thefappybird/Chrono-Task" },
      ],
      accentColor: "var(--k-1)",
      kind: "Demo",
    },
    {
      title: "Plato",
      tagline: t("items.plato.tagline"),
      tags: ["Vue 3", "TypeScript", ".NET 9", "MS SQL"],
      description: t("items.plato.description"),
      images: platoImages,
      link: "https://03-recipe-planner.vercel.app",
      repos: [
        { linkTitle: "Website", link: "https://github.com/thefappybird/03-recipe-planner" },
        { linkTitle: tCommon("backendApi"), link: "https://github.com/thefappybird/Plato_DB" },
      ],
      accentColor: "var(--k-2)",
      kind: "Demo",
    },
    {
      title: "Trackr",
      tagline: t("items.trackr.tagline"),
      tags: ["Angular 19", "TypeScript", "ng2-charts"],
      description: t("items.trackr.description"),
      images: trackrImages,
      link: "https://02-expense-tracker-revamp.vercel.app",
      repos: [
        { linkTitle: tCommon("repo"), link: "https://github.com/thefappybird/02-expense-tracker" },
      ],
      accentColor: "var(--k-3)",
      kind: "Demo",
    },
    {
      title: "Elite Motors",
      tagline: t("items.eliteMotors.tagline"),
      tags: ["React", "Next.js", "Tailwind", "TypeScript"],
      description: t("items.eliteMotors.description"),
      images: carImages,
      link: "https://elite-motors-smoky.vercel.app",
      repos: [
        { linkTitle: tCommon("repo"), link: "https://github.com/thefappybird/Elite-Motors" },
      ],
      accentColor: "var(--k-4)",
      kind: "Demo",
    },
    {
      title: "Estate Living",
      tagline: t("items.estateLiving.tagline"),
      tags: ["Next.js", "TypeScript", "Tailwind"],
      description: t("items.estateLiving.description"),
      images: estateImages,
      link: "https://estate-living.vercel.app",
      repos: [
        { linkTitle: tCommon("repo"), link: "https://github.com/thefappybird/estate-living" },
      ],
      accentColor: "var(--k-5)",
      kind: "Demo",
    },
    {
      title: "User Tracker",
      tagline: t("items.userTracker.tagline"),
      tags: ["React", "Node.js", "MySQL", "RBAC"],
      description: t("items.userTracker.description"),
      images: userLogsImages,
      link: "https://user-profile-frontend-livid.vercel.app",
      repos: [
        { linkTitle: "Website", link: "https://github.com/thefappybird/User-Profile-Frontend" },
        { linkTitle: tCommon("backendApi"), link: "https://github.com/thefappybird/User-Profile_Backend" },
      ],
      accentColor: "var(--k-6)",
      kind: "Demo",
    },
    {
      title: "Finance Tracker",
      tagline: t("items.financeTracker.tagline"),
      tags: ["React", "Next.js", "Tailwind"],
      description: t("items.financeTracker.description"),
      images: financeImages,
      link: "https://finance-tracker-alpha-three.vercel.app",
      repos: [],
      accentColor: "var(--k-7)",
      kind: "Demo",
    },
    {
      title: "Hotel HMS",
      tagline: t("items.hotelHMS.tagline"),
      tags: ["React", "Next.js", "Tailwind", "Prisma"],
      description: t("items.hotelHMS.description"),
      images: nomadImages,
      link: null,
      repos: [],
      accentColor: "var(--k-1)",
      kind: "Professional",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const totalTravel = PROJECTS.length * CARD_W + RAIL_PADDING * 2;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // In RTL the horizontal rail should scroll from right-to-left, so negate the direction
  const xStart = isRtl
    ? -(totalTravel - (typeof window !== "undefined" ? window.innerWidth : 1440))
    : RAIL_PADDING;
  const xEnd = isRtl
    ? RAIL_PADDING
    : -(totalTravel - (typeof window !== "undefined" ? window.innerWidth : 1440));

  const xRaw = useTransform(scrollYProgress, [0, 1], [xStart, xEnd]);
  const x = useSpring(xRaw, { stiffness: 80, damping: 22 });

  const scrollVelocity = useVelocity(scrollYProgress);
  // Flip skew sign in RTL so kinetic feel matches reading direction
  const skewX = useTransform(
    scrollVelocity,
    [-0.5, 0, 0.5],
    isRtl ? [6, 0, -6] : [-6, 0, 6]
  );

  return (
    <section id="projects" aria-labelledby="projects-heading">
      {/* Gallurio flagship — above the demo rail */}
      <GallurioFeature />

      {/* Section heading */}
      <div className="border-t-2 border-foreground max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-8">
        <RevealText>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4">
            {t("label")}
          </p>
        </RevealText>
        <RevealText delay={0.1}>
          <h2
            id="projects-heading"
            className="leading-[0.9] tracking-tight text-foreground"
            style={{
              fontFamily: "var(--font-display-face)",
              fontSize: "clamp(3rem, 8vw, 9rem)",
            }}
          >
            {t("headingLine1")}
            <br />
            <span style={{ color: "var(--k-1)" }}>{t("headingLine2")}</span>
          </h2>
        </RevealText>
        <RevealText delay={0.2}>
          <p className="mt-6 text-sm text-muted-foreground tracking-widest uppercase hidden md:block">
            {t("instruction")}
          </p>
          <p className="mt-6 text-sm text-muted-foreground tracking-widest uppercase md:hidden">
            {t("mobileInstruction")}
          </p>
        </RevealText>
      </div>

      {/* Mobile: vertical card stack (< md) */}
      <div className="md:hidden px-4 pb-16 flex flex-col gap-6">
        {PROJECTS.map((project, i) => (
          <KineticProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Desktop: sticky horizontal scroll rail (md+) */}
      <div
        ref={sectionRef}
        style={{ height: `${PROJECTS.length * 30}vh` }}
        className="relative hidden md:block"
      >
        <div className="project-rail-sticky">
          <motion.div
            ref={railRef}
            data-cursor="drag"
            drag="x"
            dragConstraints={{
              left: isRtl ? RAIL_PADDING : -(totalTravel - (typeof window !== "undefined" ? window.innerWidth : 1440)),
              right: isRtl ? (totalTravel - (typeof window !== "undefined" ? window.innerWidth : 1440)) : RAIL_PADDING,
            }}
            style={{ x, skewX }}
            className="flex items-center gap-4 md:gap-6 h-full px-10"
            aria-label="Project cards — scroll or drag horizontally"
          >
            {PROJECTS.map((project, i) => (
              <KineticProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Screen reader / no-JS fallback */}
      <noscript>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="border-2 border-foreground p-6">
              <h3 style={{ fontFamily: "var(--font-display-face)" }} className="text-2xl mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </article>
          ))}
        </div>
      </noscript>
    </section>
  );
}
