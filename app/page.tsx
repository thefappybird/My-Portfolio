import Header from "@/components/header/main-header";
import HeroSection from "@/components/hero/hero-section";
import AboutSection from "@/components/about/about-section";
import ProjectSection from "@/components/projects/project-section";
import ExperienceSection from "@/components/experience/experience-section";
import EndSection from "@/components/end/end-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <EndSection />
      <footer className=" py-8 border-t border-border flex w-full justify-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Alexander Banaag. Built with Next.js and ❤️
        </p>
      </footer>
    </main>
  );
}
