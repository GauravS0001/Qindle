import React, { useState, useRef, useEffect } from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import { useDispatch, useSelector } from 'react-redux';
import { SliderBox } from "react-native-image-slider-box";
import * as types from '../../screens/startup/types';
const SliderLanding = props => {

  const { width, height } = Dimensions.get('window')
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const data = useSelector(
    state => state.channel.bannerData,
  );
  useEffect(() => {
    if (loading) {
      console.log('Slider props', props)
      dispatch({
        type: types.GET_BANNER_DATA,
        payload: props,
      });
      setLoading(false);
    }
  }, [props.type, props.widgetId, loading])
  return (
    <>
      {loading ? <View><Text>Loading...</Text></View> :
        <View style={styles.imgContainer}>
          <SliderBox autoplay images={data} parentWidth={width - 20} />
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
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

export default SliderLanding;
