import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
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

const CommentTextReply = props => {
  const onInputChange = [];//props.onInputChange
  const postText = props.postText
  const editable = props.editable
  const commentRef = [];//props.commentRef


  const textChangeHandler = text => {
    setPostTextt(text);
    onInputChange(text);
  };

  const lostFocusHandler = () => {
    //setPostTextHeight(50)
    //dispatch({ type: INPUT_BLUR });
  };

  const focusHandle = () => {
    //setPostTextHeight(200)
    //dispatch({ type: INPUT_BLUR });
  };

  //height = postTextHeight;


  const [postTextHeight, setPostTextHeight] = useState(60);
  const [postTextt, setPostTextt] = useState(props.postText);
  return (
    <>

      <Text
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 10,
          paddingRight: 10,

        }}
      >{postTextt}</Text>
      {/**
      <Textarea
        editable={editable}
        containerStyle={styles.textareaContainer}
        style={{ ...styles.textarea_changed_text_black }}
        // style={
        //   selectedBackground.first_color === firstItem.first_color
        //     ? {...styles.textarea}
        //     : {...styles.textarea_changed_text}
        // }
        onChangeText={editable ? textChangeHandler : null}
        //defaultValue={postTextt}
        placeholder={'Type your thoughts...'}
        placeholderTextColor={'#8C8C8C'}
        //   underlineColorAndroid={'#000000'}
        underlineColorAndroid={'transparent'}
        onBlur={lostFocusHandler}
        onFocus={focusHandle}
        value={postTextt}
      //ref={commentRef}
      //ref={el => (commentRef.current = el)}
      />
 */}
    </>
  );
};
const styles = StyleSheet.create({
  textareaContainer: {
    height: 70,
    padding: 5,
    borderRadius: 10,
    // backgroundColor: '#F2F2F2',
    // backgroundColor: '#C28BC2',
  },
  textarea: {
    // margin: 5,
    textAlignVertical: 'top', // hack android
    height: 70,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#8C8C8C',
    // color: '#B14BB1',
    fontSize: 15,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 14,
    textAlign: 'left',
    width: 10,
  },

  textarea_changed_text_black: {
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    opacity: 1,
    color: colors.black,
    // color: '#8C8C8C',
    margin: 5,
  },
  image: {
    flex: 1,
    // resizeMode: 'cover',
    // padding: 20,
    flexDirection: 'column',
    height: 200,
    // borderRadius: 10,
    justifyContent: 'center',
  },
});
export default CommentTextReply;
