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
import MenuTopCommunity from '../../components/UI/RecoMenuTopCommunity';
import MenuBottomCommunity from '../../components/UI/MenuBottomCommunityDisabled';
import MyCommunityCard from '../../components/UI/MyCommunityCardReco';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheetDisabled';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheetRecoCommunity';
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

const RecoCommunity = props => {

  const [userPost, setUserPost] = useState([]);
  const [tempUserPost, setTempUserPost] = useState(false);
  const [loading, setLoading] = useState(true);

  const _user = useSelector(state => state.user); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);

  const dispatch = useDispatch();
  //setUserPost([])

  useEffect(() => {
    setUserPost([])
    //http://localhost:8080/api/communitiesSuggest/60d57b9cb972833c54f8038c
    setLoading(true)
    let endpoint = RECO_COMMUNITY + '/' + _user.userDetails._id
    var body = [{
      id: _user.userDetails._id
    }]
    var token = _user.userDetails.token;
    var request = {
      method: "GET",
      //headers: {
      //  "Content-Type": "application/json",
      //  "x-json-web-token": token,
      //},
      //body: body === '{}' ? undefined : aesEcryptionDecryption.encryptData(body),
    };

    fetch(endpoint, request)
      .then(resp => resp.json())
      .then(json => {
        setTimeout(() => {
          let encryptData = aesEcryptionDecryption.decryptData(json);
          let result = JSON.parse(encryptData)
          //setUserPost(result);
          let _data = {
            interest_hobbies: result.interest_hobbies,
            medical_conditions: result.medical_conditions,
            popular_communities: result.popular_communities
          }
          setUserPost(_data)
          setLoading(false)
        })
      })
      .catch(error => {
        
      });

  }, []);

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
      /*
      props.navigation.navigate('ReminderNotification', {
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

  /*
  if (loading == true) {
    return (
      <>
        <BaseSafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading ...</Text>
          </View>
        </BaseSafeAreaView>
      </>
    )
  }
  */
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.textareaWithBackground}>
            <MenuTopCommunity />
          </View>

          <View style={styles.bg_color_dots}>

            <ScrollView>
              {
                userPost.medical_conditions != "" ?

                  <View
                    style={{
                      backgroundColor: '',
                      flex: 1
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 12,
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginBottom: 10
                      }}
                    >Based on Medical Information</Text>
                    <FlatList
                      data={userPost.medical_conditions}
                      keyExtractor={item => item._id}
                      horizontal={true}
                      renderItem={itemData => (
                        <MyCommunityCard
                          item={itemData}
                          navigation={props.navigation}
                          dotPosts={refDotPostBottomSheet}
                        />

                      )}
                    />



                  </View>
                  : <View></View>
              }
              {
                userPost.interest_hobbies != "" ?

                  <View
                    style={{
                      backgroundColor: '',
                      flex: 1
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 12,
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginBottom: 10
                      }}
                    >Based on Interest</Text>
                    <FlatList
                      data={userPost.interest_hobbies}
                      keyExtractor={item => item._id}
                      horizontal={true}
                      renderItem={itemData => (
                        <MyCommunityCard
                          item={itemData}
                          navigation={props.navigation}
                          dotPosts={refDotPostBottomSheet}
                        />

                      )}
                    />



                  </View>
                  : <View></View>
              }
              {
                userPost.popular_communities != "" ?

                  <View
                    style={{
                      backgroundColor: '',
                      flex: 1
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 10,
                        marginLeft: 12,
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginBottom: 10
                      }}
                    >Popular Group</Text>
                    <FlatList
                      data={userPost.popular_communities}
                      keyExtractor={item => item._id}
                      horizontal={true}
                      renderItem={itemData => (
                        <MyCommunityCard
                          item={itemData}
                          navigation={props.navigation}
                          dotPosts={refDotPostBottomSheet}
                        />

                      )}
                    />


                  </View>
                  : <View></View>
              }


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

export default RecoCommunity;
