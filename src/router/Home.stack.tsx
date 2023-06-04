import { Routes } from "@interfaces";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CartScreen,
  CheckoutScreen,
  HomeScreen,
  ProductDetailsScreen,
} from "@screens";

const Stack = createNativeStackNavigator();
export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME_SCREEN}
      screenOptions={{ headerShown: false, animation: "flip" }}
    >
      <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};
