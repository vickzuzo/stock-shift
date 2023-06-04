import { Landing4 } from "@assets/images";
import { BaseText } from "@components/BaseText";
import { BaseNavigator } from "@interfaces";
import { Colors, Sizes } from "@theme";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { HomeStyles } from "./styles";
import { useGetProducts } from "@network/hooks";
import { Product } from "@network/interface";

interface IProps {
  navigation: BaseNavigator;
}

export const HomeScreen = ({ navigation }: IProps) => {
  const { products, isLoading } = useGetProducts();

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("PRODUCT_DETAILS_SCREEN", { product_id: item?.oid })
      }
      activeOpacity={0.95}
      style={HomeStyles.product_item}
    >
      <Image
        source={{ uri: item?.image_url }}
        alt={item?.model}
        style={HomeStyles.product_item_image}
      />
      <View style={HomeStyles.product_item_bottom}>
        <BaseText>{item?.brand}</BaseText>
        <BaseText>{item?.price}</BaseText>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={HomeStyles.screen}>
      <SafeAreaView style={HomeStyles.screen_gutter}>
        <View style={HomeStyles.header}>
          <View style={HomeStyles.search_container}>
            <TextInput
              style={HomeStyles.search_input}
              placeholder="search..."
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => navigation.navigate("CART_SCREEN", {})}
            style={HomeStyles.header_back_container}
          >
            <Icon
              name="md-cart-outline"
              color={Colors.primary}
              size={Sizes.FIFTEEN * 1.5}
            />
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ActivityIndicator size="small" color={Colors.primary} />
          </View>
        ) : (
          <FlatList
            data={products}
            showsVerticalScrollIndicator={false}
            renderItem={renderProduct}
            keyExtractor={(item) => item.oid}
            style={{ marginBottom: 143 }}
            numColumns={2} // Set the number of columns to 2
          />
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});
