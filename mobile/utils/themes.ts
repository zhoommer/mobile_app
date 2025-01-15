import type { ThemeType } from "@/types/theme";

export const lightTheme: ThemeType = {
  dark: false,
  colors: {
    background: "#f5faff",
    surface: "#fff",
    text_primary: "#2a2a2a",
    text_secondary: "#4f4f4f",
    input_bg: "#e8f4fb",
    button_primary: "#64b2d8",
    button_secondary: "#3086c3",
    button_text: "#fff",
    success: "#4caf50",
    error: "#f44336",
    icon: "#3086c3",
    border: "#d9eaf5",
  },
};

export const darkTheme: ThemeType = {
  dark: true,
  colors: {
    background: "#121212",
    surface: "#1e1e1e",
    text_primary: "#e0e0e0",
    text_secondary: "#b3b3b3",
    input_bg: "#2a2a2a",
    button_primary: "#64b2d8",
    button_secondary: "#3086c3",
    button_text: "#fff",
    success: "#81c784",
    error: "#e57373",
    icon: "#64b2d8",
    border: "#3a3a3a",
  },
};
