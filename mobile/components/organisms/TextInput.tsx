import React from "react";
import { View, TextInput } from "react-native";
import { useField } from "formik";
import useInputTheme from "@/styles/TextInputStyle";

interface IProps {
  name: string;
  placeholder?: string;
  icon?: React.ReactNode;
}

export default function TextInputComponent(props: IProps) {
  const [field, meta] = useField(props.name);
  const { textInputStyle } = useInputTheme(
    meta.error && meta.touched ? true : false,
  );

  return (
    <View>
      <TextInput
        onChangeText={field.onChange(props.name)}
        onBlur={field.onBlur(props.name)}
        value={field.value}
        placeholder={props.placeholder}
        style={textInputStyle.input}
        placeholderTextColor={meta.error && meta.touched ? "#f44336" : "#fff"}
      />
      {props.icon}
    </View>
  );
}
