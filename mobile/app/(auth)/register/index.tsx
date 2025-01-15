import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RegisterForm from "@/components/templates/RegisterForm";
import Circle from "@/components/atoms/circles/Circle";
import LoginUserIcon from "@/components/atoms/icons/LoginUserIcon";
import HalfCircle from "@/components/atoms/circles/HalfCircle";
import useLoginTheme from "@/styles/LoginScreenStyle";
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme } from "@/utils/themes";

export default function RegisterScreen() {
  const { theme } = useTheme();
  const { styles } = useLoginTheme();
  return (
    <LinearGradient
      colors={
        theme === darkTheme
          ? ["rgba(18,18,18,1)", "rgba(27,30,61,1)"]
          : ["rgba(245,250,255,1)", "rgba(40,98,172,1)"]
      }
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
        <RegisterForm />
      </View>
    </LinearGradient>
  );
}
