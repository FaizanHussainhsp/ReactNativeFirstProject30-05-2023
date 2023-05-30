import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

function WelComeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo-red.png")}
        />
        <Text>Sell What You Don,t Need</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.regButton}></View>
    </ImageBackground>
  );
}

export default WelComeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#123467",
    height: 70,
    width: "100%",
  },
  regButton: {
    backgroundColor: "#167",
    height: 70,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
