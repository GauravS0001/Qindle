import React, { useState, useEffect, useCallback } from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList
} from 'react-native';
import colors from '../../../res/colors';

import Heart from '../../components/svg/Heart'
import images from '../../../res/images_url';
import TextareaWithBackground from '../../components/post/TextareaWithBackground';
import RNcameraTop from '../../components/post/RNcameraTop';
import RNcameraBottom from '../../components/post/RNcameraBottom';
import BackgroundDots from '../../components/UI/BackgroundDots';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CameraRoll from "@react-native-community/cameraroll";
import FastImage from 'react-native-fast-image'
import * as types from '../../screens/startup/types'
import { useDispatch, useSelector } from 'react-redux';
import Sent from '../../../res/images/Sent.svg';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');
import { POST_ICON_DETAILS } from '../../api/APIConstants';
import PostActionsIconsDetails from '../../components/post/PostActionsIconsDetails'

const IconScreen = props => {  // this is a new route 
  const dispatch = useDispatch();
  const comments = useSelector(
    state => state.commentPost.details,
  );

  const [commentsRef, setCommentsRef] = useState('');
  const [commentsStatus, setCommentsStatus] = useState('');

  useEffect(() => {

    setCommentsStatus(false)
    setCommentsRef([])
    let endpoint = POST_ICON_DETAILS + '/' + props.route.params.item._id
    var request = {
      method: 'GET',
    };
    request.headers = {
      "Content-Type": "application/json"
    }
    fetch(endpoint, request)
      .then(resp => resp.json())
      .then(json => {

        setTimeout(() => {
          let encryptData = aesEcryptionDecryption.decryptData(json);
          let result = JSON.parse(encryptData)
          console.log("result", result)
          setCommentsRef(result);
          setCommentsStatus(true)
        }, 2000)

      })
      .catch(error => {

      });




  }, [props.route.params.item._id]);


  if (commentsStatus == false && commentsRef.length == 0) {
    return (
      <>
        <Text>Loading...</Text>
      </>
    )
  }
  else {
    return (
      <>
        <FlatList
          style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ paddingBottom: 20 }}
          data={commentsRef}
          horizontal={false}
          extraData={commentsRef}
          keyExtractor={item => { return item._id + Math.random(); }}
          renderItem={itemData => (
            <>
              <View>
                <PostActionsIconsDetails
                  item={itemData.item}
                />
              </View>
            </>
          )}
        />

      </>
    );
  }
};

const styles = StyleSheet.create({
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
  },
  bg_color_dots: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  button_container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 26,
    marginHorizontal: 10,
  },
  pic: {
    borderRadius: 30,
    width: 30,
    height: 30,
    backgroundColor: '#C4C4C4',
  },
  asara_skip_container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  asara_speaker_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  skip_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
  },
  online_icon: {
    width: 10,
    height: 10,
    backgroundColor: '#0EC92D',
    borderColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    margin: 2,
  },
  list_container: {
    marginTop: 10,
    flex: 3,
    // backgroundColor: 'pink',
  },
  system_card: {
    backgroundColor: '#03203A',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
  },
  chat_left_text: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 24,
    margin: 10,
  },
  hobbies_card: {
    backgroundColor: '#055F9B',
    borderColor: colors.white,
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  system_card_left: {
    backgroundColor: '#03203A',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  system_card_right: {
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
    maxWidth: '80%',
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
  },
  question_container: {
    marginHorizontal: 20,
    flex: 5,
  },
  fulltext: {
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  arrow_validation: { flex: 2, marginHorizontal: 0 },
  textinput_container: { marginLeft: 0, flex: 8 },
  tap_here_container: {
    marginLeft: 0,
    flex: 8,
    color: colors.white,
  },
});


export default IconScreen;
