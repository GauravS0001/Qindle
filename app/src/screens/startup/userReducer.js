import { act } from 'react-test-renderer';
import createReducer from '../../lib/createReducer';
import * as types from './types';

const initialState = {
  isLoggedIn: false,
  userDetails: [],
  selectedCity: [],
  city: []
};

const userReducer = createReducer(initialState, {
  [types.SIGNUP_SUCCESS_RESPONSE](state, action) {
    return {
      ...state,
      isLoggedIn: true,
      userDetails: action.response,
    };
  },

  [types.SIGNOUT_SUCCESS](state, action) {
    return {
      ...initialState
    };
  },

  [types.GET_CITY_SUCCESS](state, action) {
    let data = []
    action.response.forEach(element => {
      data.push({ label: element.name, value: element._id })
    });
    return {
      ...state,
      city: data,
    };
  },

});
export default userReducer;
