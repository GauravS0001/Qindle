import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  FlatList,
  ToastAndroid,
  Image
} from 'react-native';
import colors from '../../../res/colors';
import TextareaWithBackground from '../../components/community/TextareaWithBackground';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import Close from '../../../res/images/Close.svg';
import { useNavigation } from '@react-navigation/native';

const BillPaymentReminder_1 = props =>{

  const navigation = useNavigation();

  const _user = useSelector(state => state.user); //!!state.auth.token

  const dispatch = useDispatch();
  const [BillDay, setBillDay] = useState(new Date());
  const [billDayStr, setBillDayStr] = useState(BillDay);

  const [postText, setPostText] = useState('');
  const [showDate, setShowDate] = useState(false);

  {/*WARN !!!*/}
  const [birthTime, setBirthTime] = useState(new Date());
  const [birthTimeStr, setBirthTimeStr] = useState(birthTime.toLocaleTimeString('it-IT'));
  {/**********/}

  const textChangeHandler = text => {
    setPostText(text);
  };
  
  const onChangeDate = (event, selectedDate) => {
   
    if (selectedDate != undefined) {
      setBillDay(selectedDate);
      setBillDayStr(selectedDate.toString());
      

    }
    setShowDate(false);
  };

  const textChangeHandler2 = text => {
    setShowDate(true);
  };

  const _reminderFormComplete = useSelector(
    state => state.reminder.reminderFormComplete,
  );

  //Check successful Reminder creation
  useEffect(() => {
    if (_reminderFormComplete == true) {
      ToastAndroid.show("Bills Payment reminder Created", ToastAndroid.LONG);
      props.navigation.navigate('HomeScreen', {
        screen: 'HomeScreen',
        params: {}
      })
    }
  }, [_reminderFormComplete]);



  return(
    <View>

    {/*Header*/}
    <View style={{
      height: 55, 
      width: "100%", 
      elevation: 10, 
      backgroundColor: "white"}}>
    
    <Text style={{
      fontWeight: "bold", 
      fontSize: 18, 
      top: 15, 
      left: 20}}>Bill Payment Reminder</Text>

    {/*Back Button X*/}
    <TouchableOpacity style={{
      height: 30, 
      width: 30, 
      backgroundColor: "white", 
      position: 'absolute', 
      justifyContent: 'center', 
      alignItems: 'center',
      top: 8, 
      left: "90%"
    }}
    onPress={()=>
      navigation.goBack()
    }
    >
      
    <Text style={{fontWeight: 'bold', fontSize: 25}}>x</Text>
    </TouchableOpacity>
    </View>  


    <View style={{
      height: "83.5%", 
      width: "100%", 
      backgroundColor: "white", 
      top: 0}}>


       {/*Name Block*/}
       <Text style={{position: 'absolute', 
       top: 31, 
       left: 22, 
       fontWeight: 'bold', 
       fontSize: 17}}>Name*</Text>
       
       <View style={{
        height: 55, 
        width: "90%", 
        backgroundColor: "rgb(229, 229, 229);", 
        left: 20, 
        top: 60, 
        borderRadius: 10}}>

          <TextInput
          onChangeText={textChangeHandler}
          maxLength={20}
          placeholder='Type bill name'
          style={{
            position: 'absolute', 
            height: 45, 
            width: "94.5%", 
            backgroundColor: "transparent", 
            top: 5, 
            left: 10, 
            fontSize: 16.5, 
            fontWeight: 'bold'}}
    
        />
        </View>
        {/***********/}


       {/*Date select Block*/}
       <Text style={{
        position: 'absolute', 
        top: 155, 
        left: 22, 
        fontWeight: 'bold', 
        fontSize: 17}}>Select Date*</Text>
       
       <View style={{
        height: 50, 
        width: "90%", 
        backgroundColor: "rgb(229, 229, 229);", 
        left: 20, 
        top: 130, 
        borderRadius: 10}}>

         <TouchableOpacity
         style={{height: 45, width: "80%", backgroundColor: "transparent", position: 'absolute', top: 2.5, left: 5}}
                onPress={() => textChangeHandler2()}>
            
            <Text
                  style={{
                    padding: 10,
                    borderRadius: 10,
                    fontSize: 17,
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    letterSpacing: 0,
                    color: '#8C8C8C',
                    left: 5,
                    top: 0
                  }}
                >
                  {BillDay.toString().slice(0, 15)}
                </Text>
          </TouchableOpacity>
          
          <Image source={require('../../../res/images/Calendar.png')} style={{
            height: 28, 
            width: 28, 
            left: "88.5%", 
            top: 10}}/>
        </View>
        {/***********/}

      
        

      {showDate && (
      <DateTimePicker
        testID="dateTimePicker"
        value={BillDay}
        mode='date'
        is24Hour={false}
        display="default"
        onChange={onChangeDate}
      />
    )}

        
         
     

      </View>

      {/*Bottom main Button block*/}
      <View style={{
        bottom: 0, 
        height: 75, 
        width: "100%", 
        backgroundColor: "white",
        borderTopColor: "rgb(229, 229, 229);",
        borderTopWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center'}}>

         <TouchableOpacity style={{
          height: 45, 
          width: "90%", 
          backgroundColor: "#055F9B", 
          borderRadius: 10, 
          justifyContent: 'center', 
          alignItems: 'center'}}
          
          onPress={() => 
            dispatch({
              type: types.SET_REMINDER,
              userId: _user.userDetails._id,
              day: BillDay,
              time: birthTime,
              name: postText,
              _da: birthTimeStr,
              _day: billDayStr,
              reminderType: 'Bill Payments',
            })

            
          }
          >
          
          <Text style={{
            color: "white", 
            fontWeight: 'bold', 
            fontSize: 17}}>SET REMINDER</Text>

         </TouchableOpacity>
        </View>
        {/*********************/}
    
    </View>
)
}

export default BillPaymentReminder_1