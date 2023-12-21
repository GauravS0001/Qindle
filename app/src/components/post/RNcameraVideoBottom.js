import React, { useState, useRef, useEffect, useReducer, useCallback } from 'react';

import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';

import Temp_white_circle from '../../components/svg/Temp_white_circle';
import Check_Box_Empty from '../../components/svg/Check_Box_Empty';
import Sent from '../../components/svg/Sent';
import Tooltip_Close from '../../components/svg/Tooltip_Close';

import Channel from '../../components/svg/Channel';
import Community from '../../components/svg/Community';
import { useNavigation } from '@react-navigation/native';

const RNcameraBottom = props => {
  const navigation = useNavigation();
  const { camera, image } = props;

  const [postStatus, setPostStatus] = useState(false);

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
          bottom: '20%',
          left: 0,
          zIndex: 2,
          width: '100%',
          //backgroundColor: 'red',
          borderColor: '#000',
          borderWidth: 2,
          height: '10%',
          opacity: 1
        }}>


        {/**
  {image.map((p, i) => {
          return (
            <Image
              key="0"
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // justifyContent: 'flex-start',
                borderColor: '#ccc',
                borderWidth: 1,
                height: '100%',
                opacity: 1
              }}
              source={{ uri: p.node.image.uri }}
            />
          );
        })}
 */}


        <Image
          key="0"
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // justifyContent: 'flex-start',
            borderColor: '#ccc',
            borderWidth: 1,
            height: '100%',
            opacity: 1
          }}
          source={{ uri: image[0] ? image[0].node.image.uri : "" }}
        />


        <Image
          key="1"
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // justifyContent: 'flex-start',
            borderColor: '#ccc',
            borderWidth: 1,
            height: '100%',
            opacity: 1
          }}
          source={{ uri: image[1] ? image[1].node.image.uri : "" }}
        />


        <Image
          key="2"
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // justifyContent: 'flex-start',
            borderColor: '#ccc',
            borderWidth: 1,
            height: '100%',
            opacity: 1
          }}
          source={{ uri: image[2] ? image[2].node.image.uri : "" }}
        />


        <Image
          key="3"
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // justifyContent: 'flex-start',
            borderColor: '#ccc',
            borderWidth: 1,
            height: '100%',
            opacity: 1
          }}
          source={{ uri: image[3] ? image[3].node.image.uri : "" }}
        />



        <Image
          key="4"
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // justifyContent: 'flex-start',
            borderColor: '#ccc',
            borderWidth: 1,
            height: '100%',
            opacity: 1
          }}
          source={{ uri: image[4] ? image[4].node.image.uri : "" }}
        />



      </View>

      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // justifyContent: 'flex-start',
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 2,
          width: '100%',
          backgroundColor: 'black',
          height: '20%',
          opacity: 0.3
        }}>
      </View>


      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // justifyContent: 'flex-start',
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 2,
          width: '98%',
          height: '20%',
          paddingLeft: '1%',
          paddingRight: '1%'
        }}>

        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            //backgroundColor: 'yellow',
            flex: 1.5,
            alignItems: 'center',
            justifyContent: 'center',
            height: 60
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('VideoGalScreen', {})}>

            <View
              style={{
                // backgroundColor: '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Channel />


              <Text style={{ color: 'white', marginTop: '30%' }}>
                Video Gallery
              </Text>

            </View>
          </TouchableOpacity>

        </View>

        {postStatus == false &&

          <View style={{
            flex: 4,
            height: 90,
            //backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',

          }}>

          <TouchableOpacity onPress={camera.takeVideo.bind(camera, navigation, setPostStatus)}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  // backgroundColor: '#FFFFFF',
                  borderRadius: 30,
                  borderColor: '#ccc',
                  borderWidth: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Temp_white_circle />
              </View>
              <Text style={{ color: 'white', marginTop: '10%' }}>
                Record
              </Text>
            </TouchableOpacity>

          </View>

        }


        {postStatus == true &&

          <View style={{
            flex: 4,
            height: 90,
            //backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',

          }}>

          <TouchableOpacity onPress={camera.stopVideo.bind(camera, navigation, setPostStatus)}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'red',
                  borderRadius: 30,
                  borderColor: '#ccc',
                  borderWidth: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Temp_white_circle />
              </View>
              <Text style={{ color: 'white', marginTop: '10%' }}>
                Stop
              </Text>
            </TouchableOpacity>

          </View>

        }



        <TouchableOpacity onPress={camera.toggleFacing.bind(camera)}>
          <View style={{
            flex: 1.5,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            //backgroundColor: 'blue'
          }}>
            <Community />
            <Text style={{ color: 'white', marginTop: '20%' }}>
              Rotate
            </Text>
          </View>
        </TouchableOpacity>


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

export default RNcameraBottom;
