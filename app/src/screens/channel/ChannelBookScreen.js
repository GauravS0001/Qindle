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
  Image,
  ScrollView
} from 'react-native';
import colors from '../../../res/colors';
import MenuTop from '../../components/UI/MenuTopChannels';
import MenuBottom from '../../components/UI/MenuBottomChannel';

import ChannelsCardSection from '../../components/UI/ChannelsCardSection';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheet';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheet';
import ChannelVideoTop from '../../components/UI/ChannelVideoTop';
import { IMAGE_PROTOCOL, IMAGE_HOST, IMAGE_BASE } from '../../api/APIConstants';
import { SliderBox } from "react-native-image-slider-box";


import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import { USER_COMMUNITY, RECO_COMMUNITY } from '../../api/APIConstants';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');
import MyCommunityHead from '../../components/UI/MyCommunityHead';
import TimeAgo from 'react-native-timeago';
import images from '../../../res/images_url';
import messaging from '@react-native-firebase/messaging';
import ChannelCategory from '../../components/UI/ChannelCategory';

import Slider from '../../components/UI/SliderLanding';

const initialState = {
  postText: '',
  selectedBackground: '',
  friends: [],
  communities: [],
  location: [],
  completed: false,
  from: 'home',
};

const ChannelBookScreen = props => {

  const [userPost, setUserPost] = useState([]);
  const [userPostSub, setUserPostSub] = useState(false);
  const [loading, setLoading] = useState(true);
  const [clickedItem, setClickedItem] = useState([]);


  const _user = useSelector(state => state.user); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);

  const dispatch = useDispatch();
  //setUserPost([])




  const _data = useSelector(
    state => state.channel,
  );


  useEffect(() => {
    setLoading(true);
    dispatch({
      type: types.GET_CHANNEL_DATA,
      payload: { type: 'all' },
    });
    setLoading(false);
  }, []);


  useEffect(() => {
    return;//
    if (_data.data[0]) {
      console.log(_data);
      _data.data[0].clickedItem = true;
      setUserPost(_data.data)
      setClickedItem(_data.data[0])
      setUserPostSub(_data.data[0].data)
    }
  }, [_data.data]);






  const loadData = (item) => {
     
  };

  const renderTop = item => {

   
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            loadData(item)
          }}
        >
          <View
            style={{
              marginTop: 20,
              marginLeft: 12,
              borderBottomWidth:1,
              borderColor: item.clickedItem ? 'white' : 'transparent',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                fontWeight: item.clickedItem ? 'bold' : 'normal'
              }}
            >{item.title} </Text>
          </View>
          {
            item.clickedItem ?
              <View
                style={{
                  marginLeft: 12,

                }}
              >
                <Text
                  style={{
                    width: '100%',
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                  }}
                ></Text>
              </View>
              : null
          }
        </TouchableOpacity>

      </>
    )
  }

  const addPosts = text => {
    refCreatePostBottomSheet.current.asaraType = "post"
    refCreatePostBottomSheet.current.asaraTypeId = ""
    refCreatePostBottomSheet.current.open()
  };


  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.textareaWithBackground}>
            <MenuTop
              userPost={[]}
              renderTop={renderTop}
            />
          </View>

          <View style={styles.bg_color_dots}>


            <ScrollView>
             
              <View style={styles.imgContainer}>
                <Text style={{
                  marginLeft: 12,
                  marginBottom:10,
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: '30%'
                }}></Text>
                <SliderBox autoplay images={['https://img.freepik.com/free-vector/red-grunge-style-coming-soon-design_1017-26691.jpg?w=1380&t=st=1671347744~exp=1671348344~hmac=5a3794b1fd67d64a0dddcb08f5b5184b4a95a3ab626f9bf49c5a5f1a10ccd269']} />
              </View>

            
            </ScrollView>

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
  textareaWithBackground: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#055F9B'
  },
  bg_color_dots: {
    flex: 7,
    flexDirection: 'column',
    alignSelf: 'stretch',
    //backgroundColor: '#055AbB'
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#055F9B'
  },
});

export default ChannelBookScreen;
