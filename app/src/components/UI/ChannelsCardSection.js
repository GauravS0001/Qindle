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
  ToastAndroid
} from 'react-native';
import { Icon } from 'react-native-vector-icons/icon';
import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import MyCommunityHead from '../../components/UI/MyCommunityHead';
import TimeAgo from 'react-native-timeago';

const ChannelsCardSection = props => {

  //console.log('props1212', props.item.item.icon)

  props.item.item.icon.replace('http://', 'https://');
  let members = 0;

  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: '#f2f2f2' }}>

 
        <TouchableOpacity
          onPress={() => {

            if (props.item.item.videoId) {
              props.navigation.navigate('VideoScreen', {
                screen: 'VideoScreen',
                params: {
                  video: props.item.item.videoId,
                  image: props.item.item.icon,
                  type: props.item.item.type
                },
              });
            }
            else {
              ToastAndroid.show("Video informations not seeded", ToastAndroid.LONG);
            }
          }}>



          <View
            style={{
              width: 240,
              paddingTop: 20,
              marginTop: 20,
              marginLeft: 10,
              backgroundColor: '',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 15,
              paddingBottom: 20,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >

            <Image
              source={{ uri: props.item.item.icon }}
              style={{ width: 220, height: 124 }}//100%
            />


            <View
              style={{
                width: '100%',
                flexDirection: "row",
                backgroundColor: '',
                paddingLeft: 4

              }}

            >

              <View
                style={{
                  width: '70%',
                  flexDirection: "row",
                  backgroundColor: '',
                }}

              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: '#000',
                    fontWeight: "bold",
                  }}
                >{props.item.item.title}</Text>


              </View>

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

export default ChannelsCardSection;
