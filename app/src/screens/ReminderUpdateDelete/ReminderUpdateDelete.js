import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as types from '../startup/types';

const ReminderUpdateDelete = props => {

    const dispatch = useDispatch();
    const _user = useSelector(state => state.user);

    const category = useSelector(state => state.RemUpdtReducer.category)
    const id = useSelector(state => state.RemUpdtReducer.reminderId)


    useEffect(() => {
      
    }, []); 

    
  


    
    
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

       <View style={{height: 100, width: "100%", backgroundColor: "transparent", flexWrap: "wrap", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
        <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "white", marginTop: 40, borderRadius: 10, borderWidth: 2, borderColor: "#055F9B"}}>
            <Image source={require('../../../res/images/delete.png')} style={{height: 25, width: 25, left: 28, top: 10}}/>
             <Text style={{position: "absolute", color: "black", fontWeight: "bold", fontSize: 18, left: 65, top: 10}}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "#055F9B", marginLeft: 20, borderRadius: 10}}
        onPress={()=>props.navigation.navigate("ReminderUpdate")}>
        <Image source={require('../../../res/images/Update.png')} style={{height: 25, width: 25, left: 28, top: 10}}/>
             <Text style={{position: "absolute", color: "white", fontWeight: "bold", fontSize: 18, left: 65, top: 10}}>Update</Text>
        </TouchableOpacity>
       </View>

        <Text>{category}</Text>
        <Text>{id}</Text>

         

         
      
       
        </View>
    )
}

export default ReminderUpdateDelete