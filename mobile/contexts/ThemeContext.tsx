import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "@/utils/themes";
import type { ThemeType } from "@/types/theme";

interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}

interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeType>(
    systemScheme === "dark" ? darkTheme : lightTheme,
  );

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme.dark ? lightTheme : darkTheme));
  }

  useEffect(() => {
    setTheme(systemScheme === "dark" ? darkTheme : lightTheme);
  }, [systemScheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
