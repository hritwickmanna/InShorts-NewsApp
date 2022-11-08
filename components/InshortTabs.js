//Two tabs that is discover and news tabs & use of tabview
import React, { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { NewsContext } from "../API/Context";
import DiscoverScreen from "../Screens/DiscoverScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "./TopNavigation";

const InshortTabs = () => {
  //used for initial dimensions
  const layout = useWindowDimensions();
  //index=1
  // const [index, setIndex] = useState(1);
  const { index, setIndex } = useContext(NewsContext);
  //for the twopages with key & title
  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);
  //used to discover pages with corresponding keys
  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      //State for the tab view
      navigationState={{ index, routes }}
      //to render as the page for the tab
      renderScene={renderScene}
      //receives the index of the new tab as argument as 0/1 as you scroll left/right on background
      onIndexChange={setIndex}
      //initial layout
      initialLayout={{ width: layout.width }}
      //Tab Bar
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default InshortTabs;
