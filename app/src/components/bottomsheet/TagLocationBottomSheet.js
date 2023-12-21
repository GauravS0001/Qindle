import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../../res/colors';
import strings from '../../../res/strings';
import Close_Toast_Msg from '../../../res/images/Close_Toast_Msg.svg';
import Check_Box_Empty from '../../../res/images/Check_Box_Empty.svg';
import Check_box_Filled from '../../../res/images/check_box_Filled.svg';
import Search from '../../../res/images/Search.svg';
import images from '../../../res/images_url';
import * as types from '../../screens/startup/types';

const TagLocationBottomSheet = props => {
  const { rbTagFriendsSheetRef, onSelectedFriends } = props;
  //   , friends_options, onSelectedFriends

  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const friends_array = useSelector(
    state => state.userPost.userCityHolder,
  );

  const userOnboardingFullList = useSelector(
    state => state.onboarding,
  );


  const [friends, setFriends] = useState(friends_array);
  const [selectedFriends, setSelectedFriends] = useState([]);

  const onDoneClick = () => {
    onSelectedFriends(selectedFriends);
    rbTagFriendsSheetRef.current.close();
  };
  const onFriendSelect = selected_friend => {
    let s_friend = selectedFriends.filter(f => f.key === selected_friend.key);
    if (s_friend.length == 0)
      setSelectedFriends(oldArray => [...oldArray, selected_friend]);
    else
      setSelectedFriends(
        selectedFriends.filter(item => item.key !== selected_friend.key),
      );
  };

  const updateQuery = input => {
    setFriends(friends_array.slice());
    setQuery(input);
  };

  const renderItem = ({ item, index }) => {
    // let search = query;
    let search = query.replace(/ /g, '');
    if (item.name.startsWith(search, 0)) {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.row}
          onPress={() => {
            onFriendSelect(item);
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/** <Image
              source={item.url ? { uri: item.url } : images.girl}
              style={styles.pic}
            />
             */}
            <Text
              style={{
                ...styles.select_friends_text,
                fontWeight: 'normal',
                color: colors.black,
                marginHorizontal: 15,
              }}>
              {item.name}
              {/* {filterNames(itemData.item)} */}
            </Text>
          </View>
          {/* <Check_Box_Empty /> */}
          {selectedFriends.some(h => h.key === item.key) ? (
            <Check_box_Filled
            // style={styles.arrow_validation}
            //   onPress={() => {
            //     onFriendSelect(item);
            //   }}
            />
          ) : (
            <Check_Box_Empty
            //   onPress={() => {
            //     onFriendSelect(item);
            //   }}
            //   style={styles.arrow_validation}
            />
          )}
        </TouchableOpacity>
      );
      //   return friend.name; //formatNames(friend);
    } else {
      friends.splice(friends.indexOf(item), 1);
      return null;
    }
  };

  const setData = () => {
    dispatch({
      type: types.GET_USER_CITY,
      userOnboardingFullList
    })
  }

  return (
    <>
      <RBSheet
        closeOnDragDown={false}
        ref={rbTagFriendsSheetRef}
        height={600}
        openDuration={250}
        onOpen={() => { setData() }}
        customStyles={{
          container: {
            borderRadius: 10,
          },
          wrapper: { margin: 0 },
        }}>
        <View style={styles.rbsheet}>
          <View style={styles.close_container}>
            <Text style={styles.select_friends_text}>
              {strings.select_locaion}
            </Text>
            <TouchableOpacity
              style={{
                marginHorizontal: 5,
                // backgroundColor: 'red',
                padding: 5,
              }}
              onPress={() => rbTagFriendsSheetRef.current.close()}>
              <Close_Toast_Msg />
            </TouchableOpacity>
          </View>
          <View style={styles.search_container}>
            <Search />
            <TextInput
              style={{ marginHorizontal: 10 }}
              placeholder="Search Location"
              onChangeText={updateQuery}
            />
          </View>
          <FlatList
            style={{ marginBottom: 10 }}
            data={friends}
            keyExtractor={item => item.key}
            renderItem={renderItem}
          />
          <View style={styles.button_container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onDoneClick()}>
              <Text style={styles.continue_text}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  rbsheet: {
    flexDirection: 'column',
    // backgroundColor: 'pink',
    flex: 1,
    margin: 15,
  },
  close_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingVertical: 5,
  },
  select_friends_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
    color: '#111111',
  },
  search_container: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#C4C4C4',
    // borderBottomWidth: 0.5,
    padding: 5,
    justifyContent: 'space-between',
  },
  pic: {
    borderRadius: 30,
    width: 40,
    height: 40,
    backgroundColor: '#C4C4C4',
  },
  button_container: {
    // flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  grey_line: {
    marginTop: 1,
    width: 64,
    height: 5,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    alignSelf: 'center',
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
});

export default TagLocationBottomSheet;
