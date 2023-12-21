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
import AutoHeightImage from 'react-native-auto-height-image';
import Close from '../../../res/images/Close.svg';

const DoctorDetailsButton = props => {
  
  if (props.item[0] == undefined) {
    return (
      <>
      </>
    )
  }
  return (
    <>

    
      <TouchableOpacity
        style={{
          ...styles.button,
          width: '50%',
          flexDirection: "row",
          marginTop: 10,
          backgroundColor: 'white'
        }}
        onPress={() => {
          props.navigation.navigate('BookDoctorScreen_1', {
            screen: 'BookDoctor_1',
            params: {
              type: 'video',
              from: 'doctorDetails',
              item: props.item[0]
            }
          })
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: "row",
          }}
        >

          <Text style={{
            flex: 1,
            flexDirection: "row",
            textAlign: 'center',
            fontStyle: 'normal',
            fontWeight: 'bold',
            color: '#000',
            fontSize: 16,
            opacity: 1,
            letterSpacing: 0,
            lineHeight: 19,
            marginHorizontal: 10
          }}> Book Video Call </Text>

        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          ...styles.button,
          width: '50%',
          flexDirection: "row",
          marginTop: 10,
        }}
        onPress={() => {
          props.navigation.navigate('BookDoctorScreen_1', {
            screen: 'BookDoctor_1',
            params: {
              type: 'physical',
              from: 'doctorDetails',
              item: props.item[0]
            }
          })
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: "row",
          }}
        >

          <Text style={{
            flex: 1,
            flexDirection: "row",
            textAlign: 'center',
            fontStyle: 'normal',
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 16,
            opacity: 1,
            letterSpacing: 0,
            lineHeight: 19,
            marginHorizontal: 10
          }}> Book Appointment </Text>

        </View>
      </TouchableOpacity>

    </>
  );

}


const styles = StyleSheet.create({
  done_button: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  button: {
    flex: 1,
    backgroundColor: '#055F9B',
    //borderRadius: 8,
    //margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
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
    //backgroundColor: 'green'
  },
  bg_color_dots: {
    flex: 2,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 20
  },
  button_container: {
    //flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DoctorDetailsButton;
