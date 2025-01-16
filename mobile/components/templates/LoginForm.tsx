import { useAuth } from "@/contexts/AuthContext";
import useLoginForm from "@/hooks/useLoginForm";
import { Formik } from "formik";
import { View } from "react-native";
import LoginButton from "../atoms/buttons/LoginButton";
import RegisterButton from "../atoms/buttons/RegisterButton";
import PasswordInput from "../organisms/PasswordInput";
import ConnectWithGoogleButton from "../atoms/buttons/ConnectWithGoogle";
import UserIcon from "../atoms/icons/UserIcon";
import TextInputComponent from "../organisms/TextInput";
import VStack from "../atoms/stacks/VStack";

export default function LoginForm() {
  const { loading } = useAuth();
  const { initialState, validationSchema, handleLogin } = useLoginForm();

  return (
    <View>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <VStack>
            <TextInputComponent
              name="username"
              placeholder={
                errors.username && touched.username
                  ? "Username is required"
                  : "Username"
              }
              icon={<UserIcon />}
            />
            <PasswordInput
              name="password"
              placeholder={
                errors.password && touched.password
                  ? "Password is required"
                  : "Password"
              }
            />
            <View style={{ marginTop: 50 }}>
              <LoginButton handleSubmit={handleSubmit} loading={loading} />
            </View>
            <View style={{ marginTop: 40 }}>
              <VStack>
                <RegisterButton />
                <ConnectWithGoogleButton />
              </VStack>
            </View>
          </VStack>
        )}
      </Formik>
    </View>
  );
}
