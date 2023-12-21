/** @format */

import * as React from "react";

import { Home } from "../containers";

const HomeScreen = ({ navigation }) => {
  console.log('navigation', navigation)
  return (
    <Home
      onShowAll={(config, index) => {
        //navigation.navigate("ListAllScreen", { config, index });
        navigation.navigate('ListAllScreen', {
          screen: 'ListAllScreen',
          params: { config, index }
        })

      }}
      showCategoriesScreen={() => {
        console.log('item222zzz', )
        navigation.navigate('CategoriesScreen', {
          screen: 'CategoriesScreen',
          params: {}
        })
      }}
      onViewProductScreen={(item) => {
        navigation.navigate('DetailScreen', {
          screen: 'DetailScreen',
          params: item
        })
        //navigation.navigate("DetailScreen", item);
      }}
    />
  );
};

export default HomeScreen;
