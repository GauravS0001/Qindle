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
  ScrollView
} from 'react-native';
import { Icon } from 'react-native-vector-icons/icon';
import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import MyCommunityHead from '../../components/UI/MyCommunityHead';
import TimeAgo from 'react-native-timeago';
import { SvgUri } from 'react-native-svg';
import AutoHeightImage from 'react-native-auto-height-image';

const AppSpecialistsCard = props => {
  let members = 0;
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: props.backgroundColor }}>
        <TouchableOpacity
          style={{
            width: 190,
            marginTop: 10,
          }}
          onPress={() => {

            props.navigation.navigate('FindDoctorScreen', {
              screen: 'FindDoctor',
              params: {
                id: props.item.item._id,
                from: 'specialist'
              }
            })

          }}>

          <View
            style={{
              width: 190,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/** 
            <SvgUri
              style={{ width: '85%' }}
              uri={props.item.item.icon}
            />
            <AutoHeightImage
              width={'85%'}
              source={{ uri: props.item.item.icon }}
            /> */}

            {props.item.item.icon.includes(".svg") ?
              <SvgUri
                style={{ width: '60%' }}
                uri={props.item.item.icon}
              />
              :
              <Image
                source={{ uri: props.item.item.icon }}
                style={{ width: '60%', height: 128 }}
              />
            }





            <View
              style={{
                width: '100%',
                flexDirection: "row",
                backgroundColor: '#f2f2f2',
                padding: 10,
                alignContent: "center",
                alignItems: 'center',
                justifyContent: "center"

              }}

            >


              <Text
                style={{
                  color: '#000',
                  fontWeight: "bold",
                  fontSize: 14
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

export default AppSpecialistsCard;
