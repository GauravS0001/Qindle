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
import TimeAgo from "react-native-timeago";

const Bp = props => {
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

  const [data1, setData1] = useState(120);
  const [data2, setData2] = useState(80);

  let data = [];
  for (let index = 0; index < 300; index++) {
    data.push(index)
  }

  const saveData = () => {
    let formdata = new FormData();
    formdata.append("sbp_high_num", data1)
    formdata.append("dbp_low_number", data2)
    formdata.append("latest_info", 1)
    formdata.append("userid", _user.userDetails._id); //repost
    //formdata.append("unit", 'mg');
    props.saveUserMedicalData(formdata, 'bloodpressureinfo', props.type)
  }

  if (props.active == 'Record') {
    return (
      <>
        <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
          <ScrollView>
            <View style={{ flex: 12, flexDirection: "column", padding: 10, }}>

              <View style={{ flex: 1, flexDirection: "row", }}>
                <Text style={{ flex: 7, fontSize: 18 }}>Blood Pressure</Text>
                <Text>mmHg</Text>
              </View>

              <View style={{ flex: 1, flexDirection: "row", paddingTop: 10 }}>
                <View style={{ flex: 4 }}>
                  <ScrollPicker
                    dataSource={data}
                    selectedIndex={120}
                    renderItem={(data, index) => {
                      return (<Text>
                        {data}
                      </Text>)
                    }}
                    onValueChange={(data, selectedIndex) => {
                      setData1(data)
                    }}
                    wrapperHeight={180}
                    wrapperWidth={150}
                    wrapperColor='#FFFFFF'
                    itemHeight={60}
                    highlightColor='#d8d8d8'
                    highlightBorderWidth={2}
                  />
                </View>
                <View style={{ flex: 2, justifyContent: "center", alignContent: 'center', alignItems: 'center' }}>
                  <Text>/</Text>
                </View>

                <View style={{ flex: 4 }}>
                  <ScrollPicker
                    dataSource={data}
                    selectedIndex={80}
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
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: "row", borderTopColor: '#f2f2f2', borderTopWidth: 1, paddingTop: 20 }}>
                <Text style={{ flex: 7, fontSize: 16 }}>Measurement Details</Text>
              </View>

              <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
                <Text style={{ flex: 7, fontSize: 14 }}>Body Position</Text>
                <Text style={{ fontSize: 14, paddingRight: 10 }}>Select</Text>
              </View>

              <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
                <Text style={{ flex: 7, fontSize: 14 }}>Arm Location</Text>
                <Text style={{ fontSize: 14, paddingRight: 10 }}>Select</Text>
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
  };


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
                        <Text style={{ flex: 1, fontSize: 14 }}>{itemData.item.sbp_high_num}/{itemData.item.dbp_low_number} mmHg</Text>
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
}

const styles = StyleSheet.create({

});


export default Bp;
