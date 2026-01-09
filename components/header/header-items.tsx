import React from "react";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../themes/theme-switcher";

function HeaderItems({
  navItems,
  handleClick,
}: {
  navItems: { label: string; href: string }[];
  handleClick: () => void;
}) {
  return (
    <>
      {navItems.map((item) => (
        <Button
          variant="ghost"
          key={item.href}
          onClick={handleClick}
          className="w-full justify-start md:w-fit md:flex md:justify-center"
        >
          <a href={item.href} className="text-sm font-medium w-full text-left">
            {item.label}
          </a>
        </Button>
      ))}
      <ThemeSwitcher />
    </>
  );
}

export default HeaderItems;
