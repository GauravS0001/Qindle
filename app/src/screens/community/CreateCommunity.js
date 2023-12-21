import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  FlatList,
  ToastAndroid
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import TextareaWithBackground from '../../components/community/TextareaWithBackground';
import PrivacyWithBackground from '../../components/community/PrivacyWithBackground';
import UserNameUserImage from '../../components/community/UserNameUserImage';
import BackgroundDots from '../../components/UI/BackgroundDots';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import PrivacyBottomSheet from '../../components/bottomsheet/PrivacyBottomSheet';

import Close from '../../../res/images/Close.svg';
const CreateCommunity = props => {

  const background_list = [
    { image: 'Grey', first_color: '#EBEBEB', second_color: '#EBEBEB', type: 'grey' },
    { image: 'Orange', first_color: '#FF8C34', second_color: '#FFBE8D', type: 'orange' },
    { image: 'Green', first_color: '#CCDE83', second_color: '#90A539', type: 'green' },
    { image: 'Purple', first_color: '#B14BB1', second_color: '#C28BC2', type: 'purple' },
    { image: 'Black', first_color: colors.black, second_color: colors.black, type: 'black' }
  ];
  const [selectedBackground, setSelectedBackground] = useState(
    background_list[0],
  );
  const [postText, setPostText] = useState('');
  const [postText2, setPostText2] = useState('Public');
  const [postText3, setPostText3] = useState('');

  let refCreatePostBottomSheet = useRef(null);

  const onSelectBg = item => {
    setSelectedBackground(item);
  };

  const textChangeHandler = text => {
    setPostText(text);
  };

  const textChangeHandler2 = text => {
    //setPostText2(text);
    refCreatePostBottomSheet.current.open()
  };

  const textChangeHandler3 = text => {
    setPostText3(text);
  };

  const test = text => {

    setPostText2(refCreatePostBottomSheet.current.asaraPrivacy);

  };
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, margin: 15, }}>

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
                fontWeight: 'bold'

              }}
            >
              Create Community
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
              paddingTop: 10
            }}>
          </View>
          <UserNameUserImage />

          <View
            style={{
              //backgroundColor: 'blue',
              borderTopColor: 'white',
              borderBottomColor: '#f2f2f2',
              borderWidth: 2,
              borderLeftColor: 'white',
              borderRightColor: 'white',
              marginBottom: 10
            }}>
          </View>

          <View style={styles.textareaWithBackground}>

            <TextareaWithBackground
              onInputChange={textChangeHandler}
              editable={true}
              lineHieght={15}
              height={70}
              text={'Name*'}
              maxLength={30}
              placeholder={'Type community name'}
            />

          </View>

          <View style={styles.textareaWithBackground}>

            <View style={{ width: '100%' }}>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}
              >
                Privacy*
              </Text>
              <View
                style={{
                  flex: 1
                }}
              >
                <View
                  style={{
                    backgroundColor: "#f2f2f2",
                    width: '100%',
                    borderRadius: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={
                      () => {
                        textChangeHandler2()
                      }
                    }>
                    <Text
                      style={{
                        padding: 10,
                        borderRadius: 10,
                        fontSize: 18,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        letterSpacing: 0,
                        color: '#8C8C8C'
                      }}
                    >
                      {postText2}
                    </Text>

                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/** 
            <PrivacyWithBackground
              onInputChange={textChangeHandler2}
              editable={true}
              lineHieght={15}
              height={70}
              text={'Privacy*'}
              maxLength={''}
              placeholder={postText2}
              rbCreatePostSheetRef={refCreatePostBottomSheet}
            />
*/}
          </View>


          <View style={styles.textareaWithBackground}>


            <TextareaWithBackground
              onInputChange={textChangeHandler3}
              editable={true}
              lineHieght={30}
              height={150}
              text={'Description*'}
              maxLength={200}
              placeholder={'Describe your group'}
            />
          </View>

          <View style={styles.bg_color_dots}>

          </View>

          <View style={styles.button_container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                
                if (postText == "") {
                  ToastAndroid.show("Enter community name ", ToastAndroid.LONG);
                  return;
                }

                if (postText3 == "") {
                  ToastAndroid.show("Enter description ", ToastAndroid.LONG);
                  return;
                }

                props.navigation.navigate('CreateCommunityCategory', {
                  screen: 'CreateCommunityCategory',
                  params: {
                    name: postText,
                    privacy: postText2,//refCreatePostBottomSheet.current.asaraPrivacy,
                    description: postText3
                  },
                });
              }}>
              <Text style={styles.continue_text}>CREATE COMMUNITY</Text>
            </TouchableOpacity>
          </View>
        </View>

        <PrivacyBottomSheet
          rbCreatePostSheetRef={refCreatePostBottomSheet}
          navigation={props.navigation}
          test={test}
        />

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
    flex: 4,
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

export default CreateCommunity;
