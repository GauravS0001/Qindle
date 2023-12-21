/*
 * Reducer actions related with onboarding
 */
import * as types from '../startup/types';

export function setInitial(data) {
  return {
    type: types.UPDATE_POST_INITIALS,
    data
  };
}

export function setPostData(data) {
  return {
    type: types.UPDATE_TAG_FRIENDS,
    data,
  };
}

export function setPostDataCommunity(data) {
  return {
    type: types.UPDATE_TAG_COMMUNITIES,
    data,
  };
}

export function setPostDataLocation(data) {
  return {
    type: types.UPDATE_LOCATION,
    data,
  };
}

export function setPostCompleted(data) {
  return {
    type: types.POST_COMPLETED,
    data,
  };
}
