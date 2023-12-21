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
import colors from '../../../../res/colors';
import MenuTop from '../../../components/UI/MenuTopHealth';
import BaseSafeAreaView from '../../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../startup/types';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import CheckBox from 'react-native-check-box'
import RadioGroup from 'react-native-radio-buttons-group';
import TimeAgo from "react-native-timeago";
const Sugar = props => {

  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Glucometer',
      value: 'Glucometer',
      unit: 'mg/dl',
      selected: true
    },
    {
      id: '2',
      label: 'HbA1C',
      value: 'HbA1C',
      unit: 'mmol/L',
      selected: false
    },
    {
      id: '3',
      label: 'CGM',
      value: 'CGM',
      unit: 'continous',
      selected: false
    }
  ]);

  const [visibleView, setVisibleView] = useState(1)

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    radioButtonsArray.forEach(element => {
      if (element.selected) {
        setVisibleView(element.id)
        setLabel(element.unit)
      }
    });

  }

  const health = useSelector(
    state => state.health,
  );

  const _user = useSelector(state => state.user); //!!state.auth.token
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({
    //   type: types.DOCTOR_FAMOUS_DOCTOR,
    //   userId: _user.userDetails._id
    // })
  }, []);

  let userPost = ['Fasting', 'Random', 'Before', 'After', 'Breakfast', 'Lunch', 'Snack', 'Dinner']

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [label, setLabel] = useState('mg/dl');


  let data = [];
  for (let index = 0; index < 600; index++) {
    data.push(index)
  }

  let dataHb = [];
  for (let index = 0; index < 30; index++) {
    dataHb.push(index)
  }


  let dataHb2 = [];
  for (let index = 0; index < 10; index++) {
    dataHb2.push(index)
  }
  const [data2, setData2] = useState(80);
  const [data2b, setData2b] = useState(0);

  const saveData = () => {
    let _data = data2
    if (label == 'HbA1C') {
      _data = data2 + '.' + data2b;
    }
    let formdata = new FormData();
    formdata.append("sugarlevel", _data)
    formdata.append("latest_info", 1)
    formdata.append("userid", _user.userDetails._id); //repost
    formdata.append("unit", label);
    props.saveUserMedicalData(formdata, 'sugarinfo', props.type)
  }
  if (props.active == 'Record') {
    return (
      <>
        <BaseSafeAreaView style={{ backgroundColor: 'white' }}>
          <ScrollView>
            <View style={{ flex: 10, flexDirection: "column", padding: 10, }}>

              <View style={{ flex: 1, flexDirection: "row", }}>
                <Text style={{ flex: 7, fontSize: 18 }}>Blood Glucose</Text>
                <Text>{label}</Text>
              </View>

              <View style={{ flex: 1, flexDirection: "row", paddingTop: 10 }}>

                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={onPressRadioButton}
                  layout='row'
                />

                {/* <CheckBox 
                  style={{ flex: 1, padding: 10 }}
                  onClick={() => {
                    setIsChecked(true)
                    setIsChecked2(false)
                    setIsChecked3(false)
                  }}
                  isChecked={isChecked}
                  rightText={"Glucometer"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  onClick={() => {
                    setIsChecked(false);
                    setIsChecked2(true)
                    setIsChecked3(false)
                  }}
                  isChecked={isChecked2}
                  rightText={"HbA1C"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  onClick={() => {
                    setIsChecked(false);
                    setIsChecked2(false)
                    setIsChecked3(true)
                  }}
                  isChecked={isChecked3}
                  rightText={"CGM"}
                /> */}

              </View>

              <View style={{ flex: 1, flexDirection: "row", paddingTop: 10, alignContent: "center", justifyContent: 'center', alignItems: "center", alignSelf: "center", }}>

                {visibleView == 1 &&

                  <ScrollPicker
                    dataSource={data}
                    selectedIndex={110}
                    renderItem={(data, index) => {
                      return (<Text>
                        {data}
                      </Text>)
                    }}
                    onValueChange={(data, selectedIndex) => {
                      setData2(data)
                    }}
                    wrapperHeight={180}
                    wrapperWidth={150}
                    wrapperColor='#FFFFFF'
                    itemHeight={60}
                    highlightColor='#d8d8d8'
                    highlightBorderWidth={2}
                  />
                }
                {visibleView == 2 &&

                  <>
                    <ScrollPicker
                      dataSource={dataHb}
                      selectedIndex={6}
                      renderItem={(data, index) => {
                        return (<Text>
                          {data}
                        </Text>)
                      }}
                      onValueChange={(data, selectedIndex) => {
                        setData2(data)
                      }}
                      wrapperHeight={180}
                      wrapperWidth={150}
                      wrapperColor='#FFFFFF'
                      itemHeight={60}
                      highlightColor='#d8d8d8'
                      highlightBorderWidth={2}
                    />

                    <ScrollPicker
                      dataSource={dataHb2}
                      selectedIndex={0}
                      renderItem={(data, index) => {
                        return (<Text>
                          {data}
                        </Text>)
                      }}
                      onValueChange={(data, selectedIndex) => {
                        setData2b(data)
                      }}
                      wrapperHeight={180}
                      wrapperWidth={150}
                      wrapperColor='#FFFFFF'
                      itemHeight={60}
                      highlightColor='#d8d8d8'
                      highlightBorderWidth={2}
                    />
                  </>
                }

                {visibleView == 3 &&
                  <TextInput

                    style={{ width: '92%', color: 'black', borderBottomColor: '#f2f2f2', borderBottomWidth: 1 }}
                    placeholder="Continous  ..."
                    autoFocus={true}
                    onChangeText={(text) => { setData2(text) }}
                  />
                }
              </View>

              <View style={{ flex: 1, flexDirection: "row", borderTopColor: '#f2f2f2', borderTopWidth: 1, paddingTop: 20 }}>
                <Text style={{ flex: 7, fontSize: 16 }}>Measure Time</Text>
              </View>

              <View style={{ flex: 1, flexDirection: "row", paddingTop: 10 }}>

                <FlatList
                  data={userPost}
                  numColumns={5}
                  keyExtractor={item => item._id}
                  horizontal={false}
                  renderItem={itemData => (
                    <>
                      <TouchableOpacity
                        onPress={() => {

                        }}
                      >
                        <Text style={{ fontSize: 14, margin: 5, borderWidth: 1, borderRadius: 10, borderColor: '#f2f2f2', padding: 10 }}>{itemData.item}</Text>
                      </TouchableOpacity>
                    </>
                  )}
                />

              </View>

            </View>
            <View style={{ flex: 2, flexDirection: "column", padding: 10, }}>
              <TouchableOpacity onPress={saveData}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#055F9B',
                    borderRadius: 8,
                    margin: 5,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 45,
                  }}
                >


                  <Text style={{
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 16,
                    opacity: 1,
                    letterSpacing: 0,
                    lineHeight: 19,
                    color: colors.white,
                  }}>Submit Data</Text>

                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </BaseSafeAreaView >
      </>
    );
  }
  if (props.active == 'View History') {
    return (
      <>
        <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
          <ScrollView>
            <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
              <View style={{ flex: 1, flexDirection: "row", }}>
                <Text style={{ flex: 7, fontSize: 18 }}>History</Text>
                <Text></Text>
              </View>
              <View style={{ flex: 1, flexDirection: "row", paddingTop: 10 }}>

                <FlatList
                  data={health.userMedicalData}
                  keyExtractor={item => item._id}
                  renderItem={itemData => (
                    <>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TimeAgo style={{ flex: .5 }} time={itemData.item.created} />
                        <Text style={{ flex: 1, fontSize: 14 }}>{itemData.item.sugarlevel} {itemData.item.unit}</Text>
                      </View>
                    </>
                  )}
                />

              </View>
            </View>
          </ScrollView>
        </BaseSafeAreaView>
      </>
    );
  };


  if (props.active == 'Consult Doctor') {
    return (
      <>
        <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
          <ScrollView>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text>Consult Doctor</Text>
            </View>
          </ScrollView>
        </BaseSafeAreaView>
      </>
    );
  };
};

const styles = StyleSheet.create({

});


export default Sugar;
