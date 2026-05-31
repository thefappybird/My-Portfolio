"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
} from "motion/react";
import KineticProjectCard, { type Project } from "./KineticProjectCard";
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

const PROJECTS: Project[] = [
  {
    title: "ChronoTask",
    tags: ["React", "TypeScript", "Supabase", "Tailwind"],
    description:
      "A full-featured task management SaaS with calendar views, drag-and-drop scheduling, and real-time sync across devices.",
    images: chronoTaskImages,
    link: null,
    accentColor: "var(--k-1)",
  },
  {
    title: "Plato",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    description:
      "Recipe discovery and meal planning platform with OAuth social auth, user favorites, and a paginated explore feed.",
    images: platoImages,
    link: null,
    accentColor: "var(--k-2)",
  },
  {
    title: "Trackr",
    tags: ["Vue 3", "Nuxt", "Charts.js", "REST API"],
    description:
      "Analytics dashboard for tracking personal KPIs with live data, configurable charts, and exportable reports.",
    images: trackrImages,
    link: null,
    accentColor: "var(--k-3)",
  },
  {
    title: "Elite Motors",
    tags: ["Next.js", "Tailwind", "Headless CMS"],
    description:
      "Luxury car dealership marketing site with animated hero, inventory filtering, and lead-capture contact flow.",
    images: carImages,
    link: null,
    accentColor: "var(--k-4)",
  },
  {
    title: "Estate Living",
    tags: ["React", "GSAP", "Mapbox", "REST"],
    description:
      "Real estate listing portal with map-integrated property search, gallery carousels, and inquiry management.",
    images: estateImages,
    link: null,
    accentColor: "var(--k-5)",
  },
  {
    title: "Finance Tracker",
    tags: ["Next.js", "Prisma", "Chart.js", "Auth.js"],
    description:
      "Personal budgeting app with categorized transactions, trend graphs, and monthly summary breakdowns.",
    images: financeImages,
    link: null,
    accentColor: "var(--k-6)",
  },
  {
    title: "Nomad HMS",
    tags: ["React", "Express", "MySQL", "Redux"],
    description:
      "Hotel management system handling reservations, room availability calendars, staff scheduling, and reporting.",
    images: nomadImages,
    link: null,
    accentColor: "var(--k-7)",
  },
  {
    title: "UserLogs",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    description:
      "Admin dashboard for user activity auditing — full CRUD, role-based access, and filterable log export.",
    images: userLogsImages,
    link: null,
    accentColor: "var(--k-1)",
  },
];

// Card width + gap in px — must match Tailwind values below
const CARD_W = 436; // 420px card + 16px gap approx
const RAIL_PADDING = 40;

export default function KineticProjectsRail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  // Total horizontal travel: (cards * width) - viewport
  const totalTravel = PROJECTS.length * CARD_W + RAIL_PADDING * 2;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll to horizontal translate
  const xRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [RAIL_PADDING, -(totalTravel - (typeof window !== "undefined" ? window.innerWidth : 1440))]
  );
  const x = useSpring(xRaw, { stiffness: 80, damping: 22 });

  // Skew based on scroll velocity — kinetic feel
  const scrollVelocity = useVelocity(scrollYProgress);
  const skewX = useTransform(scrollVelocity, [-0.5, 0, 0.5], [-6, 0, 6]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
    >
      {/* Section label + heading — not sticky, appears above the pin */}
      <div className="border-t-2 border-foreground max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-8">
        <RevealText>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4">
            02 — Selected Work
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
            WHAT I'VE
            <br />
            <span style={{ color: "var(--k-1)" }}>SHIPPED.</span>
          </h2>
        </RevealText>
        <RevealText delay={0.2}>
          <p className="mt-6 text-sm text-muted-foreground tracking-widest uppercase">
            Scroll to navigate — drag to explore
          </p>
        </RevealText>
      </div>

      {/* Sticky horizontal rail — height controls scroll distance */}
      <div
        ref={sectionRef}
        style={{ height: `${PROJECTS.length * 120}vh` }}
        className="relative"
      >
        <div className="project-rail-sticky">
          <motion.div
            ref={railRef}
            data-cursor="drag"
            drag="x"
            dragConstraints={{
              left: -(totalTravel - (typeof window !== "undefined" ? window.innerWidth : 1440)),
              right: RAIL_PADDING,
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

      {/* Keyboard-accessible fallback grid for screen readers / no-JS */}
      <noscript>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className="border-2 border-foreground p-6">
              <h3 style={{ fontFamily: "var(--font-display-face)" }} className="text-2xl mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </article>
          ))}
        </div>
      </noscript>
    </section>
  );
}
