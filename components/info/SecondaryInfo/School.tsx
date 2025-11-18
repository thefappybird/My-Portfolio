import { CardDescription, CardTitle } from "@/components/ui/card";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import React from "react";

function School() {
  return (
    <CollapsibleContent className="space-y-2">
      <div className="flex flex-col gap-0.5">
        <CardTitle>University of Southern Philippines Foundation</CardTitle>
        <CardDescription>2022 - 2024 | Cebu City, Philippines</CardDescription>
      </div>
      <div className="flex flex-col gap-0.5">
        <CardTitle>University of San Carlos</CardTitle>
        <CardDescription>2018 - 2021 | Cebu City, Philippines</CardDescription>
      </div>
    </CollapsibleContent>
  );
}

export default School;
