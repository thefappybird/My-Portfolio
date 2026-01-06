import React from "react";
import ProjectCard from "../gallery/ProjectCard";
import { carImages } from "@/lib/exports";
import {
  NextJS,
  ReactJS,
  Tailwind,
  TypeScript,
  Vercel,
} from "../shared/Badges";

function EliteMotors() {
  return (
    <ProjectCard
      title="Elite Motors | Drive Your Dreams, Own Your Destiny"
      description="A front-end project for a car dealership website built with React and TypeScript. It features a responsive design, dynamic car listings, and user-friendly navigation to enhance the browsing experience."
      images={carImages}
      repos={[
        {
          linkTitle: "Website",
          link: "https://github.com/thefappybird/Elite-Motors",
        },
      ]}
      link="https://elite-motors-smoky.vercel.app"
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

export default EliteMotors;
