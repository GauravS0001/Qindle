export const SET_MED_CAT = 'SET_MED_CAT';
export const SET_MED_NAME = 'SET_MED_NAME';
export const SET_MED_REASON = 'SET_MED_REASON';
export const SET_MED_INTERVAL = 'SET_MED_INTERVAL';
export const SET_REMINDERS_USERS = 'SET_REMINDERS_USERS';


export const setMedicineCategory = (category) => ({
  type: SET_MED_CAT,
  payload: category,
});

export const setMedicineName = (name) => ({
  type: SET_MED_NAME,
  payload: name,
});

export const setMedicineReason = (reason) => ({
  type: SET_MED_REASON,
  payload: reason,
});

export const setMedicineInterval = (intv) => ({
  type: SET_MED_INTERVAL,
  payload: intv,
});

