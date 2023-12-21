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
import MenuTop from '../../components/UI/MenuTopShopListChild';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import ServiceListItems from '../../components/UI/SeviceList';
import { TextInput, TextInputMask } from 'react-native-paper';
const { height, width } = Dimensions.get("window")
import AutoHeightImage from 'react-native-auto-height-image';
import { useIsFocused } from '@react-navigation/native';
const ServiceList = props => {

  const _user = useSelector(state => state.user); //!!state.auth.token
  const _shop = useSelector(state => state.service); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  let refAddProductBottomSheet = useRef(null);
  let addSheet = useRef(null);
  const isFocused = useIsFocused();

  const dispatch = useDispatch();

  useEffect(() => {


    dispatch({
      type: types.GET_SERVICE_OPTIONS,
      _id: props.route.params.item.item._id
    })
    dispatch({
      type: types.GET_SERVICES_CHILD2_CATEGORY_DATA, //GET_SHOP_CATEGORY_DATA,
      _id: props.route.params.item.item._id
    })

    dispatch({
      type: types.GET_SERVICES_DETAIL,
      _id: props.route.params.item.item._id
    })



  }, [props.route.params.item.item._id, isFocused]);



  const loadData = (item) => {
    dispatch({
      type: types.GET_SERVICES_CHILD2_CATEGORY_DATA,
      _id: item.id
    })

    dispatch({
      type: types.GET_SERVICES_DETAIL,
      _id: item.id
    })


    dispatch({
      type: types.GET_SERVICE_OPTIONS,
      _id: props.route.params.item.item._id
    })
  }



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
              <FlatList
                data={_shop.detailsOptions}
                keyExtractor={item => item._id}
                horizontal={false}
                renderItem={itemData => (
                  <>
                    <ServiceListItems
                      item={itemData.item}
                    //onBgSelect={onSelectBg}
                    />

                  </>
                )}
              />

              <FlatList
                data={_shop.option_details}
                keyExtractor={item => item._id}
                horizontal={false}
                renderItem={itemData => (
                  <>
                    <ServiceListItems
                      item={itemData.item}
                    //onBgSelect={onSelectBg}
                    />

                  </>
                )}
              />
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


export default ServiceList;
