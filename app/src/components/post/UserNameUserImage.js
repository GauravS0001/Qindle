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

const UserNameUserImage = props => {
  const _user = useSelector(state => state.user); //!!state.auth.token
  const _auth = useSelector(state => state.auth); //!!state.auth.token

  const onboardingQuestionAnswerList = useSelector(
    state => state.onboarding.onboardingQuestionAnswerList,
  );

  const { friends_count, location } = props;
  let username = _user.userDetails._id
  if (onboardingQuestionAnswerList != undefined && onboardingQuestionAnswerList[1] != undefined && onboardingQuestionAnswerList[1][1] != undefined) {
    username = onboardingQuestionAnswerList[1][1].value
  }

  let icon = "";

  try {
    icon = _user.userDetails.userOnboadingData.icon;
  } catch (error) {

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
              }}></View> 
              <Image source={images.girl} style={styles.pic} />
              */}

            <Image
              source={{ uri: icon }}
              style={{ width: 46, height: 46 }}
            />
          </View>
          <View
            style={{
              marginLeft: 5,
              flex: 2,
              justifyContent: 'center',
            }}>
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
          </View>
        </View>
        <View style={{ flex: 2, justifyContent: 'flex-end' }}>
          {/*
          <Text style={{...styles.username, textAlign: 'right'}}>Anyone</Text>
          */}
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

export default UserNameUserImage;
