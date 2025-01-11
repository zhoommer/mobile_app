import * as SecureStore from "expo-secure-store";

export async function getToken() {
  try {
    const token = await SecureStore.getItemAsync("token");
    if (token) {
      console.log("Token retrieved", token);
      return token;
    } else {
      console.log("No token found!");
      return null;
    }
  } catch (error) {
    console.log("Error retrieving token: ", error);
    return null;
  }
}
