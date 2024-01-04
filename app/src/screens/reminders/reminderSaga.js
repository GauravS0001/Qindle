import { put, call, select, takeEvery } from 'redux-saga/effects';
import { queryApi } from '../../api/queryApi';
import { REMINDER_GET_CATEGORY, GET_MEDICINE_FORM, GET_MEDICINE_NAME, GET_MEDICINE_FOR, SAVE_MEDICINE_REMINDER } from '../../api/APIConstants';
import * as types from '../startup/types';
import * as reminderActions from './reminderActions';
import { useSelector } from 'react-redux';
import {setReminderUsers} from './reminderActions'
import { camelCase } from 'lodash';

var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');

//const _user = useSelector(state => state.user.userDetails._id);


export function* reminderSaga() {
  yield takeEvery(types.REMINDER_CATEGORY_GET, reminderCategory);
  yield takeEvery(types.GET_MEDICINE_FORM, medicineForm);
  yield takeEvery(types.GET_MEDICINE_NAME, getMedicineName);
  yield takeEvery(types.GET_MEDICINE_FOR, getMedicineFor);
  yield takeEvery(types.SET_MEDICINE_REMINDER, setMedicineReminder);
  yield takeEvery(types.SET_REMINDER, setReminder);
  yield takeEvery(types.SET_USER_REMINDERS, fetchRemindersForUserId)
  yield takeEvery(types.DELETE_REMINDERS, deleteReminder)
  yield takeEvery(types.GET_SINGLE_REMINDER_DETAILS_FUNCTION, fetchReminderById)

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

    let _data = {
      "name": data.name,
      "type": data.reminderType,
      "date": Math.floor(_unixTime / 1000),
      "users_id": data.userId,
      "time": data.time
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
    yield put(reminderActions.setMedicineFormComplte(res));


  } catch (err) {

 
  }
}



function* reminderCategory(data) {
  try {

    const res = yield call(queryApi, {
      endpoint: 'http://192.168.1.4/api/getreminderoptions',
      method: 'GET',
    });
    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);
    
    console.log(result)
    
    yield put(reminderActions.setCategoryData(result));


  } catch (err) {
    
    

  }
}

function* fetchRemindersForUserId(action) {

  const userId  = action.payload; 
 
  try {
     
    const res = yield call(queryApi, {
      endpoint: `http://192.168.1.4/api/getRemindersByUserId/${userId}`,
      method: 'POST',    
    });

    let encryptData = aesEcryptionDecryption.decryptData(res);  
    let result = JSON.parse(encryptData);

    yield put(setReminderUsers(result));

  } catch (err) {
    
    console.error('Error fetching user data:', err);
  }
}


function* deleteReminder(action) {

  const reminderId  = action.payload; 
 
  try {
     
    const res = yield call(queryApi, {
      endpoint: `http://192.168.1.4/api/deletereminders/${reminderId}`,
      method: 'DELETE',    
    });

  
    let decryptData = aesEcryptionDecryption.decryptData(res);  
    let result = JSON.parse(decryptData);

    yield put(reminderActions.setDeleteReminder(result));


  } catch (err) {
    
    console.error('Error deleting reminder:', err);
  }
}

function* fetchReminderById(action) {
  const reminderId = action.payload;

  try {
    const res = yield call(queryApi, {
      endpoint: `http://192.168.1.4/api/getreminderdetails/${reminderId}`,
      method: 'GET', // Assuming you want to use GET method for fetching a specific reminder
    });

    let encryptData = aesEcryptionDecryption.decryptData(res);
    let result = JSON.parse(encryptData);

    yield put(reminderActions.getSingleReminderDetails(result));

  } catch (err) {
    console.error('Error fetching reminder details:', err);
  }
}


