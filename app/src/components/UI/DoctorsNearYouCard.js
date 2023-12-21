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

const DoctorsNearYouCard = props => {
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
                from: 'doctorNearYou'
              }
            })
          }}>







          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: 'center',
              alignItems: 'center',
              width: '96%',
              backgroundColor: '#fff',
              marginLeft: '2%',
              marginRight: '2%',
            }}
          >
            <View
              style={{
                width: '90%',
                backgroundColor: '',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff', //
                paddingBottom: 20,
                borderWidth: 2,
                borderBottomColor: '#f2f2f2',
                borderLeftColor: 'white',
                borderRightColor: 'white',
                borderTopColor: 'white',
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
                    source={{ uri: props.item.item.doctorsData.image }}
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
                        flex:1,
                        flexDirection:"row",
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
                        flex:2,
                        borderWidth:2,
                        borderBottomColor:"white"  ,
                        borderRightColor:"white",
                        borderTopColor:"white",
                        borderLeftColor:"#f2f2f2"
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

export default DoctorsNearYouCard;
