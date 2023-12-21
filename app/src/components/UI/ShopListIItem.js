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
  Image,
  Button,
  ScrollView
} from 'react-native';
import { Icon } from 'react-native-vector-icons/icon';
import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import MyCommunityHead from '../../components/UI/MyCommunityHead';
import TimeAgo from 'react-native-timeago';
import { SvgUri } from 'react-native-svg';


const ShopListIItem = props => {

  const [name, setName] = useState("Health");

  const getMeta = (keyName) => {
    let value = ''
    if (props.item.item && props.item.item.meta_data) {
      props.item.item.meta_data.forEach(element => {
        if (element.key == keyName) {
          value = element.value
        }
      });
    }
    return value
  };

  let _Manufacturer = getMeta('manufacturer')
  let _prescription = getMeta('prescription')
  let _pack_size = getMeta('pack_size')


  return (
    <>
      <BaseSafeAreaView style={{
        backgroundColor: props.backgroundColor, borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
      }}>


        <View style={{
          flex: 1, flexDirection: 'row', marginTop: 10,
        }} >

          <TouchableOpacity
            style={{
              flex: 3,
              alignItems: "center"
            }}
            onPress={() => {

              props.navigation.navigate('ShopDetail', {
                screen: 'ShopDetail',
                params: {
                  item: { item: props.item.item }
                }
              })
            }}>
            {props.item.item.images && props.item.item.images[0]?.src.includes(".svg") ?
              <SvgUri
                style={{ width: '80', height: 80 }}//, borderRadius: 30
                uri={props.item.item.images[0]?.src}
              />
              :
              <Image
                source={{ uri: props.item.item.images[0]?.src }}
                style={{ width: 80, height: 80, }}//borderRadius: 30 
              />
            }
          </TouchableOpacity>
          <View style={{ flex: 9, flexDirection: "row", }}  >

            <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
              <View style={{ flex: 1, flexDirection: "column" }} >
                <Text style={{ color: '#727272', fontSize: 16, fontWeight: "bold" }} numberOfLines={2} >{props.item.item.name}</Text>

                {_Manufacturer != "" &&
                  <Text style={{ color: '#939393', marginBottom: 10, fontSize: 16 }} >By {_Manufacturer}</Text>
                }
                {_pack_size != '' &&
                  <Text style={{ color: '#a9a9a9', fontSize: 16 }} >{_pack_size}</Text>
                }
              </View>


              {_prescription == 1 &&
                <View style={{ alignContent: 'flex-end', alignItems: 'flex-end', }} >
                  <Image source={require('./images/pres.png')}
                    style={{ width: 25, height: 24, }}
                  />
                </View>
              }
            </View>

          </View>
        </View>




        <View style={{
          flex: 1, flexDirection: 'row',
        }} >

          <View
            style={{
              flex: 3,
              alignContent: "center",
              alignItems: 'center',
              justifyContent: "center",
            }}
          >
          </View>
          <View style={{
            flex: 5, flexDirection: "row", alignContent: 'center', alignItems: 'center',
            justifyContent: "center",
          }}  >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: 'gray' }}>₹{props.item.item.regular_price}</Text>
              <Text style={{ marginLeft: 15 }}></Text>
              <Text style={{ color: '#393939', fontSize: 20, fontWeight: "bold" }}>₹{props.item.item.sale_price}</Text>
            </View>
          </View>

          <View style={{
            flex: 4, flexDirection: "row", alignContent: 'flex-end', alignItems: 'flex-end',
            justifyContent: "flex-end", paddingRight: 15
          }} >
            <TouchableOpacity
              style={{
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                justifyContent: 'flex-end'
              }}
              onPress={() => {
                props.addSheet.current.item = [];
                props.addSheet.current.item = props.item.item;
                props.addSheet.current.open();
                //props.addProduct(props.item.item)
              }}>
              <View
                style={{
                  backgroundColor: '#055F9B',
                  borderRadius: 8,
                  margin: 5,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 15,
                  paddingRight: 15
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
                }}>Add</Text>

              </View>
            </TouchableOpacity>
          </View>

        </View>






        {/* <TouchableOpacity
          style={{
            width: '100%',
            alignContent: 'flex-end',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            backgroundColor: "green"
          }}
          onPress={() => {
            props.addProduct(props.item.item)
          }}>
          <View
            style={{
              width: '20%',
              backgroundColor: '#055F9B',
              borderRadius: 8,
              margin: 5,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 35,
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
            }}>Add</Text>

          </View>
        </TouchableOpacity> */}


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

export default ShopListIItem;
