import React from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE_PROTOCOL, IMAGE_HOST, IMAGE_BASE } from '../../api/APIConstants';
import { createMultiStyleIconSet } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const VideoPost = props => {


  return (
    <>

      <Icon
        style={{
          position: 'absolute',
          left: 150,
          top: 100,
          zIndex: 100
        }}
        size={60}
        name="play-circle"
        onPress={() => {
          props.navigation.navigate('VideoScreen', {
            screen: 'VideoScreen',
            params: {
              video: props.itemData.item.video,
              image: props.itemData.item.image
            },
          });
        }}
        solid>
      </Icon>

      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={{ uri: props.itemData.item.image }}
        />
      </View>
      {/**
      <Image
        key="0"
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          // justifyContent: 'flex-start',
          //borderColor: 'red',
          borderWidth: 1,
          width: 350,
          height: 350,
          opacity: 1
        }}
        source={{ uri: props.itemData.item.image }}
      />
       */}
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 1.5
  },
  username: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#111111',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
    marginHorizontal: 10,
  },
  pic: {
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor: '#C4C4C4',
  },
});

export default VideoPost;
