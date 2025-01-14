import LoginForm from "@/components/templates/LoginForm";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Circle from "@/components/atoms/circles/Circle";
import LoginUserIcon from "@/components/atoms/icons/LoginUserIcon";
import HalfCircle from "@/components/atoms/circles/HalfCircle";
import { loginScreenStyle as styles } from "@/styles/LoginScreenStyle";

export default function LoginScreen() {
  return (
    <LinearGradient
      colors={["rgba(84,178,216,1)", "rgba(40,98,172,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.box_top}>
        <Text style={styles.box_top_title}>Welcome</Text>
        <View style={styles.iconBox}>
          <View style={styles.iconBoxInner}>
            <LoginUserIcon />
          </View>
          <Circle />
          <HalfCircle />
        </View>
      </View>

      <View style={styles.box_bottom}>
        <LoginForm />
      </View>
    </LinearGradient>
  );
}
