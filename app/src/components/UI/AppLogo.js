import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../../res/colors';
import strings from '../../../res/strings';
import Asara_Circle from '../../../res/images/Asara_Circle.svg';

const AppLogo = props => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.circle}></View> */}
      <Asara_Circle style={{margin: 5}} />
      <Text style={styles.text}>{strings.app_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: '#000000a0',
  },
  circle: {
    width: 24,
    height: 24,
    borderColor: colors.white,
    borderRadius: 24 / 2,
    borderWidth: 5,
    margin: 5,
  },
  text: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 29,
    opacity: 1,
    letterSpacing: 0,
  },
});

export default AppLogo;
