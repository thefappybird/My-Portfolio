"use client";
import { Card, CardDescription } from "@/components/ui/card";
import React from "react";
import CardHead from "../CardHead";
import Experience from "./Experience";

function SecondaryInfo() {
  return (
    <Card className="gap-2.5 h-fit">
      <CardHead title="Experiences" description="School And Work">
        <CardDescription>Click on the buttons to expand.</CardDescription>
      </CardHead>
      <Experience title="Educational Background" />
      <Experience title="Work Experience" />
    </Card>
  );
}

export default SecondaryInfo;
