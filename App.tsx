import "./src/config/firebase.config";
import { BaseToast } from "@components/BaseToast";
import { useCachedResources } from "@hooks";
import { Navigator } from "@router";
import { toastConfig } from "@utils/toast.config";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const { isLoadingComplete } = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Navigator />
      <BaseToast config={toastConfig} />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
