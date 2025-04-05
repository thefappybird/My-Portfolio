"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";
import Work from "./Work";
import School from "./School";

function Experience({ title }: { title: string }) {
  const [isOpen, setIsOpen] = useState(
    title.includes("Educational") ? true : false
  );

  return (
    <CardContent className="flex flex-col gap-2">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between ">
          <h4 className="text-sm font-semibold">{title}</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        {title.includes("Educational") ? <School /> : <Work />}
      </Collapsible>
    </CardContent>
  );
}

export default Experience;
