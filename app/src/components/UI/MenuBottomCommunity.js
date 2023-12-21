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

import Sent from '../../components/svg/Sent';
import Shop from '../../components/svg/Shop';
import Add_New from '../../components/svg/Add_New';
import Discover_Normal from '../../components/svg/Discover_Normal';
import Health_Normal from '../../components/svg/Health_Normal';
import Community from '../../components/svg/Community_Blue';
import Channel from '../../components/svg/Channel';
import { useNavigation } from '@react-navigation/native';

const MenuBottomCommunity = props => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate('HomeScreen', {
                screen: 'HomeScreen',
                params: {
                }
              })
            }}>
            <Discover_Normal />
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          ...styles.box,
          borderTopColor: "#055F9B",
          borderWidth: 1,
          borderLeftColor: "white",
          borderRightColor: "white",
          borderBottomColor: 'white'

        }}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate('MyCommunity', {
                screen: 'MyCommunity',
                params: {
                }
              })
            }}>
            <Community />
            <Text style={styles.text}>Group</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate('HealthLanding', {//HealthScreen
                screen: 'HealthLanding',
                params: {
                }
              })
            }}>
            <Health_Normal />
            <Text style={styles.text}>Health</Text>
          </TouchableOpacity>
        </View>
              
        {/* <View style={styles.box}>
          <TouchableOpacity onPress={() => props.addPosts()}>
            <Add_New />
          </TouchableOpacity>
          <Text> </Text>
        </View> */}

        <View style={styles.box}>
          <TouchableOpacity
            style={styles.box}

            onPress={() => {
              navigation.navigate('ServiceScreen', {
                screen: 'ServiceScreen',
                params: {
                }
              })
            }}>
            <Image
              source={require('./images/service.jpg')}
              style={{ width: 20, height: 20 }}
            />

            <Text style={styles.text}>Service</Text>
          </TouchableOpacity>
        </View>


      
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate('ChannelScreen', {
                screen: 'ChannelScreen',
                params: {
                }
              })
            }}>
            <Channel />
            <Text style={styles.text}>Channels</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: "#ccc",
    borderTopWidth: 1
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
  },
  text: {
    color: '#bbb',
  }

});

export default MenuBottomCommunity;
