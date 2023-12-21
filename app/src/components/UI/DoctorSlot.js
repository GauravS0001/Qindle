import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

const DoctorSlot = props => {
  const { item, selectedBg, onBgSelect } = props;
  const [postText, setPostText] = useState(0);

  return (
    <>

      <TouchableOpacity
        onPress={(ele) => {
          let border = postText == 1 ? 0 : 1
          setPostText(border)
          onBgSelect(item);
        }}>

        <View
          style={{
            ...styles.colorDotsBox,
            borderColor: '#055F9B',
            borderWidth: 1
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
              paddingRight: 5,
            }}
          >
            <SvgUri
              style={{ width: 64, height: 64, opacity: 1 }}
              uri={props.item.icon}
            />
            {/** <Image
                  source={{ uri: props.item.icon }}
                  style={{ width: 46, height: 46, opacity: 1 }}
                /> */}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}
          >
            <Text
              style=
              {
                {
                  padding: 10,
                  alignContent: 'center',
                  color: '#055F9B'
                }
              }>{props.item}</Text>
          </View>
        </View>


      </TouchableOpacity>

    </>
  );
};

const styles = StyleSheet.create({
  colorDotsBox: {
    margin: 12,
    borderColor: 'white',
    backgroundColor: 'white',
    // backgroundColor: '#F3801C',
    borderRadius: 10,
    // borderColor: 'red',
    borderWidth: 1,
  }
});
export default DoctorSlot;
