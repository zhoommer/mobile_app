import { View, TextInput, Text } from "react-native";
import UserIcon from "../atoms/icons/UserIcon";
import { textInputStyle } from "@/styles/TextInputStyle";
import { errorMessage } from "@/styles/ErrorMessage";
import { useField } from "formik";

export default function UserInput() {
  const [field, meta] = useField("username");

  return (
    <View>
      <TextInput
        onChangeText={field.onChange("username")}
        onBlur={field.onBlur("username")}
        value={field.value}
        placeholder="Username"
        style={textInputStyle.input}
      />
      {meta.error && meta.touched && (
        <Text style={errorMessage.error}>{meta.error}</Text>
      )}
      <UserIcon />
    </View>
  );
}
