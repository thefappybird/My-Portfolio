"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import CardHead from "../CardHead";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import Experience from "./Experience";

function SecondaryInfo() {
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
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
