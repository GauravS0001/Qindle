import React, { useState, useRef, useEffect } from 'react';
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
  ScrollView
} from 'react-native';
import { Icon } from 'react-native-vector-icons/icon';
import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import MyCommunityHead from '../../components/UI/MyCommunityHead';
import TimeAgo from 'react-native-timeago';
import { SvgUri } from 'react-native-svg';

const ChannelCategory = props => {
  const [randImg, setRandImg] = useState();
  useEffect(() => {
    let items = ['bg_shade1', 'bg_shade2', 'bg_shade3', 'bg_shade4', 'bg_shade5', 'bg_shade6']
    let image = items[Math.floor(Math.random() * items.length)];
    setRandImg("https://arambh.life/images/Icons/" + image + '.jpg');
  }, []);
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: props.backgroundColor }}>

        <TouchableOpacity
        >
          <View
            style={{
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
             
            }}
          >

            <Image
              source={{ uri: randImg }}
              style={{ width: 168, height: 124 }}//100%
            />

            <View
              style={{
                width: '100%',
                flexDirection: "row",
                //backgroundColor: '#f2f2f2',
                alignContent: "center",
                alignItems: 'center',
                justifyContent: "center",
                position: 'absolute',
              }}

            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: "bold",

                }}
              >{props.item.item.title}</Text>


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

export default ChannelCategory;
