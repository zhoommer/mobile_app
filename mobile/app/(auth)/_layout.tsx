import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="login/index" />
      <Stack.Screen name="register/index" />
    </Stack>
  );
}
