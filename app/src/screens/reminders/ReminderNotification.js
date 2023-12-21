import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  FlatList,
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import TextareaWithBackground from '../../components/community/TextareaWithBackground';
import UserNameUserImage from '../../components/community/UserNameUserImage';
import ReminderCategoryCard from '../../components/UI/ReminderCategoryCard';
import NotificationList from '../../components/UI/NotificationList';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';


import Close from '../../../res/images/Close.svg';
const ReminderNotification = props => {

  const dispatch = useDispatch();

  const _reinderNotificationSet = useSelector(
    state => state.reminder.reinderNotificationSet,
  );

  const _reinderNotificationData = useSelector(
    state => state.reminder.reinderNotificationData,
  );

  useEffect(() => {
    dispatch({
      type: types.RESET_NOTIFICATION_COUNT
    })
  }, []);

  const [selectedCategory, setSelectedCategory] = useState([]);


  return (
    <>


      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, flexDirection: "column" }}>

          <View
            style={{ flex: 1, flexDirection: "column", backgroundColor: '#055F9B' }}
          >
            <View style={{
              flex: 1,
              marginTop: 15,
              flexDirection: 'row',
            }}>
              <Text
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingLeft: 10,
                  paddingTop: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                Remminder Notification
              </Text>
              <View
                style={{
                  flex: .1,
                  flexDirection: 'row',
                  paddingLeft: 10,
                  paddingTop: 16,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('HomeScreen', {
                      screen: 'HomeScreen',
                      params: {
                      }
                    })
                  }
                  }
                >
                  <Close />
                </TouchableOpacity>

              </View>

            </View>

          </View>


          <View
            style={{ flex: 7.5, flexDirection: "column" }}
          >


            <FlatList
              data={_reinderNotificationData}
              keyExtractor={item => item.name}
              renderItem={itemData => (
                <NotificationList
                  item={itemData}
                />
              )}
            />




          </View>

          {/*
          <View
            style={{ flex: 1, flexDirection: "column" }}
          >

            <View style={styles.button_container}>

            </View>
          </View>
          */}




        </View>
      </BaseSafeAreaView >

    </>



  );
};

const styles = StyleSheet.create({
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
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ReminderNotification;
