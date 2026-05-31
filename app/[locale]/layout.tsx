import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo_Black, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import SmoothScrollProvider from "@/components/kinetic/SmoothScrollProvider";
import CustomCursor from "@/components/kinetic/CustomCursor";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: "400",
});

const cairo = Cairo({
  variable: "--font-arabic-display",
  subsets: ["arabic", "latin"],
  weight: ["400", "700", "900"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  // Side-effect: validates locale is loadable before metadata is returned
  await getTranslations({ locale, namespace: "hero" });

  const isAr = locale === "ar";
  const title = isAr
    ? "Alexander Banaag | مطوّر واجهات وFullStack في دبي"
    : "Alexander Banaag | Full Stack & Frontend Developer in Dubai";
  const description = isAr
    ? "Alexander Banaag مطوّر واجهات وFullStack مقيم في دبي، متخصص في واجهات دقيقة التصميم وتطبيقات الويب الحديثة. متاح للعمل الحر والفرص الدائمة."
    : "Alexander Banaag is a Dubai-based Full Stack and Creative Frontend Developer specializing in pixel-perfect UI, modern web applications, and user-focused design. Available for freelance and full-time roles.";

  return {
    title: {
      default: title,
      template: "%s | Alexander Banaag",
    },
    description,
    keywords: [
      "Full Stack Developer Dubai",
      "Frontend Developer Dubai",
      "Creative Web Developer",
      "UI Developer",
      "React Developer Dubai",
      "Next.js Developer",
      "Web Developer UAE",
      "Freelance Web Developer Dubai",
      "Backend Developer Dubai",
      "JavaScript Developer Dubai",
      "TypeScript Developer Dubai",
      "Web Developer",
      "Full Stack Developer",
      "Frontend Developer",
      "Angular Developer",
      "Vue.js Developer",
      "Node.js Developer",
    ],
    authors: [{ name: "Alexander Banaag" }],
    creator: "Alexander Banaag",
    metadataBase: new URL("https://my-portfolio-unp7.vercel.app"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title,
      description,
      url: "https://my-portfolio-unp7.vercel.app",
      siteName: "Alexander Banaag Portfolio",
      images: [
        {
          url: "/thumbnail.png",
          width: 1200,
          height: 630,
          alt: "Alexander Banaag – Full Stack & Frontend Developer Portfolio",
        },
      ],
      locale: isAr ? "ar_AE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/thumbnail.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} ${cairo.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <NextIntlClientProvider>
            <SmoothScrollProvider>
              <CustomCursor />
              {children}
            </SmoothScrollProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
