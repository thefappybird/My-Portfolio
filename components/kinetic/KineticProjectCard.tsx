"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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

// Threshold in px — pointer move below this is treated as a tap, not a drag
const DRAG_TAP_THRESHOLD = 6;

export default function KineticProjectCard({ project, index }: ProjectCardProps) {
  const t = useTranslations("common");
  const tModal = useTranslations("projects.modal");

  const [open, setOpen] = useState(false);

  // Tilt motion values for the 3-D card effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [4, -4]);
  const rotateY = useTransform(x, [-60, 60], [-4, 4]);

  // Pointer-down position used to distinguish a tap from a drag
  const pointerOrigin = useRef<{ x: number; y: number } | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    pointerOrigin.current = { x: e.clientX, y: e.clientY };
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    if (!pointerOrigin.current) return;
    const dx = Math.abs(e.clientX - pointerOrigin.current.x);
    const dy = Math.abs(e.clientY - pointerOrigin.current.y);
    pointerOrigin.current = null;
    if (dx < DRAG_TAP_THRESHOLD && dy < DRAG_TAP_THRESHOLD) {
      setOpen(true);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  }

  const mainImage = project.images[0] ?? "";

  return (
    <>
      <motion.article
        data-cursor="view"
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={`${project.title} — ${tModal("openLabel")}`}
        className="relative flex-shrink-0 w-[300px] md:w-[420px] border-2 border-foreground bg-card overflow-hidden group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--k-1)]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onKeyDown={handleKeyDown}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                onClick={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
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
                onClick={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b-2 border-foreground/40 pb-0.5 hover:border-[var(--k-1)] hover:text-[var(--k-1)] transition-colors text-foreground/60"
              >
                {repo.linkTitle} <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </div>
      </motion.article>

      {/* Project detail modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={cn(
            // Brutalist overrides — square, ink border, cream bg, no shadow
            "rounded-none border-2 border-foreground shadow-none bg-background",
            "w-full max-w-3xl lg:max-w-4xl p-0",
            "flex flex-col"
          )}
          // react-medium-image-zoom portals its zoomed overlay to <body>; without these guards
          // Radix treats a click/escape on that overlay as "outside" and closes the whole modal.
          onPointerDownOutside={(e) => {
            const target = e.detail.originalEvent.target as HTMLElement | null;
            if (target?.closest("[data-rmiz-modal]")) e.preventDefault();
          }}
          onInteractOutside={(e) => {
            const target = e.detail.originalEvent.target as HTMLElement | null;
            if (target?.closest("[data-rmiz-modal]")) e.preventDefault();
          }}
          onEscapeKeyDown={(e) => {
            if (document.querySelector("[data-rmiz-modal]")) e.preventDefault();
          }}
        >
          {/* Scrollable body — data-lenis-prevent releases Lenis so native wheel scroll works */}
          <div
            data-lenis-prevent
            className="overflow-y-auto overscroll-contain max-h-[85vh] flex flex-col"
          >
            {/* Modal header */}
            <DialogHeader className="p-6 md:p-8 pb-4 border-b-2 border-foreground/10 text-start gap-3">
              <div className="flex items-start justify-between gap-4 pe-8">
                <div>
                  <DialogTitle
                    className="leading-tight tracking-tight text-foreground text-2xl md:text-4xl"
                    style={{ fontFamily: "var(--font-display-face)" }}
                  >
                    {project.title}
                  </DialogTitle>
                  <p className="text-xs text-[var(--k-1)] font-bold tracking-widest uppercase mt-1">
                    {project.tagline}
                  </p>
                </div>
                <span
                  className="shrink-0 text-[10px] font-bold tracking-widest uppercase px-2 py-1 text-white mt-1"
                  style={{ backgroundColor: project.accentColor }}
                >
                  {project.kind === "Demo" ? t("demo") : t("professional")}
                </span>
              </div>

              {/* Tags */}
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-[10px] tracking-widest uppercase font-medium px-2 py-0.5 border border-foreground/30 text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </DialogHeader>

            {/* Description — also serves as DialogDescription for a11y */}
            <div className="px-6 md:px-8 pt-5 pb-2">
              <DialogDescription className="text-sm md:text-base text-foreground/80 leading-relaxed">
                {project.description}
              </DialogDescription>
            </div>

            {/* Gallery */}
            {project.images.length > 0 && (
              <div className="px-6 md:px-8 pt-4 pb-6">
                <p className="text-xs tracking-[0.25em] uppercase font-bold text-muted-foreground mb-4">
                  {tModal("gallery")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.images.map((src, i) => (
                    <Zoom key={src}>
                      <div className="relative w-full aspect-video border-2 border-foreground overflow-hidden">
                        <Image
                          src={src}
                          alt={tModal("screenshotAlt", { n: i + 1, title: project.title })}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </Zoom>
                  ))}
                </div>
              </div>
            )}

            {/* Footer links */}
            {(project.link || project.repos.length > 0) && (
              <div className="px-6 md:px-8 py-5 border-t-2 border-foreground/10 flex flex-wrap gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="↗"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: project.accentColor }}
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
                  >
                    {repo.linkTitle} <span aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
