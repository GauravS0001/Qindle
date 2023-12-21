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

const MyCommunityCardReco = props => {

  let members = 0;
  try {
    props.item.item.members.forEach((_item, _key) => {
      members++
    });
  } catch (e) {

  }

  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: '#f2f2f2' }}>

        {/**
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('MyCommunityDetail', {
              screen: 'MyCommunityDetail',
              params: {
                id: props.item.item._id,
                title: props.item.item.community_name,
                icon: props.item.item.icon
              }
            })
          }}>

        </TouchableOpacity>

 */}

        <View
          style={{
            width: 190,
            height: 200,
            marginTop: 20,
            marginLeft: 10,
            backgroundColor: '',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 15,
            paddingBottom: 20,
            paddingLeft: 10

          }}
        >

          <Image
            source={{ uri: props.item.item.icon }}
            style={{ width: 64, height: 64 }}//100%
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
                style={{
                  color: '#00000',
                  fontWeight: "bold",
                }}
              >{props.item.item.community_name}</Text>


            </View>

          </View>

          <View
            style={{
              width: '100%',
              flexDirection: "row",
              backgroundColor: '',
              paddingLeft: 4

            }}

          >

            <Text

            >{members} Members</Text>

          </View>



          <TouchableOpacity
            onPress={() => {
              props.dotPosts.current.item = props.item.item
              props.dotPosts.current.open()
            }}
          >
            <View
              style={{
                ...styles.done_button,
                width: '80%',
                flexDirection: "row",
                marginTop: 10
              }}
            >


              <Text style={{
                flex: 1,
                flexDirection: "row",
                textAlign: 'right',
                textAlign: 'center',
                fontStyle: 'normal',
                fontWeight: 'bold',
                color: '#ffffff',
                fontSize: 16,
                opacity: 1,
                letterSpacing: 0,
                lineHeight: 19,
                marginHorizontal: 10
              }}> Join Group</Text>

            </View>
          </TouchableOpacity>


        </View>

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

export default MyCommunityCardReco;
