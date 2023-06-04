import { Landing3 } from "@assets/images";
import { BaseText } from "@components/BaseText";
import { BaseButton } from "@components/Button";
import { BaseInput } from "@components/Input";
import { BaseNavigator, Fonts } from "@interfaces";
import { Colors, Sizes } from "@theme";
import {
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthStyles } from "./styles";
import { useRegister } from "@network/hooks";

interface IProps {
  navigation: BaseNavigator;
}

export const RegisterScreen = ({ navigation }: IProps) => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    isLoading,
  } = useRegister({ navigation });
  return (
    <ImageBackground source={Landing3} style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)" }}>
        <SafeAreaView style={[AuthStyles.screen_2, AuthStyles.screen_gutter]}>
          <View style={{ flex: 1 }}>
            <View style={AuthStyles.header_container}>
              <TouchableOpacity
                activeOpacity={0.95}
                onPress={() => navigation.goBack()}
                style={AuthStyles.header_back_container}
              >
                <Icon
                  name="ios-chevron-back-sharp"
                  color={Colors.white}
                  size={Sizes.FIFTEEN * 1.5}
                />
              </TouchableOpacity>
            </View>
            <View style={AuthStyles.content}>
              <BaseText style={AuthStyles.auth_welcome} font={Fonts.Bold}>
                Welcome,
              </BaseText>
              <BaseText style={AuthStyles.auth_welcome_description}>
                Create an account to continue
              </BaseText>
              <KeyboardAvoidingView style={AuthStyles.auth_form}>
                <BaseInput
                  label="Full Name"
                  placeholder="Enter your full name"
                  keyboardType="default"
                  error={errors?.fullName}
                  value={values.fullName}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                />
                <BaseInput
                  label="Email Address"
                  placeholder="Enter your email address"
                  keyboardType="email-address"
                  error={errors?.email}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                <BaseInput
                  label="Password"
                  keyboardType="visible-password"
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  error={errors?.password}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                />
                <View style={AuthStyles.forgot_password}>
                  <TouchableOpacity>
                    <BaseText style={AuthStyles.forgot_password_text}>
                      Forgot Password?
                    </BaseText>
                  </TouchableOpacity>
                </View>
                <BaseButton
                  isLoading={isLoading}
                  onPress={() => handleSubmit()}
                  containerStyle={{ marginTop: Sizes.GUTTER }}
                >
                  Create Account
                </BaseButton>
              </KeyboardAvoidingView>
            </View>
          </View>
          <View style={AuthStyles.bottom_container}>
            <BaseText style={AuthStyles.alt_page_pre_text}>
              Already have an account?
            </BaseText>
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.navigate("LOGIN_SCREEN", {})}
            >
              <BaseText style={AuthStyles.alt_page_nav}>Login.</BaseText>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};
