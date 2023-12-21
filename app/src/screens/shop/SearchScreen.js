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
  Image,
} from 'react-native';
import colors from '../../../res/colors';
import MenuTop from '../../components/UI/MenuTopShopLanding';
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
import ShopListIItem from '../../components/UI/ShopListIItem';

import AddProductBottomSheet from '../../components/bottomsheet/AddProductBottomSheet';

import messaging from '@react-native-firebase/messaging';
import HealthLandingComp from '../../components/UI/HealthLanding';
import HealthLandingShopByCat from '../../components/UI/HealthLandingShopByCat';
import ShopListBuyCount from '../../components/bottomsheet/ShopListBuyCount';
import YourHealthIssueCard from '../../components/UI/YourHealthIssueCard';
import DoctorsNearYouCard from '../../components/UI/DoctorsNearYouCard';
import { Linking } from 'react-native'
import FamousDoctorCard from '../../components/UI/FamousDoctorCard';
import AutoHeightImage from 'react-native-auto-height-image';
import Slider from '../../components/UI/SliderLanding';
import { SliderBox } from "react-native-image-slider-box";
const SearchScreen = props => {

  const health = useSelector(
    state => state.health,
  );

  const _user = useSelector(state => state.user); //!!state.auth.token
  const _shop = useSelector(state => state.shop); //!!state.auth.token
  const [loading, setLoading] = useState(true);
  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  let refAddProductBottomSheet = useRef(null);
  let addSheet = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: types.GET_SEARCH_PRODUCTS,
      text: ''
    })
    setLoading(false);
  }, [loading]);

  const addPosts = text => {
    refCreatePostBottomSheet.current.asaraType = "post"
    refCreatePostBottomSheet.current.asaraTypeId = ""
    refCreatePostBottomSheet.current.open()
  };

  const addProduct = item => {
    refAddProductBottomSheet.current.item = item;
    refAddProductBottomSheet.current.open()
  };


  const getData = text => {
    dispatch({
      type: types.GET_SEARCH_PRODUCTS,
      text: text
    })
    console.log(text);
  };
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, flexDirection: "column" }}>

          <View
            style={{ flex: 1, flexDirection: "column", backgroundColor: '#055F9B' }}
          >
            <MenuTop onChangeText={getData} />

          </View>

          <View
            style={{ flex: 9, flexDirection: "column" }}
          >


            <ScrollView>
              <FlatList
                data={_shop.searchData}
                numColumns={1}
                keyExtractor={item => item.id}
                horizontal={false}
                renderItem={itemData => (

                  <>
                    <ShopListIItem
                      item={itemData}
                      navigation={props.navigation}
                      addSheet={addSheet}
                      backgroundColor={'white'}
                      addProduct={addProduct}
                    />
                  </>

                )}
              />
            </ScrollView>
          </View>

          {/* 
          <View
            style={{ flex: 1, flexDirection: "column" }}
          >
            <MenuBottom
              addPosts={addPosts}
            />

          </View> */}

          {/* <AddProductBottomSheet
            rbCreatePostSheetRef={refAddProductBottomSheet}
            navigation={props.navigation}
          />
          <CreatePostBottomSheet
            rbCreatePostSheetRef={refCreatePostBottomSheet}
            navigation={props.navigation}
            postType={"post"}
            postTypeId={""}
          />
          <DotsBottomSheet
            refDotPostBottomSheet={refDotPostBottomSheet}
            navigation={props.navigation}
          /> */}

          <ShopListBuyCount
            addSheet={addSheet}
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


export default SearchScreen;
