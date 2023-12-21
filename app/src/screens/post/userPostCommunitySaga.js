import { put, call, select, takeEvery } from 'redux-saga/effects';
import { queryApi } from '../../api/queryApi';
import { SAVE_USER_POST, GET_COMMUNITY_POST_FOR_USER, GET_USER_POST, GET_USER_FRIEND, DELETE_POST, UNFOLLOW_POST, CREATE_COMMUNITY } from '../../api/APIConstants';
import * as types from '../startup/types';
import * as userPostActions from './userPostActions';
import * as userPostCommunityActions from './userPostCommunityActions';

import * as postActions from './postActions';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');

export function* userPostCommunitySaga() {
 // yield takeEvery(types.CREATE_USER_POST, createUserPost);
//  yield takeEvery(types.CREATE_USER_POST_IMAGE, createUserPostImage);
  yield takeEvery(types.GET_USER_POST_COMMUNITY, getUserPost);
//  yield takeEvery(types.CREATE_USER_POST_VIDEO, createUserPostVideo);
//  yield takeEvery(types.GET_USER_CITY, getUserCity);
//  yield takeEvery(types.GET_USER_FRIENDS, getUserFriend);
//  yield takeEvery(types.DOT_POST_ACTIONS, dotPostAction);
//  yield takeEvery(types.CREATE_COMMUNITY, createCommunity);


}


function* getUserPost(data) {
  try {
    //let userId = aesEcryptionDecryption.encryptDataGet({ userId: data.userId });
    const res = yield call(queryApi, {
      endpoint: GET_COMMUNITY_POST_FOR_USER + '/' + data.communityId,
      method: 'GET'
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
     yield put(userPostCommunityActions.getUserPost(result));

  } catch (err) {

  }
}

