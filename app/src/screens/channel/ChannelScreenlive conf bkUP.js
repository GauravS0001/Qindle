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
  ScrollView,
  ToastAndroid,
  Image,
  Button,
  Dimensions
} from 'react-native';
import colors from '../../../res/colors';
import MenuTop from '../../components/UI/MenuTopChannels';
import MenuBottom from '../../components/UI/MenuBottomChannel';
import PostCard from '../../components/UI/PostCard';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheet';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheet';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import branch, { BranchEvent } from 'react-native-branch'
import images from '../../../res/images_url';
import AppSpecialistsCard from '../../components/UI/AppSpecialistsCard';
import UpcomingCard from '../../components/UI/UpcomingCard';

import messaging from '@react-native-firebase/messaging';
import PopularHealthIssueCard from '../../components/UI/PopularHealthIssueCard';
import YourHealthIssueCard from '../../components/UI/YourHealthIssueCard';
import DoctorsNearYouCard from '../../components/UI/DoctorsNearYouCard';
import { Linking } from 'react-native'
import FamousDoctorCard from '../../components/UI/FamousDoctorCard';
import AutoHeightImage from 'react-native-auto-height-image';
import { NodeCameraView, NodePlayerView } from "react-native-nodemediaclient";


let { width, height } = Dimensions.get("window");

width = width;
height = height / 2;

const config1 = {
  cameraConfig: {
    cameraId: 1,
    cameraFrontMirror: false
  },
  videoConfig: {
    preset: 12,
    bitrate: 400000,
    profile: 0,
    fps: 15,
    videoFrontMirror: true,
  },
  audioConfig: {
    bitrate: 32000,
    profile: 1,
    samplerate: 44100,
  }
};

const config = {
  cameraConfig: {
    cameraId: 1,
    cameraFrontMirror: false
  },
  videoConfig: {
    preset: 4,
    bitrate: 2000000,
    profile: 2,
    fps: 30,
    videoFrontMirror: true,
  },
  audioConfig: {
    bitrate: 128000,
    profile: 1,
    samplerate: 44100,
  }
};

const ChannelScreen = props => {


  const cameraViewRef = React.useRef(null);
  const streamKey = 'sushant';
  const url = `rtmp://184.168.127.239/live/`;
  //const url = `rtmp://192.168.3.5/live/`;

  const _user = useSelector(state => state.user); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  const dispatch = useDispatch();


  const [playerRef, setPlayerRef] = useState(null);
  const [playerRef2, setPlayerRef2] = useState(null);
  const [selfUrl, setSelfUrl] = useState('');
  const [docUrl, setDocUrl] = useState('');
  const [player1, setPlayer1] = useState({ publishBtnTitle: 'Start', isPublish: false });

  useEffect(() => {
    return () => {
      if (playerRef) playerRef.stop();
      if (playerRef2) playerRef2.stop();
    };
  }, []);

  const addPosts = text => {
    refCreatePostBottomSheet.current.asaraType = "post"
    refCreatePostBottomSheet.current.asaraTypeId = ""
    refCreatePostBottomSheet.current.open()
  };

  //const [text, onChangeText] = React.useState("");

  const onChangeText = (text) => {
    setSelfUrl(url + text)
  };

  const onChangeText2 = (text) => {
    setDocUrl(url + text)
  };


  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, flexDirection: "column" }}>

          <View
            style={{ flex: 1.5, flexDirection: "column", backgroundColor: '#055F9B' }}
          >
            <MenuTop />

          </View>


          <View
            style={{ flex: 7.5, flexDirection: "column" }}
          >

            <View
              style={{ flex: 1, backgroundColor: '' }}
            >

              <View
                style={{ flex: .3, flexDirection: 'row', backgroundColor: '' }}
              >

                <View
                  style={{ flex: 1 }}
                >
                  <TextInput
                    onChangeText={onChangeText}
                    //value={text}
                    placeholder={"Your Stream"}
                    returnKeyLabel={"return"}
                    caretHidden={true}
                  />

                </View>
                <View
                  style={{ flex: 1 }}
                >

                  <Button
                    onPress={() => {
                      if (player1.isPublish) {
                        setPlayer1({ publishBtnTitle: 'Start', isPublish: false });
                        playerRef.stop();
                      } else {
                        setPlayer1({ publishBtnTitle: 'Stop', isPublish: true });
                        playerRef.start();
                      }
                    }}
                    title={player1.publishBtnTitle}
                    color="#841584"
                  />
                </View>

              </View>

              <View
                style={{ flex: 2, flexDirection: 'row' }}
              >


                <NodeCameraView
                  style={{ width: '100%' }}
                  //style={{ height: '100%' }}
                  //ref={cameraViewRef}
                  ref={(vb) => {
                    setPlayerRef(vb);
                  }}
                  //scaleMode={"ScaleAspectFit"}
                  //outputUrl={url}
                  outputUrl={selfUrl}
                  camera={config.cameraConfig}
                  audio={config.audioConfig}
                  video={config.videoConfig}
                  autopreview={true}
                  onStatus={(code, msg) => {
                  }}
                />
              </View>


            </View>

            <View
              style={{ flex: 1, backgroundColor: '' }}
            >

              <View
                style={{ flex: .3, flexDirection: 'row', backgroundColor: '' }}
              >

                <View
                  style={{ flex: 1 }}
                >
                  <TextInput
                    onChangeText={onChangeText2}
                    //value={text}
                    placeholder={"incoming Stream"}
                    returnKeyLabel={"return"}
                    caretHidden={true}
                  />

                </View>
                <View
                  style={{ flex: 1 }}
                >
                  <Button
                    onPress={() => {
                      playerRef2.start();
                    }}
                    title={"Set"}
                  >
                  </Button>
                </View>

              </View>

              <View
                style={{ flex: 2, flexDirection: 'row' }}
              >


                <NodePlayerView
                  style={{ width: '100%' }}
                  ref={(vb) => {
                    setPlayerRef2(vb);
                  }}
                  inputUrl={docUrl}
                  scaleMode={"ScaleAspectFit"}
                  bufferTime={300}
                  maxBufferTime={1000}
                  autoplay={false}
                />

              </View>

            </View>


          </View>

          <View
            style={{ flex: 1, flexDirection: "column" }}
          >
            <MenuBottom
              addPosts={addPosts}
            />

          </View>


          <CreatePostBottomSheet
            rbCreatePostSheetRef={refCreatePostBottomSheet}
            navigation={props.navigation}
            postType={"post"}
            postTypeId={""}
          />
          <DotsBottomSheet
            refDotPostBottomSheet={refDotPostBottomSheet}
            navigation={props.navigation}
          />
        </View>
      </BaseSafeAreaView >
    </>
  );
};

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


export default ChannelScreen;
