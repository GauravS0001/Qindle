import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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

const PrivacyWithBackground = props => {
  const { onInputChange, editable, lineHieght, height, text, maxLength } =
    props;
  const textChangeHandler = text => {
    //setPostTextt(text);
    onInputChange();
  };
  const [postText, setPostText] = useState(props.placeholder);

  return (
    <>

      <View style={{  width: '100%' }}>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          {text}
        </Text>
        <View
          style={{
            flex: 1
          }}
        >
          <View
            style={{
              backgroundColor: "#f2f2f2",
              width: '100%',
              borderRadius: 10,
            }}
          >
            <TouchableOpacity
              onPress={
                () => {
                  textChangeHandler()
                }
              }>
              <Text
                style={{
                  padding: 10,
                  borderRadius: 10,
                  fontSize: 18,
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  letterSpacing: 0,
                  color: '#8C8C8C'
                }}
              >
                {postText}
              </Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>

    </>
  );
};
const styles = StyleSheet.create({
 
});
export default PrivacyWithBackground;
