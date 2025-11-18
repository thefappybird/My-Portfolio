import React from "react";
import { CardContent } from "../../ui/card";
import {
  Angular,
  Css,
  DotNet,
  Html,
  Javascript,
  MongoDB,
  NextJS,
  NodeJS,
  Postman,
  ReactJS,
  ReactNative,
  Redux,
  Tailwind,
  TypeScript,
  VueJS,
} from "@/components/shared/Badges";

function TechStack() {
  return (
    <CardContent className="flex gap-2 flex-wrap">
      <Html />
      <Css />
      <Javascript />
      <TypeScript />
      <ReactJS />
      <NextJS />
      <Tailwind />
      <Redux />
      <Angular />
      <VueJS />
      <NodeJS />
      <MongoDB />
      <Postman />
      <ReactNative />
      <DotNet />
    </CardContent>
  );
}

export default TechStack;
