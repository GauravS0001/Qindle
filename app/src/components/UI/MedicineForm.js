import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

const MedicineForm = props => {
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
            //...styles.colorDotsBox,
            //borderColor: '#055F9B',
            borderWidth: postText,
            //backgroundColor:'grey'
            borderBottomColor: 'grey',
            borderWidth: 1,
            borderLeftColor: '#fff',
            borderRightColor: '#fff',
            borderTopColor: '#fff',
            borderStyle: 'dashed',
            borderRadius: 1
          }}
        >

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}
          >
            <Text
              style=
              {{
                flex: 7,
                padding: 10,
                alignContent: 'center'
              }}>{props.item.name}</Text>

            <Text
              style=
              {{
                flex: 1,
                padding: 10,
                alignContent: 'center',
                color:'#055F9B'
              }}>Select</Text>

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
export default MedicineForm;
