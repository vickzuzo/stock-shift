import { Colors, Sizes } from "@theme";
import { StyleSheet } from "react-native";

export const CartStyles = StyleSheet.create({
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
