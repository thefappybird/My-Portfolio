import React from "react";
import PrimaryInfo from "./info/primary-info";
import TechStack from "./info/tech-stack";
import SharedSection from "../shared/shared-section";

function AboutSection() {
  return (
    <SharedSection id="about-section" bg="bg-muted/20" title={null}>
      <PrimaryInfo />
      <TechStack />
    </SharedSection>
  );
}

export default AboutSection;
