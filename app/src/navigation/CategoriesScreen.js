/** @format */

import * as React from "react";

import { Categories } from "../containers";

const CategoriesScreen = ({ navigation }) => {

  console.log('asdsadsad')
  return (
    <Categories
      onViewProductScreen={(item) => {
        navigation.navigate('DetailScreen', {
          screen: 'DetailScreen',
          params: item
        })
        //navigation.navigate("DetailScreen", item)}
      }}
      onViewCategory={(item) => {
        console.log('item222', item)
        navigation.navigate('CategoryScreen', {
          screen: 'CategoryScreen',
          params: item
        })
        //navigation.navigate("CategoryScreen", item);
      }}
    />
  );
};

export default CategoriesScreen;
