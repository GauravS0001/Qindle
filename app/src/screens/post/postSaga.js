import { put, call, select, takeEvery } from 'redux-saga/effects';
//import {queryApi} from '../../api/queryApi';
//import {ONBOARDING_GET_LATEST_URL} from '../../api/APIConstants';
import * as types from '../startup/types';
import * as postActions from './postActions';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');


export function* postSaga() {
  //yield takeEvery(types.UPDATE_POST_INITIALS, setInitial);
 // yield takeEvery(types.UPDATE_TAG_FRIENDS, setPostDataFriend);
  //yield takeEvery(types.UPDATE_TAG_COMMUNITIES, setPostDataCommunity);
  //yield takeEvery(types.UPDATE_LOCATION, setPostDataLocation);
}

function* setInitial(data) {
  try {
    postActions.setInitial(data)
  } catch (err) {

  }
}

function* setPostDataFriend(data) {
  try {
    postActions.setPostDataFriend(data)
  } catch (err) {

  }
}

function* setPostDataCommunity(data) {
  try {
    postActions.setPostDataCommunity(data)
  } catch (err) {

  }
}

function* setPostDataLocation(data) {
  try {
    postActions.setPostDataLocation(data)
  } catch (err) {

  }
}
