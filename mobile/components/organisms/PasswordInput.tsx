import { useState } from "react";
import { useField } from "formik";
import { textInputStyle } from "@/styles/TextInputStyle";
import { errorMessage } from "@/styles/ErrorMessage";
import { View, TextInput, Text } from "react-native";
import LockIcon from "../atoms/icons/LockIcon";
import EyeIcon from "../atoms/icons/EyeIcon";
import EyeOffIcon from "../atoms/icons/EyeOffIcon";

export default function PasswordInput() {
  const [field, meta] = useField("password");
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <View>
      <TextInput
        onChangeText={field.onChange("password")}
        onBlur={field.onBlur("password")}
        value={field.value}
        placeholder="Password"
        style={textInputStyle.input}
        secureTextEntry={!showPassword}
      />
      {meta.error && meta.touched && (
        <Text style={errorMessage.error}>{meta.error}</Text>
      )}
      <LockIcon />
      {showPassword ? (
        <EyeIcon toggleShow={toggleShowPassword} />
      ) : (
        <EyeOffIcon toggleShow={toggleShowPassword} />
      )}
    </View>
  );
}
