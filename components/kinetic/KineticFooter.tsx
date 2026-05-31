"use client";

import { useTranslations } from "next-intl";
import { emailAddress, phoneNumber, phoneNumberLink } from "@/lib/exports";
import RevealText from "./RevealText";
import KineticMarquee from "./KineticMarquee";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/thefappybird" },
  { label: "LinkedIn", href: "https://linkedin.com/in/alexander-banaag" },
  { label: "Email", href: `mailto:${emailAddress}` },
];

export default function KineticFooter() {
  const t = useTranslations("contact");
  const marqueeItems = t.raw("marqueeItems") as string[];

  return (
    <footer
      id="contact"
      className="border-t-2 border-foreground"
      aria-labelledby="contact-heading"
    >
      {/* CTA block */}
      <div className="py-24 md:py-40 px-6 md:px-10 max-w-[1400px] mx-auto">
        <RevealText>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium mb-6">
            {t("label")}
          </p>
        </RevealText>

        <RevealText delay={0.05}>
          <h2
            id="contact-heading"
            className="leading-[0.88] tracking-tight mb-8"
            style={{
              fontFamily: "var(--font-display-face)",
              fontSize: "clamp(3.5rem, 10vw, 11rem)",
              color: "var(--foreground)",
            }}
          >
            {t("heading1")}
            <br />
            <span style={{ color: "var(--k-1)" }}>{t("heading2")}</span>
          </h2>
        </RevealText>

        <RevealText delay={0.15}>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href={`mailto:${emailAddress}`}
              data-cursor="↗"
              className="px-8 py-4 text-sm font-bold tracking-widest uppercase text-white inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--k-1)" }}
            >
              {t("emailCta")} <span aria-hidden>↗</span>
            </a>
            <a
              href={phoneNumberLink}
              data-cursor="↗"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm font-bold tracking-widest uppercase border-2 border-foreground text-foreground inline-flex items-center justify-center gap-2 hover:bg-foreground hover:text-background transition-colors"
            >
              {t("whatsappCta")} {phoneNumber}
            </a>
            <a
              href="/Alexander_Banaag_Resume.pdf"
              download
              data-cursor="↗"
              className="px-8 py-4 text-sm font-bold tracking-widest uppercase border-2 border-foreground/40 text-foreground/70 inline-flex items-center justify-center gap-2 hover:border-foreground hover:text-foreground transition-colors"
            >
              {t("downloadCv")} <span aria-hidden>↓</span>
            </a>
          </div>
        </RevealText>
      </div>

      {/* Marquee divider */}
      <div className="border-t-2 border-foreground">
        <div className="py-5">
          <KineticMarquee
            items={marqueeItems}
            direction="left"
            className="text-base font-bold tracking-widest uppercase text-foreground"
            separator="★"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-foreground px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs tracking-widest uppercase text-muted-foreground">
          {t("copyright")}
        </p>

        <nav aria-label="Social links">
          <ul className="flex gap-6 list-none p-0 m-0">
            {SOCIALS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  data-cursor="↗"
                  className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
