import { View } from "react-native";
import UserIcon from "../atoms/icons/UserIcon";
import TextInputComponent from "../atoms/inputs/TextInput";
import { textInputStyle } from "@/styles/TextInputStyle";

interface IProps {
  name: string;
}

export default function UserInput(props: IProps) {
  return (
    <View>
      <TextInputComponent
        name={props.name}
        placeholder="Username"
        style={textInputStyle.input}
      />
      <UserIcon />
    </View>
  );
}
