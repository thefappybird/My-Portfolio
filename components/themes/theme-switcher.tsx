"use client";

import { Moon, Sun } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Theme } from "@/lib/models/models";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-2 items-center p-2">
      <Tabs
        defaultValue={theme}
        onValueChange={(value) => setTheme(value as Theme)}
      >
        <TabsList className="bg-muted p-1 rounded-full shadow-md">
          <TabsTrigger
            value="light"
            className="data-[state=active]:bg-white  data-[state=active]:text-black transition-colors rounded-full p-2"
          >
            <Sun className="h-5 w-5" />
          </TabsTrigger>
          <TabsTrigger
            value="dark"
            className="data-[state=active]:bg-gray-700 data-[state=active]:text-white transition-colors rounded-full p-2"
          >
            <Moon className="h-5 w-5" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
