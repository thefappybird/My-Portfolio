import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ReduxTemplate from "@/components/ReduxTemplate";
import Header from "@/components/Header";
import PrimaryInfo from "@/components/info/PrimaryInfo/PrimaryInfo";
import SecondaryInfo from "@/components/info/SecondaryInfo/SecondaryInfo";
import {
  Angular,
  Css,
  Html,
  Javascript,
  MongoDB,
  MySQL,
  NextJS,
  NodeJS,
  Prisma,
  ReactJS,
  ReactNative,
  Tailwind,
  TypeScript,
} from "@/components/shared/Badges";
import { nomadImages, southMateImages, trackrImages } from "@/lib/exports";
import ProjectCard from "@/components/gallery/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-7xl w-full space-y-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PrimaryInfo />
          <SecondaryInfo />
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Project Portfolio</CardTitle>
              <CardDescription>
                Take a look at my projects and their source code on GitHub.
              </CardDescription>
            </CardHeader>
            <ProjectCard
              title="Thesis Project | Mobile & Web E-Wallet Project"
              description="I worked as the sole developer for my thesis project for my Computer
                      Science Degree."
              images={southMateImages}
              repos={[
                {
                  linkTitle: "Website",
                  link: "https://github.com/thefappybird/SouthMate-Capstone-",
                },
                {
                  linkTitle: "Mobile App",
                  link: "https://github.com/thefappybird/SouthMate-App",
                },
              ]}
              link={null}
            >
              <div className="flex gap-2 flex-wrap">
                <Html />
                <Javascript />
                <ReactNative />
                <NodeJS />
                <MongoDB />
              </div>
            </ProjectCard>
            <ProjectCard
              title="Professional Project | Hotel Management System"
              description="I worked as the sole developer for this Web Project for a client in my previous job."
              images={nomadImages}
              repos={[]}
              link={null}
            >
              <div className="flex gap-2 flex-wrap">
                <ReactJS />
                <NextJS />
                <Tailwind />
                <TypeScript />
                <NodeJS />
                <MySQL />
                <Prisma />
              </div>
            </ProjectCard>
            <ProjectCard
              title="Trackr | Demo Expense Tracker App with Graphs"
              description="A small demo project to show my Angular 19 prowess using standalone components and signal-based reactivity. It is using generated data and api calls to a currency converter API and using ng2-charts to visualize expenses."
              images={trackrImages}
              repos={[
                {
                  linkTitle: "Website",
                  link: "https://github.com/thefappybird/02-expense-tracker",
                },
              ]}
              link="https://02-expense-tracker-revamp.vercel.app"
            >
              <div className="flex gap-2 flex-wrap">
                <Angular />
                <Css />
                <TypeScript />
              </div>
            </ProjectCard>
          </Card>
        </div>
      </div>
    </main>
  );
}
