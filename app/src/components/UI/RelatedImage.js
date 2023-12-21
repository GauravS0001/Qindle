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
import { GET_PRODUCT_DETAILS } from '../../api/APIConstants';

const RelatedImage = props => {

  let members = 0;
  const [relProImg, setRelProImg] = useState('https://');
  const [name, setName] = useState('');
  const [id, setId] = useState(0);

  useEffect(() => {
    setRelProImg([])
    let endpoint = GET_PRODUCT_DETAILS + '/' + props.item
    var request = {
      method: "GET",
    };

    fetch(endpoint, request)
      .then(resp => resp.json())
      .then(json => {
        if (json.images && json.images[0]) {
          setRelProImg(json.images[0].src)
          setName(json.name)
          setId(json.id)
        }
      })
      .catch(error => {

      });

  }, [props.item]);

  if (relProImg == '') {
    return (<></>)
  } else {
    return (
      <>
        <View style={{ flex: 1, alignContent: "center", alignItems: 'center', justifyContent: 'center', padding: 10 }} >
          <TouchableOpacity onPress={() => {
            props.loadPost(id)

          }}>
            <Image source={{ uri: relProImg }} style={{ width: 200, height: 200 }} />
            <Text numberOfLines={1} style={{ width: 200 }}>{name}</Text>
          </TouchableOpacity>
        </View>

      </>
    );
  }
}

const styles = StyleSheet.create({
  pic: {
    width: 40,
    height: 40,
  },

});

export default RelatedImage;
