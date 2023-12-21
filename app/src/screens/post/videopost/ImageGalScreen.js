import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  Image,
  SafeAreaView,
  FlatList,
  Modal,
} from 'react-native';
import colors from '../../../../res/colors';
import images from '../../../../res/images_url';
import TextareaWithBackground from '../../../components/post/TextareaWithBackground';
import RNcameraTop from '../../../components/post/RNcameraTop';
import RNcameraBottom from '../../../components/post/RNcameraBottom';
import BackgroundDots from '../../../components/UI/BackgroundDots';
import BaseSafeAreaView from '../../../components/UI/BaseSafeAreaView';
import CameraRoll from "@react-native-community/cameraroll";
import FastImage from 'react-native-fast-image'

import Sent from '../../../../res/images/Sent.svg';

const VideoGalScreen = props => {
  const [postText, setPostText] = useState('');
  const [postTextSelected, setPostTextSelected] = useState([]);

  /*
    const selectedPhoto = useCallback(item => {
      postText.forEach(element => {
        if (element.id == item.id) {
          element.selected = true;
        }
      });
      setPostText(postText);
    });
    */

  const selectedPhoto = item => {
    let t = []
    postText.forEach(element => {
      t[element.id] = postTextSelected[element.id];
      if (element.id == item.id) {
        t[element.id] = !t[element.id];
      }
    });
    setPostTextSelected(t);

  };

  const onDoneClick = () => {
    let ele = [];
    postText.forEach(element => {
      if (postTextSelected[element.id]) { // ture
        ele.push(element);
      }
    });
    props.navigation.navigate('CreateTextVideoPostScreen', { image: ele })
  };


  useEffect(() => {
    CameraRoll.getPhotos({
      first: 100,
      assetType: 'Videos'
    })
      .then(r => {
        image = r.edges;
        let inc = 0;
        let t = []
        image.forEach(element => {
          element.id = inc;
          element.selected = false;
          t[inc] = false;
          inc++;
        });
        setPostTextSelected(t);
        setPostText(image);
        //setSelectedPostText(temp);
      })
      .catch((err) => {
        //Error Loading Images
      });
  }, []);


  if (postText == "") {
    return (
      <>
        <Text>Please wait ...</Text>
      </>
    )
  }
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, margin: 15 }}>

          <View style={styles.textareaWithBackground}>

            <SafeAreaView style={styles.container}>
              <View style={styles.container}>
                <FlatList
                  data={postText}
                  renderItem={({ item }) => (
                    <View style={styles.imageContainerStyle}>
                      <TouchableOpacity
                        key={item.id}
                        style={{ flex: 1 }}
                        onPress={() => {
                          selectedPhoto(item);
                        }}>
                        <FastImage
                          style={postTextSelected[item.id] == false ? styles.imageStyle : styles.imageStyleSelected}
                          source={{
                            uri: item.node.image.uri,
                          }}
                        />
                        {postTextSelected[item.id] == true &&
                          <>
                            <View
                              style={{
                                width: 60,
                                height: 60,
                                position: 'absolute',
                                left: '31%',
                                top: '25%',
                                borderRadius: 30,
                                borderColor: '#00000029',
                                borderWidth: 4,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <Sent />

                            </View>
                          </>
                        }
                      </TouchableOpacity>
                    </View>
                  )}
                  //Setting the number of column
                  numColumns={3}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </SafeAreaView>




          </View>

          {/** 
          <View style={styles.bg_color_dots}>


          </View>
          */}
          <View style={styles.button_container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onDoneClick()}>
              <Text style={styles.continue_text}>CONTINUE</Text>
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
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#055F9B'
  },
  bg_color_dots: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#055AbB'
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#055AbB'
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleStyle: {
    padding: 16,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  imageStyle: {
    height: 120,
    width: '96%',
    margin: '2%'
  },

  imageStyleSelected: {
    opacity: 0.3,
    height: 120,
    width: '96%',
    margin: '2%'
  },


  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 50,
    right: 20,
    position: 'absolute',
  },
});

export default VideoGalScreen;
