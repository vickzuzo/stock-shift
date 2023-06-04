import { Colors, Sizes } from "@theme";
import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Sizes.FIFTEEN,
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
  header_alt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Sizes.GUTTER * 0.6,
  },
  product_item: {
    padding: Sizes.FIFTEEN * 0.3,
    backgroundColor: Colors.white,
    borderRadius: Sizes.FIFTEEN,
    // width: "45%",
    flex: 1,
    marginHorizontal: Sizes.FIFTEEN * 0.3,
    marginVertical: Sizes.FIFTEEN * 0.5,
  },
  product_item_image: {
    width: "100%",
    height: 180,
    borderRadius: Sizes.FIFTEEN * 0.8,
    resizeMode: "cover",
  },
  product_item_bottom: {
    padding: Sizes.FIFTEEN * 0.3,
  },
  product_top_details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Sizes.FIFTEEN,
  },
  product_title: {
    fontSize: Sizes.FIFTEEN * 1.5,
  },
  product_price: {
    fontSize: Sizes.FIFTEEN * 1.7,
    textAlign: "right",
  },
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Sizes.GUTTER,
    flex: 0.08,
  },
  header_back_container: {
    paddingVertical: 0.1,
  },
  search_container: {
    backgroundColor: Colors.white,
    borderRadius: Sizes.FIFTEEN * 0.3,
    borderWidth: 1,
    borderColor: Colors.primary,
    flex: 0.8,
  },
  search_input: {
    paddingHorizontal: Sizes.FIFTEEN,
    height: Sizes.GUTTER * 2,
  },
  product_sizes: {
    marginTop: Sizes.FIFTEEN,
  },
});
