import { useTheme } from "@/contexts/ThemeContext";
import { StyleSheet } from "react-native";

export default function useFlatListTheme() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    box: {
      borderColor: theme.colors.border,
      borderWidth: 0.7,
      borderStyle: "solid",
      borderRadius: 20,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 10,
      minHeight: 200,
    },
    flexBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    text: {
      backgroundColor: theme.colors.surface,
      color: theme.colors.text_secondary,
      padding: 15,
      marginTop: 10,
      borderRadius: 10,
      elevation: 3,
    },
  });

  return {
    styles,
  };
}
