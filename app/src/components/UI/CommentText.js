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
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../screens/startup/types'

const TextareaWithBackground = props => {
  const editable = true
  const item = props.item
  const setRef = props.setRef

  const dispatch = useDispatch();
  const lastData = useSelector(
    state => state.commentPost.lastData,
  );
  const _user = useSelector(state => state.user); //!!state.auth.token
  //const ref_input = useRef();

  let icon = "";
  try {
    icon = _user.userDetails.userOnboadingData.icon;
  } catch (error) {

  }

  if (_user.userDetails._id != props.item.userId) {
    icon = props.item.icon;
  }


  const commentSave = () => {
    let comment = {
      commentId: "", // != "" for parent
      comment: postTextt,
      commentedBy: _user.userDetails._id,
      postId: item._id
    }
    dispatch({
      type: types.SAVE_POST_COMMENT,
      comment
    })
    setRef(lastData)
    setPostTextt('')
  };

  const textChangeHandler = text => {
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


          <View style={{ ...styles.fulltext }}>


            <Textarea
              editable={editable}
              containerStyle={styles.textareaContainer}
              style={{ ...styles.textarea_changed_text_black }}
              onChangeText={editable ? textChangeHandler : null}
              //maxLength={100}
              defaultValue={postTextt}
              placeholder={'Type your thoughts...'}
              placeholderTextColor={'#8C8C8C'}
              underlineColorAndroid={'transparent'}
              //onBlur={lostFocusHandler}
              //onFocus={focusHandle}
              value={postTextt}
            //onSubmitEditing={() => { ref_input.focus(); }}
            //ref={(input) => { ref_input.current = input; }}
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
          <Done
            style={styles.arrow_validation}

          />
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
  pic: {
    borderRadius: 30,
    width: 30,
    height: 30,
    backgroundColor: '#C4C4C4',
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
  textareaWithBackground: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bg_color_dots: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  button_container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 26,
    marginHorizontal: 10,
  },
  pic: {
    borderRadius: 30,
    width: 30,
    height: 30,
    backgroundColor: '#C4C4C4',
  },
  asara_skip_container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  asara_speaker_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  skip_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
  },
  online_icon: {
    width: 10,
    height: 10,
    backgroundColor: '#0EC92D',
    borderColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    margin: 2,
  },
  list_container: {
    marginTop: 10,
    flex: 3,
    // backgroundColor: 'pink',
  },
  system_card: {
    backgroundColor: '#03203A',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
  },
  chat_left_text: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 24,
    margin: 10,
  },
  hobbies_card: {
    backgroundColor: '#055F9B',
    borderColor: colors.white,
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  system_card_left: {
    backgroundColor: '#03203A',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  system_card_right: {
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
    maxWidth: '80%',
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
  },
  question_container: {
    marginHorizontal: 20,
    flex: 5,
  },
  fulltext: {
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  arrow_validation: { flex: 2, marginHorizontal: 0 },
  textinput_container: { marginLeft: 0, flex: 8 },
  tap_here_container: {
    marginLeft: 0,
    flex: 8,
    color: colors.white,
  },



});
export default TextareaWithBackground;
