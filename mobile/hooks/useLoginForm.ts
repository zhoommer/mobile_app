import * as Yup from "yup";
import type { LoginRequest } from "@/types/api/request/loginRequest";
import { useAuth } from "@/contexts/AuthContext";

export default function useLoginForm() {
  const { signIn } = useAuth();

  const initialState = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is a required field!"),
    password: Yup.string().required("Password is a required field!"),
  });

  async function handleLogin(values: LoginRequest) {
    await signIn(values);
  }

  return {
    initialState,
    validationSchema,
    handleLogin,
  };
}
