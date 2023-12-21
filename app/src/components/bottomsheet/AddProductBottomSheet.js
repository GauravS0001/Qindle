import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  TextInput
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Text_Post from '../../../res/images/Text_Post.svg';
import Send_Postcard from '../../../res/images/Send_Postcard.svg';
import Photo_Memory from '../../../res/images/Photo_Memory.svg';
import Video_Story from '../../../res/images/Video_Story.svg';
import Ask_Que from '../../../res/images/Ask_Que.svg';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../../src/screens/startup/types';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

const AddProductBottomSheet = props => {

  const [productCount, setProductCount] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const { rbCreatePostSheetRef, navigation, params } = props;

  const plus = item => {
    let _product = rbCreatePostSheetRef.current.item
    //let _price = _product.regular_price < _product.sale_price ? _product.regular_price : _product.sale_price
    let _price = _product.sale_price;
    let count = productCount + 1
    setProductCount(count)
    setProductPrice(_price * count)
  }
  const minus = item => {
    let _product = rbCreatePostSheetRef.current.item
    //let _price = _product.regular_price < _product.sale_price ? _product.regular_price : _product.sale_price
    let _price = _product.sale_price;
    if (productCount == 0) {
      setProductPrice(0)
      return;
    }
    let count = productCount - 1
    setProductCount(count)
    setProductPrice(_price * count)
  }
  return (
    <>
      <RBSheet
        closeOnDragDown={true}
        ref={rbCreatePostSheetRef}
        height={320}
        onClose={() => {
          setProductPrice(0);
          setProductCount(0)
        }}
        openDuration={250}
        customStyles={{
          container: {
            borderRadius: 10,
          },
          wrapper: { margin: 0 },
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Add Product</Text>
        </View>

        <View
          style={{
            flex: 1, alignItems: 'center', flexDirection: "row",
            justifyContent: 'center'
          }}
        >
          <View
            style={{
              alignItems: 'center', flexDirection: "row",
              justifyContent: 'center', width: '70%'
            }}
          >
            <TouchableOpacity style={{ flex: 1, marginLeft: 20 }} onPress={minus}>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>-</Text>
            </TouchableOpacity>

            <View style={{ flex: 8, borderColor: '#f2f2f2', borderWidth: 1, alignItems: 'center', justifyContent: 'center', padding: 15 }}>
              <Text style={{ color: 'black', alignItems: 'center', justifyContent: 'center', padding: 15 }}>
                {productCount}
              </Text>
            </View>

            <TouchableOpacity style={{ flex: 1, marginLeft: 20 }} onPress={plus}>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 26 }}> <Text style={{ color: 'green' }}>₹{productPrice}</Text></Text>

        </View>

      </RBSheet>
    </>
  );
};
const styles = StyleSheet.create({});
export default AddProductBottomSheet;
