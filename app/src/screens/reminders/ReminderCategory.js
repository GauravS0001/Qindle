import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  FlatList,
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import TextareaWithBackground from '../../components/community/TextareaWithBackground';
import UserNameUserImage from '../../components/community/UserNameUserImage';
import ReminderCategoryCard from '../../components/UI/ReminderCategoryCard';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import messaging from '@react-native-firebase/messaging';
import { setCategoryData } from './reminderActions';

import Close from '../../../res/images/Close.svg';
import { wrap } from 'lodash';
const ReminderCategory = props => {

  const dispatch = useDispatch();
  const communityCategory = useSelector(
    state => state.community.communityCategory,
  );

  const reminderCategory = useSelector(
    state => state.reminder.reminderCategory,
  );

 

  

  useEffect(() => {
   
    dispatch({
      type: types.REMINDER_CATEGORY_GET,
      userId: ''
    });

  }, []);

  const [selectedCategory, setSelectedCategory] = useState([]);

  const onSelectBg = item => {
    //let data = selectedCategory;
    //data.push(item)
    //setSelectedCategory(data);

    if (item.name == 'Medicine') {
      props.navigation.navigate('MedicineReminder_1', {
        screen: 'MedicineReminder_1',
        params: {
          category: item
        }
      });
    }

    if (item.name == 'Birthday') {
      props.navigation.navigate('BirthdayReminder_1', {
        screen: 'BirthdayReminder_1',
        params: {
          category: item
        }
      });
    }
    if (item.name == 'Health check') {
      props.navigation.navigate('HealthCheckReminder_1', {
        screen: 'HealthCheckReminder_1',
        params: {
          category: item
        }
      });
    }

    if (item.name == 'Anniversary') {
      props.navigation.navigate('Aniversary', {
        screen: 'Aniversary',
        params: {
          category: item
        }
      });
    }

    if (item.name == 'Bill payment') {
      props.navigation.navigate('BillPayment', {
        screen: 'BillPayment',
        params: {
          category: item
        }
      });
    }



  };


  //@todo create notification component 
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      dispatch({
        type: types.SET_NOTIFICATION,
        remoteMessage: remoteMessage
      })

    });

    return unsubscribe;

  }, []);

  const _reinderNotificationSet = useSelector(
    state => state.reminder.reinderNotificationSet,
  );
  useEffect(() => {
    if (_reinderNotificationSet == true) {
    }
  }, [_reinderNotificationSet]);

  return (
    
      <View style={{ backgroundColor: colors.white, height: "100%"}}>
        
        <View style={{
          height: 55, 
          width: "100%", 
          elevation: 10, 
          backgroundColor: "white"}}>

        <Text style={{
          fontWeight: "bold", 
          fontSize: 19, 
          top: 15, 
          left: 20}}>Select Category</Text>

         {/*Go Back Button X*/}
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
        onPress={()=>{
          props.navigation.goBack();
        }}
        >
        <Text style={{fontWeight: 'bold', fontSize: 25}}>x</Text>
        </TouchableOpacity>
        </View>
          
          <Text style={{
            top: 18, 
            left: 20, 
            fontSize: 16,  
            color: "gray"}}>Select only ONE category to set reminder for</Text>
      
        
        {/*Display reminder category blocks*/}
        <View style={{marginTop: 30}}>  
        {reminderCategory.map((item) => (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <ReminderCategoryCard
          key={item._id}
          item={item}
          onBgSelect={onSelectBg}
        />
        </View>
       
      ))}
       </View>
          
       
      </View>
    
  );
};

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

export default ReminderCategory;
