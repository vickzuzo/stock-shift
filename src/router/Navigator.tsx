import { Routes, Stacks } from "@interfaces";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CartScreen,
  CheckoutScreen,
  CheckoutStatusScreen,
  HomeScreen,
  ProductDetailsScreen,
} from "@screens";
import { AuthStack } from "./Auth.stack";
import { MainStack } from "./Main.Stack";

export const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Stacks.AUTH_STACK}
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name={Stacks.AUTH_STACK} component={AuthStack} />
        <Stack.Screen name={Stacks.MAIN_STACK} component={MainStack} />
        <Stack.Screen name={Routes.CART_SCREEN} component={CartScreen} />
        <Stack.Screen
          name={Routes.CHECKOUT_SCREEN}
          component={CheckoutScreen}
        />
        <Stack.Screen
          name={Routes.PRODUCT_DETAILS_SCREEN}
          component={ProductDetailsScreen}
        />
        <Stack.Screen
          name={Routes.CHECKOUT_STATUS_SCREEN}
          component={CheckoutStatusScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
