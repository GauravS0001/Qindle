/*
 * Reducer actions related with onboarding
 */
import * as types from '../startup/types';

export function getCommunity(response) {
  return {
    type: types.GET_COMMUNITY2,
    response,
    // errorResponse: response,
  };
}

export function setUserCommunity(response) {
  return {
    type: types.SET_USER_COMMUNITY,
    response,
    // errorResponse: response,
  };
}

export function setCommunityCategory(response) {
  return {
    type: types.SET_COMMUNITY_CATEGORY,
    response,
    // errorResponse: response,
  };
}


export function setCommunityHash(response) {
  return {
    type: types.SET_COMMUNITY_HASH,
    response,
    // errorResponse: response,
  };
}


export function setCommunityModerationData(response) {
  return {
    type: types.SET_COMMUNITY_MODERRATION_DATA,
    response,
    // errorResponse: response,
  };
}
