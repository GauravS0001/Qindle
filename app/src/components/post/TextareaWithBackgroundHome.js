import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, TouchableWithoutFeedback, Text, ScrollView } from 'react-native';
import colors from '../../../res/colors';
import Textarea from '../UI/Textarea';
import Oragne_Box from '../../../res/images/Oragne_Box.svg';
import { color } from 'react-native-reanimated';

import Svg, { Circle, Rect, G, Line, Path } from 'react-native-svg';

import Grey from '../../components/svg/Grey';
import Orange from '../../components/svg/Orange';
import Green from '../../components/svg/Green';
import Purple from '../../components/svg/Purple';
import Black from '../../components/svg/Black';

const TextareaWithBackgroundHome = props => {
  const { firstItem, selectedBackground, onInputChange, postText, editable } =
    props;
  const textChangeHandler = text => {
    setPostTextt(text);
    onInputChange(text);
  };

  const [postTextt, setPostTextt] = useState(postText);
  return (
    <>
      <View style={styles.image}>
        <View
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          {selectedBackground.type == 'grey' &&
            <Grey />
          }
          {selectedBackground.type == 'orange' &&
            <Orange />
          }
          {selectedBackground.type == 'green' &&
            <Green />
          }
          {selectedBackground.type == 'purple' &&
            <Purple />
          }
          {selectedBackground.type == 'black' &&
            <Black />
          }
        </View>
        {/* <Textarea
          editable={editable}
          containerStyle={styles.textareaContainer}
          style={
            editable
              ? selectedBackground.first_color === firstItem.first_color
                ? { ...styles.textarea_changed_text_black }
                : { ...styles.textarea_changed_text }
              : {
                ...styles.textarea_changed_text,
                color: colors.white,
                fontSize: 18,
              }
          }
          // style={
          //   selectedBackground.first_color === firstItem.first_color
          //     ? {...styles.textarea}
          //     : {...styles.textarea_changed_text}
          // }
          onChangeText={editable ? textChangeHandler : null}
          defaultValue={postTextt}
          //maxLength={200}
          placeholder={'Type your thoughts...'}
          placeholderTextColor={'#8C8C8C'}
          //   underlineColorAndroid={'#000000'}
          underlineColorAndroid={'transparent'}
        /> */}

        <View style={styles.image}>

          <ScrollView nestedScrollEnabled={true} horizontal={false}>
            <Text
              style={
                1 == 1
                  ? selectedBackground.first_color === firstItem.first_color
                    ? { ...styles.textarea_changed_text_black, ...styles.textareaContainer }
                    : { ...styles.textarea_changed_text, ...styles.textareaContainer }
                  : {
                    ...styles.textarea_changed_text,
                    color: colors.white,
                    fontSize: 17,
                    ...styles.textareaContainer
                  }

              }
            >{postTextt} </Text>
          </ScrollView>

        </View>

      </View>
      {/* <ImageBackground
        //   source={null}
        source={selectedBackground.image}
        style={styles.image}
        imageStyle={{
          borderRadius: 10,
          backgroundColor: selectedBackground.first_color,
        }}>
        <Textarea
          editable={editable}
          containerStyle={styles.textareaContainer}
          style={
            editable
              ? selectedBackground.first_color === firstItem.first_color
                ? {...styles.textarea}
                : {...styles.textarea_changed_text}
              : {...styles.textarea_changed_text}
          }
          // style={
          //   selectedBackground.first_color === firstItem.first_color
          //     ? {...styles.textarea}
          //     : {...styles.textarea_changed_text}
          // }
          onChangeText={editable ? textChangeHandler : null}
          defaultValue={postTextt}
          maxLength={200}
          placeholder={'Type your thoughts...'}
          placeholderTextColor={'#8C8C8C'}
          //   underlineColorAndroid={'#000000'}
          underlineColorAndroid={'transparent'}
        />
      </ImageBackground> */}
    </>
  );
};
const styles = StyleSheet.create({
  textareaContainer: {
    minHeight: 200,
    padding: 5,
    borderRadius: 10,
    // backgroundColor: '#F2F2F2',
    // backgroundColor: '#C28BC2',
  },
  textarea: {
    // margin: 5,
    textAlignVertical: 'top', // hack android
    minHeight: 200,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#8C8C8C',
    // color: '#B14BB1',
    fontSize: 17,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 14,
    textAlign: 'left',
  },
  textarea_changed_text: {
    textAlign: 'center',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 30,
    letterSpacing: 0,
    opacity: 1,
    color: colors.white,
    // color: '#8C8C8C',
    margin: 10,
  },
  textarea_changed_text_black: {
    textAlign: 'center',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 30,
    letterSpacing: 0,
    opacity: 1,
    color: colors.black,
    // color: '#8C8C8C',
    margin: 10,
  },
  image: {
    flex: 1,
    // resizeMode: 'cover',
    // padding: 20,
    flexDirection: 'column',
    minHeight: 200,
    // borderRadius: 10,
    justifyContent: 'center',
  },
});
export default TextareaWithBackgroundHome;
