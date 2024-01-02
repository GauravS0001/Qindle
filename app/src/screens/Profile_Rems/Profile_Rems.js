import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import {setCategoryAndReminderUpdate} from '../../screens/ReminderUpdateDelete/RemUpdtActions'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import * as types from '../startup/types';


const Profile_Rems = props =>{

  /*const rems = [{category: "Birthday", date: "Tue Dec 26 2023", name: "Gaurav"}, {category: "Bill payment", date: "Sat Dec 30 2026", name: "Electic Bill"},
                {category: "Anniversary", date: "Sat Dec 30 2026", name: "Tanu"}, {category: "Medicine", date: "Sat Dec 30 2026", name: "Meftal +"},
                {category: "Medicine", date: "Sat Dec 30 2026", name: "Etilam"}, {category: "Bill payment", date: "Sat Dec 30 2026", name: "Water Bill"},
                {category: "Health check", date: "Sat Dec 30 2026", name: "Measure B.P"}]*/


  const dispatch = useDispatch();
  const _user = useSelector(state => state.user);

  const userReminder = useSelector(
    state => state.reminder.userReminder,
  );

  useEffect(() => {
    dispatch({
      type: types.SET_USER_REMINDERS,
      payload:  _user.userDetails._id,
    });
  }, []); 


  function updt (category, reminderId){
    props.navigation.navigate("ReminderUpdateDelete")
    dispatch(setCategoryAndReminderUpdate(category, reminderId));
  }
  

    return(
    <View style={{height: "100%"}}>
    <View style={{height: 55, width: "100%", backgroundColor: "#055F9B"}}>
      <TouchableOpacity style={{height: 45, width: "45%", backgroundColor: "transparent", top: 5}}
      onPress={() => props.navigation.goBack()}>
       <Image source={require('../../../res/images/Back2.png')} style={{height: 35,width: 35, top: 8, left: 7}}/>
        <Text style={{color: "white", position: 'absolute', fontSize: 17.5, fontWeight: 'bold',
         top: 13, left: 50}}>Reminders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{height: 45, width: 45, position: "absolute", left: "87%", backgroundColor: "transparent", top: 6.5, justifyContent: "center", alignItems: "center"}}
      onPress={()=>{props.navigation.navigate("ReminderCategory")}}>
        <Image source={require('../../../res/images/Plus.png')} style={{height: 35, width: 35}}/>
      </TouchableOpacity>
      </View>

      <ScrollView style={{height: "100%", width: "100%", backgroundColor: "transparent"}}>
        <Text style={{fontWeight: "bold", fontSize: 18, top: 10, left: 15}}>Your Reminders</Text>
        <View style={{height: 10, width: "100%"}}></View>
        
          {userReminder.map((item, index)=>(

<View key={index} style={{ marginTop: 0 }}>
{item.type === "Medicine" && (
  <TouchableOpacity style={{height: 93, width: "90%", backgroundColor: "white", elevation: 2, left: 18.5, top: 20, borderBottomColor: "rgb(208, 206, 206)", borderBottomWidth: 1.5}} activeOpacity={0.8}
  onPress={()=>updt(item.type, item._id)}>
     <Image
              source={
                item.type === "Medicine"
                  ? require('../../../res/images/Medicine.png')
                  : item.type === "birthday"
                  ? require('../../../res/images/Birthday.png')
                  : item.type === "Health check"
                  ? require('../../../res/images/HealthCheck.png')
                  : item.type === "Aniversary"
                  ? require('../../../res/images/Aniversary.png')
                  : item.type === "Bill payment"
                  ? require('../../../res/images/Bill.png')
                  : null // Provide a default source or null if needed
              }  style={{height: 48, width: 48, top: 20, left: 20}}/>

              <Image source={require('../../../res/images/Forward3.png')} style={{position: "absolute", left: "85%", height: 30, width: 30, top: 30}}/>

              <Text style={{position: "absolute", fontSize: 18, fontWeight: "bold", left: 83, top: 18}}>{item.medicine_name}</Text>
              <Text style={{fontSize: 15, position: "absolute", top: 40, left: 83}}>{item.type}</Text>
              <Text style={{position: "absolute", fontWeight: "bold", color: "rgb(157, 157, 157)", top: 60, left: 83, fontSize: 13}}>{item.medicine_times[0]}</Text>
  </TouchableOpacity>
)}

{item.type === "birthday" && (
  <TouchableOpacity style={{height: 93, width: "90%", backgroundColor: "white", elevation: 2, left: 18.5, top: 20, borderBottomColor: "rgb(208, 206, 206)", borderBottomWidth: 1.5}} activeOpacity={0.8}
  onPress={()=>updt(item.type, item._id)}>

       <Image
              source={
                item.type === "Medicine"
                  ? require('../../../res/images/Medicine.png')
                  : item.type === "birthday"
                  ? require('../../../res/images/Birthday.png')
                  : item.type === "Health check"
                  ? require('../../../res/images/HealthCheck.png')
                  : item.type === "Aniversary"
                  ? require('../../../res/images/Aniversary.png')
                  : item.type === "Bill payment"
                  ? require('../../../res/images/Bill.png')
                  : null // Provide a default source or null if needed
              }  style={{height: 48, width: 48, top: 20, left: 20}}/>

              <Image source={require('../../../res/images/Forward3.png')} style={{position: "absolute", left: "85%", height: 30, width: 30, top: 30}}/>
               
              <Text style={{position: "absolute", fontSize: 18, fontWeight: "bold", left: 83, top: 18}}>{item.name}</Text>
               <Text style={{fontSize: 15, position: "absolute", top: 40, left: 83}}>{item.type}</Text>
                <Text style={{position: "absolute", fontWeight: "bold", color: "rgb(157, 157, 157)", top: 60, left: 83, fontSize: 13}}>{item.date.substring(0, 10)}</Text>
  </TouchableOpacity>
)}

{item.type === "Aniversary" && (
  <TouchableOpacity style={{height: 93, width: "90%", backgroundColor: "white", elevation: 2, left: 18.5, top: 20, borderBottomColor: "rgb(208, 206, 206)", borderBottomWidth: 1.5}} activeOpacity={0.8}
  onPress={()=>updt(item.type, item._id)}>

       <Image
              source={
                item.type === "Medicine"
                  ? require('../../../res/images/Medicine.png')
                  : item.type === "birthday"
                  ? require('../../../res/images/Birthday.png')
                  : item.type === "Health check"
                  ? require('../../../res/images/HealthCheck.png')
                  : item.type === "Aniversary"
                  ? require('../../../res/images/Aniversary.png')
                  : item.type === "Bill payment"
                  ? require('../../../res/images/Bill.png')
                  : null // Provide a default source or null if needed
              }  style={{height: 48, width: 48, top: 20, left: 20}}/>

              <Image source={require('../../../res/images/Forward3.png')} style={{position: "absolute", left: "85%", height: 30, width: 30, top: 30}}/>
               
              <Text style={{position: "absolute", fontSize: 18, fontWeight: "bold", left: 83, top: 18}}>{item.name}</Text>
               <Text style={{fontSize: 15, position: "absolute", top: 40, left: 83}}>{item.type}</Text>
                <Text style={{position: "absolute", fontWeight: "bold", color: "rgb(157, 157, 157)", top: 60, left: 83, fontSize: 13}}>{item.date.substring(0, 10)}</Text>
  </TouchableOpacity>
)}


{item.type === "Bill Payments" && (
  <TouchableOpacity style={{height: 93, width: "90%", backgroundColor: "white", elevation: 2, left: 18.5, top: 20, borderBottomColor: "rgb(208, 206, 206)", borderBottomWidth: 1.5}} activeOpacity={0.8}
  onPress={()=>updt(item.type, item._id)}>

       <Image
              source={
                item.type === "Medicine"
                  ? require('../../../res/images/Medicine.png')
                  : item.type === "birthday"
                  ? require('../../../res/images/Birthday.png')
                  : item.type === "Health check"
                  ? require('../../../res/images/HealthCheck.png')
                  : item.type === "Aniversary"
                  ? require('../../../res/images/Aniversary.png')
                  : item.type === "Bill Payments"
                  ? require('../../../res/images/Bill.png')
                  : null // Provide a default source or null if needed
              }  style={{height: 48, width: 48, top: 20, left: 20}}/>

              <Image source={require('../../../res/images/Forward3.png')} style={{position: "absolute", left: "85%", height: 30, width: 30, top: 30}}/>
               
              <Text style={{position: "absolute", fontSize: 18, fontWeight: "bold", left: 83, top: 18}}>{item.name}</Text>
               <Text style={{fontSize: 15, position: "absolute", top: 40, left: 83}}>{item.type}</Text>
                <Text style={{position: "absolute", fontWeight: "bold", color: "rgb(157, 157, 157)", top: 60, left: 83, fontSize: 13}}>{item.date.substring(0, 10)}</Text>
  </TouchableOpacity>
)}


{item.type === "health_checkup" && (
  <TouchableOpacity style={{height: 93, width: "90%", backgroundColor: "white", elevation: 2, left: 18.5, top: 20, borderBottomColor: "rgb(208, 206, 206)", borderBottomWidth: 1.5}} activeOpacity={0.8}
  onPress={()=>updt(item.type, item._id)}>

       <Image
              source={
                item.type === "Medicine"
                  ? require('../../../res/images/Medicine.png')
                  : item.type === "birthday"
                  ? require('../../../res/images/Birthday.png')
                  : item.type === "health_checkup"
                  ? require('../../../res/images/HealthCheck.png')
                  : item.type === "Aniversary"
                  ? require('../../../res/images/Aniversary.png')
                  : item.type === "Bill Payments"
                  ? require('../../../res/images/Bill.png')
                  : null // Provide a default source or null if needed
              }  style={{height: 48, width: 48, top: 20, left: 20}}/>

              <Image source={require('../../../res/images/Forward3.png')} style={{position: "absolute", left: "85%", height: 30, width: 30, top: 30}}/>
               
              <Text style={{position: "absolute", fontSize: 18, fontWeight: "bold", left: 83, top: 18}}>{item.name}</Text>
               <Text style={{fontSize: 15, position: "absolute", top: 40, left: 83}}>{item.type}</Text>
                <Text style={{position: "absolute", fontWeight: "bold", color: "rgb(157, 157, 157)", top: 60, left: 83, fontSize: 13}}>{item.date.substring(0, 10)}</Text>
  </TouchableOpacity>
)}

</View>
            
          ))}

          
         
       

        <View style={{height: 45, width: "100%"}}></View>
      </ScrollView>

      

       
        </View>
    )
}

export default Profile_Rems