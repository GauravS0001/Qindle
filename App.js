/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
// import {store} from './app/src/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './app/src/store/configureStore';
const { persistor, store } = configureStore();

import MobileNoScreen from './app/src/screens/login/MobileNoScreen';
import { ActivityIndicator } from 'react-native';
import AppNavigator from './app/src/screens/navigation/AppNavigator';

import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as types from './app/src/screens/startup/types';
import { call, put, select } from 'redux-saga/effects';

async function saveTokenToDatabase(token) {
  // Assume user is already signed in

  //const dispatch = useDispatch();
  /*
  dispatch({
    type: types.SEND_USER_TOKEN,
    userId: _user.userDetails._id,
  })
  */
  //Alert.alert('TOKEN', token);
  /*const userId = auth().currentUser.uid;

  
  // Add the token to the users datastore
  await firestore()
    .collection('users')
    .doc(userId)
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
    
    */
}


export default function App() {

  //const _user = useSelector(state => state.user); //!!state.auth.token


  /*
   useEffect(() => {
     // Get the device token
     messaging()
       .getToken()
       .then(token => {
         return saveTokenToDatabase(token);
       });
 
     // If using other push notification providers (ie Amazon SNS, etc)
     // you may need to get the APNs token instead for iOS:
     // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }
 
     // Listen to whether the token changes
     return messaging().onTokenRefresh(token => {
       saveTokenToDatabase(token);
     });
   }, []);
 
   */

  /*
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!_2', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  */



  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        {/* <MobileNoScreen /> */}
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
