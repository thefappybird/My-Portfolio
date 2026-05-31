"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import LanguageToggle from "./LanguageToggle";

export default function KineticNav() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  const NAV_LINKS = [
    { label: t("work"), href: "#projects" },
    { label: t("experience"), href: "#experience" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 start-0 end-0 z-50 bg-background"
    >
      <motion.div
        className="absolute bottom-0 start-0 end-0 h-[2px] bg-foreground"
        style={{ opacity: borderOpacity }}
      />
      <nav
        className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <a
          href="#"
          className="font-display text-xl tracking-tight leading-none text-foreground hover:text-[var(--k-1)] transition-colors"
          style={{ fontFamily: "var(--font-display-face)" }}
          data-cursor="↗"
          aria-label="Home"
        >
          AB
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium tracking-widest uppercase text-foreground/70 hover:text-foreground transition-colors relative group"
                data-cursor="↗"
              >
                {label}
                <span className="absolute -bottom-0.5 start-0 h-[2px] w-0 bg-[var(--k-1)] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right cluster */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />

          <a
            href={`mailto:alex.banaag1@gmail.com`}
            className="inline-flex items-center gap-2 px-5 py-2 border-2 border-foreground text-sm font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors"
            data-cursor="↗"
          >
            {t("hireCta")} <span aria-hidden>↗</span>
          </a>
        </div>

        {/* Mobile cluster */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex flex-col justify-center items-center gap-1.5 w-8 h-8"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-foreground transition-transform duration-200",
                mobileOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-foreground transition-opacity duration-200",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-foreground transition-transform duration-200",
                mobileOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-foreground bg-background/95 backdrop-blur-sm">
          <ul className="list-none m-0 p-0 px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-bold tracking-widest uppercase text-foreground/70 hover:text-foreground border-b border-foreground/10 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="mailto:alex.banaag1@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-foreground text-sm font-bold tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors w-full"
                onClick={() => setMobileOpen(false)}
              >
                {t("hireCta")} <span aria-hidden>↗</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
