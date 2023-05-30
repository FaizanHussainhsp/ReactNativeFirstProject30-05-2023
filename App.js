import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import WelComeScreen from "./app/Screens/WelComeScreen";
import ViewImageScreen from "./app/Screens/ViewImageScreen";

export default function App() {
  return <WelComeScreen />;
}

const styles = StyleSheet.create({
  container: {
    height: hp("20%"),
    width: wp("50%"),
    backgroundColor: "#432443",
    alignItems: "center",
    justifyContent: "center",
  },
});
