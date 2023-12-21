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
import RNListSlider from 'react-native-list-slider';
import TimeAgo from "react-native-timeago";

const Oxygen = props => {

  const health = useSelector(
    state => state.health,
  );

  const [value, setValue] = useState(94);
  const _user = useSelector(state => state.user); //!!state.auth.token
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({
    //   type: types.DOCTOR_FAMOUS_DOCTOR,
    //   userId: _user.userDetails._id
    // })

  }, []);

  const saveData = () => {
    let formdata = new FormData();
    formdata.append("respiratoryratelevel", value)
    formdata.append("latest_info", 1)
    formdata.append("userid", _user.userDetails._id); //repost
    formdata.append("unit", '%');
    props.saveUserMedicalData(formdata, 'respiratoryinfo', props.type)
  }


  if (props.active == 'Record') {

    return (
      <>
        <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
          <ScrollView>
            <View style={{ flex: 12, flexDirection: "column", padding: 10, }}>

              <Text></Text>
              <View style={{ flex: 1, flexDirection: "row", }}>
                <Text style={{ flex: 7, fontSize: 18 }}>Oxygen saturation unit - percent (%)</Text>
                <Text></Text>
              </View>

              <View style={{ flex: 1, flexDirection: "row", }}>
                <Text style={{ flex: 7, fontSize: 16 }}>Enter your reading</Text>
              </View>
              <View
                style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
              >
                <Text> {value}%</Text>
              </View>
              <RNListSlider
                value={value}
                onValueChange={setValue}
                multiplicity="0.2"
                renderItem={(element) => {
                  return (
                    <Text>
                      {JSON.stringify(element)}
                    </Text>
                  )
                }}
              />


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
                        <Text style={{ flex: 1, fontSize: 14 }}>{itemData.item.respiratoryratelevel} {itemData.item.unit}</Text>
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


export default Oxygen;
