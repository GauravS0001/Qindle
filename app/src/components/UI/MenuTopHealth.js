import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';

import Community from '../../components/svg/Community';

import Sent from '../../components/svg/Sent';

import SearchBackground from '../../components/post/SearchBackground';
import SearchWhite from '../../../res/images/searchWhite';
import Hamburger from '../../components/svg/Hamburger';
import ProfileUser from '../../components/svg/ProfileUser';

import { useNavigation } from '@react-navigation/native';

const MenuTopHealth = props => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Hamburger />
          </TouchableOpacity>
        </View>
        <View style={styles.boxSearch}>
          <Text
          style={{
            fontSize:18,
            color:'white',
            fontWeight:'bold'
          }}
          >Health</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity>
            <SearchWhite />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
  },
  boxSearch: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'yellow',
  }

});

export default MenuTopHealth;
