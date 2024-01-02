import { SET_MED_CAT, SET_MED_NAME, SET_MED_REASON, SET_MED_INTERVAL, SET_REMINDERS_USERS } from './ACTION_MED';

const initialState = {
  medicineCategory: '',
  medicineName: '',
  medicineReason: '',
  medicineInterval: '',
  
};

const REDUCER_MED = (state = initialState, action) => {
  switch (action.type) {
    case SET_MED_CAT:
      return { ...state, medicineCategory: action.payload };
    case SET_MED_NAME:
      return { ...state, medicineName: action.payload };
    case SET_MED_REASON:
      return { ...state, medicineReason: action.payload };
    case SET_MED_INTERVAL:
      return { ...state, medicineInterval: action.payload };
    default:
      return state;
  }
};

export default REDUCER_MED;