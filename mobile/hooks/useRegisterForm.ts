import { useState } from "react";
import { AuthService } from "@/api/services/authService";
import type { RegisterRequest } from "@/types/api/request/registerRequest";
import * as Yup from "yup";
import { useRouter } from "expo-router";

export default function useRegisterForm() {
  const authService = new AuthService();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const initialState: RegisterRequest = {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
    phone_number: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().email(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    password: Yup.string().required(),
    re_password: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must mathc")
      .required(),
  });

  async function handleRegister(values: RegisterRequest) {
    setLoading(true);
    try {
      await authService.register(values);
      router.push("/(auth)/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    initialState,
    validationSchema,
    handleRegister,
  };
}
