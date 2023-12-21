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

const CreatePostView = props => {
  const { item, onItemPress } = props;
  return (
    <>
      <TouchableOpacity
        // style={styles.container}
        style={
          item.next != undefined
            ? {
              ...styles.container,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#f2f2f2",
              marginHorizontal: 0,
            }
            : { ...styles.container }
        }
        onPress={
          () =>
            //navigation.navigate(item.navigate),
            onItemPress(item)
          // navigation.navigate(item.root, {screen: item.navigate})
        }>
        <View
          style={styles.image_text_container}
          style={
            item.next != undefined
              ? {
                ...styles.image_text_container,
                marginHorizontal: 10,
              }
              : { ...styles.image_text_container }
          }>
          {/* {props.children} */}
          {item.icon}
          <Text style={styles.text}>{item.name}</Text>
        </View>
        {item.next != undefined ? item.next : <Next_Arrow />}
        {/* <Next_Arrow /> */}
      </TouchableOpacity>
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
export default CreatePostView;
