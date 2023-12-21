import React, { useState, useRef, useEffect, useReducer, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  FlatList,
  Image
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../../../res/colors';
import images from '../../../../res/images_url';
import TextareaWithBackground from '../../../components/post/TextareaWithBackground';
import UserNameUserImage from '../../../components/post/UserNameUserImage';
import BackgroundDots from '../../../components/UI/BackgroundDots';
import BaseSafeAreaView from '../../../components/UI/BaseSafeAreaView';
import CreatePostView from '../../../components/UI/CreatePostView';
import * as types from '../../startup/types';
import Tag_Friends from '../../../../res/images/Tag_Friends.svg';
import Tag_Communities from '../../../../res/images/Tag_Communities.svg';
import Add_Location from '../../../../res/images/Add_Location.svg';
import Next_Tag from '../../../../res/images/Next_Tag.svg';
import TagFriendsBottomSheet from '../../../components/bottomsheet/TagFriendsBottomSheet';
import TagCommunityBottomSheet from '../../../components/bottomsheet/TagCommunityBottomSheet';
import TagLocationBottomSheet from '../../../components/bottomsheet/TagLocationBottomSheet';

import Add_New from '../../../components/svg/Add_New';

const CreateTextPostScreen = props => {


  const initialState = {
    postText: '',
    selectedBackground: '',
    friends: [],
    communities: [],
    location: [],
    completed: false,
    from: 'edit',
  };

  let imagesAsset = [];
  let imagesAssetFull = []
  if (props.route.params.image.length > 0) {
    props.route.params.image.forEach((value, index) => {
      imagesAsset.push(value.node.image.uri)
      imagesAssetFull.push(value.node)
    })

  }



  const dispatch = useDispatch();
  const creatPost = useSelector(
    state => state.creatPost,
  );

  const _user = useSelector(state => state.user); //!!state.auth.token

  const _userPost = useSelector(
    state => state.userPost,
  );


  const userOnboardingFullList = useSelector(
    state => state.onboarding,
  );

  useEffect(() => {
    dispatch({
      type: types.UPDATE_POST_INITIALS,
      initialState: initialState,
    });

    dispatch({
      type: types.GET_USER_FRIENDS,
      userId: _user.userDetails._id
    })


    dispatch({
      type: types.GET_USER_CITY,
      userOnboardingFullList
    })

    dispatch({
      type: types.GET_USER_COMMUNITY,
      userId: _user.userDetails._id,
    })
  }, []);


  const getNextTag = () => {
    return <Next_Tag style={{ marginHorizontal: 10 }} />;
  };
  let share_array = [
    { icon: <Tag_Friends />, name: 'Tag Friends', next: getNextTag() },
    { icon: <Tag_Communities />, name: 'Tag Communities', next: getNextTag() },
    { icon: <Add_Location />, name: 'Add Locations', next: getNextTag() },
  ];

  let refTagFriendsBottomSheet = useRef(null);
  let refTagCommunityBottomSheet = useRef(null);
  let refTagLocationBottomSheet = useRef(null);

  const onItemPress = item => {
    switch (item.name) {
      case 'Tag Friends':
        refTagFriendsBottomSheet.current.open();
        break;
      case 'Tag Communities':
        refTagCommunityBottomSheet.current.open();
        break;
      case 'Add Locations':
        refTagLocationBottomSheet.current.open();
        break;

      default:
        break;
    }
    // open tag
  };
  const updateThought = input => {
    setThought(input);
  };

  const onFriendsSelected = useCallback(friends => {
    dispatch({
      type: types.UPDATE_TAG_FRIENDS,
      friends: friends,
    });
  });

  const onCommunitySelected = useCallback(communities => {
    dispatch({
      type: types.UPDATE_TAG_COMMUNITIES,
      communities: communities,
    });
  });

  const onLocationSelected = useCallback(location => {
    dispatch({
      type: types.UPDATE_LOCATION,
      location: location,
    });
  });


  useEffect(() => {
    if (creatPost.completed) {
      let _initialState = {
        postText: '',
        selectedBackground: '',
        friends: [],
        communities: [],
        location: [],
        completed: false,
        from: 'home',
      };
      dispatch({
        type: types.UPDATE_POST_INITIALS,
        initialState: _initialState,
      });
      setTimeout(() => {
        setPostStatus(false)

        if (_userPost.postType == 'community') {

          setTimeout(() => {
            dispatch({
              type: types.RESET_POST_TYPE
            })
          }, 1000);
          props.navigation.navigate('MyCommunityDetail', {
            screen: 'MyCommunityDetail',
            params: {
              id: _userPost.params.id,
              title: _userPost.params.title,
              icon: _userPost.params.icon
            }
          })
        } else {

          props.navigation.navigate('Home', {
            screen: 'HomeScreen',
            params: {
              // postText: postText,
              //selectedBackground: selectedBackground,
            },
          });
        }

      }, 2000)

    }
  }, [creatPost.completed]);

  const [postStatus, setPostStatus] = useState(false);
  const [thought, setThought] = useState("");

  const createPost = useCallback(ele => {
    creatPost.userId = _user.userDetails._id;
    setPostStatus(true);
    dispatch({
      type: types.CREATE_USER_POST_IMAGE,
      creatPost: creatPost,
      imagesAsset: imagesAsset,
      imagesAssetFull: imagesAssetFull,
      _id: '',
      postType: _userPost.postType,
      postId: _userPost.postId,
      postText: thought
    })
  });


  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, marginHorizontal: 15 }}>
          <UserNameUserImage
            friends_count={creatPost.friends.length}
            location={'Mumbai Maharashtra'}
          />
          <View style={styles.textareaWithBackground}>


            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // justifyContent: 'flex-start',

                left: 0,
                zIndex: 2,
                width: '100%',
                //backgroundColor: 'red',
                borderColor: '#000',
                borderWidth: 2,
                height: '80%',
                opacity: 1
              }}>

              <Image
                key="0"
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  height: '100%',
                  opacity: 1
                }}
                source={{ uri: imagesAsset[0] ? imagesAsset[0] : "" }}
              />

            </View>

            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // justifyContent: 'flex-start',
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: 2,
                width: '100%',
                backgroundColor: 'black',
                height: '20%',
                opacity: 0.3
              }}>

              <Image
                key="1"
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  height: '100%',
                  opacity: 1
                }}
                source={{ uri: imagesAsset[1] ? imagesAsset[1] : "" }}
              />
              <Image
                key="2"
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  height: '100%',
                  opacity: 1
                }}
                source={{ uri: imagesAsset[2] ? imagesAsset[2] : "" }}
              />

              <Image
                key="3"
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  height: '100%',
                  opacity: 1
                }}
                source={{ uri: imagesAsset[3] ? imagesAsset[3] : "" }}
              />


              <Image
                key="4"
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  height: '100%',
                  opacity: 1
                }}
                source={{ uri: imagesAsset[4] ? imagesAsset[4] : "" }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 20,
                  opacity: 1,
                }}
                onPress={() => {
                  props.navigation.goBack();//navigate('ImagePost', { screen: 'ImagePostScreen' });
                }}>
                <Add_New
                />
              </TouchableOpacity>



            </View>



          </View>




        








          <View style={styles.share_container}>
            <TextInput
              style={{ marginTop: 10, borderColor: '#f3f3f3', borderWidth: 2 }}
              placeholder="Type your thoughts"
              onChangeText={updateThought}
            />

            {/* <View style={styles.grey_line}></View> */}
            <CreatePostView item={share_array[0]} onItemPress={onItemPress} />
            <CreatePostView item={share_array[1]} onItemPress={onItemPress} />
            <CreatePostView item={share_array[2]} onItemPress={onItemPress} />
          </View>

          <TagFriendsBottomSheet
            rbTagFriendsSheetRef={refTagFriendsBottomSheet}
            onSelectedFriends={onFriendsSelected}
          />
          <TagCommunityBottomSheet
            rbTagFriendsSheetRef={refTagCommunityBottomSheet}
            onSelectedFriends={onCommunitySelected}
          />
          <TagLocationBottomSheet
            rbTagFriendsSheetRef={refTagLocationBottomSheet}
            onSelectedFriends={onLocationSelected}
          />

          <View style={styles.button_container}>
            {postStatus == false &&
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  createPost();
                }}>
                <Text style={styles.continue_text}>POST PHOTO</Text>
              </TouchableOpacity>
            }
            {postStatus == true &&
              <TouchableOpacity
                style={styles.button}
              >
                <Text style={styles.continue_text}>POSTING ...</Text>
              </TouchableOpacity>
            }
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
    // backgroundColor: 'pink',
  },
  share_container: {
    flex: 4,
    flexDirection: 'column',
    // backgroundColor: '#055F9B',
    // borderRadius: 8,
    // shadowColor: '#00000029',
    // elevation: 0.2,
    // alignItems: 'flex-end',
    // backgroundColor: 'grey',
  },
  button_container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  grey_line: {
    marginTop: 1,
    width: 64,
    height: 5,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    alignSelf: 'center',
  },
});

export default CreateTextPostScreen;