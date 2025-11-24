import React from "react";
import ProjectCard from "../gallery/ProjectCard";
import { platoImages } from "@/lib/exports";
import {
  Azure,
  DotNet,
  MsSql,
  Scss,
  TypeScript,
  Vercel,
  VueJS,
} from "../shared/Badges";

function Plato() {
  return (
    <ProjectCard
      title="Plato | Recipe Planner App with Backend API"
      description="A small full stack project to show my Vue 3 prowess using the Composition API and TypeScript and a backend API built with .NET 9 and MS SQL. It allows users to register and create recipes, explore and favorite recipes from other users."
      images={platoImages}
      repos={[
        {
          linkTitle: "Website",
          link: "https://github.com/thefappybird/03-recipe-planner",
        },
        {
          linkTitle: "Backend API",
          link: "https://github.com/thefappybird/Plato_DB",
        },
      ]}
      link="https://03-recipe-planner.vercel.app"
    >
      <div className="flex gap-2 flex-wrap">
        <VueJS />
        <Scss />
        <TypeScript />
        <DotNet />
        <MsSql />
        <Vercel />
        <Azure />
      </div>
    </ProjectCard>
  );
}

export default Plato;
