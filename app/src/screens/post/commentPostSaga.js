import { put, call, select, takeEvery } from 'redux-saga/effects';
import { queryApi } from '../../api/queryApi';
import { SAVE_USER_COMMENT, GET_USER_COMMENT, LIKE_POST } from '../../api/APIConstants';
import * as types from '../startup/types';
import * as commentPostActions from './commentPostActions';
import * as userPostActions from './userPostActions';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');

export function* commentPostSaga() {
  yield takeEvery(types.GET_POST_COMMENT, getPostComment);
  yield takeEvery(types.GET_POST_COMMENT_DETAILS, getPostCommentDtails);

  yield takeEvery(types.SAVE_POST_COMMENT, saveComment);
  yield takeEvery(types.SAVE_POST_ACTIONS, saveAction);


}

function* getPostCommentDtails(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: GET_USER_COMMENT + '/' + data._id,
      method: 'GET'
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)
    yield put(commentPostActions.setPostCommentDetails(result));

    //yield put(commentPostActions.setPostComment({ "_id": "6140dbf6bd9f832f90d2dc43", "comment": "sdsdsdsdsd", "commentedBy": "612532a4ebd575527cb51246", "created": "2021-09-14T17:29:26.370Z", "postId": "614094d827db174bc4fcf730" }));


  } catch (err) {

  }
}



function* getPostComment(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: GET_USER_COMMENT + '/' + data._id,
      method: 'GET'
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)
    yield put(commentPostActions.setPostComment(result));

    //yield put(commentPostActions.setPostComment({ "_id": "6140dbf6bd9f832f90d2dc43", "comment": "sdsdsdsdsd", "commentedBy": "612532a4ebd575527cb51246", "created": "2021-09-14T17:29:26.370Z", "postId": "614094d827db174bc4fcf730" }));


  } catch (err) {

  }
}



function* saveComment(data) {
  try {

    const res = yield call(queryApi, {
      endpoint: SAVE_USER_COMMENT,
      method: 'POST-NOJSON2',
      body: data.comment
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    //yield delay(1000);
    yield put(commentPostActions.setPostCommentSingle(result));
    yield put(userPostActions.updateComment(result));


    //{ "_id": "6140dbf6bd9f832f90d2dc43", "comment": "sdsdsdsdsd", "commentedBy": "612532a4ebd575527cb51246", "created": "2021-09-14T17:29:26.370Z", "postId": "614094d827db174bc4fcf730" }


  } catch (err) {

  }
}

function* saveAction(data) {
  try {

    //share
    //heart
    //like
    //repost;
    let body = []
    let ep = ''
    if (data.action == 'like') {
      ep = LIKE_POST
      body = {
        likeBy: data.userId,
        postId: data.item._id,
        icon: data.icon,
      }
    }

    if (data.action == 'heart') {

    }



    const res = yield call(queryApi, {
      endpoint: ep,
      method: 'POST-NOJSON2',
      body: body
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)


    if (data.action == 'like') {
      yield put(userPostActions.updateLike(data.item._id));
    }

    if (data.action == 'heart') {
      yield put(userPostActions.updateHeart(data.item._id));

    }

    //{ "_id": "6140dbf6bd9f832f90d2dc43", "comment": "sdsdsdsdsd", "commentedBy": "612532a4ebd575527cb51246", "created": "2021-09-14T17:29:26.370Z", "postId": "614094d827db174bc4fcf730" }


  } catch (err) {

  }
}

