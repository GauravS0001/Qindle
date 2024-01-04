import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView, ToastAndroid } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch } from "react-redux";
import { setMedicineCategory } from "../reminders/ACTION_MED";
import { useEffect } from "react";
import * as types from '../startup/types';
import Close from '../../../res/images/Close.svg';
import colors from '../../../res/colors';

function ReminderUpdate(props) {

  const _user = useSelector(state => state.user); 
  const category = useSelector(state => state.RemUpdtReducer.category)
  const id = useSelector(state => state.RemUpdtReducer.reminderId)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: types.GET_MEDICINE_FORM,
      userId: _user.userDetails._id
    })

    dispatch({
      type: types.GET_SINGLE_REMINDER_DETAILS_FUNCTION,
      payload: id
    })
  }, []);

  const medicineForms = useSelector(
    state => state.reminder.medicineForm,
  );
  const ReminderDetails = useSelector(
    state => state.reminder.singleReminderDetails,
  )

  //***********************************/
  const onSelectBg = item => {
    dispatch(setMedicineCategory(item))
  }
  //*********************************/

  const [Day, setDay] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [postText, setPostText] = useState('');
  const [Time, setTime] = useState(new Date());
  const [TimeStr, setTimeStr] = useState(Time.toLocaleTimeString('it-IT'));


  const textChangeHandler = text => {
    setPostText(text);
  };

  const textChangeHandler2 = text => {
    setShowDate(true);
  };

  const textChangeHandler3 = text => {
    setShowDate(false);
    setShowTime(true);
    //setPostText3(text);
  };

  const onChangeDate = (event, selectedDate) => {

    if (selectedDate != undefined) {
      setDay(selectedDate);
    }
    setShowDate(false);
  };

  const onChangeTime = (event, selectedDate) => {
   
    if (selectedDate != undefined) {
      setTime(selectedDate);
      setTimeStr(selectedDate.toLocaleTimeString('it-IT'));
    }
    setShowTime(false);
  };

  //##################################################################################################################################
  if (category === 'Bill Payments') {

    return (
      <View>
        <View style={{ height: 55, width: "100%", backgroundColor: "white", elevation: 10 }}>
          <TouchableOpacity style={{ height: 45, width: "45%", backgroundColor: "transparent", top: 5 }}
            onPress={() => props.navigation.goBack()}>
            <Image source={require('../../../res/images/Back.png')} style={{ height: 25, width: 25, top: 12, left: 7 }} />
            <Text style={{
              color: "black", position: 'absolute', fontSize: 18, fontWeight: 'bold',
              top: 11, left: 45, width: 500
            }}>{category} Reminder</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: "83.4%", width: "100%", backgroundColor: "white" }}>
          <Text style={{
            position: 'absolute',
            top: 31,
            left: 22,
            fontSize: 18
          }}>Bill Name*</Text>

          <Text style={{fontSize: 20, fontWeight: "bold", position: "absolute", left: 22, top: 58}}>{ReminderDetails[0].name}</Text>

          <View style={{height: 2.5, width: "91.5%", left: 15, backgroundColor: "rgb(241, 241, 241)", position: "absolute", top: 93}}></View>

          <Text style={{
            position: 'absolute',
            top: 105,
            left: 22,
            fontSize: 18
          }}>Bill Pyment Date*</Text>

           <Text style={{fontSize: 20, fontWeight: "bold", position: "absolute", left: 22, top: 130}}>{ReminderDetails[0].date.slice(0, 10)}</Text>
  
        </View>

      
        

        <View style={{
          bottom: 0,
          height: 75,
          width: "100%",
          backgroundColor: "white",
          borderTopColor: "rgb(229, 229, 229);",
          borderTopWidth: 1.5,
        }}>
           
           <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "white", marginTop: 10, borderRadius: 10, borderWidth: 2, borderColor: "#055F9B", left: "53%"}}
    onPress={()=>{
      dispatch({
        type: types.DELETE_REMINDERS,
        payload: id
      })

      ToastAndroid.show("Reminder Deleted", ToastAndroid.LONG);
      props.navigation.navigate("ProfileScreen")
    }}
    >

       <Image source={require('../../../res/images/delete.png')} style={{height: 25, width: 25, left: 35, top: 10}}/>
         <Text style={{position: "absolute", color: "black", fontWeight: "bold", fontSize: 18, left: 70, top: 10}}>Delete</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "#055F9B", marginLeft: 0, borderRadius: 10, position: "absolute", left: 20, top: 10}}
        onPress={()=>props.navigation.navigate("ProfileScreen")}>
        <Image source={require('../../../res/images/cancel.png')} style={{height: 35, width: 35, left: 26, top: 7}}/>
             <Text style={{position: "absolute", color: "white", fontWeight: "bold", fontSize: 18, left: 65, top: 11}}>Cancel</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }

  //#####################################################################################################################################
  if (category === 'birthday') {

    return (
      <View>
        <View style={{ height: 55, width: "100%", backgroundColor: "white", elevation: 10 }}>
          <TouchableOpacity style={{ height: 45, width: "45%", backgroundColor: "transparent", top: 5 }}
            onPress={() => props.navigation.goBack()}>
            <Image source={require('../../../res/images/Back.png')} style={{ height: 25, width: 25, top: 12, left: 7 }} />
            <Text style={{
              color: "black", position: 'absolute', fontSize: 18, fontWeight: 'bold',
              top: 11, left: 45, width: 500
            }}>{category} Reminder</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: "83.4%", width: "100%", backgroundColor: "white" }}>
         
        <Text style={{
            position: 'absolute',
            top: 31,
            left: 22,
            fontSize: 18
          }}>Name*</Text>

          <Text style={{fontSize: 20, fontWeight: "bold", position: "absolute", left: 22, top: 58}}>{ReminderDetails[0].name}</Text>

          <View style={{height: 2.5, width: "91.5%", left: 15, backgroundColor: "rgb(241, 241, 241)", position: "absolute", top: 93}}></View>

          <Text style={{
            position: 'absolute',
            top: 105,
            left: 22,
            fontSize: 18
          }}>Birthday Date*</Text>

           <Text style={{fontSize: 20, fontWeight: "bold", position: "absolute", left: 22, top: 130}}>{ReminderDetails[0].date.slice(0, 10)}</Text>
           
         
        </View>

        <View style={{
          bottom: 0,
          height: 75,
          width: "100%",
          backgroundColor: "white",
          borderTopColor: "rgb(229, 229, 229);",
          borderTopWidth: 1.5,
        }}>

<TouchableOpacity style={{height: 50, width: 160, backgroundColor: "white", marginTop: 10, borderRadius: 10, borderWidth: 2, borderColor: "#055F9B", left: "53%"}}
    onPress={()=>{
      dispatch({
        type: types.DELETE_REMINDERS,
        payload: id
      })

      ToastAndroid.show("Reminder Deleted", ToastAndroid.LONG);
      props.navigation.navigate("ProfileScreen")
    }}
    >

       <Image source={require('../../../res/images/delete.png')} style={{height: 25, width: 25, left: 35, top: 10}}/>
         <Text style={{position: "absolute", color: "black", fontWeight: "bold", fontSize: 18, left: 70, top: 10}}>Delete</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "#055F9B", marginLeft: 0, borderRadius: 10, position: "absolute", left: 20, top: 10}}
        onPress={()=>props.navigation.navigate("ProfileScreen")}>
        <Image source={require('../../../res/images/cancel.png')} style={{height: 35, width: 35, left: 26, top: 7}}/>
             <Text style={{position: "absolute", color: "white", fontWeight: "bold", fontSize: 18, left: 65, top: 11}}>Cancel</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }

  //#####################################################################################################################################
  if (category === 'Aniversary') {

    return (
      <View>
        <View style={{ height: 55, width: "100%", backgroundColor: "white", elevation: 10 }}>
          <TouchableOpacity style={{ height: 45, width: "45%", backgroundColor: "transparent", top: 5 }}
            onPress={() => props.navigation.goBack()}>
            <Image source={require('../../../res/images/Back.png')} style={{ height: 25, width: 25, top: 12, left: 7 }} />
            <Text style={{
              color: "black", position: 'absolute', fontSize: 18, fontWeight: 'bold',
              top: 11, left: 45, width: 500
            }}>{category} Reminder</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: "83.4%", width: "100%", backgroundColor: "white" }}>
          
        <Text style={{
            position: 'absolute',
            top: 31,
            left: 22,
            fontSize: 18
          }}>Name*</Text>

          <Text style={{fontSize: 20, fontWeight: "bold", position: "absolute", left: 22, top: 58}}>{ReminderDetails[0].name}</Text>

          <View style={{height: 2.5, width: "91.5%", left: 15, backgroundColor: "rgb(241, 241, 241)", position: "absolute", top: 93}}></View>

          <Text style={{
            position: 'absolute',
            top: 105,
            left: 22,
            fontSize: 18
          }}>Aniversary Date*</Text>

           <Text style={{fontSize: 20, fontWeight: "bold", position: "absolute", left: 22, top: 130}}>{ReminderDetails[0].date.slice(0, 10)}</Text>
           

        </View>

        

        <View style={{ bottom: 0, height: 75, width: "100%", backgroundColor: "white", borderTopColor: "rgb(229, 229, 229);", borderTopWidth: 1.5 }}>

        <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "white", marginTop: 10, borderRadius: 10, borderWidth: 2, borderColor: "#055F9B", left: "53%"}}
    onPress={()=>{
      dispatch({
        type: types.DELETE_REMINDERS,
        payload: id
      })

      ToastAndroid.show("Reminder Deleted", ToastAndroid.LONG);
      props.navigation.navigate("ProfileScreen")
    }}
    >

       <Image source={require('../../../res/images/delete.png')} style={{height: 25, width: 25, left: 35, top: 10}}/>
         <Text style={{position: "absolute", color: "black", fontWeight: "bold", fontSize: 18, left: 70, top: 10}}>Delete</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "#055F9B", marginLeft: 0, borderRadius: 10, position: "absolute", left: 20, top: 10}}
        onPress={()=>props.navigation.navigate("ProfileScreen")}>
        <Image source={require('../../../res/images/cancel.png')} style={{height: 35, width: 35, left: 26, top: 7}}/>
             <Text style={{position: "absolute", color: "white", fontWeight: "bold", fontSize: 18, left: 65, top: 11}}>Cancel</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }


  //#####################################################################################################################################
  if(category === 'health_checkup'){
    return(
      <View>
      <View style={{ height: 55, width: "100%", backgroundColor: "white", elevation: 10 }}>
        <TouchableOpacity style={{ height: 45, width: "45%", backgroundColor: "transparent", top: 5 }}
          onPress={() => props.navigation.goBack()}>
          <Image source={require('../../../res/images/Back.png')} style={{ height: 25, width: 25, top: 12, left: 7 }} />
          <Text style={{
            color: "black", position: 'absolute', fontSize: 18, fontWeight: 'bold',
            top: 11, left: 45, width: 500
          }}>Health Checkup Reminder</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: "83.4%", width: "100%", backgroundColor: "white" }}>
      <Text style={{
            position: 'absolute',
            top: 31,
            left: 22,
            fontSize: 18
          }}>Name*</Text>

          <Text style={{fontSize: 20, fontWeight: "bold", position: "absolute", left: 22, top: 58}}>{ReminderDetails[0].name}</Text>

          <View style={{height: 2.5, width: "91.5%", left: 15, backgroundColor: "rgb(241, 241, 241)", position: "absolute", top: 93}}></View>

          <Text style={{
            position: 'absolute',
            top: 105,
            left: 22,
            fontSize: 18
          }}>Checkup Date*</Text>

           <Text style={{fontSize: 20, fontWeight: "bold", position: "absolute", left: 22, top: 130}}>{ReminderDetails[0].date.slice(0, 10)}</Text>
           

           <View style={{height: 2, width: "91.5%", left: 15, backgroundColor: "rgb(241, 241, 241)", position: "absolute", top: 170}}></View>

          
           <Text style={{
            position: 'absolute',
            top: 185,
            left: 22,
            fontSize: 18
          }}>Time*</Text>

           <Text style={{fontSize: 20, fontWeight: "bold", position: "absolute", left: 22, top: 210}}>{ReminderDetails[0].time.slice(0,5)}</Text>
         
         
             

         


          </View>


         <View style={{ bottom: 0, height: 75, width: "100%", backgroundColor: "white", borderTopColor: "rgb(229, 229, 229);", borderTopWidth: 1.5}}>

         <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "white", marginTop: 10, borderRadius: 10, borderWidth: 2, borderColor: "#055F9B", left: "53%"}}
    onPress={()=>{
      dispatch({
        type: types.DELETE_REMINDERS,
        payload: id
      })

      ToastAndroid.show("Reminder Deleted", ToastAndroid.LONG);
      props.navigation.navigate("ProfileScreen")
    }}
    >

       <Image source={require('../../../res/images/delete.png')} style={{height: 25, width: 25, left: 35, top: 10}}/>
         <Text style={{position: "absolute", color: "black", fontWeight: "bold", fontSize: 18, left: 70, top: 10}}>Delete</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "#055F9B", marginLeft: 0, borderRadius: 10, position: "absolute", left: 20, top: 10}}
        onPress={()=>props.navigation.navigate("ProfileScreen")}>
        <Image source={require('../../../res/images/cancel.png')} style={{height: 35, width: 35, left: 26, top: 7}}/>
             <Text style={{position: "absolute", color: "white", fontWeight: "bold", fontSize: 18, left: 65, top: 11}}>Cancel</Text>
        </TouchableOpacity>

        </View>

       

      </View>
    )
  }


//#####################################################################################################################################
if(category === 'Medicine'){
  return(

    <View>
    <View style={{ height: 55, width: "100%", backgroundColor: "white", elevation: 10 }}>
      <TouchableOpacity style={{ height: 45, width: "45%", backgroundColor: "transparent", top: 5 }}
        onPress={() => props.navigation.goBack()}>
        <Image source={require('../../../res/images/Back.png')} style={{ height: 25, width: 25, top: 12, left: 7 }} />
        <Text style={{
          color: "black", position: 'absolute', fontSize: 18, fontWeight: 'bold',
          top: 11, left: 45, width: 500
        }}>Update {category} Reminder</Text>
      </TouchableOpacity>
    </View>

    <View style={{ height: "83.4%", width: "100%", backgroundColor: "white" }}>
     
     {ReminderDetails.map((item, index)=>(
      <View key={index} style={{height: 500, width: "100%", backgroundColor: "white"}}>
        <Text style={{fontSize: 18, top: 10, left: 15}}>Medicine Name:</Text>
        <Text style={{top: 10, left: 15, fontWeight: 'bold', fontSize: 20}}>{item.medicine_name}</Text>

        <View style={{height: 2.5, width: "91.5%", left: 15, backgroundColor: "rgb(241, 241, 241)", position: "absolute", top: 68}}></View>

        <Text style={{fontSize: 18, top: 20, left: 15}}>Medicine Form:</Text>
        <Text style={{top: 19, left: 15, fontWeight: 'bold', fontSize: 19}}>{item.what_form_medicine}</Text>
        
        <View style={{height: 2, width: "91.5%", left: 15, backgroundColor: "rgb(241, 241, 241)", position: "absolute", top: 130}}></View>

        <Text style={{fontSize: 18, top: 32, left: 15}}>Reason:</Text>
        <Text style={{top: 29, left: 15, fontWeight: 'bold', fontSize: 18.5}}>{item.what_are_you_taking_for}</Text>

        <View style={{height: 2, width: "91.5%", left: 15, backgroundColor: "rgb(241, 241, 241)", position: "absolute", top: 187}}></View>
        
        <Text style={{fontSize: 18, top: 42, left: 15}}>Frequency:</Text>
        <Text style={{top: 42, left: 15, fontWeight: 'bold', fontSize: 18}}>{item.medicine_frequency}</Text>

        <View style={{height: 2, width: "91.5%", left: 15, backgroundColor: "rgb(241, 241, 241)", position: "absolute", top: 248}}></View>

        <Text style={{fontSize: 18, top: 52, left: 15}}>Timings:</Text>
        {item.medicine_frequency === 'Once Daily' && (
          <Text style={{top: 53, left: 15, fontWeight: 'bold', fontSize: 17}}>{item.medicine_times[0].slice(0,4)} {item.medicine_times[0].slice(5,7)}</Text>
        )}

        {item.medicine_frequency === 'Twice Daily' && (
          <View>
          <Text style={{top: 53, left: 15, fontWeight: 'bold', fontSize: 17}}>{item.medicine_times[0].slice(0,4)} {item.medicine_times[0].slice(5,7)}</Text>
          <Text style={{top: 54, left: 15, fontWeight: 'bold', fontSize: 17}}>{item.medicine_times[1].slice(0,4)} {item.medicine_times[1].slice(5,7)}</Text>
          </View>
        )}

        {item.medicine_frequency === '3 times a day' && (
          <View>
          <Text style={{top: 53, left: 15, fontWeight: 'bold', fontSize: 17}}>{item.medicine_times[0].slice(0,4)} {item.medicine_times[0].slice(5,7)}</Text>
          <Text style={{top: 54, left: 15, fontWeight: 'bold', fontSize: 17}}>{item.medicine_times[1].slice(0,4)} {item.medicine_times[1].slice(5,7)}</Text>
          <Text style={{top: 55, left: 15, fontWeight: 'bold', fontSize: 17}}>{item.medicine_times[2].slice(0,4)} {item.medicine_times[2].slice(5,7)}</Text>
          </View>
        )}

        {item.medicine_frequency === 'Every 6 hours' && (
          <View>
          <Text style={{top: 53, left: 15, fontWeight: 'bold', fontSize: 17}}>--</Text>
          </View>
        )}

        {item.medicine_frequency === 'Only as needed' && (
          <View>
          <Text style={{top: 53, left: 15, fontWeight: 'bold', fontSize: 17}}>--</Text>
          </View>
        )}
      </View>
     ))}
      
      
     

    </View>

   

    <View style={{ bottom: 0, height: 75, width: "100%", backgroundColor: "white", borderTopColor: "rgb(229, 229, 229);", borderTopWidth: 1.5 }}>

    <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "white", marginTop: 10, borderRadius: 10, borderWidth: 2, borderColor: "#055F9B", left: "53%"}}
    onPress={()=>{
      dispatch({
        type: types.DELETE_REMINDERS,
        payload: id
      })

      ToastAndroid.show("Reminder Deleted", ToastAndroid.LONG);
      props.navigation.navigate("ProfileScreen")
    }}
    >

       <Image source={require('../../../res/images/delete.png')} style={{height: 25, width: 25, left: 35, top: 10}}/>
         <Text style={{position: "absolute", color: "black", fontWeight: "bold", fontSize: 18, left: 70, top: 10}}>Delete</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{height: 50, width: 160, backgroundColor: "#055F9B", marginLeft: 0, borderRadius: 10, position: "absolute", left: 20, top: 10}}
        onPress={()=>props.navigation.navigate("ReminderUpdate")}>
        <Image source={require('../../../res/images/Update.png')} style={{height: 25, width: 25, left: 28, top: 10}}/>
             <Text style={{position: "absolute", color: "white", fontWeight: "bold", fontSize: 18, left: 65, top: 10}}>Cancel</Text>
        </TouchableOpacity>

    </View>
  </View>
  )
}
 










































































  //***************************************************************************************************************************/

  return (
    <View>
      <View style={{ height: 55, width: "100%", backgroundColor: "#055F9B" }}>
        <TouchableOpacity style={{ height: 45, width: "45%", backgroundColor: "transparent", top: 5 }}
          onPress={() => props.navigation.goBack()}>
          <Image source={require('../../../res/images/Back2.png')} style={{ height: 35, width: 35, top: 8, left: 7 }} />
          <Text style={{
            color: "white", position: 'absolute', fontSize: 17.5, fontWeight: 'bold',
            top: 13, left: 50
          }}>Update Reminder</Text>
        </TouchableOpacity>
      </View>

      <Text>Page needs to be designed for this category</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#055F9B',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  continue_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
    color: colors.white,
  },
  textareaWithBackground: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: 'green'
  },
  bg_color_dots: {
    flex: 2,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 20
  },
  button_container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ReminderUpdate