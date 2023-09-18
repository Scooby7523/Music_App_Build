import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./screens/Splash";
import Signin from "./screens/Signin";
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartUp">
        <Stack.Screen
          name="StartUp"
          component={Splash}
          options={styles.upper}
        />
        <Stack.Screen name="Signin" component={Signin} options={styles.upper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;

const styles = StyleSheet.create({
  upper: {
    headerShown: false,
  },
});
