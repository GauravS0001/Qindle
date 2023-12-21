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
  ScrollView,
  Image
} from 'react-native';
import colors from '../../../res/colors';
import MenuTop from '../../components/UI/MenuTopPostCommunity';
import MenuBottom from '../../components/UI/MenuBottom';
import PostCard from '../../components/UI/PostCard';//Community
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheet';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheet';
import DotsBottomSheet2 from '../../components/bottomsheet/DotsBottomSheetCommunity';

import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import MenuBottomCommunity from '../../components/UI/MenuBottomCommunity';
import { USER_COMMUNITY, GET_COMMUNITY_POST_FOR_USER } from '../../api/APIConstants';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');
import { useNavigation } from '@react-navigation/native';
import Add_New from '../../components/svg/Add_New';

const initialState = {
  postText: '',
  selectedBackground: '',
  friends: [],
  communities: [],
  location: [],
  completed: false,
  from: 'home',
};

const MyCommunityDetail = props => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerTitle: (_props) =>
      <>
        <View
          style={{ flex: 1, flexDirection: 'row', width: '100%', minHeight: 40 }}
        >
          <Image
            source={{ uri: props.route.params.icon }}
            style={{ ...styles.pic, flex: 2, flexDirection: 'row' }}
          />
          <Text style={{ ...styles.text, flex: 10, flexDirection: 'row', fontWeight: 'bold', paddingTop: 10, paddingLeft: 10 }}>{props.route.params.title}</Text>

          <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingTop: 8, paddingLeft: 10 }}
            onPress={() => { managePage() }}
          >
            <Text style={{ ...styles.text, fontWeight: 'bold', fontSize: 16, }}>...</Text>
          </TouchableOpacity>
        </View>
      </>
  })

  // { headerTitle: (props) => <LogoTitle {...props} /> }


  const userPost = useSelector(
    state => state.userPostCommunity.userPostData,
  );



  const _userPost = useSelector(
    state => state.userPost,
  );

  //const [userPost, setUserPost] = useState([]);
  const [loading, setLoading] = useState(true);


  const _user = useSelector(state => state.user); //!!state.auth.token

  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  let refDotPostBottomSheet2 = useRef(null);

  const dispatch = useDispatch();
  const userOnboardingFullList = useSelector(
    state => state.onboarding,
  );

  useEffect(() => {


    //setUserPost([])
    setLoading(true)

    dispatch({
      type: types.GET_USER_FRIENDS,
      userId: _user.userDetails._id
    })

    dispatch({
      type: types.GET_USER_CITY,
      userOnboardingFullList
    })

    dispatch({
      type: types.GET_USER_COMMUNITY,
      userId: _user.userDetails._id,
    })

    /*
    let endpoint = GET_COMMUNITY_POST_FOR_USER + '/' + props.route.params.id
    
    var request = {
      method: 'GET',
    };
    request.headers = {
      "Content-Type": "application/json"
    }
    fetch(endpoint, request)
      .then(resp => resp.json())
      .then(json => {
        setTimeout(() => {
          let encryptData = aesEcryptionDecryption.decryptData(json);
          let result = JSON.parse(encryptData)
          setUserPost(result)
          setLoading(false)

        })
      })
      .catch(error => {
        
      });
*/

    /* 
    dispatch({
       type: types.RESET_USER_POST_RESPONSE_COMMUNITY,
       communityId: ""
     });
     */

    dispatch({
      type: types.GET_USER_POST_COMMUNITY,
      communityId: props.route.params.id
    });

    setLoading(false)

  }, [props.route.params.id]);//, _userPost.postType

  const addPosts = text => {
    refCreatePostBottomSheet.current.asaraType = "community"
    refCreatePostBottomSheet.current.asaraTypeId = props.route.params.id
    refCreatePostBottomSheet.current.open()
  };

  const managePage = text => {
    refDotPostBottomSheet2.current.asaraType = "community"
    refDotPostBottomSheet2.current.asaraTypeId = props.route.params.id
    refDotPostBottomSheet2.current.item = props.route.params
    refDotPostBottomSheet2.current.item.userId = _user.userDetails._id
    refDotPostBottomSheet2.current.open()
  };

  /* if (loading == true) {
     return (
       <>
         <BaseSafeAreaView style={{ backgroundColor: '#f2f2f2' }}>
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <Text>Loading ...</Text>
           </View>
         </BaseSafeAreaView>
       </>
     )
   }
   */


  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {/**
          <View style={styles.textareaWithBackground}>
            <MenuTop />
          </View>
 */}
          <View style={styles.bg_color_dots}>
            <FlatList
              data={userPost}
              horizontal={false}
              keyExtractor={item => item._id}
              renderItem={itemData => (
                <PostCard
                  item={itemData.item}
                  dotPosts={refDotPostBottomSheet}
                  navigation={props.navigation}
                />
              )}
            />
            <View style={{ position: "absolute", bottom: 30, right: 30 }}>
              <TouchableOpacity onPress={() => addPosts()}>
                <Add_New />
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.button_container}>
            <MenuBottomCommunity
              addPosts={addPosts}
            />
          </View>

          <CreatePostBottomSheet
            rbCreatePostSheetRef={refCreatePostBottomSheet}
            navigation={props.navigation}
            postType={"community"}
            postTypeId={props.route.params.id}
            params={props.route.params}
          />
          <DotsBottomSheet
            refDotPostBottomSheet={refDotPostBottomSheet}
            navigation={props.navigation}
          />

          <DotsBottomSheet2
            refDotPostBottomSheet={refDotPostBottomSheet2}
            navigation={props.navigation}
          />

        </View>
      </BaseSafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  textareaWithBackground: {
    flex: 1.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#055F9B'
  },
  pic: {
    width: 40,
    height: 40,
  },
  bg_color_dots: {
    flex: 7,
    flexDirection: 'row',
    //backgroundColor: '#055AbB'
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: '#055F9B'
  },
});

export default MyCommunityDetail;
