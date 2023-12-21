/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestAuth(id, token) {
  return {
    type: types.AUTH_REQUEST,
    id,
    token,
  };
}

export function authFailed() {
  return {
    type: types.AUTH_FAILED,
  };
}

export function onAuthResponse(response) {
  return {
    type: types.AUTH_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}

export function onOTPResponse(mobile_no, session_id) {
  return {
    type: types.OTP_RESPONSE,
    session_id: session_id,
    mobile_no: mobile_no,
  };
}
export function otpFailed(errorRes) {
  return {
    type: types.OTP_FAILED,
    errorRes,
    // errorResponse: response,
  };
}

export function storeHash(hash) {
  return {
    type: types.HASH,
    hash,
    // errorResponse: response,
  };
}
