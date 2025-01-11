import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function LoginButton() {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#06b6d4",
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 1,
  },
});
