import {SET_CATEGORY_AND_REMINDER_UPDATE} from '../../../src/screens/startup/types'

const initialState = {
    category: null,
    reminderId: null,
    dte: null,
  };

  const RemUpdtReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CATEGORY_AND_REMINDER_UPDATE:
        return {
          ...state,
          category: action.payload.category,
          reminderId: action.payload.reminderId,
          dte: action.payload.dte,
        };
      default:
        return state;
    }
  };

  export default RemUpdtReducer