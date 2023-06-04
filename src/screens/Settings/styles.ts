import { Colors, Sizes } from "@theme";
import { StyleSheet } from "react-native";

export const SettingsStyles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.GUTTER,
    borderBottomColor: Colors.light_grey_2,
    borderBottomWidth: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  screen_gutter: {
    marginHorizontal: Sizes.GUTTER,
  },
});
