"use client";

import { useTranslations } from "next-intl";
import RevealText from "./RevealText";

export default function GallurioFeature() {
  const t = useTranslations("projects.gallurio");

  return (
    <div className="border-b-2 border-foreground">
      {/* Featured label bar */}
      <div
        className="px-6 md:px-10 py-3 flex items-center gap-3 border-b-2 border-foreground"
        style={{ backgroundColor: "var(--k-1)" }}
      >
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-white">
          {t("featuredLabel")}
        </span>
        <span className="text-white/60 text-xs" aria-hidden>◆</span>
        <span className="text-xs font-bold tracking-[0.3em] uppercase px-2 py-0.5 border border-white/40 text-white">
          {t("comingSoon")}
        </span>
      </div>

      {/* Main block */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Headline side */}
          <div>
            <RevealText>
              <h3
                className="leading-[0.88] tracking-tight text-foreground mb-4"
                style={{
                  fontFamily: "var(--font-display-face)",
                  fontSize: "clamp(3rem, 7vw, 8rem)",
                }}
              >
                {t("name")}
              </h3>
            </RevealText>
            <RevealText delay={0.1}>
              <p
                className="text-base md:text-lg font-bold tracking-widest uppercase mb-6"
                style={{ color: "var(--k-1)" }}
              >
                {t("tagline")}
              </p>
            </RevealText>
            <RevealText delay={0.2}>
              <span
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold tracking-widest uppercase border-2 border-foreground/30 text-foreground/50 cursor-not-allowed select-none"
              >
                {t("ctaDisabled")}
              </span>
            </RevealText>
          </div>

          {/* Description side */}
          <div>
            {/* Brand tile */}
            <div
              className="w-full h-40 md:h-56 mb-6 border-2 border-foreground flex items-center justify-center"
              style={{ backgroundColor: "var(--k-1)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallurio-icon.svg"
                alt={t("name")}
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <RevealText delay={0.15}>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t("description")}
              </p>
            </RevealText>
          </div>
        </div>
      </div>
    </div>
  );
}
