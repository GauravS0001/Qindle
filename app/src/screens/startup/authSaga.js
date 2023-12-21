/* Redux saga class
 * checking token is valid or not
 * requires access-token.
 */
import { put, call, select, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';

// import loginUser from 'app/api/methods/loginUser';
import * as authActions from './authActions';
import * as userActions from './userActions';
import { queryApi } from '../../api/queryApi';

import { OTP_GENERATE, OTP_CHALLENGE, SIGNUP, GET_CITY } from '../../api/APIConstants';
import * as types from './types';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');

export function* authSaga() {
  yield takeEvery(types.OTP_REQUEST, otpRequest);
  yield takeEvery(types.OTP_CHALLENGE_REQUEST, otpChallenge);
  yield takeEvery(types.GET_CITY, getCity);
}


function* getCity(action) {
  try {
    console.log("body", action);

    const res = yield call(queryApi, {
      endpoint: GET_CITY,
      method: 'GET',
      // body: {
      //   otp: action.payload.otp,
      //   session_id: action.payload.session_id,
      //   mobile_no: action.payload.mobile_no
      // },
    });


    let encryptData = aesEcryptionDecryption.decryptData(res);
    let data = JSON.parse(encryptData)

    console.log("data", data);
    yield put(userActions.setCity(data));
    // if (otpChallengeResponse.status === 'SUCCESS') {
    //   try {
    //     yield put(userActions.signupSuccess(otpChallengeResponse));
    //   } catch (err) {
    //   }
    // } else {
    //   // yield put(authActions.otpFailed(otpChallengeResponse));
    // }
  } catch (err) {
    // yield put(authActions.authFailed());
  }
}



// our worker saga that check access validation
function* checkValidation(action) {
  try {
    const res = yield call(queryApi, {
      endpoint: AUTH,
      method: 'POST',
      body: {
        mobile_n: action.payload.mobile_no,
      },
    });
    // {"error": "no missing"}
    // {"Status":"Success","Details":"ed49a1e9-a300-465e-b2df-a03e2d8afec7"}
    // const response = {
    //   success: true,
    //   data: {id: res.userId, token: res.title},
    // };
    yield put(authActions.onAuthResponse(response.data));
  } catch (err) {
    yield put(authActions.authFailed());
  }
}

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
function* otpChallenge(action) {
  try {
    console.log("body", action);

    const res = yield call(queryApi, {
      endpoint: OTP_CHALLENGE,
      method: 'POST',
      body: {
        otp: action.payload.otp,
        session_id: action.payload.session_id,
        mobile_no: action.payload.mobile_no
      },
    });

   
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let otpChallengeResponse = JSON.parse(encryptData)

    console.log("otpChallengeResponse", otpChallengeResponse);

    if (otpChallengeResponse.status === 'SUCCESS') {
      try {
        yield put(userActions.signupSuccess(otpChallengeResponse));
      } catch (err) {
      }
    } else {
      // yield put(authActions.otpFailed(otpChallengeResponse));
    }
  } catch (err) {
    // yield put(authActions.authFailed());
  }
}
function* signup(action) {
  try {
    const res = yield call(queryApi, {
      endpoint: SIGNUP,
      method: 'POST',
      body: {
        mobile: action,
      },
    });
    if (res.Status) {
      // yield put(authActions.onOTPResponse(res.Details));
    } else {
      // yield put(authActions.authFailed());
    }
  } catch (err) {
    // yield put(authActions.authFailed());
  }
}
