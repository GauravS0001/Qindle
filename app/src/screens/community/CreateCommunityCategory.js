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
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';


import Close from '../../../res/images/Close.svg';
const CreateCommunityCategory = props => {

  const dispatch = useDispatch();
  const communityCategory = useSelector(
    state => state.community.communityCategory,
  );

  useEffect(() => {
    dispatch({
      type: types.COMMUNITY_CATEGORY,
      userId: ''
    });

  }, []);

  const [selectedCategory, setSelectedCategory] = useState([]);

  const onSelectBg = item => {
    let data = selectedCategory;
    data.push(item)
    setSelectedCategory(data);

    props.navigation.navigate('CreateCommunityFriends', {
      screen: 'CreateCommunityFriends',
      params: {
        name: props.route.params.params.name,
        privacy: props.route.params.params.privacy,
        description: props.route.params.params.description,
        category: selectedCategory
      }
    });

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
              Select Category
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
                backgroundColor: '#f2f2f2',
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
                backgroundColor: '#f2f2f2',
                flexDirection: 'column',
                marginRight: 5,
                borderRadius: 20,
                height: 10
              }}
            >
            </Text>


          </View>

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

            <Text>Select only ONE Category that best describes your community</Text>


          </View>



          <View style={{
            ...styles.bg_color_dots, flex: 1,
            //backgroundColor: 'blue'
          }}>


            <FlatList
              data={communityCategory}
              horizontal={false}
              keyExtractor={item => item._id}
              numColumns={3}
              renderItem={itemData => (
                <>

                  <CommunityCategory
                    item={itemData.item}
                    onBgSelect={onSelectBg}
                  />

                </>
              )}
            />
          </View>

          {/*        
          <View style={{
            ...styles.button_container,
            //backgroundColor: 'pink', 
            flex: .1
          }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate('CreateCommunityFriends', {
                  screen: 'CreateCommunityFriends',
                  params: {
                    name: props.route.params.params.name,
                    privacy: props.route.params.params.privacy,
                    description: props.route.params.params.description,
                    category: selectedCategory
                  }
                });
              }}>
              <Text style={styles.continue_text}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
*/}
        </View>
      </BaseSafeAreaView>
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

export default CreateCommunityCategory;
