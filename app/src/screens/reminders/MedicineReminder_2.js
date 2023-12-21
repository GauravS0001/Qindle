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

import Close from '../../../res/images/Close.svg';
const MedicineReminder_2 = props => {

  const dispatch = useDispatch();

  const _user = useSelector(state => state.user); //!!state.auth.token

  useEffect(() => {
    /*
    dispatch({
      type: types.GET_USER_FRIENDS,
      userId: _user.userDetails._id
    })
*/
    dispatch({
      type: types.GET_MEDICINE_NAME,
      userId: _user.userDetails._id,
      medicineCategory: props.route.params.friends._id
    })


  }, [props.route.params.friends._id]);


  /*
    const friendsList = useSelector(
    state => state.userPost.userFriends,
  );
  */
  const friendsList = useSelector(
    state => state.reminder.medicineName,
  );



  const [selectedList, setSelectedList] = useState();

  const [selectedFreinds, setSelectedFreinds] = useState([]);

  const onSelectBg = item => {
    let data = selectedFreinds;
    data.push(item)
    setSelectedFreinds(data)
    let _data = selectedFreinds[selectedFreinds.length - 1];
    props.navigation.navigate('MedicineReminder_3', {
      screen: 'MedicineReminder_3',
      params: {
        //name: props.route.params.params.name,
        //privacy: props.route.params.params.privacy,
        //description: props.route.params.params.description,
        //category: props.route.params.params.category,
        medicineCategory: props.route.params.friends._id,
        friends: _data
      }
    });

  };

  const updateQuery = input => {


    dispatch({
      type: types.GET_MEDICINE_NAME,
      userId: _user.userDetails._id,
      medicineCategory: props.route.params.friends._id,
      text: input
    })

    /*
    //let text = input.toLowerCase()
    let filteredName = friendsList.filter((item) => {
      return item.name.toLowerCase().match(input)
    })
    setSelectedList(filteredName)
    //setFriends(friends_array.slice());
    //setQuery(input);
    */
  };


  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, margin: 15, }}>

          <View style={{
            flex: .1,
            marginTop: 5,
            flexDirection: 'row',
          }}>
            <Text
              style={{
                flex: 1,
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
                fontSize: 18,
                fontWeight: 'bold'

              }}
            >
              Select Medicine
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
                  props.navigation.goBack();
                }
                }
              >
                <Close />
              </TouchableOpacity>

            </View>

          </View>

          <View
            style={{
              //backgroundColor: 'blue',
              borderTopColor: 'white',
              borderBottomColor: '#f2f2f2',
              borderWidth: 5,
              borderLeftColor: 'white',
              borderRightColor: 'white',
            }}>
          </View>




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
                height: 10
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
                height: 10
              }}
            >
            </Text>
            <Text
              style={{
                flex: 1,
                backgroundColor: '#CCC',
                flexDirection: 'column',
                marginRight: 5,
                borderRadius: 20,
                height: 10
              }}
            >
            </Text>
            <Text
              style={{
                flex: 1,
                backgroundColor: '#CCC',
                flexDirection: 'column',
                marginRight: 5,
                borderRadius: 20,
                height: 10
              }}
            >
            </Text>
            <Text
              style={{
                flex: 1,
                backgroundColor: '#CCC',
                flexDirection: 'column',
                marginRight: 5,
                borderRadius: 20,
                height: 10
              }}
            >
            </Text>
            <Text
              style={{
                flex: 1,
                backgroundColor: '#CCC',
                flexDirection: 'column',
                marginRight: 5,
                borderRadius: 20,
                height: 10
              }}
            >
            </Text>

            {/**
            <Text
              style={{
                flex: 1,
                backgroundColor: '#f2f2f2',
                flexDirection: 'column',
                marginRight: 5,
                borderRadius: 20,
                height: 10
              }}
            >
            </Text>
             */}


          </View >

          <View style={{
            ...styles.textareaWithBackground, marginTop: 10, flex: .05,
            //backgroundColor: 'orange'
          }}>

            <View
              style={{
                //backgroundColor: 'blue',
                borderTopColor: '#f2f2f2',
                borderBottomColor: 'white',
                borderWidth: 2,
                borderLeftColor: 'white',
                borderRightColor: 'white',
                width: '100%'
              }}>
              <Text></Text>
            </View>


          </View>

          <View style={{
            ...styles.textareaWithBackground, marginTop: 10, flex: .1,
            // backgroundColor: 'pink'
          }}>

            <Text>What is the medicine name?</Text>


          </View>



          <View style={{
            ...styles.bg_color_dots, flex: .1,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#000'
          }}>

            <TextInput
              style={{
                //marginHorizontal: 10, 
                paddingLeft: 10
              }}
              placeholder="Search Medicine"
              onChangeText={updateQuery}
              
            />
          </View>
          <View style={{
            ...styles.bg_color_dots, flex: 1,
            //backgroundColor: 'blue'
          }}>
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
          </View>
          
        </View >
      </BaseSafeAreaView >
    </>
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
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MedicineReminder_2;
