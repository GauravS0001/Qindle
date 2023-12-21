/*
 * Reducer actions related with user
 */
import * as types from './types';

export function signupSuccess(response) {
  return {
    type: types.SIGNUP_SUCCESS_RESPONSE,
    response,
    // errorResponse: response,
  };
}

export function setCity(response) {
  console.log('res', response)
  return {
    type: types.GET_CITY_SUCCESS,
    response,
    // errorResponse: response,
  };
}
