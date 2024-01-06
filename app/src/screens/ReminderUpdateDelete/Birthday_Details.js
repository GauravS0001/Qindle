import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import * as types from '../startup/types';

const Birthday_Details = props =>{

  const _user = useSelector(state => state.user); 
  const category = useSelector(state => state.RemUpdtReducer.category)
  const id = useSelector(state => state.RemUpdtReducer.reminderId)
  
  const dispatch = useDispatch();

  const ReminderDetails = useSelector(
    state => state.reminder.singleReminderDetails,
  )

  useEffect(() => {
    dispatch({
      type: types.GET_SINGLE_REMINDER_DETAILS_FUNCTION,
      payload: id,
    });
  }, []);

  

    return(
        <View>
          <View style={{ height: 55, width: "100%", backgroundColor: "white", elevation: 10 }}>
          <TouchableOpacity style={{ height: 45, width: "45%", backgroundColor: "transparent", top: 5 }}
            onPress={() => props.navigation.goBack()}>
            <Image source={require('../../../res/images/Back.png')} style={{ height: 25, width: 25, top: 12, left: 7 }} />
            <Text style={{
              color: "black", position: 'absolute', fontSize: 18, fontWeight: 'bold',
              top: 11, left: 45, width: 500
            }}>Single Reminder Test Screen</Text>
          </TouchableOpacity>
        </View>


        <View style={{ height: "75%", width: "100%", backgroundColor: "white" }}>
         
        <Text style={{
            position: 'absolute',
            top: 31,
            left: 22,
            fontSize: 18
          }}>Name*</Text>

          <Text style={{fontSize: 20, fontWeight: "bold", position: "absolute", left: 22, top: 58}}>{ReminderDetails && ReminderDetails[0] ? ReminderDetails[0].name : 'string' }</Text>

          <View style={{height: 2.5, width: "91.5%", left: 15, backgroundColor: "rgb(241, 241, 241)", position: "absolute", top: 93}}></View>

          <Text style={{
            position: 'absolute',
            top: 105,
            left: 22,
            fontSize: 18
          }}>Birthday Date*</Text>

           <Text style={{fontSize: 20, fontWeight: "bold", position: "absolute", left: 22, top: 130}}>{ReminderDetails && ReminderDetails[0] ? ReminderDetails[0].date.slice(0,10) : 'string' }</Text>
           
         
        </View>
          <Text>{JSON.stringify(ReminderDetails)}</Text>
            
        </View>
    )
  }

export default Birthday_Details