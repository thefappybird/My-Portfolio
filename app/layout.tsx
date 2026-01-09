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
  title: "Alexander's Portfolio | Full Stack Developer in Dubai",
  description: "Full Stack Developer for hire in Dubai",
  openGraph: {
    title: "Alexander's Portfolio | Full Stack Developer for hire in Dubai",
    description: "Full Stack Developer for hire in Dubai",
    siteName: "Alexander's Portfolio | Full Stack Developer",
    images: [
      {
        url: "/public/preview-icon.png",
        width: 1200,
        height: 630,
        alt: "Preview Image",
      },
    ],
    type: "website",
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
