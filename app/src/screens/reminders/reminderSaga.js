import { put, call, select, takeEvery } from 'redux-saga/effects';
import { queryApi } from '../../api/queryApi';
import { REMINDER_GET_CATEGORY, GET_MEDICINE_FORM, GET_MEDICINE_NAME, GET_MEDICINE_FOR, SAVE_MEDICINE_REMINDER } from '../../api/APIConstants';
import * as types from '../startup/types';
import * as reminderActions from './reminderActions';
var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');


export function* reminderSaga() {
  yield takeEvery(types.REMINDER_CATEGORY_GET, reminderCategory);
  yield takeEvery(types.GET_MEDICINE_FORM, medicineForm);
  yield takeEvery(types.GET_MEDICINE_NAME, getMedicineName);
  yield takeEvery(types.GET_MEDICINE_FOR, getMedicineFor);
  yield takeEvery(types.SET_MEDICINE_REMINDER, setMedicineReminder);
  yield takeEvery(types.SET_REMINDER, setReminder);

}

function* getMedicineFor(data) {
  try {
    let medicineForm = data.medicineFor
    let text = 'null';
    if (data.text != undefined) {
      text = data.text;
    }
    const res = yield call(queryApi, {
      endpoint: GET_MEDICINE_FOR + '/' + text,// + medicineForm, TBD later 
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(reminderActions.setMedicineFor(result));


  } catch (err) {


  }
}


function* getMedicineName(data) {
  try {
    let medicineForm = data.medicineCategory
    let text = 'null';
    if (data.text != undefined) {
      text = data.text;
    }
    const res = yield call(queryApi, {
      endpoint: GET_MEDICINE_NAME + '/' + medicineForm + '/' + text,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(reminderActions.setMedicineName(result));


  } catch (err) {


  }
}


function* medicineForm(data) {
  try {
    const res = yield call(queryApi, {
      endpoint: GET_MEDICINE_FORM,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(reminderActions.setMedicineForm(result));


  } catch (err) {


  }
}


function* setReminder(data) {
  try {
    //let _dayx = data.day.toISOString().slice(0, 10);

    let _d = data._day.slice(0, 15);
    _d = _d.split(" ");
    
    let _dat = _d[1] + " " + _d[2] + " " + _d[3];
    const d = new Date(_dat);

    let _d2 = data._da.split(":");

    d.setHours(_d2[0]);
    d.setMinutes(_d2[1]);
    d.setSeconds(_d2[2]);

    let _unixTime = d.getTime();

    
    //let _day = data.day.toISOString().slice(0, 10);
    //let _time = data.time.toLocaleTimeString('it-IT');
    //var newDate = new Date(_day + 'T' + _time);
    //let _unixTime = newDate.getTime();
    
    let _data = {
      "name": data.name,
      "type": data.reminderType,
      "date": Math.floor(_unixTime / 1000),
      "users_id": data.userId
    }
    const res = yield call(queryApi, {
      endpoint: SAVE_MEDICINE_REMINDER,
      method: 'POST-NOJSON',
      body: _data
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(reminderActions.setReminderComplte(result));


  } catch (err) {


  }
}


function* setMedicineReminder(data) {
  try {
    let _data = {
      "what_form_medicine": data.medicineCategory,
      "medicine_name": data.medicineName,
      "what_are_you_taking_for": data.medicineFor,
      "medicine_frequency": data.frequency,
      "medicine_times": [data._time, data._time2, data._time3],
      "type": "Medicine",
      "users_id": data.userId
    }

    const res = yield call(queryApi, {
      endpoint: SAVE_MEDICINE_REMINDER,
      method: 'POST-NOJSON',
      body: _data
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    yield put(reminderActions.setMedicineFormComplte(result));


  } catch (err) {

 
  }
}



function* reminderCategory(data) {
  try {

    const res = yield call(queryApi, {
      endpoint: REMINDER_GET_CATEGORY,
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);

    
    yield put(reminderActions.setCategoryData(result));


  } catch (err) {


  }
}


