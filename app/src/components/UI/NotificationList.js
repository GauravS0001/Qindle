import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../../res/colors';
import Next_Arrow from '../../../res/images/Next_Arrow.svg';

const NotificationList = props => {
  const {item, onItemPress} = props;
  return (
    <>
      <View
        style={{ padding: 10 }}
      >
        <Text
        >
          {props.item.item.remoteMessage.notification.title}
        </Text>

        <Text>{props.item.item.remoteMessage.notification.body}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 15,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  image_text_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 54,
    color: colors.black,
    textAlign: 'left',
    marginHorizontal: 15,
  },
});
export default NotificationList;
