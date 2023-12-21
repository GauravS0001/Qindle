/* Redux saga class
 * checking token is valid or not
 * requires access-token.
 */
import { put, call, select, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import * as shopActions from './shopActions';
import { queryApi } from '../../api/queryApi';
import { GET_CATEGORY, GET_CATEGORY_PRODUCT, GET_PRODUCT_DETAILS, GET_CHILD_CATEGORY, SEARCH_PRODUCT } from '../../api/APIConstants';
import * as types from './../startup/types';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');

export function* shopSaga() {
  yield takeEvery(types.GET_SHOP_CATEGORY, getCategory);
  yield takeEvery(types.GET_SHOP_CATEGORY_DATA, getCategoryData);
  yield takeEvery(types.GET_SHOP_DETAIL_DATA, getDetailsData);
  yield takeEvery(types.GET_SHOP_CHILD_CATEGORY_DATA, getChildCategory);
  yield takeEvery(types.GET_SHOP_CHILD2_CATEGORY_DATA, getChildCategory2);
  yield takeEvery(types.GET_SEARCH_PRODUCTS, getSearchData);

  
}
function* getSearchData(action) {
  try {
    const res = yield call(queryApi, {
      endpoint: SEARCH_PRODUCT+'/'+action.text,
      method: 'GET',
    });
   
    console.log('res', res);
    yield put(shopActions.setSearchData(res));
  
  } catch (err) {
    // yield put(authActions.authFailed());
  }
}





function* getCategory(action) {
  try {
    console.log('_______________________________________')
    const res = yield call(queryApi, {
      endpoint: GET_CATEGORY,
      method: 'GET',
      // body: {
      //   otp: action.payload.otp,
      //   session_id: action.payload.session_id,
      //   mobile_no: action.payload.mobile_no
      // },
    });


    //console.log("data", res);

    //let encryptData = aesEcryptionDecryption.decryptData(res);
    //let data = JSON.parse(res)
    let _data = []
    res.forEach(element => {
      //console.log('element', element.parent, typeof(element.parent))
      //if (element.parent == '1'){
        _data.push(element)
      //}
    });
    yield put(shopActions.setShopCategory(_data));
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

    yield put(shopActions.setShopCategoryChild2(res));

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

    yield put(shopActions.setShopCategoryChild(res));

  } catch (err) {
    // yield put(authActions.authFailed());
  }
}


function* getCategoryData(action) {
  try {
    console.log('___________________action____________________', action)
    yield put(shopActions.setActiveChildCategory(action._id));
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

    yield put(shopActions.setShopCategoryData(res));
   

  } catch (err) {
    // yield put(authActions.authFailed());
  }
}

function* getDetailsData(action) {
  try {
    console.log('___________________action22____________________', action)
    yield put(shopActions.setShopDetailsRest());
    const res = yield call(queryApi, {
      endpoint: GET_PRODUCT_DETAILS + '/' + action._id,
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

    yield put(shopActions.setShopDetailsData(res));

  } catch (err) {
    // yield put(authActions.authFailed());
  }
}

