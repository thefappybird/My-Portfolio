import { CardDescription, CardTitle } from "@/components/ui/card";
import { CollapsibleContent } from "@/components/ui/collapsible";
import React from "react";

function Work() {
  return (
    <CollapsibleContent className="space-y-2">
      <div className="flex flex-col gap-0.5">
        <CardTitle>
          AccessSoft Software Solutions, Inc. | Full-Stack Developer
        </CardTitle>
        <CardDescription>
          Feb 2024 - Nov 2024 | Cebu City, Philippines
        </CardDescription>
      </div>
      <div className="flex flex-col gap-0.5">
        <CardTitle>Accenture, Inc. | Associate Software Engineer</CardTitle>
        <CardDescription>
          Nov 2024 - Present | Cebu City, Philippines
        </CardDescription>
      </div>
    </CollapsibleContent>
  );
}

export default Work;
