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
import Hamburger from '../../components/svg/Hamburger';
import AddCommunity from '../../../res/images/addCommunity';
import SearchWhite from '../../../res/images/searchWhite';
import { useNavigation } from '@react-navigation/native';

const RecoMenuTopCommunity = props => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={{
          ...styles.box,
          //alignContent:'flex-start',
          //borderBottomWidth: 4,
          //borderColor: '#FFF'
        }}>
          <Text
            style={{
              fontSize: 22,
              color: '#FFF',
              fontWeight: 'bold',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              paddingLeft: 20,
              paddingTop: 25,
            }}>
            Group
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyCommunity', {
                screen: 'MyCommunity',
                params: {
                }
              })
            }}>

            <Text
              style={{
                fontSize: 18,
                color: '#ccc',
                fontWeight: 'bold',
                justifyContent: 'flex-start',
                alignItems: 'baseline',
                paddingLeft: 20,
                paddingTop: 25,
              }}>
              My Group
            </Text>
          </TouchableOpacity>
          {/*<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Hamburger />
          </TouchableOpacity>
          */}
        </View>
        {/*
        <View style={styles.boxSearch}>
        </View>
          */}
        <View style={{
          ...styles.box,
          //justifyContent: 'flex-start',
          //alignItems: 'baseline',
          flex: 2,
          flexDirection: 'column',
        }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginRight: 20,
              marginTop: 25,
            }}>
              <SearchWhite />
            </View>
            <View style={{
              flex: .4,
              flexDirection: 'row',
              //justifyContent: 'center',
              alignItems: 'center',
              marginTop: 25,
            }}>
              <AddCommunity />
            </View>

          </View>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            borderBottomWidth: 4,
            borderColor: '#FFF'
          }}>
            <Text
              style={{
                fontSize: 18,
                color: '#FFF',
                fontWeight: 'bold',
                justifyContent: 'flex-start',
                alignItems: 'baseline',
                paddingLeft: 20,
                paddingTop: 20,
              }}>
              Recommended
            </Text>

          </View>


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
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'green',
  },
  boxSearch: {
    flex: .1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'yellow',
  }

});

export default RecoMenuTopCommunity;
