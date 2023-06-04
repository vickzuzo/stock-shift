import { Fonts, Routes, Stacks } from "@interfaces";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen, SettingsScreen } from "@screens";
import { Platform, StyleSheet, Text } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Ionicons";
import { HomeStack } from "./Home.stack";

const Tab = createBottomTabNavigator();
export const MainStack = () => {
  return (
    <Tab.Navigator
      // tabBar={(props) => <BottomTab {...props} />}
      initialRouteName={Stacks.HOME_STACK}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: "#979C9E",
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "#66227D",
        tabBarLabel: ({ color }) => {
          if (route.name === Stacks.HOME_STACK) {
            return <Text style={[styles.tabBarText, { color }]}>Home</Text>;
          } else if (route.name === Routes.PROFILE_SCREEN) {
            return <Text style={[styles.tabBarText, { color }]}>Profile</Text>;
          } else if (route.name === Routes.SETTINGS_SCREEN) {
            return <Text style={[styles.tabBarText, { color }]}>Settings</Text>;
          }
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === Stacks.HOME_STACK) {
            return <Icon name="home-outline" size={size} color={color} />;
          } else if (route.name === Routes.PROFILE_SCREEN) {
            return <AntIcon name="user" size={size} color={color} />;
          } else if (route.name === Routes.SETTINGS_SCREEN) {
            return <Icon name="settings-outline" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name={Stacks.HOME_STACK} component={HomeStack} />
      <Tab.Screen name={Routes.PROFILE_SCREEN} component={ProfileScreen} />
      <Tab.Screen name={Routes.SETTINGS_SCREEN} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "#fff",
    elevation: 0,
    bottom: 0,
    height: Platform.OS === "ios" ? 80 : 60,
    paddingBottom: Platform.OS === "ios" ? 25 : 5,
  },
  tabBarText: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
  },
});
