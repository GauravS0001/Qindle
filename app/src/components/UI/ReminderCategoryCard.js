import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

const ReminderCategoryCard = props => {
  const { item, selectedBg, onBgSelect } = props;
  const [postText, setPostText] = useState(0);


  return (
    <>
     

      {
        props.item.name == "Medicine" ||
          props.item.name == "Birthday" ||
          props.item.name == "Health check"||
          props.item.name == "Bill payment"||
          props.item.name == "Anniversary"||
          props.item.name == "testCat"?
          <TouchableOpacity
            onPress={(ele) => {
              onBgSelect(item);
            }}
            style={{
              height: 55, 
              paddingRight: 15,
              paddingLeft: 15,
              backgroundColor: "white", 
              marginTop: 20, 
              marginLeft: 20,
              borderRadius: 10,
              elevation: 8,
              marginBottom: 5,
              width: 200
            }}
            >
              
              

                <View style={{height: 50, backgroundColor: "white", flexDirection: 'row', // Set flexDirection to 'row'
                  justifyContent: 'flex-start'}}>
                  
                  <Image
              source={
                props.item.name === "Medicine"
                  ? require('../../../res/images/Medicine.png')
                  : props.item.name === "Birthday"
                  ? require('../../../res/images/Birthday.png')
                  : props.item.name === "Health check"
                  ? require('../../../res/images/HealthCheck.png')
                  : props.item.name === "Anniversary"
                  ? require('../../../res/images/Aniversary.png')
                  : props.item.name === "Bill payment"
                  ? require('../../../res/images/Bill.png')
                  : null // Provide a default source or null if needed
              }
              style={{ width: 35, height: 35, opacity: 1, top: 10 }}
            />
                  
                  
                  <Text style={{
                    top: 18,
                    marginLeft: 13,
                    fontWeight: 'bold',
                    width: 100
                  }}>{props.item.name}</Text>
                </View>



              
              
            

          </TouchableOpacity>
          : <View></View>
      }
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
export default ReminderCategoryCard;
