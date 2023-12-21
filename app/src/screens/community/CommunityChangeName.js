import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  //TextInput,
  ToastAndroid,
  Keyboard,
  ImageBackground,
  FlatList,
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import TextareaWithBackground from '../../components/community/TextareaWithBackground';
import UserNameUserImage from '../../components/community/UserNameUserImage';
import CommunityCategory from '../../components/UI/CommunityCategory';
import CommunityAcceptRejectForm from '../../components/UI/CommunityAcceptRejectForm';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import { TextInput, TextInputMask } from 'react-native-paper';

import Close from '../../../res/images/Close.svg';
const CommunityChangeName = props => {

  const dispatch = useDispatch();

  const _user = useSelector(state => state.user); //!!state.auth.token
  const [ref, setRef] = React.useState();
  const [postText, setPostText] = useState(props.route.params.item.community_name);

  const textChangeHandler = text => {
    setPostText(text);
  };

  const changeName = () => {
    if (postText.length <= 0) {
      ref.focus();
      ToastAndroid.show("Enter Community Name", ToastAndroid.LONG);
      return false;
    }
    //else {
    dispatch({
      type: types.COMMUNITY_NAME_CHANGE,
      name: postText,
      communityId: props.route.params.item._id
    })
    //}
    props.route.params.item.community_name = postText
    props.navigation.navigate('MyCommunity', {
      screen: 'MyCommunity',
      params: {
        //fromNamePopup: true
      }
    });
  }

  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, margin: 15, }}>

          <View style={{
            flex: .1,
            marginTop: 5,
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
              Change Name {props.route.params.item.community_name}
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

          <View style={{
            ...styles.textareaWithBackground, marginTop: 10, flex: .05,
            //backgroundColor: 'orange'
          }}>

            <View
              style={{
                //backgroundColor: 'blue',
                borderTopColor: '#f2f2f2',
                borderBottomColor: 'white',
                borderWidth: 2,
                borderLeftColor: 'white',
                borderRightColor: 'white',
                width: '100%'
              }}>
              <Text></Text>
            </View>


          </View>

          <View style={{
            ...styles.bg_color_dots, flex: 1,
            //backgroundColor: 'blue'
          }}>

            <View
              style={{
                width: '96%',
                marginLeft: '2%',
                marginRight: '2%',
              }}
            >
              <TextInput
                label="Community Name*"
                defaultValue={postText}
                onChangeText={textChangeHandler}
                style={{ marginBottom: 10 }}
                ref={(vb) => {
                  setRef(vb);
                }}
              />


              <View style={{
                ...styles.button_container,
                alignItems: 'flex-start'
              }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    changeName()
                    return;
                    dispatch({
                      type: types.CREATE_DOCTOR_BOOKING,
                      _doctorId: props.route.params._doctorId,
                      name: postText,
                      mobile: postText2,
                      age: postText3,
                      emergenyContact: postText4,
                      userId: _user.userDetails._id,
                      _unixTime: _unixTime,
                      _slot: _slot,
                      _type: props.route.params._type
                    })
                    return;

                  }}>
                  <Text style={styles.continue_text}>Confirm</Text>
                </TouchableOpacity>

              </View>


            </View>
          </View>
        </View>
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
export default CommunityChangeName;
