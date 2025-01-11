import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

// Define the shape of the context data
interface AuthContextData {
  user: User | null;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

interface User {
  token: string;
}

// Create the context with an undefined default value
const AuthContext = createContext<AuthContextData | undefined>(undefined);

// Define a type for the children prop
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>({ token: "dummy-token" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the token from secure storage and verify the user
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        // Verify token and set user
        setUser({ token });
      } else {
        router.push("/(auth)/login");
      }
      setLoading(false);
    };
    loadToken();
  }, []);

  const signIn = async (username: string, password: string) => {
    // Implement sign-in logic here
    // Assume successful sign-in returns a token
    const token = "dummy-token";
    await SecureStore.setItemAsync("token", token);
    setUser({ token });
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
