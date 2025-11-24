import React from "react";
import ProjectCard from "../gallery/ProjectCard";
import {
  NextJS,
  ReactJS,
  Tailwind,
  TypeScript,
  Vercel,
} from "../shared/Badges";

function Portfolio() {
  return (
    <ProjectCard
      title="My Portfolio | Creative portfolio using NextJS"
      description="This is info about this portfolio website. "
      images={[]}
      repos={[
        {
          linkTitle: "Website",
          link: "https://github.com/thefappybird/My-Portfolio",
        },
      ]}
      link={
        "https://my-portfolio-git-dev-branch-thefappybirds-projects.vercel.app"
      }
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

export default Portfolio;
