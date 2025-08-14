import React, { createContext, useContext, useMemo, useState } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";

type Palette = {
  bg: string;
  text: string;
  subtext: string;
  primary: string;
  card: string;
};

const LIGHT: Palette = {
  bg: "#FFFFFF",
  text: "#0E1B1B",
  subtext: "#5B7673",
  primary: "#0CA678",
  card: "#F3F6F6"
};

const DARK: Palette = {
  bg: "#0B1416",
  text: "#E6F1EF",
  subtext: "#9CB6B2",
  primary: "#27C2A5",
  card: "#132024"
};

type ThemeCtx = { palette: Palette; mode: "light" | "dark"; toggle: () => void };

const ThemeContext = createContext<ThemeCtx | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const system = useColorScheme() as ColorSchemeName;
  const [mode, setMode] = useState<"light" | "dark">(system === "dark" ? "dark" : "light");

  const value = useMemo<ThemeCtx>(() => {
    const palette = mode === "dark" ? DARK : LIGHT;
    return { palette, mode, toggle: () => setMode((m) => (m === "dark" ? "light" : "dark")) };
  }, [mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};


