import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import colors from '../../../res/colors';
import Textarea from '../UI/Textarea';
import Oragne_Box from '../../../res/images/Oragne_Box.svg';
import { color } from 'react-native-reanimated';

import TextareaWithBackground from '../../components/post/TextareaWithBackground';
import Search from '../../components/svg/Search';

const SearchBackground = props => {
  const { firstItem, selectedBackground, onInputChange, postText, editable } =
    props;
  const textChangeHandler = text => {
  };

  const [postTextt, setPostTextt] = useState('');
  return (
    <>
      <View style={styles.textareaContainer_block}>

        <Textarea
          editable={true}
          style={{
            ...styles.textarea_changed_text_black
          }

          }
          // style={
          //   selectedBackground.first_color === firstItem.first_color
          //     ? {...styles.textarea}
          //     : {...styles.textarea_changed_text}
          // }
          onChangeText={editable ? textChangeHandler : null}
          placeholder={'Search your interest'}
          placeholderTextColor={'#f2f2f2'}
          //   underlineColorAndroid={'#000000'}
          underlineColorAndroid={'transparent'}
        />


      </View>

    </>
  );
};
const styles = StyleSheet.create({
  textareaContainer_block: {
    flex: 1,
    flexDirection: 'column',
    height: 200,
    width: '100%',
    // justifyContent: 'center',
    //backgroundColor: 'red'
  },
  textarea_changed_text_black: {
    textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    opacity: 1,
    color: colors.black,
    // color: '#8C8C8C',
    borderColor:'white',
    backgroundColor:'white',
    borderRadius:10,
    width: '100%',
    marginTop: 25
  },
  image: {
    flex: 1,
    // resizeMode: 'cover',
    // padding: 20,
    flexDirection: 'column',
    height: 200,
    // borderRadius: 10,
    justifyContent: 'center',
  }
});
export default SearchBackground;
