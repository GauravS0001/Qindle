/*
 * Reducer actions related with onboarding
 */
import * as types from '../startup/types';


export function updateLike(data) {
  return {
    type: types.UPDATE_POST_LIKE,
    data
  };
}

export function updateHeart(data) {
  return {
    type: types.UPDATE_POST_HEART,
    data
  };
}


export function updateComment(data) {
  return {
    type: types.UPDATE_POST_COMMENT,
    data
  };
}


export function removePostbyId(data) {
  return {
    type: types.REMOVE_POST_BY_ID,
    data
  };
}

export function updateUserPost(data) {
  return {
    type: types.UPDATE_USER_POST,
    data
  };
}

export function getUserPost(data) {
  return {
    type: types.GET_USER_POST_RESPONSE,
    data
  };
}


export function getUserPostAll(data) {
  return {
    type: types.GET_USER_POST_RESPONSE_ALL,
    data
  };
}



export function setUserCity(data) {
  return {
    type: types.SET_USER_CITY,
    data
  };
}

export function setUserFriend(data) {
  return {
    type: types.SET_USER_FRIEND,
    data
  };
}

