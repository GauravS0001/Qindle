import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  //TextInput,
  Keyboard,
  ImageBackground,
  FlatList,
  ToastAndroid,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import TextareaWithBackground from '../../components/doctor/TextareaWithBackground';
import PrivacyWithBackground from '../../components/community/PrivacyWithBackground';
import UserNameUserImage from '../../components/community/UserNameUserImage';
import BackgroundDots from '../../components/UI/BackgroundDots';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import PrivacyBottomSheet from '../../components/bottomsheet/PrivacyBottomSheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import { CREATE_DOCTOR_BOOKING } from '../../api/APIConstants';
import Close from '../../../res/images/Close.svg';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');
import { TextInput, TextInputMask } from 'react-native-paper';

const BookDoctorScreen_2 = props => {

  //;
  const _user = useSelector(state => state.user); //!!state.auth.token
  const dispatch = useDispatch();


  let _calculateAge;
  let username
  let mobileNO
  let emergenyContact
  try {
    let _birthday = new Date(_user.userDetails.userOnboadingData.dob);
    var ageDifMs = Date.now() - _birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    _calculateAge = Math.abs(ageDate.getUTCFullYear() - 1970).toString();
    username = _user.userDetails.userOnboadingData.name;
    mobileNO = _user.userDetails.userOnboadingData.mobile_no;
    emergenyContact = _user.userDetails.userOnboadingData.emergency_contact;
  } catch (error) {

  }

  let _bookDate = new Date(props.route.params.selectedDate);
  let _unixTime = Math.floor(_bookDate.getTime() / 1000);


  let _date = props.route.params.selectedDate.toString().slice(0, 15)
  let _slot = props.route.params.slotData



  const [ref, setRef] = React.useState();
  const [ref2, setRef2] = React.useState();
  const [ref3, setRef3] = React.useState();
  const [ref4, setRef4] = React.useState();

  const [postText, setPostText] = useState(username);
  const [postText2, setPostText2] = useState(mobileNO);
  const [postText3, setPostText3] = useState(_calculateAge);
  const [postText4, setPostText4] = useState(emergenyContact);

  let refCreatePostBottomSheet = useRef(null);
  const textChangeHandler = text => {
    setPostText(text);
  };

  const textChangeHandler2 = text => {
    setPostText2(text);
  };

  const textChangeHandler3 = text => {
    setPostText3(text);
  };
  const textChangeHandler4 = text => {
    setPostText4(text);
  };

  const setBooking = async () => {
    if (postText <= 0) {
      ref.focus();
      ToastAndroid.show("Enter Patient's Name", ToastAndroid.LONG);
      return false;
    }
    if (postText2 <= 0) {
      ref2.focus();
      ToastAndroid.show("Enter Valid Mobile Number", ToastAndroid.LONG);
      return false;
    }
    let _data =
    {
      "date": _unixTime,
      "fees": "1234",
      "doctorId": props.route.params._doctorId,
      "patientname": postText,
      "mobilenumber": postText2,
      "emergency_contact": postText4,
      "age": postText3,
      "userid": _user.userDetails._id,
      'slot': _slot,
      'type': props.route.params._type
    }
    dispatch({
      type: types.CREATE_DOCTOR_BOOKING_2,
      data: _data
    })
  }

  const _doctorScheduleForm = useSelector(
    state => state.health.doctorScheduleForm,
  );

  useEffect(() => {
    if (_doctorScheduleForm == true) {
      ToastAndroid.show("Appointment has been Created !", ToastAndroid.LONG);
      dispatch({
        type: types.RESET_UPCOMING_SCHEDULE,
        userId: _user.userDetails._id
      })
      setTimeout(() => {
        props.navigation.navigate('HealthScreen', {
          screen: 'HealthScreen',
          params: {}
        })
      }, 1000);
    }
  }, [_doctorScheduleForm]);


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
                Enter Patient Details
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
                    props.navigation.goBack()
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
            <ScrollView>


              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: 'center',
                  alignItems: 'center',
                  //marginBottom: 10
                }}
              >
                <View
                  style={{
                    width: '100%',
                    marginTop: 10,
                    backgroundColor: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                    paddingBottom: 20,
                    paddingTop: 10

                  }}
                >

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row"
                    }}
                  >

                    <View
                      style={{
                        flex: .4,
                        flexDirection: "row",
                        marginLeft: 20,
                      }}
                    >
                      <Image
                        source={{
                          uri: props.route.params._image
                        }} //props.item.item.icon'
                        style={{ width: 64, height: 64 }}//100%
                      />
                    </View>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                      }}
                    >

                      <Text
                        style={{
                          color: 'black',
                          fontWeight: "bold"
                        }}
                      >
                        {props.route.params._name}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                        }}
                      >
                        {props.route.params._degree}
                      </Text>
                    </View>

                  </View>

                </View>

              </View>
              <View
                style={{
                  // borderTopColor:'white',
                  // borderLeftColor: 'white',
                  // borderRightColor: 'white',
                  borderBottomColor: "#f2f2f2",
                  borderWidth: .5
                }}
              >
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                  borderRightColor: 'white',
                  borderTopColor: "white",
                  borderBottomColor: '#eee',
                  borderLeftColor: "white",
                  borderWidth: 6,
                }}
              >
                <View
                  style={{
                    width: '100%',
                    backgroundColor: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                    paddingTop: 10,
                    paddingBottom: 20
                  }}
                >

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",

                    }}
                  >

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                        borderRightColor: '#bbb',
                        borderTopColor: "white",
                        borderBottomColor: 'white',
                        borderLeftColor: "white",
                        borderWidth: 2,
                        paddingRight: 4
                      }}
                    >

                      <Text
                        style={{
                          color: 'black',
                          fontWeight: "bold"
                        }}
                      >
                        {_date}, {_slot}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                        }}
                      >

                      </Text>
                    </View>


                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                        paddingLeft: 20
                      }}
                    >

                      <Text
                        style={{
                          color: 'black',
                          fontWeight: "bold"
                        }}
                      >
                        ₹ 833
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                        }}
                      >
                        Consultation Fees
                      </Text>
                    </View>

                  </View>

                </View>

              </View>






              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 15,
                    marginBottom: 15,
                  }}
                >
                  Please provide patient details
                </Text>

                <View
                  style={{
                    width: '96%',
                    marginLeft: '2%',
                    marginRight: '2%',
                  }}
                >

                  <TextInput
                    label="Enter Patient's Full Name*"
                    defaultValue={postText}
                    onChangeText={textChangeHandler}
                    style={{ marginBottom: 10 }}
                    ref={(vb) => {
                      setRef(vb);
                    }}
                  />

                  <TextInput
                    label="Mobile Number*"
                    value={postText2}
                    onChangeText={textChangeHandler2}
                    style={{ marginBottom: 10 }}
                    keyboardType={"numeric"}
                    maxLength={10}
                    ref={(vb) => {
                      setRef2(vb);
                    }}
                  />

                  <TextInput
                    label="Age"
                    //right={<TextInput.Affix text="/100" />}
                    value={postText3}
                    onChangeText={textChangeHandler3}
                    style={{ marginBottom: 10 }}
                    keyboardType={"numeric"}
                    maxLength={2}
                    ref={(vb) => {
                      setRef3(vb);
                    }}

                  />

                  <TextInput
                    label="Emergency Contact Number"
                    value={postText4}
                    onChangeText={textChangeHandler4}
                    style={{ marginBottom: 10 }}
                    keyboardType={"numeric"}
                    maxLength={10}
                    ref={(vb) => {
                      setRef4(vb);
                    }}

                  />





                  {/*
                  <TextareaWithBackground
                    onInputChange={textChangeHandler}
                    editable={true}
                    lineHieght={30}
                    height={85}
                    text={username}
                    maxLength={20}
                    placeholder={"Enter Patient's Full Name*"}
                  />
                 

                  <TextareaWithBackground
                    onInputChange={textChangeHandler2}
                    editable={true}
                    lineHieght={30}
                    height={85}
                    text={mobileNO}
                    maxLength={20}
                    placeholder={"Mobile Number*"}
                  />

                  <TextareaWithBackground
                    onInputChange={textChangeHandler3}
                    editable={true}
                    lineHieght={30}
                    height={85}
                    text={_calculateAge}
                    maxLength={20}
                    placeholder={"Age"}
                  />

                  <TextareaWithBackground
                    onInputChange={textChangeHandler4}
                    editable={true}
                    lineHieght={30}
                    height={85}
                    text={emergenyContact}
                    maxLength={20}
                    placeholder={"Emergency Contact Number"}
                  />
 */}

                </View>


              </View>


            </ScrollView>

          </View>


          <View
            style={{ flex: 1, flexDirection: "column" }}
          >

            <View style={styles.button_container}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  //Alert.alert('TEst21 zr');
                  setBooking()
                }}>
                <Text style={styles.continue_text}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>



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
    //flex: 4,
    //flexDirection: 'row',
    //justifyContent: 'space-between',
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

export default BookDoctorScreen_2;
