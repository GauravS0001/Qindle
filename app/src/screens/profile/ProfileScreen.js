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
  Image
} from 'react-native';
import colors from '../../../res/colors';
import MenuBottom from '../../components/UI/MenuBottomHealth';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheet';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheet';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import branch, { BranchEvent } from 'react-native-branch'
import images from '../../../res/images_url';
import CreatePostView from '../../components/UI/ProfileItems';
import Text_Post from '../../../res/images/Text_Post.svg';
import Send_Postcard from '../../../res/images/Send_Postcard.svg';
import Photo_Memory from '../../../res/images/Photo_Memory.svg';
import Video_Story from '../../../res/images/Video_Story.svg';
import Ask_Que from '../../../res/images/Ask_Que.svg';
import { USER_COMMUNITY, RECO_COMMUNITY } from '../../api/APIConstants';

var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');
const ProfileScreen = props => {
  const _user = useSelector(state => state.user); //!!state.auth.token
  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  const dispatch = useDispatch();
  let _calculateAge;
  let username = _user.userDetails._id
  let mobileNO
  let emergenyContact
  try {
    let _birthday = new Date(_user.userDetails.userOnboadingData.dob);
    var ageDifMs = Date.now() - _birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    _calculateAge = Math.abs(ageDate.getUTCFullYear() - 1970).toString();
    username = _user.userDetails.userOnboadingData.name;
    mobileNO = _user.userDetails.userOnboadingData.mobile_no;
    emergenyContact = _user.userDetails.userOnboadingData.emergency_contact;
  } catch (error) {

  }

  const onItemPress = item => {

  };
  let post_array = [
    {
      icon: <Text_Post />,
      name: 'Notifications',
      root: 'TextPost',
      navigate: 'TextPostScreen',
    },
    {
      icon: <Photo_Memory />,
      name: 'Address',
      root: 'ImagePost',
      navigate: 'ImagePostScreen',

    }
  ];
  useEffect(() => {
    dispatch({
      type: types.GET_USER_FRIENDS,
      userId: _user.userDetails._id
    })

  }, []);

  const friends_array = useSelector(
    state => state.userPost.userFriends,
  );
  const [friends, setFriends] = useState(0);
  const [community, setCommunity] = useState(0);
  const userPost = useSelector(
    state => state.userPost,
  );

  useEffect(() => {
    let i = 0;
    friends_array.forEach(element => {
      i++
    });
    setFriends(i)
  }, [friends_array]);


  useEffect(() => {
    let endpoint = USER_COMMUNITY + '/' + _user.userDetails._id
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
          let _data = result.userJoinedCommunities.length + result.userCreatedCommunities.length + result.getAllPublicCommunitiesData.length
          console.log('_data_data_data_data_data', _data);
          setCommunity(_data)
        })
      })
      .catch(error => {

      });

  }, []);



  return (
    <View>
      <View style={{height: 55, width: "100%", backgroundColor: "#055F9B"}}>
      <TouchableOpacity style={{height: 45, width: "45%", backgroundColor: "transparent", top: 5}}
      onPress={() => props.navigation.goBack()}>
       <Image source={require('../../../res/images/Back2.png')} style={{height: 35,width: 35, top: 8, left: 7}}/>
        <Text style={{color: "white", position: 'absolute', fontSize: 17.5, fontWeight: 'bold',
         top: 13, left: 50}}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{height: 26, width: 56, borderColor: "white", borderWidth: 1, position: 'absolute', borderRadius: 5, justifyContent: 'center', alignItems: 'center', left: "82%", top: 17}}>
        <Text style={{color: "white", fontWeight: 'bold', fontSize: 16}}>Edit</Text>
      </TouchableOpacity>


      </View>
      <View style={{height: "100%", width: "100%", backgroundColor: "gray"}}>
        <ScrollView style={{width: "100%", backgroundColor: "white"}}>
          <View style={{height: 445, width: "100%", backgroundColor: "#055F9B"}}>
            <View style={{height: 140, width: 140, borderRadius: 100, borderColor: "white", borderWidth: 5, left: "33.5%", top: 20}}>
              <Image source={require('../../../res/images/oldman.jpeg')} style={{height: 130.5, width: 130.5, borderRadius: 140}}/>
            </View>
            <View style={{height: 40, width:"100%", backgroundColor: "transparent", top: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: "white", fontSize: 17.5, fontWeight: 'bold'}}> {username}Solanki</Text>
               <Text style={{top: 2, fontWeight: 'bold', fontSize: 14.8, color: "rgb(208, 208, 210)"}}>  Age : 22 years</Text>
            </View>

            <View style={{height: 150, width: "100%", backgroundColor: "transparent", top: 60, justifyContent: 'center', flexDirection: 'row'}}>
              <View style={{height: 86, width: 113, top: 20, marginLeft: 0, borderRadius: 13, borderColor: "#0f77bc", borderWidth: 1.5}}>
                <View style={{height: 35, width: "100%", backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', top: 10}}>
                <Text style={{color: "white", fontWeight: 'bold', fontSize: 22.5}}>{userPost.userPostData.length}</Text>
                </View>
                <View style={{height: 30, width: "100%", backgroundColor: "transparent", top: 5, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 16, color: "#d6d6d6"}}>Posts</Text>
                </View>
              </View>
              <View style={{height: 86, width: 113, top: 20, marginLeft: 10, borderRadius: 13, borderColor: "#1580c8", borderWidth: 1.5}}>
              <View style={{height: 35, width: "100%", backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', top: 10}}>
                <Text style={{color: "white", fontWeight: 'bold', fontSize: 22.5}}>{friends}</Text>
                </View>
                <View style={{height: 30, width: "100%", backgroundColor: "transparent", top: 5, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 16, color: "#d6d6d6"}}>Friends</Text>
                </View>
              </View>
              <View style={{height: 86, width: 113, top: 20, marginLeft: 10, borderRadius: 13, borderColor: "#1580c8", borderWidth: 1.5}}>
              <View style={{height: 35, width: "100%", backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', top: 10}}>
                <Text style={{color: "white", fontWeight: 'bold', fontSize: 22.5}}>{community}</Text>
                </View>
                <View style={{height: 30, width: "100%", backgroundColor: "transparent", top: 5, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 16, color: "#d6d6d6"}}>Community</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={{height: 55, width: "92.5%", backgroundColor: "rgb(255, 229, 114)", top: 40, left: "4%", borderRadius: 10}}>
              <Image source={require("../../../res/images/DocApp.png")} style={{height: 35, width: 35, top: 10, left: 10}}/>
              <Text style={{position: 'absolute', top: 16, fontWeight: 'bold', fontSize: 17, left: 60, color: "rgb(36, 36, 36)"}}>0 upcoming appointments</Text>
              <Image source={require("../../../res/images/Forward.png")} style={{position: 'absolute', height: 28, width: 28, left: "90%", top: 14}}/>
            </TouchableOpacity>

          </View>


          <View style={{height: 380, width: "100%", backgroundColor: "white"}}>
            <View style={{width: "93%", elevation: 5, backgroundColor: "white", borderRadius: 10, top: 18, left: 14}}>
              <TouchableOpacity style={{height: 80, width: "100%", borderBottomColor: "rgb(241, 239, 239)", borderBottomWidth: 2}}>
                <Image source={require("../../../res/images/bell2.png")} style={{height: 40, width: 40, left: 16, top: 20}}/>
                 <Text style={{fontWeight: 'bold', position: 'absolute', top: 15, left: 68, fontSize: 17}}>Notifications</Text>
                  <Text style={{color: "gray", left: 68, fontSize: 15}}>You have 0 notifications</Text>
                   <Image source={require('../../../res/images/Forward3.png')} style={{position: 'absolute', height: 30, width: 30, top: 25, left: "89.5%"}}/>
              </TouchableOpacity>
              <TouchableOpacity style={{height: 80, width: "100%", borderBottomColor: "rgb(241, 239, 239)", borderBottomWidth: 2}}>
                <Image source={require("../../../res/images/Address.png")} style={{height: 40, width: 40, left: 16, top: 20}}/>
                 <Text style={{fontWeight: 'bold', position: 'absolute', top: 15, left: 68, fontSize: 17}}>Addresses</Text>
                  <Text style={{color: "gray", left: 68, fontSize: 15}}>Add or edit the address</Text>
                   <Image source={require('../../../res/images/Forward3.png')} style={{position: 'absolute', height: 30, width: 30, top: 25, left: "89.5%"}}/>
              </TouchableOpacity>
              <TouchableOpacity style={{height: 80, width: "100%"}}
              onPress={()=>{props.navigation.navigate("ProfileRems")}}>
                <Image source={require("../../../res/images/reminder.png")} style={{height: 40, width: 40, left: 16, top: 20}}/>
                 <Text style={{fontWeight: 'bold', position: 'absolute', top: 15, left: 68, fontSize: 17}}>Reminders</Text>
                  <Text style={{color: "gray", left: 68, fontSize: 14}}>View, add & manage reminders</Text>
                   <Image source={require('../../../res/images/Forward3.png')} style={{position: 'absolute', height: 30, width: 30, top: 25, left: "89.5%"}}/>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
  },
  boxSearch: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'yellow',
  },
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


export default ProfileScreen;
