import React from "react";
import SharedSection from "../shared/shared-section";
import Plato from "./project-list/Plato";
import EliteMotors from "./project-list/EliteMotors";
import EstateLiving from "./project-list/EstateLiving";
import Trackr from "./project-list/Trackr";
import UserLogs from "./project-list/UserLogs";
import HotelProject from "./project-list/HotelProject";
import ThesisProject from "./project-list/ThesisProject";

function ProjectSection() {
  return (
    <SharedSection id="projects-section" bg="" title="Featured Projects">
      <p className="text-muted-foreground">
        A collection of projects showcasing my skills in full-stack development,
        UI/UX design, and modern web technologies.
      </p>
      <Plato />
      <EliteMotors />
      <EstateLiving />
      <Trackr />
      <UserLogs />
      <HotelProject />
      <ThesisProject />
    </SharedSection>
  );
}

export default ProjectSection;
