import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import Lineargradient from "../../components/Lineargradient";
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Signin");
    }, 2000);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Lineargradient />
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  bak: {
    height: "50%",
    width: "50%",
  },
});
