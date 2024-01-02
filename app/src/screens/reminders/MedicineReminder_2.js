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
import { setMedicineCategory, setMedicineName, setMedicineReason } from './ACTION_MED';

const MedicineReminder_2 = props => {

  const dispatch = useDispatch();

  const _user = useSelector(state => state.user); //!!state.auth.token

  const MedForm = useSelector(state => state.REDUCER_MED.medicineCategory) 
  

  useEffect(() => {
   

  }, []);


  const [selectedList, setSelectedList] = useState();

  const [selectedFreinds, setSelectedFreinds] = useState([]);

  const onSelectBg = item => {
    
    let data = selectedFreinds;
    data.push(item)
    setSelectedFreinds(data)
    let _data = selectedFreinds[selectedFreinds.length - 1];
    props.navigation.navigate('MedicineReminder_3', {
      screen: 'MedicineReminder_3',
      params: {
        medicineCategory: props.route.params.friends,
        friends: _data
      }
    });

  };

  const updateQuery = input => {


    dispatch(setMedicineName(input))

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
      left: 55}}>Select Medicine</Text>

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
          top: 18}}>What is the medicine name?</Text>
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

          <View style={{height: 200, width: "100%"}}>
          <TextInput
              style={{
                paddingLeft: 15,
                height: 55, width: "92%",
                backgroundColor: "#f0efef",
                top: 18, left: 15, borderRadius: 10,
                fontWeight: 'bold', fontSize: 16.5
              }}
              placeholder={"Enter name of "+MedForm}
              onChangeText={updateQuery}
            />

            <TouchableOpacity style={{height: 40, width: 100, backgroundColor: "#055F9B", justifyContent: 'center', alignItems:'center', borderRadius: 5, top: 30, left: 17}}
            onPress={()=>onSelectBg()}>
              <Text style={{color: "white", fontWeight: 'bold', fontSize: 16}}>Next ></Text>
            </TouchableOpacity>

            
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

export default MedicineReminder_2;
