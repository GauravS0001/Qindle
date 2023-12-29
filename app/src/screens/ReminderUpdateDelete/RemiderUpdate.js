import React from "react";
import { View ,TouchableOpacity, Text, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';

function ReminderUpdate (props){

    const {category, reminderId, dte} = useSelector(state => state.RemUpdtReducer);

    const [Day, setDay] = useState(new Date());
    const [showDate, setShowDate] = useState(false);

    const textChangeHandler2 = text => {
        setShowDate(true);
      };
    const onChangeDate = (event, selectedDate) => {
   
        if (selectedDate != undefined) {
          setDay(selectedDate);
        }
        setShowDate(false);
    };
    

    if(category === 'Birthday'||category === 'Anniversary'||category === 'Bill payment'){

        return(
            <View>
                 <View style={{height: 55, width: "100%", backgroundColor: "white", elevation: 5}}>
                 <TouchableOpacity style={{height: 45, width: "45%", backgroundColor: "transparent", top: 5}}
                 onPress={() => props.navigation.goBack()}>
                 <Image source={require('../../../res/images/Back.png')} style={{height: 25,width: 25, top: 12, left: 7}}/>
                 <Text style={{color: "black", position: 'absolute', fontSize: 18, fontWeight: 'bold',
                 top: 11, left: 45, width: 500}}>Update {category} Reminder</Text>
                 </TouchableOpacity>
            </View>
           
            <View style={{height: "60%", width: "100%", backgroundColor: "red"}}></View>

            {showDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={Day}
            mode='date'
            is24Hour={false}
            display="default"
            onChange={onChangeDate}
          />
        )}
                
            </View>
        )
    }else{

        return(
            <View>
                 <View style={{height: 55, width: "100%", backgroundColor: "#055F9B"}}>
      <TouchableOpacity style={{height: 45, width: "45%", backgroundColor: "transparent", top: 5}}
      onPress={() => props.navigation.goBack()}>
       <Image source={require('../../../res/images/Back2.png')} style={{height: 35,width: 35, top: 8, left: 7}}/>
        <Text style={{color: "white", position: 'absolute', fontSize: 17.5, fontWeight: 'bold',
         top: 13, left: 50}}>Update Reminder</Text>
      </TouchableOpacity>
       </View>

                <Text>Page needs to be designed for this category</Text>
            </View>
        )
    }
    
}

export default ReminderUpdate