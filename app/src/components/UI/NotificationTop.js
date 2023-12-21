import React, { useState, useRef, useEffect } from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';

import Community from '../../components/svg/Community';

import Sent from '../../components/svg/Sent';

import SearchBackground from '../../components/post/SearchBackground';
import Hamburger from '../../components/svg/Hamburger';
import ProfileUser from '../../components/svg/ProfileUser';

import { useNavigation } from '@react-navigation/native';
import * as types from '../../screens/startup/types';
import CloseReminder from '../../../res/images/Close_Reminder.svg';
import Reminder from '../../../res/images/reminder.svg';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';


const NotificationTop = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const _reinderNotificationData = useSelector(
    state => state.reminder.reinderNotificationData,
  );


  if (_reinderNotificationData == undefined) {
    return (
      <>
      </>
    )
  }
  if (_reinderNotificationData.length == 0) {
    return (
      <>

      </>
    )
  }
  let cData = _reinderNotificationData.length;
  cData = cData > 9 ? '9 +' : cData;

  const _reinderNotificationShowCount = useSelector(
    state => state.reminder.reinderNotificationShowCount,
  );

  //const [postStatus, setPostStatus] = useState(_reinderNotificationShowCount);

  return (
    <>

      <View
        style={{
          width: '100%',
          backgroundColor: '#055F9B',
          height: 110,
          paddingBottom: 10
        }}
      >

        <View
          style={{
            flex: 1,
            flexDirection: 'row'
          }}
        >



          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: 30,
              marginTop: 5,
              marginLeft: 20,
              width: '75%'
            }}
          >


            <Text style={{
              textAlign: 'left',
              fontStyle: 'normal',
              fontWeight: 'bold',
              color: 'white',
              fontSize: 16,
              opacity: 1,
              letterSpacing: 0,
              lineHeight: 19,
              marginHorizontal: 10
            }}>Today's Reminders </Text>

          </View>

          <View
            style={{
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
              marginTop: 5,
              marginLeft: 10,
            }}
          >

            <TouchableOpacity
              onPress={() => {
                props.clearNotification()
                return;
                dispatch({
                  type: types.RESET_NOTIFICATION
                })
              }}
            >

              <CloseReminder style={{
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
              }} />

            </TouchableOpacity>
          </View>


        </View>



        <View
          style={{
            flex: 1,
            borderRadius: 8,
            borderWidth: 2,
            borderColor: '#1578a2',
            flexDirection: 'row',
            backgroundColor: '#03426c',
            marginLeft: 20,
            marginRight: 20,
          }}
        >






          <View
            style={{
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
              marginTop: 10,
              marginLeft: 20,
              width: '15%'
            }}
          >


            <Reminder style={{
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
            }} />


          </View>
          <View
            style={{
              margin: 5,
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: 30,
              marginTop: 10,
              marginLeft: 10,
              width: '50%'
            }}
          >
            <ScrollView>


              <Text style={{
                textAlign: 'left',
                fontStyle: 'normal',
                fontWeight: 'bold',
                color: 'white',
                fontSize: 12,
                opacity: 1,
                letterSpacing: 0,
                lineHeight: 19,
                marginHorizontal: 10
              }}>{_reinderNotificationData[0].remoteMessage.notification.title}</Text>

            </ScrollView>
          </View>


          <View
            style={{
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 16,
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
              marginTop: 10,
              marginLeft: 10,
              backgroundColor: 'green'
            }}
          >

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ReminderNotification', {
                  screen: 'ReminderNotification',
                  params: {

                  }
                })
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
              }}>{_reinderNotificationShowCount}</Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  box: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
  },
  boxSearch: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'yellow',
  }

});

export default NotificationTop;
