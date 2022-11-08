import React, { useContext } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Context, { NewsContext } from "./API/Context";
import InshortTabs from "./components/InshortTabs";
import Parse from "parse/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Deploying APIs to back4app

//Initilizing SDK
Parse.setAsyncStorage(AsyncStorage);
//copying application ID and JAVA ID
Parse.initialize(
  "I4JAIhx30xrAvNIrbFGC2F3Hnuk0EQdrKjRYDime",
  "2PkZv84He6LcWpembNknR3fzCLBlFIVrtpEOLKVY"
);
Parse.serverURL = "https://parseapi.back4app.com/";

function App() {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282C35" : "white",
      }}
    >
      <InshortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
