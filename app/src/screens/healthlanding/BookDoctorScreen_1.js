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
import MenuTop from '../../components/UI/MenuTopHealth';
import MenuBottom from '../../components/UI/MenuBottomHealth';
import PostCard from '../../components/UI/PostCard';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheet';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheet';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import branch, { BranchEvent } from 'react-native-branch'
import images from '../../../res/images_url';
import FindDoctorCard from '../../components/UI/FindDoctorCard';
import FamousDoctorCard from '../../components/UI/FamousDoctorCard';
import CalendarStrip from 'react-native-calendar-strip';

import DoctorSlot from '../../components/UI/DoctorSlot';
import Close from '../../../res/images/Close.svg';

const BookDoctorScreen_1 = props => {

  let _doctorId = 0;
  let _name = '';
  let _degree = ''
  let _image = ''

  if (props.route.params.from == 'findDoctorCard' || props.route.params.from == 'doctorDetails') {
    _doctorId = props.route.params.item.doctorsData._id
    _name = props.route.params.item.doctorsData.name
    _degree = props.route.params.item.doctorsData.degree
    _image = props.route.params.item.doctorsData.image
  }

  if (props.route.params.from == 'famousDoctor') {
    _doctorId = props.route.params.item._id
    _name = props.route.params.item.name
    _degree = props.route.params.item.degree
    _image = props.route.params.item.image
  }

  //props.route.params.item.doctorsData
  const doctorSchedule = useSelector(
    state => state.health.doctorSchedule,
  );


  const _doctorSlotListFilled = useSelector(
    state => state.health.doctorSlotListFilled,
  );

  useEffect(() => {
    if (_doctorSlotListFilled == true) {
      let day = new Date(selectedDate)
      let da = day.getDay()
      setSelectedSlotList([])
      doctorSchedule.forEach(element => {
        if (element.dayid.toString().trim() == da) {
          setSelectedSlotList(element.schedule)
        }
      });
    }
  }, [_doctorSlotListFilled]);


  const _user = useSelector(state => state.user); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  const dispatch = useDispatch();
  const userOnboardingFullList = useSelector(
    state => state.onboarding,
  );

  useEffect(() => {
    dispatch({
      type: types.GET_DOCTOR_SCHEDULE,
      doctorId: _doctorId
    })


  }, []);

  const addPosts = text => {
    refCreatePostBottomSheet.current.asaraType = "post"
    refCreatePostBottomSheet.current.asaraTypeId = ""
    refCreatePostBottomSheet.current.open()
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const onDateSelected = dateSelected => {

    setSelectedDate(dateSelected)

    let day = new Date(dateSelected)
    let da = day.getDay()
    setSelectedSlotList([])
    doctorSchedule.forEach(element => {
      if (element.dayid.toString().trim() == da) {
        setSelectedSlotList(element.schedule)
      }
    });
  };

  const [selectedSlotList, setSelectedSlotList] = useState([]);
  const [selectedFreinds, setSelectedFreinds] = useState([]);

  const onSelectBg = item => {

    let data = selectedFreinds;
    data.push(item)
    setSelectedFreinds(data)
    let _data = selectedFreinds[selectedFreinds.length - 1];
    props.navigation.navigate('BookDoctorScreen_2', {
      screen: 'BookDoctor_2',
      params: {
        slotData: _data,
        selectedDate: selectedDate,
        _doctorId: _doctorId,
        _name: _name,
        _degree: _degree,
        _image: _image,
        _type: props.route.params.type
      }
    });

  };

  return (
    <>


      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, flexDirection: "column" }}>

          <View
            style={{ flex: 1, flexDirection: "column", backgroundColor: '#055F9B' }}
          >
            <View style={{
              flex: 1,
              marginTop: 15,
              flexDirection: 'row',
            }}>
              <Text
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingLeft: 10,
                  paddingTop: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                Book a Slot
              </Text>
              <View
                style={{
                  flex: .1,
                  flexDirection: 'row',
                  paddingLeft: 10,
                  paddingTop: 16,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack()
                  }
                  }
                >
                  <Close />
                </TouchableOpacity>

              </View>

            </View>

          </View>


          <View
            style={{ flex: 7.5, flexDirection: "column" }}
          >
            <ScrollView>


              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: 'center',
                  alignItems: 'center',
                  //marginBottom: 10
                }}
              >
                <View
                  style={{
                    width: '100%',
                    marginTop: 10,
                    backgroundColor: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                    paddingBottom: 20,
                    paddingTop: 10

                  }}
                >

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row"
                    }}
                  >

                    <View
                      style={{
                        flex: .4,
                        flexDirection: "row",
                        marginLeft: 20,
                      }}
                    >
                      <Image
                        source={{
                          uri: _image
                        }} //props.item.item.icon'
                        style={{ width: 64, height: 64 }}//100%
                      />
                    </View>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                      }}
                    >

                      <Text
                        style={{
                          color: 'black',
                          fontWeight: "bold"
                        }}
                      >
                        {_name}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                        }}
                      >
                        {_degree}
                      </Text>
                    </View>

                  </View>

                </View>

              </View>
              <View
                style={{
                  // borderTopColor:'white',
                  // borderLeftColor: 'white',
                  // borderRightColor: 'white',
                  borderBottomColor: "#f2f2f2",
                  borderWidth: .5,
                }}
              >
              </View>


              {/**
 <Text
                  style={[
                    { fontSize: 10 }
                  ]}
                >
                  {

                    moment(date.date(), "DD-MM-YYYY")
                      .format('MMMM').substr(0, 3)
                  }
                </Text>
 */}

              <CalendarStrip
                scrollable
                style={{ height: 95, }}
                calendarColor={'#f2f2f2'}
                calendarHeaderStyle={{ color: 'black', width: "100%", textAlign: "left", paddingLeft: 20, fontSize: 18 }}
                iconContainer={{ flex: 0.05 }}
                highlightDateNameStyle={{ color: '#000' }}
                highlightDateNumberStyle={{ color: '#000' }}
                onDateSelected={onDateSelected}
                //headerText={"Select Date"}
                dateNameStyle={{ color: "white" }}
                dateNumberStyle={{ color: "white" }}
                dayContainerStyle={{ backgroundColor: "#055F9B", borderRadius: 2, }}
                iconStyle={{ width: 0 }}
                //innerStyle={{}}
                showDate={true}
                showMonth={true}
                showDayName={true}
                showDayNumber={true}
                selectedDate={selectedDate}
                minDate={new Date()}
              //showWeekNumber={true}
              />





              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: 'center',
                  alignItems: 'center',
                  //marginBottom: 10
                }}
              >
                <View
                  style={{
                    width: '100%',
                    marginTop: 10,
                    backgroundColor: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                    paddingBottom: 10,
                    paddingTop: 10

                  }}
                >

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row"
                    }}
                  >

                    <View
                      style={{
                        flex: .01,
                        flexDirection: "row",
                        marginLeft: 20,
                      }}
                    >

                    </View>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                      }}
                    >
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: "bold",
                        }}
                      >
                        {/*Morning*/} ({selectedSlotList.length} Slot)
                      </Text>

                    </View>

                  </View>

                </View>

              </View>
              <ScrollView>
                <FlatList
                  data={selectedSlotList}
                  horizontal={false}
                  keyExtractor={item => item._id}
                  numColumns={2}
                  renderItem={itemData => (
                    <>

                      <DoctorSlot
                        item={itemData.item}
                        onBgSelect={onSelectBg}
                      />

                    </>
                  )}
                />
              </ScrollView>

              {/*
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: 'center',
                  alignItems: 'center',
                  //marginBottom: 10
                }}
              >
                <View
                  style={{
                    width: '100%',
                    marginTop: 10,
                    backgroundColor: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                    paddingBottom: 10,
                    paddingTop: 10

                  }}
                >

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row"
                    }}
                  >

                    <View
                      style={{
                        flex: .01,
                        flexDirection: "row",
                        marginLeft: 20,
                      }}
                    >

                    </View>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                      }}
                    >
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: "bold",
                        }}
                      >
                        Afternoon ({friendsList1.length} Slot)
                      </Text>

                    </View>

                  </View>

                </View>

              </View>
              <FlatList
                data={friendsList1}
                horizontal={false}
                keyExtractor={item => item._id}
                numColumns={4}
                renderItem={itemData => (
                  <>

                    <DoctorSlot
                      item={itemData.item}
                      onBgSelect={onSelectBg}
                    />

                  </>
                )}
              />



              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: 'center',
                  alignItems: 'center',
                  //marginBottom: 10
                }}
              >
                <View
                  style={{
                    width: '100%',
                    marginTop: 10,
                    backgroundColor: '',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                    paddingBottom: 10,
                    paddingTop: 10

                  }}
                >

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row"
                    }}
                  >

                    <View
                      style={{
                        flex: .01,
                        flexDirection: "row",
                        marginLeft: 20,
                      }}
                    >

                    </View>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                      }}
                    >
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: "bold",
                        }}
                      >
                        Evening ({friendsList2.length} Slot)
                      </Text>

                    </View>

                  </View>

                </View>

              </View>
              <FlatList
                data={friendsList2}
                horizontal={false}
                keyExtractor={item => item._id}
                numColumns={4}
                renderItem={itemData => (
                  <>

                    <DoctorSlot
                      item={itemData.item}
                      onBgSelect={onSelectBg}
                    />

                  </>
                )}
              />

*/}



            </ScrollView>

          </View>


          <View
            style={{ flex: 1, flexDirection: "column" }}
          >


          </View>



        </View>
      </BaseSafeAreaView >








    </>
  );
};

const styles = StyleSheet.create({
  done_button: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
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


export default BookDoctorScreen_1;
