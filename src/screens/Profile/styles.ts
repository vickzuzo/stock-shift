import { Colors, Sizes } from "@theme";
import { StyleSheet } from "react-native";

export const ProfileStyles = StyleSheet.create({
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
  profile_pic_container: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: Sizes.GUTTER,
  },
  profile_pic: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
  user_details_flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: Sizes.GUTTER,
  },
});
