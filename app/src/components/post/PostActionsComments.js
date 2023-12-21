import React, { useState, useRef, useEffect } from 'react';
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList
} from 'react-native';
import colors from '../../../res/colors';
import images from '../../../res/images_url';
import { useDispatch, useSelector } from 'react-redux';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import Like from '../svg/Like'
import Done from '../svg/Done'
import Heart from '../svg/Heart'
import Heart_Line from '../svg/Heart_Line'
import Heart_feel from '../svg/Heart_feel'
import Quick_Comment from '../svg/Quick_Comment'
import Repost_line from '../svg/Repost_line'
import * as types from '../../screens/startup/types'
import Sent from '../svg/Sent' //to replace with share icon
import PostActionsCommentsDetails from '../../components/post/PostActionsCommentsDetails'
import { useNavigation } from '@react-navigation/native';
import CommentTextArea from '../../components/UI/CommentText';

const PostActionsComments = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();


  const comments = useSelector(
    state => state.commentPost.data,
  );
  const lastData = useSelector(
    state => state.commentPost.lastData,
  );

  const [ref, setRef] = useState(lastData);
  useEffect(() => {
    dispatch({
      type: types.GET_POST_COMMENT,
      _id: props.item._id
    });

    dispatch({
      type: types.RESET_POST_COMMENT_DETAILS,
      _id: props.item._id
    });
  }, [props.item._id]);

  return (
    <>

      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, marginLeft: 15, marginRight: 15 }}>

          <View style={styles.textareaWithBackground}>

            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CommentTextArea
                item={props.item}
                setRef={setRef}
              />
            </View>

          </View>

          <View style={{
            //borderTopColor: 'white',
            //borderBottomColor: '#f4f4f4',
            //borderWidth: 2,
            //borderLeftColor: 'white',
            //borderRightColor: 'white',
            paddingTop: 5,
            //paddingLeft: 5,
            //paddingRight: 5,
            paddingBottom: 20,
            //backgroundColor: '#f2f2f2',
            ...styles.bg_color_dots
          }}>
            {/*
            <FlatList
              style={{ flex: 1, width: '100%' }}
              contentContainerStyle={{ paddingBottom: 20 }}
              data={comments}
              horizontal={false}
              extraData={ref}
              keyExtractor={item => { return item._id + Math.random();}}
              renderItem={itemData => (
                <>
                  {
                    itemData.item.postId == props.item._id ?
                      <View style={{ margin: 0, padding: 0 }}>
                        <PostActionsCommentsDetails
                          data={itemData.item}
                          item={props.item}
                        />
                      </View>
                      : <Text style={{ marginTop: 0, padding: 0 }}></Text>
                  }


                </>

              )}
            />

*/}

          </View>




          <View style={{
            borderTopColor: 'white',
            borderBottomColor: '#f4f4f4',
            borderWidth: 2,
            borderLeftColor: 'white',
            borderRightColor: 'white',
            paddingTop: 5,
            //paddingLeft: 5,
            //paddingRight: 5,
            paddingBottom: 20,
            //backgroundColor: '#f2f2f2',
            ...styles.bg_color_dots
          }}>

            {props.item.comments > 0 &&
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Comments', {
                    screen: 'Comments',
                    params: {
                      item: props.item
                    }
                  })
                }}>

                <Text> {props.item.comments > 0 ? 'View Comments' : ''} </Text>
              </TouchableOpacity>
            }

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
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  username: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 26,
    marginHorizontal: 10,
  },
  pic: {
    borderRadius: 30,
    width: 30,
    height: 30,
    backgroundColor: '#C4C4C4',
  },
  asara_skip_container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  asara_speaker_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  skip_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
  },
  online_icon: {
    width: 10,
    height: 10,
    backgroundColor: '#0EC92D',
    borderColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    margin: 2,
  },
  list_container: {
    marginTop: 10,
    flex: 3,
    // backgroundColor: 'pink',
  },
  system_card: {
    backgroundColor: '#03203A',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
  },
  chat_left_text: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 24,
    margin: 10,
  },
  hobbies_card: {
    backgroundColor: '#055F9B',
    borderColor: colors.white,
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  system_card_left: {
    backgroundColor: '#03203A',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  system_card_right: {
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
    maxWidth: '80%',
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
  },
  question_container: {
    marginHorizontal: 20,
    flex: 5,
  },
  fulltext: {
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  arrow_validation: { flex: 2, marginHorizontal: 0 },
  textinput_container: { marginLeft: 0, flex: 8 },
  tap_here_container: {
    marginLeft: 0,
    flex: 8,
    color: colors.white,
  },
});


export default PostActionsComments;
