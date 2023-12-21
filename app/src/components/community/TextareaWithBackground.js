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

const TextareaWithBackground = props => {
  const { onInputChange, editable, lineHieght, height, text, maxLength } =
    props;
  const textChangeHandler = text => {
    setPostTextt(text);
    onInputChange(text);
  };



  const [postTextt, setPostTextt] = useState('');
  return (
    <>


      <View style={{ ...styles.image, width: '100%' }}>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
          }}
        >
          {text}
        </Text>
        <View
          style={{
            flex: 1
          }}
        >
          <Textarea
            editable={editable}
            containerStyle={{ ...styles.textareaContainer, height: height}}
            style={{
              ...styles.textarea_changed_text,
              color: colors.black,
              fontSize: 18,
              lineHeight: lineHieght
            }}
            onChangeText={editable ? textChangeHandler : null}
            defaultValue={''}
            maxLength={maxLength}
            placeholder={props.placeholder}
            placeholderTextColor={'#8C8C8C'}
            //   underlineColorAndroid={'#000000'}
            underlineColorAndroid={'transparent'}
          />
        </View>
      </View>

    </>
  );
};
const styles = StyleSheet.create({
  textareaContainer: {
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#f2f2f2'
  },
  textarea_changed_text: {
    //textAlign: 'center',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0,
    opacity: 1,
    margin: 10,
  },

});
export default TextareaWithBackground;
