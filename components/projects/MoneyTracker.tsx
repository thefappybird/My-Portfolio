import React from "react";
import ProjectCard from "../gallery/ProjectCard";
import { financeImages } from "@/lib/exports";
import {
  NextJS,
  ReactJS,
  Tailwind,
  TypeScript,
  Vercel,
} from "../shared/Badges";

function MoneyTracker() {
  return (
    <ProjectCard
      title="Money Tracker Project "
      description="A simple finance tracker web app built with ReactJS and NextJS. It allows users to track their income and expenses with visual graphs and tables."
      images={financeImages}
      repos={[]}
      link="https://finance-tracker-alpha-three.vercel.app"
    >
      <div className="flex gap-2 flex-wrap">
        <ReactJS />
        <NextJS />
        <Tailwind />
        <TypeScript />
        <Vercel />
      </div>
    </ProjectCard>
  );
}

export default MoneyTracker;
