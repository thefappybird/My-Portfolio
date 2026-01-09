import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Angular,
  Azure,
  Csharp,
  Css,
  DotNet,
  Express,
  Git,
  Html,
  Javascript,
  MongoDB,
  MsSql,
  MySQL,
  NextJS,
  NodeJS,
  Postman,
  Prisma,
  ReactJS,
  ReactNative,
  Redux,
  Sass,
  Tailwind,
  TypeScript,
  Vercel,
  VueJS,
} from "@/components/shared/Badges";
import SharedCard from "@/components/shared/shared-card";
const cards = [
  {
    title: "Frontend Frameworks",
    content: (
      <>
        <Html />
        <Css />
        <Javascript />
        <TypeScript />
        <ReactJS />
        <NextJS />
        <ReactNative />
        <Redux />
        <Angular />
        <VueJS />
        <Tailwind />
        <Sass />
      </>
    ),
  },
  {
    title: "Backend & Database Frameworks",
    content: (
      <>
        <NodeJS />
        <Csharp />
        <DotNet />
        <Express />
        <MongoDB />
        <MySQL />
        <MsSql />
      </>
    ),
  },
  {
    title: "Other",
    content: (
      <>
        <Postman />
        <Prisma />
        <Git />
        <Vercel />
        <Azure />
      </>
    ),
  },
];

function TechStack() {
  return (
    <>
      <h1 className="text-4xl">Tech Stack</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {cards.map((card, index) => (
          <SharedCard
            key={card.title}
            index={index}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </>
  );
}

export default TechStack;
