import { useTheme } from "@/contexts/ThemeContext";
import { StyleSheet } from "react-native";

export default function useExpenseTheme() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
      padding: 30,
    },
  });

  return {
    styles,
  };
}
