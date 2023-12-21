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
import { useDispatch, useSelector } from 'react-redux';
import Temp_white_circle from '../../components/svg/Temp_white_circle';
import Check_Box_Empty from '../../components/svg/Check_Box_Empty';
import Sent from '../../components/svg/Sent';
import Tooltip_Close from '../../components/svg/Tooltip_Close';
import Quick_Comment from '../../components/svg/Quick_Comment';
import { useNavigation } from '@react-navigation/native';
import * as types from '../../screens/startup/types';

const RNcameraTop = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { camera, image } = props;

  const creatPost = useSelector(
    state => state.creatPost,
  );

  if (creatPost.from == 'home') {
    /*dispatch({
      type: types.UPDATE_POST_RESET,
      data: [],
    });
    */
    camera.resetAsset(camera);
  }

  return (
    <>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // justifyContent: 'flex-start',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
          width: '100%'
        }}>


        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            //backgroundColor: 'yellow',
            flex: 6,
            // alignItems: 'center',
            //justifyContent: 'center',
          }}>
          {/*
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateTextVideoPostScreen', { image: image })}>

            <View
              style={{
                width: 60,
                height: 60,
                // backgroundColor: '#FFFFFF',
                borderRadius: 30,
                borderColor: '#00000029',
                borderWidth: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Sent />

            </View>
          </TouchableOpacity>
*/}

        </View>

        <View style={{
          flex: 2.5,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          //  backgroundColor: 'red'
        }}>
          <TouchableOpacity onPress={camera.toggleFlash.bind(camera)}>
            <Quick_Comment

            />
          </TouchableOpacity>
        </View>





        <View style={{
          flex: 1.5,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          //  backgroundColor: 'red'
        }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Tooltip_Close />
          </TouchableOpacity>
        </View>


      </View>
    </>
  );
};

const styles = StyleSheet.create({
  username: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#111111',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
    marginHorizontal: 10,
  },
  pic: {
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor: '#C4C4C4',
  },
});

export default RNcameraTop;
