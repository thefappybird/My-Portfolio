import React from "react";
import { Button } from "../ui/button";

function EndSection() {
  return (
    <section
      id="end-section"
      className="min-h-[50vh] max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-6 pb-3 mb-2"
    >
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Let's work together
        </h1>
        <p className="main-text text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance ">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>
      <Button className="p-6">
        <a href="#hero-section" className="text-xl">
          Contact Me
        </a>
      </Button>
    </section>
  );
}

export default EndSection;
