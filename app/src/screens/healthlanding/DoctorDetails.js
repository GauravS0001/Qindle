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
import MenuTop from '../../components/UI/MenuTopHealth';
import MenuBottom from '../../components/UI/MenuBottomHealth';
import PostCard from '../../components/UI/PostCard';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheet';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheet';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import branch, { BranchEvent } from 'react-native-branch'
import images from '../../../res/images_url';
import FindDoctorCard from '../../components/UI/FindDoctorCard';
import DoctorDetailsCard from '../../components/UI/DoctorDetails';
import DoctorDetailsButton from '../../components/UI/DoctorDetailsButton';
import FamousDoctorCard from '../../components/UI/FamousDoctorCard';
import CalendarStrip from 'react-native-calendar-strip';

import DoctorSlot from '../../components/UI/DoctorSlot';
import Close from '../../../res/images/Close.svg';


const DoctorDetails = props => {



  let _doctorId = 0;
  if (props.route.params.from == "famousDoctor") {
    _doctorId = props.route.params.item._id
  }
  if (props.route.params.from == "findDoctorCard" || props.route.params.from == "doctorNearYou") {
    _doctorId = props.route.params.item.doctorsData._id
  }

  const _user = useSelector(state => state.user); //!!state.auth.token
  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  const dispatch = useDispatch();

  const health = useSelector(
    state => state.health,
  );

  useEffect(() => {
    dispatch({
      type: types.GET_DOCTOR_DETAIL,
      userId: _user.userDetails._id, // to track who viewed profile TBD
      _doctorId: _doctorId
    });

  }, [_doctorId]);

  const [selectedFreinds, setSelectedFreinds] = useState([]);
  let ndate = new Date();
  let hours = ndate.getHours();
  let greetText = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <>


      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, flexDirection: "column" }}>

          <View
            style={{ flex: .01, marginBottom: 10, flexDirection: "column", backgroundColor: '#055F9B' }}
          >


          </View>


          <View
            style={{ flex: 7.5, flexDirection: "column" }}
          >
            <ScrollView>
              <DoctorDetailsCard
                navigation={props.navigation}
                item={health.doctorDetails}
              />
            </ScrollView>

          </View>


          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderTopColor: '#CCC',
              borderWidth: 1,
              borderRightColor: '#f2f2f2',
              borderLeftColor: '#f2f2f2',
              borderBottomColor: '#f2f2f2',

            }}
          >

            <DoctorDetailsButton
              item={health.doctorDetails}
              navigation={props.navigation}
            />


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
    //borderRadius: 8,
    //margin: 5,
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


export default DoctorDetails;
