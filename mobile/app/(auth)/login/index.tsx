import LoginForm from "@/components/templates/LoginForm";
import { View, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container_box}>
        <LoginForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    height: 800,
    backgroundColor: "#ddd",
    padding: 20,
    marginTop: 20,
  },
  container_box: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#eee",
  },
});
