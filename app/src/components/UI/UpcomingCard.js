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

const UpcomingCard = props => {
  let members = 0;

  if (props.item[0] == undefined) {
    return (
      <>
      </>
    )
  }
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let upcomingDate = '';
  let _date = new Date(props.item[0].date.slice(0, 10));
  _date.toLocaleDateString("en-US", options)
  upcomingDate =  "" + _date
  upcomingDate = upcomingDate.slice(0, 15)
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 25
        }}
      >
        <View
          style={{
            width: '90%',
            marginTop: 20,
            backgroundColor: '',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#07868F', //
            borderRadius: 15,
            paddingBottom: 20,
            paddingTop: 20,
            paddingRight: 10

          }}
        >


          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >

            <View
              style={{
                flex: .4,
                flexDirection: "row",
                marginLeft: 20,
              }}
            >
              <Image
                source={{
                  uri: props.item[0].doctorsInfo.image
                }} //props.item.item.icon'
                style={{ width: 64, height: 64 }}//100%
              />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "column",
              }}
            >

              <Text
                style={{
                  color: 'white',
                  fontWeight: "bold"
                }}
              >
                {props.item[0].doctorsInfo.name}
              </Text>
              <Text
                style={{
                  color: 'white',
                }}
              >
                {props.item[0].doctorsInfo.degree}
              </Text>
            </View>

          </View>






          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginLeft: 20,
              }}
            >

              <View
                style={{
                  backgroundColor: '#066B72',
                  borderColor: '#066B72',
                  borderWidth: 1,
                  borderRadius: 8,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 30,
                  marginTop: 10,
                  marginLeft: 10
                }}
              >


                <Text style={{
                  textAlign: 'right',
                  textAlign: 'center',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 16,
                  opacity: 1,
                  letterSpacing: 0,
                  lineHeight: 19,
                  marginHorizontal: 10
                }}>{

                    upcomingDate
                  } | {props.item[0].slot}</Text>

              </View>

            </View>



          </View>






        </View>

      </View>

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

export default UpcomingCard;
