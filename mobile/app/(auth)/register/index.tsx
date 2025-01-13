import { Link } from "expo-router";
import { View } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={{ marginTop: 50 }}>
      <Link href={"/(auth)/login"}>Back to login</Link>
    </View>
  );
}
