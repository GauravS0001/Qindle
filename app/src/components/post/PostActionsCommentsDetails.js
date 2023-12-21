import React, { useState, useRef, useEffect } from 'react';
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
import images from '../../../res/images_url';
import { useDispatch, useSelector } from 'react-redux';
import BaseSafeAreaView from '../UI/BaseSafeAreaView';
import Like from '../svg/Like'
import Done from '../svg/Done'
import Heart from '../svg/Heart'
import Heart_Line from '../svg/Heart_Line'
import Heart_feel from '../svg/Heart_feel'
import Quick_Comment from '../svg/Quick_Comment'
import Repost_line from '../svg/Repost_line'
import * as types from '../../screens/startup/types'
import Sent from '../svg/Sent' //to replace with share icon
import CommentTextArea from '../../components/UI/CommentTextReply';

const PostActionsCommentsDetails = props => {

  const _user = useSelector(state => state.user); //!!state.auth.token
  //const ref_input = useRef();
  let icon = _user.userDetails.userOnboadingData.icon;
  if (_user.userDetails._id != props.item.userId) {
    icon = props.item.icon;
  }


  return (
    <>


      <View
        style={{
          flexDirection: 'row',
          // alignItems: 'center',
          //backgroundColor: '#f2f2f2',
          flex: 18,
          paddingRight: 10,
          //width:'95%'
        }}>

        <View
          style={{
            width: 36,
            height: 36,
            marginTop: 10,
            // backgroundColor: '#FFFFFF',
            borderRadius: 30,
            borderColor: '#00000029',
            borderWidth: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{ uri: icon }}
            style={styles.pic}
          />
        </View>


        <View
          style={{
            marginLeft: 5,
            flex: 2,
            justifyContent: 'center',
          }}>
          <View style={{ ...styles.fulltext }}>
            <CommentTextArea
              postText={props.data.comment}
              editable={false}
            />
          </View>


        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", width: '81%', marginLeft: '15%', marginBottom: '2%' }}>

        <View style={{ flex: 2, flexDirection: "row", marginTop: 5 }}>
          <Text >Like</Text>
        </View>
        <View style={{ flex: 4, flexDirection: "row", marginTop: 5 }}>
          <Text >Reply</Text>
        </View>
        <View style={{ flex: 0.5, flexDirection: "row", marginTop: 5 }}>
          <Text >0</Text>
        </View>

        <View style={{ flex: 1, flexDirection: "row", alignItems: 'flex-end', }}>
          <Heart />
        </View>
      </View>
    </>


  );
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


export default PostActionsCommentsDetails;
