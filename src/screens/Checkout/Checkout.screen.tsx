import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";
import { Colors, Sizes } from "@theme";
import { BaseNavigator, Fonts } from "@interfaces";
import { CheckoutStyles } from "./styles";
import { BaseText } from "@components/BaseText";
import { Landing2, Landing3 } from "@assets/images";
import { Image } from "react-native";
import { BaseButton } from "@components/Button";
import { CheckoutDetailsModal } from "./components";
import { useDisclosure } from "@hooks";
import { useGetUserCart } from "@network/hooks";
import { Product } from "@network/interface";

interface IProps {
  navigation: BaseNavigator;
}

export const CheckoutScreen = ({ navigation }: IProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { cart, isLoading } = useGetUserCart();
  const [result, setResult] = useState(
    cart.map((prd) => ({ ...prd, quantity: 1 }))
  );

  useEffect(() => {
    setResult(cart.map((prd) => ({ ...prd, quantity: 1 })));
  }, [cart]);

  const handleIncrement = (pr_id: string) => {
    const new_cart = result.map((prd) =>
      prd.oid === pr_id ? { ...prd, quantity: (prd.quantity += 1 ?? 0) } : prd
    );
    setResult(new_cart);
  };
  const handleDecrement = (pr_id: string) => {
    const new_cart = result.map((prd) =>
      prd.oid === pr_id ? { ...prd, quantity: (prd.quantity -= 1 ?? 0) } : prd
    );
    setResult(new_cart);
  };

  const removeFirstCharacter = (str: string) => {
    const [, ...rest] = str;
    return rest.join("");
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    result.forEach((product) => {
      const { price, quantity } = product;
      totalPrice += Number(removeFirstCharacter(price)) * quantity;
    });
    return totalPrice;
  };

  const products = [
    { id: "1", img: Landing2, name: "Jordan" },
    { id: "2", img: Landing3, name: "Nike" },
  ];

  const renderItem = ({ item }: { item: Product }) => (
    <View style={(CheckoutStyles.product_item, { flexDirection: "column" })}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={CheckoutStyles.product_item_left}>
          <Image
            source={{ uri: item?.image_url }}
            alt={item?.model}
            style={CheckoutStyles.product_item_image}
          />
          <View>
            <BaseText numberOfLines={1} font={Fonts.SemiBold}>
              {item?.brand}
            </BaseText>
            <BaseText numberOfLines={1}>{item?.price}</BaseText>
          </View>
        </View>
        <View style={CheckoutStyles.product_count_container}>
          <TouchableOpacity
            onPress={() => handleDecrement(item?.oid)}
            activeOpacity={0.95}
            style={CheckoutStyles.product_count_action}
          >
            <AntIcon name="minus" color={Colors.primary} size={Sizes.FIFTEEN} />
          </TouchableOpacity>
          <TextInput
            value={item?.quantity?.toString()}
            keyboardType="number-pad"
            style={CheckoutStyles.product_count_counter}
          />
          <TouchableOpacity
            onPress={() => handleIncrement(item?.oid)}
            activeOpacity={0.95}
            style={CheckoutStyles.product_count_action}
          >
            <AntIcon name="plus" color={Colors.primary} size={Sizes.FIFTEEN} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginVertical: Sizes.FIFTEEN }}>
        {item?.size ? (
          <>
            <BaseText>Available Sizes</BaseText>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                style={{
                  width: 100,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: Colors.dark_grey,
                  borderRadius: 5,
                  borderWidth: 1,
                }}
              >
                <BaseText style={{ color: Colors.dark_grey }}>
                  {item?.size}
                </BaseText>
              </TouchableOpacity>
            </View>
          </>
        ) : null}
      </View>
    </View>
  );
  return (
    <SafeAreaView style={[CheckoutStyles.screen, { position: "relative" }]}>
      <View style={[CheckoutStyles.screen_gutter, { flex: 1 }]}>
        <View style={CheckoutStyles.header_container}>
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => navigation.goBack()}
            style={[CheckoutStyles.header_back_container, { flex: 0.25 }]}
          >
            <Icon
              name="ios-chevron-back-sharp"
              color={Colors.black}
              size={Sizes.FIFTEEN * 1.5}
            />
          </TouchableOpacity>
          <View>
            <BaseText font={Fonts.SemiBold}>Checkout</BaseText>
          </View>
          <View style={{ flex: 0.25 }} />
        </View>
        <View style={CheckoutStyles.content}>
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
              data={result}
              keyExtractor={(item) => item?.oid}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          )}
          <View style={[CheckoutStyles.bottom_container]}>
            <View style={CheckoutStyles.bottom_total_container}>
              <BaseText font={Fonts.Medium}>Total: </BaseText>
              <BaseText font={Fonts.Black} style={{ fontSize: Sizes.GUTTER }}>
                £{calculateTotalPrice()}{" "}
              </BaseText>
            </View>
            <BaseButton onPress={onOpen}>Buy Now</BaseButton>
          </View>
        </View>
      </View>
      <CheckoutDetailsModal
        isOpen={isOpen}
        onClose={onClose}
        navigation={navigation}
        data={{
          totalItems: result.length ?? 0,
          totalPrice: `£${calculateTotalPrice()}`,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
