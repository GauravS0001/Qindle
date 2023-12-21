import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import DotPostView from '../UI/DotPostView';

// import colors from '../../../res/colors';
// import strings from '../../res/strings';
import Report from '../../../res/images/Report.svg';
import Send_Postcard from '../../../res/images/Send_Postcard.svg';
import Unfollow from '../../../res/images/Unfollow.svg';
import Delete from '../../../res/images/Delete.svg';
import Ask_Que from '../../../res/images/Ask_Que.svg';
import { useDispatch, useSelector } from 'react-redux';
import Close from '../../../res/images/Close.svg';
import * as types from '../../screens/startup/types';

const ShopListBuyCount = props => {
  const { addSheet } = props;
  const _user = useSelector(state => state.user); //!!state.auth.token

  const [itemClicked, setItemClicked] = useState();

  const [proname, setProname] = useState();


  const dispatch = useDispatch();
  const onItemPress = item => {

    //addSheet.current.close();
  };

  const onItemPress2 = item => {

  };
  return (
    <>
      <RBSheet
        closeOnDragDown={true}
        ref={addSheet}
        height={520}
        openDuration={250}
        onOpen={() => { setProname(addSheet.current.item.name); setItemClicked('remove')}}
        customStyles={{
          container: {
            borderRadius: 10,
          },
          wrapper: { margin: 0 },
        }}>
        <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>

          <View style={{ flex: 2, flexDirection: "row", }}>

            <View style={{ flex: 8, alignContent: "flex-end", alignItems: "flex-end", borderBottomColor: "#f2f2f2", borderBottomWidth: 2, marginTop: 10 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>Select Quantity</Text>
              <Text style={{ fontSize: 12, }}>{proname}</Text>
            </View>
            <View style={{ flex: 4, borderBottomColor: "#f2f2f2", borderBottomWidth: 2 }}>
              <TouchableOpacity style={{ padding: 10, marginLeft: 20, marginTop: 10 }}
                onPress={() => { addSheet.current.close(); }}
              >
                <Close />
              </TouchableOpacity>
            </View>

          </View>

          <View style={{ flex: 10, flexDirection: "row", }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => {
                  setItemClicked('remove')
                }}
                style={{ width: '100%' }}
              >
                <Text style={{
                  padding: 20,
                  fontWeight: "bold",
                  fontSize: 16,
                  backgroundColor: itemClicked == 'remove' ? 'white' : 'white'
                }}>Remove items</Text>

              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => {
                  setItemClicked(1)
                }}
                style={{ width: '100%' }}
              >
                <Text style={{
                  padding: 20,
                  fontWeight: "bold",
                  fontSize: 16,
                  backgroundColor: itemClicked == 1 ? '#f2f2f2' : 'white'
                }}>1</Text>
                {itemClicked == 1 &&
                  <TouchableOpacity style={{ position: 'absolute', right: 35, top: 20 }}
                    onPress={() => { props.onChangeText(''); searchRef.clear(); }}
                  >
                    <Image source={require('../UI/images/tick.png')}
                      style={{ width: 18, height: 18 }}
                    />
                  </TouchableOpacity>
                }
              </TouchableOpacity>



              <TouchableOpacity
                onPress={() => {
                  setItemClicked(2)
                }}
                style={{ width: '100%' }}
              >
                <Text style={{
                  padding: 20,
                  fontWeight: "bold",
                  fontSize: 16,
                  backgroundColor: itemClicked == 2 ? '#f2f2f2' : 'white'
                }}>2</Text>
                {itemClicked == 2 &&
                  <TouchableOpacity style={{ position: 'absolute', right: 35, top: 20 }}
                    onPress={() => { props.onChangeText(''); searchRef.clear(); }}
                  >
                    <Image source={require('../UI/images/tick.png')}
                      style={{ width: 18, height: 18 }}
                    />
                  </TouchableOpacity>
                }
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setItemClicked(3)
                }}
                style={{ width: '100%' }}
              >
                <Text style={{
                  padding: 20,
                  fontWeight: "bold",
                  fontSize: 16,
                  backgroundColor: itemClicked == 3 ? '#f2f2f2' : 'white'
                }}>3</Text>
                {itemClicked == 3 &&
                  <TouchableOpacity style={{ position: 'absolute', right: 35, top: 20 }}
                    onPress={() => { props.onChangeText(''); searchRef.clear(); }}
                  >
                    <Image source={require('../UI/images/tick.png')}
                      style={{ width: 18, height: 18 }}
                    />
                  </TouchableOpacity>
                }
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => {
                  setItemClicked(4)
                }}
                style={{ width: '100%' }}
              >
                <Text style={{
                  padding: 20,
                  fontWeight: "bold",
                  fontSize: 16,
                  backgroundColor: itemClicked == 4 ? '#f2f2f2' : 'white'
                }}>4</Text>
                {itemClicked == 4 &&
                  <TouchableOpacity style={{ position: 'absolute', right: 35, top: 20 }}
                    onPress={() => { props.onChangeText(''); searchRef.clear(); }}
                  >
                    <Image source={require('../UI/images/tick.png')}
                      style={{ width: 18, height: 18 }}
                    />
                  </TouchableOpacity>
                }
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => {
                  setItemClicked(5)
                }}
                style={{ width: '100%' }}
              >
                <Text style={{
                  padding: 20,
                  fontWeight: "bold",
                  fontSize: 16,
                  backgroundColor: itemClicked == 5 ? '#f2f2f2' : 'white'
                }}>5 Max Qty</Text>
                {itemClicked == 5 &&
                  <TouchableOpacity style={{ position: 'absolute', right: 35, top: 20 }}
                    onPress={() => { props.onChangeText(''); searchRef.clear(); }}
                  >
                    <Image source={require('../UI/images/tick.png')}
                      style={{ width: 18, height: 18 }}
                    />
                  </TouchableOpacity>
                }
              </TouchableOpacity>


            </View>

          </View>
        </View>
      </RBSheet>
    </>
  );
};
const styles = StyleSheet.create({});
export default ShopListBuyCount;
