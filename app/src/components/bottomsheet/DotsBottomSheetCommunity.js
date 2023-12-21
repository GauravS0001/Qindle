import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import DotPostView from '../UI/DotPostView';

// import colors from '../../../res/colors';
// import strings from '../../res/strings';
import Report from '../../../res/images/Report.svg';
import Send_Postcard from '../../../res/images/Send_Postcard.svg';
import Unfollow from '../../../res/images/Unfollow.svg';
import Delete from '../../../res/images/Delete.svg';
import Ask_Que from '../../../res/images/Ask_Que.svg';
import { useDispatch, useSelector } from 'react-redux';

import * as types from '../../screens/startup/types';

const DotsBottomSheetCommunity = props => {
  const { refDotPostBottomSheet, navigation } = props;
  const _user = useSelector(state => state.user); //!!state.auth.token
  const [postText, setPostText] = useState([]);
  const dispatch = useDispatch();


  const onItemPress = item => {
    if (item.name == "Approve Users") {
      props.navigation.navigate('CommunityAdmin', {
        screen: 'CommunityAdmin',
        params: {
          item: refDotPostBottomSheet.current.item,
        }
      })
    }
    


    if (item.name == "Change Photo") {
      props.navigation.navigate('CommunityChangePhoto', {
        screen: 'CommunityChangePhoto',
        params: {
          item: refDotPostBottomSheet.current.item,
        }
      })
    } 
    if (item.name == "Change Name") {
      props.navigation.navigate('CommunityChangeName', {
        screen: 'CommunityChangeName',
        params: {
          item: refDotPostBottomSheet.current.item,
        }
      })
    } 
     else {

      dispatch({
        type: types.DOT_POST_ACTIONS_COMMUNITY,
        id: refDotPostBottomSheet.current.item._id,
        action: item.name,
        userId: _user.userDetails._id,
        postBy: refDotPostBottomSheet.current.item.userId
      })
    }
    refDotPostBottomSheet.current.close();


  };

  const onItemPress2 = item => {
    let post_array = [];
    post_array.push(
      {
        icon: <Report />,
        name: 'Report'
      }
    )
    post_array.push(
      {
        icon: <Unfollow />,
        name: 'Unfollow',

      }
    )
    //if (refDotPostBottomSheet.current.item._id != "613a469e1d229269702e81b4") { // check with user id 
    let allowedDelete = true
    if (_user.userDetails._id == refDotPostBottomSheet.current.item.userId || allowedDelete) {
      post_array = [];
      post_array.push(
        {
          icon: <Delete />,
          name: 'Delete',
        }
      )
      post_array.push(
        {
          icon: <Delete />,
          name: 'Change Photo',
        }
      )

      post_array.push(
        {
          icon: <Delete />,
          name: 'Change Name',
        }
      )

    }

    if (_user.userDetails._id == refDotPostBottomSheet.current.item.userId) {
      post_array.push(
        {
          icon: <Delete />,
          name: 'Approve Users',
        }
      )
    }
    setPostText(post_array);
  };

  return (
    <>
      <RBSheet
        closeOnDragDown={true}
        ref={refDotPostBottomSheet}
        height={320}
        openDuration={250}
        onOpen={() => { onItemPress2() }}
        customStyles={{
          container: {
            borderRadius: 10,
          },
          wrapper: { margin: 0 },
        }}>
        <FlatList
          data={postText}
          keyExtractor={item => item.name}
          renderItem={itemData => (
            <DotPostView
              item={itemData.item}
              onItemPress={onItemPress}
            // navigation={navigation}
            />
          )}
        />
      </RBSheet>
    </>
  );
};
const styles = StyleSheet.create({});
export default DotsBottomSheetCommunity;
