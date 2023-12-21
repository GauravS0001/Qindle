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
import { SvgUri } from 'react-native-svg';

const HealthLandingModulesCard = props => {

  const renderSwitch = item => {
    switch (item._id) {
      case 1:
        return (
          <>
            <Image
              source={require('./images/set/heart-attack.png')}
              style={styles.image}
            />

          </>
        )
      case 2:
        return (
          <>
            <Image
              source={require('./images/set/stethoscope-64.png')}
              style={{ ...styles.image, marginTop: 2 }}
            />

          </>
        )
      case 3:
        return (
          <>
            <Image
              source={require('./images/set/drugs.png')}
              style={styles.image}
            />

          </>
        )
      case 4:
        return (
          <>
            <Image
              source={require('./images/set/blood-test-128.png')}
              style={styles.image}
            />

          </>
        )
      case 5:
        return (
          <>
            <Image
              source={require('./images/set/nursing-room-64.png')}
              style={styles.image}
            />

          </>
        )
      default:
        return (
          <>
          </>
        );
    }
  }

  if (props.item.item.name == "" || props.item.item.name == null) {
    return (
      <></>
    )
  }
  return (
    <>
      <BaseSafeAreaView >

        <View
          style={{ flexDirection: "column", alignItems: "center", justifyContent: 'center', width: 90 }}
        >


          <TouchableOpacity
            style={{
              backgroundColor: 'white', borderRadius: 10, borderColor: '#eee', borderWidth: 1.5, padding: 15
            }}
            onPress={() => {

              props.navigation.navigate(props.item.item.nav, {
                screen: props.item.item.nav,
                params: {}
              })

            }}>
            {renderSwitch(props.item.item)}
          </TouchableOpacity>


          <View style={{ marginTop: 2 }}>
            <Text
              style={{ fontWeight: "bold" }}
            >{props.item.item.name}</Text>
          </View>

        </View>


      </BaseSafeAreaView>
    </>
  );

}

const styles = StyleSheet.create({
  image: {
    width: 32, height: 32
  }
}
);

export default HealthLandingModulesCard;
