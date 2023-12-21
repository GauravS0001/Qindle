import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  FlatList,
  Image,
  Button,
  ScrollView,
  Dimensions
} from 'react-native';
import { Icon } from 'react-native-vector-icons/icon';
import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import MyCommunityHead from '../../components/UI/MyCommunityHead';
import TimeAgo from 'react-native-timeago';
import { SvgUri } from 'react-native-svg';
const { height, width } = Dimensions.get("window")
import AutoHeightImage from 'react-native-auto-height-image';

const ShopListIChildCategory = props => {
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: props.backgroundColor }}>

        <TouchableOpacity
          onPress={() => {
        
            props.navigation.navigate('ShopListChild', {
              screen: 'ShopListChild',
              params: {
                item: { item: props.item.item }
              }
            })
          }}
          style={{
            width: width / 2,
           
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
              backgroundColor: "white",
              borderRadius: 15

            }}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 2,
                borderBottomColor: '#f2f2f2',
                padding: 20
              }}
            >
              <AutoHeightImage
                width={64}
                source={{ uri: props.item.item.image?.src }}
              />

            </View>
            <View
              style={{
                width: '100%',
                flexDirection: "row",
                padding: 10,
                alignContent: "center",
                alignItems: 'center',
                justifyContent: "center"

              }}

            >
              <Text
                style={{
                  color: '#000',
                  fontWeight: "bold"
                }}
              >{props.item.item.name}</Text>


            </View>






          </View>
        </TouchableOpacity>

      </BaseSafeAreaView>
    </>
  );

}

const styles = StyleSheet.create({
  pic: {
    width: 40,
    height: 40,
  },
  button: {
    flex: 1,
    //backgroundColor: '#055F9B',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 30
  },
  continue_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
    color: colors.white,
  },
  textareaWithBackground: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 240
  },
  bg_color_dots: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  button_container: {
    flex: 2,
    flexDirection: 'row',
    //alignItems: 'center',
  },
  done_button: {
    backgroundColor: '#055F9B',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
});

export default ShopListIChildCategory;
