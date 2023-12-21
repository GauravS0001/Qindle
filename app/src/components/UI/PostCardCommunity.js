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
  Image
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import TextareaWithBackgroundHome from '../../components/post/TextareaWithBackgroundHome';
import UserNameUserImagePost from '../../components/post/UserNameUserImagePost';
import PostActionsBottom from '../../components/post/PostActionsBottomCommunity';
import BackgroundDots from '../../components/UI/BackgroundDots';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';

import { IMAGE_PROTOCOL, IMAGE_HOST, IMAGE_BASE } from '../../api/APIConstants';
import Grey from '../../components/svg/Grey';
import Orange from '../../components/svg/Orange';
import Green from '../../components/svg/Green';
import Purple from '../../components/svg/Purple';
import Black from '../../components/svg/Black';
import Video from 'react-native-video';
import Sent from '../../../res/images/Add_New.svg';


const background_list = [
  { image: 'Grey', first_color: '#EBEBEB', second_color: '#EBEBEB', type: 'grey' },
  { image: 'Orange', first_color: '#FF8C34', second_color: '#FFBE8D', type: 'orange' },
  { image: 'Green', first_color: '#CCDE83', second_color: '#90A539', type: 'green' },
  { image: 'Purple', first_color: '#B14BB1', second_color: '#C28BC2', type: 'purple' },
  { image: 'Black', first_color: colors.black, second_color: colors.black, type: 'black' }
];

let player;

const PostCardCommunity = props => {

  //@todo remove its a hack till deepak gives the asset 
  if (props.item.asset == undefined) {
    props.item.asset = []
    props.item.asset[0] = "";
    props.item.asset[1] = "";
    props.item.asset[2] = "";
    props.item.asset[3] = "";
    props.item.asset[4] = "";
  }
  if (props.item.type == 'post') {
    let background = ''
    if (props.item.template == 'grey') {
      background = background_list[0];
    }
    if (props.item.template == 'orange') {
      background = background_list[1];
    }
    if (props.item.template == 'green') {
      background = background_list[2];
    }
    if (props.item.template == 'purple') {
      background = background_list[3];
    }
    if (props.item.template == 'black') {
      background = background_list[4];
    }
    if (props.item.type == 'post') {
      return (
        <>
          <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
            <View style={{ flex: 1, marginLeft: 15, marginRight: 15, marginTop: 15 }}>
              <View style={{ marginBottom: 10 }}>
                <UserNameUserImagePost
                  friends_count={props.item.friends}
                  dotPosts={props.dotPosts}
                  item={props.item}
                />
              </View>
              <View style={styles.textareaWithBackground}>
                <TextareaWithBackgroundHome
                  firstItem={background_list[0]}
                  selectedBackground={background}
                  postText={props.item.title}
                  editable={false}
                />
              </View>
              <View style={{}}>
                <PostActionsBottom
                  item={props.item}
                  navigation={props.navigation}
                />
              </View>

            </View>

          </BaseSafeAreaView>
        </>
      );
    }
  }

  if (props.item.type == 'card') {
    return (
      <>
        <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
          <View style={{ flex: 1, marginLeft: 15, marginRight: 15, marginTop: 15 }}>
            <View style={{ marginBottom: 10 }}>
              <UserNameUserImagePost
                friends_count={props.item.friends}
                dotPosts={props.dotPosts}
                item={props.item}
              />
            </View>
            <View style={styles.textareaWithBackground}>

              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',

                  left: 0,
                  //zIndex: 2,
                  width: '100%',
                  //backgroundColor: 'red',
                  height: '80%',
                  opacity: 1
                }}>

                <Image
                  key="0"
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // justifyContent: 'flex-start',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    height: '100%',
                    opacity: 1
                  }}
                  source={{ uri: props.item.asset[0] != undefined ? IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + props.item.asset[0] : "" }}
                />

              </View>

              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  //zIndex: 2,
                  width: '100%',
                  backgroundColor: 'black',
                  height: '20%',
                  opacity: 0.3
                }}>

                <Image
                  key="1"
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // justifyContent: 'flex-start',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    height: '100%',
                    opacity: 1
                  }}
                  source={{ uri: props.item.asset[1] != undefined ? IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + props.item.asset[1] : "" }}
                />
                <Image
                  key="2"
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // justifyContent: 'flex-start',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    height: '100%',
                    opacity: 1
                  }}
                  source={{ uri: props.item.asset[2] != undefined ? IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + props.item.asset[2] : "" }}
                />

                <Image
                  key="3"
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // justifyContent: 'flex-start',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    height: '100%',
                    opacity: 1
                  }}
                  source={{ uri: props.item.asset[3] != undefined ? IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + props.item.asset[3] : "" }}
                />

                <Image
                  key="4"
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // justifyContent: 'flex-start',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    height: '100%',
                    opacity: 1
                  }}
                  source={{ uri: props.item.asset[4] != undefined ? IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + props.item.asset[4] : "" }}
                />


              </View>


            </View>
            <View style={{}}>
              <PostActionsBottom
                item={props.item}
                navigation={props.navigation}
              />
            </View>
          </View>
        </BaseSafeAreaView>
      </>
    );
  }

  if (props.item.type == 'video') {
    return (
      <>
        <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
          <View style={{ flex: 1, marginLeft: 15, marginRight: 15, marginTop: 15 }}>
            <View style={{ marginBottom: 10 }}>
              <UserNameUserImagePost
                friends_count={props.item.friends}
                dotPosts={props.dotPosts}
                item={props.item}
              />
            </View>
            <View style={styles.textareaWithBackground}>

              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',

                  left: 0,
                  //zIndex: 2,
                  width: '100%',
                  //backgroundColor: 'red',
                  //borderColor: '#000',
                  height: '80%',
                  opacity: 1
                }}>


                <Image
                  key="0"
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // justifyContent: 'flex-start',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    height: '100%',
                    opacity: 1,
                    //zIndex: 10
                  }}
                  source={{ uri: props.item.asset[0] != undefined ? IMAGE_PROTOCOL + IMAGE_HOST + '/' + props.item.screenshot_path[0] : "" }}
                />

                <TouchableOpacity
                  style={{
                   position: 'absolute',
                    left: '40%',
                    top: '45%',
                    opacity: 1,
                    //zIndex: 100
                  }}
                  onPress={() => {
                    props.navigation.navigate('VideoScreen', {
                      screen: 'VideoScreen',
                      params: {
                        video: IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + props.item.asset[0],
                        image: IMAGE_PROTOCOL + IMAGE_HOST + '/' + props.item.screenshot_path[0]
                      },
                    });
                  }}
                >
                  <Sent
                  />
                </TouchableOpacity>
              </View>



              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  //zIndex: 2,
                  width: '100%',
                  //backgroundColor: 'black',
                  height: '20%',
                  opacity: 1
                }}>

                <Image
                  key="1"
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // justifyContent: 'flex-start',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    height: '100%',
                    opacity: 1
                  }}
                  source={{ uri: props.item.asset[1] != undefined ? IMAGE_PROTOCOL + IMAGE_HOST + '/' + props.item.screenshot_path[1] : "" }}
                />
                
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    left: '7%',
                    top: '15%',
                    opacity: 1,
                    //zIndex: 100
                  }}
                  onPress={() => {
                    props.navigation.navigate('VideoScreen', {
                      screen: 'VideoScreen',
                      params: {
                        video: IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + props.item.asset[1],
                        image: IMAGE_PROTOCOL + IMAGE_HOST + '/' + props.item.screenshot_path[1]
                      },
                    });
                  }}
                >
                  <Sent
                  />
                </TouchableOpacity>

               
                <Image
                  key="2"
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // justifyContent: 'flex-start',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    height: '100%',
                    opacity: 1
                  }}
                  source={{ uri: props.item.asset[2] != undefined ? IMAGE_PROTOCOL + IMAGE_HOST + '/' + props.item.screenshot_path[2] : "" }}
                />

                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    left: '34%',
                    top: '15%',
                    opacity: 1,
                    //zIndex: 100
                  }}
                  onPress={() => {
                    props.navigation.navigate('VideoScreen', {
                      screen: 'VideoScreen',
                      params: {
                        video: IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + props.item.asset[2],
                        image: IMAGE_PROTOCOL + IMAGE_HOST + '/' + props.item.screenshot_path[2]
                      },
                    });
                  }}
                >
                  <Sent
                  />
                </TouchableOpacity>
             

                <Image
                  key="3"
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // justifyContent: 'flex-start',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    height: '100%',
                    opacity: 1
                  }}
                  source={{ uri: props.item.asset[3] != undefined ? IMAGE_PROTOCOL + IMAGE_HOST + '/' + props.item.screenshot_path[3] : "" }}
                />

                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    left: '59%',
                    top: '15%',
                    opacity: 1,
                    //zIndex: 100
                  }}
                  onPress={() => {
                    props.navigation.navigate('VideoScreen', {
                      screen: 'VideoScreen',
                      params: {
                        video: IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + props.item.asset[1],
                        image: IMAGE_PROTOCOL + IMAGE_HOST + '/' + props.item.screenshot_path[1]
                      },
                    });
                  }}
                >
                  <Sent
                  />
                </TouchableOpacity>

              

                <Image
                  key="4"
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // justifyContent: 'flex-start',
                    borderColor: '#ccc',
                    borderWidth: 1,
                    height: '100%',
                    opacity: 1
                  }}
                  source={{ uri: props.item.asset[4] != undefined ? IMAGE_PROTOCOL + IMAGE_HOST + '/' + props.item.screenshot_path[4] : "" }}
                />

                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    left: '84%',
                    top: '15%',
                    opacity: 1,
                    //zIndex: 100
                  }}
                  onPress={() => {
                    props.navigation.navigate('VideoScreen', {
                      screen: 'VideoScreen',
                      params: {
                        video: IMAGE_PROTOCOL + IMAGE_HOST + IMAGE_BASE + props.item.asset[4],
                        image: IMAGE_PROTOCOL + IMAGE_HOST + '/' + props.item.screenshot_path[4]
                      },
                    });
                  }}
                >
                  <Sent
                  />
                </TouchableOpacity>

              </View>







            </View>
            <View style={{}}>
              <PostActionsBottom
                item={props.item}
                navigation={props.navigation}
              />
            </View>
          </View>
        </BaseSafeAreaView>
      </>
    );
  }

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
    alignItems: 'center',
  },
});

export default PostCardCommunity;
