import React, { useState, useRef, useEffect } from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import Back from '../../components/svg/Done';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuTopDevice = props => {

  console.log('ortps', props)
  let title = props.title
  if (props.title == 'Sugar') {
    title = 'Blood Glucose'
  }
  const navigation = useNavigation();
  let userPost = ['Record', 'View History', 'Consult Doctor']
  const [active, setActive] = useState('Record');
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="long-arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.boxSearch}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold'
            }}
          >{title}</Text>
        </View>
        <View style={styles.box}>
        </View>

      </View>
      <View style={{ backgroundColor: '#055F9B', padding: 10, flex: .05, flexDirection: 'row', }}>
        <ScrollView>
          <FlatList
            data={userPost}
            keyExtractor={item => item._id}
            horizontal={true}
            renderItem={itemData => (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setActive(itemData.item);
                    props.setActive(itemData.item)
                  }}
                >
                  <View style={{ width: 150 }}>
                    <Text style={{ color: '#fff', fontWeight: active == itemData.item ? 'bold' : '' }}>{itemData.item}</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          />
        </ScrollView>

      </View>


    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: .1,
    flexDirection: 'row',
    backgroundColor: '#055F9B',
  },
  box: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
  },
  boxSearch: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'yellow',
  }

});

export default MenuTopDevice;
