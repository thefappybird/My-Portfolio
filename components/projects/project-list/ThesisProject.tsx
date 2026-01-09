import React from "react";
import ProjectCard from "../../gallery/project-card";
import {
  Html,
  Javascript,
  MongoDB,
  NodeJS,
  ReactNative,
} from "../../shared/Badges";
import { southMateImages } from "@/lib/exports";

function ThesisProject() {
  return (
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
  );
}

export default ThesisProject;
