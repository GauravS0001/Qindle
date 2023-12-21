import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import { useDispatch, useSelector } from 'react-redux';
import TimeAgo from "react-native-timeago";

const UserNameUserImagePost = props => {
  let friends_count = 0
  try {
    friends_count = JSON.parse(props.friends_count).length
  } catch (error) {

  }


  const _user = useSelector(state => state.user); //!!state.auth.token


  const onboardingQuestionAnswerList = useSelector(
    state => state.onboarding.onboardingQuestionAnswerList,
  );

  let username = _user.userDetails._id
  let icon = "";
  try {
    icon = _user.userDetails.userOnboadingData.icon;
  } catch (error) {

  }
  if (onboardingQuestionAnswerList != undefined && onboardingQuestionAnswerList[1] != undefined && onboardingQuestionAnswerList[1][1] != undefined) {
    username = onboardingQuestionAnswerList[1][1].value
  }

  if (_user.userDetails._id != props.item.userId) {
    username = props.item.userName
    icon = props.item.icon;
  }


  return (
    <>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // justifyContent: 'flex-start',
          // backgroundColor: 'yellow',
        }}>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            // backgroundColor: 'pink',
            flex: 5,
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              // backgroundColor: '#FFFFFF',
              borderRadius: 30,
              borderColor: '#00000029',
              borderWidth: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'red',
                borderRadius: 25,
                //   borderColor: '#00000029',
                borderWidth: 1,
              }}></View> */}
            <Image
              source={{ uri: icon }}
              style={styles.pic}
            />

          </View>
          <View
            style={{
              marginLeft: 5,
              flex: 2,
              justifyContent: 'center',
            }}>

            {props.item.communitiesInfo != undefined && props.item.communitiesInfo[0] != undefined && (
              <Text
                style={styles.username}>{props.item.communitiesInfo[0].community_name}
              </Text>
            )}

            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={styles.username}>
              {username}
              {friends_count > 0 && (
                <Text style={{ fontWeight: 'normal' }}> is with</Text>
              )}
              {friends_count > 0 && <Text> {friends_count} others</Text>}
              {/* <Text style={{fontWeight: 'normal'}}> at </Text>
              <Text> Mumbai Maharashtra</Text> */}
            </Text>
            <TimeAgo style={{ ...styles.time, marginLeft: 10 }} time={props.item.created} />

          </View>
        </View>
        <View style={{ flex: 2, justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => {
              props.dotPosts.current.item = props.item
              props.dotPosts.current.open()
            }}
          >
            <Text style={{ ...styles.username, textAlign: 'right' }}> ...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  username: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#111111',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
    marginHorizontal: 10,
  },
  pic: {
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor: '#C4C4C4',
  },
});

export default UserNameUserImagePost;
