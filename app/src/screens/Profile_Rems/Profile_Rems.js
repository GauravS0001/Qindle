import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";


const Profile_Rems = props =>{

    return(
    <View>
    <View style={{height: 55, width: "100%", backgroundColor: "#055F9B"}}>
      <TouchableOpacity style={{height: 45, width: "45%", backgroundColor: "transparent", top: 5}}
      onPress={() => props.navigation.goBack()}>
       <Image source={require('../../../res/images/Back2.png')} style={{height: 35,width: 35, top: 8, left: 7}}/>
        <Text style={{color: "white", position: 'absolute', fontSize: 17.5, fontWeight: 'bold',
         top: 13, left: 50}}>Reminders</Text>
      </TouchableOpacity>

      </View>
        </View>
    )
}

export default Profile_Rems