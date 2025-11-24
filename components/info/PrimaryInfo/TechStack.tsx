import React from "react";
import { CardContent } from "../../ui/card";
import {
  Angular,
  Azure,
  Css,
  DotNet,
  Html,
  Javascript,
  MongoDB,
  MySQL,
  NextJS,
  NodeJS,
  Postman,
  ReactJS,
  ReactNative,
  Redux,
  Tailwind,
  TypeScript,
  Vercel,
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
      <MySQL />
      <Vercel />
      <Azure />
    </CardContent>
  );
}

export default TechStack;
