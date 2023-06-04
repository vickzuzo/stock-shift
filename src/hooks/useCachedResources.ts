import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          "Inter-Black": require("../../assets/fonts/Inter-Black.ttf"),
          "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
          "Inter-ExtraBold": require("../../assets/fonts/Inter-ExtraBold.ttf"),
          "Inter-ExtraLight": require("../../assets/fonts/Inter-ExtraLight.ttf"),
          "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
          "Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),
          "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
          "Inter-SemiBold": require("../../assets/fonts/Inter-SemiBold.ttf"),
          "Inter-Thin": require("../../assets/fonts/Inter-Black.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.log("Failed to load fonts, error:: => ", e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete };
};
