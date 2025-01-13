import * as SecureStore from "expo-secure-store";

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
