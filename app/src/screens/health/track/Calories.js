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
import Slider from '@react-native-community/slider';
import TimeAgo from "react-native-timeago";

const Calories = props => {

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
    //caloriesinfo
  }, []);
  const [value, setValue] = useState(450);
  const saveData = () => {
    let formdata = new FormData();
    formdata.append("calories", value)
    formdata.append("latest_info", 1)
    formdata.append("userid", _user.userDetails._id); //repost
    formdata.append("unit", 'Kcal');
    props.saveUserMedicalData(formdata, 'caloriesinfo', props.type)
  }

  if (props.active == 'Record') {
    return (
      <>


        <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
          <ScrollView>
            <View style={{ flex: 12, flexDirection: "column", padding: 10, }}>

              <View style={{ flex: 1, flexDirection: "row", }}>
                <Text style={{ flex: 7, fontSize: 18 }}>Calories</Text>
                <Text>Kcal</Text>
              </View>

              <View style={{ flex: 1, flexDirection: "row", paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}>
                <Text style={{ flex: 7, fontSize: 18 }}>100</Text>
                <Text>10000</Text>
              </View>
              <View style={{ flex: 1, flexDirection: "row", paddingLeft: 30, paddingRight: 30 }}>

                <Slider
                  style={{ width: '100%', height: 40 }}
                  minimumValue={100}
                  maximumValue={10000}
                  minimumTrackTintColor="#000000"
                  maximumTrackTintColor="#000000"
                  value={value}
                  step={50}
                  onValueChange={(value) => setValue(value)}
                />
              </View>
              <View style={{ flex: 1, marginTop: 20, flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 16 }}>{value} Kcal</Text>
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
        </BaseSafeAreaView>


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
                        <Text style={{ flex: 1, fontSize: 14 }}>{itemData.item.calories} {itemData.item.unit}</Text>
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


export default Calories;
