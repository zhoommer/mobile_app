import { useState } from "react";
import { textInputStyle } from "@/styles/TextInputStyle";
import { View } from "react-native";
import TextInputComponent from "../atoms/inputs/TextInput";
import EyeIcon from "../atoms/icons/EyeIcon";
import EyeOffIcon from "../atoms/icons/EyeOffIcon";
import LockIcon from "../atoms/icons/LockIcon";
import { Field } from "formik";

export default function PasswordInput() {
  const [show, setShow] = useState<boolean>(false);

  function toggleShow() {
    setShow(!show);
  }
  return (
    <View>
      <Field
        name="password"
        component={TextInputComponent}
        placeholder="Password"
        style={textInputStyle.input}
      />
      <LockIcon />
      {show ? (
        <EyeIcon toggleShow={toggleShow} />
      ) : (
        <EyeOffIcon toggleShow={toggleShow} />
      )}
    </View>
  );
}
