import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

export const getToken = async (): Promise<string | null> => {
  try {
    const token = await SecureStore.getItemAsync("token");
    return token;
  } catch (error) {
    console.error("Error retrieving token:", error);
    return null;
  }
};

export const setToken = async (token: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync("token", token);
  } catch (error) {
    console.error("Error saving token:", error);
  }
};

export const removeToken = async (): Promise<void> => {
  const router = useRouter();
  await SecureStore.deleteItemAsync("token");

  router.push("/(auth)/login");
};
