import React, { useState } from 'react';
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
  Button,
  ScrollView
} from 'react-native';
import { Icon } from 'react-native-vector-icons/icon';
import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import MyCommunityHead from '../../components/UI/MyCommunityHead';
import TimeAgo from 'react-native-timeago';
import Like from '../../../res/images/health/like.svg';
import LocationDoc from '../../../res/images/health/location_doc.svg';
import DocShiftTime from '../../../res/images/health/doc_shift_time.svg';
import Dropdown from '../../../res/images/health/Dropdown.svg';
const FindDoctorCard = props => {
  let members = 0;
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: props.backgroundColor }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('DoctorDetails', {
              screen: 'DoctorDetails',
              params: {
                item: props.item.item,
                from: 'findDoctorCard'
              }
            })
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 25
            }}
          >
            <View
              style={{
                width: '90%',
                marginTop: 20,
                backgroundColor: '',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff', //
                borderRadius: 15,
                paddingBottom: 20,
                paddingTop: 20

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
                      uri: props.item.item.doctorsData.image
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


                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}
                  >



                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >

                      <Like />
                      <Text style={{
                        textAlign: 'right',
                        textAlign: 'center',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        color: 'green',
                        fontSize: 16,
                        opacity: 1,
                        letterSpacing: 0,
                        lineHeight: 19,
                        marginHorizontal: 10
                      }}>96 %</Text>

                    </View>

                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        //backgroundColor: "green",
                        flex: 2,
                        borderWidth: 2,
                        borderBottomColor: "white",
                        borderRightColor: "white",
                        borderTopColor: "white",
                        borderLeftColor: "#f2f2f2"
                      }}
                    >



                      <Text style={{
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        color: 'green',
                        fontSize: 16,
                        opacity: 1,
                        letterSpacing: 0,
                        lineHeight: 19,
                        marginHorizontal: 10
                      }}>9 Years Exp</Text>


                    </View>


                  </View>




                  <Text
                    style={{
                      color: 'black',
                      fontWeight: "bold"
                    }}
                  >
                    {props.item.item.doctorsData.name}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                    }}
                  >
                    {props.item.item.doctorsData.degree}
                  </Text>
                </View>

              </View>


              <View
                style={{
                  flex: 1,
                  flexDirection: "row"
                }}
              >

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    marginLeft: 20,
                    marginTop: 10,
                    marginBottom: 20

                  }}
                >

                  <View
                    style={{
                      backgroundColor: '#f2f2f2',
                      borderRadius: 8,
                      margin: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '94%',
                      padding:10
                    }}
                  >

                    <Text style={{
                      textAlign: 'right',
                      textAlign: 'center',
                      fontStyle: 'normal',
                      color: 'black',
                      fontSize: 16,
                      opacity: 1,
                      letterSpacing: 0,
                      lineHeight: 19,
                      marginHorizontal: 10
                    }}>Info about doctor</Text>

                  </View>

                </View>



              </View>


              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  paddingTop: 20,
                  paddingBottom: 20,
                  borderWidth: 2,
                  borderTopColor: '#f2f2f2',
                  borderBottomColor: '#f2f2f2',
                  borderRightColor: "white",
                  borderLeftColor: "white"
                }}
              >

                <View
                  style={{
                    flex: 6,
                    flexDirection: "row",
                    marginLeft: 20,
                    borderWidth: 2,
                    borderTopColor: 'white',
                    borderBottomColor: 'white',
                    borderRightColor: "#f2f2f2",
                    borderLeftColor: "white",
                  }}
                >

                  <LocationDoc
                    style={{ padding: 5, marginTop: 3, marginRight: 5 }}
                  />

                  <Text
                    style={{
                      color: 'black',
                    }}
                  >
                    Hospital name
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    paddingLeft: 10

                  }}
                >

                  <Text
                    style={{
                      color: 'black',
                      fontWeight: "bold"
                    }}
                  >
                    3 Km
                  </Text>

                </View>

              </View>






              <View
                style={{
                  flex: 1,
                  flexDirection: "row"
                }}
              >

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    marginLeft: 20,
                  }}
                >


                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      marginTop: 15,
                      marginBottom: 10

                    }}
                  >



                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <DocShiftTime />
                    </View>

                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flex: 6,
                      }}
                    >



                      <Text style={{
                        textAlign: 'right',
                        textAlign: 'center',
                        fontStyle: 'normal',
                        color: '#438CEC',
                        fontSize: 14,
                        opacity: 1,
                        letterSpacing: 0,
                        lineHeight: 19,
                        marginHorizontal: 10
                      }}>Sun, 18th Jan | 08.00am - 10.00am</Text>


                    </View>

                    <View
                      style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <Dropdown />
                    </View>

                  </View>


                  {/*
                  <View
                    style={{
                      margin: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 30,
                      marginTop: 10,
                      marginLeft: 10
                    }}
                  >

                    <LocationDoc
                      style={{ padding: 5, marginTop: 3, marginRight: 5 }}
                    />

                    <Text style={{
                      textAlign: 'right',
                      textAlign: 'center',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      color: '#438CEC',
                      fontSize: 16,
                      opacity: 1,
                      letterSpacing: 0,
                      lineHeight: 19,
                      marginHorizontal: 10
                    }}>Sun, 18th Jan | 08.00am - 10.00am</Text>

                  </View>

*/}
                </View>



              </View>



              <View
                style={{
                  flex: 1,
                  flexDirection: 'row'
                }}
              >



                <View
                  style={{
                    borderColor: '#055F9B',
                    borderWidth: 1,
                    borderRadius: 8,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    margin: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 30,
                    marginTop: 10,
                    marginLeft: 20
                  }}
                >

                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('BookDoctorScreen_1', {
                        screen: 'BookDoctor_1',
                        params: {
                          type: 'video',
                          from: 'findDoctorCard',
                          item: props.item.item
                        }
                      })
                    }}>

                    <Text style={{
                      textAlign: 'right',
                      textAlign: 'center',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      color: '#055F9B',
                      fontSize: 16,
                      opacity: 1,
                      letterSpacing: 0,
                      lineHeight: 19,
                      marginHorizontal: 10
                    }}>Book Video Call</Text>
                  </TouchableOpacity>

                </View>

                <View
                  style={{
                    backgroundColor: '#055F9B',
                    borderColor: 'white',
                    borderWidth: 1,
                    borderRadius: 8,
                    margin: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 30,
                    marginTop: 10,
                    marginLeft: 10
                  }}
                >

                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('BookDoctorScreen_1', {
                        screen: 'BookDoctor_1',
                        params: {
                          type: 'physical',
                          from: 'findDoctorCard',
                          item: props.item.item
                        }
                      })
                    }}>

                    <Text style={{
                      textAlign: 'right',
                      textAlign: 'center',
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: 16,
                      opacity: 1,
                      letterSpacing: 0,
                      lineHeight: 19,
                      marginHorizontal: 10
                    }}>Book Appointment</Text>
                  </TouchableOpacity>

                </View>


              </View>





            </View>

          </View>
        </TouchableOpacity>


      </BaseSafeAreaView>
    </>
  );

}

const styles = StyleSheet.create({
  pic: {
    width: 40,
    height: 40,
  },
  button: {
    flex: 1,
    //backgroundColor: '#055F9B',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 30
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
    height: 240
  },
  bg_color_dots: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  button_container: {
    flex: 2,
    flexDirection: 'row',
    //alignItems: 'center',
  },
  done_button: {
    backgroundColor: '#055F9B',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
});

export default FindDoctorCard;
