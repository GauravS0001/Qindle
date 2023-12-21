import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Aniversary({navigation}){

    return(
        <View>
          <View style={{height: 55, width: "100%", elevation: 10, backgroundColor: "white"}}>
        <Text style={{fontWeight: "bold", fontSize: 18, top: 15, left: 20}}>Aniversary Reminder</Text>
        <TouchableOpacity style={{
          height: 30, width: 30, backgroundColor: "white", position: 'absolute', justifyContent: 'center', alignItems: 'center',
          top: 8, left: "90%"
        }}
        onPress={()=>
          navigation.goBack()
        }
        >
          <Text style={{fontWeight: 'bold', fontSize: 25}}>x</Text>
        </TouchableOpacity>
        </View>  










        
        </View>
    )
}

export default Aniversary