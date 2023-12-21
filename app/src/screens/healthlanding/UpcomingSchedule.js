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
import FamousDoctorCard from '../../components/UI/FamousDoctorCard';
import CalendarStrip from 'react-native-calendar-strip';
import UpcomingCardDetail from '../../components/UI/UpcomingCardDetail';
import DoctorSlot from '../../components/UI/DoctorSlot';
import Close from '../../../res/images/Close.svg';

const UpcomingSchedule = props => {


  const userUpcomingSchedule = useSelector(
    state => state.health.userUpcomingSchedule,
  );

  const _user = useSelector(state => state.user); //!!state.auth.token
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: types.GET_USER_ALL_SCHEDULE,
      userId: _user.userDetails._id
    })
  }, []);

  const [selectedDate, setSelectedDate] = useState(userUpcomingSchedule);


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
                Upcoming Schedules
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



              <FlatList
                data={selectedDate}
                numColumns={1}
                keyExtractor={item => item._id}
                horizontal={false}
                renderItem={itemData => (
                  <UpcomingCardDetail
                    item={itemData}
                  />
                )}
              />



            </ScrollView>

          </View>


          <View
            style={{ flex: 1, flexDirection: "column" }}
          >


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


export default UpcomingSchedule;
