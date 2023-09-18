import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./scr/AppNavigator";

import { useFonts } from "expo-font";

export default function App() {
  const [fontsloaded] = useFonts({
    three: require("./assets/fonts/Kalam-Bold.ttf"),
    two: require("./assets/fonts/Kalam-Light.ttf"),
    one: require("./assets/fonts/Kalam-Regular.ttf"),
  });
  if (!fontsloaded) {
    return null;
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
