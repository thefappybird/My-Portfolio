import React from "react";
import { Card, CardContent } from "../../ui/card";

function PrimaryInfo() {
  return (
    <>
      <h1 className="text-4xl">Professional Summary</h1>
      <Card className="gap-2.5 max-h-fit">
        <CardContent>
          <p className="main-text text-muted-foreground">
            <span>Full Stack Developer</span> with passion about crafting
            accessible, pixel-perfect user interfaces that blend thoughtful
            design with robust engineering.{" "}
            <span>Improved Accenture’s Internal QA System</span>, refactored
            bloated code, designed modular and responsive UI elements, improved
            runtime and efficiency.{" "}
            <span>Spearheaded a Hotel Management System project</span> for
            AccessSoft Solutions, boosted employee efficiency and overall sales
            by a significant amount. Specializing in{" "}
            <span>building responsive, accessible applications</span> that
            deliver exceptional user experiences across all devices and
            platforms.
          </p>
        </CardContent>
      </Card>
    </>
  );
}

export default PrimaryInfo;
