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


const ShopLanding = props => {

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

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  const dispatch = useDispatch();
  const _shop = useSelector(state => state.shop); //!!state.auth.token

  useEffect(() => {

    /* 
     dispatch({
       type: types.RESET_DOCTOR_TOP_SPECIALIST
     })
 */
  }, []);




  const _reinderNotificationSet = useSelector(
    state => state.reminder.reinderNotificationSet,
  );


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
            style={{ flex: 8.5, flexDirection: "column" ,}}
          >


            <ScrollView>

              {/* <Slider type="Medicine" widgetId="1" /> */}
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
              <FlatList
                data={_shop.categoryChild}
                numColumns={2}
                keyExtractor={item => item._id}
                horizontal={false}
                renderItem={itemData => (
                   
                  <ShopListIChildCategory
                      item={itemData}
                      navigation={props.navigation}
                      dotPosts={refDotPostBottomSheet}
                      backgroundColor={'#f2f2f2'}

                    />
                  
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


export default ShopLanding;
