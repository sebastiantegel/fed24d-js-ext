import { createContext } from "react";

export type Theme = {
  name: string;
  bgColor: string;
  color: string;
};

type Themes = {
  dark: Theme;
  light: Theme;
};

export const themes: Themes = {
  dark: {
    name: "Night",
    bgColor: "purple",
    color: "white",
  },
  light: {
    name: "Day",
    bgColor: "white",
    color: "black",
  },
};

export const ThemeContext = createContext<Theme>(themes.light);
