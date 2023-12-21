import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const BackgroundDots = props => {
  const {item, selectedBg, onBgSelect} = props;
  return (
    <> 
      {/* <View> */}
      <TouchableOpacity
        onPress={() => {
          onBgSelect(item);
        }}>
        <View
          style={
            item.first_color === selectedBg.first_color
              ? {
                  ...styles.colorDotsBox,
                  borderWidth: 1,
                  borderColor: '#055F9B',
                  backgroundColor: item.first_color,
                }
              : {...styles.colorDotsBox, backgroundColor: item.first_color}
          }
          // style={{...styles.colorDotsBox, backgroundColor: item.first_color}}
          //   style={{...styles.colorDotsBox, ...props.style}}
        >
          <View
            style={{
              ...styles.colorDots,
              backgroundColor: item.second_color,
              // ...props.dotstyle,
              margin: 10,
            }}></View>
        </View>
      </TouchableOpacity>
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  colorDotsBox: {
    margin: 12,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
    // backgroundColor: '#F3801C',
    borderRadius: 30,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  colorDots: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'grey',
    // backgroundColor: '#FFBE8D',
    // marginLeft: 10,
  },
});
export default BackgroundDots;
