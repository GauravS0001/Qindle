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
  ToastAndroid,
  Image
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
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import {setMedicineReminder} from './reminderSaga'
const MedicineReminder_6 = props => {  

  const dispatch = useDispatch();

  const _user = useSelector(state => state.user); //!!state.auth.token
  const CATEGORY = useSelector(state => state.REDUCER_MED.medicineCategory)
  const NAME = useSelector(state => state.REDUCER_MED.medicineName)
  const REASON = useSelector(state => state.REDUCER_MED.medicineReason)
  const INTERVAL = useSelector(state => state.REDUCER_MED.medicineInterval)

  


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

  //const friendsList = useSelector(
    //state => state.userPost.userFriends,
  //);

  const [selectedFreinds, setSelectedFreinds] = useState([]);


  /*const onSelectBg = item => {
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

  //};
    
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
    left: 55}}>Select Dose</Text>

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
        top: 17,
        width: "80%"
        }}>What are dosage timings?</Text>
    </View>

    <View style={{
      height: "70%", 
      width: "100%", 
      backgroundColor: "white", 
      top: -35, 
      borderTopRightRadius: 15, 
      borderTopLeftRadius: 15}}>

<View
            style={{ flex: 7.5, flexDirection: "column", marginBottom: 10 }}
          >
            <ScrollView>


              {
                (
                  INTERVAL == 'Once Daily' ||
                  INTERVAL == 'Twice Daily' ||
                  INTERVAL == '3 times a day'
                )
                &&
                <View>
                  <View style={{
                    ...styles.textareaWithBackground, marginTop: 10, flex: .1,
                    // backgroundColor: 'pink'
                  }}>
                    <Text style={{left: 20, fontWeight: 'bold', fontSize: 15.5, top: 4}}>When do you take your first dose?</Text>
                  </View>

                  

                  <View style={{
                    ...styles.bg_color_dots, flex: 1,
                    width: '100%',
                    marginLeft: '-2%'
                    
                  }}>
                      

                    <Picker
                      style={{
                        flex: 1, backgroundColor: 'white',
                      }}
                      textSize={20}
                      itemSpace={30}
                      selectedValue={selectedHr}
                      //pickerData={ageData(1931, 1971)}
                      pickerData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                      // onboardingQuestionsList[questionIdCount].min or max
                      onValueChange={onDoseValueChangeHr}
                    />
                    <Picker
                      style={{
                        flex: 1, backgroundColor: 'white',
                      }}
                      //textColor={colors.picker_value}
                      textSize={20}
                      itemSpace={30}
                      // style={{backgroundColor: '#FAFAFA'}}
                      // selectedValue={onboardingState.inputValues.birthYear.toString()}
                      //pickerData={ageData(1931, 1971)}
                      selectedValue={selectedMin}
                      pickerData={['00', '15', '30', '45']}
                      // onboardingQuestionsList[questionIdCount].min or max
                      onValueChange={onDoseValueChangeMin}
                    />

                    <Picker
                      style={{
                        flex: 1, backgroundColor: 'white',
                      }}
                      //textColor={colors.picker_value}
                      textSize={20}
                      itemSpace={30}
                      // style={{backgroundColor: '#FAFAFA'}}
                      // selectedValue={onboardingState.inputValues.birthYear.toString()}
                      //pickerData={ageData(1931, 1971)}
                      selectedValue={selectedAmPm}
                      pickerData={['AM', 'PM']}
                      // onboardingQuestionsList[questionIdCount].min or max
                      onValueChange={onDoseValueChangeAmPm}
                    />
                    {/*
            <FlatList
              data={friendsList}
              horizontal={false}
              keyExtractor={item => item._id}
              numColumns={1}
              renderItem={itemData => (
                <>

                  <MedicineForm
                    item={itemData.item}
                    onBgSelect={onSelectBg}
                  />

                </>
              )}
            />
            */}
                  </View>

                </View>
              }

              {
                (
                 INTERVAL == 'Twice Daily' ||
                 INTERVAL == '3 times a day'
                )
                &&
                <View>
                  <View style={{
                    ...styles.textareaWithBackground, marginTop: 10, flex: .1,
                    // backgroundColor: 'pink'
                  }}>
                    <Text style={{left: 20, fontWeight: 'bold', fontSize: 15.5, top: 4}}>When do you take your second dose?</Text>
                  </View>

                  <View style={{
                    ...styles.bg_color_dots, flex: 1,
                    width: '80%',
                    marginLeft: '10%'

                  }}>


                    <Picker
                      style={{
                        flex: 1, backgroundColor: 'white',
                      }}
                      textSize={20}
                      itemSpace={30}
                      selectedValue={selectedHr2}
                      //pickerData={ageData(1931, 1971)}
                      pickerData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                      // onboardingQuestionsList[questionIdCount].min or max
                      onValueChange={onDoseValueChangeHr2}
                    />
                    <Picker
                      style={{
                        flex: 1, backgroundColor: 'white',
                      }}
                      //textColor={colors.picker_value}
                      textSize={20}
                      itemSpace={30}
                      // style={{backgroundColor: '#FAFAFA'}}
                      // selectedValue={onboardingState.inputValues.birthYear.toString()}
                      //pickerData={ageData(1931, 1971)}
                      selectedValue={selectedMin2}
                      pickerData={['00', '15', '30', '45']}
                      // onboardingQuestionsList[questionIdCount].min or max
                      onValueChange={onDoseValueChangeMin2}
                    />

                    <Picker
                      style={{
                        flex: 1, backgroundColor: 'white',
                      }}
                      //textColor={colors.picker_value}
                      textSize={20}
                      itemSpace={30}
                      // style={{backgroundColor: '#FAFAFA'}}
                      // selectedValue={onboardingState.inputValues.birthYear.toString()}
                      //pickerData={ageData(1931, 1971)}
                      selectedValue={selectedAmPm2}
                      pickerData={['AM', 'PM']}
                      // onboardingQuestionsList[questionIdCount].min or max
                      onValueChange={onDoseValueChangeAmPm2}
                    />
                    {/*
            <FlatList
              data={friendsList}
              horizontal={false}
              keyExtractor={item => item._id}
              numColumns={1}
              renderItem={itemData => (
                <>

                  <MedicineForm
                    item={itemData.item}
                    onBgSelect={onSelectBg}
                  />

                </>
              )}
            />
            */}
                  </View>

                </View>
              }


              {
                INTERVAL == '3 times a day'
                &&
                <View>
                  <View style={{
                    ...styles.textareaWithBackground, marginTop: 10, flex: .1,
                    // backgroundColor: 'pink'
                  }}>
                    <Text style={{left: 20, fontWeight: 'bold', fontSize: 15.5, top: 4}}>When do you take your third dose?</Text>
                  </View>

                  <View style={{
                    ...styles.bg_color_dots, flex: 1,
                    width: '80%',
                    marginLeft: '10%'
                  }}>


                    <Picker
                      style={{
                        flex: 1, backgroundColor: 'white',
                      }}
                      textSize={20}
                      itemSpace={30}
                      selectedValue={selectedHr3}
                      //pickerData={ageData(1931, 1971)}
                      pickerData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                      // onboardingQuestionsList[questionIdCount].min or max
                      onValueChange={onDoseValueChangeHr3}
                    />
                    <Picker
                      style={{
                        flex: 1, backgroundColor: 'white',
                      }}
                      //textColor={colors.picker_value}
                      textSize={20}
                      itemSpace={30}
                      // style={{backgroundColor: '#FAFAFA'}}
                      // selectedValue={onboardingState.inputValues.birthYear.toString()}
                      //pickerData={ageData(1931, 1971)}
                      selectedValue={selectedMin3}
                      pickerData={['00', '15', '30', '45']}
                      // onboardingQuestionsList[questionIdCount].min or max
                      onValueChange={onDoseValueChangeMin3}
                    />

                    <Picker
                      style={{
                        flex: 1, backgroundColor: 'white',
                      }}
                      //textColor={colors.picker_value}
                      textSize={20}
                      itemSpace={30}
                      // style={{backgroundColor: '#FAFAFA'}}
                      // selectedValue={onboardingState.inputValues.birthYear.toString()}
                      //pickerData={ageData(1931, 1971)}
                      selectedValue={selectedAmPm3}
                      pickerData={['AM', 'PM']}
                      // onboardingQuestionsList[questionIdCount].min or max
                      onValueChange={onDoseValueChangeAmPm3}
                    />
                    {/*
            <FlatList
              data={friendsList}
              horizontal={false}
              keyExtractor={item => item._id}
              numColumns={1}
              renderItem={itemData => (
                <>

                  <MedicineForm
                    item={itemData.item}
                    onBgSelect={onSelectBg}
                  />

                </>
              )}
            />
            */}
                  </View>

                </View>
              }


              {
                INTERVAL != 'Once Daily' &&
                INTERVAL != 'Twice Daily' &&
                INTERVAL != '3 times a day'
                &&
                <View>
                  <View style={{
                    ...styles.textareaWithBackground, marginTop: 10, flex: .1,
                    // backgroundColor: 'pink'
                  }}>
                    <Text> All set for reminder</Text>
                  </View>
                </View>
              }

            </ScrollView>
          </View>

    </View>

    <View style={{height: 70, width: "100%", backgroundColor: "white", top: -40, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={{height: 45, width: "90%", backgroundColor: "#055F9B", borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}
       onPress={() => {

        let _time = '00:00_AM'
        let _time2 = '00:00_AM'
        let _time3 = '00:00_AM'

        try {
          _time = selectedHr + ':' + selectedMin + '_' + selectedAmPm
        } catch (error) {

        }
        try {
          _time2 = selectedHr2 + ':' + selectedMin2 + '_' + selectedAmPm2

        } catch (error) {

        }
        try {
          _time3 = selectedHr3 + ':' + selectedMin3 + '_' + selectedAmPm3

        } catch (error) {

        }

        dispatch({
          type: types.SET_MEDICINE_REMINDER,
          userId: _user.userDetails._id,
          medicineName: NAME,
          medicineCategory: CATEGORY,
          medicineFor: REASON,
          frequency: INTERVAL,
          _time: _time,
          _time2: _time2,
          _time3: _time3
        })


       
      }}
      >
        <Text style={{color: "white", fontWeight: 'bold', fontSize: 17}}>SET REMINDER</Text>
      </TouchableOpacity>
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
    //flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MedicineReminder_6;
