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
import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import MyCommunityCard from '../../components/UI/MyCommunityCard';
import images from '../../../res/images_url';
import { IMAGE_PROTOCOL, IMAGE_HOST, IMAGE_BASE } from '../../api/APIConstants';

import Comm from '../../../res/images/Thank_You';

import Sort from '../../../res/images/sort.svg';
const MyCommunityHead = props => {
  const onDoneClick = () => {
    props.navigation.navigate('CreateCommunity', {
      screen: 'CreateCommunity',
      params: {
      }
    })
  }



  return (
    <>


      <View
        style={{
          marginTop: 10,
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <Comm
          style={{
            flex: 2,
            backgroundColor: "#fff"
          }}
        />

      </View>


      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          backgroundColor: 'white'
        }}
      >
        <TouchableOpacity
          style={{ ...styles.button, width: '60%' }}
        >

          <Button
            onPress={onDoneClick}
            title="Create Community "
            color="#055F9B"
            //backgroundColor="#055F9B"
            //styles={styles.button}
            accessibilityLabel="Create Community "
          />
          {/*<Text style={styles.continue_text}>Done</Text>*/}
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          //backgroundColor: "red"
          marginBottom: 20
        }}
      >




        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            paddingLeft: 20,
            paddingTop: 10,
            width: '70%',
            borderTopColor: '#bbb',
            borderBottomColor: '#f2f2f2',
            borderWidth: 3,
            borderLeftColor: '#f2f2f2',
            borderRightColor: '#f2f2f2',
            marginTop: 40,
            paddingTop: 40,
            paddingBottom: 20
          }}

        >List of Group</Text>

        <TouchableOpacity
          style={{
            //paddingLeft: 10,
            paddingTop: 10,
            width: '30%',
            borderTopColor: '#bbb',
            borderWidth: 3,
            borderBottomColor: '#f2f2f2',
            borderLeftColor: '#f2f2f2',
            borderRightColor: '#fff',
            marginTop: 40,
            paddingTop: 40,
            flex: 1,
            flexDirection: "row"
          }}
          onPress={props.sortData}
        >

          <View
            style={{
              flex: .9,
              flexDirection: "row",
              backgroundColor: "#fff",
              width: '90%',
              alignContent: "center",
              alignItems: "center",
              borderRadius: 10,
              paddingLeft: 10,
            }}
          >
            <Sort
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 3,
                height: '100%',
                alignContent: "center",
                alignItems: "center"
              }}
            />

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                flex: 1,
                flexDirection: "row",
                paddingLeft: 8,
                alignContent: "center",
                alignItems: "center"

              }}

            >SORT</Text>
          </View>

          <View
            style={{
              flex: .3,
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
          </View>

        </TouchableOpacity>

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
});

export default MyCommunityHead;
