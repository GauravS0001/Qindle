import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  FlatList,
  ScrollView,
  ToastAndroid,
  Image,
  Dimensions
} from 'react-native';
import colors from '../../../res/colors';
import MenuTop from '../../components/UI/MenuTopShopListDetail';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import ShopListIChildCategoryList from '../../components/UI/ShopListIChildCategoryList';
import { TextInput, TextInputMask } from 'react-native-paper';
const { height, width } = Dimensions.get("window")
import AutoHeightImage from 'react-native-auto-height-image';
import { useIsFocused } from '@react-navigation/native';
const ServiceListChild = props => {

  const _user = useSelector(state => state.user); //!!state.auth.token
  const _shop = useSelector(state => state.service); //!!state.auth.token
  const isFocused = useIsFocused();

  const dispatch = useDispatch();

  useEffect(() => {

    // console.log('props.route.params.item.item', props.route.params.item.item);
    // dispatch({
    //   type: types.GET_SERVICES_DETAIL,
    //   _id: props.route.params.item.item._id
    // })

  }, [props.route.params.item.item._id, isFocused]);


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

  const [ref, setRef] = React.useState();
  const [ref2, setRef2] = React.useState();
  const [ref3, setRef3] = React.useState();
  const [ref4, setRef4] = React.useState();
  const [ref5, setRef5] = React.useState();


  const [postText, setPostText] = useState(username);
  const [postText2, setPostText2] = useState(mobileNO);
  const [postText3, setPostText3] = useState(_calculateAge);
  const [postText4, setPostText4] = useState(emergenyContact);
  const [postText5, setPostText5] = useState();

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

  const textChangeHandler5 = text => {
    setPostText5(text);
  };


  const setBooking = async () => {
    console.log(121212)
    if (!postText || postText <= 0) {
      ref.focus();
      ToastAndroid.show("Enter Patient's Name", ToastAndroid.LONG);
      return false;
    }
    if (!postText2 || postText2 <= 0) {
      ref2.focus();
      ToastAndroid.show("Enter Valid Mobile Number", ToastAndroid.LONG);
      return false;
    }
    // let _data =
    // {
    //   "date": _unixTime,
    //   "fees": "1234",
    //   //"doctorId": props.route.params._doctorId,
    //   "patientname": postText,
    //   "mobilenumber": postText2,
    //   "emergency_contact": postText4,
    //   "age": postText3,
    //   "userid": _user.userDetails._id,
    //   'slot': _slot,
    //   'type': props.route.params,
    //   'details': postText5
    // }
    // dispatch({
    //   type: types.CREATE_DOCTOR_BOOKING_2,
    //   data: _data
    // })
    ToastAndroid.show("Service request has been placed", ToastAndroid.LONG);
    props.navigation.navigate('ServiceScreen', {
      screen: 'ServiceScreen',

    })
  }


  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, flexDirection: "column" }}>

          <View
            style={{ flex: 1, flexDirection: "column", backgroundColor: '#055F9B' }}
          >
            <MenuTop item={props.route.params.item.item} showCart={false} />

          </View>

          <View
            style={{ flex: 9, flexDirection: "column" }}
          >


            <ScrollView>
              {/* <Slider type="Medicine" widgetId="1" /> */}




              {/* <View >
                <AutoHeightImage
                  width={164}
                  source={{ uri: _shop.detailsData.icon }}
                />
                <Image
                  source={{ uri: _shop.detailsData.icon }}
                  style={{ width: 64, height: 64 }}//100%
                />
              </View> */}

              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 15,
                    marginBottom: 10,
                    marginTop: 15
                  }}>{props.route.params.item.item.option_description}</Text>
                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 15,
                    marginBottom: 15,
                    marginTop: 10
                  }}
                >
                  From {props.route.params.item.item.option_price_from} To {props.route.params.item.item.option_price_to}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 15,
                    marginBottom: 15,
                    marginTop: 10
                  }}
                >
                  Please provide details
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

                  {/* <TextInput
                    label="Emergency Contact Number"
                    value={postText4}
                    onChangeText={textChangeHandler4}
                    style={{ marginBottom: 10 }}
                    keyboardType={"numeric"}
                    maxLength={10}
                    ref={(vb) => {
                      setRef4(vb);
                    }}

                  /> */}



                  <TextInput
                    label="Details"
                    value={postText5}
                    multiline
                    onChangeText={textChangeHandler5}
                    style={{ marginBottom: 10 }}
                    ref={(vb) => {
                      setRef5(vb);
                    }}

                  />

                </View>


              </View>


              <View
                style={{ flex: 1, flexDirection: "column" }}
              >

                <View style={styles.button_container}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setBooking()
                    }}>
                    <Text style={styles.continue_text}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </View>




            </ScrollView>


          </View>



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


export default ServiceListChild;
