import React from "react";
import { ThemeSwitcher } from "./themes/theme-switcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

function Header() {
  return (
    <div className="flex justify-end items-center py-2 border-b">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button title="Open Theme Switcher">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Change Theme
                  </NavigationMenuLink>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <ThemeSwitcher />
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Header;
