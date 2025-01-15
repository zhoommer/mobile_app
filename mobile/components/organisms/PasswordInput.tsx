import React, { useState } from "react";
import { useField } from "formik";
import useInputTheme from "@/styles/TextInputStyle";
import { View, TextInput } from "react-native";
import LockIcon from "../atoms/icons/LockIcon";
import EyeIcon from "../atoms/icons/EyeIcon";
import EyeOffIcon from "../atoms/icons/EyeOffIcon";

interface IProps {
  name: string;
  placeholder?: string;
}

export default function PasswordInput(props: IProps) {
  const [field, meta] = useField(props.name);
  const [showPassword, setShowPassword] = useState(false);
  const { textInputStyle } = useInputTheme(
    meta.error && meta.touched ? true : false,
  );

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <View>
      <TextInput
        onChangeText={field.onChange(props.name)}
        onBlur={field.onBlur(props.name)}
        value={field.value}
        placeholder={props.placeholder}
        placeholderTextColor={meta.error && meta.touched ? "#f44336" : "#fff"}
        style={textInputStyle.input}
        secureTextEntry={!showPassword}
      />
      <LockIcon />
      {showPassword ? (
        <EyeIcon toggleShow={toggleShowPassword} />
      ) : (
        <EyeOffIcon toggleShow={toggleShowPassword} />
      )}
    </View>
  );
}
