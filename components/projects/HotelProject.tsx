import React from "react";
import ProjectCard from "../gallery/ProjectCard";
import { nomadImages } from "@/lib/exports";
import {
  NextJS,
  Prisma,
  ReactJS,
  Tailwind,
  TypeScript,
} from "../shared/Badges";

function HotelProject() {
  return (
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
        <Prisma />
      </div>
    </ProjectCard>
  );
}

export default HotelProject;
