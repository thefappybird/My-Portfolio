import React from "react";
import ProjectCard from "../../gallery/project-card";
import { trackrImages } from "@/lib/exports";
import { Angular, Css, TypeScript, Vercel } from "../../shared/Badges";

function Trackr() {
  return (
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
        <Vercel />
      </div>
    </ProjectCard>
  );
}

export default Trackr;
