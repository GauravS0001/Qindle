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
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>

        <View style={{ flex: 1, flexDirection: "column" }}>

          <View
            style={{ flex: 1.5, flexDirection: "column", backgroundColor: '#055F9B' }}
          >
            <View style={{ ...styles.container, flexDirection: "row" }}>
              <View style={styles.box}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <Image source={require('../../components/UI/images/back.png')}
                    style={{ width: 18, height: 18 }}
                  />

                </TouchableOpacity>
              </View>
              <View style={styles.boxSearch}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >Profile</Text>
              </View>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate('SearchScreen', {//
                    //   screen: 'SearchScreen',
                    //   params: {
                    //   }
                    // })
                  }}
                >
                  <View
                    style={{ borderColor: "white", borderWidth: 1, padding: 5, borderRadius: 5 }}
                  >
                    <Text
                      style={{ color: "white" }}
                    >Edit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

          </View>

          <View
            style={{ flex: 8.5, flexDirection: "column", }}
          >
            <ScrollView>
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#055F9B',
                minHeight: 200
              }}>
                <Image source={require('../../components/UI/images/no-image.png')}
                  style={{ width: 64, height: 64, borderRadius: 20 }}
                />
                <Text style={{ marginTop: 10, fontSize: 18, color: "#ffffff" }}>{username}</Text>
                <Text style={{ marginTop: 10, fontSize: 14, color: "#ddd", marginBottom: 10 }}>Age: {_calculateAge}</Text>

              </View>

              <View style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: '#055F9B'
              }}>
                <View style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: "white",
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 15,
                  margin: 20
                }}>
                  <Text style={{ marginTop: 10, fontSize: 14, color: "white" }}>Posts</Text>
                  <Text style={{ marginTop: 10, fontSize: 14, color: "#ddd", marginBottom: 10 }}>{userPost.userPostData.length}</Text>

                </View>
                <View style={{
                  flex: 1, alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: "white",
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 15,
                  margin: 20
                }}>
                  <Text style={{ marginTop: 10, fontSize: 14, color: "white" }}>Friends</Text>
                  <Text style={{ marginTop: 10, fontSize: 14, color: "#ddd", marginBottom: 10 }}>{friends}</Text>
                </View>
                <View style={{
                  flex: 1, alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: "white",
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 15,
                  margin: 20
                }}>
                  <Text style={{ marginTop: 10, fontSize: 14, color: "white" }}>Community</Text>
                  <Text style={{ marginTop: 10, fontSize: 14, color: "#ddd", marginBottom: 10 }}>{community}</Text>
                </View>
              </View>

              <FlatList
                data={post_array}
                keyExtractor={item => item.name}
                renderItem={itemData => (
                  <CreatePostView
                    item={itemData.item}
                    onItemPress={onItemPress}
                  // navigation={navigation}
                  />
                )}
              />

            </ScrollView>
          </View>

          {/* <View
            style={{ flex: 1, flexDirection: "column", }}
          >
            <MenuBottom
              addPosts={addPosts}
            />
          </View> */}
















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
      </BaseSafeAreaView >
    </>
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
