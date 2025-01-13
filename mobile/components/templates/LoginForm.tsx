import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { textInputStyle } from "@/styles/TextInputStyle";
import { errorMessage } from "@/styles/ErrorMessage";
import { Formik } from "formik";
import { Text, TextInput, View } from "react-native";
import * as Yup from "yup";
import LoginButton from "../atoms/buttons/LoginButton";
import UserIcon from "../atoms/icons/UserIcon";
import LockIcon from "../atoms/icons/LockIcon";
import EyeIcon from "../atoms/icons/EyeIcon";
import EyeOffIcon from "../atoms/icons/EyeOffIcon";
import RegisterButton from "../atoms/buttons/RegisterButton";
import type { LoginRequest } from "@/types/api/request/loginRequest";

export default function LoginForm() {
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

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
  return (
    <View>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View>
              <TextInput
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Username"
                style={textInputStyle.input}
              />
              {errors.username && touched.username && (
                <Text style={errorMessage.error}>{errors.username}</Text>
              )}
              <UserIcon />
            </View>
            <View style={{ marginTop: 35 }}>
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Password"
                style={textInputStyle.input}
                secureTextEntry={!showPassword}
              />
              {errors.password && touched.password && (
                <Text style={errorMessage.error}>{errors.password}</Text>
              )}
              <LockIcon />
              {showPassword ? (
                <EyeIcon toggleShow={toggleShowPassword} />
              ) : (
                <EyeOffIcon toggleShow={toggleShowPassword} />
              )}
            </View>
            <View style={{ marginTop: 50 }}>
              <LoginButton handleSubmit={handleSubmit} />
              <RegisterButton />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
