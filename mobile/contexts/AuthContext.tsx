import React, { createContext, useState, useEffect, useContext } from "react";
import { getToken, setToken } from "@/utils/tokenActions";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { AuthService } from "@/api/services/authService";
import Loading from "@/components/atoms/spinners/Loading";
import type { LoginRequest } from "@/types/api/request/loginRequest";

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
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const authService = new AuthService();
  const router = useRouter();
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
    setLoading(true);
    try {
      const response = await authService.login(credentials);
      await setToken(response.access);
      setUser({ token: response.access, isAuthenticated: true });
      router.push("/(tabs)");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {loading ? <Loading /> : children}
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
