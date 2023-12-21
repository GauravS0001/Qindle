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
import MenuTop from '../../components/UI/MenuTopHealth';
import MenuBottom from '../../components/UI/MenuBottomHealth';
import PostCard from '../../components/UI/PostCard';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheet';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheet';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import branch, { BranchEvent } from 'react-native-branch'
import images from '../../../res/images_url';
import AppSpecialistsCard from '../../components/UI/AppSpecialistsCard';
import UpcomingCard from '../../components/UI/UpcomingCard';
import TrackCards from '../../components/UI/TrackCards';
import CityFilter from '../../components/UI/CityFilter';


import messaging from '@react-native-firebase/messaging';
import PopularHealthIssueCard from '../../components/UI/PopularHealthIssueCard';
import YourHealthIssueCard from '../../components/UI/YourHealthIssueCard';
import DoctorsNearYouCard from '../../components/UI/DoctorsNearYouCard';
import { Linking } from 'react-native'
import FamousDoctorCard from '../../components/UI/FamousDoctorCard';
import AutoHeightImage from 'react-native-auto-height-image';
import Slider from '../../components/UI/SliderLanding';
const HealthScreen = props => {

  const health = useSelector(
    state => state.health,
  );

  /*
    upcomingSchedule: [],
    : [],
    : [],
    : [],
    : [],
    : [],
    */
  const _user = useSelector(state => state.user); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  const dispatch = useDispatch();


  useEffect(() => {

    /* 
     dispatch({
       type: types.RESET_DOCTOR_TOP_SPECIALIST
     })
 */

    dispatch({
      type: types.RESET_UPCOMING_SCHEDULE,
      userId: _user.userDetails._id
    })

    dispatch({
      type: types.RESET_DOCTOR_SCHEDULE,
      userId: _user.userDetails._id
    })


    dispatch({
      type: types.DOCTOR_UPCOMMING_SCHEDULE,
      userId: _user.userDetails._id
    })

    dispatch({
      type: types.DOCTOR_TOP_SPECIALIST,
      userId: _user.userDetails._id,
      currentTotal: health.topSpecialist.length
    })

    dispatch({
      type: types.DOCTOR_POPULAT_HEALTH_ISSUE,
      userId: _user.userDetails._id,
      currentTotal: health.popularHealthIssue.length
    })

    dispatch({
      type: types.DOCTOR_YOUR_HEALTH_ISSUE,
      userId: _user.userDetails._id
    })

    dispatch({
      type: types.DOCTOR_FAMOUS_DOCTOR,
      userId: _user.userDetails._id
    })

    let cityId = "";
    if (_user.userDetails.userOnboadingData.cities != undefined && _user.userDetails.userOnboadingData.cities[0] != undefined) {
      cityId = _user.userDetails.userOnboadingData.cities[0]._id
    }

    dispatch({
      type: types.DOCTOR_NEAR_YOU,
      userId: _user.userDetails._id,
      cityId: cityId
    })


  }, []);


  //@todo create notification component 
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //
      //Alert.alert('messaging', JSON.stringify(remoteMessage));
      dispatch({
        type: types.SET_NOTIFICATION,
        remoteMessage: remoteMessage
      })
      /*props.navigation.navigate('ReminderNotification', {
        screen: 'ReminderNotification',
        params: {

        }
      })*/

    });

    return unsubscribe;

  }, []);

  const _reinderNotificationSet = useSelector(
    state => state.reminder.reinderNotificationSet,
  );
  useEffect(() => {
    if (_reinderNotificationSet == true) {
      /* props.navigation.navigate('ReminderNotification', {
         screen: 'ReminderNotification',
         params: {
 
         }
       })
       */
    }
  }, [_reinderNotificationSet]);

  const addPosts = text => {
    refCreatePostBottomSheet.current.asaraType = "post"
    refCreatePostBottomSheet.current.asaraTypeId = ""
    refCreatePostBottomSheet.current.open()
  };
  let ndate = new Date();
  let hours = ndate.getHours();
  let greetText = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, flexDirection: "column" }}>

          <View
            style={{ flex: 1.5, flexDirection: "column", backgroundColor: '#055F9B' }}
          >
            <MenuTop />
          </View>


          <View
            style={{ flex: 7.5, flexDirection: "column" }}
          >
            <ScrollView>

              <View
                style={{
                  width: '100%',
                  backgroundColor: '#055F9B',
                  paddingBottom: 20
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 18,
                    marginLeft: 20
                  }}
                >
                  {
                    greetText
                  }

                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    marginLeft: 20
                  }}
                >Any Symptoms today?
                </Text>


                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row'
                  }}
                >


                  <TouchableOpacity
                    style={{
                      marginHorizontal: 5,
                      // backgroundColor: 'red',
                      padding: 5,
                    }}
                    onPress={() => {
                      Linking.openURL(`tel:8104611344`)
                    }}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 8,
                        margin: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 30,
                        marginTop: 10,
                        marginLeft: 20
                      }}
                    >


                      <Text style={{
                        textAlign: 'right',
                        textAlign: 'center',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        color: '#055F9B',
                        fontSize: 16,
                        opacity: 1,
                        letterSpacing: 0,
                        lineHeight: 19,
                        marginHorizontal: 10
                      }}>Call Doctor</Text>

                    </View>
                  </TouchableOpacity>
                  {/**
                  <View
                    style={{
                      borderColor: 'white',
                      borderWidth: 1,
                      borderRadius: 8,
                      margin: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 30,
                      marginTop: 10,
                      marginLeft: 10
                    }}
                  >

                 

                    <Text style={{
                      textAlign: 'right',
                      textAlign: 'center',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: 16,
                      opacity: 1,
                      letterSpacing: 0,
                      lineHeight: 19,
                      marginHorizontal: 10
                    }}>Chat</Text>


                  </View>
 */}

                </View>
              </View>

              <View
                style={{
                  flex: 1,
                }}
              >
                <CityFilter />
{/* 
                <TrackCards /> */}
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#f2f2f2'
                }}
              >



                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row'
                  }}
                >


                  <Text
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      marginTop: 10,
                      marginLeft: 12,
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginBottom: 10,
                      color: '#000'
                    }}
                  > Upcoming Schedule</Text>
                  <TouchableOpacity
                    style={{
                      flex: .3,
                      flexDirection: 'row',
                    }}
                    onPress={() => {
                      {
                        props.navigation.navigate('UpcomingSchedule', {
                          screen: 'UpcomingSchedule',
                          params: {
                          }
                        })
                      }
                    }}>
                    <Text
                      style={{

                        marginTop: 10,
                        marginLeft: 12,
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginBottom: 10,
                        color: '#055F9B'
                      }}
                    >See All</Text>
                  </TouchableOpacity>
                </View>


                <UpcomingCard
                  item={health.upcomingSchedule}
                />

              </View>
              {/* <View>
                <Slider type="Doctor" widgetId="1" />
              </View> */}

              <View
                style={{
                  flex: 1,
                  backgroundColor: '#f2f2f2',
                  marginTop: 0,
                  borderTopColor: '#CCC',
                  borderWidth: 5,
                  borderRightColor: '#f2f2f2',
                  borderLeftColor: '#f2f2f2',
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 20,
                  paddingRight: 20
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 12,
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 10,
                    color: '#000'
                  }}
                >Book Apointment with Top Specialists </Text>
                <FlatList
                  data={health.topSpecialist}
                  numColumns={2}
                  keyExtractor={item => item._id}
                  horizontal={false}
                  renderItem={itemData => (
                    <AppSpecialistsCard
                      item={itemData}
                      navigation={props.navigation}
                      dotPosts={refDotPostBottomSheet}
                      backgroundColor={'#f2f2f2'}

                    />

                  )}
                />
                <TouchableOpacity
                  style={{
                  }}
                  onPress={() => {
                    {
                      dispatch({
                        type: types.DOCTOR_TOP_SPECIALIST,
                        userId: _user.userDetails._id,
                        currentTotal: health.topSpecialist.length
                      })
                    }
                  }}>
                  <View
                    style={{
                      //backgroundColor: 'white',
                      borderRadius: 8,
                      borderColor: '#055F9B',
                      borderWidth: 1,
                      margin: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 30,
                      marginTop: 10,
                      marginLeft: 20
                    }}
                  >



                    <Text style={{
                      textAlign: 'right',
                      textAlign: 'center',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      color: '#055F9B',
                      fontSize: 16,
                      opacity: 1,
                      letterSpacing: 0,
                      lineHeight: 19,
                      marginHorizontal: 10
                    }}>See More</Text>

                  </View>
                </TouchableOpacity>

              </View>




              <View
                style={{
                  flex: 1,
                  backgroundColor: '#f2f2f2',
                  marginTop: 0,
                  borderTopColor: '#CCC',
                  borderWidth: 5,
                  borderRightColor: '#f2f2f2',
                  borderLeftColor: '#f2f2f2',
                  borderBottomColor: '#f2f2f2'

                }}
              >
                <AutoHeightImage
                  width={400}
                  source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' }}
                />

              </View>












              <View
                style={{
                  flex: 1,
                  backgroundColor: '#f2f2f2',
                  marginTop: 0,
                  borderTopColor: '#CCC',
                  borderWidth: 5,
                  borderRightColor: '#f2f2f2',
                  borderLeftColor: '#f2f2f2',
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 20

                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 12,
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 10,
                    color: '#000'
                  }}
                >Most Popular Health Issues </Text>
                <FlatList
                  data={health.popularHealthIssue}
                  numColumns={3}
                  keyExtractor={item => item._id}
                  horizontal={false}
                  renderItem={itemData => (
                    <PopularHealthIssueCard
                      item={itemData}
                      navigation={props.navigation}
                      dotPosts={refDotPostBottomSheet}
                      backgroundColor={'#f2f2f2'}

                    />

                  )}
                />
                <TouchableOpacity
                  style={{
                  }}
                  onPress={() => {
                    {
                      dispatch({
                        type: types.DOCTOR_POPULAT_HEALTH_ISSUE,
                        userId: _user.userDetails._id,
                        currentTotal: health.popularHealthIssue.length
                      })

                    }
                  }}>
                  <View
                    style={{
                      //backgroundColor: 'white',
                      borderRadius: 8,
                      borderColor: '#055F9B',
                      borderWidth: 1,
                      margin: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 30,
                      marginTop: 10,
                      marginLeft: 20
                    }}
                  >


                    <Text style={{
                      textAlign: 'right',
                      textAlign: 'center',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      color: '#055F9B',
                      fontSize: 16,
                      opacity: 1,
                      letterSpacing: 0,
                      lineHeight: 19,
                      marginHorizontal: 10
                    }}>See More</Text>

                  </View>
                </TouchableOpacity>
              </View>











              <View
                style={{
                  flex: 1,
                  backgroundColor: '#f2f2f2',
                  marginTop: 0,
                  borderTopColor: '#CCC',
                  borderWidth: 5,
                  borderRightColor: '#f2f2f2',
                  borderLeftColor: '#f2f2f2',
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 20
                }}
              >

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row'
                  }}
                >


                  <Text
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      marginTop: 10,
                      marginLeft: 12,
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginBottom: 10,
                      color: '#000'
                    }}
                  > Tell Us Your Health Issues </Text>
                  {/*
                  <TouchableOpacity
                    style={{
                      flex: .3,
                      flexDirection: 'row',
                    }}
                    onPress={() => {
                      {
                        return;
                        props.navigation.navigate('FindDoctorScreen', {
                          screen: 'FindDoctorScreen',
                          params: {
                          }
                        })
                      }
                    }}>
                    <Text
                      style={{

                        marginTop: 10,
                        marginLeft: 12,
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginBottom: 10,
                        color: '#055F9B'
                      }}
                    >See All</Text>
                  </TouchableOpacity>
                  */}
                </View>




                <FlatList
                  data={health.yourHealthIssue}
                  //numColumns={2}
                  keyExtractor={item => item._id}
                  horizontal={true}
                  renderItem={itemData => (
                    <YourHealthIssueCard
                      item={itemData}
                      navigation={props.navigation}
                      dotPosts={refDotPostBottomSheet}
                      backgroundColor={'#f2f2f2'}

                    />

                  )}
                />
              </View>











              <View
                style={{
                  flex: 1,
                  backgroundColor: '#CCC',
                  marginTop: 0,
                  borderTopColor: '#CCC',
                  borderWidth: 3,
                  borderRightColor: '#CCC',
                  borderLeftColor: '#CCC',
                  borderBottomColor: '#CCC'

                }}
              >
              </View>


              <View
                style={{
                  flex: 1,
                  backgroundColor: '#055F9B',
                  paddingBottom: 20
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row'
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      marginTop: 10,
                      marginLeft: 12,
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginBottom: 10,
                      color: 'white'
                    }}
                  >Famous Doctor</Text>

                  {/*
                  <TouchableOpacity
                    style={{
                      flex: .3,
                      flexDirection: 'row',
                    }}
                    onPress={() => {
                      props.navigation.navigate('FindDoctorScreen', {
                        screen: 'FindDoctorScreen',
                        params: {
                        }
                      })
                    }}>
                    <Text
                      style={{

                        marginTop: 10,
                        marginLeft: 12,
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginBottom: 10,
                        color: 'white'
                      }}
                    >See All</Text>
                  </TouchableOpacity>

                  */}
                </View>

                <FlatList
                  data={health.famousDoctor}
                  keyExtractor={item => item._id}
                  horizontal={true}
                  renderItem={itemData => (
                    <FamousDoctorCard
                      item={itemData}
                      navigation={props.navigation}
                      dotPosts={refDotPostBottomSheet}
                      backgroundColor={'#055F9B'}
                    />
                  )}
                />
              </View>






              <View
                style={{
                  flex: 1,
                  backgroundColor: '#f2f2f2',
                  marginTop: 0,
                  borderTopColor: '#CCC',
                  borderWidth: 5,
                  borderRightColor: '#f2f2f2',
                  borderLeftColor: '#f2f2f2',
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 20

                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 12,
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 10,
                    color: '#000'
                  }}
                >Find Doctors Near You </Text>
                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 12,
                    fontSize: 16,
                    marginBottom: 10,
                    color: '#000'
                  }}
                >Book assured appointments even during the COVID-19 pandemic</Text>

                <FlatList
                  data={health.nearYou}
                  numColumns={1}
                  keyExtractor={item => item._id}
                  horizontal={false}
                  renderItem={itemData => (
                    <DoctorsNearYouCard
                      item={itemData}
                      navigation={props.navigation}
                      dotPosts={refDotPostBottomSheet}
                      backgroundColor={'#f2f2f2'}

                    />

                  )}
                />

                {/*
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 20

                  }}
                >

                  <View
                    style={{
                      //backgroundColor: 'white',
                      borderRadius: 5,
                      borderColor: '#055F9B',
                      borderWidth: 1,
                      marginTop: 20,
                      width: '80%'
                    }}
                  >


                    <Text style={{
                      textAlign: 'right',
                      textAlign: 'center',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      color: '#055F9B',
                      fontSize: 14,
                      opacity: 1,
                      letterSpacing: 0,
                      lineHeight: 22,
                      marginHorizontal: 10
                    }}>See All</Text>

                  </View>

                </View>

                */}
              </View>



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


export default HealthScreen;
