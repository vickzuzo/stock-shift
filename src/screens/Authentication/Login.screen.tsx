import { Landing2 } from "@assets/images";
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
import { useLogin } from "@network/hooks";

interface IProps {
  navigation: BaseNavigator;
}

export const LoginScreen = ({ navigation }: IProps) => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    isLoading,
  } = useLogin({ navigation });

  return (
    <ImageBackground source={Landing2} style={{ flex: 1 }}>
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
                Welcome Back
              </BaseText>
              <BaseText style={AuthStyles.auth_welcome_description}>
                Login to your account to continue
              </BaseText>
              <KeyboardAvoidingView style={AuthStyles.auth_form}>
                <BaseInput
                  label="Email Address"
                  placeholder="Enter your email address"
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  error={errors.email}
                  onBlur={handleBlur("email")}
                />
                <BaseInput
                  label="Password"
                  keyboardType="visible-password"
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  error={errors.password}
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
                  onPress={() => handleSubmit()}
                  containerStyle={{ marginTop: Sizes.GUTTER }}
                  isLoading={isLoading}
                >
                  LOGIN
                </BaseButton>
              </KeyboardAvoidingView>
            </View>
          </View>
          <View style={AuthStyles.bottom_container}>
            <BaseText style={AuthStyles.alt_page_pre_text}>
              Don't have an account?
            </BaseText>
            <TouchableOpacity
              onPress={() => navigation.navigate("REGISTER_SCREEN", {})}
            >
              <BaseText style={AuthStyles.alt_page_nav}>
                Create an account.
              </BaseText>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};
