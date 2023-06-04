import { NavigationProp } from "@react-navigation/native";

export enum Routes {
  LANDING_SCREEN = "LANDING_SCREEN",
  LOGIN_SCREEN = "LOGIN_SCREEN",
  REGISTER_SCREEN = "REGISTER_SCREEN",
  HOME_SCREEN = "HOME_SCREEN",
  PRODUCT_DETAILS_SCREEN = "PRODUCT_DETAILS_SCREEN",
  PROFILE_SCREEN = "PROFILE_SCREEN",
  CART_SCREEN = "CART_SCREEN",
  CHECKOUT_SCREEN = "CHECKOUT_SCREEN",
  SETTINGS_SCREEN = "SETTINGS_SCREEN",
  CHECKOUT_STATUS_SCREEN = "CHECKOUT_STATUS_SCREEN",
}

export enum Stacks {
  AUTH_STACK = "AUTH_STACK",
  MAIN_STACK = "MAIN_STACK",
  HOME_STACK = "HOME_STACK",
}

export interface NavigationParamList {
  LOGIN_SCREEN: {};
  REGISTER_SCREEN: {};
  lANDING_SCREEN: {};
  HOME_SCREEN: {};
  PROFILE_SCREEN: {};
  PRODUCT_DETAILS_SCREEN: {};
  CART_SCREEN: {};
  CHECKOUT_SCREEN: {};
  CHECKOUT_STATUS_SCREEN: { status: "SUCCESS" | "FAILED" };

  AUTH_STACK: {
    screen?: "LOGIN_SCREEN" | "REGISTER_SCREEN";
    params?: { return_to?: string };
  };

  MAIN_STACK: {
    screen?: "HOME_STACK" | "CART_SCREEN" | "PROFILE_SCREEN";
  };
}

export type BaseNavigator = NavigationProp<NavigationParamList>;
