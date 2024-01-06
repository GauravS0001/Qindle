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
  
  const addPosts = text => {
    refCreatePostBottomSheet.current.asaraType = "post"
    refCreatePostBottomSheet.current.asaraTypeId = ""
    refCreatePostBottomSheet.current.open()
  };

 
  const TopOptions = [{name: "All"}, {name: "Clips"}, {name: "Religion & Spirituality"}, {name: "Life & Spirituality"},
                      {name: "Health & Wellness"}, {name: "Music"}, {name: "News"}, {name: "Comedy"}];


  const [selectedTabIndex, setSelectedTabIndex] = useState(0); 

  const handleTabPress = (index) => {
    setSelectedTabIndex(index);
  };

  
 //#055AbB

 const vdata = [
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
            //  'icon': 'http://img.youtube.com/vi/3ucCEjXS9n8/0.jpg',
            'icon': IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + 'youtube/0.jpg',
            'videoId': '3ucCEjXS9n8'
          },
          {
            '_id': 'sdsa',
            'title': 'Durga Maa Aarti - Jai Ambe Gauri by Alka Yagnik | Mata Ki Aarti | Mata Rani Ke Bhajan | Aarti आरती',
            'type': 'youtube',
            'icon': IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + 'youtube/1.jpg',
            //'icon': 'http://img.youtube.com/vi/Kw6J7e8lTDM/0.jpg',
            'videoId': 'Kw6J7e8lTDM'
          },
          {

            '_id': 'sdsa',
            'title': 'Siddhivinayak Aarti from Siddhiviniyak Temple Mumbai,Deva Shri Ganesha,Vignharta Shree Siddhivianyak',
            'type': 'youtube',
            //'icon': 'http://img.youtube.com/vi/_oOQ5UYKAKo/0.jpg',
            'icon': IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + 'youtube/2.jpg',
            'videoId': '_oOQ5UYKAKo'
          }
          ,
          {

            '_id': 'sdsa',
            'title': 'Laxmi Aarti by Anuradha Paudwal | Om Jai Laxmi Mata | लक्ष्मीजी की आरती हिंदी',
            'type': 'youtube',
            //'icon': 'http://img.youtube.com/vi/zdZ67AM47u8/0.jpg',
            'icon': IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + 'youtube/3.jpg',
            'videoId': 'zdZ67AM47u8'
          },
          {

            '_id': 'sdsa',
            'title': 'Aarti Kunj Bihari Ki || आरती कुंजबिहारी की || Vandana Vajpai || Most Popular Aarti Of Krishna',
            'type': 'youtube',
            //'icon': 'http://img.youtube.com/vi/8jcUitdjbVY/0.jpg',
            'icon': IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + 'youtube/4.jpg',
            'videoId': '8jcUitdjbVY'
          }
          ,
          {

            '_id': 'sdsa',
            'title': 'श्री हनुमान चालीसा Hanuman Chalisa I GULSHAN KUMAR I HARIHARAN, Full HD Video, Shree Hanuman Chalisa',
            'type': 'youtube',
            //'icon': 'http://img.youtube.com/vi/AETFvQonfV8/0.jpg',
            'icon': IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + 'youtube/5.jpg',
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
            //'icon': 'http://img.youtube.com/vi/WgGzy3cRFHQ/0.jpg',
            'icon': IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + 'youtube/6.jpg',
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
            //'icon': 'http://img.youtube.com/vi/rXPCJG42qqQ/0.jpg',
            'icon': IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + 'youtube/7.jpg',
            'videoId': 'rXPCJG42qqQ'
          },
          {

            '_id': 'sdsa',
            'title': 'Best Old Hindi Songs of Lata Mangeshkar & Kishore Kumar | लता मंगेशकर और किशोर कुमार के पुराने गीत',
            'type': 'youtube',
            'icon': IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + 'youtube/8.jpg',
            //'icon': 'http://img.youtube.com/vi/iKxyBt9GBbM/0.jpg',
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
            'icon': IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + 'youtube/9.jpg',
            //'icon': 'http://img.youtube.com/vi/BT4MQ2gA65Q/0.jpg',
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
            'icon': IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + 'youtube/10.jpg',
            //'icon': 'http://img.youtube.com/vi/hvuk7bU5gyU/0.jpg',
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

]

  return (
   <View style={{height: "100%", width: "100%", backgroundColor: "white"}}>
     <View style={{height: 107, width: "100%", backgroundColor: "#055AbB"}}>

      <TouchableOpacity style={{height: 40, width: 40, backgroundColor: "transparent", position: 'absolute', top: 6.5, justifyContent: "center", alignItems: "center", left: 3}}>
        <Image source={require("../../../res/images/Back2.png")} style={{height: 40, width: 40}}/>
      </TouchableOpacity>
      <Text style={{fontSize: 23, fontWeight: "bold", color: "white", top: 10, left: 45}}>Channels</Text>
      
       <View style={{height: 50, width: "100%", backgroundColor: "transparent", top: 25}}>
        <ScrollView style={{height: 50, width: "100%", backgroundColor: "transparent"}} horizontal={true} showsHorizontalScrollIndicator={false}>
          {TopOptions.map((item, index)=>(

            <TouchableOpacity key={index} style={{height: 40, paddingLeft: 8, marginLeft: 10, backgroundColor: "transparent", paddingRight: 8,
            borderBottomWidth: selectedTabIndex === index ? 2 : 0,
            borderBottomColor: selectedTabIndex === index ? 'white' : 'transparent',
            }}
            onPress={() => handleTabPress(index)}
            >
             <Text style={{top: 8, fontWeight: "bold", fontSize: 17, color: "white"}}>{item.name}</Text>
            </TouchableOpacity>
         
         ))}
          <View style={{height: 50, width: 10}}></View>
        </ScrollView>
       </View>
     </View>

     <ScrollView style={{height: 300, width: "100%"}}>
     {vdata.map((item,index)=>(
       <View key={index}>
         <Text >{item.title}</Text>
        
        {item.data.map((subcat, index)=>(
          <View key={index}>
            <Text style={{left: 20}}>{subcat.title}</Text>

               {subcat.assets.map((itm, index)=>(
                <View>
                  <Text style={{left: 80, marginTop: 5}}>{itm.title}</Text>
                </View>
               ))}

          </View>
          
        ))}

      </View>
       
     ))}

     </ScrollView>
   </View>
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
