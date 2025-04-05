"use client";

import { Badge } from "@/components/ui/badge";

import React from "react";

const TechBadge = ({
  lightClass,
  darkClass,
  children,
}: {
  lightClass: string;
  darkClass: string;
  children: React.ReactNode;
}) => {
  return <Badge className={`${lightClass} ${darkClass}`}>{children}</Badge>;
};

export function Angular() {
  return (
    <TechBadge
      lightClass="bg-orange-500 text-white"
      darkClass="dark:bg-orange-600"
    >
      Angular
    </TechBadge>
  );
}
export function HtmlCss() {
  return (
    <TechBadge
      lightClass="bg-orange-500 text-white"
      darkClass="dark:bg-orange-600"
    >
      HTML/CSS
    </TechBadge>
  );
}
export function Javascript() {
  return (
    <TechBadge
      lightClass="bg-yellow-500 text-black"
      darkClass="dark:bg-yellow-600 "
    >
      JavaScript
    </TechBadge>
  );
}

export function MongoDB() {
  return (
    <TechBadge
      lightClass="bg-green-500 text-black"
      darkClass="dark:bg-green-600 "
    >
      MongoDB
    </TechBadge>
  );
}

export function NextJS() {
  return (
    <TechBadge
      lightClass="bg-gray-900 text-white"
      darkClass="dark:bg-white dark:text-black"
    >
      NextJS
    </TechBadge>
  );
}

export function NodeJS() {
  return (
    <TechBadge
      lightClass="bg-green-600 text-black"
      darkClass="dark:bg-green-700 dark:text-white"
    >
      NodeJS
    </TechBadge>
  );
}

export function Postman() {
  return (
    <TechBadge
      lightClass="bg-orange-400 text-black"
      darkClass="dark:bg-orange-500"
    >
      Postman
    </TechBadge>
  );
}

export function ReactJS() {
  return (
    <TechBadge lightClass="bg-blue-600 text-white" darkClass="dark:bg-blue-700">
      ReactJS
    </TechBadge>
  );
}

export function Redux() {
  return (
    <TechBadge
      lightClass="bg-purple-500 text-white"
      darkClass="dark:bg-purple-600"
    >
      Redux
    </TechBadge>
  );
}

export function ReactNative() {
  return (
    <TechBadge lightClass="bg-blue-500 text-white" darkClass="dark:bg-blue-600">
      React Native
    </TechBadge>
  );
}
export function Prisma() {
  return (
    <TechBadge
      lightClass="bg-purple-600 text-white"
      darkClass="dark:bg-purple-700 "
    >
      Prisma
    </TechBadge>
  );
}

export function MySQL() {
  return (
    <TechBadge
      lightClass="bg-orange-500 text-white"
      darkClass="dark:bg-orange-600"
    >
      MySQL
    </TechBadge>
  );
}
export function Tailwind() {
  return (
    <TechBadge lightClass="bg-sky-400 text-white" darkClass="dark:bg-sky-500">
      Tailwind
    </TechBadge>
  );
}
