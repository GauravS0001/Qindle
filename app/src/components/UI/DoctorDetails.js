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
import AutoHeightImage from 'react-native-auto-height-image';
import Close from '../../../res/images/Close.svg';
import Like from '../../../res/images/health/like.svg';
import Report from '../../../res/images/Report.svg';
import Specialization from '../../components/UI/Specialization';
import Call from '../../../res/images/health/call.svg';
import AddReview from '../../../res/images/health/Add_Review.svg';
import Share from '../../../res/images/health/Share.svg';
import Favourite from '../../../res/images/health/Favourite.svg';
import LocationDoc from '../../../res/images/health/location_doc.svg';
import DocShiftTime from '../../../res/images/health/doc_shift_time.svg';
import Dropdown from '../../../res/images/health/Dropdown.svg';


const DoctorDetails = props => {
  let members = 0;
  if (props.item[0] == undefined) {
    return (
      <>
      </>
    )
  }

  return (
    <>

      <View
        style={{
          width: '100%',
          backgroundColor: 'white',//#055F9B
          paddingBottom: 20
        }}
      >


        <View
          style={{
            flex: 1,
            flexDirection: 'row'
          }}
        >



          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 8,
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
              height: 90,
            }}
          >

            <View
              style={{
                backgroundColor: 'black',
                opacity: .7
              }}
            >
              <AutoHeightImage
                width={400}
                source={{ uri: props.item[0].doctorsData.image }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 5,
                left: 5,
                opacity: 1
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
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingBottom: 20
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row'
          }}
        >

          <Like
            style={{
              flex: .2,
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 12,
            }}
          />
          <Text
            style={{
              flex: .2,
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 12,
              fontWeight: 'bold',
              fontSize: 16,
              marginBottom: 10,
              color: 'green'
            }}
          > {props.item[0].doctorsData.rating} %</Text>

          <Text
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 12,
              fontWeight: 'bold',
              fontSize: 16,
              marginBottom: 10,
              color: 'green'
            }}
          > 222 Reviews</Text>



        </View>


        <Text
          style={{
            marginTop: 10,
            marginLeft: 12,
            flex: 1,
            flexDirection: 'row',
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >{props.item[0].doctorsData.name}</Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 12,
            flex: 1,
            flexDirection: 'row',
          }}
        >{props.item[0].doctorsData.degree}</Text>

        <View
          style={{
            width: '100%',
            marginTop: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}>
          <Text
            style={{
              width: '80%',
              backgroundColor: '#f2f2f2',
              borderRadius: 8,
              padding: 10
            }}
          >{props.item[0].doctorsData.description}</Text>
        </View>











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


            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text style={{
                textAlign: 'left',
                fontStyle: 'normal',
                color: '#444',
                fontSize: 16,
                opacity: 1,
                letterSpacing: 0,
                lineHeight: 19,
                marginHorizontal: 10
              }}>Time to Visit</Text>

              <View
                style={{
                  flexDirection: "row"
                }}>
                <Text style={{
                  textAlign: 'right',
                  textAlign: 'center',
                  fontStyle: 'normal',
                  color: 'orange',
                  fontSize: 17,
                  opacity: 1,
                  letterSpacing: 0,
                  lineHeight: 19,
                  marginHorizontal: 10
                }}>Closing Soon</Text>
                <Text style={{
                  textAlign: 'right',
                  textAlign: 'center',
                  fontStyle: 'normal',
                  color: '#055F9B',
                  fontSize: 17,
                  opacity: 1,
                  letterSpacing: 0,
                  lineHeight: 19,
                  marginHorizontal: 10
                }}>- 1PM - Reopens 5PM</Text>

                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Dropdown />
                </View>


              </View>
            </View>

          </View>
{/*
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
*/}
        </View>






      </View>


      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'white',
          marginTop: 0,
          borderTopColor: '#CCC',
          borderWidth: 5,
          borderRightColor: '#f2f2f2',
          borderLeftColor: '#f2f2f2',
          borderBottomColor: '#f2f2f2',
          paddingBottom: 10,
          paddingTop: 10
        }}
      >


        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}
        >
          <Favourite
            style={{
              flex: .2,
              marginTop: 10,
              marginLeft: 12,
            }}
          />
          <Text
            style={{
              flex: .2,
              marginTop: 10,
              marginLeft: 12,
              fontSize: 16,
              marginBottom: 10,
              color: '#000'
            }}
          > Favourite</Text>
        </View>


        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}
        >
          <Share
            style={{
              flex: .2,
              marginTop: 10,
              marginLeft: 12,
            }}
          />
          <Text
            style={{
              flex: .2,
              marginTop: 10,
              marginLeft: 12,
              fontSize: 16,
              marginBottom: 10,
              color: '#000'
            }}
          > Share</Text>
        </View>



        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}
        >
          <AddReview
            style={{
              flex: .2,
              marginTop: 10,
              marginLeft: 12,
            }}
          />
          <Text
            style={{
              flex: .2,
              marginTop: 10,
              marginLeft: 12,
              fontSize: 16,
              marginBottom: 10,
              color: '#000'
            }}
          > Add review</Text>
        </View>


        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}
        >
          <Call
            style={{
              flex: .2,
              marginTop: 10,
              marginLeft: 12,
            }}
          />
          <Text
            style={{
              flex: .2,
              marginTop: 10,
              marginLeft: 12,
              fontSize: 16,
              marginBottom: 10,
              color: '#000'
            }}
          > Call</Text>
        </View>




      </View>





      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 0,
          borderTopColor: '#CCC',
          borderWidth: 5,
          borderRightColor: '#f2f2f2',
          borderLeftColor: '#f2f2f2',
          borderBottomColor: '#f2f2f2',
          paddingBottom: 20
        }}
      >

        <View
          style={{
            flex: 1,
            flexDirection: 'row'
          }}
        >


          <Text
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 12,
              fontWeight: 'bold',
              fontSize: 16,
              marginBottom: 10,
              color: '#000'
            }}
          > Specialization </Text>

        </View>



        <FlatList
          data={props.item[0].specialityData}
          //numColumns={2}
          keyExtractor={item => item._id}
          horizontal={true}
          renderItem={itemData => (
            <Specialization
              item={itemData}
            />

          )}
        />
      </View>















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

export default DoctorDetails;
