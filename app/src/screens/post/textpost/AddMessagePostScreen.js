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
  ToastAndroid
} from 'react-native';
import colors from '../../../../res/colors';
import images from '../../../../res/images_url';
import TextareaWithBackground from '../../../components/post/TextareaWithBackground';
import UserNameUserImage from '../../../components/post/UserNameUserImage';
import BackgroundDots from '../../../components/UI/BackgroundDots';
import BaseSafeAreaView from '../../../components/UI/BaseSafeAreaView';
// import

//import Grey_Box from '../../../../res/images/Grey_Box.svg';
//import Oragne_Box from '../../../../res/images/Oragne_Box.svg';
//import Geern__Box from '../../../../res/images/Geern__Box.svg';
//import Purple_Box from '../../../../res/images/Purple_Box.svg';
//import Black_Box from '../../../../res/images/Black_Box.svg';

import Grey from '../../../components/svg/Grey';
import Orange from '../../../components/svg/Orange';
import Green from '../../../components/svg/Green';
import Purple from '../../../components/svg/Purple';
import Black from '../../../components/svg/Black';

const AddMessagePostScreen = props => {

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

  const onSelectBg = item => {
    setSelectedBackground(item);
  };

  const textChangeHandler = text => {
    setPostText(text);
  };
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, margin: 15, }}>
          <UserNameUserImage />
          <View style={styles.textareaWithBackground}>
            <TextareaWithBackground
              firstItem={background_list[0]}
              selectedBackground={selectedBackground}
              onInputChange={textChangeHandler}
              postText={postText}
              editable={true}
            />
          </View>
          <View style={styles.bg_color_dots}>
            <FlatList
              data={background_list}
              horizontal={true}
              keyExtractor={item => item.first_color}
              renderItem={itemData => (
                <BackgroundDots
                  item={itemData.item}
                  selectedBg={selectedBackground}
                  onBgSelect={onSelectBg}
                />
              )}
            />
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {

                if (postText == "") {
                  ToastAndroid.show("Type your thoughts ", ToastAndroid.LONG);
                  return;
                }

                props.navigation.navigate('TextPost', {
                  screen: 'CreateTextPostScreen',
                  params: {
                    postText: postText,
                    selectedBackground: selectedBackground,
                  },
                });
              }}>
              <Text style={styles.continue_text}>Continue</Text>
            </TouchableOpacity>
          </View>
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
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: 'green'
  },
  bg_color_dots: {
    flex: 6,
   // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop:20
  },
  button_container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AddMessagePostScreen;
