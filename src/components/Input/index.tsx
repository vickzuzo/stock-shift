import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import { Colors, Sizes } from "@theme";
import { BaseText } from "@components/BaseText";
import { Fonts } from "@interfaces";

interface BaseInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  label?: string;
  placeholder?: string;
  placeholderColor?: string;
  value?: string;
  error?: string;
  errorStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export const BaseInput: FC<BaseInputProps> = ({
  error,
  label,
  containerStyle,
  placeholder,
  labelStyle,
  errorStyle,
  inputStyle,
  secureTextEntry,
  wrapperStyle,
  placeholderColor,
  ...props
}) => {
  return (
    <View style={[styles.input_container, containerStyle]}>
      {label ? (
        <BaseText
          style={[
            styles.label,
            { color: error ? Colors.red : Colors.white },
            labelStyle,
          ]}
        >
          {label}
        </BaseText>
      ) : null}
      <View
        style={[
          styles.input_wrapper,
          { borderColor: error ? Colors.red : Colors.light_grey },
          wrapperStyle,
        ]}
      >
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={[styles.input, inputStyle]}
          placeholderTextColor={
            placeholderColor ? placeholderColor : Colors.light_grey
          }
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          {...props}
        />
      </View>
      {error ? (
        <BaseText style={[styles.error, errorStyle]}>{error}</BaseText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input_container: {
    width: "100%",
    marginVertical: Sizes.FIFTEEN * 0.8,
  },
  input_wrapper: {
    position: "relative",
    borderRadius: Sizes.FIFTEEN * 0.5,
    borderWidth: 1,
  },
  input: {
    color: Colors.white,
    height: Sizes.GUTTER * 2.4,
    paddingHorizontal: Sizes.FIFTEEN,
    fontSize: Sizes.FIFTEEN,
    fontFamily: Fonts.Regular,
  },
  label: {
    marginBottom: Sizes.FIFTEEN * 0.5,
  },
  error: {
    marginTop: Sizes.FIFTEEN * 0.3,
    color: Colors.red,
    fontSize: Sizes.FIFTEEN * 0.8,
  },
});
