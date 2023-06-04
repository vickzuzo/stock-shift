import { View, Text, TextStyle, StyleProp, TextProps } from "react-native";
import React, { FC } from "react";
import { Fonts } from "@interfaces";
import { Sizes } from "@theme";

interface BaseTextProps extends TextProps {
  /**
   * Define styles from the text
   * NOTE: does not overide default styles unless overridden
   */
  style?: StyleProp<TextStyle>;
  /**
   * font to use as fontFamily for the text,
   * @default Fonts.Regular,
   * @enum {Fonts.Regular}
   * @description font family
   */
  font?: Fonts;

  children: React.ReactNode;
}

export const BaseText: FC<BaseTextProps> = ({
  font = Fonts.Regular,
  style,
  children,
  ...props
}) => {
  return (
    <Text
      style={[{ fontFamily: font, fontSize: Sizes.FIFTEEN }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};
