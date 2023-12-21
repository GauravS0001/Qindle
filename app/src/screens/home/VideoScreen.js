import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  Image,
  SafeAreaView,
  FlatList,
  Modal,
} from 'react-native';
import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import Video from 'react-native-video';
import YoutubePlayer from "react-native-youtube-iframe";


let player;

const VideoScreen = props => {  // this is a new route 

  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, margin: 15 }}>

          <View style={styles.textareaWithBackground}>

            <SafeAreaView style={styles.container}>
              <View style={styles.container}>
                {props.route.params.type != undefined && props.route.params.type == 'youtube' ?
                  <>

                    <View style={{
                      flex: 1,
                      backgroundColor: '#FFFFFF',
                      height: '100%',
                      top: '30%'
                    }}>
                      <YoutubePlayer
                        height={300}
                        play={true}
                        videoId={props.route.params.video}
                        style={{
                          width: '100%',
                          height: '100%',
                          alignContent: 'center',
                          alignItems: 'center',
                        }}
                      // onChangeState={onStateChange}
                      />
                    </View>

                  </>
                  :
                  <View style={styles.imgContainer}>
                    <Video source={{ uri: props.route.params.video }}
                      key="0"
                      ref={(ref) => {
                        player = ref
                      }}
                      fullscreen={true}
                      controls={true}
                      paused={false}
                      poster={props.route.params.image}
                      //onBuffer={}
                      onError={(err) => {

                      }}
                      resizeMode="contain"
                      style={styles.image}
                    />
                  </View>
                }


              </View>
            </SafeAreaView>




          </View>

          {/** 
          <View style={styles.bg_color_dots}>


          </View>
          */}

        </View>
      </BaseSafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: .5,
    alignContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: '#055F9B',
    borderRadius: 8,
    margin: 5,
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
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#055F9B'
  },
  bg_color_dots: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#055AbB'
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#055AbB'
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleStyle: {
    padding: 16,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  imageStyle: {
    height: 120,
    width: '96%',
    margin: '2%'
  },

  imageStyleSelected: {
    opacity: 0.3,
    height: 120,
    width: '96%',
    margin: '2%'
  },


  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 50,
    right: 20,
    position: 'absolute',
  },
});

export default VideoScreen;
