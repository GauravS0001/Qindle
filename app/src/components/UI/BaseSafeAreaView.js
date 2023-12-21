import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View
} from 'react-native';

const BaseSafeAreaView = props => {
  return (
    <>
      <View
        style={{ ...styles.container, ...props.style }}
        behavior="height"
      // keyboardVerticalOffset={5}
      >
        <StatusBar hidden={false} />
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        {props.children}
        {/* </TouchableWithoutFeedback> */}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default BaseSafeAreaView;
