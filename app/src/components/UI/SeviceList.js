import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';

import Community from '../../components/svg/Community';

import Sent from '../../components/svg/Sent';

import SearchBackground from '../../components/post/SearchBackground';
import SearchWhite from '../../../res/images/searchWhite';
import Hamburger from '../../components/svg/Hamburger';
import ProfileUser from '../../components/svg/ProfileUser';
const { height, width } = Dimensions.get("window")
import { useNavigation } from '@react-navigation/native';
import AutoHeightImage from 'react-native-auto-height-image';
const SeviceList = props => {

  console.log('props.item', props.item)
  const navigation = useNavigation();

  return (
    <>
      <View style={{
        flex: 1,
        margin: 15,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2"
      }}>

        <View style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
          marginBottom: 10
        }}>
          <AutoHeightImage
            width={64}
            source={{ uri: props.item.icon }}
          />

        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 7, padding: 10 }}><Text style={{ fontWeight: "bold" }}>{props.item.service_option_name}</Text></View>
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.button_container}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {

                  navigation.navigate('ServiceListChild', {
                    screen: 'ServiceListChild',//
                    params: {
                      item: { item: props.item, name: props.item.service_option_name }
                    }
                  })
                }}
              >
                <Text style={styles.continue_text}>Add</Text>
              </TouchableOpacity>
            </View></View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", padding: 5 }}>
          <View style={{ flex: 3 }}>
            <Text>From ₹{props.item.option_price_from}</Text>
            <Text>To ₹{props.item.option_price_to}</Text>
            <Text>Unit {props.item.price_unit}</Text>
          </View>
          <View style={{ flex: 6 }}>
            <Text>{props.item.duration}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row", padding: 5 }}>
          <FlatList
            data={props.item.includes}
            keyExtractor={item => item._id}
            horizontal={false}
            renderItem={itemData => (
              <>
                <Text ><Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: "bold", }}>.</Text>{itemData.item}</Text>
              </>
            )}
          />
        </View>





      </View>


    </>
  );
};

const styles = StyleSheet.create({
  bg_color_dots: {
    flex: 7,
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: '#f2f2f2'
  },
  text1: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    paddingTop: 25,
    paddingLeft: 20
  },
  button_container: {
    //flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
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
    color: 'white',
  },
});


export default SeviceList;
