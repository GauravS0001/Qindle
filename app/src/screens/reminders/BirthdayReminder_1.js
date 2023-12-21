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
  ToastAndroid
} from 'react-native';
import colors from '../../../res/colors';
import TextareaWithBackground from '../../components/community/TextareaWithBackground';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import Close from '../../../res/images/Close.svg';
const BirthdayReminder_1 = props => {


  const _user = useSelector(state => state.user); //!!state.auth.token

  const dispatch = useDispatch();
  const [birthDay, setBirthDay] = useState(new Date());
  const [birthTime, setBirthTime] = useState(new Date());

  const [birthTimeStr, setBirthTimeStr] = useState(birthTime.toLocaleTimeString('it-IT'));

  const [birthDayStr, setBirthDayStr] = useState(birthDay);


  const [postText, setPostText] = useState('');

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);


  let refCreatePostBottomSheet = useRef(null);
  const textChangeHandler = text => {
    setPostText(text);
  };

  const onChangeDate = (event, selectedDate) => {
   
    if (selectedDate != undefined) {
      setBirthDay(selectedDate);
      setBirthDayStr(selectedDate.toString());
      

    }
    setShowDate(false);
  };
  const onChangeTime = (event, selectedDate) => {
    if (selectedDate != undefined) {
      setBirthTime(selectedDate);
      setBirthTimeStr(selectedDate.toLocaleTimeString('it-IT'));
    }
    setShowTime(false);
  };

  const textChangeHandler2 = text => {
    setShowDate(true);
    setShowTime(false);
  };

  const textChangeHandler3 = text => {
    setShowDate(false);
    setShowTime(true);
  };


  const _reminderFormComplete = useSelector(
    state => state.reminder.reminderFormComplete,
  );
  useEffect(() => {
    if (_reminderFormComplete == true) {
      ToastAndroid.show("Reminder Created", ToastAndroid.LONG);
      props.navigation.navigate('HomeScreen', {
        screen: 'HomeScreen',
        params: {}
      })
    }
  }, [_reminderFormComplete]);


  /*
  const test = text => {

    setPostText2(refCreatePostBottomSheet.current.asaraPrivacy);
    
  };
*/

  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, margin: 15, }}>

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
                fontWeight: 'bold'

              }}
            >
              Birthday Reminder
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
                  props.navigation.goBack();
                }
                }
              >
                <Close />
              </TouchableOpacity>

            </View>

          </View>


          <View
            style={{
              //backgroundColor: 'blue',
              borderTopColor: 'white',
              borderBottomColor: '#f2f2f2',
              borderWidth: 2,
              borderLeftColor: 'white',
              borderRightColor: 'white',
              marginBottom: 10
            }}>
          </View>


          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          > </Text>

          <View style={styles.textareaWithBackground}>

            <TextareaWithBackground
              onInputChange={textChangeHandler}
              editable={true}
              lineHieght={15}
              height={70}
              text={'Name*'}
              maxLength={20}
              placeholder={'Type birthday person name'}
            />

          </View>

          <View style={styles.textareaWithBackground}>

            <View style={{ width: '100%'}}>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}
              >
                Select Date*
              </Text>
              <View
                style={{
                  flex: 1
                }}
              >
                <View
                  style={{
                    backgroundColor: "#f2f2f2",
                    width: '100%',
                    borderRadius: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={
                      () => {
                        textChangeHandler2()
                      }
                    }>
                    <Text
                      style={{
                        padding: 10,
                        borderRadius: 10,
                        fontSize: 18,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        letterSpacing: 0,
                        color: '#8C8C8C'
                      }}
                    >
                      {
                        birthDay.toString().slice(0, 15)
                      }
                    </Text>

                  </TouchableOpacity>
                </View>
              </View>
            </View>


          </View>


         

          <View style={styles.bg_color_dots}>

          </View>

          <View style={styles.button_container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {

                dispatch({
                  type: types.SET_REMINDER,
                  userId: _user.userDetails._id,
                  day: birthDay,
                  time: birthTime,
                  name: postText,
                  _da: birthTimeStr,
                  _day: birthDayStr,
                  reminderType: 'birthday',
                })

                return;


                
              }}>
              <Text style={styles.continue_text}>SET REMINDER</Text>
            </TouchableOpacity>
          </View>
        </View>

        

        {showDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={birthDay}
            mode='date'
            is24Hour={false}
            display="default"
            onChange={onChangeDate}
          />
        )}

        {showTime && (
          <DateTimePicker
            testID="dateTimePicker2"
            value={birthTime}
            mode='time'
            is24Hour={false}
            display="default"
            onChange={onChangeTime}
          />
        )}

      </BaseSafeAreaView>
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
    flex: 4,
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

export default BirthdayReminder_1;
