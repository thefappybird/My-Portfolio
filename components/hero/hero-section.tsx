"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import { HeroContact } from "./hero-contact";
import { useTheme } from "next-themes";

function HeroSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : "dark";
  return (
    <section
      id="hero-section"
      className="min-h-screen flex items-center justify-center relative px-4 w-full mx-auto overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {mounted && (
          <>
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDlwZnlmc3d5MW9raHAydTV2dDhjcTdxZHhxd2V1NWVmZjd2b2Y0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zh1CiotVYB1DO2k8Ep/giphy.gif"
              alt=""
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                currentTheme === "dark" ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="/light-theme-animated-coding-gif-geometric-particle.jpg"
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                currentTheme === "light" ? "opacity-100" : "opacity-0"
              }`}
            />
          </>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-[1]" />

      <div className="max-w-5xl mx-auto text-center z-10">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Alexander Banaag
          </h1>
          <p className="main-text text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance ">
            <span>Full-stack developer</span> passionate about building{" "}
            <span>accessible</span>, <span>pixel-perfect interfaces</span> that
            blend design with engineering
          </p>
        </div>
        <HeroContact />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#projects-section">
              <h1 className="text-lg">View My Work</h1>
            </a>
          </Button>
        </div>
      </div>

      <a
        href="#about-section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </a>
    </section>
  );
}

export default HeroSection;
