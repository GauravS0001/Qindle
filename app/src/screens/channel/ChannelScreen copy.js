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


import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import { USER_COMMUNITY, RECO_COMMUNITY } from '../../api/APIConstants';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');
import MyCommunityHead from '../../components/UI/MyCommunityHead';
import TimeAgo from 'react-native-timeago';
import images from '../../../res/images_url';
import messaging from '@react-native-firebase/messaging';

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


  const _user = useSelector(state => state.user); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);

  const dispatch = useDispatch();
  //setUserPost([])

  useEffect(() => {
    setUserPost([])
    setLoading(true);
    setTimeout(() => {
      let _data = [
        {
          "_id": 1, title: "bhakti",
          data: [
            {
              "_id": 11, title: 'Aarti & Chalisa',
              assets: [
                {

                  '_id': 'sdsa',
                  'title': 'ॐ जय जगदीश हरे आरती Om Jai Jagdish Hare Aarti I ANURADHA PAUDWAL I Vishnu Aarti I Video SongAartiyan',
                  'type': 'youtube',
                  'icon': 'http://img.youtube.com/vi/3ucCEjXS9n8/0.jpg',
                  'videoId': '3ucCEjXS9n8'
                },
                {
                  '_id': 'sdsa',
                  'title': 'Durga Maa Aarti - Jai Ambe Gauri by Alka Yagnik | Mata Ki Aarti | Mata Rani Ke Bhajan | Aarti आरती',
                  'type': 'youtube',
                  'icon': 'http://img.youtube.com/vi/Kw6J7e8lTDM/0.jpg',
                  'videoId': 'Kw6J7e8lTDM'
                },
                {

                  '_id': 'sdsa',
                  'title': 'Siddhivinayak Aarti from Siddhiviniyak Temple Mumbai,Deva Shri Ganesha,Vignharta Shree Siddhivianyak',
                  'type': 'youtube',
                  'icon': 'http://img.youtube.com/vi/_oOQ5UYKAKo/0.jpg',
                  'videoId': '_oOQ5UYKAKo'
                }
                ,
                {

                  '_id': 'sdsa',
                  'title': 'Laxmi Aarti by Anuradha Paudwal | Om Jai Laxmi Mata | लक्ष्मीजी की आरती हिंदी',
                  'type': 'youtube',
                  'icon': 'http://img.youtube.com/vi/zdZ67AM47u8/0.jpg',
                  'videoId': 'zdZ67AM47u8'
                },
                {

                  '_id': 'sdsa',
                  'title': 'Aarti Kunj Bihari Ki || आरती कुंजबिहारी की || Vandana Vajpai || Most Popular Aarti Of Krishna',
                  'type': 'youtube',
                  'icon': 'http://img.youtube.com/vi/8jcUitdjbVY/0.jpg',
                  'videoId': '8jcUitdjbVY'
                }
                ,
                {

                  '_id': 'sdsa',
                  'title': 'श्री हनुमान चालीसा Hanuman Chalisa I GULSHAN KUMAR I HARIHARAN, Full HD Video, Shree Hanuman Chalisa',
                  'type': 'youtube',
                  'icon': 'http://img.youtube.com/vi/AETFvQonfV8/0.jpg',
                  'videoId': 'AETFvQonfV8'
                }


              ]
            },
            {
              "_id": 12, title: 'Bhajan',
              assets: [
                {

                  '_id': 'sdsa',
                  'title': 'बुधवार भक्ति : नॉनस्टॉप गणेश जी के भजन Nonstop Ganesh Ji Ke Bhajan | Ganesh Songs | Ganesh Ji Bhajan',
                  'type': 'youtube',
                  'icon': 'http://img.youtube.com/vi/WgGzy3cRFHQ/0.jpg',
                  'videoId': 'WgGzy3cRFHQ'
                }
              ]
            },
            {
              "_id": 13, title: 'Live telecast',
              assets: [
                {
                  '_id': 'sdsa',
                  'title': 'live',
                  'type': 'youtube',
                  'url': ''
                }
              ]
            },
            {
              "_id": 15, title: 'Bhakti podcast',
              assets: [
                {
                  '_id': 'sdsa',
                  'title': 'bhakti',
                  'type': 'youtube',
                  'url': ''
                }
              ]
            },
            {
              "_id": 16, title: 'Gurbani',
              assets: [
                {
                  '_id': 'sdsa',
                  'title': 'gurbani',
                  'type': 'youtube',
                  'url': ''
                }
              ]
            }]
        },
        {
          "_id": 2, title: "Old Song",
          data: [
            {
              "_id": 111, title: 'Popular 70-80s',
              assets: [
                {

                  '_id': 'sdsa',
                  'title': "70's Evergreen Hits | Romantic 70s | 70s Hits Hindi Songs | Audio Jukebox",
                  'type': 'youtube',
                  'icon': 'http://img.youtube.com/vi/rXPCJG42qqQ/0.jpg',
                  'videoId': 'rXPCJG42qqQ'
                },
                {

                  '_id': 'sdsa',
                  'title': 'Best Old Hindi Songs of Lata Mangeshkar & Kishore Kumar | लता मंगेशकर और किशोर कुमार के पुराने गीत',
                  'type': 'youtube',
                  'icon': 'http://img.youtube.com/vi/iKxyBt9GBbM/0.jpg',
                  'videoId': 'iKxyBt9GBbM'
                }
              ]
            },
            {
              "_id": 112, title: 'Kishore Kumar hits',
              assets: [
                {

                  '_id': 'sdsa',
                  'title': 'Kishore Kumar Hit Songs I Kishore Kumar in Happy Mood I Romantic songs of kishore kumar',
                  'type': 'youtube',
                  'icon': 'http://img.youtube.com/vi/BT4MQ2gA65Q/0.jpg',
                  'videoId': 'BT4MQ2gA65Q'
                }
              ]
            },
            {
              "_id": 113, title: 'Romance Favorites',
              assets: [
                {
                  '_id': 'sdsa',
                  'title': 'rom fav',
                  'type': 'youtube',
                  'url': ''
                }
              ]
            },
            {
              "_id": 114, title: 'Late Mangeshkar Hits',
              assets: [
                {

                  '_id': 'sdsa',
                  'title': 'लता मंगेशकर एंड मुहम्मद रफ़ी के सर्वोत्तम गाने | Old Hindi Songs of Lata Mangeshkar & Muhammed Rafi',
                  'type': 'youtube',
                  'icon': 'http://img.youtube.com/vi/hvuk7bU5gyU/0.jpg',
                  'videoId': 'hvuk7bU5gyU'
                }
              ]
            },
            {
              "_id": 115, title: 'Heartbreak',
              assets: [
                {
                  '_id': 'sdsa',
                  'title': 'hert b',
                  'type': 'youtube',
                  'url': ''
                }
              ]
            },
            {
              "_id": 116, title: 'Mohd Rafi Hits',
              assets: [
                {
                  '_id': 'sdsa',
                  'title': 'm rafi',
                  'type': 'youtube',
                  'url': ''
                }
              ]
            },
          ]
        },
        {
          "_id": 3, title: "Romantic", data: []
        },
        { "_id": 4, title: "Radio", data: [] },
        { "_id": 5, title: "Meditation", data: [] },
        { "_id": 6, title: "Sleep", data: [] },
        { "_id": 7, title: "Ghazals", data: [] }
      ]
      setUserPost(_data)
      setLoading(false)
      _data[0].clickedItem = true;
      setClickedItem(_data[0])
      setUserPostSub(_data[0].data)

    })

  }, []);

  const loadData = (item) => {
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
      <TouchableOpacity
        onPress={() => {
          loadData(item)
        }}
      >
        <View
          style={{
            marginTop: 10,
            marginLeft: 12,
            marginBottom: 10,
            border: item.clickedItem ? 1 : 0,
            borderBottomColor: item.clickedItem ? 'red' : 'white',
            borderTopColor: 'red',
            borderLeftColorColor: 'red',
            borderRightColorColor: 'red',
            padding: 10
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: item.clickedItem ? 'bold' : 'normal'
            }}
          >{item.title}</Text>
        </View>
      </TouchableOpacity>
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
            <MenuTop />
          </View>

          <View style={styles.bg_color_dots}>

            <View >
              <ScrollView>
                <FlatList
                  data={userPost}
                  keyExtractor={item => item._id}
                  horizontal={true}
                  renderItem={itemData => (
                    <>
                      {renderTop(itemData.item)}
                    </>
                  )}
                />
              </ScrollView>
            </View>
            <View>

              <ScrollView
                style={{

                }}>
                <FlatList
                  data={userPostSub}
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
                          }}
                        >{itemData.item.title}</Text>

                        <FlatList
                          data={itemData.item.assets}
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
