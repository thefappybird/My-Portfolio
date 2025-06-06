import React from "react";
import { ThemeSwitcher } from "./themes/theme-switcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function Header() {
  return (
    <div className="flex justify-end items-center py-2 border-b">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <ThemeSwitcher />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Header;
