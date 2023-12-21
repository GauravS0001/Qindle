import { put, call, select, takeEvery } from 'redux-saga/effects';
import { queryApi } from '../../api/queryApi';
import { COMMUNITY_SUGGEST, USER_COMMUNITY, GET_COMMUNITY_CATEGORY, GET_COMMUNITY_HASH, GET_MODERATION_DATA } from '../../api/APIConstants';
import * as types from '../startup/types';
import * as communityActions from './communityActions';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');


export function* communitySaga() {
  yield takeEvery(types.GET_COMMUNITY, onboardingGetLatest);
  yield takeEvery(types.GET_USER_COMMUNITY, getUserCommunity);
  yield takeEvery(types.COMMUNITY_CATEGORY, getCommunityCategory);
  yield takeEvery(types.COMMUNITY_TAGS, getCommunityHash);

  yield takeEvery(types.GET_COMMUNITY_MODERRATION_DATA, getCommunityModerationData);

  // yield takeEvery(types.ONBOARDING_GET_COMMUNITY, onboardingGetLatest);
}


function* getCommunityHash(data) {
  try {


    let userId = data.userId;
    const res = yield call(queryApi, {
      endpoint: GET_COMMUNITY_HASH,
      method: 'GET'
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)
    result = [
      ...result.hashTagNewData,
      ...result.intersetData,
      ...result.medicalData
    ]
    /*
     let result = [
       {
         _id: 'asdsad',
         icon: 'https://img.icons8.com/material-outlined/2x/facebook-new.png',
         'name': 'Family',
       },
       {
         _id: 'asdsad3',
         icon: 'https://img.icons8.com/material-outlined/2x/facebook-new.png',
         'name': 'Family 2',
       },
       {
         _id: 'asdsad23',
         icon: 'https://img.icons8.com/material-outlined/2x/facebook-new.png',
         'name': 'Family 12',
       },
       {
         _id: 'asdssad3',
         icon: 'https://img.icons8.com/material-outlined/2x/facebook-new.png',
         'name': 'Family 20',
       }
 
     ]
     */
    yield put(communityActions.setCommunityHash(result));

  } catch (err) {
    //   yield put(authActions.otpFailed('OTP requset failed'));
    // throw new Error(err);
  }
}


function* getCommunityCategory(data) {
  try {


    let userId = data.userId;
    const res = yield call(queryApi, {
      endpoint: GET_COMMUNITY_CATEGORY,
      method: 'GET'
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)

    /*
    let result = [
      {
        _id: 'asdsad',
        icon: 'https://img.icons8.com/material-outlined/2x/facebook-new.png',
        'name': 'Family',
      },
      {
        _id: 'asdsad3',
        icon: 'https://img.icons8.com/material-outlined/2x/facebook-new.png',
        'name': 'Family 2',
      },
      {
        _id: 'asdsad23',
        icon: 'https://img.icons8.com/material-outlined/2x/facebook-new.png',
        'name': 'Family 12',
      },
      {
        _id: 'asdssad3',
        icon: 'https://img.icons8.com/material-outlined/2x/facebook-new.png',
        'name': 'Family 20',
      }

    ]
     */
    yield put(communityActions.setCommunityCategory(result));

  } catch (err) {
    //   yield put(authActions.otpFailed('OTP requset failed'));
    // throw new Error(err);
  }
}


function* getUserCommunity(data) {
  try {

    let userId = data.userId;
    const res = yield call(queryApi, {
      endpoint: USER_COMMUNITY + '/' + userId,
      method: 'GET'
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)
    yield put(communityActions.setUserCommunity({ communities: ["response Data"], data: result }));

  } catch (err) {
    //   yield put(authActions.otpFailed('OTP requset failed'));
    // throw new Error(err);
  }
}



function* onboardingGetLatest(data) {
  try {

    let id = [];
    data.payload.di.forEach(element => {
      id.push({ "id": element._id });
    });
    data.payload.ho.forEach(element => {
      id.push({ "id": element._id });
    });
    const res = yield call(queryApi, {
      endpoint: COMMUNITY_SUGGEST,
      method: 'POST-NOJSON2',
      body: id
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)

    yield put(communityActions.getCommunity({ communities: ["response Data"], data: result }));

    /*
    const res = yield call(queryApi, {
      endpoint: ONBOARDING_GET_LATEST_URL,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)

    if (result.questions) {
      yield put(onboardingActions.onboardingGetLatest(result.questions));
    } else {
      // yield put(authActions.otpFailed('OTP requset failed'));
      // throw new Error(res);
    }
    */
  } catch (err) {
    //   yield put(authActions.otpFailed('OTP requset failed'));
    // throw new Error(err);
  }
}



function* getCommunityModerationData(data) {
  try {

    let userId = data.userId;
    const res = yield call(queryApi, {
      endpoint: GET_MODERATION_DATA + '/' + userId,
      method: 'GET'
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    console.log('result', result);
    yield put(communityActions.setCommunityModerationData(result));

  } catch (err) {
    //   yield put(authActions.otpFailed('OTP requset failed'));
    // throw new Error(err);
  }
}

