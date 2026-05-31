import KineticNav from "@/components/kinetic/KineticNav";
import KineticHero from "@/components/kinetic/KineticHero";
import KineticAbout from "@/components/kinetic/KineticAbout";
import KineticProjectsRail from "@/components/kinetic/KineticProjectsRail";
import KineticFooter from "@/components/kinetic/KineticFooter";

export default function Home() {
  return (
    <>
      <KineticNav />
      <main>
        <KineticHero />
        <KineticAbout />
        <KineticProjectsRail />
        <KineticFooter />
      </main>
    </>
  );
}
