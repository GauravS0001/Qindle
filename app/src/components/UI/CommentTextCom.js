import React, { useState, useRef, useEffect } from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList
} from 'react-native';
import colors from '../../../res/colors';
import Textarea from '../UI/Textarea';
import Oragne_Box from '../../../res/images/Oragne_Box.svg';
import { color } from 'react-native-reanimated';

import Svg, { Circle, Rect, G, Line, Path } from 'react-native-svg';
import Done from '../svg/Done'
import Grey from '../../components/svg/Grey';
import Orange from '../../components/svg/Orange';
import Green from '../../components/svg/Green';
import Purple from '../../components/svg/Purple';
import Black from '../../components/svg/Black';
import images from '../../../res/images_url';

const TextareaWithBackground = props => {
  //const onInputChange = props.onInputChange
  const postText = props.postText
  const editable = props.editable
  //const commentRef = props.commentRef
  const complete = props.complete


  const textChangeHandler = text => {
    let s = [];
    s[0] = text;
    setPostTextt(text);
    // onInputChange(s[0], boxValueRef);

  };

  const lostFocusHandler = () => {
  };

  const focusHandle = () => {
  };
  const [postTextt, setPostTextt] = useState(props.postText);
  return (
    <>



      <View
        style={{
          flexDirection: 'row',
          // alignItems: 'center',
          //backgroundColor: '#f2f2f2',
          flex: 18,
          paddingRight: 10
        }}>

        <View
          style={{
            width: 36,
            height: 36,
            marginTop: 10,
            // backgroundColor: '#FFFFFF',
            borderRadius: 30,
            borderColor: '#00000029',
            borderWidth: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={images.girl} style={styles.pic} />
        </View>


        <View
          style={{
            marginLeft: 5,
            flex: 2,
            justifyContent: 'center',
          }}>


          <View style={{ ...styles.fulltext }}>


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
              maxLength={100}
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

          </View>


        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end', paddingRight: 10 }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.row}
          onPress={() => {
            commentSave();
          }}>
          
        </TouchableOpacity>
      </View>





    </>
  );
};
const styles = StyleSheet.create({
  textareaContainer: {
    height: 70,
    padding: 5,
    borderRadius: 10,
    marginRight: 20

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
  },

  textarea_changed_text_black: {
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'bold',
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
export default TextareaWithBackground;
