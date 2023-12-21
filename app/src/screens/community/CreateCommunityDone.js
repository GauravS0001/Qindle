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
import CommunityHash from '../../components/UI/CommunityHash';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';


import Close from '../../../res/images/Close.svg';
const CreateCommunityDone = props => {
  const dispatch = useDispatch();


  const communityHash = useSelector(
    state => state.community.communityHash,
  );
  const _user = useSelector(state => state.user); //!!state.auth.token

  useEffect(() => {
    //createCommunity(); // temporary removing hash page
    dispatch({
      type: types.COMMUNITY_TAGS,
      userId: ''
    });
  }, []);

  const textChangeHandler = text => {
    setPostText(text);
  };
  const [postText, setPostText] = useState('');



  const createCommunity = () => {
    dispatch({
      type: types.CREATE_COMMUNITY,
      data: {
        name: props.route.params.params.name,
        privacy: props.route.params.params.privacy,
        description: props.route.params.params.description,
        category: props.route.params.params.category,
        friends: props.route.params.params.friends,
        hashSelected: selectedHash,
        hashText: postText
      },
      userId: _user.userDetails._id
    });

    /*
    props.navigation.navigate('MyCommunity', {
      screen: 'MyCommunity',
      params: {
      }
    });
*/

    return;
  };

  const [selectedHash, setSelectedHash] = useState([]);
  const onSelectBg = item => {
    let data = selectedHash;
    data.push(item)
    setSelectedHash(data)
  };
  
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, margin: 15, }}>

          <View style={{
            flex: .0,
            marginTop: 5,
            flexDirection: 'row',
            
          }}>
            <Text
              style={{
                flex: 1,
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                fontSize: 18,
                fontWeight: 'bold',

              }}
            >
              Community Created
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
                  props.navigation.navigate('MyCommunity', {
                    screen: 'MyCommunity',
                    params: {
                    }
                  })
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
            ...styles.textareaWithBackground, marginTop: 10, flex: .1,
            //backgroundColor: 'pink'
          }}>
            <Text>Your community {props.route.params.params.name} is now created.</Text>
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
    flex: 4,
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

export default CreateCommunityDone;
