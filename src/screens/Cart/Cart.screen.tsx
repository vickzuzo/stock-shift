import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors, Sizes } from "@theme";
import { BaseNavigator, Fonts } from "@interfaces";
import { CartStyles } from "./styles";
import { BaseText } from "@components/BaseText";
import { Landing2, Landing3 } from "@assets/images";
import { BaseButton } from "@components/Button";
import { useGetUserCart } from "@network/hooks";
import { Product } from "@network/interface";

interface IProps {
  navigation: BaseNavigator;
}

export const CartScreen = ({ navigation }: IProps) => {
  const { cart, isLoading } = useGetUserCart();

  const products = [
    { id: "1", img: Landing2, name: "Jordan" },
    { id: "2", img: Landing3, name: "Nike" },
  ];

  const renderItem = ({ item }: { item: Product }) => (
    <View style={CartStyles.product_item}>
      <View style={CartStyles.product_item_left}>
        <Image
          source={{ uri: item?.image_url }}
          alt={item?.model}
          style={CartStyles.product_item_image}
        />
        <View>
          <BaseText numberOfLines={1} font={Fonts.SemiBold}>
            {item?.brand}: {item?.model}
          </BaseText>
          <BaseText numberOfLines={1}>{item?.price}</BaseText>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={[CartStyles.screen]}>
      <View style={[CartStyles.screen_gutter, { flex: 1 }]}>
        <View style={CartStyles.header_container}>
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => navigation.goBack()}
            style={[CartStyles.header_back_container, { flex: 0.25 }]}
          >
            <Icon
              name="ios-chevron-back-sharp"
              color={Colors.black}
              size={Sizes.FIFTEEN * 1.5}
            />
          </TouchableOpacity>
          <View>
            <BaseText font={Fonts.SemiBold}>My Cart</BaseText>
          </View>
          <View style={{ flex: 0.25 }} />
        </View>
        <View style={CartStyles.content}>
          {isLoading ? (
            <View
              style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size="small" color={Colors.primary} />
            </View>
          ) : (
            <FlatList
              data={cart}
              keyExtractor={(item) => item?.oid}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              // style={{ flex: 0.5, backgroundColor: "red" }}
            />
          )}
          <View style={[CartStyles.bottom_container]}>
            <BaseButton
              onPress={() => navigation.navigate("CHECKOUT_SCREEN", {})}
            >
              Proceed to Checkout
            </BaseButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
