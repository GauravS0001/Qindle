import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList
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

const MenuTopChannels = props => {

 
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.bg_color_dots}>
        <View>
          <Text style={styles.text1}>
            Channels
          </Text>
        </View>
        <View >
          <ScrollView>
            <FlatList
              data={props.userPost}
              keyExtractor={item => item._id}
              horizontal={true}
              renderItem={itemData => (
                <>
                  {props.renderTop(itemData.item)}
                </>
              )}
            />
          </ScrollView>
        </View>


      </View>


    </>
  );
};

const styles = StyleSheet.create({
  bg_color_dots: {
    flex: 7,
    flexDirection: 'column',
    alignSelf: 'stretch',
    //backgroundColor: '#055AbB'
  },
  text1: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    paddingTop: 25,
    paddingLeft:20
  }

});

export default MenuTopChannels;
