import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, ImageBackground } from "react-native";
import React from "react";

const Lineargradient = () => {
  return (
    <ImageBackground
      source={require("../assets/mainlogo.png")}
      imageStyle={{ opacity: 1 }}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["#000000", "#8B2500", "#8B2500", "#000000"]}
        style={styles.background}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
});

export default Lineargradient;
