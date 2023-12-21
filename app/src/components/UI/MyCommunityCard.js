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
  Image,
  Button,
  ScrollView
} from 'react-native';
import { Icon } from 'react-native-vector-icons/icon';
import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import MyCommunityHead from '../../components/UI/MyCommunityHead';
import TimeAgo from 'react-native-timeago';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../screens/startup/types';
const MyCommunityCard = props => {


  const renderFields = () => {

    const dispatch = useDispatch();
    const fields = [];

    if (props.item == undefined && props.item.lenght == 0) {
      fields.push(
        <>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              //marginTop: 10,
              backgroundColor: 'white',
              marginLeft: 10,
              marginRight: 20,
              borderTopColor: '#fff',
              borderBottomColor: '#bbb',
              borderWidth: 1,
              borderLeftColor: '#fff',
              borderRightColor: '#fff',
              paddingTop: 20,
              paddingBottom: 10,
              backgroundColor: '#fff'
            }}
          >
            <Text

            >No Communities</Text>
          </View>

        </>
      )
      return fields;
    }
    else {
      props.item.forEach((item, key) => {

        let members = 0;
        try {
          item.members.forEach((_item, _key) => {
            members++
          });

        } catch (e) {

        }

        (
          fields.push(
            <>
              <View
                key={key}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  //marginTop: 10,
                  backgroundColor: 'white',
                  marginLeft: 20,
                  marginRight: 20,
                  borderTopColor: '#fff',
                  borderBottomColor: '#bbb',
                  borderWidth: 1,
                  borderLeftColor: '#fff',
                  borderRightColor: '#fff',
                  paddingTop: 20,
                  paddingBottom: 10,
                  backgroundColor: '#fff'
                }}
              >
                <View
                  style={{
                    flex: .3,
                    width: 40,
                    height: 40,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',

                  }}
                >
                  <Image
                    source={{ uri: item.icon }}
                    style={styles.pic}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    paddingLeft: 10
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      dispatch({
                        type: types.RESET_USER_POST_RESPONSE_COMMUNITY,
                        communityId: ""
                      });

                      props.navigation.navigate('MyCommunityDetail', {
                        screen: 'MyCommunityDetail',
                        params: {
                          id: item._id,
                          title: item.community_name,
                          icon: item.icon
                        }
                      })
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          flex: 1,
                          flexDirection: 'row',
                        }}
                      >{item.community_name}
                      </Text>

                      <TouchableOpacity
                        onPress={() => {
                          props.dotPosts.current.item = item
                          props.dotPosts.current.open()
                        }}
                      >
                        <Text style={{
                          flex: 1,
                          flexDirection: "row",
                          textAlign: 'right',
                          textAlign: 'left',
                          fontStyle: 'normal',
                          fontWeight: 'bold',
                          color: '#111111',
                          fontSize: 16,
                          opacity: 1,
                          letterSpacing: 0,
                          lineHeight: 19,
                          marginHorizontal: 10
                        }}> ...</Text>
                      </TouchableOpacity>

                    </View>
                    <Text>{members} Members</Text>
                    <Text>Recent updates{
                      item.lastUpdated != "" ?
                        <>
                          <Text> </Text>
                          <TimeAgo time={item.lastUpdated} />
                        </>
                        :
                        <Text> No Activity</Text>
                    }
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )
        )
      })
      return fields;
    }

  }
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
        <View
          style={{ paddingBottom: 20 }}
        >
          {renderFields()}
        </View>


      </BaseSafeAreaView>
    </>
  );

}

const styles = StyleSheet.create({
  pic: {
    width: 40,
    height: 40,
  },
  button: {
    flex: 1,
    //backgroundColor: '#055F9B',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 30
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
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 240
  },
  bg_color_dots: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  button_container: {
    flex: 2,
    flexDirection: 'row',
    //alignItems: 'center',
  },
});

export default MyCommunityCard;
