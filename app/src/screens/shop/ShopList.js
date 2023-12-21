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
import ShopListIChildCategory from '../../components/UI/ShopListIChildCategory';

import messaging from '@react-native-firebase/messaging';
import HealthLandingComp from '../../components/UI/HealthLanding';
import HealthLandingShopByCat from '../../components/UI/HealthLandingShopByCat';

import YourHealthIssueCard from '../../components/UI/YourHealthIssueCard';
import DoctorsNearYouCard from '../../components/UI/DoctorsNearYouCard';
import { Linking } from 'react-native'
import FamousDoctorCard from '../../components/UI/FamousDoctorCard';
import AutoHeightImage from 'react-native-auto-height-image';
import Slider from '../../components/UI/SliderLanding';


const ShopList = props => {

  console.log('props', props.route.params.item.item.id);
  const _user = useSelector(state => state.user); //!!state.auth.token
  const _shop = useSelector(state => state.shop); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: types.GET_SHOP_CATEGORY_DATA,
      _id: props.route.params.item.item.id
    })

    dispatch({
      type: types.GET_SHOP_CHILD_CATEGORY_DATA, //GET_SHOP_CATEGORY_DATA,
      _id: 16//props.route.params.item.item.id
    })

  }, [props.route.params.item.item.id]);




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
            style={{ flex: 8.5, flexDirection: "column" }}
          >


            <ScrollView>
              <FlatList
                data={_shop.categoryChild}
                numColumns={2}
                keyExtractor={item => item.id}
                horizontal={false}
                renderItem={itemData => (

                  <>
                    <ShopListIChildCategory
                      item={itemData}
                      navigation={props.navigation}
                      dotPosts={refDotPostBottomSheet}
                      backgroundColor={'#f2f2f2'}

                    />
                  </>

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


export default ShopList;
