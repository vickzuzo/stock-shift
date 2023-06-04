import {
  Landing1,
  Landing2,
  Landing3,
  Landing4,
  Landing5,
} from "@assets/images";
import { BaseText } from "@components/BaseText";
import { BaseToast } from "@components/BaseToast";
import { BaseButton } from "@components/Button";
import { db } from "@config/firebase.config";
import { BaseNavigator, Fonts } from "@interfaces";
import { useAuth, useGetSingleProduct } from "@network/hooks";
import { Colors, Sizes } from "@theme";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { HomeStyles } from "./styles";

interface IProps {
  navigation: BaseNavigator;
  route?: { params: { product_id?: string } };
}

export const ProductDetailsScreen = ({ navigation, route }: IProps) => {
  const [addingToCart, setAddingToCart] = useState(false);
  const [isLoadingNow, setIsLoading] = useState(false);
  const { product, isLoading } = useGetSingleProduct(
    route?.params?.product_id ?? ""
  );

  const { user } = useAuth();
  const screen_width = Dimensions.get("window").width;
  const products = [
    { id: "0", img: product?.image_url, type: "uri" },
    { id: "1", img: Landing1, type: "raw" },
    { id: "2", img: Landing2, type: "raw" },
    { id: "3", img: Landing3, type: "raw" },
    { id: "4", img: Landing4, type: "raw" },
    { id: "5", img: Landing5, type: "raw" },
  ];

  const renderItem = ({ item }) => (
    <Image
      source={item?.type === "uri" ? { uri: item?.img } : item?.img}
      style={{
        width: screen_width,
        height: "100%",
      }}
    />
  );

  const addProductToCart = async (
    id: string,
    callback?: () => void,
    alt?: boolean
  ) => {
    if (alt) {
      setIsLoading(true);
    } else {
      setAddingToCart(true);
    }
    if (user) {
      const cart_ref = doc(db, "carts", user.uid);
      const cart_doc = await getDoc(cart_ref);

      if (cart_doc.exists()) {
        // If the cart document exists, update the cart array with the new product ID
        await updateDoc(cart_ref, { cart: arrayUnion(id) });
      } else {
        // If the cart document doesn't exist, create a new cart with the initial product
        await setDoc(cart_ref, { cart: [id] });
      }

      if (alt) {
        setIsLoading(false);
      } else {
        setAddingToCart(false);
      }
      BaseToast.show({ type: "success", text1: "Product added to cart." });
      callback?.();
    } else {
      // Handle case when user is not logged in
      if (alt) {
        setIsLoading(false);
      } else {
        setAddingToCart(false);
      }
      navigation.navigate("AUTH_STACK", { screen: "LOGIN_SCREEN" });
    }
  };

  const buyProductNow = (id: string) => {
    addProductToCart(
      id,
      () => navigation.navigate("CHECKOUT_SCREEN", {}),
      true
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, position: "relative" }}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{
            marginBottom: Sizes.FIFTEEN * 0.5,
          }}
        />
        <View
          style={[
            HomeStyles.header_alt,
            {
              paddingHorizontal: Sizes.GUTTER,
              position: "absolute",
              left: 0,
              top: 0,
              width: screen_width,
              backgroundColor: "rgba(0,0,0,0.4)",
              paddingTop: Sizes.GUTTER * 2,
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => navigation.goBack()}
            style={HomeStyles.header_back_container}
          >
            <Icon
              name="ios-chevron-back-sharp"
              color={Colors.white}
              size={Sizes.FIFTEEN * 1.5}
            />
          </TouchableOpacity>
          <View style={[HomeStyles.header_alt, { gap: 30 }]}>
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.goBack()}
              style={HomeStyles.header_back_container}
            >
              <Icon
                name="md-share-social-outline"
                color={Colors.white}
                size={Sizes.FIFTEEN * 1.5}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.95}
              onPress={() => navigation.navigate("CART_SCREEN", {})}
              style={HomeStyles.header_back_container}
            >
              <Icon
                name="md-cart-outline"
                color={Colors.white}
                size={Sizes.FIFTEEN * 1.5}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={{ flex: 0.5 }} showsVerticalScrollIndicator={false}>
        <View
          style={[
            HomeStyles.screen_gutter,
            { marginVertical: Sizes.FIFTEEN * 2, flex: 0.4 },
          ]}
        >
          <View style={HomeStyles.product_top_details}>
            <BaseText font={Fonts.Bold} style={HomeStyles.product_title}>
              {product?.brand}
            </BaseText>
            <BaseText font={Fonts.Black} style={HomeStyles.product_price}>
              {product?.price}
            </BaseText>
          </View>
          <BaseText font={Fonts.SemiBold} style={{ marginBottom: 12 }}>
            MODEL: {product?.model}
          </BaseText>
          <BaseText>{product?.description}</BaseText>
          <BaseText font={Fonts.SemiBold} style={HomeStyles.product_sizes}>
            Available Sizes: {product?.size}
          </BaseText>
          <BaseButton
            onPress={() => buyProductNow(product!.oid)}
            containerStyle={{
              marginTop: Sizes.GUTTER,
              backgroundColor: Colors.dark_grey,
            }}
            isLoading={isLoadingNow}
          >
            Buy Now
          </BaseButton>
          <BaseButton
            onPress={() => addProductToCart(product!.oid)}
            containerStyle={{ marginTop: Sizes.GUTTER }}
            isLoading={addingToCart}
          >
            Add to Basket
          </BaseButton>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
