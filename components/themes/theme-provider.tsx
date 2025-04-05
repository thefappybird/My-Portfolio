"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";
import { Theme, Mode } from "@/lib/models/models";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultMode?: Mode;
}

interface ThemeContextType {
  theme: Theme;
  mode: Mode;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  defaultMode = "light",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (window.localStorage.getItem("theme") as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("mode") as Mode;
      if (stored) return stored;

      // Detect system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
    }
    return defaultMode;
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;

      // Remove previous theme classes
      root.classList.remove(
        "light-light",
        "red-light",
        "green-light",
        "light-dark",
        "red-dark",
        "green-dark"
      );

      // Add current theme class
      window.localStorage.setItem("theme", theme);
      window.localStorage.setItem("mode", mode);

      root.classList.add(`${theme}-${mode}`);
    }
  }, [theme, mode]);

  const value = {
    theme,
    mode,
    setTheme,
    setMode,
  };

  if (!isMounted) {
    return null; // Avoid rendering until the client has mounted
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
