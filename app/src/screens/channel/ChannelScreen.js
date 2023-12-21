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

import CityFilter from '../../components/UI/CityFilter';

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

const ChannelScreen = props => {

  const [userPost, setUserPost] = useState([]);
  const [userPostSub, setUserPostSub] = useState(false);
  const [loading, setLoading] = useState(true);
  const [clickedItem, setClickedItem] = useState([]);

  const [eventActive, setEventActive] = useState(false);

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
    console.log('clearing ...')
    dispatch({
      type: types.GET_CHANNEL_DATA,
      payload: { type: 'all' },
    });
    setLoading(false);
  }, []);


  useEffect(() => {
    console.log('clearing ...2')
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
    dispatch({
      type: types.SET_TOP_MENU_CLICKEDITEM,
      payload: item,
    });

    if (item.title == "All") {
      dispatch({
        type: types.GET_CHANNEL_DATA,
        payload: { type: 'all' },
      });

    } else {
      dispatch({
        type: types.GET_CHANNEL_DATA,
        payload: { type: 'menu', item },
      });
    }

    let _eventActive = false;
    if (item.title.toLowerCase() == 'events') {
      _eventActive = true
    }
    setEventActive(_eventActive)

    return;
    setUserPost([])
    let data = [];
    userPost.forEach(element => {
      element.clickedItem = false;
      if (item._id == element._id) {
        element.clickedItem = true;
        setUserPostSub(element.data)
      }
      data.push(element);
    });
    //setClickedItem(item)
    setUserPost(data)
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
              //borderBottomWidth: 1,
              //borderColor: item.clickedItem ? 'white' : 'transparent',
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
              userPost={_data.menu}
              renderTop={renderTop}
            />
          </View>

          <View style={styles.bg_color_dots}>


            <ScrollView>



              {/* <View>
                <Slider type="Channel" widgetId="1" />
              </View>
              <View>
                <Slider type="Channel" widgetId="2" />
              </View>
              <View>
                <Slider type="Channel" widgetId="2" />
              </View> */}
              {eventActive &&
                <CityFilter />
              }
              <FlatList
                data={_data.data}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 50 }}
                keyExtractor={item => item._id}
                horizontal={false}
                renderItem={itemData => (
                  <>
                    <ChannelCategory
                      item={itemData}

                    />
                  </>
                )}
              />

              <View style={styles.imgContainer}>
                <TouchableOpacity
                  onPress={() => {
                    console.log(props.navigation)
                    props.navigation.navigate('ChannelBookScreen', {
                      screen: 'ChannelBookScreen',
                      params: {
                      }
                    });
                  }}
                >
                  <Text style={{
                    marginLeft: 12,
                    marginBottom: 10,
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 0
                  }}>Event - Book Now !</Text>
                  <SliderBox onCurrentImagePressed={() => {
                    props.navigation.navigate('ChannelBookScreen', {
                      screen: 'ChannelBookScreen',
                      params: {
                      }
                    });
                  }} autoplay images={['https://eventbooknow.com/uploads/events/103/103_EBN_Cover_1668239442.png']} />
                </TouchableOpacity>
              </View>

              <FlatList
                data={_data.data}
                contentContainerStyle={{ paddingBottom: 50 }}
                keyExtractor={item => item._id}
                horizontal={false}
                renderItem={itemData => (
                  <>
                    <View
                      style={{
                        backgroundColor: '',
                        flex: 1
                      }}
                    >

                      <Text
                        style={{
                          marginLeft: 12,
                          fontWeight: 'bold',
                          fontSize: 16,
                          marginTop: 20
                        }}
                      >{itemData.item.title}</Text>



                      <FlatList
                        data={itemData.item.data}
                        keyExtractor={item => item._id}
                        horizontal={true}
                        renderItem={_itemData => (
                          <>
                            <ChannelsCardSection
                              item={_itemData}
                              navigation={props.navigation}
                              dotPosts={refDotPostBottomSheet}
                            />
                          </>
                        )}
                      />

                    </View>
                  </>
                )}
              />

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

export default ChannelScreen;
