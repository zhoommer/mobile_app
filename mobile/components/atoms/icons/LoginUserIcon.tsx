import Icon from "@expo/vector-icons/Feather";
import { StyleSheet } from "react-native";

export default function LoginUserIcon() {
  return <Icon name="user" size={100} style={styles.icon} />;
}

const styles = StyleSheet.create({
  icon: {
    position: "relative",
    left: 50,
    top: 40,
    color: "#1b1e3d",
  },
});
