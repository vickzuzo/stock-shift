import { Routes } from "@interfaces";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingScreen, LoginScreen, RegisterScreen } from "@screens";
import { StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LANDING_SCREEN}
      screenOptions={{ headerShown: false, animation: "slide_from_bottom" }}
    >
      <Stack.Screen name={Routes.LANDING_SCREEN} component={LandingScreen} />
      <Stack.Screen name={Routes.REGISTER_SCREEN} component={RegisterScreen} />
      <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};
