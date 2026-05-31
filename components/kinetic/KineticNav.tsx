"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function KineticNav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent"
      )}
      style={{ borderBottom: "2px solid" }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground origin-left"
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
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-[var(--k-1)] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:alex.banaag1@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 border-2 border-foreground text-sm font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors"
          data-cursor="↗"
        >
          Hire me <span aria-hidden>↗</span>
        </a>

        {/* Mobile menu — simplified */}
        <div className="md:hidden flex gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-xs font-medium tracking-widest uppercase text-foreground/70"
              data-cursor="↗"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
