import React, {
  useEffect,
  useState,
  useReducer,
  useCallback,
  useRef,
} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import { DatePicker, Picker } from 'react-native-wheel-datepicker';

//import { Picker } from '@davidgovea/react-native-wheel-datepicker';

import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import Speaker from '../../../res/images/Speaker.svg';
import UnDone from '../../../res/images/UnDone.svg';
import Done from '../../../res/images/Done.svg';
import Arrow_Go_Ahead from '../../../res/images/Arrow_Go_Ahead.svg';
import images from '../../../res/images_url';
import * as types from '../startup/types';
import { useDispatch, useSelector } from 'react-redux';
import strings from '../../../res/strings';
import InterestBottomSheet from '../../components/bottomsheet/InterestBottomSheet';
import MedicalBottomSheet from '../../components/bottomsheet/MedicalBottomSheet';
import InputText from '../../components/UI/InputText';
import CommunityBottomSheet from '../../components/bottomsheet/CommunityBottomSheet';
import Reminder from '../../../res/images/reminder_r.svg';
import Home from '../../../res/images/home_r.svg';
import Add_New from '../../../res/images/Add_New.svg'; 
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheet';

const RemindersScreen = props => {
  const dispatch = useDispatch();

  const userDetails = useSelector(
    state => state.user,
  );

  let refCreatePostBottomSheet = useRef(null);
  const addPosts = text => {
    refCreatePostBottomSheet.current.asaraType = "post"
    refCreatePostBottomSheet.current.asaraTypeId = ""
    refCreatePostBottomSheet.current.open()
  };

  return (
    <BaseSafeAreaView>
      <View style={{ flex: 1, backgroundColor: '#106EAA' }}>
        <View style={{
          ...styles.asara_skip_container,
          //backgroundColor: 'green',
          flex: 1,
        }}>
          <View style={styles.asara_speaker_container}>
            <View style={{ flexDirection: 'row' }}>
              {/*<Text style={styles.skip_text}>{strings.app_name}</Text>
              <View style={styles.online_icon}></View>
      */}
            </View>
            {/**
            <Speaker style={{ marginLeft: 25 }} />
             */}
            {/* <Online /> */}
          </View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
              /*
              props.navigation.navigate('HomeScreen', {
                screen: 'HomeScreen',
                params: {
                }
              })
              */
            }}>
            <Text style={styles.skip_text}>X</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            // backgroundColor: 'red',//
            flex: 2,
          }}>
          <Image source={images.girl} style={{ width: 550, height: 215 }} />
        </View>
        <View style={{
          ...styles.list_container,
          //backgroundColor: 'blue',
          flex: 4,
        }}>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >Hi, I am Asara
          </Text>

          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center'
            }}

          >Your personal friend.</Text>


          <View
            style={{
              //backgroundColor: 'red',
              width: '80%',
              marginLeft: '10%',
              marginRight: '10%',
              marginTop: '10%',
              alignContent: 'center',
              alignItems: "baseline",
              flex: 1,
              flexDirection: 'row'
            }}
          >

            <View style={styles.box}>
              <TouchableOpacity
                style={{
                  alignContent: "center",
                  alignItems: "center"
                }}
                onPress={() => {
                  props.navigation.navigate('HomeScreen', {
                    screen: 'HomeScreen',
                    params: {
                    }
                  })
                }}>

                <Home
                  style={{
                    width: '250',
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold"
                  }}
                >Home</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.box}>
              <TouchableOpacity
                style={{
                  alignContent: "center",
                  alignItems: "center"
                }}
                onPress={() => {
                  props.navigation.navigate('ReminderCategory', {
                    screen: 'ReminderCategory',
                    params: {
                    }
                  })
                }}>

                <Reminder
                  style={{
                    width: '250'
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold"
                  }}
                >Reminders</Text>
              </TouchableOpacity>
            </View>


            <View style={styles.box}>
              <TouchableOpacity
                style={{
                  alignContent: "center",
                  alignItems: "center"
                }}
                onPress={() => addPosts()}>

                <Reminder
                  style={{
                    width: '250'
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold"
                  }}
                >Post</Text>
              </TouchableOpacity>
            </View>


          </View>


        </View>
        <CreatePostBottomSheet
          rbCreatePostSheetRef={refCreatePostBottomSheet}
          navigation={props.navigation}
          postType={"post"}
          postTypeId={""}
        />
      </View>
    </BaseSafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '30%',
    alignContent: 'center',
    alignItems: "center",
    marginLeft: '1%',
    marginRight: '1%',
    height: 80,
    paddingTop: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "black",

  },
  asara_skip_container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  asara_speaker_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  skip_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
  },
  online_icon: {
    width: 10,
    height: 10,
    backgroundColor: '#0EC92D',
    borderColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    margin: 2,
  },
  list_container: {
    marginTop: 10,
    flex: 3,
    // backgroundColor: 'pink',
  },
  system_card: {
    backgroundColor: '#03203A',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
  },
  chat_left_text: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 24,
    margin: 10,
  },
  hobbies_card: {
    backgroundColor: '#055F9B',
    borderColor: colors.white,
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  system_card_left: {
    backgroundColor: '#03203A',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  system_card_right: {
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
    maxWidth: '80%',
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
  },
  question_container: {
    marginHorizontal: 20,
    flex: 5,
  },
  fulltext: {
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow_validation: { flex: 2, marginHorizontal: 0 },
  textinput_container: { marginLeft: 0, flex: 8 },
  tap_here_container: {
    marginLeft: 0,
    flex: 8,
    color: colors.white,
  },
});

export default RemindersScreen;
