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
  Image,
  ScrollView
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import TextareaWithBackground from '../../components/community/TextareaWithBackground';
import UserNameUserImage from '../../components/community/UserNameUserImage';
import CommunityCategory from '../../components/UI/CommunityCategory';
import MedicineForm from '../../components/UI/MedicineForm';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';

import Close from '../../../res/images/Close.svg';
import { setMedicineCategory, setMedicineName, setMedicineReason, setMedicineInterval } from './ACTION_MED';

const MedicineReminder_4 = props => {


  const dispatch = useDispatch();

  const _user = useSelector(state => state.user); //!!state.auth.token

  useEffect(() => {    

  }, []);


  const friendsList = [
    {_id: "1", name: "Once Daily"},
    {_id: "2", name: "Twice Daily"},
    {_id: "3", name: "3 times a day"},
    {_id: "4", name: "Every 6 hours"},
    {_id: "5", name: "Only as needed"},
    {_id: "6", name: "Others"}
  ]

  const [selectedFreinds, setSelectedFreinds] = useState([]);
   
  const REASON = useSelector(state => state.REDUCER_MED.medicineReason)
   
  function onSelectBg (input) {
    dispatch(setMedicineInterval(input))
    
    let data = selectedFreinds;
    data.push(input)
    setSelectedFreinds(data)
    let _data = selectedFreinds[selectedFreinds.length - 1];
    props.navigation.navigate('MedicineReminder_5', {
      screen: 'MedicineReminder_5',
      params: {
        //name: props.route.params.params.name,
        //privacy: props.route.params.params.privacy,
        //description: props.route.params.params.description,
        //category: props.route.params.params.category,
        medicineName: props.route.params.medicineName,
        medicineCategory: props.route.params.medicineCategory,
        medicineFor: props.route.params.friends._id,
        friends: _data
      }
    });

  };


  return (
    <View style={{height: "100%", width: "100%", backgroundColor: "white"}}>
    <View style={{height: 56, width: "100%", backgroundColor: "white", elevation: 10}}>

    <TouchableOpacity style={{height: 30, width: 30, backgroundColor: "white", position: 'absolute', top: 17.5, left: 7, justifyContent: 'center', alignItems: 'center'}}
    onPress={()=>props.navigation.goBack()}>
      <Image source={require('../../../res/images/Back.png')} style={{height: 22, width: 22}}/>
    </TouchableOpacity>
    <Text style={{
    fontWeight: 'bold', 
    fontSize: 18.7, 
    top: 18, 
    left: 55}}>Select Time Interval {REASON}</Text>

    <TouchableOpacity style={{
    height: 30, 
    width: 30, 
    backgroundColor: "white", 
    left: "89%", 
    top: 17, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute'
  }}
    onPress={()=>{props.navigation.navigate("ReminderCategory")}}>
    <Close />
   </TouchableOpacity>
    </View>


    <View style={{
    height: 62, 
    width: "93%", 
    left: 15, 
    top: 0}}>

   <View style={{
          ...styles.textareaWithBackground, marginTop: 20, flex: .05,
          //backgroundColor:'pink'
        }}>

          <Text
            style={{
              flex: 1,
              backgroundColor: '#055F9B',
              flexDirection: 'column',
              marginRight: 5,
              borderRadius: 20,
              height: 5
            }}
          >
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: '#055F9B',
              flexDirection: 'column',
              marginRight: 5,
              borderRadius: 20,
              height: 5
            }}
          >
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: '#055F9B',
              flexDirection: 'column',
              marginRight: 5,
              borderRadius: 20,
              height: 5
            }}
          >
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: '#055F9B',
              flexDirection: 'column',
              marginRight: 5,
              borderRadius: 20,
              height: 5
            }}
          >
          </Text>

          <Text
            style={{
              flex: 1,
              backgroundColor: '#CCC',
              flexDirection: 'column',
              marginRight: 5,
              borderRadius: 20,
              height: 5
            }}
          >
          </Text>

          <Text
            style={{
              flex: 1,
              backgroundColor: '#CCC',
              flexDirection: 'column',
              marginRight: 5,
              borderRadius: 20,
              height: 5
            }}
          >
          </Text>       
        </View>     
   </View>      

    <View style={{
      height: 85, 
      width: "100%", 
      backgroundColor: "#f0efef", 
      borderTopColor: "#CCC", 
      borderTopWidth: 1.5, 
      top: -15}}>

      <Text style={{
        left: 15, 
        fontWeight: 'bold', 
        fontSize: 18, 
        top: 18}}>How often do you take it?</Text>
    </View>

    <View style={{
      height: "100%", 
      width: "100%", 
      backgroundColor: "white", 
      top: -35, 
      borderTopRightRadius: 15, 
      borderTopLeftRadius: 15}}>

<FlatList
    data={friendsList}
    horizontal={false}
    keyExtractor={item => item._id}
    numColumns={1}
    style={{top: 10}}
    renderItem={({ item }) => (
      <MedicineForm
        item={item}
        onBgSelect={()=> onSelectBg(item.name)}
      />
    )}
  />
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

export default MedicineReminder_4;
