import React from "react";
import ProjectCard from "../gallery/ProjectCard";
import { Angular, DotNet, Tailwind, TypeScript } from "../shared/Badges";

function QAProject() {
  return (
    <ProjectCard
      title="Professional Project | Quality Assurance Tool"
      description="I was a part of an agile team that developed this web application for internal use in my previous job. Not so much details as this was confidential."
      images={[]}
      repos={[]}
      link={null}
    >
      <div className="flex gap-2 flex-wrap">
        <Angular />
        <DotNet />
        <Tailwind />
        <TypeScript />
      </div>
    </ProjectCard>
  );
}

export default QAProject;
