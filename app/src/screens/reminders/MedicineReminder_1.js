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
const MedicineReminder_1 = props => {

  const dispatch = useDispatch();

  const _user = useSelector(state => state.user); //!!state.auth.token

  useEffect(() => {

    /*dispatch({
      type: types.GET_USER_FRIENDS,
      userId: _user.userDetails._id
    })
    */

    dispatch({
      type: types.GET_MEDICINE_FORM,
      userId: _user.userDetails._id
    })


  }, []);

  /*
  const friendsList = useSelector(
    state => state.userPost.userFriends,
  );

  */

  const friendsList = useSelector(
    state => state.reminder.medicineForm,
  );

  const [selectedFreinds, setSelectedFreinds] = useState([]);

  const onSelectBg = item => {
    let data = selectedFreinds;
    data.push(item)
    setSelectedFreinds(data)
    let _data = selectedFreinds[selectedFreinds.length - 1];
    props.navigation.navigate('MedicineReminder_2', {
      screen: 'MedicineReminder_2', //2
      params: {
        //name: props.route.params.params.name,
        //privacy: props.route.params.params.privacy,
        //description: props.route.params.params.description,
        //category: props.route.params.params.category,
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
      left: 55}}>Select Form</Text>

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
          top: 18}}>What form is the medicine?</Text>
      </View>

      <View style={{
        height: "100%", 
        width: "100%", 
        backgroundColor: "red", 
        top: -35, 
        borderTopRightRadius: 15, 
        borderTopLeftRadius: 15}}>

        <ScrollView style={{
          backgroundColor: "white", 
          borderTopRightRadius: 15, 
          borderTopLeftRadius: 15}}>

           <View style={{flexDirection: 'row', flexWrap: 'wrap', left: "3.5%", top: 5, height: 600}}>
            {friendsList.map((item,index)=>(
              <TouchableOpacity style={{height: 100, width: 130, backgroundColor: "white", marginTop: 30, marginLeft: 30, elevation: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}
              onPress={()=> onSelectBg(item._id)}>
                <Image
              source={
                item.name === "Pill"
                  ? require('../../../res/images/Pill.png')
                  : item.name === "Solution"
                  ? require('../../../res/images/solution.png')
                  : item.name === "Injection"
                  ? require('../../../res/images/injection.png')
                  : item.name === "Powder"
                  ? require('../../../res/images/powder.png')
                  : item.name === "Drops"
                  ? require('../../../res/images/drops.png')
                  : item.name === "Inhaler"
                  ? require('../../../res/images/Inhaler.png')
                  : require('../../../res/images/other.png') 
              }
              style={{ width: 41, height: 41, opacity: 1, top: -5 }}
            />
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
            </View>
           
          </ScrollView>
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

export default MedicineReminder_1;