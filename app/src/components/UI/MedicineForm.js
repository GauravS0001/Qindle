import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

const MedicineForm = props => {
  const { item, selectedBg, onBgSelect } = props;
  const [postText, setPostText] = useState(0);

  return (
    
      <TouchableOpacity
        onPress={(ele) => {
          let border = postText == 1 ? 0 : 1
          setPostText(border)
          onBgSelect(item);
        }}
        style={{height: 60, width: "100%", backgroundColor: "white", borderBottomColor: "#f0efef", borderBottomWidth: 1.5}}
        >

       <Text style={{left: 20, top: 18, fontSize: 17}}>{props.item.name}</Text>
       <Text style={{color: "rgb(40, 98, 206)", fontWeight: 'bold', left: "80%", top: -4}}>Select</Text>


      </TouchableOpacity>
    
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
