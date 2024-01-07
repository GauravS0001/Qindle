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
    Category: "Bhakti",
    data: [
      {
         Subcat: 'Aarti & Chalisa',
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
        Subcat: 'Bhajan',
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
      ]
  },
  {
     Category: "Old Songs",
    data: [
      {
         Subcat: 'Popular 70-80s',
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
        Subcat: 'Kishore Kumar hits',
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
      }
    ]
  },
]

  return (
   <View style={{height: "100%", width: "100%", backgroundColor: "white"}}>
     <View style={{height: 100, width: "100%", backgroundColor: "#055AbB"}}>

      <TouchableOpacity style={{height: 40, width: 40, backgroundColor: "transparent", position: 'absolute', top: 6.5, justifyContent: "center", alignItems: "center", left: 3, top: 13}}>
        <Image source={require("../../../res/images/Back2.png")} style={{height: 40, width: 40}}/>
      </TouchableOpacity>
      <Text style={{fontSize: 22, fontWeight: "bold", color: "white", top: 16, left: 45}}>Channels</Text>
      
       <View style={{height: 50, width: "100%", backgroundColor: "transparent", top: 25}}>
        <ScrollView style={{height: 50, width: "100%", backgroundColor: "transparent"}} horizontal={true} showsHorizontalScrollIndicator={false}>
          {TopOptions.map((item, index)=>(

            <TouchableOpacity key={index} style={{height: 35, paddingLeft: 8, marginLeft: 10, backgroundColor: "transparent", paddingRight: 8,
            borderBottomWidth: selectedTabIndex === index ? 2 : 0,
            borderBottomColor: selectedTabIndex === index ? 'white' : 'transparent',
            }}
            onPress={() => handleTabPress(index)}
            >
             <Text style={{top: 8, fontWeight: "bold", fontSize: 16, color: "white"}}>{item.name}</Text>
            </TouchableOpacity>
         
         ))}
          <View style={{height: 50, width: 10}}></View>
        </ScrollView>
       </View>
     </View>

     <ScrollView style={{height: 300, width: "100%", top: 0, paddingLeft: 15}}>
     {vdata.map((item,index)=>(
       <View key={index}>
         <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 25}}>{item.Category}</Text>
        
        {item.data.map((subcat, index)=>(
          <View key={index}>
            <Text style={{left: 2, fontWeight: "bold", fontSize: 18.5, marginTop: 10}}>{subcat.Subcat}</Text>

               <ScrollView style={{height: 200, width: "96.5%", backgroundColor: "transparent", top: 3, left: -10}} horizontal={true} showsHorizontalScrollIndicator={false}>
                  {subcat.assets.map((itm, index)=>(
                  <View style={{height: 180, width: 300, backgroundColor: "white", marginLeft: 15, top: 10, elevation: 5, borderRadius: 10}}>
                    <Text style={{left: 12, marginTop: "43%", width: "91%"}} numberOfLines={2}>{itm.title}</Text>
                  </View>
                  ))}

                  <View style={{height: 180, width: 10}}></View>

               </ScrollView>

          </View>
          
        ))}

      </View>
       
     ))}
        
        <View style={{height: 100, width: "100%"}}></View>
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
