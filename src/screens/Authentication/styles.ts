import { Fonts } from "@interfaces";
import { Colors, Sizes } from "@theme";
import { StyleSheet } from "react-native";

export const AuthStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  screen_2: {
    flex: 1,
  },
  screen_gutter: {
    marginHorizontal: Sizes.GUTTER,
  },
  landing_screen_texts_container: {
    zIndex: 3,
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: Sizes.FIFTEEN * 8,
    alignItems: "center",
  },
  welcome_message: {
    fontFamily: Fonts.ExtraBold,
    fontSize: Sizes.FIFTEEN * 4,
    textAlign: "center",
    color: Colors.white,
  },
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Sizes.GUTTER,
    flex: 0.08,
  },
  header_back_container: {
    paddingVertical: Sizes.FIFTEEN,
  },
  auth_welcome: {
    fontSize: Sizes.FIFTEEN * 2.3,
    color: Colors.primary,
  },
  auth_welcome_description: {
    color: Colors.white,
  },
  content: {
    flex: 1,
  },
  auth_form: {
    flex: 0.9,
    justifyContent: "center",
  },
  bottom_container: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 7,
  },
  alt_page_pre_text: {
    color: Colors.white,
  },
  alt_page_nav: {
    color: Colors.primary,
  },
  forgot_password: {
    alignItems: "flex-end",
  },
  forgot_password_text: {
    color: Colors.white,
  },
});
