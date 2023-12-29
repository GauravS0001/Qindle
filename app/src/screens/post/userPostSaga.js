import { put, call, select, takeEvery } from 'redux-saga/effects';
import { queryApi } from '../../api/queryApi';
import { SAVE_USER_POST, GET_USER_POST, GET_USER_FRIEND, DELETE_POST, UNFOLLOW_COMMUNITY, DELETE_POST_COMUNITY, UNFOLLOW_POST, CREATE_COMMUNITY, UPDATE_FRIEND_LIST, JOIN_PRIVATE_COMMUNITY, JOIN_PRIVATE_COMMUNITY_STATUS, JOIN_PUBLIC_COMMUNITY_STATUS, SEND_USER_TOKEN, COMMUNITY_NAME_CHANGE, COMMUNITY_PHOTO_CHANGE, GET_USER_POST_FULL } from '../../api/APIConstants';
import * as types from '../startup/types';
import * as userPostActions from './userPostActions';
import * as userPostCommunityActions from './userPostCommunityActions';

import * as postActions from './postActions';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');

export function* userPostSaga() {
  yield takeEvery(types.CREATE_USER_POST, createUserPost);
  yield takeEvery(types.CREATE_USER_POST_IMAGE, createUserPostImage);
  yield takeEvery(types.GET_USER_POST, getUserPost);
  yield takeEvery(types.GET_USER_POST_FULL, getUserPostFull);

  yield takeEvery(types.CREATE_USER_POST_VIDEO, createUserPostVideo);
  yield takeEvery(types.GET_USER_CITY, getUserCity);
  yield takeEvery(types.GET_USER_FRIENDS, getUserFriend);
  yield takeEvery(types.DOT_POST_ACTIONS, dotPostAction);
  yield takeEvery(types.DOT_POST_ACTIONS_COMMUNITY, dotPostActionCommunity);

  yield takeEvery(types.COMMUNITY_NAME_CHANGE, communityNameChange);

  yield takeEvery(types.COMMUNITY_PHOTO_CHANGE, communityPhotoChange);

  yield takeEvery(types.CREATE_COMMUNITY, createCommunity);
  yield takeEvery(types.SET_INVITE_FRIEND, setInviteFriend);
  yield takeEvery(types.SEND_USER_TOKEN, sendUserToken);

}

function* sendUserToken(data) {
  try {

    return;

    const res = yield call(queryApi, {
      endpoint: SEND_USER_TOKEN,//+ '?data=' + userId,
      method: 'POST-NOJSON2',
      body: {
        userId: data.userId,
        userToken: data.userToken
      }
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)

  } catch (err) {

  }
}




function* setInviteFriend(data) {
  try {
    let _data = {
      "friends": [data.invitedById],
      "userId": data.userId
    }
    const res = yield call(queryApi, {
      endpoint: UPDATE_FRIEND_LIST,
      method: 'POST-NOJSON2',
      body: _data
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)


  } catch (err) {

  }
}

function* createCommunity(data) {
  try {


    let privacy = data.data.privacy.trim() == 'Private' ? 1 : 0;

    let hashTag = data.data.hashText.split(",");
    let _categories = [];
    let _tags = [];
    let _members = [];

    data.data.category.forEach(element => {
      _categories.push(element._id);
    });
    data.data.hashSelected.forEach(element => {
      _tags.push(element._id);
    });
    data.data.friends.forEach(element => {
      _members.push(element._id);
    });
    data.data.name = data.data.name == undefined ? '' : data.data.name
    data.data.description = data.data.description == undefined ? '' : data.data.description
    let payload = {
      "community_name": data.data.name,
      "description": data.data.description,
      "public_private": privacy,
      "categories": _categories,
      "members": _members,
      "hashtags": _tags,
      "hashtagsnew": hashTag,
      "userId": data.userId
    }

    const res = yield call(queryApi, {
      endpoint: CREATE_COMMUNITY,
      method: 'POST-NOJSON2',
      body: payload
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)
    //if() all ok 
    {
      yield put(postActions.setPostCompleted([]));
    }

  } catch (err) {

  }
}


function* createUserPostVideo(data) {
  try {

    let userId = data.creatPost.userId;
    let formdata = new FormData();
    let postType = data.postId != "" && data.postId.length > 2 ? "communities" : "post";
    formdata.append("post_type", postType)
    if (postType == "communities") {
      formdata.append("communitiesId", data.postId)
    }
    formdata.append("title", data.postText)
    formdata.append("id", data._id); //repost
    formdata.append("type", 'video');
    formdata.append("friends", JSON.stringify(data.creatPost.friends));
    formdata.append("community", JSON.stringify(data.creatPost.communities));
    formdata.append("location", JSON.stringify(data.creatPost.location));
    formdata.append("global", 'false');
    formdata.append("userId", userId);
    //formdata.append("description", data.creatPost.postText);
    formdata.append("template", '');
    //formdata.append("image", data.creatPost.selectedBackground.type);

    if (data.imagesAssetFull.length > 0) {
      data.imagesAssetFull.forEach((value, index) => {
        let name = 'video'
        if (index > 0) {
          name = 'video' + index
        }
        //formdata.append(name, value.image.uri);
        let n = value.image.uri.split('file:///');
        formdata.append(name, {
          //uri: 'file://'+n[1],
          uri: value.image.uri,
          type: 'video/mp4',
          name: name + ".mp4",
        });

      })
    }
    const res = yield call(queryApi, {
      endpoint: SAVE_USER_POST + '/' + userId + "?id=" + data._id,
      //endpoint:'http://192.168.2.5',
      method: 'POST-NOAES',
      body: formdata
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);

    if (postType == "communities") {
      yield put(userPostCommunityActions.updateUserPost(result));
    }
    else {
      yield put(userPostActions.updateUserPost(result));
    }
    //if() all ok 
    {
      yield put(postActions.setPostCompleted([]));
    }

  } catch (err) {

  }
}

function* createUserPostImage(data) {
  try {

    let userId = data.creatPost.userId;
    let formdata = new FormData();
    let postType = data.postId != "" && data.postId.length > 2 ? "communities" : "post";
    if (postType == "communities") {
      formdata.append("communitiesId", data.postId)
    }
    formdata.append("post_type", postType)
    formdata.append("title", data.postText)
    formdata.append("id", data._id);
    formdata.append("type", 'card');
    formdata.append("friends", JSON.stringify(data.creatPost.friends));
    formdata.append("community", JSON.stringify(data.creatPost.communities));
    formdata.append("location", JSON.stringify(data.creatPost.location));
    formdata.append("global", 'false');
    formdata.append("userId", userId);
    //formdata.append("description", data.creatPost.postText);
    formdata.append("template", '');
    //formdata.append("image", data.creatPost.selectedBackground.type);

    if (data.imagesAssetFull.length > 0) {
      data.imagesAssetFull.forEach((value, index) => {
        let name = 'image'
        if (index > 0) {
          name = 'image' + index
        }
        //formdata.append(name, value.image.uri);
        let n = value.image.uri.split('file:///');
        formdata.append(name, {
          //uri: 'file://'+n[1],
          uri: value.image.uri,
          type: 'image/jpeg',
          name: name + ".jpg",
        });

      })
    }
    const res = yield call(queryApi, {
      endpoint: SAVE_USER_POST + '/' + userId + "?id=" + data._id,
      //endpoint:'http://192.168.2.5',
      method: 'POST-NOAES',
      body: formdata
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);


    if (postType == "communities") {
      yield put(userPostCommunityActions.updateUserPost(result));
    }
    else {
      yield put(userPostActions.updateUserPost(result));
    }

    //if() all ok 
    {
      yield put(postActions.setPostCompleted([]));
    }

  } catch (err) {

  }
}

function* createUserPost(data) {
  try {
    let userId = data.creatPost.userId;
    let formdata = new FormData();
    let postType = data.postId != "" && data.postId.length > 2 ? "communities" : "post";
    formdata.append("post_type", postType)
    if (postType == "communities") {
      formdata.append("communitiesId", data.postId)
    }

    formdata.append("title", data.creatPost.postText)
    formdata.append("id", data._id);
    formdata.append("type", 'post');
    formdata.append("friends", JSON.stringify(data.creatPost.friends));
    formdata.append("community", JSON.stringify(data.creatPost.communities));
    formdata.append("location", JSON.stringify(data.creatPost.location));
    formdata.append("global", 'false');
    formdata.append("userId", userId);
    //formdata.append("description", data.creatPost.postText);
    formdata.append("template", data.creatPost.selectedBackground.type);
    //formdata.append("image", data.creatPost.selectedBackground.type);
    const res = yield call(queryApi, {
      endpoint: SAVE_USER_POST + '/' + userId + "?id=" + data._id,
      method: 'POST-NOAES',
      body: formdata
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)

    if (postType == "communities") {
      yield put(userPostCommunityActions.updateUserPost(result));
    }
    else {
      yield put(userPostActions.updateUserPost(result));
    }

    //if() all ok 
    {
      yield put(postActions.setPostCompleted([]));
    }

  } catch (err) {

  }
}

function* getUserPost(data) {
  try {
    let userId = aesEcryptionDecryption.encryptDataGet({ userId: data.userId });
    const res = yield call(queryApi, {
      endpoint: GET_USER_POST + '/' + data.userId,
      method: 'GET'
    });
    //let encryptData = aesEcryptionDecryption.decryptData(res);
    //let result = JSON.parse(res)
    //console.log("_____________________________", res)
    yield put(userPostActions.getUserPost(res));

  } catch (err) {

  }
}

function* getUserPostFull(data) {
  try {
    let userId = aesEcryptionDecryption.encryptDataGet({ userId: data.userId });
    const res = yield call(queryApi, {
      endpoint: GET_USER_POST_FULL + '/' + data.userId,
      method: 'GET'
    });
    
    yield put(userPostActions.getUserPostAll(res));


  } catch (err) {

  }
}


function* getUserCity(data) {
  try {
    //yield delay(1000);
    yield put(userPostActions.setUserCity(data));
  } catch (err) {
  }
}

function* getUserFriend(data) {
  try {
    //let userId = aesEcryptionDecryption.encryptDataGet({ userId: data.userId });
    const res = yield call(queryApi, {
      endpoint: GET_USER_FRIEND,//+ '?data=' + userId,
      method: 'POST-NOJSON2',
      body: { userId: data.userId }
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)
    yield put(userPostActions.setUserFriend(result));

  } catch (err) {

  }
}



function* communityPhotoChange(data) {
  try {

    let formdata = new FormData();
    formdata.append("communityId", data.communityId)

    if (data.imagesAssetFull.length > 0) {
      data.imagesAssetFull.forEach((value, index) => {
        let name = 'community_pic' + data.communityId
        if (index > 0) {
          name = 'community_pic' + data.communityId + index
        }
        //formdata.append(name, value.image.uri);
        let n = value.image.uri.split('file:///');
        formdata.append(name, {
          //uri: 'file://'+n[1],
          uri: value.image.uri,
          type: 'image/jpeg',
          name: name + ".jpg",
        });

      })
    }

    const res = yield call(queryApi, {
      endpoint: COMMUNITY_PHOTO_CHANGE,
      method: 'POST-NOAES',
      body: formdata
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);

  } catch (err) {

  }
}

function* communityNameChange(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: COMMUNITY_NAME_CHANGE,//+ '?data=' + userId,
      method: 'POST-NOJSON2',
      body: { "communityName": data.name, "communityId": data.communityId }
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)


  } catch (err) {

  }
}




function* dotPostActionCommunity(data) {
  try {

    if (data.action == "RejectCommunityJoining") {
      const res = yield call(queryApi, {
        endpoint: JOIN_PRIVATE_COMMUNITY_STATUS,//+ '?data=' + userId,
        method: 'POST-NOJSON2',
        body: {
          "moderationid": data.moderatiorId,
          'message': "Rejected",
          "status": "reject",
          "requestedby": data.userId,
          "typeid": data.id
        }
      });
      let encryptData = aesEcryptionDecryption.decryptData(res);
      let result = JSON.parse(encryptData)

    }
    if (data.action == "ApproveCommunityJoining") {
      const res = yield call(queryApi, {
        endpoint: JOIN_PRIVATE_COMMUNITY_STATUS,//+ '?data=' + userId,
        method: 'POST-NOJSON2',
        body: {
          "moderationid": data.moderatiorId,
          'message': "Approved",
          "status": "approve",
          "requestedby": data.userId,
          "typeid": data.id
        }
      });
      let encryptData = aesEcryptionDecryption.decryptData(res);
      let result = JSON.parse(encryptData)
    }
    if (data.action == "Report") {
      //yield put(userPostActions.removePostbyId(data.id));
    }
    if (data.action == "Private(Request to join)") {
      const res = yield call(queryApi, {
        endpoint: JOIN_PRIVATE_COMMUNITY,//+ '?data=' + userId,
        method: 'POST-NOJSON2',
        body: { "communityId": data.id, "userId": data.userId }
      });
      let encryptData = aesEcryptionDecryption.decryptData(res);
      let result = JSON.parse(encryptData)
    }

    if (data.action == "Join/Follow") {
      //@tbd to ask for API
      const res = yield call(queryApi, {
        endpoint: JOIN_PUBLIC_COMMUNITY_STATUS,//+ "/" + data.userId + "/" + data.id,//+ '?data=' + userId,
        method: 'POST-NOJSON2',
        body: {
          "userId": data.userId,
          'id': data.id
        }
      });
      let encryptData = aesEcryptionDecryption.decryptData(res);
      let result = JSON.parse(encryptData)

    }

    if (data.action == "Unfollow") {
      const res = yield call(queryApi, {
        endpoint: UNFOLLOW_COMMUNITY,//+ '?data=' + userId,
        method: 'POST-NOJSON2',
        body: { "followersId": data.userId, "types": "community", "typesId": data.postBy }
      });
      let encryptData = aesEcryptionDecryption.decryptData(res);
      let result = JSON.parse(encryptData)
      yield put(userPostActions.removePostbyId(data.id));
    }
    if (data.action == "Delete") {

      const res = yield call(queryApi, {
        endpoint: DELETE_POST_COMUNITY + data.id,
        method: 'DELETE-NOAES'
      });
      let encryptData = aesEcryptionDecryption.decryptData(res);
      //let result = JSON.parse(encryptData)
      //yield put(userPostActions.removePostbyId(data.id));
    }

  } catch (err) {

  }
}


function* dotPostAction(data) {
  try {
    if (data.action == "Report") {
      yield put(userPostActions.removePostbyId(data.id));
    }
    if (data.action == "Unfollow") {
      const res = yield call(queryApi, {
        endpoint: UNFOLLOW_POST,//+ '?data=' + userId,
        method: 'POST-NOJSON2',
        body: { "followersId": data.userId, "types": "users", "typesId": data.postBy }
      });
      let encryptData = aesEcryptionDecryption.decryptData(res);
      let result = JSON.parse(encryptData)
      yield put(userPostActions.removePostbyId(data.id));
    }
    if (data.action == "Delete") {

      const res = yield call(queryApi, {
        endpoint: DELETE_POST + data.id,
        method: 'DELETE-NOAES'
      });
      let encryptData = aesEcryptionDecryption.decryptData(res);
      //let result = JSON.parse(encryptData)
      yield put(userPostActions.removePostbyId(data.id));
    }

  } catch (err) {

  }
}
