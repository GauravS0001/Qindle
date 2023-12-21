import React, { useState, useCallback, useEffect } from "react";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  View,
  Button,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Small_arrow_1 from '../../../res/images/Small_arrow_1';
import Wow from '../../../res/images/Wow';
import Asara_hamburger from '../../../res/images/Hamburger/Asara_hamburger';
import News from '../../../res/images/Hamburger/News';
import Events from '../../../res/images/Hamburger/Events';
import Videos from '../../../res/images/Hamburger/Videos';
import Emergency from '../../../res/images/Hamburger/Emergency';
import ConsultOnline from '../../../res/images/Hamburger/ConsultOnline';
import UploadPrescription from '../../../res/images/Hamburger/UploadPrescription';
import OrderMedicines from '../../../res/images/Hamburger/OrderMedicines';
import BookLabtest from '../../../res/images/Hamburger/BookLabtest';
import HealthInsurance from '../../../res/images/Hamburger/healthInsurance';
import Settings from '../../../res/images/Hamburger/settings';
import Contactus from '../../../res/images/Hamburger/Contactus';
import Privacy from '../../../res/images/Hamburger/Privacy';
import TnC from '../../../res/images/Hamburger/TnC';
import Logout from '../../../res/images/Hamburger/logout';
import Invitefrnd from '../../../res/images/Hamburger/Invitefrnd';
import * as types from '../../screens/startup/types';
import Share from 'react-native-share';
import branch, { BranchEvent } from 'react-native-branch'


const MenuContent = props => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const _user = useSelector(state => state.user); //!!state.auth.token
  
  const action = async () => {
    // only canonicalIdentifier is required
    let branchUniversalObject = await branch.createBranchUniversalObject('canonicalIdentifier', {
      locallyIndex: true,
      title: 'Join Asara!',
      contentDescription: 'Your Personal health assistance',
      contentMetadata: {
        ratingAverage: 4.2,
        customMetadata: {
          userId: _user.userDetails._id
        }
      }
    })
    let shareOptions = { messageHeader: 'Open the link below', messageBody: 'Open the link below' }
    let linkProperties = { feature: 'share', channel: 'RNApp' }
    let controlParams = { $desktop_url: 'http://asara.com/home', $ios_url: 'http://asara.com/ios' }
    let { channel, completed, error } = await branchUniversalObject.showShareSheet(shareOptions, linkProperties, controlParams)
  }

  return (
    <>
      {/** 
       <TouchableOpacity
        onPress={() => navigation.navigate('TextPost')}>
        <Text>
          POST
        </Text>
      </TouchableOpacity>
      */}

      {/**
       * 
       <View style={{
            flex: 1,
            flexDirection: 'row'
          }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row'
              }}
            >
              <DrawerItem label="Post"
                onPress={() => navigation.navigate('TextPost')}
                style={{ backgroundColor: 'yellow' }}
              >
              </DrawerItem>
            </View>
            <View
              style={{
                flex: 4,
                flexDirection: 'row'
              }}
            >
              <Text>asdsad</Text>
            </View>
          </View>
       */}


      <DrawerContentScrollView >
        <View style={styles.container}>
          <View style={{
            flex: 1,
            flexDirection: 'row'
          }}>

            <View style={{
              flex: 3,
              flexDirection: 'row',
              paddingTop: 20,
              paddingLeft: 20
            }}>
              <Asara_hamburger />

            </View>
          </View>
        </View>


        <View style={styles.container}>
          <Text style={{
            flex: 1,
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#f2f2f2',
            marginTop: 10
          }}>TRENDING</Text>
          <View style={styles.r0}>
            <View style={styles.r1}>
              <News />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>News</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>

          <View style={styles.r0}>
            <View style={styles.r1}>
              <Events />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Event</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>


          <View style={styles.r0}>
            <View style={styles.r1}>
              <Videos />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Videos</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>


        </View>










        <View style={styles.container}>
          <Text style={{
            flex: 1,
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#f2f2f2',
          }}>HEALTH</Text>
          <View style={styles.r0}>
            <View style={styles.r1}>
              <Emergency />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Emergency</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>

          <View style={styles.r0}>
            <View style={styles.r1}>
              <ConsultOnline />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Consult Online</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>


          <View style={styles.r0}>
            <View style={styles.r1}>
              <UploadPrescription />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Upload Prescription</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>



          <View style={styles.r0}>
            <View style={styles.r1}>
              <OrderMedicines />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Order Medicines</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>



          <View style={styles.r0}>
            <View style={styles.r1}>
              <BookLabtest />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Book Lab Test</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>




          <View style={styles.r0}>
            <View style={styles.r1}>
              <HealthInsurance />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Book Health Services</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>


        </View>





        <View style={styles.container}>
          <Text style={{
            flex: 1,
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#f2f2f2',
          }}>ORTHERS</Text>
          <View style={styles.r0}>
            <View style={styles.r1}>
              <Settings />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Settings</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>

          <View style={styles.r0}>
            <View style={styles.r1}>
              <Contactus />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Contact Us</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>


          <View style={styles.r0}>
            <View style={styles.r1}>
              <Privacy />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Privacy Policy</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>



          <View style={styles.r0}>
            <View style={styles.r1}>
              <TnC />
            </View>
            <View style={styles.r2}>
              <Text style={styles.txt}>Terms of Use</Text>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>



          <View style={styles.r0}>
            <View style={styles.r1}>
              <Logout />
            </View>
            <View style={styles.r2}>
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: types.LOG_OUT,
                    data: []
                  });
                  dispatch({
                    type: types.SIGNOUT_SUCCESS,
                    data: []
                  });

                  dispatch({
                    type: types.ONBOARDING_RESET_LIST,
                    data: []
                  });
                  dispatch({
                    type: types.RESET_USER_POST,
                    data: []
                  });

                }}
              >
                <Text style={styles.txt}>Signout</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.r3}>
              <Small_arrow_1 />
            </View>
          </View>


        </View>



        <View style={{ ...styles.bottomInvite }}>
          <TouchableOpacity
            onPress={() => {
              action();
              return;
              let options = {
                message: 'asara://inviteUser/' + _user.userDetails._id
              }
              Share.open(options)
                .then((res) => {
                })
                .catch((err) => {
                });
            }}>
            <Invitefrnd />
          </TouchableOpacity>
        </View>



        <View style={styles.bottom}>
          <Text style={{ color: '#999999', fontSize: 14 }}>Copyrights 2021 - Version 1.0.0</Text>
        </View>



      </DrawerContentScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
  r1: {
    flex: .3,
    flexDirection: 'row',
    //backgroundColor: 'green',
    padding: 10
  },
  r2: {
    flex: 3,
    flexDirection: 'row',
    //backgroundColor: 'red',
    padding: 10,
  },
  r3: {
    flex: .3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 20,

    //backgroundColor:'blue',
  },
  r0: {
    flex: 1,
    flexDirection: 'row'
  },
  txt: {
    //fontWeight: 'bold',
    fontSize: 15
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    padding: 20,

  },
  bottomInvite: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    margin: 10,
    paddingTop: 10
  },
})

export default MenuContent;
