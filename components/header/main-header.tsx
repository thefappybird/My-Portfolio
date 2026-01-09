"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import HeaderItems from "./header-items";
import { Menu, X } from "lucide-react";
const navItems = [
  { label: "About", href: "#about-section" },
  { label: "Projects", href: "#projects-section" },
  { label: "Work & Experience", href: "#experience-section" },
  { label: "Contact", href: "#hero-section" },
];
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-2 flex justify-between items-center py-2 border-b bg-background/80 backdrop-blur-lg">
      <a
        href="#hero-section"
        className="w-fit hover:opacity-80 transition-opacity"
      >
        <h1 className="text-3xl font-bold">Alexander Banaag </h1>
      </a>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <div
        className={`fixed z-50 top-11 right-0 max-w-[200px] md:max-w-full md:static flex gap-0.5 flex-end items-center ${
          isOpen
            ? "flex-col w-full mt-2 md:mt-0 md:flex-row md:w-auto py-4 px-2 bg-background/90"
            : "hidden md:flex"
        }`}
      >
        <HeaderItems navItems={navItems} handleClick={() => setIsOpen(false)} />
      </div>
    </div>
  );
}

export default Header;
