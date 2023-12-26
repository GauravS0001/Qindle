import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
const ReminderUpdateDelete = props => {
 
    
    
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
        <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "#055F9B", marginTop: 40, borderRadius: 10}}>
            <Image source={require('../../../res/images/Update.png')} style={{height: 25, width: 25, left: 20, top: 10}}/>
             <Text style={{position: "absolute", color: "white", fontWeight: "bold", fontSize: 18, left: 60, top: 10}}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "rgb(226, 2, 2)", marginLeft: 20, borderRadius: 10}}>
        <Image source={require('../../../res/images/delete.png')} style={{height: 25, width: 25, left: 20, top: 10}}/>
             <Text style={{position: "absolute", color: "white", fontWeight: "bold", fontSize: 18, left: 60, top: 10}}>Delete</Text>
        </TouchableOpacity>
       </View>
        </View>
    )
}

export default ReminderUpdateDelete