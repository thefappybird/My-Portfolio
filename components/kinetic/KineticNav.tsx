"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function KineticNav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  const NAV_LINKS = [
    { label: t("work"), href: "#projects" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next });
  }

  return (
    <header
      className={cn(
        "fixed top-0 start-0 end-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent"
      )}
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
          <DropdownMenu>
            <DropdownMenuTrigger
              className="px-3 py-2 border-2 border-foreground text-sm font-bold tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors focus:outline-none"
              aria-label="Switch language"
            >
              {locale === "ar" ? t("ar") : t("en")}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="min-w-[8rem] border-2 border-foreground rounded-none bg-background p-0 shadow-none"
              align="end"
            >
              <DropdownMenuItem
                onClick={() => switchLocale("en")}
                className={cn(
                  "rounded-none px-4 py-3 text-sm font-bold tracking-widest uppercase cursor-pointer",
                  locale === "en" && "text-[var(--k-1)]"
                )}
              >
                {t("english")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => switchLocale("ar")}
                className={cn(
                  "rounded-none px-4 py-3 text-sm font-bold tracking-widest uppercase cursor-pointer",
                  locale === "ar" && "text-[var(--k-1)]"
                )}
              >
                {t("arabic")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
          <DropdownMenu>
            <DropdownMenuTrigger
              className="px-2 py-1 border-2 border-foreground text-xs font-bold tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors focus:outline-none"
              aria-label="Switch language"
            >
              {locale === "ar" ? t("ar") : t("en")}
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="min-w-[7rem] border-2 border-foreground rounded-none bg-background p-0 shadow-none"
              align="end"
            >
              <DropdownMenuItem
                onClick={() => switchLocale("en")}
                className={cn(
                  "rounded-none px-3 py-2 text-xs font-bold tracking-widest uppercase cursor-pointer",
                  locale === "en" && "text-[var(--k-1)]"
                )}
              >
                {t("english")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => switchLocale("ar")}
                className={cn(
                  "rounded-none px-3 py-2 text-xs font-bold tracking-widest uppercase cursor-pointer",
                  locale === "ar" && "text-[var(--k-1)]"
                )}
              >
                {t("arabic")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
