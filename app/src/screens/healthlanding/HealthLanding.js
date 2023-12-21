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
import { useIsFocused } from '@react-navigation/native';
import colors from '../../../res/colors';
import MenuTop from '../../components/UI/MenuTopHealthLanding';
import MenuBottom from '../../components/UI/MenuBottomHealth';
import PostCard from '../../components/UI/PostCard';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheet';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheet';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import branch, { BranchEvent } from 'react-native-branch'
import images from '../../../res/images_url';
import HealthLandingModulesCard from '../../components/UI/HealthLandingModulesCard';
import UpcomingCard from '../../components/UI/UpcomingCard';

import messaging from '@react-native-firebase/messaging';
import HealthLandingComp from '../../components/UI/HealthLanding';
import HealthLandingShopByCat from '../../components/UI/HealthLandingShopByCat';
import ShopListIChildCategory from '../../components/UI/ShopListIChildCategory';



import YourHealthIssueCard from '../../components/UI/YourHealthIssueCard';
import DoctorsNearYouCard from '../../components/UI/DoctorsNearYouCard';
import { Linking } from 'react-native'
import FamousDoctorCard from '../../components/UI/FamousDoctorCard';
import AutoHeightImage from 'react-native-auto-height-image';
import Slider from '../../components/UI/SliderLanding';
import TrackCards from '../../components/UI/TrackCards';


const HealthLanding = props => {
  const isFocused = useIsFocused();
  const health = useSelector(
    state => state.health,
  );

  let HomeCategories = [
    {
      "_id": "6198fbde928d1fa6fdf78986",
      category: 23,
      image: "https://media.istockphoto.com/id/522549410/photo/medical-equipment-background.jpg?s=612x612&w=is&k=20&c=45q4kN8Y8CwZgA5Oyx-A0GNtyCr5WtI6-dKFHq2mJt0=",
      colors: ["#4facfe", "#00f2fe"],
      label: "Medical supplies and equipments",
    },
    {
      "_id": "6198fbde928d1fa6fdf78986",
      category: 17,
      image: "https://medlineplus.gov/images/Medicines.jpg",
      colors: ["#4facfe", "#00f2fe"],
      label: "Medicines",
    },
    {
      "_id": "6198fbde928d1fa6fdf78986",
      category: 19,
      image: "https://www.researchgate.net/profile/Merel-Jung/publication/333624077/figure/fig2/AS:766427447451650@1559741951157/Commonly-used-mobility-aids-left-to-right-top-to-bottom-rollator-19-walking-frame.jpg",
      colors: ["#4facfe", "#00f2fe"],
      label: "Mobility aids",
    },
    {
      "_id": "6198fbde928d1fa6fdf78986",
      category: 25,
      image: "https://preview.redd.it/y7hk5ouiy2s61.jpg?width=640&crop=smart&auto=webp&s=c7baaf009ebfa8579bc7ec4d6baeba33948bb7ae",
      label: "Organization and storage",
    },
    {
      "_id": "6198fbde928d1fa6fdf78986",
      category: 28,
      image: "https://5.imimg.com/data5/UL/OO/QY/SELLER-80410517/mobile-accessories-500x500.png",
      colors: ["#4facfe", "#00f2fe"],
      label: " Phones and accessories",
    },
    {
      "_id": "6198fbde928d1fa6fdf78986",
      category: 22,
      image: "https://smartsentry.ai/wp-content/uploads/2018/09/Blog1.png",
      colors: ["#4facfe", "#00f2fe"],
      label: "Security and Safety",
    },

  ]
  /*
    upcomingSchedule: [],
    : [],
    : [],
    : [],
    : [],
    : [],
    */
  const _user = useSelector(state => state.user); //!!state.auth.token
  const _shop = useSelector(state => state.shop); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  const dispatch = useDispatch();
  let healthLandingModules = [
    {
      _id: 1,
      name: "Track",
      icon: "heart-attack.png",
      nav: "healthLanding"
    },
    {
      _id: 2,
      name: "Consult Doctor",
      icon: "stethoscope-64.png",
      nav: "HealthScreen"
    },
    {
      _id: 3,
      name: "Shop",
      icon: "drugs.png",
      nav: "ShopScreen"
    },
    {
      _id: 4,
      name: "LabTest",
      icon: "blood-test-128.png",
      nav: "ServiceScreen"
    },
    {
      _id: 5,
      name: "Services",
      icon: "nursing-room-64.png",
      nav: "ServiceScreen"
    }
  ]

  useEffect(() => {
    console.log('_shop', _shop)
    // dispatch({
    //   type: types.GET_SHOP_CATEGORY
    // })

    dispatch({
      type: types.GET_USER_MEDICAL_DASHBOARD,
      userId: _user.userDetails._id
    })

    dispatch({
      type: types.GET_SHOP_CHILD_CATEGORY_DATA, //GET_SHOP_CATEGORY_DATA,
      _id: 16//props.route.params.item.item.id
    })


    console.log('health.userMedicalDashboard', health.userMedicalDashboard)

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
            style={{ flex: 1.5, flexDirection: "column", backgroundColor: '#055F9B', }}
          >
            <MenuTop />

          </View>


          <View
            style={{ flex: 9.5, flexDirection: "column" }}
          >

            <View style={{ backgroundColor: '#f2f2f2', padding: 10, borderBottomColor: "#ddd", borderBottomWidth: 1 }}>
              <FlatList
                data={healthLandingModules}
                //numColumns={2}
                keyExtractor={item => item._id}
                horizontal={true}
                renderItem={itemData => (
                  <HealthLandingModulesCard
                    item={itemData}
                    navigation={props.navigation}
                    dotPosts={refDotPostBottomSheet}
                    backgroundColor={'#f2f2f2'}

                  />

                )}
              />
            </View>

            <ScrollView>

              <View style={{ backgroundColor: '#f2f2f2' }}>
                <TrackCards navigation={props.navigation} data={health.userMedicalDashboard} />

              </View>

              {/* <Slider type="Health" widgetId="1" /> */}


              <View
                style={{
                  flex: 1,
                  //backgroundColor: '#f2f2f2',
                  marginTop: 0,
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
                  > Buy Again From Past Items</Text>
                  <TouchableOpacity
                    style={{
                      flex: .3,
                      flexDirection: 'row',
                    }}
                    onPress={() => {

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


                <FlatList
                  data={[
                    {
                      "_id": "6198fbde928d1fa6fdf78986", "icon": "https://www.bigbasket.com/media/uploads/p/l/277117_8-glucon-d-instant-energy-health-drink-regular.jpg?tr=w-384,q=80", "name": "Glucon D, 500gm"
                    },
                    {
                      "_id": "6198fbde928d1fa6fdf78986", "icon": "https://www.charak.com/wp-content/uploads/2020/07/1-2-600x600.jpg", "name": "Vitamin Tablet"
                    }
                  ]}
                  numColumns={3}
                  keyExtractor={item => item._id}
                  horizontal={false}
                  renderItem={itemData => (
                    <HealthLandingComp
                      item={itemData}
                      navigation={props.navigation}
                      dotPosts={refDotPostBottomSheet}
                    //backgroundColor={'#f2f2f2'}

                    />

                  )}
                />

              </View>


              <View
                style={{
                  flex: 1,
                  borderTopColor: '#ddd',
                  borderTopWidth: 5,
                  backgroundColor: '#f2f2f2',
                  marginTop: 0,
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
                  > Shop by Category</Text>
                  <TouchableOpacity
                    style={{
                      flex: .3,
                      flexDirection: 'row',
                    }}
                    onPress={() => {

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


                <FlatList
                  data={_shop.categoryChild}//HomeCategories
                  numColumns={2}
                  keyExtractor={item => item._id}
                  horizontal={false}
                  renderItem={itemData => (
                    <ShopListIChildCategory
                      item={itemData}
                      navigation={props.navigation}
                      dotPosts={refDotPostBottomSheet}
                    //backgroundColor={'#f2f2f2'}

                    />

                  )}
                />

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


export default HealthLanding;
