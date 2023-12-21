/* Handles and check access-token validation
 */
import createReducer from '../../lib/createReducer';
import * as types from './types';

const initialState = {
  // isLoggedIn: false,
  didTryAutoLogin: false,
  session_id: null,
  mobile_no: null,
  hash: null,
  requestFailed: false,
  errorResponse: null,
};

const authReducer = createReducer(initialState, {
  [types.AUTH_REQUEST](state, action) {
    return {
      ...state,
      // token: action.token,
      //   username: action.username,
      //   password: action.password,
    };
  },
  [types.AUTH_LOADING_ENDED](state) {
    return {...state};
  },
  [types.AUTH_RESPONSE](state, action) {
    return {
      ...state,
      id: action.response.id,
      // isLoggedIn: true,
      token: action.response.token,
      didTryAutoLogin: true,
    };
  },
  [types.AUTH_FAILED](state) {
    return {
      ...initialState,
      didTryAutoLogin: true,
    };
  },
  [types.SET_DID_TRY_AL](state) {
    return {
      ...initialState,
      didTryAutoLogin: true,
    };
  },
  [types.LOG_OUT](state) {
    return {
      ...initialState,
      //didTryAutoLogin: true,
    };
  },
  [types.OTP_RESPONSE](state, action) {
    let newState = {
      ...state,
      session_id: action.session_id,
      mobile_no: action.mobile_no,
    };
    return newState;
  },
  [types.OTP_FAILED](state, action) {
    let newState = {...state, errorResponse: action.errorRes};
    return newState;
  },
  [types.HASH](state, action) {
    let newState = {...state, hash: action.payload.hash};
    return newState;
  },
});
export default authReducer;
