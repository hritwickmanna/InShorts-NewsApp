//Displaying news 
import { View, Dimensions, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "../API/Context";
//debugging problem for carousel
import Carousel from "react-native-snap-carousel-v4";
import SingleNews from "./SingleNews";

const NewsScreen = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);

  const [activeIndex, setactiveIndex] = useState();

  const WindowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          layout="stack"
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={WindowHeight}
          vertical={true}
          //used for news headlined upto 10 items
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={(index) => setactiveIndex(activeIndex)}
        />
      )}
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: "black",
    transform: [{ scaleY: -1 }],
  },
});
