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
import MenuTop from '../../components/UI/MenuTop';
import MenuBottom from '../../components/UI/MenuBottom';
import PostCard from '../../components/UI/PostCard';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheet';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheet';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import branch, { BranchEvent } from 'react-native-branch'
import images from '../../../res/images_url';
import AsaraSpeaker from '../../../res/images/AsaraSpeaker.png'
import messaging from '@react-native-firebase/messaging';
import NotificationTop from '../../components/UI/NotificationTop';

const initialState = {
  postText: '',
  selectedBackground: '',
  friends: [],
  communities: [],
  location: [],
  completed: false,
  from: 'home',
};

const ShareHomeScreen = props => {

  console.log('props', props.route.params.postId)
  const userPost = useSelector(
    state => state.userPost,
  );

  const branchData = useSelector(state => state.branchData);
  const _user = useSelector(state => state.user); //!!state.auth.token



  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  const dispatch = useDispatch();
  const userOnboardingFullList = useSelector(
    state => state.onboarding,
  );


  useEffect(() => {
    dispatch({
      type: types.GET_USER_POST_FULL,//GET_USER_POST
      userId: _user.userDetails._id
    });
  }, []);

  const _medicineFormComplete = useSelector(
    state => state.reminder.medicineFormComplete,
  );


  useEffect(() => {
    if (_medicineFormComplete == true) {
      dispatch({
        type: types.RESET_MEDICINE_REMINDER_FORM,
        userId: _user.userDetails._id,
      })
    }
  }, [_medicineFormComplete]);



  const _reminderFormComplete = useSelector(
    state => state.reminder.reminderFormComplete,
  );
  useEffect(() => {
    if (_reminderFormComplete == true) {
      dispatch({
        type: types.RESET_REMINDER_FORM_COMPLETE,
        userId: _user.userDetails._id,
      })
    }
  }, [_reminderFormComplete]);

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
    refCreatePostBottomSheet.current.asaraType = "post"
    refCreatePostBottomSheet.current.asaraTypeId = ""
    refCreatePostBottomSheet.current.open()
  };

  const clearNotification = text => {
    dispatch({
      type: types.RESET_NOTIFICATION
    })
  }

  return (
    <>

      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, flexDirection: "column" }}>

          <View
            style={{ flex: 1.2, flexDirection: "column", backgroundColor: '#055F9B' }}
          >
            <MenuTop />

          </View>


          <View
            style={{ flex: 7.5, flexDirection: "column" }}
          >
            <NotificationTop
              navigation={props.navigation}
              clearNotification={clearNotification} />
            <ScrollView>
              <FlatList
                //props.route.params.postId
                data={userPost.userPostData.filter(function (itm) {
                  return itm._id == props.route.params.postId
                })}
                horizontal={false}
                keyExtractor={item => item._id}
                renderItem={itemData => (
                  <PostCard
                    item={itemData.item}
                    dotPosts={refDotPostBottomSheet}
                    navigation={props.navigation}
                  />
                )}
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
  textareaWithBackground: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#055F9B'
  },
  bg_color_dots: {
    flex: 7,
    flexDirection: 'row',
    //backgroundColor: '#055AbB'
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#055F9B'
  },
});

export default ShareHomeScreen;
