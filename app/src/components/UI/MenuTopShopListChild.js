import React, { useState, useRef, useEffect } from 'react';
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

const MenuTopShopListChild = props => {
  const navigation = useNavigation();
  const [name, setName] = useState("Health");


  useEffect(() => {
    if (props.item) {
      setName(props.item.name)
    }
  }, [props.item]);

  return (
    <>
      <View style={styles.container}>
        <View style={{ ...styles.box, flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('./images/back.png')}
              style={{ width: 18, height: 18 }}
            />

          </TouchableOpacity>
        </View>
        <View style={{ ...styles.boxSearch }}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 10,
              color: 'white',
              fontWeight: 'bold'
            }}
          >{name}</Text>
        </View>

        {props.showCart &&
          <>
            <View style={{ ...styles.box, flex: 1 }}>
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
          </>
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
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

export default MenuTopShopListChild;
