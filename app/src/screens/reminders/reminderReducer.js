import { act } from 'react-test-renderer';
import strings from '../../../res/strings';
import createReducer from '../../lib/createReducer';
import * as types from '../startup/types';

const initialState = {
  reminderCategory: '',
  medicineForm: [],
  medicineName: [],
  medicineFor: [],//need api
  medicineFormComplete: false,
  reminderFormComplete: false,
  reinderNotificationSet: false, //FOR notification
  reinderNotificationData: [],//FOR notification,
  reinderNotificationShowCount: 0,//FOR notification,
  userReminder: []
};

const reminderReducer = createReducer(initialState, {


  [types.RESET_NOTIFICATION](state, action) {
    let newState = {
      ...state,
      reinderNotificationData: [],
      reinderNotificationSet: false
    };
    return newState;
  },

  [types.RESET_NOTIFICATION_COUNT](state, action) {
    let newState = {
      ...state,
      reinderNotificationShowCount: 0
    };
    return newState;
  },


  [types.SET_NOTIFICATION](state, action) {
    let _data = state.reinderNotificationData;
    let data = []
    _data.forEach(element => {
      data.push(element);
    });
    data.push(action);

    let len = state.reinderNotificationShowCount;
    if (state.reinderNotificationShowCount != '9 +') {
      len = state.reinderNotificationShowCount + 1;
      len = len > 9 ? '9 +' : len;
    }
    let newState = {
      ...state,
      reinderNotificationSet: true,
      reinderNotificationShowCount: len,
      reinderNotificationData: data,
    };
    return newState;
  },

  [types.REMINDER_CATEGORY_SET](state, action) {
    let newState = {
      ...state,
      reminderCategory: action.response,
    };
    return newState;
  },

  [types.SET_MEDICINE_FORM](state, action) {
    let newState = {
      ...state,
      medicineForm: action.response,
    };
    return newState;
  },

  [types.SET_MEDICINE_NAME](state, action) {
    let newState = {
      ...state,
      medicineName: action.response,
    };
    return newState;
  },

  [types.SET_MEDICINE_FOR](state, action) {
    let newState = {
      ...state,
      medicineFor: action.response,
    };
    return newState;
  },

  [types.SET_MEDICINE_FORM_COMPLETE](state, action) {
    let newState = {
      ...state,
      medicineFormComplete: true,
    };
    return newState;
  },


  [types.RESET_MEDICINE_REMINDER_FORM](state, action) {
    let newState = {
      ...state,
      medicineFormComplete: false,
    };
    return newState;
  },


  [types.SET_REMINDER_FORM_COMPLETE](state, action) {
    let newState = {
      ...state,
      reminderFormComplete: true,
    };
    return newState;
  },


  [types.RESET_REMINDER_FORM_COMPLETE](state, action) {
    let newState = {
      ...state,
      reminderFormComplete: false,
    };
    return newState;
  },


  [types.SET_REMINDERS_USERS ](state, action) {
    console.log('SET_REMINDERS_USERS', action.payload)
    let newState = {
      ...state,
      userReminder: action.response,
    };
    return newState;
  },


});

export default reminderReducer;
