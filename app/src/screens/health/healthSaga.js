import { put, call, select, takeEvery } from 'redux-saga/effects';
import { queryApi } from '../../api/queryApi';
import { DOCTOR_UPCOMMING_SCHEDULE, DOCTOR_TOP_SPECIALIST, DOCTOR_POPULAT_HEALTH_ISSUE, DOCTOR_YOUR_HEALTH_ISSUE, DOCTOR_FAMOUS_DOCTOR, DOCTOR_NEAR_YOU, GET_DOCTOR_BY_SPECIALITY, GET_DOCTOR_SCHEDULE, CREATE_DOCTOR_BOOKING, GET_DOCTOR_DETAIL, GET_USER_ALL_SCHEDULE, BASE_URL, GET_USER_MEDICAL_DASHBOARD } from '../../api/APIConstants';
import * as types from '../startup/types';
import * as healthActions from './healthActions';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');
import { Alert } from 'react-native';

export function* healthSaga() {
  yield takeEvery(types.DOCTOR_UPCOMMING_SCHEDULE, upcomingSchedule);
  yield takeEvery(types.DOCTOR_TOP_SPECIALIST, topSpecialist);
  yield takeEvery(types.DOCTOR_POPULAT_HEALTH_ISSUE, popularHealthIssue);
  yield takeEvery(types.DOCTOR_YOUR_HEALTH_ISSUE, yourHealthIssue);
  yield takeEvery(types.DOCTOR_FAMOUS_DOCTOR, famousDoctor);
  yield takeEvery(types.DOCTOR_NEAR_YOU, nearYou);
  yield takeEvery(types.GET_DOCTOR_BY_SPECIALITY, doctorBySpeciality);
  yield takeEvery(types.GET_DOCTOR_SCHEDULE, doctorSchedule);
  yield takeEvery(types.CREATE_DOCTOR_BOOKING_2, createDoctorBooking);
  yield takeEvery(types.GET_DOCTOR_DETAIL, doctorDetails);
  yield takeEvery(types.GET_USER_ALL_SCHEDULE, userAllSchedule);
  yield takeEvery(types.SAVE_USER_MEDICAL_DATA, saveUserMedicalData);
  yield takeEvery(types.GET_USER_MEDICAL_DATA, getUserMedicalData);
  yield takeEvery(types.GET_USER_MEDICAL_DASHBOARD, getUserMedicalDashboard);


}
function* getUserMedicalDashboard(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: GET_USER_MEDICAL_DASHBOARD + '/' + data.userId,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(healthActions.setUserMedicalDashboard(result));
  } catch (err) {

  }
}

function* getUserMedicalData(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: BASE_URL + data.endpoint + '/' + data.userId,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(healthActions.setUserMedicalData(result));
  } catch (err) {

  }
}


function* saveUserMedicalData(data) {
  try {
    
    yield put(healthActions.setProgress(true));

    const res = yield call(queryApi, {
      endpoint: BASE_URL + data.endpoint,
      method: 'POST-NOAES',
      body: data.data
    });
    console.log('res', res)
    Alert.alert('Data:', JSON.stringify(res));
    // let encryptData = aesEcryptionDecryption.decryptData(res);
    // let result = JSON.parse(encryptData);
    yield put(healthActions.setProgress(false));
  } catch (err) {
    Alert.alert('ERROR:', JSON.stringify(err));
  }
}

function* userAllSchedule(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: GET_USER_ALL_SCHEDULE + '/' + data.userId,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(healthActions.setUserAllSchedule(result));
  } catch (err) {

  }
}


function* createDoctorBooking(data) {
  try {

    /*let _data =
    {
      "date": data._unixTime,
      "fees": "1234",
      "doctorId": data._doctorId,
      "patientname": data.name,
      "mobilenumber": data.mobile,
      "emergency_contact": data.emergenyContact,
      "age": data.age,
      "userid": data.userId,
      'slot': data._slot,
      'type': data._type
    }*/

    // console.log('data', data.data)
    const res = yield call(queryApi, {
      endpoint: CREATE_DOCTOR_BOOKING,
      method: 'POST-NOJSON',
      body: data.data
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(healthActions.setUpcomingBooking(result));

  } catch (err) {
    //   Alert.alert('ERROR:', JSON.stringify(err));

  }
}

function* doctorDetails(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: GET_DOCTOR_DETAIL + '/' + data._doctorId,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);

    yield put(healthActions.setDoctorDetailse(result));
  } catch (err) {

  }
}

function* doctorSchedule(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: GET_DOCTOR_SCHEDULE + '/6193e9374e6fc50fe4557b99',// + data.doctorId,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);

    yield put(healthActions.setDoctorSchedule(result));
  } catch (err) {

  }
}

function* doctorBySpeciality(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: GET_DOCTOR_BY_SPECIALITY + '/' + data._id,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(healthActions.setDoctorBySpeciality(result));
  } catch (err) {

  }
}

function* upcomingSchedule(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: DOCTOR_UPCOMMING_SCHEDULE + '/' + data.userId,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    console.log("upcoming result", result);
    yield put(healthActions.setUpcomingSchedule(result));
  } catch (err) {

  }
}

function* topSpecialist(data) {
  try {
    data.currentTotal = data.currentTotal == undefined ? 0 : data.currentTotal
    const res = yield call(queryApi, {
      endpoint: DOCTOR_TOP_SPECIALIST + '/' + data.currentTotal,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(healthActions.setTopSpecialist(result));
  } catch (err) {

  }
}

function* popularHealthIssue(data) {
  try {
    data.currentTotal = data.currentTotal == undefined ? 0 : data.currentTotal
    const res = yield call(queryApi, {
      endpoint: DOCTOR_POPULAT_HEALTH_ISSUE + '/' + data.currentTotal,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);

    yield put(healthActions.setPopularHealthIssue(result));
  } catch (err) {

  }
}

function* yourHealthIssue(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: DOCTOR_YOUR_HEALTH_ISSUE + '/0',
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);

    yield put(healthActions.setYourHealthIssue(result));
  } catch (err) {

  }
}

function* famousDoctor(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: DOCTOR_FAMOUS_DOCTOR,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(healthActions.setFamousDoctor(result));
  } catch (err) {

  }
}

function* nearYou(data) {
  try {

    const res = yield call(queryApi, {
      endpoint: DOCTOR_NEAR_YOU + '/' + data.cityId,
      method: 'GET',
    });

    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(healthActions.setNearYou(result));
  } catch (err) {

  }
}
