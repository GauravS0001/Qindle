/*
 * Reducer actions related with onboarding
 */
import * as types from '../startup/types';

export function getUserPost(data) {
  return {
    type: types.GET_USER_POST_RESPONSE_COMMUNITY,
    data
  };
}

export function updateUserPost(data) {
  return {
    type: types.UPDATE_USER_POST_COMMUNITY,
    data
  };
}
