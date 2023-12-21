import React, { useState, useRef, useEffect } from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ToastAndroid
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../screens/startup/types';
import PostActionsComments from '../post/PostActionsComments'
import PostActionsIcons from '../post/PostActionsIcons'
import branch, { BranchEvent } from 'react-native-branch'

import Like from '../svg/Like'
import Done from '../svg/Done'
import Heart from '../svg/Heart'
import Heart_Line from '../svg/Heart_Line'
import Heart_feel from '../svg/Heart_feel'
import Quick_Comment from '../svg/Quick_Comment'
import Repost_line from '../../../res/images/Repost_line2' //../svg/Repost_line
import Share_Line from '../../../res/images/Share_Line2'

import Share_Line_svg from '../../../res/images/Share_Line.svg';

import Share from 'react-native-share';

import Sent from '../svg/Sent' //to replace with share icon
import Modal from "react-native-modal";


import Angry from '../../../res/images/Angry.svg'
import Happy_1 from '../../../res/images/Happy_1.svg'
import Wow from '../../../res/images/Wow.svg'
import Cry from '../../../res/images/Cry.svg'
//import Like from '../../../res/images/Like.svg'
//import Heart from '../../../res/images/Heart.svg'

const background_list = [
  { image: 'Grey', first_color: '#EBEBEB', second_color: '#EBEBEB', type: 'grey' },
  { image: 'Orange', first_color: '#FF8C34', second_color: '#FFBE8D', type: 'orange' },
  { image: 'Green', first_color: '#CCDE83', second_color: '#90A539', type: 'green' },
  { image: 'Purple', first_color: '#B14BB1', second_color: '#C28BC2', type: 'purple' },
  { image: 'Black', first_color: '#000000', second_color: '#000000', type: 'black' }
];

const PostActionsBottom = props => {
  const dispatch = useDispatch();


  const userLikeData = useSelector(
    state => state.userPost.userLikeData,
  );

  let item = props.item;

  const _user = useSelector(state => state.user); //!!state.auth.token

  const [isModalVisible, setModalVisible] = useState(false);
  const [userLikeIcon, setUserLikeIcon] = useState(<Like />);
  const [disableLikeIcon, setDisableLikeIcon] = useState(false);

  const toggleModal = () => {
    if (disableLikeIcon) {
      ToastAndroid.show("You have already reacted to this post", ToastAndroid.LONG);
      return
    }
    setModalVisible(!isModalVisible);
  };

  const selectIcon = (icon) => {
    setModalVisible(!isModalVisible);
    if (disableLikeIcon) {
      ToastAndroid.show("You have already reacted to this post", ToastAndroid.LONG);
      return
    }

    dispatch({
      type: types.SAVE_POST_ACTIONS,
      item,
      action: 'like',
      userId: _user.userDetails._id,
      icon: icon
    })


    dispatch({
      type: types.UPDATE_USER_LIKE,
      item,
      icon: icon
    })

  };


  useEffect(() => {
    userLikeData.forEach(element => {
      if (element[item._id] != undefined) {
        setDisableLikeIcon(true);
        switch (element[item._id]) {
          case 'Angry':
            setUserLikeIcon(<Angry />);
            break;
          case 'Happy_1':
            setUserLikeIcon(<Happy_1 />);
            break;
          case 'Wow':
            setUserLikeIcon(<Wow />);
            break;
          case 'Cry':
            setUserLikeIcon(<Cry />);
            break;
          case 'Like':
            setUserLikeIcon(<Like />);
            break;
          case 'Heart':
            setUserLikeIcon(<Heart />);
            break;
          default:
            break;
        }


      }
      //if (element._id == _item._id)
    });

  }, [userLikeData]);

  const actions = async (text) => {
    //share
    //heart
    //like
    //repost
    if (text == 'share') {
      
      // only canonicalIdentifier is required
      let branchUniversalObject = await branch.createBranchUniversalObject('canonicalIdentifier', {
        locallyIndex: true,
        title: item.title,
        contentDescription: item.description,
        contentMetadata: {
          ratingAverage: 5,
          customMetadata: {
            //userId: _user.userDetails._id
            postId: item._id
          }
        }
      })
      let shareOptions = { messageHeader: 'Open the link below', messageBody: 'Open the link below' }
      let linkProperties = { feature: 'share', channel: 'RNApp' }
      let controlParams = { $desktop_url: 'http://asara.com/home', $ios_url: 'http://asara.com/ios' }
      let { channel, completed, error } = await branchUniversalObject.showShareSheet(shareOptions, linkProperties, controlParams)



      return;
      let options = {
        message: 'Asara -' + item.title
      }
      //const shareResponse = await Share.open(options);
      Share.open(options)
        .then((res) => {
        })
        .catch((err) => {
        });
    }
    if (text == 'repost') {
      if (text == 'repost') {

        switch (item.type) {
          case 'video':
            props.navigation.navigate('RepostVideoScreen', {
              screen: 'CreateRepostTextVideoPostScreen',
              params: {
                image: [], //reove  pros
                item: item,
                //postText: item.title, //reove  pros
                //selectedBackground: background,
              }
            })

            break;
          case 'card':
            props.navigation.navigate('RepostImagePost', {
              screen: 'CreateRepostTextImagePostScreen',
              params: {
                image: [],
                item: item,
                //postText: item.title,
                //selectedBackground: background,
              }
            })

            break;
          case 'post':
            let background = ''
            if (props.item.template == 'grey') {
              background = background_list[0];
            }
            if (props.item.template == 'orange') {
              background = background_list[1];
            }
            if (props.item.template == 'green') {
              background = background_list[2];
            }
            if (props.item.template == 'purple') {
              background = background_list[3];
            }
            if (props.item.template == 'black') {
              background = background_list[4];
            }
            props.navigation.navigate('RepostTextPost', {
              screen: 'CreateRepostTextPostScreen',
              params: {
                postText: item.title,
                item: item,
                selectedBackground: background,
              }
            })
            break;

          default:
            break;
        }
      }
    }

    if (text == 'likeDetails') {
      props.navigation.navigate('IconScreen', {
        screen: 'IconScreen',
        params: {
          item: item
        }
      });
    }
    else {
      dispatch({
        type: types.SAVE_POST_ACTIONS,
        item,
        action: text,
        userId: _user.userDetails._id
      })
    }
  };

  return (
    <>

      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          //alignItems: 'center',
          justifyContent: 'space-between',
          // justifyContent: 'flex-start',
          //backgroundColor: 'green',
          //marginBottom: 15,
          marginTop: 15,
          paddingBottom: 15
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: .9,
            justifyContent: 'space-evenly',
            paddingLeft: 8,
          }}>

          {/**
          <Heart />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.row}
            onPress={() => {
              actions('heart');
            }}>
           
          </TouchableOpacity>
           */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.row}
            onPress={() => {
              actions('likeDetails');
            }}>
            {userLikeIcon}
            {/* <Like />*/}
          </TouchableOpacity>

          <Text>{item.likes}</Text>
          <Text> </Text>
        </View>

        <View style={{ flex: 3.5, justifyContent: 'space-between' }}>
          <PostActionsIcons
            isVisible={isModalVisible}
            comments={item.comments}
            selectIcon={selectIcon}
            disableLikeIcon={disableLikeIcon}
          />

        </View>



        {/**
        <Modal
          
          onBackdropPress={() => setModalVisible(false)}
          style={{ margin: 0 }}
          backdropOpacity={0}
        >
          <View style={{ flex: 1, }}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      */}

      </View>

      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // justifyContent: 'flex-start',
          marginBottom: 15,
          paddingBottom: 15,
          paddingTop: 15,
          borderTopColor: '#f2f2f2',
          borderBottomColor: '#f2f2f2',
          borderWidth: 1,
          borderLeftColor: 'white',
          borderRightColor: 'white'
        }}>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flex: .6
          }}
          onPress={() => {
            toggleModal()
            //actions('heart');
          }}>
          <View
            style={{
              flex: .6,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',

            }}>
            <Heart_Line />
            <Text>Like</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
          onPress={() => {
            actions('repost');
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              borderTopColor: 'white',
              borderBottomColor: 'white',
              borderWidth: 2,
              borderLeftColor: '#f2f2f2',
              borderRightColor: '#f2f2f2',
            }}
          >
            <Repost_line />
            <Text>Repost</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flex: .6
          }}
          onPress={() => {
            actions('share');
          }}>

          <View
            style={{
              flex: .6,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',

            }}>
            <Share_Line />
            <Text>Share</Text>
          </View>
        </TouchableOpacity>


      </View>


      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>

        <PostActionsComments
          item={props.item}
        />
      </View>

    </>
  );
};

const styles = StyleSheet.create({
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
    width: 50,
    height: 50,
    backgroundColor: '#C4C4C4',
  }
});

export default PostActionsBottom;
