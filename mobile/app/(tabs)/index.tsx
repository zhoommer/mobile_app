import { View, Text, Button } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

export default function Dashboard() {
  const router = useRouter();
  async function logOut() {
    await SecureStore.deleteItemAsync("token");
    router.push("/(auth)/login");
  }
  return (
    <View>
      <Text>Dashboard Screen</Text>
      <Button title="Logout" onPress={() => logOut()} />
    </View>
  );
}
