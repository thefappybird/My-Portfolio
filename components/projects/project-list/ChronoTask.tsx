import React from "react";
import ProjectCard from "../../gallery/project-card";
import { chronoTaskImages } from "@/lib/exports";
import {
  VueJS,
  TypeScript,
  Vercel,
  Sass,
  Nuxt,
} from "../../shared/Badges";

function ChronoTask() {
  return (
    <ProjectCard
      title="ChronoTask | Elevate Your Productivity"
      description="A front-end project for a task management application built with Vue.js and TypeScript. It features a sleek design, intuitive task organization, and seamless user experience to help users stay on top of their tasks."
      images={chronoTaskImages}
      repos={[
        {
          linkTitle: "Website",
          link: "https://github.com/thefappybird/Chrono-Task",
        },
      ]}
      link="https://chrono-task-orcin.vercel.app"
    >
      <div className="flex gap-2 flex-wrap">
        <VueJS />
        <Nuxt/>
        <Sass />
        <TypeScript />
        <Vercel />
      </div>
    </ProjectCard>
  );
}

export default ChronoTask;
