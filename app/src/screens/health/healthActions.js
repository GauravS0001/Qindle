/*
 * Reducer actions related with health
 */
import * as types from '../startup/types';



export function setUserMedicalDashboard(response) {
  return {
    type: types.SET_USER_MEDICAL_DASHBOARD,
    response,
  };
}
export function setUserAllSchedule(response) {
  return {
    type: types.SET_USER_ALL_SCHEDULE,
    response,
  };
}

export function setProgress(response) {
  return {
    type: types.SET_SAVE_PROGRESS,
    response,
  };
}

export function setUserMedicalData(response) {
  return {
    type: types.SET_USER_MEDICAL_DATA,
    response,
  };
}


export function setDoctorDetailse(response) {
  return {
    type: types.SET_DOCTOR_DETAIL,
    response,
  };
}


export function setUpcomingBooking(response) {
  return {
    type: types.SET_UPCOMING_SCHEDULE,
    response,
  };
}

export function setDoctorSchedule(response) {
  return {
    type: types.SET_DOCTOR_SCHEDULE,
    response,
  };
}


export function setDoctorBySpeciality(response) {
  return {
    type: types.SET_DOCTOR_BY_SPECIALITY,
    response,
  };
}

export function setUpcomingSchedule(response) {
  return {
    type: types.SET_DOCTOR_UPCOMMING_SCHEDULE,
    response,
  };
}
export function setTopSpecialist(response) {
  return {
    type: types.SET_DOCTOR_TOP_SPECIALIST,
    response,
  };
}
export function setPopularHealthIssue(response) {
  return {
    type: types.SET_DOCTOR_POPULAT_HEALTH_ISSUE,
    response,
  };
}
export function setYourHealthIssue(response) {
  return {
    type: types.SET_DOCTOR_YOUR_HEALTH_ISSUE,
    response,
  };
}
export function setFamousDoctor(response) {
  return {
    type: types.SET_DOCTOR_FAMOUS_DOCTOR,
    response,
  };
}
export function setNearYou(response) {
  return {
    type: types.SET_DOCTOR_NEAR_YOU,
    response,
  };
}
