import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Feather";

export default function ConnectWithGoogleButton() {
  return (
    <TouchableOpacity style={styles.btn}>
      <Icon name="mail" size={22} style={{ color: "#fff" }} />
      <Text style={styles.text}>Connect With Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 30,
    backgroundColor: "#b45309",
    padding: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: 1,
  },
});
