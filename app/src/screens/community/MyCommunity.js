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
import MenuTopCommunity from '../../components/UI/MenuTopCommunity';
import MenuBottomCommunity from '../../components/UI/MenuBottomCommunityDisabled';
import MyCommunityCard from '../../components/UI/MyCommunityCard';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheetDisabled';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheetCommunity';

import DotsBottomSheet2 from '../../components/bottomsheet/DotsBottomSheetRecoCommunity';

import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import { USER_COMMUNITY, RECO_COMMUNITY } from '../../api/APIConstants';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');
import MyCommunityHead from '../../components/UI/MyCommunityHead';
import AsaraSpeaker from '../../../src/components/svg/AsaraSpeaker'
import images from '../../../res/images_url';
import messaging from '@react-native-firebase/messaging';
import MyCommunityCardReco from '../../components/UI/MyCommunityCardReco';

const initialState = {
  postText: '',
  selectedBackground: '',
  friends: [],
  communities: [],
  location: [],
  completed: false,
  from: 'home',
};

const MyCommunity = props => {

  const [userPost, setUserPost] = useState([]);
  const [tempUserPost, setTempUserPost] = useState(false);
  const [loading, setLoading] = useState(true);


  const [popularCommunity, setPopularCommunity] = useState([]);

  const _user = useSelector(state => state.user); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  let refDotPostBottomSheet2 = useRef(null);

  const dispatch = useDispatch();
  //setUserPost([])

  useEffect(() => {
    setPopularCommunity([])
    let endpoint = RECO_COMMUNITY + '/' + _user.userDetails._id
    var request = {
      method: "GET",
    };

    fetch(endpoint, request)
      .then(resp => resp.json())
      .then(json => {
        setTimeout(() => {
          let encryptData = aesEcryptionDecryption.decryptData(json);
          let result = JSON.parse(encryptData)
          //setUserPost(result);
          let _d = [];
          result.popular_communities.forEach(element => {
            if (element.public_private == 1) {
              _d.push(element);
            }
          });
          let _data = {
            popular_communities: _d
          }
          setPopularCommunity(_data)
        })
      })
      .catch(error => {

      });

  }, []);




  useEffect(() => {
    setUserPost([])
    setLoading(true)
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
          let _data = [
            ...result.userJoinedCommunities,
            ...result.userCreatedCommunities,
            ...result.getAllPublicCommunitiesData,
            ///...result.communitiesDataObj
          ]

          _data.forEach(element => {
            result.communitiesDataObj.forEach(_element => {
              element.lastUpdated = ''
              if (_element.communitiesId == element._id) {
                element.lastUpdated = _element.created
              }
            })
          })
          setUserPost(_data)
          setLoading(false)

        })
      })
      .catch(error => {

      });

  }, []);




  /*

   
  if (props.route.params.fromNamePopup != undefined && props.route.params.fromNamePopup) {
    
    let data = [];
    userPost.forEach(element => {
      if (props.route.params.id == element._id) {
        element.community_name = props.route.params.name;
        data.push(element)
      }
    })
    setUserPost(data)

  }


  if (props.route.params.fromcreate != undefined && props.route.params.fromcreate) {
    let endpoint2 = USER_COMMUNITY + '/' + _user.userDetails._id
    var request = {
      method: 'GET',
    };
    request.headers = {
      "Content-Type": "application/json"
    }
    fetch(endpoint2, request)
      .then(resp => resp.json())
      .then(json => {
        setTimeout(() => {
          let encryptData = aesEcryptionDecryption.decryptData(json);
          let result = JSON.parse(encryptData)
          let _data = [
            ...result.userJoinedCommunities,
            ...result.userCreatedCommunities,
            ...result.getAllPublicCommunitiesData,
            ...result.communitiesDataObj
          ]

          _data.forEach(element => {
            result.communitiesDataObj.forEach(_element => {
              element.lastUpdated = ''
              if (_element.communitiesId == element._id) {
                element.lastUpdated = _element.created
              }
            })
          })
          setUserPost(_data)
          setLoading(false)

        })
      })
      .catch(error => {

      });




    setPopularCommunity([])
    let endpoint = RECO_COMMUNITY + '/' + _user.userDetails._id
    var request = {
      method: "GET",
    };

    fetch(endpoint, request)
      .then(resp => resp.json())
      .then(json => {
        setTimeout(() => {
          let encryptData = aesEcryptionDecryption.decryptData(json);
          let result = JSON.parse(encryptData)
          //setUserPost(result);
          let _d = [];
          result.popular_communities.forEach(element => {
            if (element.public_private == 1) {
              _d.push(element);
            }
          });
          let _data = {
            popular_communities: _d
          }
          setPopularCommunity(_data)
        })
      })
      .catch(error => {

      });

  }

  */

  let asc = false
  const sortData = () => {
    let x = userPost;
    if (tempUserPost == false) {//ascending
      // x.sort((a, b) => a.community_name.localeCompare(b.community_name))
      setTempUserPost(true);
      x.sort(function (a, b) {
        if (a.community_name < b.community_name) { return -1; }
        if (a.community_name > b.community_name) { return 1; }
        return 0;
      })
    } else {//descending
      setTempUserPost(false);
      x.sort(function (a, b) {
        if (a.community_name > b.community_name) { return -1; }
        if (a.community_name < b.community_name) { return 1; }
        return 0;
      })

    }
    let data = []
    x.forEach(element => {
      data.push(element);
    })
    setUserPost(data);
    setLoading(false)
    asc = !asc;
  };


  //@todo create notification component 
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //
      //Alert.alert('messaging', JSON.stringify(remoteMessage));
      dispatch({
        type: types.SET_NOTIFICATION,
        remoteMessage: remoteMessage
      })
      /*
      props.navigation.navigate('ReminderNotification', {
        screen: 'ReminderNotification',
        params: {

        }
      })
      */

    });

    return unsubscribe;

  }, []);

  const _reinderNotificationSet = useSelector(
    state => state.reminder.reinderNotificationSet,
  );
  useEffect(() => {
    if (_reinderNotificationSet == true) {

      /*props.navigation.navigate('ReminderNotification', {
        screen: 'ReminderNotification',
        params: {

        }
      })
      */
    }
  }, [_reinderNotificationSet]);

  const addPosts = text => {
    refCreatePostBottomSheet.current.asaraType = "community"
    refCreatePostBottomSheet.current.asaraTypeId = ""
    refCreatePostBottomSheet.current.open()
  };

  if (loading == true) {
    return (
      <>
        <BaseSafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.textareaWithBackground}>
              <MenuTopCommunity addPosts={addPosts} />
            </View>

            <View style={styles.bg_color_dots}>

              <ScrollView>
                <Text>Loading...</Text>
              </ScrollView>
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                  borderRadius: 30
                }}
                onPress={() => {
                  props.navigation.navigate('Reminders', {
                    screen: 'Reminders',
                    params: {
                    }
                  })
                }}>
                <Image
                  source={images.AsaraSpeaker}
                  style={{ width: 80, height: 80 }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.button_container}>
              <MenuBottomCommunity
                addPosts={addPosts}
              />
            </View>

            <CreatePostBottomSheet
              rbCreatePostSheetRef={refCreatePostBottomSheet}
              navigation={props.navigation}
              postType={"community"}
              postTypeId={''}
            />
            <DotsBottomSheet
              refDotPostBottomSheet={refDotPostBottomSheet}
              navigation={props.navigation}
            //userPost={userPost}
            //setUserPost={setUserPost}

            />
          </View>
        </BaseSafeAreaView>
      </>
    )
  }
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.textareaWithBackground}>
            <MenuTopCommunity addPosts={addPosts} />
          </View>

          <View style={styles.bg_color_dots}>

            <ScrollView>
              <View
                style={{
                  backgroundColor: '',
                  marginBottom: 10,
                  flex: 1,
                  marginLeft: 13,

                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 5
                  }}
                >Popular Communities</Text>

                <FlatList
                  data={popularCommunity.popular_communities}
                  keyExtractor={item => item._id}
                  horizontal={true}
                  renderItem={itemData => (
                    <MyCommunityCardReco
                      item={itemData}
                      navigation={props.navigation}
                      dotPosts={refDotPostBottomSheet2}
                    />

                  )}
                />

              </View>

              {/**
               * 
               *
              <MyCommunityHead
                navigation={props.navigation}
                sortData={sortData}
              />
              <Text>
                {JSON.stringify({ userPost })}
              </Text>
               */}

              <MyCommunityCard
                //key={ "123"}
                item={userPost}
                navigation={props.navigation}
                dotPosts={refDotPostBottomSheet}
              />
            </ScrollView>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                position: 'absolute',
                bottom: 10,
                right: 10,
                borderRadius: 30
              }}
              onPress={() => {
                props.navigation.navigate('Reminders', {
                  screen: 'Reminders',
                  params: {
                  }
                })
              }}>
              <Image
                source={images.AsaraSpeaker}
                style={{ width: 80, height: 80 }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.button_container}>
            <MenuBottomCommunity
              addPosts={addPosts}
            />
          </View>

          <CreatePostBottomSheet
            rbCreatePostSheetRef={refCreatePostBottomSheet}
            navigation={props.navigation}
            postType={"community"}
            postTypeId={''}
          />
          <DotsBottomSheet
            refDotPostBottomSheet={refDotPostBottomSheet}
            navigation={props.navigation}
          />

          <DotsBottomSheet2
            refDotPostBottomSheet={refDotPostBottomSheet2}
            navigation={props.navigation}
          />
        </View>
      </BaseSafeAreaView>
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
    flexDirection: 'row',
    alignSelf: 'stretch',
    //backgroundColor: '#055AbB'
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#055F9B'
  },
});

export default MyCommunity;
