import React, { useState, useRef, useEffect } from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';

import Community from '../../components/svg/Community';

import Sent from '../../components/svg/Sent';

import SearchBackground from '../../components/post/SearchBackground';
import SearchWhite from '../../../res/images/searchWhite';
import Hamburger from '../../components/svg/Tooltip_Close';
import ProfileUser from '../../components/svg/ProfileUser';
import Search from '../../../res/images/Search.svg';
import Close from '../../../res/images/Close_Toast_Msg.svg';

import { useNavigation } from '@react-navigation/native';

const MenuTopShopLanding = props => {
  const navigation = useNavigation();
  let searchRef = useRef(null);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('./images/back.png')}
              style={{ width: 18, height: 18 }}
            />

          </TouchableOpacity>
        </View>
        <View style={{ ...styles.boxSearch, }}>
          {/* <Search /> */}
          <TextInput
            placeholderTextColor="white"
            style={{ width: '92%', marginHorizontal: 10, padding: 5, color: 'white', borderWidth: 1, borderColor: "white", borderRadius: 15 }}
            placeholder="Search ..."
            autoFocus={true}
            ref={input => { searchRef = input }}
            onChangeText={(text) => { props.onChangeText(text) }}
          />

          <TouchableOpacity style={{ position: 'absolute', right: 35 }}
            onPress={() => { props.onChangeText(''); searchRef.clear(); }}
          >
            <Close />
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.box, flex: 1, marginRight: 5 }}>
          <TouchableOpacity
            onPress={() => {

            }}
          >
            <Image source={require('./images/shopping-cart-64.png')}
              style={{ width: 24, height: 24, marginTop: 2 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

{/* <View style={styles.box}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchScreen', {//
                screen: 'SearchScreen',
                params: {
                }
              })
            }}
            >
            <SearchWhite />
          </TouchableOpacity>
        </View> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
  },
  boxSearch: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'yellow',
  }

});

export default MenuTopShopLanding;
