"use client";
import { useTheme } from "@/components/themes/theme-provider";
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
  const { theme } = useTheme();
  const badgeClass = theme === "dark" ? darkClass : lightClass;
  return <Badge className={badgeClass}>{children}</Badge>;
};

export function Angular() {
  return (
    <TechBadge
      lightClass="bg-orange-500 text-white"
      darkClass="bg-orange-600 text-white"
    >
      Angular
    </TechBadge>
  );
}
export function HtmlCss() {
  return (
    <TechBadge
      lightClass="bg-orange-500 text-white"
      darkClass="bg-orange-600 text-white"
    >
      HTML/CSS
    </TechBadge>
  );
}
export function Javascript() {
  return (
    <TechBadge
      lightClass="bg-yellow-500 text-black"
      darkClass="bg-yellow-600 text-black"
    >
      JavaScript
    </TechBadge>
  );
}

export function MongoDB() {
  return (
    <TechBadge
      lightClass="bg-green-500 text-black"
      darkClass="bg-green-600 text-black"
    >
      MongoDB
    </TechBadge>
  );
}

export function NextJS() {
  return (
    <TechBadge
      lightClass="bg-gray-900 text-white"
      darkClass="bg-white text-black"
    >
      NextJS
    </TechBadge>
  );
}

export function NodeJS() {
  return (
    <TechBadge
      lightClass="bg-green-600 text-black"
      darkClass="bg-green-700 text-white"
    >
      NodeJS
    </TechBadge>
  );
}

export function Postman() {
  return (
    <TechBadge
      lightClass="bg-orange-400 text-black"
      darkClass="bg-orange-500 text-black"
    >
      Postman
    </TechBadge>
  );
}

export function ReactJS() {
  return (
    <TechBadge
      lightClass="bg-blue-600 text-white"
      darkClass="bg-blue-700 text-white"
    >
      ReactJS
    </TechBadge>
  );
}

export function Redux() {
  return (
    <TechBadge
      lightClass="bg-purple-500 text-white"
      darkClass="bg-purple-600 text-white"
    >
      Redux
    </TechBadge>
  );
}

export function ReactNative() {
  return (
    <TechBadge
      lightClass="bg-blue-500 text-white"
      darkClass="bg-blue-600 text-white"
    >
      React Native
    </TechBadge>
  );
}
export function Prisma() {
  return (
    <TechBadge
      lightClass="bg-purple-600 text-white"
      darkClass="bg-purple-700 text-white"
    >
      Prisma
    </TechBadge>
  );
}

export function MySQL() {
  return (
    <TechBadge
      lightClass="bg-orange-500 text-white"
      darkClass="bg-orange-600 text-white"
    >
      MySQL
    </TechBadge>
  );
}
export function Tailwind() {
  return (
    <TechBadge
      lightClass="bg-sky-400 text-white"
      darkClass="bg-sky-500 text-white"
    >
      Tailwind
    </TechBadge>
  );
}
