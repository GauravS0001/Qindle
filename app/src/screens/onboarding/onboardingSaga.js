import { put, call, select, takeEvery } from 'redux-saga/effects';
import { queryApi } from '../../api/queryApi';
import { ONBOARDING_GET_LATEST_URL, ONBOARDING_SAVE_USERDATA } from '../../api/APIConstants';
import * as types from '../startup/types';
import * as onboardingActions from './onboardingActions';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');


export function* onboardingSaga() {
  yield takeEvery(types.ONBOARDING_GET_LATEST_REQUEST, onboardingGetLatest);
  yield takeEvery(types.ONBOARDING_SAVE, saveOnboarding);
  // yield takeEvery(types.ONBOARDING_GET_COMMUNITY, onboardingGetLatest);
  yield takeEvery(types.ONBOARDING_UPDATE_USER_ANSWER_LIST, onboardingUdateUserAnswerList);


}

function* onboardingUdateUserAnswerList(data) {
  try {
    let community = [];
    data.payload.onboardingSelectedCommunities.forEach(element => {
      community.push(element._id);
    });

    let diseases = [];
    data.payload.onboardingSelectedDiseases.forEach(element => {
      diseases.push(element._id);
    });

    let hobbies = [];
    data.payload.onboardingSelectedHobbies.forEach(element => {
      hobbies.push(element._id);
    });

    //@todo to get access to id directly on change of picker 
    let cityId = "";
    if (data.payload.onboardingQuestionAnswerList[4] != undefined && data.payload.onboardingQuestionAnswerList[4][1] != undefined) {
      data.payload.onboardingQuestionsList[4].options.forEach(element => {
        if (element.name == data.payload.onboardingQuestionAnswerList[4][1].value) {
          cityId = element._id;
        }
      });
    }



    let sData =
    {
      "name": data.payload.onboardingQuestionAnswerList[1] != undefined && data.payload.onboardingQuestionAnswerList[1][1] != undefined ? data.payload.onboardingQuestionAnswerList[1][1].value : '',
      "gender": data.payload.onboardingQuestionAnswerList[3] != undefined && data.payload.onboardingQuestionAnswerList[3][1] != undefined ? data.payload.onboardingQuestionAnswerList[3][1].value : "",
      "year_birth": data.payload.onboardingQuestionAnswerList[2] != undefined && data.payload.onboardingQuestionAnswerList[2][1] != undefined ? data.payload.onboardingQuestionAnswerList[2][1].value : "",//added new
      "emergency_contact": data.payload.onboardingQuestionAnswerList[8] != undefined && data.payload.onboardingQuestionAnswerList[8][1] != undefined ? data.payload.onboardingQuestionAnswerList[8][1].value : "",
      "emergency_contact_relation": data.payload.onboardingQuestionAnswerList[9] != undefined && data.payload.onboardingQuestionAnswerList[9][1] != undefined ? data.payload.onboardingQuestionAnswerList[9][1].value : "",
      "friends": [],// ?
      "userId": data.userId,
      "city": cityId,
      "interest_hobbies": hobbies,
      "existing_medical_concerns": diseases,
      "communities": community
    }

    //sData = { "name": "Deepak", "gender": "M", "emergency_contact": "9823144332", "emergency_contact_relation": "Friend", "friends": ["60bf0b345c905753b0f539fb", "60c02234420a19524c360e98", "60c41a340ed7b23c70bfb537", "60c41ca62edb5505a0f6ac2c"], "userId": "60a67cf6019bfa1da8da6dc0", "city": "60a4a9077ef01b35e49062f6", "interest_hobbies": ["60a4a3dc7ef01b35e48fad17", "60a4a3dc7ef01b35e48fad18", "60a4a3dc7ef01b35e48fad19"], "existing_medical_concerns": ["60a4a5a27ef01b35e48fad21", "60a4a5a27ef01b35e48fad22", "60a4a5a27ef01b35e48fad23"], "communities": ["60c42b3840c47543d8092dad", "60c42bde279a9c2e7415013f", "60c42be9279a9c2e74150140"] }


    const res = yield call(queryApi, {
      endpoint: ONBOARDING_SAVE_USERDATA,
      method: 'POST-NOJSON',
      body: sData
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData)
    yield put(onboardingActions.triggerSave());


  } catch (err) {

  }
}


function* onboardingGetLatest() {
  try {
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
  } catch (err) {
    //   yield put(authActions.otpFailed('OTP requset failed'));
    // throw new Error(err);
  }
}


function* saveOnboarding(data) {
  try {
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
  } catch (err) {
    //   yield put(authActions.otpFailed('OTP requset failed'));
    // throw new Error(err);
  }
}



