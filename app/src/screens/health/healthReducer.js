import { act } from 'react-test-renderer';
import strings from '../../../res/strings';
import createReducer from '../../lib/createReducer';
import * as types from '../startup/types';

const initialState = {
  upcomingSchedule: [],
  topSpecialist: [],
  popularHealthIssue: [],
  yourHealthIssue: [],
  famousDoctor: [],
  nearYou: [],
  doctorBySpeciality: [],
  doctorSchedule: [],
  doctorScheduleForm: false,
  doctorSlotListFilled: false,
  doctorDetails: [],
  userUpcomingSchedule: [],
  saveProgress: false,
  userMedicalData: [],
  userMedicalDashboard: []
};


const healthReducer = createReducer(initialState, {

  [types.SET_USER_MEDICAL_DASHBOARD](state, action) {
    let newState = {
      ...state,
      userMedicalDashboard: action.response
    };
    return newState;
  },
  [types.SET_USER_MEDICAL_DATA](state, action) {
    let newState = {
      ...state,
      userMedicalData: action.response
    };
    return newState;
  },
  [types.SET_SAVE_PROGRESS](state, action) {
    let newState = {
      ...state,
      saveProgress: action.response
    };
    return newState;
  },
  [types.SET_USER_ALL_SCHEDULE](state, action) {
    let newState = {
      ...state,
      userUpcomingSchedule: action.response
    };
    return newState;
  },


  [types.SET_DOCTOR_DETAIL](state, action) {
    let newState = {
      ...state,
      doctorDetails: action.response
    };
    return newState;
  },

  [types.RESET_DOCTOR_SCHEDULE](state, action) {
    let newState = {
      ...state,
      doctorSlotListFilled: false
    };
    return newState;
  },
  [types.RESET_UPCOMING_SCHEDULE](state, action) {
    let newState = {
      ...state,
      doctorScheduleForm: false
    };
    return newState;
  },

  [types.SET_UPCOMING_SCHEDULE](state, action) {
    let newState = {
      ...state,
      upcomingSchedule: action.response,
      doctorScheduleForm: true
    };
    return newState;
  },

  [types.SET_DOCTOR_SCHEDULE](state, action) {
    let newState = {
      ...state,
      doctorSchedule: action.response,
      doctorSlotListFilled: true
    };
    return newState;
  },

  [types.SET_DOCTOR_BY_SPECIALITY](state, action) {
    let newState = {
      ...state,
      doctorBySpeciality: action.response
    };
    return newState;
  },
  [types.SET_DOCTOR_UPCOMMING_SCHEDULE](state, action) {
    let newState = {
      ...state,
      upcomingSchedule: action.response
    };
    return newState;
  },

  [types.RESET_DOCTOR_TOP_SPECIALIST](state, action) {
    let newState = {
      ...state,
      topSpecialist: []
    };
    return newState;
  },

  [types.SET_DOCTOR_TOP_SPECIALIST](state, action) {
    let data = [...state.topSpecialist, ...action.response];
    let newState = {
      ...state,
      topSpecialist: data
    };
    return newState;
  },
  [types.SET_DOCTOR_POPULAT_HEALTH_ISSUE](state, action) {
    let data = [...state.popularHealthIssue, ...action.response];
    let newState = {
      ...state,
      popularHealthIssue: data
    };
    return newState;
  },
  [types.SET_DOCTOR_YOUR_HEALTH_ISSUE](state, action) {
    let newState = {
      ...state,
      yourHealthIssue: action.response
    };
    return newState;
  },
  [types.SET_DOCTOR_FAMOUS_DOCTOR](state, action) {
    let newState = {
      ...state,
      famousDoctor: action.response
    };
    return newState;
  },
  [types.SET_DOCTOR_NEAR_YOU](state, action) {
    let newState = {
      ...state,
      nearYou: action.response
    };
    return newState;
  },


});

export default healthReducer;
