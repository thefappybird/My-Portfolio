import React from "react";
import { CardContent } from "../../ui/card";
import {
  Angular,
  HtmlCss,
  Javascript,
  MongoDB,
  NextJS,
  NodeJS,
  Postman,
  ReactJS,
  ReactNative,
  Redux,
  Tailwind,
} from "@/components/shared/Badges";

function TechStack() {
  return (
    <CardContent className="flex gap-2 flex-wrap">
      <HtmlCss />
      <Javascript />
      <ReactJS />
      <NextJS />
      <Tailwind />
      <Redux />
      <Angular />
      <NodeJS />
      <MongoDB />
      <Postman />
      <ReactNative />
    </CardContent>
  );
}

export default TechStack;
