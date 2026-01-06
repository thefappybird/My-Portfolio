import React from "react";
import ProjectCard from "../gallery/ProjectCard";
import { estateImages } from "@/lib/exports";
import {
  NextJS,
  ReactJS,
  Tailwind,
  TypeScript,
  Vercel,
} from "../shared/Badges";

function EstateLiving() {
  return (
    <ProjectCard
      title="Estate Living | Find Your Dream Home"
      description="A front-end project for a real estate website built with Next.js, TypeScript, and Tailwind CSS. It features property listings, and responsive design to help users find their dream homes easily."
      images={estateImages}
      repos={[
        {
          linkTitle: "Website",
          link: "https://github.com/thefappybird/estate-living",
        },
      ]}
      link="https://estate-living.vercel.app"
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

export default EstateLiving;
