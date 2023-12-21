/* Redux saga class
 * checking token is valid or not
 * requires access-token.
 */
import { put, call, select, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import * as authActions from './authActions';
import { queryApi } from '../../api/queryApi';

import { OTP_GENERATE, OTP_CHALLENGE, SIGNUP } from '../../api/APIConstants';
import * as types from './types';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');

export function* branchSaga() {
  //yield takeEvery(types.OTP_REQUEST, otpRequest);
  //yield takeEvery(types.OTP_CHALLENGE_REQUEST, otpChallenge);
}

/*
function* otpRequest(action) {
  try {
    const res = yield call(queryApi, {
      endpoint: OTP_GENERATE,
      method: 'POST',
      body: {
        mobile_no: action.payload.mobile_no,
        hash: action.payload.hash,
      },
    });

    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)
    if (result.Status) {
      yield put(
        authActions.onOTPResponse(action.payload.mobile_no, result.Details) //
      );
    } else {
      yield put(authActions.otpFailed('OTP requset failed'));
    }
  } catch (err) {
    yield put(authActions.otpFailed('OTP requset failed'));
  }
}
*/