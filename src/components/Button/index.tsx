import { BaseText } from "@components/BaseText";
import { Colors, Sizes } from "@theme";
import React, { FC } from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface BaseButtonProps {
  onPress?: (event?: GestureResponderEvent) => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  isLoading?: boolean;
  spinnerColor?: string;
}

export const BaseButton: FC<BaseButtonProps> = ({
  onPress,
  textStyle,
  containerStyle,
  children,
  isLoading,
  spinnerColor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.95}
      disabled={isLoading}
      onPress={onPress}
      style={[
        styles.button_container,
        { opacity: isLoading ? 0.5 : 1 },
        containerStyle,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={spinnerColor ? spinnerColor : Colors.white}
        />
      ) : (
        <BaseText style={[styles.button_text, textStyle]}>{children}</BaseText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: Sizes.GUTTER * 2.9,
    backgroundColor: Colors.primary,
    borderRadius: Sizes.FIFTEEN * 0.5,
  },
  button_text: {
    color: Colors.white,
  },
});
