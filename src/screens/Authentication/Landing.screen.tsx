import {
  Landing1,
  Landing2,
  Landing3,
  Landing4,
  Landing5,
} from "@assets/images";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthStyles } from "./styles";
import { BaseText } from "@components/BaseText";
import { BaseButton } from "@components/Button";
import { Sizes } from "@theme";
import { BaseNavigator } from "@interfaces";

interface IProps {
  navigation: BaseNavigator;
}

export const LandingScreen = ({ navigation }: IProps) => {
  const images = [Landing1, Landing2, Landing3, Landing4, Landing5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the interval when the component mounts
    const interval = setInterval(() => {
      // Calculate the next image index
      const nextIndex = (currentImageIndex + 1) % images.length;
      // Reset the fade animation value to 0
      fadeAnim.setValue(0);

      // Animate the fade-in effect
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        // Update the current image index
        setCurrentImageIndex(nextIndex);
      });
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);
  const screenDimensions = Dimensions.get("screen");

  return (
    <SafeAreaView style={[AuthStyles.screen]}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: screenDimensions.width,
          height: screenDimensions.height,
        }}
      >
        <ImageBackground
          source={images[currentImageIndex]}
          style={{ flex: 1, position: "relative" }}
        >
          <View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          />
          <View style={[AuthStyles.landing_screen_texts_container]}>
            <BaseText style={AuthStyles.welcome_message}>
              Welcome to Stock-Shift
            </BaseText>
            <BaseButton
              containerStyle={{ marginTop: Sizes.GUTTER, width: "90%" }}
              textStyle={{ textTransform: "uppercase" }}
              onPress={() => navigation.navigate("LOGIN_SCREEN", {})}
            >
              Get Started
            </BaseButton>
          </View>
        </ImageBackground>
      </Animated.View>
    </SafeAreaView>
  );
};
