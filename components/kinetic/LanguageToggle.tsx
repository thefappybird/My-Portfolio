"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

// Segmented EN | AR switch. Forced LTR so EN is always on the left and AR on the
// right regardless of the active locale — easier to spot than a dropdown.
export default function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function set(next: string) {
    if (next !== locale) router.replace(pathname, { locale: next });
  }

  const segment = (code: string, label: string) => (
    <button
      type="button"
      onClick={() => set(code)}
      aria-pressed={locale === code}
      className={cn(
        "px-3 py-1.5 text-xs font-bold tracking-widest uppercase transition-colors focus:outline-none",
        locale === code
          ? "bg-foreground text-background"
          : "text-foreground hover:bg-foreground/10"
      )}
    >
      {label}
    </button>
  );

  return (
    <div
      dir="ltr"
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex border-2 border-foreground divide-x-2 divide-foreground",
        className
      )}
    >
      {segment("en", "EN")}
      {segment("ar", "AR")}
    </div>
  );
}
