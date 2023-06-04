import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileStyles } from "./styles";
import { BaseText } from "@components/BaseText";
import { Fonts } from "@interfaces";
import { Landing2 } from "@assets/images";
import { Sizes } from "@theme";

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={ProfileStyles.screen}>
      <View style={ProfileStyles.header}>
        <BaseText font={Fonts.SemiBold}>Profile</BaseText>
      </View>
      <View style={ProfileStyles.screen_gutter}>
        <View style={ProfileStyles.profile_pic_container}>
          <Image
            source={Landing2}
            alt="profile"
            style={ProfileStyles.profile_pic}
          />
        </View>
        <View style={{ marginTop: Sizes.GUTTER * 2 }}>
          <View style={ProfileStyles.user_details_flex}>
            <BaseText>FullName: </BaseText>
            <BaseText>babal </BaseText>
          </View>
          <View style={ProfileStyles.user_details_flex}>
            <BaseText>FullName: </BaseText>
            <BaseText>babal </BaseText>
          </View>
          <View style={ProfileStyles.user_details_flex}>
            <BaseText>FullName: </BaseText>
            <BaseText>babal </BaseText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
