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
  ScrollView,
  ToastAndroid,
  Image
} from 'react-native';
import colors from '../../../res/colors';
import MenuTopDevice from '../../components/UI/MenuTopDevice';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import Bp from './track/Bp';
import Walk from './track/Walk';
import Calories from './track/Calories';
import Sugar from './track/Sugar';
import Sleep from './track/Sleep';
import Heart from './track/Heart';
import Oxygen from './track/Oxygen';
import Temperature from './track/Temperature';
import Water from './track/Water';
import Weight from './track/Weight';

const HealthReadingLanding = props => {
  console.log('props', props.route.params.item);

  const [active, setActive] = useState('Record');
  const health = useSelector(
    state => state.health,
  );
  const [title, setTitle] = useState(props.route.params.item);
  const _user = useSelector(state => state.user); //!!state.auth.token
  const dispatch = useDispatch();
  useEffect(() => {
    let endpoint = {
      'Steps': 'stepsinfo',
      'Calories': 'caloriesinfo',
      'Sleep': 'sleepinfo',
      'BP': 'bloodpressureinfo',
      'Sugar': 'sugarinfo',
      'Heart': 'heartrateinfo',
      'Oxygen': 'respiratoryinfo',
      'Temperature': 'temperatureinfo',
      'Water': 'watersinfo',
      'Weight': 'weightinfo',
    }

    dispatch({
      type: types.GET_USER_MEDICAL_DATA,
      userId: _user.userDetails._id,
      endpoint: endpoint[props.route.params.item]
    })

    //console.log('health.userMedicalData', health.userMedicalData)

  }, [health.saveProgress, props.route.params.item]);


  const saveUserMedicalData = (data, endpoint) => {
    dispatch({
      type: types.SAVE_USER_MEDICAL_DATA,
      data,
      endpoint: endpoint
    })
  }

  const renderPage = (item) => {
    if (item == 'Steps') {
      return (
        <Walk active={active} saveUserMedicalData={saveUserMedicalData} type={item} />
      )
    }
    if (item == 'Calories') {
      return (
        <Calories active={active} saveUserMedicalData={saveUserMedicalData} type={item} />
      )
    }
    if (item == 'BP') {
      return (
        <Bp active={active} saveUserMedicalData={saveUserMedicalData} type={item} />
      )
    }

    if (item == 'Sugar') {
      return (
        <Sugar active={active} saveUserMedicalData={saveUserMedicalData} type={item} />
      )
    }
    if (item == 'Sleep') {
      return (
        <Sleep active={active} saveUserMedicalData={saveUserMedicalData} type={item} />
      )
    }
    if (item == 'Heart') {
      return (
        <Heart active={active} saveUserMedicalData={saveUserMedicalData} type={item} />
      )
    }
    if (item == 'Oxygen') {
      return (
        <Oxygen active={active} saveUserMedicalData={saveUserMedicalData} type={item} />
      )
    }
    if (item == 'Temperature') {
      return (
        <Temperature active={active} saveUserMedicalData={saveUserMedicalData} type={item} />
      )
    }
    if (item == 'Water') {
      return (
        <Water active={active} saveUserMedicalData={saveUserMedicalData} type={item} />
      )
    }
    if (item == 'Weight') {
      return (
        <Weight active={active} saveUserMedicalData={saveUserMedicalData} type={item} />
      )
    }

  }
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <MenuTopDevice title={title} setActive={setActive} />
        {health.saveProgress == false ? renderPage(props.route.params.item) : <><Text>Updating ...</Text></>}
      </BaseSafeAreaView >
    </>
  );
};

const styles = StyleSheet.create({

});

export default HealthReadingLanding;
