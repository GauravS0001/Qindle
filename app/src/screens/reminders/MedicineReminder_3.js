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
import CommunityCategory from '../../components/UI/CommunityCategory';
import MedicineForm from '../../components/UI/MedicineForm';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';

import Close from '../../../res/images/Close.svg';
const MedicineReminder_3 = props => {

  const dispatch = useDispatch();

  const _user = useSelector(state => state.user); //!!state.auth.token

  useEffect(() => {
    dispatch({
      type: types.GET_USER_FRIENDS,
      userId: _user.userDetails._id
    })

    dispatch({
      type: types.GET_MEDICINE_FOR,
      userId: _user.userDetails._id,
      medicineFor: props.route.params.friends._id
    })


  }, [props.route.params.friends._id]);

  const friendsList = useSelector(
    state => state.reminder.medicineFor,
  );



  const [selectedList, setSelectedList] = useState(friendsList);

  const [selectedFreinds, setSelectedFreinds] = useState([]);

  const onSelectBg = item => {
    let data = selectedFreinds;
    data.push(item)
    setSelectedFreinds(data)
    let _data = selectedFreinds[selectedFreinds.length - 1];
    props.navigation.navigate('MedicineReminder_4', {
      screen: 'MedicineReminder_4',
      params: {
        medicineName: props.route.params.friends._id,
        medicineCategory: props.route.params.medicineCategory,
        friends: _data
      }
    });

  };

  const updateQuery = input => {

    dispatch({
      type: types.GET_MEDICINE_FOR,
      userId: _user.userDetails._id,
      medicineFor: props.route.params.friends._id,
      text: input
    })

  };

  const options = [{_id: "38yd9", name: "BP"}, {_id: "d3kjg", name: "Sugar"}, {_id: "s3ljh", name: "Pain"}, 
                   {_id: "jkg45", name: "Health Supplement"}, {_id: "kh32g", name: "Asthma"}, {_id: "jwh2e", name: "Acidity"},
                   {_id: "a8dfg", name: "Constipation"}, {_id: "hkg43", name: "Others"}];

  return (
    <View style={{height: "100%", width: "100%", backgroundColor: "white"}}>
      <View style={{height: 56, width: "100%", backgroundColor: "white", elevation: 10}}>
      <Text style={{
      fontWeight: 'bold', 
      fontSize: 18.7, 
      top: 18, 
      left: 45}}>Select Reason</Text>

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
      onPress={()=>{props.navigation.goBack()}}>
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

      <View style={{height: 100, width: "100%", backgroundColor}}></View>

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

export default MedicineReminder_3;
