import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../splash/SplashScreen';
import {
  OTPNavigator,
  OnBoardingNavigator,
  HomeNavigator,
} from './MainNavigator';

import branch, { BranchEvent } from 'react-native-branch'
// import { ShopNavigator, AuthNavigator } from "./ShopNavigator";
// import SplashScreen from "../screens/startup/StartupScreen";
import { useDispatch, useSelector } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import * as types from '../startup/types';
import { Alert } from 'react-native';
import { SEND_USER_TOKEN } from '../../api/APIConstants';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');
import { WooWorker } from "../../api-ecommerce";
import { Config, Device, Styles, Languages, Theme } from "../../common";

import * as LayoutRedux from "../../redux/LayoutRedux";
import * as NetInfoRedux from "../../redux/NetInfoRedux";

async function saveTokenToDatabase(token, _user) {
  /* NOT working
  dispatch({
    type: types.SEND_USER_TOKEN,
    userId: _user.userDetails._id,
    userToken: token
  })
  */
  let endpoint = SEND_USER_TOKEN
  var body = {
    userId: _user.userDetails._id,
    userToken: token
  }
  var token = _user.userDetails.token;
  var request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-json-web-token": token,
    },
    body: body === '{}' ? undefined : aesEcryptionDecryption.encryptData(body),
  };
  fetch(endpoint, request)
    .then(resp => resp.json())
    .then(json => {

    })
    .catch(error => {

    });

}

const AppNavigator = props => {

  // const isAuth = true;
  const isAuth = useSelector(state => !!state.user.isLoggedIn); //!!state.auth.token
  const isOnboardingComplete = useSelector(
    state => state.onboarding.isOnboardingComplete,
  );
  const dispatch = useDispatch();
  const _user = useSelector(state => state.user); //!!state.auth.token
  // init wooworker
  WooWorker.init({
    url: Config.WooCommerce.url,
    consumerKey: Config.WooCommerce.consumerKey,
    consumerSecret: Config.WooCommerce.consumerSecret,
    wp_api: true,
    version: "wc/v3",
    queryStringAuth: true,
    language: 'en',
  });
  // initial json file from server or local




  useEffect(async () => {
    dispatch(LayoutRedux.actions.fetchHomeLayouts(Config.HomeCaching.url, Config.HomeCaching.enable));
    dispatch(NetInfoRedux.actions.updateConnectionStatus(true));
    // Get the device token
    messaging()
      .getToken()
      .then(token => {
        return saveTokenToDatabase(token, _user);
      });

    // If using other push notification providers (ie Amazon SNS, etc)
    // you may need to get the APNs token instead for iOS:
    // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }

    // Listen to whether the token changes
    return messaging().onTokenRefresh(token => {
      saveTokenToDatabase(token, _user);
    });
  }, []);

  /*
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //
      //Alert.alert('messaging', JSON.stringify(remoteMessage));
      dispatch({
        type: types.SET_NOTIFICATION,
        remoteMessage: remoteMessage
      })
    });

    return unsubscribe;

  }, []);
  */

  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      //ReminderNotification
      dispatch({
        type: types.SET_NOTIFICATION,
        remoteMessage: remoteMessage
      })
      Alert.alert('setBackgroundMessageHandler', JSON.stringify(remoteMessage));

    });
  }, []);


  useEffect(() => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      dispatch({
        type: types.SET_NOTIFICATION,
        remoteMessage: remoteMessage
      })
      //Alert.alert('onNotificationOpenedApp', JSON.stringify(remoteMessage));
      //navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          dispatch({
            type: types.SET_NOTIFICATION,
            remoteMessage: remoteMessage
          })
          //Alert.alert('getInitialNotification', JSON.stringify(remoteMessage));
        }
      });
  }, []);


  // const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      {!isAuth && <OTPNavigator />}
      {isAuth && !isOnboardingComplete && <OnBoardingNavigator />}
      {isAuth && isOnboardingComplete && <HomeNavigator />}

      {/* {!isAuth && didTryAutoLogin && <OTPNavigator OnBoardingNavigator/>}
      {!isAuth && !didTryAutoLogin && <SplashScreen />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
