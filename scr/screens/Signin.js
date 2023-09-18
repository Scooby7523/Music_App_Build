import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Lineargradient from "../../components/Lineargradient";

const wid = Dimensions.get("window").width;

const Signin = () => {
  return (
    <View style={styles.container}>
      <Lineargradient />

      <View style={styles.upper}>
        <Text style={styles.title}>Sign In</Text>
      </View>
      {/* <View style={styles.maindeco}>
        <Text>hello</Text>
      </View> */}
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    width: "100%",
    height: "100%",
    position: "absolute",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: wid > 360 ? wid / 2.3 : wid / 5,
    // backgroundColor: "green",
  },
  title: {
    fontFamily: "one",
    fontSize: 40,
    color: "white",
  },
  maindeco: {
    backgroundColor: "yellow",
    height: "100%",
    width: "50%",
    position: "absolute",
  },
});
