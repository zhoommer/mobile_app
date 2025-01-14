import { View, TextInput, Text } from "react-native";
import UserIcon from "../atoms/icons/UserIcon";
import { useField } from "formik";
import useInputTheme from "@/styles/TextInputStyle";
import useErrorTheme from "@/styles/ErrorMessage";

export default function UserInput() {
  const [field, meta] = useField("username");
  const { textInputStyle } = useInputTheme();
  const { errorMessage } = useErrorTheme();

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
