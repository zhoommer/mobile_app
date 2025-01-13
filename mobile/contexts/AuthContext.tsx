import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import * as SecureStore from "expo-secure-store";
import { AuthService } from "@/api/services/authService";
import type { LoginRequest } from "@/types/api/request/loginRequest";
import { getToken, setToken } from "@/utils/tokenActions";
import { Text } from "react-native";

interface AuthContextData {
  user: User | null;
  loading: boolean;
  signIn: (credentials: LoginRequest) => Promise<void>;
  signOut: () => Promise<void>;
}

interface User {
  token?: string;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const authService = new AuthService();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadToken = async () => {
      setLoading(true);
      const token = await getToken();
      if (token && token !== null) {
        setUser({ isAuthenticated: true });
      } else {
        setUser({ isAuthenticated: false });
      }
      setLoading(false);
    };
    loadToken();
  }, []);

  const signIn = async (credentials: LoginRequest) => {
    try {
      const response = await authService.login(credentials);
      await setToken(response.access);
      setUser({ token: response.access, isAuthenticated: true });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {loading ? <Text>Loading...</Text> : children}
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
