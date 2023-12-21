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
import { Dropdown } from 'react-native-element-dropdown';
import { Value } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../screens/startup/types';


const CityFilter = props => {
  // const data = [
  //   { label: 'Delhi', value: 'Delhi' },
  //   { label: 'Mumbai', value: 'Mumbai' },
  //   { label: 'Pune', value: 'Pune' }
  // ];
  const dispatch = useDispatch()

  const _user = useSelector(state => state.user);
  console.log(_user.city)


  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10
        }}
      >
        <View
          style={{
            width: '96%',
            marginTop: 10,
            borderColor: 'black',
            borderWidth: .6,
            borderRadius: 20,
            paddingBottom: 20,
            paddingTop: 20,

          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",

            }}
          >

            <Text
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                color: 'black',
                paddingLeft: 10,
                marginBottom: 10,
              }}
            >Select City </Text>
            {/* <Image source={require('./images/city.png')}
              style={{ width: 24, height: 24, marginRight: 10 }}
            /> */}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >

            <View
              style={{
                flexDirection: "row",
                marginLeft: 20,
              }}
            >
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }, { width: '95%' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={_user.city}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  dispatch({
                    type: types.DOCTOR_NEAR_YOU,
                    userId: _user.userDetails._id,
                    cityId: item.value
                  })
                  AsyncStorage.setItem("@userCity", JSON.stringify(item));
                  setValue(item.value);
                  setIsFocus(false);
                }}
                renderLeftIcon={() => (
                  <Image source={require('./images/city.png')}
                    style={{ width: 24, height: 24, marginRight: 10 }}
                  />
                  // <AntDesign
                  //   style={styles.icon}
                  //   color={isFocus ? 'blue' : 'black'}
                  //   name="Safety"
                  //   size={20}
                  // />
                )}
              />

            </View>


          </View>



        </View>

      </View>


    </>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default CityFilter;
