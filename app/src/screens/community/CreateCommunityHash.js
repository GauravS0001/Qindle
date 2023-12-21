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
  ToastAndroid
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

const CreateCommunityHash = props => {
  
  const dispatch = useDispatch();


  const communityHash = useSelector(
    state => state.community.communityHash,
  );
  const _user = useSelector(state => state.user); //!!state.auth.token

  useEffect(() => {
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
    ToastAndroid.show(props.route.params.params.name + " Community Created ", ToastAndroid.LONG);

    props.navigation.navigate('MyCommunity', {
      screen: 'MyCommunity',
      params: {
        fromcreate: true
      }
    });
    /* props.navigation.navigate('MyCommunity', {
       screen: 'MyCommunity',
       params: {
         fromcreate: true
       }
     });
     */

    /*
    props.navigation.navigate('CreateCommunityDone', {
      screen: 'CreateCommunityDone',
      params: {
        name: props.route.params.params.name,
        privacy: props.route.params.params.privacy,
        description: props.route.params.params.description,
        category: props.route.params.params.category,
        friends: props.route.params.params.friends,
        hashSelected: selectedHash,
        hashText: postText
      }
    });
    //return;
    */
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
              Add Hashtag
            </Text>
            {/*<Text
              style={{
                flex: .1,
                flexDirection: 'row',
                padding: 10,
                fontSize: 12,
                fontWeight: 'bold',
                borderRadius: 10,
                borderColor: '#000',
                borderWidth: 1,
                alignContent: 'center',
                alignItems: 'center',

              }}
            >Skip</Text>
            */}
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
                backgroundColor: '#055F9B',
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
            //backgroundColor: 'pink'
          }}>

            <Text>You can add as many tags to descibe your community like location, interest, medical conditions etc.</Text>

          </View>

          <View style={{
            ...styles.textareaWithBackground, flex: .4,
            //backgroundColor: 'pink'
          }}>


            <TextareaWithBackground
              onInputChange={textChangeHandler}
              editable={true}
              lineHieght={30}
              height={90}
              text={''}
              maxLength={200}
              placeholder={'Add hashtag and tap space to add new one...'}
            />

          </View>



          <View style={{
            ...styles.textareaWithBackground, marginTop: 1, flex: .1,
            //backgroundColor: 'pink'
          }}>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16
              }}
            >Suggestions for you</Text>

          </View>

          <View style={{
            ...styles.bg_color_dots, flex: 1,
            //backgroundColor: 'blue'
          }}>



            <FlatList
              data={communityHash}
              horizontal={false}
              keyExtractor={item => item._id}
              numColumns={3}
              renderItem={itemData => (
                <>

                  <CommunityHash
                    item={itemData.item}
                    //selectedBg={selectedBackground}
                    onBgSelect={onSelectBg}
                  />

                </>
              )}
            />
          </View>

          <View style={{
            ...styles.button_container,
            //backgroundColor: 'pink', 
            flex: .1
          }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                createCommunity();
              }}>
              <Text style={styles.continue_text}>UPDATE DETAILS</Text>
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

export default CreateCommunityHash;
