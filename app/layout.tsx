import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Alexander Banaag | Full Stack & Frontend Developer in Dubai",
    template: "%s | Alexander Banaag",
  },
  description:
    "Alexander Banaag is a Dubai-based Full Stack and Creative Frontend Developer specializing in pixel-perfect UI, modern web applications, and user-focused design. Available for freelance and full-time roles.",
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
    "Creative Developer",
    "Freelance Web Developer",
    "Angular Developer",
    "Vue.js Developer",
    "Node.js Developer",
    "Express.js Developer",
  ],
  authors: [{ name: "Alexander Banaag" }],
  creator: "Alexander Banaag",
  metadataBase: new URL("https://my-portfolio-unp7.vercel.app"),

  openGraph: {
    title: "Alexander Banaag | Full Stack & Frontend Developer in Dubai",
    description:
      "Creative Full Stack and Frontend Developer based in Dubai, focused on pixel-perfect UI, responsive design, and modern web experiences.",
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
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alexander Banaag | Full Stack & Frontend Developer",
    description:
      "Dubai-based Full Stack & Creative Frontend Developer specializing in modern UI, interaction, and responsive web design.",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
