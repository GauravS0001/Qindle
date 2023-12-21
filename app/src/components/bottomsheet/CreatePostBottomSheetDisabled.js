import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import CreatePostView from '../UI/CreatePostView';

// import colors from '../../../res/colors';
// import strings from '../../res/strings';
import Text_Post from '../../../res/images/Text_Post.svg';
import Send_Postcard from '../../../res/images/Send_Postcard.svg';
import Photo_Memory from '../../../res/images/Photo_Memory.svg';
import Video_Story from '../../../res/images/Video_Story.svg';
import Ask_Que from '../../../res/images/Ask_Que.svg';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../../src/screens/startup/types';

const CreatePostBottomSheetDisabled = props => {
  const { rbCreatePostSheetRef, navigation, postType, postTypeId } = props;

  const dispatch = useDispatch();
  let post_array = [
    {
      icon: <Ask_Que />,
      name: 'Add Community',
      root: 'CreateCommunity',
      navigate: 'CreateCommunity',
    },
    //{
    //  icon: <Ask_Que />,
    //  name: 'Ask Question (poll)'
    //}
  ];

  const onItemPress = item => {
    dispatch({
      type: types.UPDATE_POST_TYPE,
      postType: postType,
      typeId: postTypeId
    });


    navigation.navigate(item.root, {
      screen: item.navigate,
      params: {
        type: postType,
        typeId: postTypeId
      }
    });
    rbCreatePostSheetRef.current.close();
  };
  return (
    <>
      <RBSheet
        closeOnDragDown={true}
        ref={rbCreatePostSheetRef}
        height={320}
        openDuration={250}
        customStyles={{
          container: {
            borderRadius: 10,
          },
          wrapper: { margin: 0 },
        }}>
        <FlatList
          data={post_array}
          keyExtractor={item => item.name}
          renderItem={itemData => (
            <CreatePostView
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
export default CreatePostBottomSheetDisabled;
