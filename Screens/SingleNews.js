//continuing displaying single news
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useContext } from "react";
import { NewsContext } from "../API/Context";

const windowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index }) => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View
      style={{
        height: WindowHeight,
        width: windowWidth,
        // backgroundColor: "red",
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? "#282C35" : "white",
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
          {item.title}
        </Text>
        <Text
          style={{ ...styles.content, color: darkTheme ? "white" : "black" }}
        >
          {item.description}
        </Text>
        <Text style={{ color: darkTheme ? "white" : "black" }}>
          Short By
          <Text>{item.author ?? "Unknown"}</Text>
        </Text>
        <ImageBackground
          blurRadius={30}
          style={styles.footer}
          source={{ uri: item.urlToImage }}
        >
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Text style={{ fontSize: 15, color: "white" }}>
              '{item?.content?.slice(0, 45)}...'
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: {
    fontSize: 18,
    paddingBottom: 10,
  },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  description: {
    padding: 15,
    flex: 1,
  },
});

export default SingleNews;
