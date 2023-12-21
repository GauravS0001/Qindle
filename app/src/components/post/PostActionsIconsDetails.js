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
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
//import Like from '../svg/Like'
import Done from '../svg/Done'
//import Heart from '../svg/Heart'
import Heart_Line from '../svg/Heart_Line'
import Heart_feel from '../svg/Heart_feel'
import Quick_Comment from '../svg/Quick_Comment'
import Repost_line from '../svg/Repost_line'
import * as types from '../../screens/startup/types'
import Sent from '../svg/Sent' //to replace with share icon
import PostActionsCommentsDetails from '../../components/post/PostActionsCommentsDetails'
import { useNavigation } from '@react-navigation/native';
import CommentTextArea from '../../components/UI/CommentText';

import Angry from '../../../res/images/Angry.svg'
import Happy_1 from '../../../res/images/Happy_1.svg'
import Wow from '../../../res/images/Wow.svg'
import Cry from '../../../res/images/Cry.svg'

import Like from '../../../res/images/Like.svg'
import Heart from '../../../res/images/Heart.svg'
//import Heart_Line from '../svg/Heart_Line'


const PostActionsIconsDetails = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <>

      <View style={{ flex: 1, flexDirection: "row", padding: 20 }}>
        <View
          style={{ paddingRight: 10 }}
        >
          <Text>{props.item.usersinfo.name}</Text>
        </View>
        {
          props.item.icon == 'Happy_1' ?
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                props.selectIcon('Happy_1');
              }}>
              <Happy_1 style={{ flex: 1, flexDirection: "row" }} />
            </TouchableOpacity>
            : props.item.icon == 'Wow' ?
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  props.selectIcon('Wow');
                }}>
                <Wow style={{ flex: 1, flexDirection: "row", marginLeft: 10 }} />
              </TouchableOpacity>
              : props.item.icon == 'Cry' ?
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    props.selectIcon('Cry');
                  }}>
                  <Cry style={{ flex: 1, flexDirection: "row", marginLeft: 10 }} />
                </TouchableOpacity>
                : props.item.icon == 'Angry' ?
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      props.selectIcon('Angry');
                    }}>
                    <Angry style={{ flex: 1, flexDirection: "row", marginLeft: 10 }} />
                  </TouchableOpacity>
                  : props.item.icon == 'Like' ?
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => {
                        props.selectIcon('Like');
                      }}>
                      <Like style={{ flex: 1, flexDirection: "row", marginLeft: 10 }} />
                    </TouchableOpacity>
                    : props.item.icon == 'Heart' ?
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          props.selectIcon('Heart');
                        }}>
                        <Heart style={{ flex: 1, flexDirection: "row", marginLeft: 10 }} />
                      </TouchableOpacity>
                      : null
        }
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
  username: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 26,
    marginHorizontal: 10,
  },
});


export default PostActionsIconsDetails;
