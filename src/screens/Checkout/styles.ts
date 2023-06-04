import { Fonts } from "@interfaces";
import { Colors, Sizes } from "@theme";
import { StyleSheet } from "react-native";

export const CheckoutStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  screen_gutter: {
    marginHorizontal: Sizes.GUTTER,
  },
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: Sizes.GUTTER,
    flex: 0.08,
  },
  header_back_container: {
    paddingVertical: Sizes.FIFTEEN,
  },
  content: {
    flex: 1,
  },
  product_item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Sizes.FIFTEEN,
  },
  product_item_image: {
    width: 70,
    height: 70,
    borderRadius: Sizes.FIFTEEN * 0.4,
  },
  product_item_left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  product_count_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  product_count_action: {
    // padding: Sizes.FIFTEEN,
    borderRadius: Sizes.FIFTEEN * 0.3,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  product_count_counter: {
    fontFamily: Fonts.SemiBold,
    color: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: Sizes.FIFTEEN * 0.6,
  },
  bottom_container: {
    marginVertical: Sizes.FIFTEEN,
    backgroundColor: Colors.white,
    padding: Sizes.FIFTEEN,
    borderRadius: Sizes.FIFTEEN,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  bottom_total_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Sizes.FIFTEEN,
  },
});
