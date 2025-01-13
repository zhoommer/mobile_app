import { useField } from "formik";
import { View, TextInput, StyleProp } from "react-native";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

interface IProps {
  name: string;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
}

export default function TextInputComponent(props: IProps) {
  const [field] = useField(props.name);
  return (
    <View>
      <TextInput
        onChangeText={() => field.onChange(props.name)}
        onBlur={() => field.onBlur(props.name)}
        value={field.value}
        placeholder={props.placeholder}
        style={props.style}
      />
    </View>
  );
}
