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
  ScrollView,
  ToastAndroid
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
import { DatePicker, Picker } from 'react-native-wheel-datepicker';

import Close from '../../../res/images/Close.svg';
const MedicineReminder_6 = props => {

  let x = {
    medicineName: props.route.params.medicineName,
    medicineCategory: props.route.params.medicineCategory,
    medicineFor: props.route.params.medicineFor,
    frequency: props.route.params.frequency,
  }
 

  const dispatch = useDispatch();

  const _user = useSelector(state => state.user); //!!state.auth.token


  const _medicineFormComplete = useSelector(
    state => state.reminder.medicineFormComplete,
  );
  useEffect(() => {
    if (_medicineFormComplete == true) {
      ToastAndroid.show("Reminder Created", ToastAndroid.LONG);
      props.navigation.navigate('HomeScreen', {
        screen: 'HomeScreen',
        params: {}
      })
    }
  }, [_medicineFormComplete]);

  const friendsList = useSelector(
    state => state.userPost.userFriends,
  );

  const [selectedFreinds, setSelectedFreinds] = useState([]);


  const onSelectBg = item => {
    let data = selectedFreinds;
    data.push(item)
    setSelectedFreinds(data)
    
    /*props.navigation.navigate('MedicineReminder_2', {
      screen: 'MedicineReminder_2',
      params: {
        //name: props.route.params.params.name,
        //privacy: props.route.params.params.privacy,
        //description: props.route.params.params.description,
        //category: props.route.params.params.category,
        friends: selectedFreinds
      }
    });
    */

  };

  const [selectedHr, setSelectedHr] = useState('1');
  const onDoseValueChangeHr = item => {
    
    setSelectedHr(item)
  }

  const [selectedMin, setSelectedMin] = useState('00');
  const onDoseValueChangeMin = item => {
    
    setSelectedMin(item)
  }

  const [selectedAmPm, setSelectedAmPm] = useState('AM');
  const onDoseValueChangeAmPm = item => {
    
    setSelectedAmPm(item)
  }



  const [selectedHr2, setSelectedHr2] = useState('1');
  const onDoseValueChangeHr2 = item => {
    
    setSelectedHr2(item)
  }

  const [selectedMin2, setSelectedMin2] = useState('00');
  const onDoseValueChangeMin2 = item => {
    
    setSelectedMin2(item)
  }

  const [selectedAmPm2, setSelectedAmPm2] = useState('AM');
  const onDoseValueChangeAmPm2 = item => {
    
    setSelectedAmPm2(item)
  }



  const [selectedHr3, setSelectedHr3] = useState('1');
  const onDoseValueChangeHr3 = item => {
    
    setSelectedHr3(item)
  }

  const [selectedMin3, setSelectedMin3] = useState('00');
  const onDoseValueChangeMin3 = item => {
    
    setSelectedMin3(item)
  }

  const [selectedAmPm3, setSelectedAmPm3] = useState('AM');
  const onDoseValueChangeAmPm3 = item => {
    
    setSelectedAmPm3(item)
  }


  const ageData = (min, max) => {
    var minValue = min;
    var ageArray = new Array();
    for (let i = 0; i <= 40; i++) {
      ageArray[i] = minValue;
      minValue++;
    }
    return ageArray.map(String);
  };

  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, margin: 15, flexDirection: "column" }}>

          <View
            style={{ flex: 1.5, flexDirection: "column" }}
          >

          </View>


          <View
            style={{ flex: 7.5, flexDirection: "column", marginBottom: 10 }}
          >

          </View>


          <View
            style={{ flex: 1, flexDirection: "column" }}
          >
            <View style={{
              ...styles.button_container,
              //backgroundColor: 'pink', 
            }}>
            </View>
          </View>

        </View>
      </BaseSafeAreaView>
    </>
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
    //flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MedicineReminder_6;
