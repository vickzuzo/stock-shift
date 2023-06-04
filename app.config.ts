import { ExpoConfig } from "expo/config";
// import {
//   FIREBASE_API_KEY,
//   FIREBASE_APP_ID,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
// } from "@env";
// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: "Stock-Shift",
  slug: "Stock-Shift",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/app_logo.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/app_splash.png",
    resizeMode: "cover",
    backgroundColor: "#F7F7F7",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: "com.shift.stock",
    adaptiveIcon: {
      foregroundImage: "./assets/images/app_logo.png",
      backgroundColor: "#F7F7F7",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "9fc0b51f-d25d-4f8f-a42b-94231700c9b3",
    },
    // firebaseApiKey: FIREBASE_API_KEY,
    // firebaseAuthDomain: FIREBASE_AUTH_DOMAIN,
    // firebaseProjectId: FIREBASE_PROJECT_ID,
    // firebaseStorageBucket: FIREBASE_STORAGE_BUCKET,
    // firebaseMessagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    // firebaseAppId: FIREBASE_APP_ID,
  },
};

export default config;
