import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
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

import Close from '../../../res/images/Close.svg';
const CommunityAdmin = props => {

  const dispatch = useDispatch();

  const _user = useSelector(state => state.user); //!!state.auth.token

  
  useEffect(() => {

    console.log('calling data ...')
    dispatch({
      type: types.GET_USER_FRIENDS,
      userId: _user.userDetails._id
    })


    dispatch({
      type: types.GET_COMMUNITY_MODERRATION_DATA,
      userId: _user.userDetails._id
    })


  }, [friendsList]);

  const friendsList = useSelector( //_comunityModerationData
    state => state.community.comunityModerationData,
  );
  /*
  const friendsList = useSelector(
    state => state.userPost.userFriends,
  );
  */


  const [selectedFreinds, setSelectedFreinds] = useState(friendsList);

  const onSelectBg = (item, approveReject) => {
    let _data = selectedFreinds.filter(function (value) {
      return item.usersinfo._id !== value.usersinfo._id
    })
    dispatch({
      type: types.DOT_POST_ACTIONS_COMMUNITY,
      id: props.route.params.item._id,
      action: approveReject,
      userId: item.usersinfo._id,
      moderatiorId: item._id
    })
    setSelectedFreinds(_data)
    /*
    let _data = selectedFreinds[selectedFreinds.length - 1];
    props.navigation.navigate('MedicineReminder_2', {
      screen: 'MedicineReminder_2', //2
      params: {
        friends: _data
      }
    });
    */

  };


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
              Manage {props.route.params.item.community_name}
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
            ...styles.textareaWithBackground, marginTop: 10, flex: .1,
            // backgroundColor: 'pink'
          }}>

            <Text>Joining Request Received</Text>


          </View>



          <View style={{
            ...styles.bg_color_dots, flex: 1,
            //backgroundColor: 'blue'
          }}>


            <FlatList
              data={selectedFreinds}
              horizontal={false}
              keyExtractor={item => item._id}
              numColumns={1}
              renderItem={itemData => (
                <>

                  <CommunityAcceptRejectForm
                    item={itemData.item}
                    onBgSelect={onSelectBg}
                  />

                </>
              )}
            />
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
export default CommunityAdmin;
