import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from "./api";

export const NewsContext = createContext();

const Context = ({ children }) => {
  // setting initial values
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [index, setIndex] = useState(1);
  const [source, setSource] = useState();
  const [darkTheme, setDarkTheme] = useState(true);
  // fetching news data
  const fetchNews = async (reset = category) => {
    const { data } = await axios.get(getNewsAPI(reset));
    setNews(data);
    setIndex(1);
  };
  // fetching news source
  const fetchNewsFromSource = async () => {
    try {
      const { data } = await axios.get(getSourceAPI(source));
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.log(error);
    }
  };

  //whenever the app loads or the category changes it will fetch new news and will setIndex 1
  useEffect(() => {
    fetchNews();
  }, [category]);

  useEffect(() => {
    fetchNewsFromSource();
  }, [source]);

  return (
    <NewsContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        news,
        index,
        setIndex,
        fetchNews,
        setCategory,
        setSource,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
