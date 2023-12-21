/* Redux saga class
 * checking token is valid or not
 * requires access-token.
 */
import { put, call, select, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import * as serviceActions from './serviceActions';
import { queryApi } from '../../api/queryApi';
import { GET_SERVICES, GET_CATEGORY_PRODUCT, GET_SERVICE_DETAILS, GET_CHILD_SERVICES, SEARCH_PRODUCT, GET_SERVICE_OPTIONS } from '../../api/APIConstants';
import * as types from './../startup/types';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');

export function* serviceSaga() {
  yield takeEvery(types.GET_SERVICES_CATEGORY, getCategory);

  // yield takeEvery(types.GET_SHOP_CATEGORY_DATA, getCategoryData);
  yield takeEvery(types.GET_SERVICES_DETAIL, getDetailsData);
  yield takeEvery(types.GET_SERVICE_OPTIONS, getDetailsOptions);



  // yield takeEvery(types.GET_SHOP_CHILD_CATEGORY_DATA, getChildCategory);
  yield takeEvery(types.GET_SERVICES_CHILD2_CATEGORY_DATA, getChildCategory2);
  // yield takeEvery(types.GET_SEARCH_PRODUCTS, getSearchData);


}


function* getCategory(action) {
  try {
    console.log('_______________________________________')
    const res = yield call(queryApi, {
      endpoint: GET_SERVICES,
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
    yield put(serviceActions.setServiceCategory(data));
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


function* getChildCategory2(action) {
  try {
    const res = yield call(queryApi, {
      endpoint: GET_CHILD_SERVICES + '/' + action._id,
      method: 'GET',
      // body: {
      //   otp: action.payload.otp,
      //   session_id: action.payload.session_id,
      //   mobile_no: action.payload.mobile_no
      // },
    });

    let encryptData = aesEcryptionDecryption.decryptData(res);
    let data = JSON.parse(encryptData)
    yield put(serviceActions.setServiceCategoryChild2(data));

  } catch (err) {
    // yield put(authActions.authFailed());
  }
}


function* getDetailsOptions(action) {
  try {
    const res = yield call(queryApi, {
      endpoint: GET_SERVICE_OPTIONS + '/' + action._id,
      method: 'GET',
      // body: {
      //   otp: action.payload.otp,
      //   session_id: action.payload.session_id,
      //   mobile_no: action.payload.mobile_no
      // },
    });

    //let encryptData = aesEcryptionDecryption.decryptData(res);
    // let data = JSON.parse(encryptData)

    console.log('datadatadatadata', res)
    yield put(serviceActions.setServiceOptionsData(res));

  } catch (err) {
    // yield put(authActions.authFailed());
  }
}



function* getDetailsData(action) {
  try {
    yield put(serviceActions.resetDetailsData());
    const res = yield call(queryApi, {
      endpoint: GET_SERVICE_DETAILS + '/' + action._id,
      method: 'GET',
      // body: {
      //   otp: action.payload.otp,
      //   session_id: action.payload.session_id,
      //   mobile_no: action.payload.mobile_no
      // },
    });

    let encryptData = aesEcryptionDecryption.decryptData(res);
    let data = JSON.parse(encryptData)
    data = data && data[0] ? data[0] : {}
    yield put(serviceActions.setServiceDetailsData(data));

  } catch (err) {
    // yield put(authActions.authFailed());
  }
}







function* getSearchData(action) {
  try {
    const res = yield call(queryApi, {
      endpoint: SEARCH_PRODUCT + '/' + action.text,
      method: 'GET',
    });

    console.log('res', res);
    yield put(serviceActions.setSearchData(res));

  } catch (err) {
    // yield put(authActions.authFailed());
  }
}







function* getChildCategory(action) {
  try {
    const res = yield call(queryApi, {
      endpoint: GET_CHILD_CATEGORY + '/' + action._id,
      method: 'GET',
      // body: {
      //   otp: action.payload.otp,
      //   session_id: action.payload.session_id,
      //   mobile_no: action.payload.mobile_no
      // },
    });

    //let encryptData = aesEcryptionDecryption.decryptData(res);
    //let data = JSON.parse(res)

    yield put(serviceActions.setShopCategoryChild(res));

  } catch (err) {
    // yield put(authActions.authFailed());
  }
}


function* getCategoryData(action) {
  try {
    console.log('___________________action____________________', action)
    yield put(serviceActions.setActiveChildCategory(action._id));
    const res = yield call(queryApi, {
      endpoint: GET_CATEGORY_PRODUCT + '/' + action._id,
      method: 'GET',
      // body: {
      //   otp: action.payload.otp,
      //   session_id: action.payload.session_id,
      //   mobile_no: action.payload.mobile_no
      // },
    });


    console.log("data", res);

    //let encryptData = aesEcryptionDecryption.decryptData(res);
    //let data = JSON.parse(res)

    yield put(serviceActions.setShopCategoryData(res));


  } catch (err) {
    // yield put(authActions.authFailed());
  }
}



