import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckoutStyles } from "./styles";
import { BaseNavigator, Fonts } from "@interfaces";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors, Sizes } from "@theme";
import { BaseText } from "@components/BaseText";
import { ConfirmedOrder, Failed } from "@assets/svg";
import { Landing2, Landing3 } from "@assets/images";
import { useGetUserOrders } from "@network/hooks";
import { Product } from "@network/interface";

interface IProps {
  navigation: BaseNavigator;
  route?: { params: { status: "SUCCESS" | "FAILED" } };
}

export const CheckoutStatusScreen = ({ navigation, route }: IProps) => {
  const { isLoading, orders } = useGetUserOrders();

  const renderItem = ({ item }: { item: Product }) => (
    <View style={CheckoutStyles.product_item}>
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
          <BaseText numberOfLines={1}>$50</BaseText>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={CheckoutStyles.screen}>
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
            <BaseText font={Fonts.SemiBold}>{route?.params?.status}</BaseText>
          </View>
          <View style={{ flex: 0.25 }} />
        </View>
        <View style={[CheckoutStyles.content]}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            {route?.params?.status === "SUCCESS" ? (
              <ConfirmedOrder height={200} width={200} />
            ) : (
              <Failed height={200} width={200} />
            )}
            <BaseText
              font={Fonts.Black}
              style={{ fontSize: 30, marginTop: 30, textAlign: "center" }}
            >
              {route?.params?.status === "SUCCESS"
                ? "Order Placed Successfully!."
                : "Failed to place your order!."}
            </BaseText>
          </View>
          {route?.params.status === "SUCCESS" ? (
            isLoading ? (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ActivityIndicator size="small" color={Colors.primary} />
              </View>
            ) : (
              <FlatList
                data={orders}
                keyExtractor={(item) => item?.oid}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />
            )
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};
