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

const FindDoctorScreen = props => {


  const doctorBySpeciality = useSelector(
    state => state.health,
  );

  const _user = useSelector(state => state.user); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch({
      type: types.RESET_DOCTOR_SCHEDULE,
      userId: _user.userDetails._id
    })

  }, []);
    
  useEffect(() => {

    dispatch({
      type: types.GET_DOCTOR_BY_SPECIALITY,
      userId: _user.userDetails._id,
      _id: props.route.params.id
    })

  }, [props.route.params.id]);

  const addPosts = text => {
    refCreatePostBottomSheet.current.asaraType = "post"
    refCreatePostBottomSheet.current.asaraTypeId = ""
    refCreatePostBottomSheet.current.open()
  };

  let ndate = new Date();
  let hours = ndate.getHours();
  let greetText = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, flexDirection: "column" }}>

          <View
            style={{ flex: 1.5, flexDirection: "column", backgroundColor: '#055F9B' }}
          >
            <MenuTop />

          </View>


          <View
            style={{ flex: 7.5, flexDirection: "column" }}
          >
            <ScrollView>

              <View
                style={{
                  width: '100%',
                  backgroundColor: '#f2f2f2',
                  paddingBottom: 20
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
                      borderColor: 'grey',
                      borderWidth: 1,
                      borderRadius: 8,
                      margin: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                      marginLeft: 10,
                      width: '95%',
                      padding: 10
                    }}
                  >


                    <Text style={{
                      width: '100%',
                      textAlign: 'left',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      color: 'grey',
                      fontSize: 16,
                      opacity: 1,
                      marginHorizontal: 10,
                    }}>Search</Text>

                  </View>


                </View>
              </View>



              <View
                style={{
                  flex: 1,
                  backgroundColor: '#f2f2f2',
                  marginTop: 0,
                  borderTopColor: '#CCC',
                  borderWidth: 5,
                  borderRightColor: '#f2f2f2',
                  borderLeftColor: '#f2f2f2',
                  borderBottomColor: '#f2f2f2'

                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 12,
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 10,
                    color: '#000'
                  }}
                >Book Apointment with Top Specialists </Text>
                <FlatList
                  data={doctorBySpeciality.doctorBySpeciality}
                  numColumns={1}
                  keyExtractor={item => item._id}
                  horizontal={false}
                  renderItem={itemData => (
                    <FindDoctorCard
                      item={itemData}
                      navigation={props.navigation}
                      dotPosts={refDotPostBottomSheet}
                      backgroundColor={'#f2f2f2'}

                    />

                  )}
                />
              </View>

            </ScrollView>






            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                position: 'absolute',
                bottom: 10,
                right: 10,
                borderRadius: 30
              }}
              onPress={() => {
                props.navigation.navigate('Reminders', {
                  screen: 'Reminders',
                  params: {
                  }
                })
              }}>
              <Image
                source={images.AsaraSpeaker}
                style={{ width: 80, height: 80 }}
              />
            </TouchableOpacity>
          </View>


          <View
            style={{ flex: 1, flexDirection: "column" }}
          >
            <MenuBottom
              addPosts={addPosts}
            />

          </View>


          <CreatePostBottomSheet
            rbCreatePostSheetRef={refCreatePostBottomSheet}
            navigation={props.navigation}
            postType={"post"}
            postTypeId={""}
          />
          <DotsBottomSheet
            refDotPostBottomSheet={refDotPostBottomSheet}
            navigation={props.navigation}
          />
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


export default FindDoctorScreen;
