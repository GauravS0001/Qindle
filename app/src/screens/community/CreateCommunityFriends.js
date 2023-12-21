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
import CommunityFriends from '../../components/UI/CommunityFriends';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';


import Close from '../../../res/images/Close.svg';
const CreateCommunityFriends = props => {
 
  const dispatch = useDispatch();

  const _user = useSelector(state => state.user); //!!state.auth.token

  useEffect(() => {
    dispatch({
      type: types.GET_USER_FRIENDS,
      userId: _user.userDetails._id
    })

  }, []);

  const friendsList = useSelector(
    state => state.userPost.userFriends,
  );

  const [selectedFreinds, setSelectedFreinds] = useState([]);

  const onSelectBg = item => {
    let data = selectedFreinds;
    data.push(item)
    setSelectedFreinds(data)
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
              Invite Friend
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

          <View
            style={{
              //backgroundColor: 'blue',
              borderTopColor: 'white',
              borderBottomColor: '#f2f2f2',
              borderWidth: 5,
              borderLeftColor: 'white',
              borderRightColor: 'white',
            }}>
          </View>




          <View style={{
            ...styles.textareaWithBackground, marginTop: 20, flex: .05,
            //backgroundColor:'pink'
          }}>

            <Text
              style={{
                flex: 1,
                backgroundColor: '#055F9B',
                flexDirection: 'column',
                marginRight: 5,
                borderRadius: 20,
                height: 10
              }}
            >
            </Text>
            <Text
              style={{
                flex: 1,
                backgroundColor: '#055F9B',
                flexDirection: 'column',
                marginRight: 5,
                borderRadius: 20,
                height: 10
              }}
            >
            </Text>

            <Text
              style={{
                flex: 1,
                backgroundColor: '#f2f2f2',
                flexDirection: 'column',
                marginRight: 5,
                borderRadius: 20,
                height: 10
              }}
            >
            </Text>



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

            {
              friendsList.length > 0 ?
                <Text>We Recommend inviting 5 - 10 friends in your list</Text>
                : <Text></Text>
            }


          </View>



          <View style={{
            ...styles.bg_color_dots, flex: 1,
            //backgroundColor: 'blue'
          }}>

            {friendsList.length > 0 ?
              <FlatList
                data={friendsList}
                horizontal={false}
                keyExtractor={item => item._id}
                numColumns={3}
                renderItem={itemData => (
                  <>

                    <CommunityFriends
                      item={itemData.item}
                      onBgSelect={onSelectBg}
                    />

                  </>
                )}
              />
              : <Text>Invite friends {friendsList.length}</Text>
            }
          </View>

          <View style={{
            ...styles.button_container,
            //backgroundColor: 'pink', 
            flex: .1
          }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {

                /*dispatch({
                  type: types.CREATE_COMMUNITY,
                  data: {
                    name: props.route.params.params.name,
                    privacy: props.route.params.params.privacy,
                    description: props.route.params.params.description,
                    category: props.route.params.params.category,
                    friends: selectedFreinds,
                    hashSelected: [],
                    hashText: ''
                  },
                  userId: _user.userDetails._id
                });
*/
               
                props.navigation.navigate('CreateCommunityHash', {
                  screen: 'CreateCommunityHash',
                  params: {
                    name: props.route.params.params.name,
                    privacy: props.route.params.params.privacy,
                    description: props.route.params.params.description,
                    category: props.route.params.params.category,
                    friends: selectedFreinds
                  }
                });
              }}>

              <Text style={styles.continue_text}>INVITE FRIENDS</Text>
            </TouchableOpacity>
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

export default CreateCommunityFriends;
