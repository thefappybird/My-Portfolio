"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import RevealText from "./RevealText";

interface Role {
  key: string;
  company: string;
  location: string;
  isCurrent?: boolean;
  tags: string[];
}

const ROLES: Role[] = [
  {
    key: "rezilens",
    company: "Rezilens, LLC",
    location: "Dubai, UAE",
    isCurrent: true,
    tags: ["React", "Next.js", "TypeScript", "WebSocket", "RBAC", "Arabic/RTL"],
  },
  {
    key: "accenture",
    company: "Accenture, Inc.",
    location: "Remote",
    tags: ["Angular", "TypeScript", ".NET", "REST"],
  },
  {
    key: "freelance",
    company: "UAE Remote Freelance",
    location: "Remote",
    tags: ["React", "Node.js", "REST", "MySQL"],
  },
  {
    key: "accesssoft",
    company: "AccessSoft Solutions, Inc.",
    location: "Mindanao, PH",
    tags: ["Next.js", "Angular", ".NET", "SQL"],
  },
  {
    key: "sykes",
    company: "SYKES Enterprises",
    location: "Remote",
    tags: ["React", "REST", "Tailwind", "SASS"],
  },
];

interface RoleCardProps {
  role: Role;
  index: number;
}

function RoleCard({ role, index }: RoleCardProps) {
  const t = useTranslations("experience");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  const data = t.raw(`roles.${role.key}`) as {
    title: string;
    period: string;
    summary: string;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      className={cn(
        "border-2 p-6 md:p-8 relative",
        role.isCurrent
          ? "border-[var(--k-1)] bg-[var(--k-1)]/[0.03]"
          : "border-foreground/20 hover:border-foreground/50 transition-colors duration-300"
      )}
    >
      {/* Current marker */}
      {role.isCurrent && (
        <span
          className={cn(
            "absolute top-6 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 text-white",
            isRtl ? "left-6" : "right-6"
          )}
          style={{ backgroundColor: "var(--k-1)" }}
        >
          {t("currentBadge")}
        </span>
      )}

      {/* Header row */}
      <div className={cn("flex flex-col gap-1 mb-4", role.isCurrent && (isRtl ? "pe-20" : "pe-20"))}>
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className="text-xl md:text-2xl leading-tight tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display-face)" }}
          >
            {role.company}
          </h3>
        </div>
        <p
          className="text-sm font-bold tracking-widest uppercase"
          style={{ color: role.isCurrent ? "var(--k-1)" : undefined }}
        >
          {data.title}
        </p>
        <p className="text-xs text-muted-foreground tracking-wider">
          {data.period} &mdash; {role.location}
        </p>
      </div>

      {/* Summary */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {data.summary}
      </p>

      {/* Tags */}
      <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
        {role.tags.map((tag) => (
          <li
            key={tag}
            className={cn(
              "text-[10px] tracking-widest uppercase font-medium px-2 py-0.5 border",
              role.isCurrent
                ? "border-[var(--k-1)]/40 text-[var(--k-1)]"
                : "border-foreground/20 text-muted-foreground"
            )}
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function KineticExperience() {
  const t = useTranslations("experience");

  return (
    <section
      id="experience"
      className="border-t-2 border-foreground"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-8">
        <RevealText>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium mb-4">
            {t("label")}
          </p>
        </RevealText>
        <RevealText delay={0.1}>
          <h2
            id="experience-heading"
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
      </div>

      {/* Timeline */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24">
        <div className="flex flex-col gap-4 md:gap-6">
          {ROLES.map((role, i) => (
            <RoleCard key={role.key} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
