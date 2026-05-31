"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useTranslations } from "next-intl";

export interface Repo {
  linkTitle: string;
  link: string;
}

export interface Project {
  title: string;
  tagline: string;
  tags: string[];
  description: string;
  images: string[];
  link: string | null;
  repos: Repo[];
  accentColor: string;
  kind: "Demo" | "Professional";
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function KineticProjectCard({ project, index }: ProjectCardProps) {
  const t = useTranslations("common");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [4, -4]);
  const rotateY = useTransform(x, [-60, 60], [-4, 4]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const mainImage = project.images[0] ?? "";

  return (
    <motion.article
      data-cursor="view"
      className="relative flex-shrink-0 w-[300px] md:w-[420px] border-2 border-foreground bg-card overflow-hidden group"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <div className="card-img-wrap relative w-full h-[200px] md:h-[300px] border-b-2 border-foreground">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 300px, 420px"
          />
        ) : (
          <div className="w-full h-full" style={{ backgroundColor: project.accentColor }} />
        )}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-multiply"
          style={{ backgroundColor: project.accentColor }}
          aria-hidden
        />
        {/* Index tag — logical start */}
        <div className="absolute top-4 start-4">
          <span
            className="text-xs font-bold tracking-widest uppercase px-2 py-1 text-white"
            style={{ backgroundColor: project.accentColor }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        {/* Kind badge — logical end */}
        <div className="absolute top-4 end-4">
          <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-background/90 text-foreground border border-foreground/20">
            {project.kind === "Demo" ? t("demo") : t("professional")}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 md:p-6">
        <h3
          className="text-xl md:text-3xl leading-tight mb-1 tracking-tight"
          style={{ fontFamily: "var(--font-display-face)" }}
        >
          {project.title}
        </h3>
        <p className="text-xs text-[var(--k-1)] font-bold tracking-widest uppercase mb-3">
          {project.tagline}
        </p>

        <ul className="flex flex-wrap gap-2 mb-4 list-none p-0 m-0">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-[10px] tracking-widest uppercase font-medium px-2 py-0.5 border border-foreground/30 text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b-2 border-foreground pb-0.5 hover:border-[var(--k-1)] hover:text-[var(--k-1)] transition-colors"
            >
              {t("liveSite")} <span aria-hidden>↗</span>
            </a>
          )}
          {project.repos.map((repo) => (
            <a
              key={repo.link}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b-2 border-foreground/40 pb-0.5 hover:border-[var(--k-1)] hover:text-[var(--k-1)] transition-colors text-foreground/60"
            >
              {repo.linkTitle} <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
