import { setRequestLocale } from "next-intl/server";
import KineticNav from "@/components/kinetic/KineticNav";
import KineticHero from "@/components/kinetic/KineticHero";
import KineticAbout from "@/components/kinetic/KineticAbout";
import KineticProjectsRail from "@/components/kinetic/KineticProjectsRail";
import KineticExperience from "@/components/kinetic/KineticExperience";
import KineticFooter from "@/components/kinetic/KineticFooter";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <KineticNav />
      <main>
        <KineticHero />
        <KineticAbout />
        <KineticProjectsRail />
        <KineticExperience />
        <KineticFooter />
      </main>
    </>
  );
}
