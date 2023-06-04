import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsStyles } from "./styles";
import { BaseText } from "@components/BaseText";
import { Fonts } from "@interfaces";

export const SettingsScreen = () => {
  return (
    <SafeAreaView style={SettingsStyles.screen}>
      <View style={SettingsStyles.header}>
        <BaseText font={Fonts.SemiBold}>Settings</BaseText>
      </View>
    </SafeAreaView>
  );
};
