import type { ThemeType } from "@/types/theme";

export const lightTheme: ThemeType = {
  dark: false,
  colors: {
    primary: "#64b2d8",
    background: "#3086c3",
    text: "#fff",
    icon: "#1b1e3d",
    card: "#f6f6f6",
    border: "#1b1e3d",
  },
};

export const darkTheme: ThemeType = {
  dark: true,
  colors: {
    primary: "#6d73b0",
    background: "#1b1e3d",
    text: "#d4d4d8",
    icon: "#d4d4d8",
    card: "#1e1e1e",
    border: "#d4d4d8",
  },
};
