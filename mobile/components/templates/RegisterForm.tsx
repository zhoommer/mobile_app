import { Formik } from "formik";
import { View } from "react-native";
import PasswordInput from "../organisms/PasswordInput";
import UserIcon from "../atoms/icons/UserIcon";
import TextInputComponent from "../organisms/TextInput";
import EmailIcon from "../atoms/icons/EmailIcon";
import SubmitButton from "../atoms/buttons/SubmitButton";
import VStack from "../atoms/stacks/VStack";
import useRegisterForm from "@/hooks/useRegisterForm";
import PhoneIcon from "../atoms/icons/PhoneIcon";

export default function RegisterForm() {
  const { loading, initialState, validationSchema, handleRegister } =
    useRegisterForm();

  return (
    <View>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => handleRegister(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <VStack>
            <TextInputComponent
              name="username"
              placeholder={
                errors.username && touched.username
                  ? errors.username
                  : "Username"
              }
              icon={<UserIcon />}
            />
            <TextInputComponent
              name="email"
              placeholder={
                errors.email && touched.email ? errors.email : "Email"
              }
              icon={<EmailIcon />}
            />

            <TextInputComponent
              name="first_name"
              placeholder={
                errors.first_name && touched.first_name
                  ? errors.first_name
                  : "First name"
              }
              icon={<UserIcon />}
            />

            <TextInputComponent
              name="last_name"
              placeholder={
                errors.last_name && touched.last_name
                  ? errors.last_name
                  : "Last name"
              }
              icon={<UserIcon />}
            />

            <TextInputComponent
              name="phone_number"
              placeholder={
                errors.phone_number && touched.phone_number
                  ? errors.phone_number
                  : "Phone number"
              }
              icon={<PhoneIcon />}
            />
            <PasswordInput
              name="password"
              placeholder={
                errors.password && touched.password
                  ? errors.password
                  : "Password"
              }
            />

            <PasswordInput
              name="re_password"
              placeholder={
                errors.re_password && touched.re_password
                  ? errors.re_password
                  : "Confirm password"
              }
            />

            <SubmitButton
              name="Register"
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </VStack>
        )}
      </Formik>
    </View>
  );
}
