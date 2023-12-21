import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

const CommunityFriends = props => {
  const { item, selectedBg, onBgSelect } = props;
  const [postText, setPostText] = useState(0);

  return (
    <>
      {/* <View> */}
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
            borderWidth: postText
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Image
              source={{ uri: props.item.icon }}
              style={{ width: 46, height: 46 }}
            />
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
                  alignContent: 'center'
                }
              }>{props.item.name}</Text>
          </View>
        </View>


      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  colorDotsBox: {
    margin: 12,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
    // backgroundColor: '#F3801C',
    borderRadius: 10,
    // borderColor: 'red',
    // borderWidth: 1,
  }
});
export default CommunityFriends;
