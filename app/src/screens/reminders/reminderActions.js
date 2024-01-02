/*
 * Reducer actions related with onboarding
 */
import * as types from '../startup/types';

export function setCategoryData(response) {
  return {
    type: types.REMINDER_CATEGORY_SET,
    response,
  };
}

export function setMedicineForm(response) {
  return {
    type: types.SET_MEDICINE_FORM,
    response,
  };
}

export function setMedicineName(response) {
  return {
    type: types.SET_MEDICINE_NAME,
    response,
  };
}

export function setMedicineFor(response) {
  return {
    type: types.SET_MEDICINE_FOR,
    response,
  };
}

export function setMedicineFormComplte(response) {
  return {
    type: types.SET_MEDICINE_FORM_COMPLETE,
    response,
  };
}

export function setReminderComplte(response) {
  return {
    type: types.SET_REMINDER_FORM_COMPLETE,
    response,
  };
}

export const setReminderUsers = (response) => ({
  type: types.SET_REMINDERS_USERS,
  response,
});
